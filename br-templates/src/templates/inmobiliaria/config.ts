import { WHATSAPP_NUMBER } from "../../lib/site";
import { photo, type TemplateConfig } from "../types";
export const inmobiliaria = {
  id: "inmobiliaria",
  name: "Inmobiliaria",
  category: "Inmobiliarias",
  description:
    "Una portada panorámica y una colección de propiedades ficticias con una consulta visual.",
  preview: "/previews/inmobiliaria.webp",
  business: {
    name: "HÁBITAT",
    slogan: "Espacios para nuevas historias.",
    whatsapp: WHATSAPP_NUMBER,
    address: "Lima, Perú · Todas las ubicaciones son ficticias",
    hours: [
      "Lunes a viernes · 9:00 a. m. a 6:00 p. m.",
      "Visitas previa coordinación · Ejemplo",
    ],
    instagram: "",
    facebook: "",
  },
  theme: { primary: "#364b42", accent: "#ded6bc", font: "system" },
  hero: {
    eyebrow: "UNA FORMA DISTINTA DE HABITAR",
    title: "Más que un espacio. Tu próximo lugar.",
    subtitle:
      "Lugares con luz, personalidad y espacio para lo que viene. Explora nuestra colección de demostración.",
    cta: "Explorar propiedades",
    image: photo(
      "estate-home",
      "Casa contemporánea con grandes ventanas y jardín",
    ),
  },
  about: {
    eyebrow: "LO IMPORTANTE ES CÓMO LO VIVES",
    title: "Encontrar un lugar también es encontrar posibilidades.",
    text: "Hábitat es una marca ficticia creada para mostrar una web inmobiliaria. Sus propiedades, precios, ubicaciones y características son ejemplos, sin inmuebles disponibles para venta o alquiler.",
    image: photo(
      "estate-interior",
      "Interior de vivienda contemporánea con luz natural",
    ),
  },
  servicesTitle: "Espacios con personalidad.",
  services: [
    {
      name: "Encuentra tu espacio",
      description:
        "Una selección visual para comparar estilos y características de propiedades.",
    },
    {
      name: "Conoce cada detalle",
      description:
        "Fotografías, distribución y datos esenciales en una presentación ordenada.",
    },
    {
      name: "Conversemos",
      description:
        "Un camino sencillo para consultar por una propiedad de tu interés.",
    },
  ],
  properties: [
    {
      name: "Casa Jardín",
      label: "CASA · DEMOSTRACIÓN",
      location: "Zona Jardín · Ubicación ficticia",
      price: "S/ 680,000",
      features: ["180 m² · Ejemplo", "3 dormitorios", "2 baños"],
      image: photo("estate-home", "Casa de referencia con jardín"),
    },
    {
      name: "Departamento Luz",
      label: "DEPARTAMENTO · DEMOSTRACIÓN",
      location: "Zona Parque · Ubicación ficticia",
      price: "S/ 420,000",
      features: ["95 m² · Ejemplo", "2 dormitorios", "2 baños"],
      image: photo(
        "estate-interior",
        "Interior luminoso de una vivienda de referencia",
      ),
    },
    {
      name: "Residencia Olivo",
      label: "RESIDENCIA · DEMOSTRACIÓN",
      location: "Zona Olivo · Ubicación ficticia",
      price: "S/ 890,000",
      features: ["240 m² · Ejemplo", "4 dormitorios", "Jardín"],
      image: photo("estate-living", "Sala de una vivienda de referencia"),
    },
  ],
  gallery: [
    photo("estate-home", "Arquitectura residencial ilustrativa"),
    photo("estate-interior", "Interior residencial ilustrativo"),
    photo("estate-living", "Espacio de estar ilustrativo"),
  ],
  benefits: [
    {
      title: "Información en un solo lugar",
      text: "Compara la propuesta de cada espacio con datos claros.",
    },
    {
      title: "Una mirada más cercana",
      text: "Conoce el carácter de cada propiedad a través de sus fotografías.",
    },
    {
      title: "El siguiente paso, sencillo",
      text: "Consulta y coordina una conversación desde la misma página.",
    },
  ],
  contact: {
    title: "Cuéntanos qué lugar tienes en mente.",
    text: "Este es un formulario de demostración. No envía datos, no reserva visitas y no anuncia propiedades reales.",
    cta: "Consultar por WhatsApp",
  },
} satisfies TemplateConfig;
