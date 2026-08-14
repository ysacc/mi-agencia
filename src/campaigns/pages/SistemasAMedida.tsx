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
import SystemMockup from "../components/visuals/SystemMockup";

const campaign = getCampaign("sistemas-a-medida");

const PAINS: PainItem[] = [
  {
    title: "Varios Excel y nadie sabe cuál es la versión buena",
    text: "El archivo se copia, se comparte por chat y cada área termina trabajando con datos distintos.",
  },
  {
    title: "Información que se copia de un lado a otro a mano",
    text: "Los mismos datos se vuelven a escribir en otra planilla, en un correo y en un documento. Cada copia es una oportunidad de error.",
  },
  {
    title: "Solo una persona sabe dónde está todo",
    text: "Si esa persona no está, la operación se frena. El conocimiento vive en su cabeza y en sus archivos.",
  },
  {
    title: "Los reportes toman horas de armar",
    text: "Cuando por fin están listos, la información ya cambió y sirve para explicar el pasado, no para decidir.",
  },
  {
    title: "Aprobaciones y pedidos que se pierden en el chat",
    text: "Lo que se autorizó, quién lo pidió y cuándo, queda enterrado en conversaciones sin rastro ni orden.",
  },
  {
    title: "Sin control de quién hizo cada cambio",
    text: "No hay historial ni permisos: cualquiera puede modificar un dato crítico y nadie se entera hasta que falla algo.",
  },
];

const BENEFITS: BenefitItem[] = [
  {
    icon: "panel",
    title: "Sistemas web a medida",
    text: "Construidos sobre tu proceso real, no sobre el molde de un software genérico que hay que forzar.",
  },
  {
    icon: "dashboard",
    title: "Dashboards e indicadores",
    text: "La información que hoy armas a mano, disponible al momento y con los cortes que tú necesitas mirar.",
  },
  {
    icon: "shield",
    title: "Roles y permisos",
    text: "Cada persona ve y edita solo lo que le corresponde, con historial de cambios y trazabilidad.",
  },
  {
    icon: "users",
    title: "Gestión de clientes y operaciones",
    text: "Clientes, pedidos, inventarios, tareas o expedientes centralizados en un solo lugar consultable.",
  },
  {
    icon: "plug",
    title: "Integración con APIs",
    text: "Conectamos el sistema con las herramientas que ya usas para que los datos dejen de viajar a mano.",
  },
  {
    icon: "clock",
    title: "Automatizaciones",
    text: "Tareas repetitivas que se ejecutan solas: cálculos, avisos, generación de documentos y cargas periódicas.",
  },
  {
    icon: "bot",
    title: "Chatbots e IA cuando aportan valor",
    text: "Los proponemos únicamente cuando resuelven un problema concreto y medible, no por moda.",
  },
  {
    icon: "layers",
    title: "Arquitectura escalable",
    text: "Preparada para sumar módulos, usuarios y volumen sin tener que rehacer el sistema.",
  },
  {
    icon: "support",
    title: "Acompañamiento técnico",
    text: "Capacitación de tu equipo, soporte tras la puesta en marcha y mejoras por etapas.",
  },
];

const EXAMPLES: SolutionExample[] = [
  {
    icon: "users",
    title: "Gestión de clientes y seguimiento comercial",
    text: "Para equipos que hoy siguen sus oportunidades en una planilla compartida.",
    items: [
      "Ficha única por cliente",
      "Estados y responsables por caso",
      "Historial de contactos y documentos",
      "Alertas de seguimiento pendiente",
    ],
  },
  {
    icon: "box",
    title: "Operaciones, pedidos e inventario",
    text: "Cuando el control de qué entró, qué salió y qué queda depende de varias planillas.",
    items: [
      "Registro de movimientos",
      "Stock por almacén o punto de venta",
      "Alertas de mínimos",
      "Reportes de rotación",
    ],
  },
  {
    icon: "table",
    title: "Paneles de indicadores para dirección",
    text: "Para dejar de armar el mismo reporte manual cada semana o cada cierre de mes.",
    items: [
      "Indicadores por área",
      "Comparativos por periodo",
      "Exportación a Excel o PDF",
      "Acceso según el rol",
    ],
  },
  {
    icon: "form",
    title: "Flujos de aprobación y documentos",
    text: "Solicitudes, autorizaciones y expedientes que hoy viajan por chat y correo.",
    items: [
      "Formularios internos",
      "Aprobación por niveles",
      "Generación automática de documentos",
      "Trazabilidad de cada decisión",
    ],
  },
  {
    icon: "plug",
    title: "Integraciones y automatizaciones puntuales",
    text: "Cuando el sistema ya existe pero el trabajo manual está en conectarlo con lo demás.",
    items: [
      "Conexión entre sistemas por API",
      "Cargas y sincronizaciones programadas",
      "Notificaciones automáticas",
      "Procesos que se ejecutan solos",
    ],
  },
];

const PROCESS: ProcessStep[] = [
  {
    title: "Cuéntanos tu necesidad",
    text: "Nos describes el proceso que más trabajo manual te genera hoy y quiénes participan en él.",
  },
  {
    title: "Evaluamos la solución",
    text: "Revisamos el flujo actual, identificamos qué conviene automatizar primero y definimos el alcance por etapas con una cotización personalizada.",
  },
  {
    title: "Diseñamos y desarrollamos",
    text: "Trabajamos por entregas funcionales: ves avances reales y ajustamos con tu equipo antes de seguir.",
  },
  {
    title: "Publicamos y acompañamos",
    text: "Ponemos el sistema en producción, migramos la información necesaria, capacitamos al equipo y damos soporte posterior.",
  },
];

const FAQ: FaqItem[] = [
  {
    q: "¿Tengo que cambiar toda mi forma de trabajar?",
    a: "No. El punto de partida es tu proceso actual: primero lo entendemos y luego decidimos qué conviene mantener, qué simplificar y qué automatizar. Cambiar todo de golpe es la forma más rápida de que un sistema no se use.",
  },
  {
    q: "¿Se puede integrar con las herramientas que ya uso?",
    a: "En la mayoría de los casos sí, siempre que la herramienta ofrezca una API o alguna forma de exportar e importar datos. Lo verificamos durante la evaluación, antes de comprometer nada.",
  },
  {
    q: "¿Qué pasa con la información que tengo en Excel?",
    a: "Se puede migrar. Revisamos la estructura de tus planillas, limpiamos lo que haga falta y cargamos los datos al sistema. También podemos dejar la importación desde Excel disponible para tu operación diaria.",
  },
  {
    q: "¿Cuánto demora un desarrollo así?",
    a: "Depende del alcance, y por eso trabajamos por etapas: se define una primera entrega útil y a partir de ahí se suman módulos. En la evaluación te damos el plan con entregables y plazos por escrito.",
  },
  {
    q: "¿Necesito un sistema completo o puedo empezar más chico?",
    a: "Muchas veces conviene empezar por una automatización concreta o por centralizar un solo proceso. Si con eso resuelves el problema, no hace falta un sistema completo. Te lo decimos aunque signifique un proyecto más pequeño.",
  },
  {
    q: "¿Sirve la inteligencia artificial en mi caso?",
    a: "Solo si aporta valor real: clasificar información, redactar respuestas repetitivas, extraer datos de documentos o atender consultas frecuentes. Si tu problema se resuelve mejor con una automatización simple, te lo proponemos así.",
  },
  {
    q: "¿Quién mantiene el sistema después?",
    a: "Podemos hacernos cargo del mantenimiento y las mejoras, o dejar el proyecto documentado para que lo lleve tu equipo técnico. Se define contigo desde el inicio, junto con la propiedad del código.",
  },
];

const SistemasAMedida: React.FC = () => (
  <CampaignLayout campaign={campaign}>
    <CampaignHero
      eyebrow="Para empresas y equipos con procesos manuales"
      title={
        <>
          Si tu proceso depende de muchos Excel y mensajes, es momento de{" "}
          <span className="cmp-highlight">automatizarlo</span>.
        </>
      }
      subtitle="Desarrollamos sistemas, paneles y aplicaciones a medida para reducir trabajo manual y mejorar el control de tu operación."
      note="Solicita una evaluación · Revisamos tu proceso antes de proponer una solución."
      bullets={[
        "Partimos de tu proceso actual",
        "Entregas por etapas, con avances visibles",
        "Integración con lo que ya usas",
      ]}
      secondary={{ label: "Ver qué desarrollamos", href: "#que-desarrollamos" }}
      visual={<SystemMockup />}
    />

    <PainPoints
      title="¿Te pasa esto en tu operación?"
      subtitle="Señales de que el proceso ya creció más de lo que las planillas pueden sostener."
      items={PAINS}
      variant="signals"
      closing="Cuando el proceso depende de la memoria de alguien y de archivos sueltos, el problema no es la falta de esfuerzo: es la falta de un sistema."
    />

    <section id="alcance" className="cmp-section cmp-band">
      <div className="cmp-container">
        <Reveal className="cmp-heading">
          <h2 className="cmp-h2">No siempre hace falta un sistema completo</h2>
          <p className="cmp-lead">
            Antes de proponer un desarrollo grande, evaluamos cuál de estos tres
            niveles resuelve tu problema. A veces el más chico es suficiente.
          </p>
        </Reveal>

        <ol className="cmp-levels">
          <Reveal as="li" className="cmp-level">
            <span className="cmp-level-tag">Nivel 1</span>
            <h3 className="cmp-h3">Automatizar una tarea puntual</h3>
            <p>
              Un cálculo, un reporte, un aviso o una carga de datos que hoy
              alguien hace a mano todas las semanas.
            </p>
          </Reveal>
          <Reveal as="li" className="cmp-level" delay={80}>
            <span className="cmp-level-tag">Nivel 2</span>
            <h3 className="cmp-h3">Centralizar un proceso</h3>
            <p>
              Un módulo web donde ese proceso vive completo: registro, estados,
              responsables e historial, con acceso para todo el equipo.
            </p>
          </Reveal>
          <Reveal as="li" className="cmp-level" delay={160}>
            <span className="cmp-level-tag">Nivel 3</span>
            <h3 className="cmp-h3">Sistema a medida</h3>
            <p>
              Varios módulos conectados, con roles, indicadores e integraciones,
              construidos por etapas sobre una base escalable.
            </p>
          </Reveal>
        </ol>
      </div>
    </section>

    <BenefitsGrid
      eyebrow="La solución"
      title="Qué obtienes con un sistema hecho para tu operación"
      subtitle="Menos trabajo manual, menos errores de transcripción y una sola fuente de información confiable."
      items={BENEFITS}
      columns={3}
    />

    <SolutionExamples
      title="Qué podemos desarrollar"
      subtitle="Casos típicos por los que suelen empezar las empresas que nos escriben."
      examples={EXAMPLES}
      variant="modules"
      footnote="Si tu proceso no encaja en ninguno de estos, es justamente el tipo de caso que evaluamos: cuéntanoslo y lo revisamos."
    />

    <ProcessSteps
      title="Cómo trabajamos"
      subtitle="Un camino por etapas, para que cada avance sea utilizable y no una promesa a futuro."
      steps={PROCESS}
    />

    <section className="cmp-section cmp-note-section">
      <div className="cmp-container">
        <Reveal className="cmp-note-box">
          <span className="cmp-card-icon" aria-hidden="true">
            <Icon name="search" size={22} />
          </span>
          <div>
            <h2 className="cmp-h3">Qué revisamos en la evaluación</h2>
            <p>
              Cómo entra y sale la información hoy, cuántas personas intervienen,
              dónde se repite el trabajo manual, qué herramientas ya usas y qué
              decisiones dependen de esos datos. Con eso definimos qué automatizar
              primero y qué puede esperar.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    <CampaignFAQ
      title="Preguntas frecuentes"
      subtitle="Lo que nos consultan las empresas antes de iniciar un desarrollo a medida."
      items={FAQ}
    />

    <CampaignCTA
      title="Conversemos sobre tu proceso"
      text="Descríbenos la tarea que más tiempo manual te consume. Te decimos si conviene automatizarla, centralizarla o desarrollar un sistema, y te enviamos una cotización personalizada."
      hints={[
        "Qué proceso te genera más trabajo manual",
        "Cuántas personas participan en él",
        "Qué herramientas usan hoy (Excel, correo, chat, otros sistemas)",
      ]}
      note="Sin compromiso. Primero evaluamos, después proponemos el alcance."
    />
  </CampaignLayout>
);

export default SistemasAMedida;
