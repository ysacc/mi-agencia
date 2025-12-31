import React, { useEffect, useMemo, useState } from "react";
import { translations, type Lang } from "../translations";

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

const Contact: React.FC<ContactProps> = ({
  lang,
  selectedService,
  selectedCase,
  onClearSelectedService,
  onClearSelectedCase,
}) => {
  const t = translations[lang].contact;

  const [form, setForm] = useState<ContactForm>(DEFAULT_FORM);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lastPayload, setLastPayload] = useState("");

  // Sincroniza servicio seleccionado → select
  useEffect(() => {
    if (!selectedService) return;
    setForm((prev) => ({ ...prev, servicio: selectedService }));
  }, [selectedService]);

  // Prefill del mensaje con contexto (sin duplicar)
  useEffect(() => {
    const parts: string[] = [];
    if (selectedService) parts.push(`Servicio: ${selectedService}`);
    if (selectedCase) parts.push(`Caso: ${selectedCase}`);
    if (parts.length === 0) return;

    setForm((prev) => {
      const header = parts.join(" | ");
      if (prev.mensaje.includes(header)) return prev;

      const next = prev.mensaje
        ? `${header}\n${prev.mensaje}`
        : `${header}\n${t.prefillMessage}`;

      return { ...prev, mensaje: next };
    });
  }, [selectedService, selectedCase, t.prefillMessage]);

  const title = useMemo(() => t.title, [t.title]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const name = e.target.name as FieldName;
    const value = e.target.value;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const buildContextParts = () => {
    const parts: string[] = [];
    if (form.nombre) parts.push(`Nombre: ${form.nombre}`);
    if (form.telefono) parts.push(`Teléfono: ${form.telefono}`);
    if (form.empresa) parts.push(`Empresa: ${form.empresa}`);
    if (form.email) parts.push(`Email: ${form.email}`);
    if (form.servicio || selectedService)
      parts.push(`Servicio: ${form.servicio || selectedService}`);
    if (selectedCase) parts.push(`Caso: ${selectedCase}`);
    if (form.horario) parts.push(`Horario: ${form.horario}`);
    if (form.mensaje) parts.push(`Mensaje: ${form.mensaje}`);
    return parts;
  };

  const buildPlainText = () => buildContextParts().join("\n");

  const openWhatsAppWithPayload = (payload: string) => {
    const text = encodeURIComponent(payload);
    // Ajusta a tu número final en formato E.164 (sin +)
    const url = `https://wa.me/19144345249?text=${text}`;
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
    onClearSelectedService?.();
    onClearSelectedCase?.();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

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

    setLastPayload(payload);
    setIsModalOpen(true);
  };

  const handleWhatsAppQuote = () => {
    const payload = `${buildPlainText()}\n\n${t.whatsAppQuoteAppend}`;
    openWhatsAppWithPayload(payload);
  };

  const handleWhatsAppAppointment = () => {
    const payload = `${buildPlainText()}\n\n${t.whatsAppAppointmentAppend}`;
    openWhatsAppWithPayload(payload);
  };

  return (
    <>
      <div className="section-heading contact-heading" data-aos="fade-up">
        <h2 className="section-title contact-title">{title}</h2>
        <p className="section-subtitle contact-subtitle">{t.subtitle}</p>
      </div>

      <div className="contact-shell" data-aos="fade-up">
        {/* FORM */}
        <form className="contact-card" onSubmit={handleSubmit}>
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
              <label className="label">{t.formName}</label>
              <input
                className="input"
                type="text"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                placeholder={t.namePlaceholder}
                required
              />
            </div>

            <div className="field">
              <label className="label">{t.phoneLabel}</label>
              <input
                className="input"
                type="tel"
                name="telefono"
                value={form.telefono}
                onChange={handleChange}
                placeholder={t.phonePlaceholder}
                required
              />
            </div>

            <div className="field">
              <label className="label">{t.formEmail}</label>
              <input
                className="input"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder={t.emailPlaceholder}
                required
              />
            </div>

            <div className="field">
              <label className="label">{t.companyLabel}</label>
              <input
                className="input"
                type="text"
                name="empresa"
                value={form.empresa}
                onChange={handleChange}
                placeholder={t.companyPlaceholder}
              />
            </div>

            <div className="field">
              <label className="label">{t.serviceLabel}</label>
              <select
                className="select"
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
              <label className="label">{t.scheduleLabel}</label>
              <select
                className="select"
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
              <label className="label">{t.formMessage}</label>
              <textarea
                className="textarea"
                name="mensaje"
                value={form.mensaje}
                onChange={handleChange}
                placeholder={t.messagePlaceholder}
                rows={5}
                required
              />
            </div>
          </div>

          <div className="contact-actions">
            <button
              type="submit"
              className="btn hero-cta-primary contact-submit"
            >
              {t.submit}
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
        <div className="modal-overlay" role="dialog" aria-modal="true">
          <div className="modal-card">
            <div className="modal-head">
              <h3 className="modal-title">{t.modalTitle}</h3>
              <button
                type="button"
                className="modal-x"
                onClick={() => setIsModalOpen(false)}
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
                  openWhatsAppWithPayload(lastPayload);
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
