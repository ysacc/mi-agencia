import React from "react";
import { SERVICE_LINKS } from "../../lib/site";
import { withUtm } from "../../lib/utm";
import { trackViewService } from "../../lib/analytics";
import { useCampaign } from "../lib/campaignContext";
import Reveal from "./Reveal";
import Icon from "./Icon";

/**
 * Enlaces internos hacia los otros servicios.
 * Ayuda al rastreo del sitio y evita que la landing sea un callejón sin salida
 * cuando el visitante necesita algo distinto a lo que vino buscando.
 */
const RelatedServices: React.FC = () => {
  const campaign = useCampaign();
  const others = SERVICE_LINKS.filter((service) => service.id !== campaign.id);

  return (
    <section className="cmp-section cmp-related" aria-labelledby="related-title">
      <div className="cmp-container">
        <Reveal className="cmp-heading">
          <h2 className="cmp-h2" id="related-title">
            ¿Buscabas otra cosa?
          </h2>
          <p className="cmp-lead">
            También desarrollamos estos servicios. Si tu proyecto mezcla varios,
            lo vemos en la misma conversación.
          </p>
        </Reveal>

        <ul className="cmp-related-list">
          {others.map((service, i) => (
            <Reveal
              as="li"
              key={service.id}
              delay={i * 60}
              className="cmp-card cmp-card-related"
            >
              <a
                href={withUtm(service.path)}
                onClick={() =>
                  trackViewService({
                    page: campaign.path,
                    campaign: campaign.name,
                    campaignId: campaign.id,
                    service: service.name,
                    location: "servicios_relacionados",
                    label: service.name,
                  })
                }
              >
                <h3 className="cmp-card-title">{service.name}</h3>
                <p className="cmp-card-text">{service.short}</p>
                <span className="cmp-related-go">
                  Ver servicio <Icon name="check" size={16} />
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default RelatedServices;
