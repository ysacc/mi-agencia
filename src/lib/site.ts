/**
 * Datos reales de BR Digital System.
 *
 * Fuente única de verdad para marca, dominio, contacto y redes sociales:
 * si algo cambia, se cambia aquí y se propaga a toda la web.
 * No añadir aquí datos no verificados (dirección, valoraciones, clientes).
 */

/** La marca se escribe SIEMPRE así: sin "s" final. */
export const BRAND = "BR Digital System";
export const SLOGAN = "Tecnología para tu crecimiento";

export const SITE_URL = "https://brdigitalsystem.online";
export const SITE_DOMAIN = "brdigitalsystem.online";

/** Número comercial en formato E.164 sin "+". */
export const WHATSAPP_NUMBER = "51928577224";
export const WHATSAPP_DISPLAY = "+51 928 577 224";

/** Correo de contacto comercial. */
export const CONTACT_EMAIL = "brdigitalsystem.contact@gmail.com";

export interface SocialLink {
  name: string;
  handle: string;
  url: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "Instagram",
    handle: "@brdigitalsystem",
    url: "https://www.instagram.com/brdigitalsystem",
  },
  {
    name: "Facebook",
    handle: "@brdigitalsystem",
    url: "https://www.facebook.com/brdigitalsystem",
  },
  {
    name: "TikTok",
    handle: "@br.digital.system",
    url: "https://www.tiktok.com/@br.digital.system",
  },
];

/** Servicios principales, usados para enlazado interno y datos estructurados. */
export interface ServiceLink {
  id: "web-para-negocios" | "tienda-online" | "sistemas-a-medida";
  name: string;
  path: string;
  short: string;
}

export const SERVICE_LINKS: ServiceLink[] = [
  {
    id: "web-para-negocios",
    name: "Páginas web para negocios",
    path: "/web-para-negocios",
    short:
      "Presencia profesional para negocios locales, consultorios y emprendedores.",
  },
  {
    id: "tienda-online",
    name: "Tiendas online",
    path: "/tienda-online",
    short: "Catálogo, carrito y pedidos ordenados para vender por internet.",
  },
  {
    id: "sistemas-a-medida",
    name: "Sistemas a medida y automatización",
    path: "/sistemas-a-medida",
    short:
      "Sistemas web, dashboards e integraciones para reducir trabajo manual.",
  },
];
