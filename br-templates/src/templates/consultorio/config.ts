import { WHATSAPP_NUMBER } from "../../lib/site";
import { photo, type TemplateConfig } from "../types";
export const consultorio = {
  id: "consultorio",
  name: "Consultorio",
  category: "Salud y bienestar",
  description:
    "Una presentación médica serena, con especialidades, equipo ilustrativo y solicitud de citas.",
  preview: "/previews/consultorio.webp",
  business: {
    name: "SERENA / SALUD",
    slogan: "Escucharte es el primer paso.",
    whatsapp: WHATSAPP_NUMBER,
    address: "Lima, Perú · Dirección de demostración, sin consultorio real",
    hours: [
      "Lunes a viernes · 8:00 a. m. a 7:00 p. m.",
      "Sábados · 8:00 a. m. a 1:00 p. m.",
      "Atención previa coordinación · Ejemplo",
    ],
    instagram: "",
    facebook: "",
  },
  theme: { primary: "#237469", accent: "#d9eee7", font: "system" },
  hero: {
    eyebrow: "ATENCIÓN CON ENFOQUE HUMANO",
    title: "Un espacio para cuidar de ti.",
    subtitle:
      "Información clara, un equipo que escucha y una atención que empieza antes de tu visita.",
    cta: "Consultar una cita",
    image: photo(
      "clinic-care",
      "Atención profesional de salud en un entorno clínico",
    ),
  },
  about: {
    eyebrow: "CONOCE EL ENFOQUE",
    title: "Tu tranquilidad también es parte del cuidado.",
    text: "Este consultorio ficticio muestra cómo presentar servicios de salud con claridad. Una web para conocer las especialidades, al equipo y los pasos para coordinar una visita.",
    image: photo("clinic-space", "Espacio clínico luminoso y ordenado"),
  },
  servicesTitle: "Información para dar el primer paso.",
  services: [
    {
      name: "Medicina general",
      description:
        "Presenta aquí el alcance de la consulta, los horarios y cómo coordinar una visita.",
      detail: "Especialidad de ejemplo",
    },
    {
      name: "Odontología",
      description:
        "Un bloque para explicar los servicios de evaluación y cuidado oral disponibles.",
      detail: "Especialidad de ejemplo",
    },
    {
      name: "Nutrición",
      description:
        "Una presentación sencilla del servicio de orientación alimentaria.",
      detail: "Especialidad de ejemplo",
    },
  ],
  gallery: [
    photo("clinic-space", "Ambiente de atención de salud de referencia"),
    photo("clinic-care", "Escena de atención profesional de referencia"),
  ],
  benefits: [
    {
      title: "Información accesible",
      text: "Conoce los servicios y consulta lo que necesitas antes de asistir.",
    },
    {
      title: "Coordinación sencilla",
      text: "Un canal directo para solicitar disponibilidad y orientación.",
    },
    {
      title: "Atención con claridad",
      text: "Explica tu enfoque sin promesas de resultados ni lenguaje complicado.",
    },
  ],
  team: [
    {
      name: "Profesional de ejemplo 01",
      role: "Medicina general · Perfil ilustrativo",
      initials: "MG",
    },
    {
      name: "Profesional de ejemplo 02",
      role: "Odontología · Perfil ilustrativo",
      initials: "OD",
    },
    {
      name: "Profesional de ejemplo 03",
      role: "Nutrición · Perfil ilustrativo",
      initials: "NU",
    },
  ],
  contact: {
    title: "Resolvamos tus dudas antes de tu visita.",
    text: "Consulta disponibilidad y los pasos para solicitar una cita. Esta demo no brinda atención médica ni gestiona emergencias.",
    cta: "Solicitar información por WhatsApp",
  },
} satisfies TemplateConfig;
