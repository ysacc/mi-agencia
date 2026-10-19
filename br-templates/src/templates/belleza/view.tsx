import type { TemplateConfig } from "../types";
import {
  TemplateFrame,
  Brand,
  Nav,
  Action,
  Photo,
  About,
  Gallery,
  Benefits,
  Contact,
} from "../shared";
export function BellezaView({ config: c }: { config: TemplateConfig }) {
  return (
    <TemplateFrame config={c}>
      <header className="tpl-header beauty-header">
        <Brand config={c} />
        <Nav
          links={[
            ["Tratamientos", "servicios"],
            ["La experiencia", "nosotros"],
            ["El espacio", "galeria"],
            ["Reservas", "contacto"],
          ]}
        />
      </header>
      <main id="contenido-demo">
        <section id="inicio" className="beauty-hero">
          <div className="beauty-copy">
            <span className="tpl-kicker">{c.hero.eyebrow}</span>
            <h1>{c.hero.title}</h1>
            <p>{c.hero.subtitle}</p>
            <Action config={c} label={c.hero.cta} />
            <span className="beauty-flower" aria-hidden="true">
              ✳
            </span>
          </div>
          <div className="beauty-portrait">
            <Photo image={c.hero.image} eager />
            <span>PAUSA. RESPIRA. DISFRUTA.</span>
          </div>
        </section>
        <section className="tpl-section beauty-treatments" id="servicios">
          <span className="tpl-kicker">PEQUEÑOS RITUALES, MUCHO CUIDADO</span>
          <h2>{c.servicesTitle}</h2>
          <p className="prices-notice">
            Tratamientos y precios ilustrativos, sin servicios reales ni
            promesas de resultados.
          </p>
          <div>
            {c.services.map((s, i) => (
              <article key={s.name}>
                <span>0{i + 1}</span>
                <div>
                  <h3>{s.name}</h3>
                  <small>{s.detail}</small>
                </div>
                <p>{s.description}</p>
                <strong>{s.price}</strong>
              </article>
            ))}
          </div>
        </section>
        <About config={c} />
        <Gallery config={c} />
        <Benefits config={c} />
        <Contact config={c} />
      </main>
    </TemplateFrame>
  );
}
