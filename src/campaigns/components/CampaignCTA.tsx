import React from "react";
import { useCampaign } from "../lib/campaignContext";
import { WHATSAPP_DISPLAY } from "../lib/whatsapp";
import WhatsAppCta from "./WhatsAppCta";
import Reveal from "./Reveal";

interface CampaignCTAProps {
  id?: string;
  title: string;
  text: string;
  /** Ideas de qué contar al escribir (baja la fricción del primer mensaje). */
  hints?: string[];
  note?: string;
}

const CampaignCTA: React.FC<CampaignCTAProps> = ({
  id = "cta-final",
  title,
  text,
  hints = [],
  note,
}) => {
  const campaign = useCampaign();

  return (
    <section id={id} className="cmp-section cmp-cta-final">
      <div className="cmp-container">
        <Reveal className="cmp-cta-box">
          <h2 className="cmp-h2">{title}</h2>
          <p className="cmp-lead">{text}</p>

          {hints.length > 0 && (
            <ul className="cmp-cta-hints">
              {hints.map((hint) => (
                <li key={hint}>{hint}</li>
              ))}
            </ul>
          )}

          <div className="cmp-cta-actions">
            <WhatsAppCta location="cta_final" label={campaign.cta.final} />
          </div>

          <p className="cmp-cta-note">
            {note ?? "Cotización personalizada según lo que necesites."}{" "}
            <span className="cmp-cta-phone">WhatsApp {WHATSAPP_DISPLAY}</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default CampaignCTA;
