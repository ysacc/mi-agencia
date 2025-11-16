import React from 'react';
import { translations, type Lang } from '../translations';

interface ServicesProps {
  lang: Lang;
}

const Services: React.FC<ServicesProps> = ({ lang }) => {
  const t = translations[lang].services;
  return (
    <>
      <div className="section-heading">
        <h2 className="section-title">{t.title}</h2>
        <p className="section-subtitle">{t.subtitle}</p>
      </div>
      <div className="grid-3">
        {t.items.map(service => (
          <article key={service.title} className="card">
            <h3 className="card-title">{service.title}</h3>
            <p className="card-text">{service.description}</p>
          </article>
        ))}
      </div>
    </>
  );
};

export default Services;
