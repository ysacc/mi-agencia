import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { BRAND, requestWebsite, MAIN_SITE } from "../lib/site";
import {
  demoContactUrl,
  type Photo as PhotoAsset,
  type TemplateConfig,
} from "./types";

export function Photo({
  image,
  className = "",
  eager = false,
  sizes = "(max-width: 700px) 100vw, 50vw",
}: {
  image: PhotoAsset;
  className?: string;
  eager?: boolean;
  sizes?: string;
}) {
  return (
    <img
      className={className}
      src={`${image.src}-1280.webp`}
      srcSet={`${image.src}-640.webp 640w, ${image.src}-1280.webp 1280w`}
      sizes={sizes}
      width={1280}
      height={853}
      alt={image.alt}
      style={image.position ? { objectPosition: image.position } : undefined}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : undefined}
      decoding="async"
    />
  );
}
export function Brand({ config }: { config: TemplateConfig }) {
  return (
    <a className="tpl-brand" href="#inicio">
      {config.business.logo && (
        <img src={config.business.logo} alt="" width={40} height={40} />
      )}
      <span>{config.business.name}</span>
    </a>
  );
}
export function Nav({
  links,
}: {
  links: readonly (readonly [string, string])[];
}) {
  return (
    <nav aria-label="Navegación de la plantilla">
      {links.map(([label, id]) => (
        <a key={id} href={`#${id}`}>
          {label}
        </a>
      ))}
    </nav>
  );
}
export function Action({
  config,
  label,
}: {
  config: TemplateConfig;
  label?: string;
}) {
  return (
    <a className="tpl-button" href={demoContactUrl(config)}>
      {label ?? config.contact.cta}
      <span aria-hidden="true">↗</span>
    </a>
  );
}
export function About({ config }: { config: TemplateConfig }) {
  return (
    <section className="tpl-section tpl-about" id="nosotros">
      <div>
        <span className="tpl-kicker">{config.about.eyebrow}</span>
        <h2>{config.about.title}</h2>
        <p>{config.about.text}</p>
      </div>
      {config.about.image && (
        <Photo image={config.about.image} className="about-photo" />
      )}
    </section>
  );
}
export function Gallery({ config }: { config: TemplateConfig }) {
  return (
    <section className="tpl-section gallery-section" id="galeria">
      <div className="tpl-section-heading">
        <div>
          <span className="tpl-kicker">UNA MIRADA MÁS CERCA</span>
          <h2>{config.galleryTitle ?? "Un vistazo a nuestra propuesta."}</h2>
        </div>
        <p>
          Fotografías de referencia.
          <br />
          No son imágenes de un negocio real de esta demo.
        </p>
      </div>
      <div className="tpl-gallery">
        {config.gallery.map((image, i) => (
          <figure key={image.src}>
            <Photo image={image} sizes="(max-width: 700px) 100vw, 33vw" />
            <figcaption>
              0{i + 1} / {image.alt}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
export function Benefits({ config }: { config: TemplateConfig }) {
  return (
    <section className="tpl-section benefits-section" id="enfoque">
      <span className="tpl-kicker">{config.business.slogan}</span>
      <div className="tpl-benefit-grid">
        {config.benefits.map((b, i) => (
          <article key={b.title}>
            <span>0{i + 1}</span>
            <h3>{b.title}</h3>
            <p>{b.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
export function Contact({
  config,
  children,
}: {
  config: TemplateConfig;
  children?: ReactNode;
}) {
  return (
    <section className="tpl-section tpl-contact" id="contacto">
      <div>
        <span className="tpl-kicker">EL SIGUIENTE PASO</span>
        <h2>{config.contact.title}</h2>
        <p>{config.contact.text}</p>
        <Action config={config} />
        <p className="demo-contact-notice">
          Demo: el enlace lleva a BR Digital System. No se realiza una reserva,
          pedido o cita real.
        </p>
      </div>
      {children ?? (
        <div className="contact-info">
          <div>
            <span>VISÍTANOS</span>
            <p>{config.business.address}</p>
          </div>
          <div>
            <span>HORARIOS DE EJEMPLO</span>
            {config.business.hours.map((hour) => (
              <p key={hour}>{hour}</p>
            ))}
          </div>
          <div className="tpl-social">
            {config.business.instagram && (
              <a
                href={config.business.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram ↗
              </a>
            )}
            {config.business.facebook && (
              <a
                href={config.business.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook ↗
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
export function TemplateFrame({
  config,
  children,
}: {
  config: TemplateConfig;
  children: ReactNode;
}) {
  const style = {
    "--tpl-primary": config.theme.primary,
    "--tpl-accent": config.theme.accent,
  } as CSSProperties;
  return (
    <div
      className={`template template-${config.id} font-${config.theme.font}`}
      style={style}
    >
      <a className="skip-link" href="#contenido-demo">
        Saltar al contenido
      </a>
      <aside className="commercial-bar" aria-label="Información comercial">
        <Link href="/" className="commercial-brand">
          BR<span>Digital System</span>
        </Link>
        <p>
          Estás viendo una plantilla de <strong>{BRAND}</strong>.
        </p>
        <div>
          <Link href="/">← Volver a las plantillas</Link>
          <a href={requestWebsite(config.id)}>Solicitar una web similar ↗</a>
        </div>
      </aside>
      {children}
      <footer className="tpl-footer">
        <div>
          <strong>{config.business.name}</strong>
          <p>{config.business.slogan}</p>
        </div>
        <a href="#inicio">Volver al inicio ↑</a>
        <small>
          Plantilla de demostración. Negocios, servicios, precios y horarios
          ilustrativos. No se ofrecen servicios reales de este negocio ficticio.
        </small>
        <a href={`${MAIN_SITE}/#planes`}>
          Conoce los planes de BR Digital System ↗
        </a>
      </footer>
    </div>
  );
}
