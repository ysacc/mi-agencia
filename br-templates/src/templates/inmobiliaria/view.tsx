import type { TemplateConfig } from "../types";
import {
  TemplateFrame,
  Brand,
  Nav,
  Photo,
  About,
  Benefits,
  Contact,
} from "../shared";
import { DemoForm } from "../../components/demo-form";
export function InmobiliariaView({ config: c }: { config: TemplateConfig }) {
  return (
    <TemplateFrame config={c}>
      <header className="tpl-header estate-header">
        <Brand config={c} />
        <Nav
          links={[
            ["Propiedades", "propiedades"],
            ["Nuestra mirada", "nosotros"],
            ["Consulta", "contacto"],
          ]}
        />
      </header>
      <main id="contenido-demo">
        <section id="inicio" className="estate-hero">
          <Photo image={c.hero.image} eager sizes="100vw" />
          <div className="estate-overlay">
            <span className="tpl-kicker">{c.hero.eyebrow}</span>
            <h1>{c.hero.title}</h1>
            <p>{c.hero.subtitle}</p>
            <a className="tpl-button" href="#propiedades">
              {c.hero.cta} ↓
            </a>
          </div>
          <div className="estate-bottom">
            <span>ESPACIOS CON PERSONALIDAD</span>
            <span>COLECCIÓN ILUSTRATIVA / 01</span>
          </div>
        </section>
        <section className="tpl-section properties-section" id="propiedades">
          <div className="tpl-section-heading">
            <div>
              <span className="tpl-kicker">UNA COLECCIÓN PARA IMAGINAR</span>
              <h2>{c.servicesTitle}</h2>
            </div>
            <p>
              Propiedades ficticias. Fotografías de referencia.
              <br />
              Sin oferta de venta o alquiler real.
            </p>
          </div>
          <div className="property-grid">
            {c.properties?.map((property) => (
              <article key={property.name}>
                <div className="property-photo">
                  <Photo image={property.image} />
                  <span>{property.label}</span>
                </div>
                <div className="property-info">
                  <p>{property.location}</p>
                  <h3>{property.name}</h3>
                  <ul>
                    {property.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <div>
                    <strong>
                      {property.price}
                      <small>Precio de ejemplo</small>
                    </strong>
                    <a
                      href="#contacto"
                      aria-label={`Consulta de muestra sobre ${property.name}`}
                    >
                      ↗
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
        <About config={c} />
        <Benefits config={c} />
        <Contact config={c}>
          <DemoForm kind="property" />
        </Contact>
      </main>
    </TemplateFrame>
  );
}
