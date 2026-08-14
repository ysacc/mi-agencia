import React from "react";
import {
  BRAND,
  SITE_DOMAIN,
  SITE_URL,
  SLOGAN,
  SOCIAL_LINKS,
  SERVICE_LINKS,
} from "../../lib/site";
import { WHATSAPP_DISPLAY } from "../../lib/whatsapp";
import { withUtm } from "../../lib/utm";
import { trackSocialClick } from "../../lib/analytics";
import { useCampaign } from "../lib/campaignContext";

/**
 * Footer simplificado para campañas: marca, servicios relacionados,
 * redes reales y contacto.
 */
const CampaignFooter: React.FC = () => {
  const campaign = useCampaign();
  const year = new Date().getFullYear();
  const otherServices = SERVICE_LINKS.filter((s) => s.id !== campaign.id);

  return (
    <footer className="cmp-footer">
      <div className="cmp-container cmp-footer-inner">
        <div className="cmp-footer-brand">
          <img
            className="cmp-brand-logo"
            src="/images/logoempresa.jpg"
            alt=""
            width={36}
            height={36}
            loading="lazy"
            decoding="async"
          />
          <div>
            <p className="cmp-footer-name">{BRAND}</p>
            <p className="cmp-footer-tag">{SLOGAN}</p>
          </div>
        </div>

        <nav className="cmp-footer-nav" aria-label="Otros servicios">
          <p className="cmp-footer-heading">Otros servicios</p>
          <ul>
            {otherServices.map((service) => (
              <li key={service.id}>
                <a href={withUtm(service.path)}>{service.name}</a>
              </li>
            ))}
            <li>
              <a href={withUtm("/")}>Sitio principal</a>
            </li>
          </ul>
        </nav>

        <div className="cmp-footer-contact">
          <p className="cmp-footer-heading">Contacto</p>
          <p className="cmp-footer-phone">WhatsApp {WHATSAPP_DISPLAY}</p>
          <a className="cmp-footer-domain" href={SITE_URL}>
            {SITE_DOMAIN}
          </a>

          <ul className="cmp-footer-social">
            {SOCIAL_LINKS.map((social) => (
              <li key={social.name}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackSocialClick({
                      page: campaign.path,
                      campaign: campaign.name,
                      campaignId: campaign.id,
                      location: "footer",
                      network: social.name,
                      label: social.handle,
                    })
                  }
                >
                  {social.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="cmp-container cmp-footer-legal">
        © {year} {BRAND}. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default CampaignFooter;
