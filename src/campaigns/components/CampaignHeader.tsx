import React from "react";
import { BRAND } from "../campaignConfig";
import { withUtm } from "../../lib/utm";

/**
 * Encabezado reducido: sin navegación que distraiga.
 * Solo marca + enlace discreto de vuelta al sitio principal.
 *
 * NOTA DE MARCA: `/images/logoempresa.jpg` es el logo actual del proyecto y
 * todavía dice "BR DIGITAL SYSTEMS" (con "s"). Cuando exista la versión
 * corregida del archivo, basta con reemplazar ese asset: aquí, en el favicon de
 * los `index.html` y en las imágenes Open Graph se usa la misma ruta.
 */
const CampaignHeader: React.FC = () => (
  <header className="cmp-header">
    <div className="cmp-container cmp-header-inner">
      <a className="cmp-brand" href={withUtm("/")} aria-label={`${BRAND} — inicio`}>
        <img
          className="cmp-brand-logo"
          src="/images/logoempresa.jpg"
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
