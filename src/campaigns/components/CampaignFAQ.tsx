import React from "react";
import Reveal from "./Reveal";

export interface FaqItem {
  q: string;
  a: string;
}

interface CampaignFAQProps {
  id?: string;
  title: string;
  subtitle?: string;
  items: FaqItem[];
}

/**
 * FAQ con <details>/<summary>: accesible por teclado y sin JavaScript extra.
 */
const CampaignFAQ: React.FC<CampaignFAQProps> = ({
  id = "faq",
  title,
  subtitle,
  items,
}) => (
  <section id={id} className="cmp-section cmp-faq">
    <div className="cmp-container cmp-faq-inner">
      <Reveal className="cmp-heading">
        <h2 className="cmp-h2">{title}</h2>
        {subtitle && <p className="cmp-lead">{subtitle}</p>}
      </Reveal>

      <div className="cmp-faq-list">
        {items.map((item, i) => (
          <Reveal key={item.q} delay={i * 40}>
            <details className="cmp-faq-item">
              <summary>
                <span>{item.q}</span>
                <span className="cmp-faq-sign" aria-hidden="true" />
              </summary>
              <p>{item.a}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default CampaignFAQ;
