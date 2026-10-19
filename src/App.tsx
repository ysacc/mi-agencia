import { useEffect, useState } from "react";
import "./App.css";
import { PLANS, CONDITIONS, money } from "./data/plans";
import type { PlanId } from "./data/plans";
import { WEB_FAQ } from "./data/webFaq";
import {
  BRAND,
  CONTACT_EMAIL,
  SOCIAL_LINKS,
  WHATSAPP_DISPLAY,
} from "./lib/site";
import { captureUtm } from "./lib/utm";
import { trackPageView } from "./lib/analytics";
import WebQuote from "./components/WebQuote";
import { WebNav, WhatsAppLink, SitePreview } from "./components/WebUi";

const benefits = [
  [
    "01",
    "Que te encuentren y te conozcan",
    "Reúne tu información, servicios y contacto en un solo lugar. Comparte tu enlace donde estén tus clientes.",
  ],
  [
    "02",
    "Una buena primera impresión",
    "Presenta tu negocio con un diseño ordenado, legible y adaptado a celulares, tablets y computadoras.",
  ],
  [
    "03",
    "De la visita a la conversación",
    "Dale a tus visitantes un camino claro para hacerte una consulta por WhatsApp. Sin vueltas.",
  ],
];
const steps = [
  [
    "Cuéntanos tu idea",
    "Elige un plan y conversemos por WhatsApp sobre tu negocio.",
  ],
  [
    "Definimos el alcance",
    "Revisamos lo que necesitas y acordamos presupuesto, condiciones y plazo.",
  ],
  [
    "Creamos y revisamos",
    "Nos entregas tus materiales. Diseñamos y ajustamos en las rondas de tu plan.",
  ],
  [
    "Publicamos tu web",
    "Con tu aprobación y el dominio y hosting listos, coordinamos la publicación.",
  ],
];

export default function App() {
  const [plan, setPlan] = useState<PlanId>("negocio");
  useEffect(() => {
    captureUtm();
    trackPageView({ page: window.location.pathname, title: document.title });
  }, []);
  function selectPlan(id: PlanId) {
    setPlan(id);
    document.getElementById("cotizador")?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
    document
      .querySelector<HTMLSelectElement>("#cotizador select")
      ?.focus({ preventScroll: true });
  }
  return (
    <div className="web-root">
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <WebNav />
      <main id="contenido" tabIndex={-1}>
        <section id="inicio" className="hero-section">
          <div className="hero-grid wrap">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="status-dot" /> PÁGINAS WEB PARA NEGOCIOS EN
                PERÚ
              </p>
              <h1>
                Tu negocio merece una <span>página web profesional</span>
                <span className="yellow-dot">.</span>
              </h1>
              <p className="hero-description">
                Presenta lo que haces y recibe consultas por WhatsApp. Creamos
                tu página web con un diseño claro, listo para verse bien en
                cualquier pantalla.
              </p>
              <p className="hero-price">
                Tu web desde <strong>{money(PLANS[0].price)}</strong>
                <span>Pago único por desarrollo</span>
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#planes">
                  Encuentra tu plan <span aria-hidden="true">↗</span>
                </a>
                <a className="text-link" href="#ejemplos">
                  Explorar ejemplos <span aria-hidden="true">→</span>
                </a>
              </div>
              <p className="hero-footnote">
                Dominio, hosting y mantenimiento se cotizan por separado.
              </p>
            </div>
            <div className="hero-visual">
              <div className="visual-tag">
                <span className="status-dot" /> TU PRÓXIMA PRESENCIA DIGITAL
              </div>
              <SitePreview />
              <div className="visual-caption">
                <span className="caption-icon" aria-hidden="true">
                  ↗
                </span>
                <div>
                  <strong>Tu negocio, con su propio espacio.</strong>
                  <span>Diseño adaptable · Contacto directo</span>
                </div>
                <span className="caption-check" aria-hidden="true">
                  ✓
                </span>
              </div>
              <span className="demo-disclaimer">
                Vista ilustrativa de diseño · No es un proyecto de cliente
              </span>
            </div>
          </div>
          <div className="hero-strip wrap">
            <span>DISEÑADO PARA EMPRENDER</span>
            <span>✓ Precios claros</span>
            <span>✓ Adaptado a celulares</span>
            <span>✓ Contacto por WhatsApp</span>
          </div>
        </section>
        <section id="servicios" className="web-section benefits-section">
          <div className="wrap">
            <p className="eyebrow">SERVICIOS PARA CRECER</p>
            <h2>Tu negocio merece más clientes, no solo una página web.</h2>
            <p>
              En BR Digital System creamos páginas web profesionales,
              optimizamos tu presencia en Google y desarrollamos campañas de
              marketing para impulsar tu negocio.
            </p>
            <div className="benefit-grid">
              {[
                [
                  "Desarrollo web",
                  "Páginas web modernas, rápidas, adaptadas a celulares y enfocadas en convertir visitantes en clientes.",
                ],
                [
                  "Posicionamiento SEO",
                  "Optimizamos tu página para mejorar su visibilidad en Google y facilitar que potenciales clientes encuentren tu negocio. El SEO inicial no garantiza aparecer en los primeros resultados.",
                ],
                [
                  "Marketing digital",
                  "Creamos contenido y campañas para Facebook, Instagram y TikTok, ayudando a las empresas a llegar a más personas y generar oportunidades de venta. La gestión de anuncios es un servicio adicional y la inversión publicitaria no está incluida.",
                ],
              ].map(([title, text], i) => (
                <article key={title}>
                  <span className="benefit-number">0{i + 1}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="planes" className="web-section">
          <div className="wrap">
            <div className="section-heading">
              <div>
                <p className="eyebrow">UNA INVERSIÓN CLARA</p>
                <h2>Una web para cada etapa.</h2>
              </div>
              <p>
                Empieza con lo que necesitas hoy.
                <br />
                Conoce qué incluye cada plan antes de elegir.
              </p>
            </div>
            <div className="plan-grid">
              {PLANS.map((p, i) => (
                <article
                  className={`plan-card ${p.featured ? "featured" : ""}`}
                  key={p.id}
                >
                  {p.featured && (
                    <span className="plan-badge">
                      PARA DAR EL SIGUIENTE PASO
                    </span>
                  )}
                  <div className="plan-top">
                    <span className="plan-index">0{i + 1}</span>
                    <h3>{p.name}</h3>
                    <p>{p.description}</p>
                  </div>
                  <p className="plan-price">
                    {money(p.price)}
                    <small>Pago único por desarrollo</small>
                  </p>
                  <button
                    className={`button full ${p.featured ? "primary" : "outline"}`}
                    type="button"
                    onClick={() => selectPlan(p.id)}
                  >
                    Elegir {p.name} <span aria-hidden="true">↗</span>
                  </button>
                  <p className="includes-label">LO QUE INCLUYE</p>
                  <ul className="feature-list">
                    {p.features.map((f) => (
                      <li key={f}>
                        <span aria-hidden="true">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <aside
              className="conditions"
              aria-label="Condiciones de los planes"
            >
              <strong>Antes de elegir, ten en cuenta</strong>
              <ul>
                {CONDITIONS.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </aside>
          </div>
        </section>
        {[
          {
            id: "marketing",
            title: "Marketing mensual para tu negocio.",
            eyebrow: "PRESENCIA EN REDES SOCIALES",
            note: "Los reels se elaboran con material proporcionado por el cliente o recursos gráficos acordados. La inversión publicitaria se paga por separado. La gestión de anuncios es adicional a los planes Presencia y Crecimiento; Impulso incluye la gestión de una campaña.",
            plans: [
              {
                name: "Presencia",
                price: 149,
                features: [
                  "4 publicaciones",
                  "Textos y calendario básico",
                  "Facebook e Instagram",
                ],
              },
              {
                name: "Crecimiento",
                price: 299,
                features: [
                  "8 publicaciones",
                  "2 reels sencillos",
                  "Adaptación a Facebook, Instagram y TikTok",
                ],
              },
              {
                name: "Impulso",
                price: 499,
                features: [
                  "12 publicaciones y 4 reels",
                  "Programación de contenido",
                  "Gestión de una campaña",
                  "Reporte mensual",
                ],
              },
            ],
          },
          {
            id: "combos",
            title: "Tu web y tu primer mes de marketing.",
            eyebrow: "COMBOS COMERCIALES",
            note: "Los precios de los combos corresponden al desarrollo web más el primer mes de marketing. No existe renovación automática del desarrollo web. Después, el marketing es opcional. Dominio, hosting y funcionalidades personalizadas se cotizan aparte; la inversión publicitaria se paga por separado.",
            plans: [
              {
                name: "Combo Emprende",
                price: 249,
                features: [
                  "Web Emprendedor",
                  "SEO esencial",
                  "Primer mes de Plan Presencia",
                  "Después, marketing opcional desde S/ 149/mes",
                ],
              },
              {
                name: "Combo Crece Digital",
                price: 499,
                features: [
                  "Web Negocio",
                  "SEO inicial",
                  "Primer mes de Plan Crecimiento",
                  "Después, marketing opcional a S/ 299/mes",
                ],
              },
              {
                name: "Combo Marca Pro",
                price: 899,
                features: [
                  "Web Profesional",
                  "SEO inicial ampliado",
                  "Primer mes de Plan Impulso",
                  "Después, marketing opcional a S/ 499/mes",
                ],
              },
            ],
          },
        ].map((group) => (
          <section id={group.id} className="web-section" key={group.id}>
            <div className="wrap">
              <div className="section-heading">
                <div>
                  <p className="eyebrow">{group.eyebrow}</p>
                  <h2>{group.title}</h2>
                </div>
              </div>
              <div className="plan-grid">
                {group.plans.map((offer, i) => {
                  const recommended = group.id === "combos" && i === 1;
                  return (
                    <article
                      className={`plan-card ${recommended ? "featured" : ""}`}
                      key={offer.name}
                    >
                      {recommended && (
                        <span className="plan-badge">Más recomendado</span>
                      )}
                      <div className="plan-top">
                        <span className="plan-index">0{i + 1}</span>
                        <h3>{offer.name}</h3>
                      </div>
                      <p className="plan-price">
                        {money(offer.price)}
                        {group.id === "marketing" && "/mes"}
                        <small>
                          {group.id === "marketing"
                            ? "Pago mensual"
                            : "Desarrollo web + primer mes de marketing"}
                        </small>
                      </p>
                      <WhatsAppLink
                        location={group.id}
                        className={`button full ${recommended ? "primary" : "outline"}`}
                        message={`Hola, me interesa ${offer.name} de ${money(offer.price)}${group.id === "marketing" ? "/mes" : ""}. Quisiera más información.`}
                      >
                        Consultar {offer.name} <span aria-hidden="true">↗</span>
                      </WhatsAppLink>
                      <p className="includes-label">LO QUE INCLUYE</p>
                      <ul className="feature-list">
                        {offer.features.map((feature) => (
                          <li key={feature}>
                            <span aria-hidden="true">↗</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </article>
                  );
                })}
              </div>
              <aside className="conditions">
                <strong>Ten en cuenta</strong>
                <p>{group.note}</p>
              </aside>
            </div>
          </section>
        ))}
        <section id="ejemplos" className="web-section examples-section">
          <div className="wrap">
            <div className="section-heading">
              <div>
                <p className="eyebrow">IMAGINA TU NEGOCIO AQUÍ</p>
                <h2>Una idea de lo que podemos crear.</h2>
              </div>
              <p>
                Explora estas demostraciones de diseño.
                <br />
                La propuesta se adapta a tu marca y al plan elegido.
              </p>
            </div>
            <div className="example-grid">
              {(
                [
                  [
                    "studio",
                    "Servicios creativos",
                    "Una presentación visual para tu trabajo.",
                  ],
                  [
                    "food",
                    "Negocio gastronómico",
                    "Tu propuesta y una forma sencilla de contactarte.",
                  ],
                  [
                    "consulting",
                    "Servicios profesionales",
                    "Claridad para presentar lo que ofreces.",
                  ],
                ] as const
              ).map(([variant, title, text]) => (
                <article className="example-card" key={variant}>
                  <a
                    className="example-preview-link"
                    href={`/demos/${variant}.html`}
                    aria-label={`Ver demostración de ${title}`}
                  >
                    <SitePreview variant={variant} />
                  </a>
                  <div className="example-info">
                    <span className="tiny-label">DEMO DE DISEÑO</span>
                    <h3>{title}</h3>
                    <p>{text}</p>
                    <a className="text-link" href={`/demos/${variant}.html`}>
                      Ver demostración <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <p className="examples-note">
              Ejemplos creados para explorar estilos. No representan clientes ni
              trabajos entregados. Las imágenes y el contenido final los
              proporciona cada cliente.
            </p>
          </div>
        </section>
        <section className="web-section benefits-section">
          <div className="wrap">
            <p className="eyebrow">MÁS CERCA DE TUS CLIENTES</p>
            <h2>
              Tu negocio tiene mucho que ofrecer.
              <br />
              Ayudemos a mostrarlo.
            </h2>
            <div className="benefit-grid">
              {benefits.map(([num, title, text]) => (
                <article key={num}>
                  <span className="benefit-number">
                    {num}
                    <span aria-hidden="true">↗</span>
                  </span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="web-section process-section">
          <div className="wrap">
            <div className="section-heading">
              <div>
                <p className="eyebrow">SIMPLE DE PRINCIPIO A FIN</p>
                <h2>De tu idea a tu página web.</h2>
              </div>
              <p>
                Te acompañamos en cuatro pasos.
                <br />
                Sin necesidad de saber de tecnología.
              </p>
            </div>
            <ol className="process-grid">
              {steps.map(([title, text], i) => (
                <li key={title}>
                  <span className="step-number">0{i + 1}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <WebQuote planId={plan} onPlanChange={setPlan} />
        <section className="web-section" id="preguntas">
          <div className="wrap faq-layout">
            <div>
              <p className="eyebrow">HABLEMOS CLARO</p>
              <h2>¿Te queda alguna duda?</h2>
              <p>Aquí tienes las respuestas para elegir con tranquilidad.</p>
              <WhatsAppLink location="faq" className="text-link">
                Haznos tu pregunta ↗
              </WhatsAppLink>
            </div>
            <div className="faq-list">
              {WEB_FAQ.map((f) => (
                <details key={f.q}>
                  <summary>
                    {f.q}
                    <span aria-hidden="true">+</span>
                  </summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
        <section className="final-section" id="contacto">
          <div className="wrap final-inner">
            <div>
              <p className="eyebrow">EL SIGUIENTE PASO ES UNA CONVERSACIÓN</p>
              <h2>
                Hagamos que tu negocio
                <br />
                tenga su lugar en internet<span>.</span>
              </h2>
              <p>Cuéntanos tu idea. Te ayudamos a elegir por dónde empezar.</p>
            </div>
            <div>
              <WhatsAppLink location="cta_final" className="button yellow">
                Hablemos por WhatsApp <span aria-hidden="true">↗</span>
              </WhatsAppLink>
              <p className="contact-number">{WHATSAPP_DISPLAY}</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="web-footer">
        <div className="wrap footer-inner">
          <div>
            <strong>{BRAND}</strong>
            <p>Páginas web para emprendedores y pequeñas empresas de Perú.</p>
          </div>
          <div>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            <div className="social-links">
              {SOCIAL_LINKS.map((s) => (
                <a
                  href={s.url}
                  key={s.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="wrap footer-bottom">
          <span>
            © {new Date().getFullYear()} {BRAND}
          </span>
          <a href="#inicio">Volver al inicio ↑</a>
        </div>
      </footer>
      <aside
        className="mobile-contact"
        aria-label="Consulta rápida por WhatsApp"
      >
        <WhatsAppLink location="boton_flotante">
          Consultar por WhatsApp <span aria-hidden="true">↗</span>
        </WhatsAppLink>
      </aside>
    </div>
  );
}
