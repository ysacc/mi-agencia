import React from 'react';
import { translations, type Lang } from '../translations';

interface ProcessProps {
  lang: Lang;
}

const Process: React.FC<ProcessProps> = ({ lang }) => {
  const t = translations[lang].process;

  return (
    <>
      <div className="section-heading">
        <h2 className="section-title">{t.title}</h2>
        <p className="section-subtitle">{t.subtitle}</p>
      </div>
      <div className="grid-2">
        {t.steps.map(step => (
          <article key={step.title} className="card">
            <h3 className="card-title">{step.title}</h3>
            <p className="card-text">{step.description}</p>
          </article>
        ))}
      </div>
    </>
  );
};

export default Process;
