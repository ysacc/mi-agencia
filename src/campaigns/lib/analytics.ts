/**
 * Capa de analítica para las landings de campaña.
 *
 * IMPORTANTE: el proyecto NO tiene hoy ninguna herramienta de medición
 * instalada (no hay Google Analytics, ni Meta Pixel, ni @vercel/analytics).
 * Por eso aquí no se inventa ningún ID ni se inyecta ningún script:
 * este módulo solo **reutiliza** lo que exista en tiempo de ejecución.
 *
 * - Si se añade GA4 / GTM  -> window.gtag / window.dataLayer reciben los eventos.
 * - Si se añade Meta Pixel -> window.fbq recibe los eventos como trackCustom.
 * - Si se añade Vercel Analytics -> window.va recibe los eventos.
 * - Mientras tanto los eventos quedan encolados en window.dataLayer, que es el
 *   contrato estándar de GTM: al pegar el contenedor, el histórico se procesa.
 */

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

/** Envía un evento a todas las herramientas de medición presentes. */
export function trackEvent(name: string, params: EventParams = {}): void {
  if (!isBrowser()) return;

  const payload: EventParams = { ...params };

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

  if (import.meta.env.DEV) {
    console.debug("[analytics]", name, payload);
  }
}

export interface PageViewOptions {
  campaign: string;
  campaignId: string;
  path: string;
  title: string;
}

/** page_view de la landing, con identificación de campaña. */
export function trackPageView({
  campaign,
  campaignId,
  path,
  title,
}: PageViewOptions): void {
  trackEvent("page_view", {
    campaign,
    campaign_id: campaignId,
    page_path: path,
    page_title: title,
    page_location: isBrowser() ? window.location.href : undefined,
  });
}

export interface CtaEventOptions {
  campaign: string;
  campaignId: string;
  /** hero | cta_final | boton_flotante | header */
  location: string;
  label: string;
}

/** Click en cualquier CTA que lleva a WhatsApp. */
export function trackWhatsAppClick({
  campaign,
  campaignId,
  location,
  label,
}: CtaEventOptions): void {
  const params: EventParams = {
    campaign,
    campaign_id: campaignId,
    cta_location: location,
    cta_label: label,
  };

  trackEvent("whatsapp_click", params);

  // Evento adicional con la semántica pedida por ubicación,
  // para poder crear conversiones separadas en la herramienta.
  if (location === "hero") trackEvent("cta_principal_click", params);
  if (location === "cta_final") trackEvent("cta_final_click", params);
  if (location === "boton_flotante") trackEvent("whatsapp_flotante_click", params);
}
