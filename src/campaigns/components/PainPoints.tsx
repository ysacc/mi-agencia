import React from "react";
import Icon, { type IconName } from "./Icon";
import Reveal from "./Reveal";

export interface PainItem {
  title: string;
  text: string;
  icon?: IconName;
}

interface PainPointsProps {
  id?: string;
  title: string;
  subtitle?: string;
  items: PainItem[];
  /**
   * Cada campaña presenta sus dolores de una forma distinta:
   * - cards:   tarjetas con icono (negocios locales)
   * - chat:    burbujas de conversación (venta por chat)
   * - signals: señales de alerta en lista (operación con Excel)
   */
  variant?: "cards" | "chat" | "signals";
  /** Frase de cierre que conecta con la solución. */
  closing?: string;
}

const PainPoints: React.FC<PainPointsProps> = ({
  id = "te-pasa-esto",
  title,
  subtitle,
  items,
  variant = "cards",
  closing,
}) => (
  <section id={id} className={`cmp-section cmp-pains cmp-pains-${variant}`}>
    <div className="cmp-container">
      <Reveal className="cmp-heading">
        <h2 className="cmp-h2">{title}</h2>
        {subtitle && <p className="cmp-lead">{subtitle}</p>}
      </Reveal>

      {variant === "chat" && (
        <ul className="cmp-chat">
          {items.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 60}>
              <div className="cmp-chat-bubble">
                <p className="cmp-chat-q">{item.title}</p>
                <p className="cmp-chat-a">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      )}

      {variant === "signals" && (
        <ul className="cmp-signals">
          {items.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 50}>
              <span className="cmp-signal-mark" aria-hidden="true">
                <Icon name="alert" size={18} />
              </span>
              <div>
                <p className="cmp-signal-title">{item.title}</p>
                <p className="cmp-signal-text">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      )}

      {variant === "cards" && (
        <ul className="cmp-grid cmp-grid-3">
          {items.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 60} className="cmp-card cmp-card-pain">
              <span className="cmp-card-icon" aria-hidden="true">
                <Icon name={item.icon ?? "alert"} size={22} />
              </span>
              <h3 className="cmp-card-title">{item.title}</h3>
              <p className="cmp-card-text">{item.text}</p>
            </Reveal>
          ))}
        </ul>
      )}

      {closing && (
        <Reveal className="cmp-pains-closing">
          <p>{closing}</p>
        </Reveal>
      )}
    </div>
  </section>
);

export default PainPoints;
