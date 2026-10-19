/** Contacto existente en el sitio comercial; no son datos de los negocios ficticios. */
export const BRAND = "BR Digital System";
export const MAIN_SITE = "https://brdigitalsystem.online";
export const CATALOG_SITE = "https://demo.brdigitalsystem.online";
export const WHATSAPP_NUMBER = "51928577224";
export function requestWebsite(template: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hola BR Digital System, me interesa una web similar a la plantilla ${template}. Quiero consultar los planes y confirmar el alcance.`)}`;
}
