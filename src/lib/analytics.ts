/**
 * Capa de analítica del sitio.
 *
 * IMPORTANTE: el proyecto NO tiene hoy ninguna herramienta de medición
 * instalada (no hay Google Analytics, ni Google Tag Manager, ni Meta Pixel,
 * ni @vercel/analytics). Por eso aquí no se inventa ningún ID ni se inyecta
 * ningún script: este módulo solo **reutiliza** lo que exista en tiempo de
 * ejecución.
 *
 * - Si se añade GA4 / GTM  -> window.gtag / window.dataLayer reciben los eventos.
 * - Si se añade Meta Pixel -> window.fbq los recibe como trackCustom.
 * - Si se añade Vercel Analytics -> window.va los recibe.
 * - Mientras tanto quedan encolados en window.dataLayer, que es el contrato
 *   estándar de GTM: al pegar el contenedor, el histórico se procesa.
 */

import { getUtm } from "./utm";

type Primitive = string | number | boolean | undefined;
export type EventParams = Record<string, Primitive>;

type GtagFn = (command: string, action: string, params?: EventParams) => void;
type FbqFn = (command: string, event: string, params?: EventParams) => void;
type VaFn = (command: string, event: string, params?: EventParams) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: GtagFn;
    fbq?: FbqFn;
    va?: VaFn;
  }
}

const isBrowser = () => typeof window !== "undefined";

/** Contexto común que acompaña a todos los eventos. */
export interface EventContext {
  /** Ruta o identificador de la página. */
  page: string;
  /** Campaña, cuando el evento ocurre en una landing. */
  campaign?: string;
  campaignId?: string;
  /** Servicio relacionado, cuando aplica. */
  service?: string;
  /** Ubicación del CTA dentro de la página. */
  location?: string;
  /** Texto del CTA u otro detalle. */
  label?: string;
}

function withContext(ctx: EventContext, extra: EventParams = {}): EventParams {
  const utm = getUtm();
  return {
    page: ctx.page,
    campaign: ctx.campaign,
    campaign_id: ctx.campaignId,
    service: ctx.service,
    cta_location: ctx.location,
    cta_label: ctx.label,
    utm_source: utm.utm_source,
    utm_medium: utm.utm_medium,
    utm_campaign: utm.utm_campaign,
    utm_content: utm.utm_content,
    ...extra,
  };
}

/** Envía un evento a todas las herramientas de medición presentes. */
export function trackEvent(name: string, params: EventParams = {}): void {
  if (!isBrowser()) return;

  // Se eliminan los indefinidos para no ensuciar los informes.
  const payload: EventParams = {};
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== "") payload[key] = value;
  }

  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: name, ...payload });
  } catch {
    // ignorar
  }

  try {
    window.gtag?.("event", name, payload);
  } catch {
    // ignorar
  }

  try {
    window.fbq?.("trackCustom", name, payload);
  } catch {
    // ignorar
  }

  try {
    window.va?.("event", name, payload);
  } catch {
    // ignorar
  }
}

/** Vista de página, con identificación de campaña o sección. */
export function trackPageView(ctx: EventContext & { title?: string }): void {
  trackEvent(
    "page_view",
    withContext(ctx, {
      page_title: ctx.title,
      page_location: isBrowser() ? window.location.href : undefined,
    })
  );
}

/** El usuario ve (o abre) el detalle de un servicio. */
export function trackViewService(ctx: EventContext): void {
  trackEvent("view_service", withContext(ctx));
}

/** Click en el CTA principal de la página. */
export function trackPrimaryCta(ctx: EventContext): void {
  trackEvent("click_primary_cta", withContext(ctx));
}

/** Click en cualquier enlace o botón que lleva a WhatsApp. */
export function trackWhatsAppClick(ctx: EventContext): void {
  const params = withContext(ctx);
  trackEvent("click_whatsapp", params);

  // Eventos adicionales por ubicación, para poder crear conversiones
  // separadas en la herramienta de medición.
  if (ctx.location === "hero") trackEvent("click_primary_cta", params);
  if (ctx.location === "cta_final") trackEvent("cta_final_click", params);
  if (ctx.location === "boton_flotante")
    trackEvent("whatsapp_flotante_click", params);
}

/** Click en una red social. */
export function trackSocialClick(ctx: EventContext & { network: string }): void {
  trackEvent("click_social", withContext(ctx, { network: ctx.network }));
}

/** El usuario empieza a rellenar el formulario (primer campo tocado). */
export function trackLeadStart(ctx: EventContext): void {
  trackEvent("lead_start", withContext(ctx));
}

/** Envío válido del formulario. */
export function trackFormSubmit(ctx: EventContext): void {
  trackEvent("submit_form", withContext(ctx));
}

/** Envío rechazado por validación. */
export function trackFormError(
  ctx: EventContext & { fields: string }
): void {
  trackEvent("form_error", withContext(ctx, { error_fields: ctx.fields }));
}
