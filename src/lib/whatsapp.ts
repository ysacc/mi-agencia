/**
 * Helper único de WhatsApp para todo el sitio (home y landings de campaña).
 *
 * Reglas:
 * - Nunca se abre WhatsApp de forma automática: el enlace solo se construye,
 *   la apertura la dispara el usuario al hacer click.
 * - El mensaje siempre se codifica con encodeURIComponent.
 * - Se conservan los UTM disponibles y se identifica el origen del lead.
 */

import { formatUtmRef, getUtm } from "./utm";
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
 * Arma el texto final del mensaje.
 *
 * Lo escribe el cliente, así que tiene que leerse natural: la campaña ya se
 * menciona dentro del propio mensaje, y el servicio y la ubicación del CTA
 * viajan en los eventos de analítica, no en el texto.
 *
 * Lo único que se añade es una referencia corta del origen publicitario, y
 * solo cuando la visita trae UTM (es decir, cuando viene de una campaña):
 *
 *   Hola, llegué desde la campaña Tienda Online. Quiero información…
 *
 *   Ref. ig/social/link_in_bio
 */
export function buildWhatsAppMessage({
  message,
}: WhatsAppMessageOptions): string {
  const ref = formatUtmRef(getUtm());
  return ref ? `${message}\n\nRef. ${ref}` : message;
}

/** URL final: https://wa.me/51928577224?text=MENSAJE_CODIFICADO */
export function buildWhatsAppUrl(options: WhatsAppMessageOptions): string {
  const text = encodeURIComponent(buildWhatsAppMessage(options));
  return `${WHATSAPP_BASE_URL}?text=${text}`;
}
