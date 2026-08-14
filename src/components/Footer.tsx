import React from "react";
import { translations, type Lang } from "../translations";
import {
  BRAND,
  SITE_DOMAIN,
  SLOGAN,
  SOCIAL_LINKS,
  SERVICE_LINKS,
} from "../lib/site";
import { WHATSAPP_DISPLAY, buildWhatsAppUrl } from "../lib/whatsapp";
import { withUtm } from "../lib/utm";
import { trackSocialClick, trackWhatsAppClick, trackViewService } from "../lib/analytics";

interface FooterProps {
  lang: Lang;
}

const WHATSAPP_MESSAGE =
  "Hola, llegué desde brdigitalsystem.online. Quiero información sobre sus servicios.";

const Footer: React.FC<FooterProps> = ({ lang }) => {
  const year = new Date().getFullYear();
  const t = translations[lang].footer;

  const whatsappHref = buildWhatsAppUrl({
    message: WHATSAPP_MESSAGE,
    location: "footer",
  });

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img
            src="/images/favicon-192.png"
            alt=""
            width={44}
            height={44}
            loading="lazy"
            decoding="async"
            className="footer-logo"
          />
          <div>
            <p className="footer-name">{BRAND}</p>
            <p className="footer-slogan">{SLOGAN}</p>
          </div>
        </div>

        <nav className="footer-col" aria-label="Servicios">
          <h2 className="footer-heading">Servicios</h2>
          <ul>
            {SERVICE_LINKS.map((service) => (
              <li key={service.id}>
                <a
                  href={withUtm(service.path)}
                  onClick={() =>
                    trackViewService({
                      page: "/",
                      service: service.name,
                      location: "footer",
                      label: service.name,
                    })
                  }
                >
                  {service.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-col">
          <h2 className="footer-heading">Contacto</h2>
          <ul>
            <li>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackWhatsAppClick({
                    page: "/",
                    location: "footer",
                    label: "WhatsApp footer",
                  })
                }
              >
                WhatsApp {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li>
              <a href={withUtm("/")}>{SITE_DOMAIN}</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h2 className="footer-heading">Síguenos</h2>
          <ul>
            {SOCIAL_LINKS.map((social) => (
              <li key={social.name}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackSocialClick({
                      page: "/",
                      location: "footer",
                      network: social.name,
                      label: social.handle,
                    })
                  }
                >
                  {social.name} <span className="footer-handle">{social.handle}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container footer-legal">
        © {year} {BRAND}. {t.text}
      </div>
    </footer>
  );
};

export default Footer;
