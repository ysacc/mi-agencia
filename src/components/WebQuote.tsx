import { useState } from "react";
import type { FormEvent } from "react";
import {
  EXTRA_SECTION_PRICE,
  PLANS,
  estimateQuote,
  getPlan,
  money,
  quoteMessage,
} from "../data/plans";
import type { PlanId } from "../data/plans";
import { buildWhatsAppUrl } from "../lib/whatsapp";
import { trackFormSubmit, trackWhatsAppClick } from "../lib/analytics";

export default function WebQuote({
  planId,
  onPlanChange,
}: {
  planId: PlanId;
  onPlanChange: (id: PlanId) => void;
}) {
  const [extras, setExtras] = useState("0");
  const [domain, setDomain] = useState("Aún no tengo");
  const [business, setBusiness] = useState("");
  const count = Number(extras);
  const valid =
    extras.trim() !== "" &&
    Number.isSafeInteger(count) &&
    count >= 0 &&
    Number.isSafeInteger(count * EXTRA_SECTION_PRICE + getPlan(planId).price);
  const quote = estimateQuote(planId, valid ? count : 0);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!valid) return;
    trackFormSubmit({
      page: window.location.pathname,
      location: "cotizador",
      service: quote.plan.name,
    });
    trackWhatsAppClick({
      page: window.location.pathname,
      location: "cotizador",
      service: quote.plan.name,
    });
    window.location.assign(
      buildWhatsAppUrl({
        message: quoteMessage(planId, count, domain, business),
      }),
    );
  }
  return (
    <section
      className="web-section quote-section"
      id="cotizador"
      aria-labelledby="quote-title"
    >
      <div className="wrap quote-layout">
        <div>
          <p className="eyebrow">TU WEB, A TU MEDIDA</p>
          <h2 id="quote-title">
            Haz números.
            <br />
            Da el siguiente paso.
          </h2>
          <p>
            Elige una base y cuéntanos qué necesitas. Revisaremos tu idea
            contigo antes de confirmar el presupuesto.
          </p>
          <div className="quote-note">
            <span aria-hidden="true">↗</span>
            <p>
              Sin pagos en esta etapa.
              <br />
              <strong>Primero, conversemos.</strong>
            </p>
          </div>
        </div>
        <form className="quote-card" onSubmit={submit}>
          <div className="form-grid">
            <label>
              Tu plan
              <select
                value={planId}
                onChange={(e) => {
                  onPlanChange(e.target.value as PlanId);
                  setExtras("0");
                }}
              >
                {PLANS.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} — {money(p.price)}
                  </option>
                ))}
              </select>
            </label>
            <label>
              ¿Ya tienes dominio?
              <select
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
              >
                <option>Aún no tengo</option>
                <option>Sí, ya tengo</option>
                <option>No estoy seguro</option>
              </select>
            </label>
          </div>
          <label htmlFor="extras">
            Secciones adicionales · {money(EXTRA_SECTION_PRICE)} cada una
          </label>
          <input
            id="extras"
            type="number"
            inputMode="numeric"
            min="0"
            step="1"
            required
            value={extras}
            onChange={(e) => setExtras(e.target.value)}
            aria-invalid={!valid}
            aria-describedby="extra-help"
          />
          <p
            className={
              quote.needsValidation || !valid
                ? "field-help warning"
                : "field-help"
            }
            id="extra-help"
          >
            {!valid
              ? "Escribe un número entero válido desde cero."
              : quote.needsValidation
                ? `Solicitas hasta ${quote.requestedSections} secciones: supera las ${quote.plan.sections} del plan. Estos extras requieren validar el alcance; no se aprueban automáticamente ni añaden páginas.`
                : `El plan incluye hasta ${quote.plan.sections} secciones en ${quote.plan.pages === 1 ? "una página" : `hasta ${quote.plan.pages} páginas`}. Cualquier extra requiere validar el alcance.`}
          </p>
          <label htmlFor="business">
            Nombre del negocio <span className="optional">(opcional)</span>
          </label>
          <input
            id="business"
            autoComplete="organization"
            placeholder="¿Cómo se llama tu negocio?"
            maxLength={80}
            value={business}
            onChange={(e) => setBusiness(e.target.value)}
          />
          <div className="quote-breakdown">
            <span>Plan {quote.plan.name}</span>
            <span>{money(quote.plan.price)}</span>
            <span>Secciones adicionales {valid ? `(${count})` : ""}</span>
            <span>{valid ? money(quote.extraCost) : "—"}</span>
          </div>
          <div className="quote-total" aria-live="polite" aria-atomic="true">
            <span>
              Desarrollo estimado
              <small>
                Pago único{" "}
                {quote.needsValidation ? "· sujeto a validación" : ""}
              </small>
            </span>
            <strong>{valid ? money(quote.total) : "—"}</strong>
          </div>
          <p className="field-help">
            Dominio, hosting y mantenimiento se cotizan por separado. No incluye
            tienda online ni panel administrable.
          </p>
          <button
            className="button primary full"
            type="submit"
            disabled={!valid}
          >
            Consultar presupuesto por WhatsApp <span aria-hidden="true">↗</span>
          </button>
          <p className="privacy-note">
            Tus datos no se guardan en esta web. Al continuar se abrirá WhatsApp
            con el resumen; tú decides si envías el mensaje.
          </p>
        </form>
      </div>
    </section>
  );
}
