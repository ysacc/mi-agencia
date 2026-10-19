import { WHATSAPP_NUMBER } from "../../lib/site";
import { photo, type TemplateConfig } from "../types";
export const profesionales = {
  id: "profesionales",
  name: "Servicios profesionales",
  category: "Servicios profesionales",
  description:
    "Diseño corporativo modular, con servicios, ventajas, proceso y un formulario de muestra.",
  preview: "/previews/profesionales.webp",
  business: {
    name: "NEXO.",
    slogan: "Conectamos ideas con próximos pasos.",
    whatsapp: WHATSAPP_NUMBER,
    address: "Lima, Perú · Oficina de ejemplo",
    hours: [
      "Lunes a viernes · 9:00 a. m. a 6:00 p. m.",
      "Reuniones previa coordinación · Ejemplo",
    ],
    instagram: "",
    facebook: "",
  },
  theme: { primary: "#2849c5", accent: "#e2e8ff", font: "geometric" },
  hero: {
    eyebrow: "CLARIDAD PARA TU SIGUIENTE PASO",
    title: "Ideas claras. Decisiones que avanzan.",
    subtitle:
      "Una mirada externa, una propuesta ordenada y un camino para transformar lo que quieres hacer en lo que puedes empezar hoy.",
    cta: "Conversemos sobre tu idea",
    image: photo(
      "professional-office",
      "Oficina contemporánea con espacios de trabajo abiertos",
    ),
  },
  about: {
    eyebrow: "UNA FORMA DE TRABAJAR",
    title: "Primero entendemos. Después proponemos.",
    text: "Nexo es una consultora ficticia. Su web muestra cómo un profesional puede comunicar su especialidad, explicar sus servicios y abrir una conversación sin complicaciones.",
    image: photo(
      "professional-team",
      "Equipo colaborando en una mesa de trabajo de referencia",
    ),
  },
  servicesTitle: "De la pregunta al próximo paso.",
  services: [
    {
      name: "Diagnóstico inicial",
      description:
        "Ordenamos el contexto y las preguntas para definir qué necesita atención.",
      detail: "01 / ENTENDER",
    },
    {
      name: "Propuesta a tu medida",
      description:
        "Un plan claro con objetivos, alcance y acciones que puedes evaluar.",
      detail: "02 / PROPONER",
    },
    {
      name: "Acompañamiento",
      description:
        "Un espacio de seguimiento para revisar decisiones y ajustar el camino.",
      detail: "03 / AVANZAR",
    },
  ],
  gallery: [
    photo(
      "professional-office",
      "Espacio de trabajo profesional de referencia",
    ),
    photo("professional-team", "Reunión de equipo ilustrativa"),
  ],
  benefits: [
    {
      title: "Una conversación directa",
      text: "Empezamos por escuchar el contexto de tu negocio.",
    },
    {
      title: "Propuestas comprensibles",
      text: "Sin lenguaje complicado: alcance, pasos y responsabilidades claros.",
    },
    {
      title: "Trabajo con enfoque",
      text: "La especialidad del profesional se presenta con una estructura útil para sus clientes.",
    },
  ],
  faqs: [
    {
      question: "¿Cómo empieza una consulta?",
      answer:
        "En una web real, el cliente podría compartir su necesidad por el formulario o por WhatsApp. Aquí el formulario es solo una muestra visual.",
    },
    {
      question: "¿La propuesta tiene un precio fijo?",
      answer:
        "En esta demostración no se cotizan servicios de consultoría. El contenido final y los precios los define el negocio que personalice la plantilla.",
    },
  ],
  contact: {
    title: "Hablemos de tu próximo paso.",
    text: "Este formulario es una demostración. No se envía ni almacena la información que escribas.",
    cta: "Conversar por WhatsApp",
  },
} satisfies TemplateConfig;
