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
export function ConsultorioView({ config: c }: { config: TemplateConfig }) {
  return (
    <TemplateFrame config={c}>
      <div className="clinic-shell">
        <header className="clinic-sidebar">
          <Brand config={c} />
          <p>{c.business.slogan}</p>
          <Nav
            links={[
              ["Especialidades", "servicios"],
              ["Nosotros", "nosotros"],
              ["El equipo", "equipo"],
              ["Solicitar cita", "contacto"],
            ]}
          />
          <span className="clinic-plus" aria-hidden="true">
            ＋
          </span>
        </header>
        <main id="contenido-demo">
          <section id="inicio" className="clinic-hero">
            <div>
              <span className="clinic-label">
                <span aria-hidden="true">✚</span>
                {c.hero.eyebrow}
              </span>
              <h1>{c.hero.title}</h1>
              <p>{c.hero.subtitle}</p>
              <Action config={c} label={c.hero.cta} />
            </div>
            <div className="clinic-image">
              <Photo image={c.hero.image} eager />
              <div className="clinic-caption">
                <span aria-hidden="true">＋</span>Escucharte es el primer paso.
              </div>
            </div>
            <aside className="clinic-note">
              <b>Antes de tu visita</b>
              <p>
                Conoce la propuesta y consulta los pasos para coordinar una
                cita.
              </p>
              <a href="#contacto">Ver información de contacto →</a>
            </aside>
          </section>
          <section id="servicios" className="tpl-section clinic-specialties">
            <span className="tpl-kicker">ESPECIALIDADES DE EJEMPLO</span>
            <h2>{c.servicesTitle}</h2>
            <div>
              {c.services.map((s, i) => (
                <article key={s.name}>
                  <span className="specialty-icon" aria-hidden="true">
                    {["✚", "◇", "◌"][i]}
                  </span>
                  <div>
                    <h3>{s.name}</h3>
                    <p>{s.description}</p>
                  </div>
                  <a href="#contacto" aria-label={`Consultar sobre ${s.name}`}>
                    ↗
                  </a>
                </article>
              ))}
            </div>
          </section>
          <About config={c} />
          <section className="tpl-section clinic-team" id="equipo">
            <span className="tpl-kicker">PERFILES ILUSTRATIVOS</span>
            <h2>Un equipo presentado con claridad.</h2>
            <p>
              Estos perfiles son ejemplos de diseño. No corresponden a
              profesionales reales.
            </p>
            <div>
              {c.team?.map((person) => (
                <article key={person.name}>
                  <span aria-hidden="true">{person.initials}</span>
                  <h3>{person.name}</h3>
                  <p>{person.role}</p>
                </article>
              ))}
            </div>
          </section>
          <Benefits config={c} />
          <Contact config={c} />
        </main>
      </div>
    </TemplateFrame>
  );
}
