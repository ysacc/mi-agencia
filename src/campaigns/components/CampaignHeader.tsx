import React from "react";
import { BRAND } from "../campaignConfig";
import { withUtm } from "../../lib/utm";

/**
 * Encabezado reducido: sin navegación que distraiga.
 * Solo marca + enlace discreto de vuelta al sitio principal.
 *
 * El icono (`/images/favicon-192.png`) y la imagen Open Graph
 * (`/images/logo-og.jpg`) se generan a partir de `/images/logoempresa.png`.
 * Si cambia el logo, hay que regenerar esos derivados.
 */
const CampaignHeader: React.FC = () => (
  <header className="cmp-header">
    <div className="cmp-container cmp-header-inner">
      <a
        className="cmp-brand"
        href={withUtm("/")}
        aria-label={`${BRAND} — inicio`}
      >
        <img
          className="cmp-brand-logo"
          src="/images/favicon-192.png"
          alt=""
          width={40}
          height={40}
          decoding="async"
        />
        <span className="cmp-brand-text">
          BR <span className="cmp-brand-accent">Digital System</span>
        </span>
      </a>

      <a className="cmp-header-back" href={withUtm("/")}>
        <span aria-hidden="true">←</span> Ir al sitio principal
      </a>
    </div>
  </header>
);

export default CampaignHeader;
