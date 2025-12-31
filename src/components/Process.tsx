import React from "react";
import { translations, type Lang } from "../translations";

interface ProcessProps {
  lang: Lang;
}

const Process: React.FC<ProcessProps> = ({ lang }) => {
  const t = translations[lang].process;

  return (
    <>
      <div className="section-heading">
        <h2 className="section-title">{t?.title}</h2>
        <p className="section-subtitle">{t?.subtitle}</p>
      </div>

      <div className="process-grid">
        {t?.steps.map((step) => (
          <article key={step.title} className="card process-card">
            <div className="process-icon" aria-hidden="true">
              {step.icon}
            </div>

            <div className="process-content">
              <h3 className="card-title process-title">{step.title}</h3>
              <p className="card-text process-text">{step.description}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
};

export default Process;
