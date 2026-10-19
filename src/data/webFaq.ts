import { EXTRA_SECTION_PRICE, money } from "./plans";
export const WEB_FAQ = [
  {
    q: "¿Qué necesito para comenzar?",
    a: "Cuéntanos sobre tu negocio y elige un plan. Tú entregas los textos, las imágenes y el logotipo. Revisamos los materiales y acordamos el alcance antes de iniciar.",
  },
  {
    q: "¿Qué son una página y una sección?",
    a: "Una página tiene su propia dirección dentro de tu web. Una sección es un bloque dentro de esa página, como servicios, presentación o contacto. Los límites de secciones se cuentan en total, no por página.",
  },
  {
    q: "¿El precio incluye dominio y hosting?",
    a: "No. Los planes tienen un pago único por el desarrollo. El dominio (el nombre de tu web), el hosting (donde se publica) y el mantenimiento se cotizan por separado. Si ya los tienes, revisamos si se pueden utilizar.",
  },
  {
    q: "¿Puedo agregar más secciones?",
    a: `Puedes solicitar secciones adicionales por ${money(EXTRA_SECTION_PRICE)} cada una. Como exceden los límites publicados del plan, revisamos su viabilidad y confirmamos el alcance antes de aceptarlas. El cálculo es provisional y no añade páginas independientes.`,
  },
  {
    q: "¿Cuánto demora crear mi página web?",
    a: "Confirmamos un plazo después de revisar el contenido, la personalización y el alcance. Antes de contratar tendrás una propuesta con las condiciones acordadas.",
  },
  {
    q: "¿Puedo vender productos o editar la web desde un panel?",
    a: "Estos planes no incluyen ecommerce, pagos online, panel administrable, integraciones personalizadas ni funcionalidades complejas. Están enfocados en presentar tu negocio y recibir consultas.",
  },
  {
    q: "¿Qué es una ronda de revisión?",
    a: "Es una entrega de tus comentarios agrupados para ajustar el diseño acordado. La cantidad depende del plan. Las nuevas funcionalidades o cambios de alcance se revisan por separado.",
  },
];
