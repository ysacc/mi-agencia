import React from 'react';
import { translations, type Lang } from '../translations';

interface ServicesProps {
  lang: Lang;
  onSelectService?: (serviceTitle: string) => void; // NUEVO
}

const Services: React.FC<ServicesProps> = ({ lang, onSelectService }) => {
  const t = translations[lang].services;

  const goToContact = () => {
    const el = document.getElementById('contacto');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleServiceCta = (serviceTitle: string) => {
    onSelectService?.(serviceTitle);
    goToContact();
  };

  return (
    <>
      <div className="section-heading" data-aos="fade-up">
        <h2 className="section-title">{t.title}</h2>
        <p className="section-subtitle">{t.subtitle}</p>
      </div>

      <div className="grid-3">
        {t.items.map((service, idx) => (
          <article
            key={service.title}
            className="card service-card"
            data-aos="zoom-in"
            data-aos-delay={idx * 100}
          >
            <div className="service-head">
              <span className="service-tag">{service.tag}</span>
              <h3 className="card-title">{service.title}</h3>
            </div>

            <p className="card-text">{service.description}</p>

            <ul className="service-bullets">
              {service.bullets.map(b => (
                <li key={b}>{b}</li>
              ))}
            </ul>

            <div className="service-meta">
              <span className="service-delivery">{service.delivery}</span>
              <span className="service-price">{service.fromPrice}</span>
            </div>

            <button
              type="button"
              className="btn btn-primary service-cta"
              onClick={() => handleServiceCta(service.title)}
            >
              {service.cta}
            </button>
          </article>
        ))}
      </div>
    </>
  );
};

export default Services;
