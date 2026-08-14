/**
 * Helper único de WhatsApp para todo el sitio (home y landings de campaña).
 *
 * Reglas:
 * - Nunca se abre WhatsApp de forma automática: el enlace solo se construye,
 *   la apertura la dispara el usuario al hacer click.
 * - El mensaje siempre se codifica con encodeURIComponent.
 * - Se conservan los UTM disponibles y se identifica el origen del lead.
 */

import { formatUtmSummary, getUtm } from "./utm";
import { WHATSAPP_NUMBER } from "./site";

export { WHATSAPP_NUMBER, WHATSAPP_DISPLAY } from "./site";

export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export interface WhatsAppMessageOptions {
  /** Mensaje base que verá el asesor. */
  message: string;
  /** Nombre de la campaña, cuando el lead viene de una landing. */
  campaignName?: string;
  /** Servicio consultado, cuando el lead viene del sitio principal. */
  service?: string;
  /** Ubicación del CTA (hero, cta_final, boton_flotante, servicios...). */
  location?: string;
}

/**
 * Arma el texto final: mensaje + trazabilidad (campaña o servicio,
 * ubicación del CTA y UTM cuando existan).
 */
export function buildWhatsAppMessage({
  message,
  campaignName,
  service,
  location,
}: WhatsAppMessageOptions): string {
  const trace: string[] = [];
  if (campaignName) trace.push(`Campaña: ${campaignName}`);
  if (service) trace.push(`Servicio: ${service}`);
  if (location) trace.push(`Origen: ${location}`);

  const utmSummary = formatUtmSummary(getUtm());
  if (utmSummary) trace.push(utmSummary);

  if (trace.length === 0) return message;
  return `${message}\n\n---\n${trace.join(" · ")}`;
}

/** URL final: https://wa.me/19144345249?text=MENSAJE_CODIFICADO */
export function buildWhatsAppUrl(options: WhatsAppMessageOptions): string {
  const text = encodeURIComponent(buildWhatsAppMessage(options));
  return `${WHATSAPP_BASE_URL}?text=${text}`;
}
