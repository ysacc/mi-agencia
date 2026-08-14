/**
 * Construcción de datos estructurados (schema.org) a partir de datos reales.
 *
 * Solo se declara información verificable: nombre, dominio, logo, teléfono y
 * redes sociales. No se incluyen dirección, valoraciones, precios ni clientes,
 * porque no hay datos comprobables para ellos.
 */

import {
  BRAND,
  CONTACT_EMAIL,
  SITE_URL,
  SLOGAN,
  SOCIAL_LINKS,
  WHATSAPP_NUMBER,
} from "./site";

const ORG_ID = `${SITE_URL}/#organization`;

export interface FaqEntry {
  q: string;
  a: string;
}

/** Referencia corta a la Organization declarada en el <head> de cada página. */
export const organizationRef = { "@id": ORG_ID };

export function buildOrganization(): Record<string, unknown> {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: BRAND,
    url: `${SITE_URL}/`,
    slogan: SLOGAN,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/logo-og.jpg`,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: `+${WHATSAPP_NUMBER}`,
        email: CONTACT_EMAIL,
        contactType: "customer service",
        availableLanguage: ["es"],
      },
    ],
    sameAs: SOCIAL_LINKS.map((s) => s.url),
  };
}

export interface ServiceSchemaInput {
  name: string;
  description: string;
  path: string;
  /** Tipos de servicio concretos que incluye la oferta. */
  offers: string[];
}

export function buildServiceGraph({
  name,
  description,
  path,
  offers,
}: ServiceSchemaInput): Record<string, unknown> {
  const url = `${SITE_URL}${path}`;

  return {
    "@type": "Service",
    "@id": `${url}#service`,
    name,
    description,
    serviceType: name,
    url,
    provider: organizationRef,
    inLanguage: "es",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name,
      itemListElement: offers.map((offer) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: offer },
      })),
    },
  };
}

export function buildBreadcrumb(
  name: string,
  path: string
): Record<string, unknown> {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: `${SITE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name,
        item: `${SITE_URL}${path}`,
      },
    ],
  };
}

/**
 * FAQPage. Solo debe usarse cuando las preguntas y respuestas están visibles
 * en la propia página, que es el caso: se generan desde el mismo array.
 */
export function buildFaqPage(items: FaqEntry[]): Record<string, unknown> {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

/** Envuelve varios nodos en un único @graph. */
export function buildGraph(
  nodes: Record<string, unknown>[]
): Record<string, unknown> {
  return { "@context": "https://schema.org", "@graph": nodes };
}
