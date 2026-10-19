export type TemplateId =
  | "barberia"
  | "restaurante"
  | "consultorio"
  | "inmobiliaria"
  | "belleza"
  | "profesionales";
export interface Photo {
  src: string;
  alt: string;
  position?: string;
}
export interface Service {
  name: string;
  description: string;
  price?: string;
  detail?: string;
  image?: Photo;
}
export interface Property {
  name: string;
  label: string;
  location: string;
  price: string;
  features: string[];
  image: Photo;
}
export interface TemplateConfig {
  id: TemplateId;
  name: string;
  category: string;
  description: string;
  preview: string;
  business: {
    name: string;
    slogan: string;
    logo?: string;
    whatsapp: string;
    address: string;
    hours: string[];
    instagram?: string;
    facebook?: string;
  };
  theme: {
    primary: string;
    accent: string;
    font: "system" | "editorial" | "geometric";
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cta: string;
    image: Photo;
  };
  about: { eyebrow: string; title: string; text: string; image?: Photo };
  servicesTitle: string;
  services: Service[];
  gallery: Photo[];
  galleryTitle?: string;
  benefits: { title: string; text: string }[];
  team?: { name: string; role: string; initials: string }[];
  properties?: Property[];
  faqs?: { question: string; answer: string }[];
  contact: { title: string; text: string; cta: string };
}
export const photo = (name: string, alt: string, position?: string): Photo => ({
  src: `/photos/${name}`,
  alt,
  position,
});
export function demoContactUrl(config: TemplateConfig) {
  return `https://wa.me/${config.business.whatsapp}?text=${encodeURIComponent(`Hola, estoy viendo la plantilla de demostración ${config.name} (${config.id}) de BR Digital System. Me interesa una web similar. Esta consulta no es una reserva, pedido ni cita real.`)}`;
}
