import React from 'react';
import { translations, type Lang } from '../translations';

interface HeroProps {
  lang: Lang;
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = translations[lang].hero;
  const handleContact = () => {
    const el = document.getElementById('contacto');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  const goTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="hero">
      <div className="hero-main">
        <div className="hero-pill">{t.tag}</div>
        <h1 className="hero-title">
          {t.titleMain}
          <span className="hero-highlight">{t.titleHighlight}</span>
        </h1>
        <p className="hero-text">{t.sub}</p>
        <div className="hero-actions">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleContact}
          >
            {t.cta}
          </button>
          <button
            type="button"
            className="btn btn-text"
            onClick={() => {
              const el = document.getElementById('portafolio');
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
          >
            {t.seeProjects}
          </button>
        </div>
        <p className="hero-langs">{t.langs}</p>
      </div>
      <div className="hero-visual">
        <div className="hero-box" />
      </div>
    </div>
  );
};

export default Hero;
