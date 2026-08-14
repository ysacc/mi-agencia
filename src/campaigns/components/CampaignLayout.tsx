import React, { useEffect } from "react";
import type { CampaignConfig } from "../campaignConfig";
import { CampaignContext } from "../lib/campaignContext";
import { captureUtm } from "../lib/utm";
import { trackPageView } from "../lib/analytics";
import CampaignHeader from "./CampaignHeader";
import CampaignFooter from "./CampaignFooter";
import WhatsAppButton from "./WhatsAppButton";
import "../campaigns.css";

interface CampaignLayoutProps {
  campaign: CampaignConfig;
  children: React.ReactNode;
}

/**
 * Chasis común de las landings: captura de UTM, page_view, encabezado
 * reducido, footer simplificado y botón flotante de WhatsApp.
 */
const CampaignLayout: React.FC<CampaignLayoutProps> = ({
  campaign,
  children,
}) => {
  useEffect(() => {
    // 1. Los UTM del anuncio se guardan para toda la sesión.
    captureUtm();

    // 2. page_view identificando la campaña.
    trackPageView({
      campaign: campaign.name,
      campaignId: campaign.id,
      path: campaign.path,
      title: campaign.seo.title,
    });
  }, [campaign]);

  return (
    <CampaignContext.Provider value={campaign}>
      <div className={`cmp-root cmp-accent-${campaign.accent}`}>
        <CampaignHeader />
        <main id="contenido">{children}</main>
        <CampaignFooter />
        <WhatsAppButton />
      </div>
    </CampaignContext.Provider>
  );
};

export default CampaignLayout;
