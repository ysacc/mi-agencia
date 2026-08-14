/**
 * Helper único de WhatsApp para las landings de campaña.
 *
 * Reglas:
 * - Nunca se abre WhatsApp de forma automática: el enlace solo se construye,
 *   la apertura la dispara el usuario al hacer click en un <a target="_blank">.
 * - El mensaje siempre se codifica con encodeURIComponent.
 * - Se conservan los UTM disponibles y se identifica la campaña de origen.
 */

import { formatUtmSummary, getUtm } from "./utm";

/** Número comercial en formato E.164 sin "+". */
export const WHATSAPP_NUMBER = "19144345249";
export const WHATSAPP_DISPLAY = "+1 914 434 5249";
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export interface WhatsAppMessageOptions {
  /** Nombre legible de la campaña, ej: "Web para Negocios". */
  campaignName: string;
  /** Mensaje base definido para la campaña. */
  message: string;
  /** Ubicación del CTA que originó el click (hero, cta_final, boton_flotante...). */
  location?: string;
}

/**
 * Arma el texto final del mensaje: mensaje de la campaña + trazabilidad
 * (campaña, ubicación del CTA y UTM cuando existan).
 */
export function buildWhatsAppMessage({
  campaignName,
  message,
  location,
}: WhatsAppMessageOptions): string {
  const trace: string[] = [`Campaña: ${campaignName}`];
  if (location) trace.push(`Origen: ${location}`);

  const utmSummary = formatUtmSummary(getUtm());
  if (utmSummary) trace.push(utmSummary);

  return `${message}\n\n---\n${trace.join(" · ")}`;
}

/** URL final: https://wa.me/19144345249?text=MENSAJE_CODIFICADO */
export function buildWhatsAppUrl(options: WhatsAppMessageOptions): string {
  const text = encodeURIComponent(buildWhatsAppMessage(options));
  return `${WHATSAPP_BASE_URL}?text=${text}`;
}
