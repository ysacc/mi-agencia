import React from "react";
import { BRAND, SITE_URL } from "../campaignConfig";
import { WHATSAPP_DISPLAY } from "../lib/whatsapp";
import { withUtm } from "../lib/utm";

/**
 * Footer simplificado para campañas: marca, contacto real y dominio.
 *
 * No se listan redes sociales porque el repositorio no tiene ninguna URL de
 * redes registrada; añadir perfiles inventados sería un dato falso.
 * Cuando existan, se agregan aquí como enlaces (target="_blank" + rel="noopener noreferrer").
 */
const CampaignFooter: React.FC = () => {
  const year = new Date().getFullYear();

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
            <p className="cmp-footer-tag">Tecnología para tu crecimiento</p>
          </div>
        </div>

        <div className="cmp-footer-links">
          <a href={withUtm("/")}>Sitio principal</a>
          <a href={SITE_URL}>brdigitalsystem.online</a>
          <span className="cmp-footer-phone">WhatsApp {WHATSAPP_DISPLAY}</span>
        </div>
      </div>

      <div className="cmp-container cmp-footer-legal">
        © {year} {BRAND}. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default CampaignFooter;
