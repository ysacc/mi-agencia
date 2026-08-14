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
import RelatedServices from "../components/RelatedServices";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import ShopMockup from "../components/visuals/ShopMockup";
import JsonLd from "../../components/JsonLd";
import {
  buildBreadcrumb,
  buildFaqPage,
  buildGraph,
  buildServiceGraph,
} from "../../lib/structuredData";

const campaign = getCampaign("tienda-online");

const PAINS: PainItem[] = [
  {
    title: "«¿Tienes esto en talla M?»",
    text: "Revisas el stock a mano, tardas en responder y la venta se enfría mientras buscas.",
  },
  {
    title: "«Mándame fotos y precios»",
    text: "Reenvías las mismas imágenes varias veces al día, una por una, a cada persona.",
  },
  {
    title: "«¿Cómo pago? ¿Hacen envío a mi zona?»",
    text: "Explicas las mismas condiciones en cada conversación, con el riesgo de olvidar un detalle.",
  },
  {
    title: "«Ya te transferí, ¿me confirmas?»",
    text: "Buscas el comprobante entre decenas de chats abiertos para saber qué pedido es cuál.",
  },
  {
    title: "«¿Qué más tienes?»",
    text: "No hay un catálogo que el cliente pueda mirar solo, a su ritmo, sin depender de que respondas.",
  },
];

const BENEFITS: BenefitItem[] = [
  {
    icon: "layers",
    title: "Catálogo organizado por categorías",
    text: "Tus productos agrupados como los busca el cliente, para que encuentre sin preguntar.",
  },
  {
    icon: "tag",
    title: "Fichas de producto completas",
    text: "Fotos, descripción, variantes como talla o color y disponibilidad, todo en un solo lugar.",
  },
  {
    icon: "cart",
    title: "Carrito de compras",
    text: "El cliente arma su pedido con varios productos y cantidades, sin escribir una lista a mano.",
  },
  {
    icon: "chat",
    title: "Integración con WhatsApp",
    text: "El pedido llega a tu WhatsApp ya ordenado: productos, cantidades y datos de contacto.",
  },
  {
    icon: "card",
    title: "Pagos en línea cuando aplique",
    text: "Si tu operación lo permite, habilitamos pago con tarjeta o billetera digital para cerrar la venta al instante.",
  },
  {
    icon: "panel",
    title: "Panel para administrar productos",
    text: "Cargas, editas, ocultas o vuelves a publicar productos tú mismo, sin depender de nadie.",
  },
  {
    icon: "mobile",
    title: "Diseño responsive",
    text: "Pensada primero para el celular, que es desde donde te van a comprar la mayoría de las veces.",
  },
  {
    icon: "bell",
    title: "Notificaciones y automatizaciones",
    text: "Avisos de pedido nuevo y mensajes automáticos de confirmación para no perder ninguna venta.",
  },
  {
    icon: "growth",
    title: "Base preparada para crecer",
    text: "Puedes sumar cupones, más categorías, medios de pago o control de stock cuando lo necesites.",
  },
];

const EXAMPLES: SolutionExample[] = [
  {
    icon: "tag",
    title: "Ropa, calzado y accesorios",
    text: "Cuando el mismo producto tiene talla, color o modelo y explicarlo por chat es un problema.",
    items: ["Variantes por talla y color", "Guía de tallas", "Novedades destacadas"],
  },
  {
    icon: "store",
    title: "Minimarket y productos de consumo",
    text: "Catálogos amplios donde el cliente necesita buscar y filtrar por sí mismo.",
    items: ["Muchas categorías", "Buscador de productos", "Pedidos con varias unidades"],
  },
  {
    icon: "box",
    title: "Productos por encargo o personalizados",
    text: "Pastelería, imprenta, artesanías y todo lo que se produce después del pedido.",
    items: ["Formulario de personalización", "Fecha de entrega", "Adelanto o confirmación previa"],
  },
  {
    icon: "users",
    title: "Venta mayorista o por distribuidor",
    text: "Cuando tus clientes son negocios y no compran igual que el público general.",
    items: ["Acceso para clientes registrados", "Pedidos por cantidad", "Condiciones por tipo de cliente"],
  },
  {
    icon: "globe",
    title: "Catálogo digital sin carrito",
    text: "Si prefieres cerrar cada venta conversando, mostramos el catálogo y llevamos la consulta a WhatsApp.",
    items: ["Catálogo siempre actualizado", "Consulta por producto", "Sin proceso de pago"],
  },
];

const PROCESS: ProcessStep[] = [
  {
    title: "Cuéntanos qué vendes",
    text: "Nos escribes y nos cuentas qué productos manejas, cuántos son y cómo recibes hoy los pedidos.",
  },
  {
    title: "Evaluamos la solución",
    text: "Definimos categorías, variantes, forma de pago y de entrega. Te enviamos una propuesta con el alcance y una cotización personalizada.",
  },
  {
    title: "Diseñamos y desarrollamos",
    text: "Montamos la tienda, cargamos una primera tanda de productos contigo y probamos el flujo completo de compra.",
  },
  {
    title: "Publicamos y acompañamos",
    text: "Publicamos la tienda, te enseñamos a usar el panel y quedamos disponibles para los ajustes de las primeras semanas.",
  },
];

const FAQ: FaqItem[] = [
  {
    q: "Tengo pocos productos, ¿me conviene igual?",
    a: "Sí. Con pocos productos la tienda es más fácil de mantener y ya te ahorra explicar lo mismo en cada chat. Lo importante no es la cantidad, sino que el cliente pueda ver y pedir sin esperar respuesta.",
  },
  {
    q: "¿Yo voy a poder cargar y editar mis productos?",
    a: "Sí, la tienda incluye un panel para que administres tu catálogo: agregar productos, cambiar fotos, ocultar lo que se agotó y volver a publicarlo. Te dejamos una guía y una sesión de uso.",
  },
  {
    q: "¿Puedo cobrar con tarjeta o billetera digital?",
    a: "Se puede habilitar pago en línea cuando tu operación lo permite. Lo evaluamos según tu caso, porque depende de la pasarela que uses y de los requisitos que te pida. Si prefieres, la tienda puede funcionar solo con pedidos y coordinación de pago.",
  },
  {
    q: "Prefiero cerrar la venta por WhatsApp, ¿sirve igual?",
    a: "Sí, es una de las formas más usadas. El cliente arma su pedido en la tienda y te llega a WhatsApp con el detalle completo. Tú confirmas y coordinas el pago como lo haces hoy, pero sin escribir la lista a mano.",
  },
  {
    q: "¿Cómo se manejan los envíos?",
    a: "Configuramos las zonas y condiciones que tú manejes: retiro en tienda, delivery propio o envío por courier. Lo definimos en la evaluación para que el cliente lo vea claro antes de confirmar.",
  },
  {
    q: "¿Y si más adelante quiero vender más cosas?",
    a: "La tienda queda preparada para crecer: más categorías, más productos, cupones, control de stock o nuevos medios de pago se agregan sin rehacerla desde cero.",
  },
  {
    q: "¿Cuánto cuesta armar mi tienda?",
    a: "Depende del catálogo, de si necesitas variantes, pagos en línea o integraciones. Trabajamos con cotización personalizada: cuéntanos qué vendes y te enviamos una propuesta con el alcance detallado.",
  },
];

const STRUCTURED_DATA = buildGraph([
  buildServiceGraph({
    name: "Desarrollo de tiendas online",
    description:
      "Creación de tiendas online con catálogo por categorías, fichas de producto, carrito de compras, pedidos por WhatsApp, pagos en línea cuando aplique y panel de administración.",
    path: campaign.path,
    offers: [
      "Tienda online con catálogo y carrito",
      "Catálogo digital con pedidos por WhatsApp",
      "Tienda con pagos en línea",
      "Panel de administración de productos",
    ],
  }),
  buildBreadcrumb("Tiendas online", campaign.path),
  buildFaqPage(FAQ),
]);

const TiendaOnline: React.FC = () => (
  <CampaignLayout campaign={campaign}>
    <JsonLd data={STRUCTURED_DATA} />
    <CampaignHero
      eyebrow="Para negocios que venden por chat, redes o catálogo PDF"
      title={
        <>
          Deja de vender <span className="cmp-highlight">producto por producto</span>{" "}
          en el chat.
        </>
      }
      subtitle="Creamos una tienda online para mostrar tu catálogo, recibir pedidos y facilitar la compra de tus clientes."
      note="Cotización personalizada · Cuéntanos qué vendes y armamos la propuesta."
      bullets={[
        "Catálogo que se ve solo, sin que respondas",
        "Pedidos ordenados en tu WhatsApp",
        "Panel para administrar tus productos",
      ]}
      secondary={{ label: "Ver cómo funciona", href: "#solucion" }}
      visual={<ShopMockup />}
    />

    <PainPoints
      title="¿Te pasa esto todos los días?"
      subtitle="Las conversaciones que repites una y otra vez, y que te quitan horas de venta real."
      items={PAINS}
      variant="chat"
      closing="Cada pregunta repetida es tiempo que no dedicas a vender. Una tienda online responde por ti mientras tú despachas."
    />

    <section id="comparacion" className="cmp-section cmp-band">
      <div className="cmp-container">
        <Reveal className="cmp-heading">
          <h2 className="cmp-h2">Cómo cambia tu día a día</h2>
          <p className="cmp-lead">
            La diferencia no está en vender por internet: está en dejar de hacer
            a mano lo que la tienda puede hacer sola.
          </p>
        </Reveal>

        <div className="cmp-compare">
          <Reveal className="cmp-compare-col cmp-compare-before">
            <h3 className="cmp-compare-title">Vendiendo solo por chat</h3>
            <ul>
              <li>Envías fotos y descripciones una por una.</li>
              <li>Confirmas disponibilidad revisando a mano.</li>
              <li>Anotas los pedidos en un cuaderno o en notas del celular.</li>
              <li>Repites condiciones de pago y envío en cada conversación.</li>
              <li>Si no respondes rápido, el cliente se va.</li>
            </ul>
          </Reveal>

          <Reveal className="cmp-compare-col cmp-compare-after" delay={100}>
            <h3 className="cmp-compare-title">Con tu tienda online</h3>
            <ul>
              <li>El cliente ve todo el catálogo por su cuenta.</li>
              <li>La disponibilidad se muestra desde el panel.</li>
              <li>El pedido llega ordenado, con productos y cantidades.</li>
              <li>Pago y envío quedan explicados en la tienda.</li>
              <li>Tu catálogo sigue vendiendo fuera de tu horario.</li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>

    <BenefitsGrid
      eyebrow="La solución"
      title="Todo lo que necesita tu tienda para recibir pedidos"
      subtitle="Armamos la tienda alrededor de tu forma de vender, no al revés."
      items={BENEFITS}
      columns={3}
    />

    <SolutionExamples
      title="Qué podemos desarrollar"
      subtitle="No todas las tiendas se arman igual. Estas son las formas más habituales según lo que vendes."
      examples={EXAMPLES}
      variant="sectors"
      footnote="Si vendes algo que no encaja en estos casos, cuéntanos: primero entendemos tu operación y luego proponemos."
    />

    <ProcessSteps
      title="Cómo trabajamos"
      subtitle="Desde la primera conversación hasta la tienda publicada y funcionando."
      steps={PROCESS}
    />

    <section className="cmp-section cmp-note-section">
      <div className="cmp-container">
        <Reveal className="cmp-note-box">
          <span className="cmp-card-icon" aria-hidden="true">
            <Icon name="support" size={22} />
          </span>
          <div>
            <h2 className="cmp-h3">No te dejamos con la tienda vacía</h2>
            <p>
              Cargamos contigo una primera tanda de productos y probamos el
              recorrido completo de compra antes de publicar. Así sales al aire
              con la tienda funcionando de verdad, no con un cascarón.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    <RelatedServices />

    <CampaignFAQ
      title="Preguntas frecuentes"
      subtitle="Lo que más consultan los negocios que hoy venden por WhatsApp o redes."
      items={FAQ}
    />

    <CampaignCTA
      title="Cuéntanos qué vendes"
      text="Con saber qué productos manejas y cómo recibes hoy los pedidos, podemos proponerte la tienda que te conviene y enviarte una cotización personalizada."
      hints={[
        "Qué productos vendes y aproximadamente cuántos",
        "Si manejas tallas, colores u otras variantes",
        "Cómo cobras y cómo entregas hoy",
      ]}
      note="Sin compromiso. Primero entendemos tu operación, después cotizamos."
    />
  </CampaignLayout>
);

export default TiendaOnline;
