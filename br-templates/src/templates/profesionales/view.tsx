import type { TemplateConfig } from "../types";
import {
  TemplateFrame,
  Brand,
  Nav,
  Action,
  Photo,
  About,
  Benefits,
  Contact,
} from "../shared";
import { DemoForm } from "../../components/demo-form";
export function ProfesionalesView({ config: c }: { config: TemplateConfig }) {
  return (
    <TemplateFrame config={c}>
      <header className="tpl-header consulting-header">
        <Brand config={c} />
        <Nav
          links={[
            ["Servicios", "servicios"],
            ["El enfoque", "nosotros"],
            ["Preguntas", "preguntas"],
            ["Conversemos", "contacto"],
          ]}
        />
      </header>
      <main id="contenido-demo">
        <section id="inicio" className="consulting-hero">
          <div className="consulting-grid-mark" aria-hidden="true">
            ↗
          </div>
          <div>
            <span className="tpl-kicker">{c.hero.eyebrow}</span>
            <h1>{c.hero.title}</h1>
            <p>{c.hero.subtitle}</p>
            <Action config={c} label={c.hero.cta} />
          </div>
          <div className="consulting-tile">
            <Photo image={c.hero.image} eager />
            <span>
              ESTRATEGIA
              <br />
              QUE CONECTA.
            </span>
          </div>
          <div className="consulting-foot">
            <span>01 / ENTENDER</span>
            <span>02 / PROPONER</span>
            <span>03 / AVANZAR</span>
          </div>
        </section>
        <section className="tpl-section professional-services" id="servicios">
          <span className="tpl-kicker">UN CAMINO CON ENFOQUE</span>
          <h2>{c.servicesTitle}</h2>
          <div>
            {c.services.map((s, i) => (
              <article key={s.name}>
                <span>0{i + 1}</span>
                <h3>{s.name}</h3>
                <p>{s.description}</p>
                <small>{s.detail}</small>
              </article>
            ))}
          </div>
        </section>
        <About config={c} />
        <Benefits config={c} />
        <section className="tpl-section professional-faq" id="preguntas">
          <span className="tpl-kicker">ANTES DE EMPEZAR</span>
          <h2>Hablemos claro.</h2>
          <div>
            {c.faqs?.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
        <Contact config={c}>
          <DemoForm kind="professional" />
        </Contact>
      </main>
    </TemplateFrame>
  );
}
