import React from "react";
import Icon, { type IconName } from "./Icon";
import Reveal from "./Reveal";

export interface SolutionExample {
  icon?: IconName;
  title: string;
  text: string;
  /** Elementos concretos que incluye ese tipo de proyecto. */
  items?: string[];
}

interface SolutionExamplesProps {
  id?: string;
  title: string;
  subtitle?: string;
  examples: SolutionExample[];
  /**
   * - tiles:  mosaico con listas (qué incluye cada pieza)
   * - sectors: tarjetas por rubro / tipo de negocio
   * - modules: módulos apilados con checklist técnico
   */
  variant?: "tiles" | "sectors" | "modules";
  footnote?: string;
}

const SolutionExamples: React.FC<SolutionExamplesProps> = ({
  id = "que-desarrollamos",
  title,
  subtitle,
  examples,
  variant = "tiles",
  footnote,
}) => (
  <section id={id} className={`cmp-section cmp-examples cmp-examples-${variant}`}>
    <div className="cmp-container">
      <Reveal className="cmp-heading">
        <h2 className="cmp-h2">{title}</h2>
        {subtitle && <p className="cmp-lead">{subtitle}</p>}
      </Reveal>

      <ul className="cmp-examples-list">
        {examples.map((example, i) => (
          <Reveal
            as="li"
            key={example.title}
            delay={i * 60}
            className="cmp-card cmp-card-example"
          >
            <div className="cmp-example-head">
              {example.icon && (
                <span className="cmp-card-icon" aria-hidden="true">
                  <Icon name={example.icon} size={20} />
                </span>
              )}
              <h3 className="cmp-card-title">{example.title}</h3>
            </div>

            <p className="cmp-card-text">{example.text}</p>

            {example.items && example.items.length > 0 && (
              <ul className="cmp-example-items">
                {example.items.map((item) => (
                  <li key={item}>
                    <Icon name="check" size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </Reveal>
        ))}
      </ul>

      {footnote && (
        <Reveal className="cmp-footnote">
          <p>{footnote}</p>
        </Reveal>
      )}
    </div>
  </section>
);

export default SolutionExamples;
