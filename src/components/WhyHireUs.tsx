import React from "react";
import { translations, type Lang } from "../translations";

interface WhyHireUsProps {
  lang: Lang;
}

const WhyHireUs: React.FC<WhyHireUsProps> = ({ lang }) => {
  const t = translations[lang].whyHireUs;

  return (
    <section className="why-hire-section">
      <div className="container">
        <div className="section-heading" data-aos="fade-up">
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        <div className="why-hire-grid">
          {t.stats.map((s, i) => (
            <div
              key={s.label}
              className="why-hire-card"
              data-aos="fade-up"
              data-aos-delay={i * 120}
            >
              <div className="why-hire-value">{s.value}</div>
              <div className="why-hire-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHireUs;
