import React, { useEffect, useState } from "react";
import { useCampaign } from "../lib/campaignContext";
import { buildWhatsAppUrl } from "../../lib/whatsapp";
import { trackWhatsAppClick } from "../../lib/analytics";

/**
 * Botón flotante de WhatsApp.
 * Aparece tras un pequeño scroll para no tapar el hero en móvil,
 * y se oculta a sí mismo el texto en pantallas pequeñas.
 */
const WhatsAppButton: React.FC = () => {
  const campaign = useCampaign();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const href = buildWhatsAppUrl({
    campaignName: campaign.name,
    message: campaign.whatsapp.message,
    location: "boton_flotante",
  });

  return (
    <a
      className={`cmp-float ${visible ? "is-visible" : ""}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${campaign.cta.floating} — WhatsApp`}
      onClick={() =>
        trackWhatsAppClick({
          page: campaign.path,
          campaign: campaign.name,
          campaignId: campaign.id,
          service: campaign.name,
          location: "boton_flotante",
          label: campaign.cta.floating,
        })
      }
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          fill="currentColor"
          d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2m0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.25-8.23a8.23 8.23 0 0 1 0 16.47m4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.79.97-.14.16-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.44.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.42l-.48-.01c-.16 0-.43.06-.66.31-.22.25-.86.85-.86 2.06s.89 2.39 1.01 2.56c.12.16 1.74 2.66 4.22 3.73.59.25 1.05.4 1.41.52.59.19 1.13.16 1.56.1.47-.07 1.47-.6 1.68-1.18.2-.58.2-1.07.14-1.18-.06-.11-.22-.17-.47-.29"
        />
      </svg>
      <span className="cmp-float-text">{campaign.cta.floating}</span>
    </a>
  );
};

export default WhatsAppButton;
