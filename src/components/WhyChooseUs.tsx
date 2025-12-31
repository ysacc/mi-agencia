import React from "react";
import { translations, type Lang } from "../translations";

interface WhyChooseUsProps {
  lang: Lang;
}

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ lang }) => {
  const t = translations[lang].whyChooseUs;

  return (
    <section className="why-section">
      <div className="container">
        <div className="section-heading" data-aos="fade-up">
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        <div className="why-grid">
          {t.items.map((item, i) => (
            <article
              key={item.title}
              className="why-card"
              data-aos="zoom-in"
              data-aos-delay={i * 100}
            >
              <div className="why-icon">{item.icon}</div>
              <h3 className="why-title">{item.title}</h3>
              <p className="why-text">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
