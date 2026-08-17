import React, { useCallback, useEffect, useRef, useState } from "react";
import { translations, type Lang } from "../translations";
import { SERVICE_LINKS } from "../lib/site";
import { withUtm } from "../lib/utm";
import { trackViewService } from "../lib/analytics";

interface NavbarProps {
  lang: Lang;
  setLang: (l: Lang) => void;
}

/** Secciones ancla de la home. */
const NAV_SECTIONS = [
  { id: "inicio", key: "inicio", fallback: "Inicio" },
  { id: "servicios", key: "servicios", fallback: "Servicios" },
  { id: "faq", key: "faq", fallback: "FAQ" },
  { id: "contacto", key: "contacto", fallback: "Contacto" },
] as const;

const Navbar: React.FC<NavbarProps> = ({ lang }) => {
  const t = translations[lang].navbar;
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement | null>(null);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // Escape cierra el menú y devuelve el foco al botón que lo abrió.
  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const goToSection = (id: string) => {
    closeMenu();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const sections = NAV_SECTIONS.map((s) => ({
    id: s.id,
    label: t.sections?.[s.key as keyof typeof t.sections] ?? s.fallback,
  }));

  return (
    <header className="site-header">
      <div className="container">
        <nav className="navbar" aria-label="Navegación principal">
          <a className="nav-logo" href={withUtm("/")}>
            {t.brandMain} <span>{t.brandAccent}</span>
          </a>

          <ul className="nav-links">
            {sections.map((s) => (
              <li key={s.id}>
                <button
                  type="button"
                  className="nav-link-btn"
                  onClick={() => goToSection(s.id)}
                >
                  {s.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="nav-right">
            <button
              type="button"
              className="nav-cta"
              onClick={() => goToSection("contacto")}
            >
              {t.cta}
            </button>

            <button
              ref={toggleRef}
              type="button"
              className="nav-burger"
              aria-expanded={menuOpen}
              aria-controls="menu-movil"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span className={`nav-burger-bars ${menuOpen ? "is-open" : ""}`} />
            </button>
          </div>
        </nav>
      </div>

      {/* Menú móvil (disclosure): visible solo bajo 900px */}
      <div
        id="menu-movil"
        className={`nav-mobile ${menuOpen ? "is-open" : ""}`}
        hidden={!menuOpen}
      >
        <div className="container">
          <ul className="nav-mobile-list">
            {sections.map((s) => (
              <li key={s.id}>
                <button
                  type="button"
                  className="nav-mobile-link"
                  onClick={() => goToSection(s.id)}
                >
                  {s.label}
                </button>
              </li>
            ))}
          </ul>

          <p className="nav-mobile-heading">Servicios</p>
          <ul className="nav-mobile-list">
            {SERVICE_LINKS.map((service) => (
              <li key={service.id}>
                <a
                  className="nav-mobile-link"
                  href={withUtm(service.path)}
                  onClick={() => {
                    trackViewService({
                      page: "/",
                      service: service.name,
                      location: "menu_movil",
                      label: service.name,
                    });
                    closeMenu();
                  }}
                >
                  {service.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
