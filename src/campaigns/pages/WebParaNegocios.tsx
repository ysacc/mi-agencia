import React from "react";
import { getCampaign } from "../campaignConfig";
import CampaignLayout from "../components/CampaignLayout";
import CampaignHero from "../components/CampaignHero";
import PainPoints, { type PainItem } from "../components/PainPoints";
import BenefitsGrid, { type BenefitItem } from "../components/BenefitsGrid";
import SolutionExamples, {
  type SolutionExample,
} from "../components/SolutionExamples";
import ProcessSteps, { type ProcessStep } from "../components/ProcessSteps";
import CampaignFAQ, { type FaqItem } from "../components/CampaignFAQ";
import CampaignCTA from "../components/CampaignCTA";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import WebMockup from "../components/visuals/WebMockup";

const campaign = getCampaign("web-para-negocios");

const PAINS: PainItem[] = [
  {
    icon: "chat",
    title: "Respondes lo mismo todos los días",
    text: "Horarios, dirección, si atiendes hoy, qué servicios das. Las mismas preguntas, una y otra vez, en cada chat.",
  },
  {
    icon: "search",
    title: "Tu información está enterrada en publicaciones viejas",
    text: "Un cliente nuevo tendría que revisar meses de fotos para entender qué haces y cómo contactarte.",
  },
  {
    icon: "globe",
    title: "No apareces cuando te buscan por internet",
    text: "Si alguien busca tu rubro en tu zona, encuentra a otros negocios antes que al tuyo.",
  },
  {
    icon: "form",
    title: "Tu carta o catálogo vive en un PDF",
    text: "Lo envías por chat, queda desactualizado y el cliente termina preguntando igual.",
  },
  {
    icon: "shield",
    title: "No transmites en internet la confianza que das en persona",
    text: "Un perfil suelto se ve improvisado al lado de un negocio con su propio sitio y su información ordenada.",
  },
  {
    icon: "alert",
    title: "Dependes de una plataforma que no controlas",
    text: "Si pierdes el acceso a la cuenta, pierdes también el canal por donde te contactan tus clientes.",
  },
];

const BENEFITS: BenefitItem[] = [
  {
    icon: "shield",
    title: "Imagen profesional y confiable",
    text: "Un sitio propio, con tu marca y tu información ordenada, para que el cliente decida contactarte con seguridad.",
  },
  {
    icon: "mobile",
    title: "Diseño adaptable a celulares",
    text: "La mayoría te va a ver desde el teléfono: la web se lee y se navega bien en pantallas pequeñas.",
  },
  {
    icon: "chat",
    title: "Integración con WhatsApp",
    text: "Botón directo a tu WhatsApp con el mensaje ya escrito, para que el cliente solo tenga que enviarlo.",
  },
  {
    icon: "form",
    title: "Formulario de contacto",
    text: "Para quienes prefieren dejar sus datos y que los llames tú, sin perder el contacto.",
  },
  {
    icon: "clock",
    title: "Información disponible las 24 horas",
    text: "Horarios, servicios, ubicación y formas de contacto siempre visibles, aunque tú estés atendiendo.",
  },
  {
    icon: "search",
    title: "Optimización técnica y SEO básico",
    text: "Títulos, descripciones y estructura preparados para que los buscadores entiendan de qué trata tu negocio.",
  },
  {
    icon: "rocket",
    title: "Dominio y despliegue profesional",
    text: "Publicamos tu web con dominio propio, certificado seguro y buena velocidad de carga.",
  },
  {
    icon: "growth",
    title: "Preparada para crecer",
    text: "Después puedes sumar catálogo, reservas, blog o tienda sin rehacer todo desde cero.",
  },
];

const EXAMPLES: SolutionExample[] = [
  {
    icon: "store",
    title: "Negocio local con atención presencial",
    text: "Restaurantes, cafeterías, barberías, talleres, gimnasios y tiendas de barrio.",
    items: [
      "Carta o lista de servicios",
      "Horarios y ubicación con mapa",
      "Galería de fotos reales del local",
      "Botón de WhatsApp para reservar o consultar",
    ],
  },
  {
    icon: "users",
    title: "Profesional independiente o consultorio",
    text: "Abogados, contadores, psicólogos, odontólogos, nutricionistas, arquitectos.",
    items: [
      "Presentación y áreas de especialidad",
      "Explicación clara de cada servicio",
      "Formulario para solicitar una cita",
      "Página de preguntas frecuentes",
    ],
  },
  {
    icon: "layers",
    title: "Pequeña empresa que necesita presencia formal",
    text: "Para cotizar, postular a clientes más grandes o respaldar tu propuesta comercial.",
    items: [
      "Página institucional y de servicios",
      "Sección de trabajos o experiencia",
      "Correo con tu propio dominio",
      "Contacto y ubicación de oficina",
    ],
  },
  {
    icon: "map",
    title: "Página de captación para tus anuncios",
    text: "Una sola página enfocada en que quien llega desde un anuncio te escriba.",
    items: [
      "Mensaje directo al problema del cliente",
      "Un único objetivo de contacto",
      "Carga rápida en datos móviles",
      "Medición de clics y contactos",
    ],
  },
];

const PROCESS: ProcessStep[] = [
  {
    title: "Cuéntanos tu necesidad",
    text: "Nos escribes por WhatsApp y nos explicas qué hace tu negocio, a quién atiendes y qué te piden tus clientes.",
  },
  {
    title: "Evaluamos la solución",
    text: "Definimos qué páginas necesitas, qué información hay que mostrar y qué falta reunir. Te enviamos una cotización personalizada.",
  },
  {
    title: "Diseñamos y desarrollamos",
    text: "Armamos el diseño con tu identidad, cargamos tu contenido y lo revisamos contigo antes de publicar.",
  },
  {
    title: "Publicamos y acompañamos",
    text: "Ponemos la web en línea con tu dominio y te explicamos cómo usarla. Quedamos disponibles para los ajustes que surjan.",
  },
];

const FAQ: FaqItem[] = [
  {
    q: "¿Cuánto cuesta una página web para mi negocio?",
    a: "Depende de cuántas páginas necesites, qué información quieras mostrar y si hace falta preparar contenido. Por eso trabajamos con cotización personalizada: cuéntanos qué necesitas y te enviamos una propuesta con el alcance por escrito.",
  },
  {
    q: "No tengo logo ni fotos, ¿igual puedo tener mi web?",
    a: "Sí. Lo revisamos en la evaluación: definimos qué material es imprescindible, qué podemos resolver nosotros y qué conviene que consigas tú, por ejemplo fotos reales de tu local o de tu trabajo.",
  },
  {
    q: "¿Voy a poder actualizar la información yo mismo?",
    a: "Lo definimos según tu caso. Si necesitas cambiar precios, horarios o publicaciones seguido, preparamos la web para que puedas editarla sin depender de nosotros. Si son cambios ocasionales, nos encargamos nosotros.",
  },
  {
    q: "¿Incluye dominio y publicación?",
    a: "Sí, nos ocupamos de dejar la web publicada con tu dominio, certificado de seguridad y todo configurado. En la propuesta te detallamos qué queda a nuestro cargo y qué servicios se renuevan cada año.",
  },
  {
    q: "¿Mi web va a aparecer en Google?",
    a: "Entregamos la web con la optimización técnica y el SEO básico bien hechos: estructura, títulos, descripciones e indexación. Aparecer en las primeras posiciones depende además de tu rubro y competencia, y es un trabajo continuo que podemos evaluar aparte.",
  },
  {
    q: "Solo quiero que me escriban por WhatsApp, ¿me sirve?",
    a: "Justamente para eso funciona bien. La web ordena tu información y guía al visitante hacia el botón de WhatsApp, con el mensaje ya preparado. Tú recibes la consulta con contexto y no partiendo de cero.",
  },
];

const WebParaNegocios: React.FC = () => (
  <CampaignLayout campaign={campaign}>
    <CampaignHero
      eyebrow="Para negocios locales, profesionales y emprendedores"
      title={
        <>
          Tu negocio merece algo más que{" "}
          <span className="cmp-highlight">un perfil en redes sociales</span>.
        </>
      }
      subtitle="Creamos una página web profesional para que tus clientes conozcan tus servicios, confíen en tu negocio y puedan contactarte fácilmente."
      note="Cotización personalizada · Cuéntanos qué necesitas y te respondemos con una propuesta."
      bullets={[
        "Se ve bien en el celular",
        "Botón de WhatsApp integrado",
        "Tu información siempre disponible",
      ]}
      secondary={{ label: "Ver qué incluye", href: "#solucion" }}
      visual={<WebMockup />}
    />

    <PainPoints
      title="¿Te pasa esto?"
      subtitle="Son las señales más comunes de un negocio que ya necesita su propia web."
      items={PAINS}
      variant="cards"
      closing="Ninguno de estos problemas se resuelve publicando más seguido. Se resuelven teniendo un lugar propio donde tu información esté clara y ordenada."
    />

    <section id="busqueda" className="cmp-section cmp-band">
      <div className="cmp-container cmp-band-inner">
        <Reveal className="cmp-band-copy">
          <h2 className="cmp-h2">
            Cuando alguien te recomienda, lo primero que hace es buscarte
          </h2>
          <p className="cmp-lead">
            Tu próximo cliente te va a buscar antes de escribirte. Lo que
            encuentre en ese momento decide si te contacta o si sigue buscando.
          </p>
          <ul className="cmp-check-list">
            <li>
              <Icon name="check" size={18} />
              <span>Encuentra qué haces exactamente, sin tener que preguntar.</span>
            </li>
            <li>
              <Icon name="check" size={18} />
              <span>Ve tus horarios, tu zona de atención y cómo llegar.</span>
            </li>
            <li>
              <Icon name="check" size={18} />
              <span>Te escribe con un clic, desde el celular, en el momento.</span>
            </li>
          </ul>
        </Reveal>

        <Reveal className="cmp-serp" delay={100}>
          <div className="cmp-serp-bar">
            <Icon name="search" size={16} />
            <span>tu servicio + tu ciudad</span>
          </div>
          <div className="cmp-serp-result is-you">
            <span className="cmp-serp-url">tunegocio.com</span>
            <span className="cmp-serp-title">
              Tu negocio — servicios, horarios y contacto
            </span>
            <span className="cmp-line cmp-line-md" />
            <span className="cmp-serp-tag">Tu web</span>
          </div>
          <div className="cmp-serp-result">
            <span className="cmp-line cmp-line-xs" />
            <span className="cmp-line cmp-line-md" />
          </div>
          <div className="cmp-serp-result">
            <span className="cmp-line cmp-line-xs" />
            <span className="cmp-line cmp-line-sm" />
          </div>
        </Reveal>
      </div>
    </section>

    <BenefitsGrid
      eyebrow="La solución"
      title="Una web simple, clara y hecha para que te contacten"
      subtitle="Sin secciones de relleno: solo lo que ayuda a que un visitante entienda tu negocio y te escriba."
      items={BENEFITS}
      columns={4}
    />

    <SolutionExamples
      title="Qué podemos desarrollar"
      subtitle="Adaptamos la estructura al tipo de negocio y a la forma en que atiendes a tus clientes."
      examples={EXAMPLES}
      variant="tiles"
      footnote="¿Tu caso no está en la lista? Escríbenos igual: evaluamos qué necesitas antes de proponer nada."
    />

    <ProcessSteps
      title="Cómo trabajamos"
      subtitle="Un proceso corto y sin vueltas, pensado para que no tengas que estar encima."
      steps={PROCESS}
    />

    <CampaignFAQ
      title="Preguntas frecuentes"
      subtitle="Lo que más nos consultan los negocios que todavía no tienen web."
      items={FAQ}
    />

    <CampaignCTA
      title="Conversemos sobre tu negocio"
      text="Cuéntanos a qué te dedicas y qué te preguntan siempre tus clientes. Con eso te decimos qué necesita tu web y te enviamos una cotización personalizada."
      hints={[
        "A qué se dedica tu negocio",
        "Si ya tienes logo, fotos o dominio",
        "Qué te gustaría que haga la web",
      ]}
      note="Sin compromiso. Respondemos con una propuesta clara del alcance."
    />
  </CampaignLayout>
);

export default WebParaNegocios;
