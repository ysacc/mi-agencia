import React from "react";
import Reveal from "./Reveal";

export interface ProcessStep {
  title: string;
  text: string;
}

interface ProcessStepsProps {
  id?: string;
  title: string;
  subtitle?: string;
  steps: ProcessStep[];
}

/** Proceso de trabajo en 4 pasos, común a las tres campañas. */
const ProcessSteps: React.FC<ProcessStepsProps> = ({
  id = "proceso",
  title,
  subtitle,
  steps,
}) => (
  <section id={id} className="cmp-section cmp-process">
    <div className="cmp-container">
      <Reveal className="cmp-heading">
        <h2 className="cmp-h2">{title}</h2>
        {subtitle && <p className="cmp-lead">{subtitle}</p>}
      </Reveal>

      <ol className="cmp-steps">
        {steps.map((step, i) => (
          <Reveal as="li" key={step.title} delay={i * 70} className="cmp-step">
            <span className="cmp-step-num" aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="cmp-step-title">{step.title}</h3>
            <p className="cmp-step-text">{step.text}</p>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);

export default ProcessSteps;
