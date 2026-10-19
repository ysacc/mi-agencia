export type PlanId = "esencial" | "negocio" | "profesional";
export interface WebPlan {
  id: PlanId;
  name: string;
  price: number;
  sections: number;
  pages: number;
  description: string;
  features: string[];
  featured?: boolean;
}
export const EXTRA_SECTION_PRICE = 80;
export const PLANS: readonly WebPlan[] = [
  {
    id: "esencial",
    name: "Esencial",
    price: 299,
    sections: 3,
    pages: 1,
    description: "Una presencia clara para dar el primer paso.",
    features: [
      "Landing page de una sola página",
      "Hasta 3 secciones",
      "Diseño base personalizable",
      "Botón de WhatsApp",
      "Adaptación responsive",
      "Una ronda de revisión",
    ],
  },
  {
    id: "negocio",
    name: "Negocio",
    price: 499,
    sections: 5,
    pages: 1,
    featured: true,
    description: "Más espacio para presentar lo que haces.",
    features: [
      "Landing page de una sola página",
      "Hasta 5 secciones",
      "Diseño base personalizable",
      "WhatsApp y formulario",
      "SEO técnico básico",
      "Hasta 2 rondas de revisión",
    ],
  },
  {
    id: "profesional",
    name: "Profesional",
    price: 799,
    sections: 7,
    pages: 4,
    description: "Una web más completa, a tu manera.",
    features: [
      "Hasta 4 páginas independientes",
      "Hasta 7 secciones en total",
      "Diseño con mayor personalización",
      "Galería, formulario y WhatsApp",
      "SEO técnico y analítica básica",
      "Hasta 3 rondas de revisión",
    ],
  },
];
export const CONDITIONS = [
  "Pago único por desarrollo. Dominio, hosting y mantenimiento se cotizan por separado.",
  "No incluyen ecommerce, panel administrable, integraciones personalizadas ni funcionalidades complejas.",
  "El cliente entrega los textos, imágenes y logotipo, con permiso para utilizarlos.",
  "El alcance y el plazo se confirman después de revisar tus necesidades y materiales.",
];
export const money = (amount: number) => `S/ ${amount.toLocaleString("es-PE")}`;
export const getPlan = (id: PlanId) => PLANS.find((plan) => plan.id === id)!;
/** Los extras nunca amplían automáticamente el alcance contratado. */
export function estimateQuote(id: PlanId, extras: number) {
  const plan = getPlan(id);
  if (
    !Number.isSafeInteger(extras) ||
    extras < 0 ||
    !Number.isSafeInteger(extras * EXTRA_SECTION_PRICE + plan.price)
  ) {
    throw new RangeError(
      "Indica una cantidad entera de secciones adicionales, desde cero.",
    );
  }
  return {
    plan,
    extras,
    extraCost: extras * EXTRA_SECTION_PRICE,
    total: plan.price + extras * EXTRA_SECTION_PRICE,
    requestedSections: plan.sections + extras,
    needsValidation: extras > 0,
  };
}
export function quoteMessage(
  id: PlanId,
  extras: number,
  domain: string,
  business: string,
) {
  const quote = estimateQuote(id, extras);
  return [
    "Hola BR Digital System, quiero consultar por una página web.",
    `Negocio: ${business.trim().slice(0, 80) || "Por definir"}`,
    `Plan ${quote.plan.name}: ${money(quote.plan.price)}`,
    `Dominio: ${domain}`,
    `Secciones incluidas: hasta ${quote.plan.sections}. Páginas: hasta ${quote.plan.pages}.`,
    `Secciones adicionales solicitadas: ${extras} × ${money(EXTRA_SECTION_PRICE)} = ${money(quote.extraCost)}`,
    `Desarrollo estimado: ${money(quote.total)} (pago único).`,
    ...(quote.needsValidation
      ? [
          "La solicitud excede el límite de secciones del plan. Los extras y el alcance están sujetos a validación comercial.",
        ]
      : []),
    "Dominio, hosting y mantenimiento por separado. Quiero confirmar alcance, presupuesto y plazo.",
  ].join("\n");
}
