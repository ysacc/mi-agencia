import React from "react";
import { translations, type Lang } from "../translations";

interface NavbarProps {
  lang: Lang;
  setLang: (l: Lang) => void;
}

/**
 * Mantén aquí SOLO las secciones que realmente existen en App.tsx
 * y que quieras mostrar en el menú.
 *
 * Si luego reactivas Portfolio/Team, las vuelves a agregar.
 */
const NAV_SECTIONS = [
  { id: "inicio", key: "inicio" },
  { id: "companies", key: "companies" }, // TrustedCompanies
  { id: "servicios", key: "servicios" },
  { id: "reviews", key: "reviews" },
  { id: "faq", key: "faq" }, // si agregaste FAQ con id="faq"
  { id: "contacto", key: "contacto" },
] as const;

const Navbar: React.FC<NavbarProps> = ({ lang, setLang }) => {
  const t = translations[lang].navbar;

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLang(e.target.value as Lang);
  };

  const sections = NAV_SECTIONS.map((s) => ({
    id: s.id,
    // Intenta leer del translations; si no existe, usa fallback “bonito”
    label:
      (t.sections as any)?.[s.key] ??
      (s.key === "companies"
        ? "Empresas"
        : s.key === "reviews"
        ? "Reseñas"
        : s.key === "faq"
        ? "FAQ"
        : s.key),
  }));

  return (
    <header className="site-header">
      <div className="container">
        <div className="navbar">
          <div
            className="nav-logo"
            role="button"
            tabIndex={0}
            onClick={() => handleScroll("inicio")}
          >
            {t.brandMain} <span>{t.brandAccent}</span>
          </div>

          <ul className="nav-links">
            {sections.map((s) => (
              <li key={s.id}>
                <button
                  type="button"
                  className="nav-link-btn"
                  onClick={() => handleScroll(s.id)}
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
              onClick={() => handleScroll("contacto")}
            >
              {t.cta}
            </button>

            <select
              value={lang}
              onChange={handleLangChange}
              className="nav-lang"
              aria-label="Seleccionar idioma"
            >
              <option value="es">ES</option>
              <option value="en">EN</option>
              <option value="fr">FR</option>
              <option value="de">DE</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
