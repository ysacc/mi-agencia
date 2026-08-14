import React from "react";
import { FAQ_DATA } from "../data/faq";

/**
 * FAQ accesible: `<details>`/`<summary>` funciona con teclado y con lectores
 * de pantalla sin JavaScript adicional.
 */
const FAQ: React.FC = () => (
  <div className="container">
    <div className="section-heading" data-aos="fade-up">
      <h2 className="section-title">Preguntas frecuentes</h2>
      <p className="section-subtitle">
        Resolvemos las dudas más comunes antes de empezar
      </p>
    </div>

    <div className="faq-list">
      {FAQ_DATA.map((item, i) => (
        <details className="faq-item" key={item.q} open={i === 0}>
          <summary className="faq-question">
            <span>{item.q}</span>
            <span className="faq-icon" aria-hidden="true" />
          </summary>
          <p className="faq-answer">{item.a}</p>
        </details>
      ))}
    </div>
  </div>
);

export default FAQ;
