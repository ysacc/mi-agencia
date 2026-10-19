import { WHATSAPP_NUMBER } from "../../lib/site";
import { photo, type TemplateConfig } from "../types";
export const restaurante = {
  id: "restaurante",
  name: "Restaurante",
  category: "Restaurantes",
  description:
    "Una mesa editorial y cálida, con fotografía gastronómica, carta y especialidades.",
  preview: "/previews/restaurante.webp",
  business: {
    name: "MESA DE AUTOR",
    slogan: "Siempre hay un motivo para compartir.",
    whatsapp: WHATSAPP_NUMBER,
    address: "Lima, Perú · Ubicación ilustrativa, sin local real",
    hours: [
      "Martes a viernes · 12:00 p. m. a 10:00 p. m.",
      "Sábados y domingos · 12:00 p. m. a 11:00 p. m.",
      "Lunes · Descanso de cocina",
    ],
    instagram: "",
    facebook: "",
  },
  theme: { primary: "#85432e", accent: "#e3c097", font: "editorial" },
  hero: {
    eyebrow: "COCINA CON HISTORIAS",
    title: "Las mejores historias empiezan en la mesa.",
    subtitle:
      "Ingredientes que se encuentran, conversaciones que se alargan y platos que invitan a volver.",
    cta: "Descubre nuestra carta",
    image: photo(
      "restaurant-food",
      "Platos y alimentos servidos en una mesa de restaurante",
    ),
  },
  about: {
    eyebrow: "DE NUESTRA COCINA A TU MESA",
    title: "Una pausa que sabe a casa.",
    text: "MESA nace de una idea sencilla: disfrutar de la comida y de quienes nos acompañan. Nuestra propuesta de ejemplo combina recetas conocidas con una mirada propia.",
    image: photo(
      "restaurant-room",
      "Restaurante acogedor con mesas y luz cálida",
    ),
  },
  servicesTitle: "Hecho para disfrutar.",
  services: [
    {
      name: "Pasta de la casa",
      description: "Pasta con pesto de hierbas, vegetales y un toque de queso.",
      price: "S/ 32",
      detail: "Especialidad · Precio de ejemplo",
      image: photo("restaurant-pasta", "Pasta con salsa y hierbas frescas"),
    },
    {
      name: "Sabores a la parrilla",
      description:
        "Una propuesta de cocina al fuego con acompañamientos de temporada.",
      price: "S/ 46",
      detail: "Plato principal · Precio de ejemplo",
      image: photo(
        "restaurant-food",
        "Plato de cocina de restaurante listo para compartir",
      ),
    },
    {
      name: "Para compartir",
      description:
        "Una selección de entradas para comenzar una buena conversación.",
      price: "S/ 28",
      detail: "Entrada · Precio de ejemplo",
      image: photo(
        "restaurant-food",
        "Platos de cocina de referencia para compartir",
      ),
    },
  ],
  gallery: [
    photo("restaurant-food", "Mesa con platos de muestra"),
    photo("restaurant-pasta", "Especialidad de pasta de muestra"),
    photo("restaurant-room", "Ambiente gastronómico ilustrativo"),
  ],
  benefits: [
    {
      title: "El producto al centro",
      text: "Una carta clara con ingredientes y propuestas que puedes conocer antes de pedir.",
    },
    {
      title: "Una mesa para compartir",
      text: "Un ambiente pensado para disfrutar de la compañía.",
    },
    {
      title: "Sin complicaciones",
      text: "Consulta la carta o coordina tu pedido por WhatsApp.",
    },
  ],
  contact: {
    title: "Siempre hay lugar para una buena conversación.",
    text: "Consulta nuestra carta, una mesa o un pedido para llevar.",
    cta: "Consultar pedido por WhatsApp",
  },
} satisfies TemplateConfig;
