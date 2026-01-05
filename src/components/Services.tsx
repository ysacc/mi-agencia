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

  const parseMoney = (value: string) => {
    // Acepta: "USD 2,499", "S/ 999", "999", "2,499"
    const v = (value || "").trim();

    // Detectar moneda por prefijo
    const currencyMatch = v.match(/^(USD|US\$|S\/)\s*/i);
    const currency = currencyMatch ? currencyMatch[1].toUpperCase() : "";

    // Extraer número (mantiene comas para miles)
    const amount = v.replace(/^(USD|US\$|S\/)\s*/i, "").trim();

    // Normalizar etiqueta de moneda a lo que mostrarás
    const currencyLabel =
      currency === "US$" || currency === "USD"
        ? "USD"
        : currency === "S/"
        ? "S/"
        : "";

    return { currencyLabel, amount };
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

      {/* SERVICIOS COMERCIALES (solo desktop/tablet) */}
      <div className="services-commercial-grid hide-on-mobile">
        {t.items.map((service, idx) => {
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

              {(() => {
                const { currencyLabel, amount } = parseMoney(service.fromPrice);

                return (
                  <>
                    <div className="service-commercial-from">
                      {service.fromLabel ?? "Desde"}
                    </div>
                    <div className="service-commercial-price">
                      <span className="service-commercial-currency">
                        {currencyLabel || "USD"}
                      </span>
                      <span className="service-commercial-amount">
                        {amount}
                      </span>
                    </div>
                  </>
                );
              })()}

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
