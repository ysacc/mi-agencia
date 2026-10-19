import { WHATSAPP_NUMBER } from "../../lib/site";
import { photo, type TemplateConfig } from "../types";
export const belleza = {
  id: "belleza",
  name: "Belleza y estética",
  category: "Belleza y estética",
  description:
    "Una composición suave y elegante, con tratamientos, precios ilustrativos y reservas.",
  preview: "/previews/belleza.webp",
  business: {
    name: "aura.",
    slogan: "Una pausa para volver a ti.",
    whatsapp: WHATSAPP_NUMBER,
    address: "Lima, Perú · Estudio ficticio, ubicación de ejemplo",
    hours: [
      "Lunes a viernes · 10:00 a. m. a 7:00 p. m.",
      "Sábados · 9:00 a. m. a 5:00 p. m.",
      "Atención con reserva · Ejemplo",
    ],
    instagram: "",
    facebook: "",
  },
  theme: { primary: "#8b4f67", accent: "#e7c4d0", font: "editorial" },
  hero: {
    eyebrow: "UN MOMENTO SOLO PARA TI",
    title: "Tu momento de sentirte tú.",
    subtitle:
      "Baja el ritmo. Encuentra una experiencia de cuidado que combine contigo, en un espacio para disfrutar sin prisa.",
    cta: "Descubre tu próximo ritual",
    image: photo(
      "beauty-care",
      "Espacio de bienestar abierto hacia un jardín tropical",
    ),
  },
  about: {
    eyebrow: "BELLEZA CON CALMA",
    title: "Cuidarte también puede ser un pequeño ritual.",
    text: "Aura es un estudio ficticio de belleza. Esta propuesta muestra cómo presentar tratamientos, el ambiente y un canal de reservas, sin promesas de resultados.",
    image: photo(
      "beauty-spa",
      "Toallas y productos de cuidado personal junto a flores",
    ),
  },
  servicesTitle: "Elige una pausa a tu medida.",
  services: [
    {
      name: "Ritual facial",
      description:
        "Una experiencia de limpieza y cuidado para disfrutar con calma.",
      price: "S/ 90",
      detail: "60 min · Precio de ejemplo",
    },
    {
      name: "Manos en armonía",
      description:
        "Cuidado de manos, esmaltado y detalles que completan tu estilo.",
      price: "S/ 45",
      detail: "45 min · Precio de ejemplo",
    },
    {
      name: "Momento de bienestar",
      description: "Una pausa de relajación en un ambiente cálido y cuidado.",
      price: "S/ 120",
      detail: "75 min · Precio de ejemplo",
    },
  ],
  galleryTitle: "Un lugar para bajar el ritmo.",
  gallery: [
    photo("beauty-care", "Experiencia ilustrativa de cuidado personal"),
    photo("beauty-spa", "Espacio de bienestar de referencia"),
  ],
  benefits: [
    {
      title: "A tu ritmo",
      text: "Un momento sin prisa para dedicarte atención.",
    },
    {
      title: "Detalles que se sienten",
      text: "Una experiencia pensada desde el ambiente hasta el cuidado final.",
    },
    {
      title: "Tu propia forma de cuidarte",
      text: "Conoce la propuesta y elige lo que mejor va contigo.",
    },
  ],
  contact: {
    title: "Hazle espacio a tu próximo momento.",
    text: "Consulta tratamientos y horarios antes de reservar.",
    cta: "Reservar por WhatsApp",
  },
} satisfies TemplateConfig;
