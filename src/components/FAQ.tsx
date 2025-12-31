import React, { useState } from "react";

const FAQ_DATA = [
  {
    q: "¿Qué incluye el plan Web Emprendedor desde S/299?",
    a: "Incluye una página web moderna, diseño responsive, botón de WhatsApp, formulario de contacto y puesta en línea. Ideal para empezar a vender en internet.",
  },
  {
    q: "¿El precio es pago único?",
    a: "Sí. El desarrollo es pago único. Hosting y dominio son opcionales y se pueden contratar aparte si lo deseas.",
  },
  {
    q: "¿Cuánto tiempo demora la entrega?",
    a: "Entre 3 y 7 días hábiles, dependiendo del contenido que nos brindes.",
  },
  {
    q: "¿Puedo ampliar mi web luego?",
    a: "Claro. Puedes escalar tu web a tienda online, sistema o funcionalidades adicionales cuando tu negocio crezca.",
  },
  {
    q: "¿Necesito conocimientos técnicos?",
    a: "No. Nos encargamos de todo. Tú solo nos indicas tu negocio y objetivos.",
  },
  {
    q: "¿Cómo me contacto para empezar?",
    a: "Solo agenda un diagnóstico o escríbenos por WhatsApp y te guiamos paso a paso.",
  },
];

const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="faq-title">Preguntas frecuentes</h2>
        <p className="faq-subtitle">
          Resolvemos las dudas más comunes antes de empezar
        </p>

        <div className="faq-list">
          {FAQ_DATA.map((item, i) => (
            <div
              key={i}
              className={`faq-item ${open === i ? "open" : ""}`}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="faq-question">
                <span>{item.q}</span>
                <span className="faq-icon">{open === i ? "−" : "+"}</span>
              </div>
              <div className="faq-answer">{item.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
