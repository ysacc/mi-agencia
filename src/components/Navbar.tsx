import React from 'react';
import { translations, type Lang } from '../translations';

interface NavbarProps {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const SECTION_IDS = ['inicio', 'servicios', 'proceso', 'equipo', 'portafolio', 'contacto'] as const;

const Navbar: React.FC<NavbarProps> = ({ lang, setLang }) => {
  const t = translations[lang].navbar;

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLang(e.target.value as Lang);
  };

  // translations.ts define navbar.sections como objeto por idioma
  const sections = SECTION_IDS.map(id => ({
    id,
    // fallback por si faltara alguna clave
    label: (t.sections as any)?.[id] ?? id,
  }));

  return (
    <header className="site-header">
      <div className="container">
        <div className="navbar">
          <div className="nav-logo">
            {t.brandMain} <span>{t.brandAccent}</span>
          </div>

          <ul className="nav-links">
            {sections.map(s => (
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

          <button
            type="button"
            className="nav-cta"
            onClick={() => handleScroll('contacto')}
          >
            {t.cta}
          </button>

          <select
            value={lang}
            onChange={handleLangChange}
            style={{
              background: 'transparent',
              borderRadius: 999,
              border: '1px solid var(--border-color)',
              color: 'var(--text-main)',
              fontSize: '0.8rem',
              padding: '0.3rem 0.7rem',
            }}
            aria-label="Seleccionar idioma"
          >
            <option value="es">ES</option>
            <option value="en">EN</option>
            <option value="fr">FR</option>
            <option value="de">DE</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
