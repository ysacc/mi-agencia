import React from 'react';
import { translations, type Lang } from '../translations';

interface PortfolioProps {
  lang: Lang;
}

const Portfolio: React.FC<PortfolioProps> = ({ lang }) => {
  const t = translations[lang].portfolio;

  return (
    <>
      <div className="section-heading">
        <h2 className="section-title">{t.title}</h2>
        <p className="section-subtitle">{t.subtitle}</p>
      </div>
      <div className="grid-2">
        {t.projects.map(project => (
          <article key={project.name} className="card">
            <h3 className="card-title">{project.name}</h3>
            <p className="card-text">{project.description}</p>
            <span className="card-tag">{project.tag}</span>
          </article>
        ))}
      </div>
    </>
  );
};

export default Portfolio;
