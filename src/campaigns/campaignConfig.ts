/**
 * Configuración común de las tres landings de campaña.
 *
 * Aquí vive solo la identidad de cada campaña (ruta, SEO, mensaje de WhatsApp,
 * etiquetas de CTA y acento visual). El contenido largo y la estructura de cada
 * página viven en su propio archivo dentro de `src/campaigns/pages/`, para que
 * cada campaña pueda tener secciones y argumentos distintos.
 */

import { BRAND, SITE_URL } from "../lib/site";

export { BRAND, SITE_URL };

export type CampaignId =
  | "web-para-negocios"
  | "tienda-online"
  | "sistemas-a-medida";

/** Acento cromático dominante de cada landing (todas parten del azul de marca). */
export type CampaignAccent = "cyan" | "amber" | "blue";

export interface CampaignConfig {
  id: CampaignId;
  /** Nombre legible de la campaña, usado en analítica y en el mensaje. */
  name: string;
  path: string;
  accent: CampaignAccent;
  seo: {
    title: string;
    description: string;
    canonical: string;
  };
  whatsapp: {
    /** Mensaje base que verá el asesor al recibir el lead. */
    message: string;
  };
  cta: {
    primary: string;
    final: string;
    floating: string;
  };
}

export const CAMPAIGNS: Record<CampaignId, CampaignConfig> = {
  "web-para-negocios": {
    id: "web-para-negocios",
    name: "Web para Negocios",
    path: "/web-para-negocios",
    accent: "cyan",
    seo: {
      title: `Páginas web para negocios | ${BRAND}`,
      description:
        "Creamos páginas web profesionales para negocios locales, consultorios y emprendedores: información clara, WhatsApp integrado y formulario de contacto. Cotización personalizada.",
      canonical: `${SITE_URL}/web-para-negocios`,
    },
    whatsapp: {
      message:
        "Hola, llegué desde la campaña Web para Negocios. Quiero información para crear una página web para mi negocio.",
    },
    cta: {
      primary: "Quiero una web para mi negocio",
      final: "Quiero una web para mi negocio",
      floating: "Escríbenos por WhatsApp",
    },
  },

  "tienda-online": {
    id: "tienda-online",
    name: "Tienda Online",
    path: "/tienda-online",
    accent: "amber",
    seo: {
      title: `Tiendas online para vender por internet | ${BRAND}`,
      description:
        "Creamos tu tienda online con catálogo por categorías, carrito, pedidos por WhatsApp y panel para administrar productos. Cuéntanos qué vendes y te preparamos una propuesta.",
      canonical: `${SITE_URL}/tienda-online`,
    },
    whatsapp: {
      message:
        "Hola, llegué desde la campaña Tienda Online. Quiero información para vender mis productos por internet.",
    },
    cta: {
      primary: "Quiero vender por internet",
      final: "Quiero vender por internet",
      floating: "Conversemos por WhatsApp",
    },
  },

  "sistemas-a-medida": {
    id: "sistemas-a-medida",
    name: "Sistemas a Medida",
    path: "/sistemas-a-medida",
    accent: "blue",
    seo: {
      title: `Sistemas y automatización a medida | ${BRAND}`,
      description:
        "Desarrollamos sistemas web, paneles de control y automatizaciones a medida para reducir trabajo manual y centralizar la operación de tu empresa. Solicita una evaluación.",
      canonical: `${SITE_URL}/sistemas-a-medida`,
    },
    whatsapp: {
      message:
        "Hola, llegué desde la campaña Sistemas a Medida. Quiero evaluar un proceso de mi empresa para desarrollar una solución.",
    },
    cta: {
      primary: "Quiero evaluar mi proceso",
      final: "Quiero evaluar mi proceso",
      floating: "Solicitar una evaluación",
    },
  },
};

export function getCampaign(id: CampaignId): CampaignConfig {
  return CAMPAIGNS[id];
}
