import React from "react";
import { translations, type Lang } from "../translations";

interface ServicesProps {
  lang: Lang;
  onSelectService?: (serviceTitle: string) => void;
}

const Services: React.FC<ServicesProps> = ({ lang, onSelectService }) => {
  const t = translations[lang].services;

  const goToContact = () => {
    const el = document.getElementById("contacto");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleServiceCta = (serviceTitle: string) => {
    onSelectService?.(serviceTitle);
    goToContact();
  };

  const getPriceLabel = (fromPrice: string) => {
    const m = fromPrice.match(/S\/\s*\d[\d.,]*/i);
    return m ? `S/ ${m[0].replace(/S\/\s*/i, "")}` : fromPrice;
  };

  const getFromLabel = (fromPrice: string) => {
    if (/desde/i.test(fromPrice)) return fromPrice;
    return `Desde ${fromPrice}`;
  };

  return (
    <>
      {/* HEADER */}
      <div className="section-heading" data-aos="fade-up">
        <h2 className="section-title">{t.title}</h2>
        <p className="section-subtitle">{t.subtitle}</p>
      </div>

      {/* PROMOCIONES (DESDE TRANSLATIONS) */}
      {Array.isArray(t.promos) && (
        <div className="services-promos">
          {t.promos.map((promo) => (
            <article key={promo.title} className="promo-card">
              {promo.badge && (
                <span className="promo-badge">{promo.badge}</span>
              )}

              <h3 className="promo-title">{promo.title}</h3>

              <div className="promo-price">
                {promo.fromLabel ?? "Desde"} <strong>{promo.price}</strong>
              </div>

              <ul className="promo-list">
                {promo.bullets.slice(0, 4).map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <button
                className="promo-cta"
                onClick={() => handleServiceCta(promo.title)}
              >
                {promo.cta}
              </button>
            </article>
          ))}
        </div>
      )}

      {/* SERVICIOS COMERCIALES */}
      <div className="services-commercial-grid">
        {t.items.map((service, idx) => {
          const priceBig = getPriceLabel(service.fromPrice);
          const fromSmall = getFromLabel(service.fromPrice);

          return (
            <article
              key={service.title}
              className={`card service-commercial ${
                idx === 0 ? "is-featured" : ""
              }`}
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
            >
              {service.tag && (
                <span className="service-commercial-badge">{service.tag}</span>
              )}

              <h3 className="service-commercial-title">{service.title}</h3>
              <p className="service-commercial-sub">{service.description}</p>

              <div className="service-commercial-price">
                <span className="service-commercial-currency">S/</span>
                <span className="service-commercial-amount">
                  {priceBig.replace("S/", "").trim()}
                </span>
              </div>

              <div className="service-commercial-from">{fromSmall}</div>

              <ul className="service-commercial-list">
                {service.bullets.slice(0, 6).map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <div className="service-commercial-meta">
                <span>{service.delivery}</span>
              </div>

              <button
                type="button"
                className="btn service-commercial-cta"
                onClick={() => handleServiceCta(service.title)}
              >
                {service.cta || "Solicitar servicio"}
              </button>
            </article>
          );
        })}
      </div>
    </>
  );
};

export default Services;
