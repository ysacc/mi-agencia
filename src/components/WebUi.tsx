import { useState } from "react";
import type { ReactNode } from "react";
import { BRAND } from "../lib/site";
import { buildWhatsAppUrl } from "../lib/whatsapp";
import { trackWhatsAppClick } from "../lib/analytics";

export function WhatsAppLink({
  children,
  location,
  className = "button primary",
}: {
  children: ReactNode;
  location: string;
  className?: string;
}) {
  return (
    <a
      className={className}
      href={buildWhatsAppUrl({
        message:
          "Hola BR Digital System, quiero una página web para mi negocio.",
        location,
      })}
      onClick={() =>
        trackWhatsAppClick({
          page: window.location.pathname,
          location,
          service: "Páginas web",
        })
      }
    >
      {children}
    </a>
  );
}
export function WebNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="web-header">
      <div className="wrap nav-inner">
        <a className="brand" href="#inicio" aria-label={`${BRAND}, inicio`}>
          <img src="/images/favicon-192.png" width="42" height="42" alt="" />
          <span>
            BR <b>Digital System</b>
            <small>TECNOLOGÍA PARA TU CRECIMIENTO</small>
          </span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? "Cerrar ✕" : "Menú ☰"}
        </button>
        <nav
          id="main-nav"
          className={open ? "nav-links is-open" : "nav-links"}
          aria-label="Navegación principal"
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setOpen(false);
              document
                .querySelector<HTMLButtonElement>(".menu-toggle")
                ?.focus();
            }
          }}
        >
          {[
            ["Inicio", "inicio"],
            ["Planes", "planes"],
            ["Ejemplos", "ejemplos"],
            ["Contacto", "contacto"],
          ].map(([text, id]) => (
            <a href={`#${id}`} key={id} onClick={() => setOpen(false)}>
              {text}
            </a>
          ))}
          <WhatsAppLink location="menu" className="button nav-cta">
            Hablemos <span aria-hidden="true">↗</span>
          </WhatsAppLink>
        </nav>
      </div>
    </header>
  );
}
export function SitePreview({
  variant = "studio",
}: {
  variant?: "studio" | "food" | "consulting";
}) {
  return (
    <div className={`site-preview preview-${variant}`} aria-hidden="true">
      <div className="browser-bar">
        <i />
        <i />
        <i />
        <span>tu-negocio.pe</span>
      </div>
      <div className="preview-content">
        <div className="preview-nav">
          <b>
            {variant === "food"
              ? "MESA"
              : variant === "consulting"
                ? "NEXO"
                : "ESTUDIO."}
          </b>
          <span>Inicio · Nosotros · Contacto</span>
        </div>
        <div className="preview-body">
          <div>
            <small>
              {variant === "food"
                ? "HECHO CON DEDICACIÓN"
                : "IDEAS QUE TOMAN FORMA"}
            </small>
            <h3>
              {variant === "food" ? (
                <>
                  El sabor de
                  <br />
                  sentirse en casa.
                </>
              ) : variant === "consulting" ? (
                <>
                  Tu próximo
                  <br />
                  gran paso.
                </>
              ) : (
                <>
                  Diseño que
                  <br />
                  deja huella.
                </>
              )}
            </h3>
            <p>Un espacio para mostrar lo que hace único a tu negocio.</p>
            <span className="preview-button">Conoce más ↗</span>
          </div>
          <div className="preview-art">
            <div className="art-ring" />
            <div className="art-block" />
          </div>
        </div>
        <div className="preview-bottom">
          <span>01 / TU ESENCIA</span>
          <span>Ideas claras. Grandes posibilidades.</span>
        </div>
      </div>
    </div>
  );
}
