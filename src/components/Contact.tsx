import React, { useEffect, useMemo, useRef, useState } from "react";
import { translations, type Lang } from "../translations";
import { buildWhatsAppUrl } from "../lib/whatsapp";
import {
  trackFormError,
  trackFormSubmit,
  trackLeadStart,
  trackWhatsAppClick,
} from "../lib/analytics";

interface ContactProps {
  lang: Lang;
  selectedService?: string | null;
  selectedCase?: string | null;
  onClearSelectedService?: () => void;
  onClearSelectedCase?: () => void;
}

type ContactForm = {
  nombre: string;
  telefono: string;
  email: string;
  empresa: string;
  servicio: string;
  horario: string;
  mensaje: string;
};

const DEFAULT_FORM: ContactForm = {
  nombre: "",
  telefono: "",
  email: "",
  empresa: "",
  servicio: "",
  horario: "",
  mensaje: "",
};

type FieldName = keyof ContactForm;
type Errors = Partial<Record<FieldName, string>>;

/** Límites para no enviar cadenas desproporcionadas por WhatsApp o correo. */
const MAX_LENGTH: Record<FieldName, number> = {
  nombre: 80,
  telefono: 25,
  email: 120,
  empresa: 80,
  servicio: 120,
  horario: 60,
  mensaje: 1200,
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Códigos de los saltos de línea, que sí se conservan en el mensaje. */
const LF = 10;
const CR = 13;

/**
 * Sanitización básica: sustituye caracteres de control (conservando los saltos
 * de línea del mensaje), recorta espacios y limita la longitud.
 */
function clean(value: string, max: number): string {
  let out = "";

  for (let i = 0; i < value.length; i += 1) {
    const code = value.charCodeAt(i);
    const isControl = (code < 32 || code === 127) && code !== LF && code !== CR;
    out += isControl ? " " : value[i];
  }

  return out.trim().slice(0, max);
}

function validate(form: ContactForm): Errors {
  const errors: Errors = {};

  if (clean(form.nombre, MAX_LENGTH.nombre).length < 2) {
    errors.nombre = "Escribe tu nombre para saber cómo dirigirnos a ti.";
  }

  const phoneDigits = form.telefono.replace(/\D/g, "");
  if (phoneDigits.length < 7) {
    errors.telefono = "Necesitamos un teléfono válido para poder responderte.";
  }

  if (!EMAIL_RE.test(form.email.trim())) {
    errors.email = "Revisa el correo: parece que falta algo (ej: nombre@dominio.com).";
  }

  if (clean(form.mensaje, MAX_LENGTH.mensaje).length < 10) {
    errors.mensaje = "Cuéntanos brevemente qué necesitas, con una o dos frases basta.";
  }

  return errors;
}

const Contact: React.FC<ContactProps> = ({
  lang,
  selectedService,
  selectedCase,
  onClearSelectedService,
  onClearSelectedCase,
}) => {
  const t = translations[lang].contact;

  const [form, setForm] = useState<ContactForm>(DEFAULT_FORM);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lastPayload, setLastPayload] = useState("");

  /** Campo trampa: los bots lo rellenan, las personas no lo ven. */
  const [honeypot, setHoneypot] = useState("");
  const leadStarted = useRef(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const submitRef = useRef<HTMLButtonElement | null>(null);

  /**
   * Cuando el visitante elige un servicio o un caso en otra sección, el
   * formulario se rellena con ese contexto.
   *
   * Se ajusta durante el render (patrón recomendado por React para "estado
   * derivado de props") en lugar de dentro de un efecto: así no se provoca un
   * render en cascada ni un parpadeo con el valor anterior.
   */
  const [prevSelection, setPrevSelection] = useState({
    service: selectedService,
    case: selectedCase,
  });

  if (
    prevSelection.service !== selectedService ||
    prevSelection.case !== selectedCase
  ) {
    setPrevSelection({ service: selectedService, case: selectedCase });

    const parts: string[] = [];
    if (selectedService) parts.push(`Servicio: ${selectedService}`);
    if (selectedCase) parts.push(`Caso: ${selectedCase}`);

    if (parts.length > 0) {
      const header = parts.join(" | ");

      setForm((prev) => {
        const servicio = selectedService || prev.servicio;
        if (prev.mensaje.includes(header)) return { ...prev, servicio };

        const mensaje = prev.mensaje
          ? `${header}\n${prev.mensaje}`
          : `${header}\n${t.prefillMessage}`;

        return { ...prev, servicio, mensaje };
      });
    }
  }

  // Modal accesible: cerrar con Escape y devolver el foco al botón de envío.
  useEffect(() => {
    if (!isModalOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
        submitRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    modalRef.current?.focus();

    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isModalOpen]);

  const title = useMemo(() => t.title, [t.title]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const name = e.target.name as FieldName;
    const value = e.target.value.slice(0, MAX_LENGTH[name]);

    if (!leadStarted.current) {
      leadStarted.current = true;
      trackLeadStart({ page: "/", location: "formulario", label: name });
    }

    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev));
  };

  const buildContextParts = () => {
    const parts: string[] = [];
    if (form.nombre) parts.push(`Nombre: ${clean(form.nombre, MAX_LENGTH.nombre)}`);
    if (form.telefono) parts.push(`Teléfono: ${clean(form.telefono, MAX_LENGTH.telefono)}`);
    if (form.empresa) parts.push(`Empresa: ${clean(form.empresa, MAX_LENGTH.empresa)}`);
    if (form.email) parts.push(`Email: ${clean(form.email, MAX_LENGTH.email)}`);
    if (form.servicio || selectedService)
      parts.push(`Servicio: ${form.servicio || selectedService}`);
    if (selectedCase) parts.push(`Caso: ${selectedCase}`);
    if (form.horario) parts.push(`Horario: ${form.horario}`);
    if (form.mensaje) parts.push(`Mensaje: ${clean(form.mensaje, MAX_LENGTH.mensaje)}`);
    return parts;
  };

  const buildPlainText = () => buildContextParts().join("\n");

  const openWhatsAppWithPayload = (payload: string, location: string) => {
    const url = buildWhatsAppUrl({
      message: payload,
      service: form.servicio || selectedService || undefined,
      location,
    });

    trackWhatsAppClick({
      page: "/",
      service: form.servicio || selectedService || undefined,
      location,
      label: "Formulario de contacto",
    });

    const win = window.open(url, "_blank", "noopener,noreferrer");
    if (win) win.opener = null;
  };

  const openEmailWithPayload = (payload: string) => {
    // mailto NO envía automático; abre el cliente de correo del usuario.
    const subject = encodeURIComponent(t.emailSubject);
    const body = encodeURIComponent(payload);
    window.location.href = `mailto:samironcal@gmail.com?subject=${subject}&body=${body}`;
  };

  const resetAll = () => {
    setForm(DEFAULT_FORM);
    setErrors({});
    leadStarted.current = false;
    onClearSelectedService?.();
    onClearSelectedCase?.();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Evita envíos duplicados por doble click o doble Enter.
    if (submitting) return;

    // Si el campo trampa viene relleno, es un bot: se descarta en silencio.
    if (honeypot) return;

    const nextErrors = validate(form);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      trackFormError({
        page: "/",
        location: "formulario",
        fields: Object.keys(nextErrors).join(","),
      });

      // Lleva el foco al primer campo con error.
      const first = Object.keys(nextErrors)[0];
      document.getElementById(`contact-${first}`)?.focus();
      return;
    }

    setSubmitting(true);
    const payload = buildPlainText();

    // Backup local
    try {
      localStorage.setItem(
        "brds_last_lead",
        JSON.stringify({ payload, createdAt: new Date().toISOString() })
      );
    } catch {
      // ignore
    }

    trackFormSubmit({
      page: "/",
      service: form.servicio || selectedService || undefined,
      location: "formulario",
    });

    setLastPayload(payload);
    setIsModalOpen(true);
    setSubmitting(false);
  };

  const handleWhatsAppQuote = () => {
    const payload = `${buildPlainText()}\n\n${t.whatsAppQuoteAppend}`;
    openWhatsAppWithPayload(payload, "contacto_cotizacion");
  };

  const handleWhatsAppAppointment = () => {
    const payload = `${buildPlainText()}\n\n${t.whatsAppAppointmentAppend}`;
    openWhatsAppWithPayload(payload, "contacto_cita");
  };

  /** Atributos comunes de cada campo con error. */
  const errorProps = (name: FieldName) =>
    errors[name]
      ? { "aria-invalid": true, "aria-describedby": `error-${name}` }
      : {};

  return (
    <>
      <div className="section-heading contact-heading" data-aos="fade-up">
        <h2 className="section-title contact-title">{title}</h2>
        <p className="section-subtitle contact-subtitle">{t.subtitle}</p>
      </div>

      <div className="contact-shell" data-aos="fade-up">
        {/* FORM */}
        <form className="contact-card" onSubmit={handleSubmit} noValidate>
          <div className="contact-card-head">
            <div>
              <div className="contact-card-kicker">{t.kicker}</div>
              <h3 className="contact-card-title">{t.cardTitle}</h3>
              <p className="contact-card-desc">{t.cardDesc}</p>
            </div>

            <div className="contact-badge">
              <span className="contact-badge-dot" />
              {t.badgeText}
            </div>
          </div>

          <div className="contact-grid">
            <div className="field">
              <label className="label" htmlFor="contact-nombre">
                {t.formName}
              </label>
              <input
                className="input"
                id="contact-nombre"
                type="text"
                name="nombre"
                autoComplete="name"
                value={form.nombre}
                onChange={handleChange}
                placeholder={t.namePlaceholder}
                required
                {...errorProps("nombre")}
              />
              {errors.nombre && (
                <p className="field-error" id="error-nombre">
                  {errors.nombre}
                </p>
              )}
            </div>

            <div className="field">
              <label className="label" htmlFor="contact-telefono">
                {t.phoneLabel}
              </label>
              <input
                className="input"
                id="contact-telefono"
                type="tel"
                name="telefono"
                autoComplete="tel"
                inputMode="tel"
                value={form.telefono}
                onChange={handleChange}
                placeholder={t.phonePlaceholder}
                required
                {...errorProps("telefono")}
              />
              {errors.telefono && (
                <p className="field-error" id="error-telefono">
                  {errors.telefono}
                </p>
              )}
            </div>

            <div className="field">
              <label className="label" htmlFor="contact-email">
                {t.formEmail}
              </label>
              <input
                className="input"
                id="contact-email"
                type="email"
                name="email"
                autoComplete="email"
                inputMode="email"
                value={form.email}
                onChange={handleChange}
                placeholder={t.emailPlaceholder}
                required
                {...errorProps("email")}
              />
              {errors.email && (
                <p className="field-error" id="error-email">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="field">
              <label className="label" htmlFor="contact-empresa">
                {t.companyLabel}
              </label>
              <input
                className="input"
                id="contact-empresa"
                type="text"
                name="empresa"
                autoComplete="organization"
                value={form.empresa}
                onChange={handleChange}
                placeholder={t.companyPlaceholder}
              />
            </div>

            <div className="field">
              <label className="label" htmlFor="contact-servicio">
                {t.serviceLabel}
              </label>
              <select
                className="select"
                id="contact-servicio"
                name="servicio"
                value={form.servicio}
                onChange={handleChange}
              >
                <option value="">{t.servicePlaceholder}</option>
                {t.serviceOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>

              {(selectedService || selectedCase) && (
                <div className="field-hint">
                  {selectedService
                    ? `${t.prefillServiceLabel}: ${selectedService}. `
                    : ""}
                  {selectedCase
                    ? `${t.prefillCaseLabel}: ${selectedCase}.`
                    : ""}
                </div>
              )}
            </div>

            <div className="field">
              <label className="label" htmlFor="contact-horario">
                {t.scheduleLabel}
              </label>
              <select
                className="select"
                id="contact-horario"
                name="horario"
                value={form.horario}
                onChange={handleChange}
              >
                <option value="">{t.schedulePlaceholder}</option>
                {t.scheduleOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div className="field field-full">
              <label className="label" htmlFor="contact-mensaje">
                {t.formMessage}
              </label>
              <textarea
                className="textarea"
                id="contact-mensaje"
                name="mensaje"
                value={form.mensaje}
                onChange={handleChange}
                placeholder={t.messagePlaceholder}
                rows={5}
                required
                {...errorProps("mensaje")}
              />
              {errors.mensaje && (
                <p className="field-error" id="error-mensaje">
                  {errors.mensaje}
                </p>
              )}
            </div>

            {/* Campo trampa anti-spam: oculto para personas, visible para bots */}
            <div className="field-honeypot" aria-hidden="true">
              <label htmlFor="contact-web">No rellenar este campo</label>
              <input
                id="contact-web"
                type="text"
                name="web"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </div>
          </div>

          <div className="contact-actions">
            <button
              ref={submitRef}
              type="submit"
              className="btn hero-cta-primary contact-submit"
              disabled={submitting}
            >
              {submitting ? "Enviando…" : t.submit}
            </button>

            <button
              type="button"
              className="btn contact-outline"
              onClick={handleWhatsAppAppointment}
            >
              {t.secondaryCta}
            </button>
          </div>

          <p className="contact-legal">{t.legal}</p>
        </form>

        {/* SIDE / CLOSER */}
        <aside className="contact-side card">
          <div className="contact-side-top">
            <h3 className="contact-side-title">{t.sideTitle}</h3>
            <p className="contact-side-text">{t.sideText}</p>
          </div>

          <div className="contact-side-box">
            {t.sideBullets.map((b) => (
              <div className="contact-side-row" key={b}>
                <span className="dot" /> {b}
              </div>
            ))}
          </div>

          <div className="contact-side-actions">
            <button
              type="button"
              className="btn service-commercial-cta"
              onClick={handleWhatsAppQuote}
            >
              {t.sideCta1}
            </button>

            <button
              type="button"
              className="btn contact-outline"
              onClick={handleWhatsAppAppointment}
            >
              {t.sideCta2}
            </button>
          </div>

          <div className="contact-side-note">{t.sideNote}</div>
        </aside>
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div
            className="modal-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            tabIndex={-1}
            ref={modalRef}
          >
            <div className="modal-head">
              <h3 className="modal-title" id="modal-title">
                {t.modalTitle}
              </h3>
              <button
                type="button"
                className="modal-x"
                onClick={() => {
                  setIsModalOpen(false);
                  submitRef.current?.focus();
                }}
                aria-label={t.closeLabel}
              >
                ×
              </button>
            </div>

            <p className="modal-text">{t.modalText}</p>

            <div className="modal-preview">
              <pre>{lastPayload}</pre>
            </div>

            <div className="modal-actions">
              <button
                type="button"
                className="btn hero-cta-primary"
                onClick={() => {
                  openWhatsAppWithPayload(lastPayload, "modal_whatsapp");
                  setIsModalOpen(false);
                  resetAll();
                }}
              >
                {t.modalCtaWhatsApp}
              </button>

              <button
                type="button"
                className="btn contact-outline"
                onClick={() => {
                  openEmailWithPayload(lastPayload);
                  setIsModalOpen(false);
                  resetAll();
                }}
              >
                {t.modalCtaEmail}
              </button>
            </div>

            <p className="modal-note">{t.modalNote}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
