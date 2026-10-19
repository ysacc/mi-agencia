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
export function BarberiaView({ config: c }: { config: TemplateConfig }) {
  return (
    <TemplateFrame config={c}>
      <header className="tpl-header">
        <Brand config={c} />
        <Nav
          links={[
            ["Servicios", "servicios"],
            ["Nosotros", "nosotros"],
            ["Galería", "galeria"],
            ["Reservas", "contacto"],
          ]}
        />
      </header>
      <main id="contenido-demo">
        <section id="inicio" className="barber-hero">
          <div className="barber-side">ESTILO / CARÁCTER / DETALLE</div>
          <div className="barber-headline">
            <span className="tpl-kicker">{c.hero.eyebrow}</span>
            <h1>{c.hero.title}</h1>
            <p>{c.hero.subtitle}</p>
            <Action config={c} label={c.hero.cta} />
            <span className="barber-hero-note">
              CORTES CLÁSICOS. UNA MIRADA ACTUAL.
            </span>
          </div>
          <div className="barber-image">
            <Photo image={c.hero.image} eager />
            <span className="barber-stamp">
              HECHO
              <br />A TU ESTILO ↗
            </span>
          </div>
        </section>
        <section id="servicios" className="tpl-section barber-services">
          <div className="tpl-section-title">
            <span className="tpl-kicker">LA CARTA DEL BUEN ESTILO</span>
            <h2>{c.servicesTitle}</h2>
            <p>Servicios y precios de demostración.</p>
          </div>
          <div className="barber-service-list">
            {c.services.map((s, i) => (
              <article key={s.name}>
                <span>0{i + 1}</span>
                <div>
                  <h3>{s.name}</h3>
                  <p>{s.description}</p>
                  <small>{s.detail}</small>
                </div>
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
