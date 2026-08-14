import React from "react";
import { useCampaign } from "../lib/campaignContext";
import WhatsAppCta from "./WhatsAppCta";
import Icon from "./Icon";

interface CampaignHeroProps {
  eyebrow: string;
  /** H1 único de la página. */
  title: React.ReactNode;
  subtitle: string;
  bullets?: string[];
  note?: string;
  /** Enlace ancla secundario (no abre WhatsApp). */
  secondary?: { label: string; href: string };
  visual: React.ReactNode;
}

const CampaignHero: React.FC<CampaignHeroProps> = ({
  eyebrow,
  title,
  subtitle,
  bullets = [],
  note,
  secondary,
  visual,
}) => {
  const campaign = useCampaign();

  return (
    <section className="cmp-hero" aria-labelledby="hero-title">
      <div className="cmp-container cmp-hero-inner">
        <div className="cmp-hero-copy">
          <p className="cmp-eyebrow">{eyebrow}</p>

          <h1 id="hero-title" className="cmp-hero-title">
            {title}
          </h1>

          <p className="cmp-hero-sub">{subtitle}</p>

          <div className="cmp-hero-actions">
            <WhatsAppCta location="hero" label={campaign.cta.primary} />
            {secondary && (
              <a className="cmp-btn cmp-btn-ghost" href={secondary.href}>
                {secondary.label}
              </a>
            )}
          </div>

          {note && <p className="cmp-hero-note">{note}</p>}

          {bullets.length > 0 && (
            <ul className="cmp-hero-bullets">
              {bullets.map((b) => (
                <li key={b}>
                  <Icon name="check" size={18} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="cmp-hero-visual">{visual}</div>
      </div>
    </section>
  );
};

export default CampaignHero;
