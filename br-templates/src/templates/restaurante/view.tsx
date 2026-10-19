import type { TemplateConfig } from "../types";
import {
  TemplateFrame,
  Brand,
  Nav,
  Photo,
  About,
  Gallery,
  Benefits,
  Contact,
} from "../shared";
export function RestauranteView({ config: c }: { config: TemplateConfig }) {
  return (
    <TemplateFrame config={c}>
      <header className="tpl-header restaurant-header">
        <Nav
          links={[
            ["La cocina", "nosotros"],
            ["La carta", "servicios"],
            ["Encuéntranos", "contacto"],
          ]}
        />
        <Brand config={c} />
        <span>COCINA CON IDENTIDAD</span>
      </header>
      <main id="contenido-demo">
        <section id="inicio" className="restaurant-hero">
          <p className="restaurant-overline">{c.hero.eyebrow}</p>
          <h1>{c.hero.title}</h1>
          <div className="restaurant-spread">
            <p>{c.hero.subtitle}</p>
            <Photo image={c.hero.image} eager />
            <div>
              <span className="restaurant-seal">
                HECHO
                <br />
                PARA
                <br />
                COMPARTIR
              </span>
              <a className="tpl-button" href="#servicios">
                {c.hero.cta} ↓
              </a>
            </div>
          </div>
        </section>
        <About config={c} />
        <section className="tpl-section restaurant-menu" id="servicios">
          <div className="tpl-section-heading">
            <div>
              <span className="tpl-kicker">
                UNA CARTA CON GANAS DE ENCONTRARTE
              </span>
              <h2>{c.servicesTitle}</h2>
            </div>
            <p>
              Especialidades de ejemplo.
              <br />
              Los platos y precios son ilustrativos.
            </p>
          </div>
          <div className="restaurant-menu-grid">
            {c.services.map((s) => (
              <article key={s.name}>
                {s.image && <Photo image={s.image} />}
                <div>
                  <span>{s.detail}</span>
                  <div>
                    <h3>{s.name}</h3>
                    <strong>{s.price}</strong>
                  </div>
                  <p>{s.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
        <Gallery config={c} />
        <Benefits config={c} />
        <Contact config={c} />
      </main>
    </TemplateFrame>
  );
}
