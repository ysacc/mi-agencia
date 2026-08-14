import { createContext, useContext } from "react";
import { CAMPAIGNS, type CampaignConfig } from "../campaignConfig";

export const CampaignContext = createContext<CampaignConfig>(
  CAMPAIGNS["web-para-negocios"]
);

/** Acceso a la campaña activa desde cualquier componente de la landing. */
export function useCampaign(): CampaignConfig {
  return useContext(CampaignContext);
}
