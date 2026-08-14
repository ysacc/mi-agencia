/**
 * Preguntas frecuentes de la home.
 *
 * Vive en su propio archivo para poder reutilizarlo en el JSON-LD de FAQPage
 * con exactamente el mismo contenido que se muestra en pantalla (Google exige
 * que coincidan) sin romper el fast refresh de los componentes.
 */
export interface FaqData {
  q: string;
  a: string;
}

/** Nota: el importe del plan no se repite aqui; vive solo en servicios. */
export const FAQ_DATA: FaqData[] = [
  {
    q: "¿Qué incluye el plan Web Emprendedor?",
    a: "Una página web moderna con diseño responsive, botón de WhatsApp, formulario de contacto y puesta en línea. Es el punto de partida para empezar a captar clientes por internet.",
  },
  {
    q: "¿El precio es pago único?",
    a: "Sí. El desarrollo es pago único. El hosting y el dominio son opcionales y se pueden contratar aparte si lo deseas.",
  },
  {
    q: "¿Cuánto tiempo demora la entrega?",
    a: "Entre 3 y 7 días hábiles, dependiendo del contenido que nos brindes y de la cantidad de secciones.",
  },
  {
    q: "¿Puedo ampliar mi web más adelante?",
    a: "Claro. Puedes escalar tu web a tienda online, a un sistema a medida o sumar funcionalidades cuando tu negocio crezca, sin rehacerla desde cero.",
  },
  {
    q: "¿Necesito conocimientos técnicos?",
    a: "No. Nos encargamos de todo el desarrollo y la publicación. Tú solo nos cuentas a qué se dedica tu negocio y qué objetivos tienes.",
  },
  {
    q: "¿Trabajan con negocios de otras ciudades?",
    a: "Sí. Todo el proceso se puede llevar por WhatsApp, correo y videollamada, así que la ubicación no es un impedimento para trabajar juntos.",
  },
  {
    q: "¿Cómo me contacto para empezar?",
    a: "Escríbenos por WhatsApp o completa el formulario de contacto. Te respondemos con las preguntas necesarias para preparar una propuesta.",
  },
];

