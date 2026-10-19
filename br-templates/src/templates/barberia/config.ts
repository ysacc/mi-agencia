import { WHATSAPP_NUMBER } from "../../lib/site";
import { photo, type TemplateConfig } from "../types";
export const barberia = {
  id: "barberia",
  name: "Barbería Premium",
  category: "Barberías",
  description:
    "Negro, dorado y mucho carácter. Una carta de servicios clara, galería y contacto directo.",
  preview: "/previews/barberia.webp",
  business: {
    name: "NOIR / BARBER",
    slogan: "Estilo con carácter.",
    whatsapp: WHATSAPP_NUMBER,
    address: "Lima, Perú · Ubicación de ejemplo",
    hours: [
      "Lunes a viernes · 10:00 a. m. a 8:00 p. m.",
      "Sábados · 10:00 a. m. a 6:00 p. m.",
      "Domingos · Cerrado",
    ],
    instagram: "",
    facebook: "",
  },
  theme: { primary: "#c5a16b", accent: "#f4eddf", font: "geometric" },
  hero: {
    eyebrow: "PRECISIÓN EN CADA DETALLE",
    title: "Tu estilo. Tus reglas.",
    subtitle:
      "Más que un corte, una forma de expresarte. Un espacio pensado para hacer las cosas bien, sin prisa.",
    cta: "Reserva tu próximo corte",
    image: photo(
      "barber-shop",
      "Interior de barbería con sillones clásicos y espejos",
    ),
  },
  about: {
    eyebrow: "EL OFICIO, BIEN HECHO",
    title: "Lo clásico nunca pasa de moda.",
    text: "Una buena conversación, el sonido de las tijeras y atención a los detalles. Así imaginamos NOIR: una barbería donde cada visita es un momento para ti.",
    image: photo(
      "barber-detail",
      "Detalle del trabajo de corte en una barbería",
    ),
  },
  servicesTitle: "Elige tu próximo look.",
  services: [
    {
      name: "Corte de autor",
      description: "Diagnóstico de estilo, corte a tijera o máquina y acabado.",
      price: "S/ 40",
      detail: "45 min · Ejemplo",
    },
    {
      name: "Barba & perfilado",
      description: "Diseño de barba, toalla caliente y acabado con navaja.",
      price: "S/ 30",
      detail: "30 min · Ejemplo",
    },
    {
      name: "La experiencia completa",
      description:
        "Corte, barba y un ritual de cuidado para terminar renovado.",
      price: "S/ 65",
      detail: "75 min · Ejemplo",
    },
  ],
  galleryTitle: "El estilo también está en el espacio.",
  gallery: [
    photo("barber-shop", "Ambiente de una barbería de estilo clásico"),
    photo("barber-detail", "Técnica de corte y cuidado del cabello"),
  ],
  benefits: [
    {
      title: "Un estilo que va contigo",
      text: "Empezamos escuchando lo que buscas.",
    },
    {
      title: "Tiempo para los detalles",
      text: "Cuidamos el proceso, desde el primer corte hasta el acabado.",
    },
    {
      title: "Tu momento de pausa",
      text: "Un espacio para desconectar y volver a tu día con otro estilo.",
    },
  ],
  contact: {
    title: "Tu próximo buen corte empieza aquí.",
    text: "Elige tu servicio y consulta un horario por WhatsApp.",
    cta: "Reservar por WhatsApp",
  },
} satisfies TemplateConfig;
