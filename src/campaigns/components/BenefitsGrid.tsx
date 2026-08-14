import React from "react";
import Icon, { type IconName } from "./Icon";
import Reveal from "./Reveal";

export interface BenefitItem {
  icon: IconName;
  title: string;
  text: string;
}

interface BenefitsGridProps {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  items: BenefitItem[];
  /** 2 o 4 columnas según la densidad de la campaña. */
  columns?: 2 | 3 | 4;
  /** Bloque lateral opcional (resumen, aclaración de alcance...). */
  aside?: React.ReactNode;
}

const BenefitsGrid: React.FC<BenefitsGridProps> = ({
  id = "solucion",
  eyebrow,
  title,
  subtitle,
  items,
  columns = 3,
  aside,
}) => (
  <section id={id} className="cmp-section cmp-benefits">
    <div className="cmp-container">
      <Reveal className="cmp-heading">
        {eyebrow && <p className="cmp-eyebrow">{eyebrow}</p>}
        <h2 className="cmp-h2">{title}</h2>
        {subtitle && <p className="cmp-lead">{subtitle}</p>}
      </Reveal>

      <div className={aside ? "cmp-benefits-split" : undefined}>
        <ul className={`cmp-grid cmp-grid-${columns}`}>
          {items.map((item, i) => (
            <Reveal
              as="li"
              key={item.title}
              delay={i * 50}
              className="cmp-card cmp-card-benefit"
            >
              <span className="cmp-card-icon" aria-hidden="true">
                <Icon name={item.icon} size={22} />
              </span>
              <h3 className="cmp-card-title">{item.title}</h3>
              <p className="cmp-card-text">{item.text}</p>
            </Reveal>
          ))}
        </ul>

        {aside && <Reveal className="cmp-benefits-aside">{aside}</Reveal>}
      </div>
    </div>
  </section>
);

export default BenefitsGrid;
