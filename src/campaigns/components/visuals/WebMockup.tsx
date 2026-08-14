import React from "react";
import Icon from "../Icon";

/**
 * Composición del hero de "Web para Negocios": navegador de escritorio con la
 * web del negocio + móvil con el botón de WhatsApp.
 *
 * Se construye con DOM y CSS (no es una imagen): no hay texto rasterizado,
 * pesa muy poco y se adapta a cualquier ancho.
 */
const WebMockup: React.FC = () => (
  <div className="cmp-mock cmp-mock-web" role="img" aria-label="Vista de una página web de negocio en computadora y celular, con horarios, servicios y botón de WhatsApp">
    <div className="cmp-window">
      <div className="cmp-window-bar">
        <span className="cmp-dot" />
        <span className="cmp-dot" />
        <span className="cmp-dot" />
        <span className="cmp-window-url">tunegocio.com</span>
      </div>

      <div className="cmp-window-body">
        <div className="cmp-mock-nav">
          <span className="cmp-mock-logo" />
          <span className="cmp-line cmp-line-xs" />
          <span className="cmp-line cmp-line-xs" />
          <span className="cmp-line cmp-line-xs" />
          <span className="cmp-mock-pill" />
        </div>

        <div className="cmp-mock-hero">
          <div className="cmp-mock-hero-copy">
            <span className="cmp-line cmp-line-lg" />
            <span className="cmp-line cmp-line-md" />
            <span className="cmp-line cmp-line-sm" />
            <span className="cmp-mock-btn" />
          </div>
          <div className="cmp-mock-hero-media" />
        </div>

        <div className="cmp-mock-info">
          <div className="cmp-mock-info-card">
            <Icon name="clock" size={18} />
            <span className="cmp-mock-label">Horarios</span>
            <span className="cmp-line cmp-line-xs" />
          </div>
          <div className="cmp-mock-info-card">
            <Icon name="map" size={18} />
            <span className="cmp-mock-label">Ubicación</span>
            <span className="cmp-line cmp-line-xs" />
          </div>
          <div className="cmp-mock-info-card">
            <Icon name="form" size={18} />
            <span className="cmp-mock-label">Servicios</span>
            <span className="cmp-line cmp-line-xs" />
          </div>
        </div>
      </div>
    </div>

    <div className="cmp-phone">
      <div className="cmp-phone-screen">
        <span className="cmp-line cmp-line-md" />
        <span className="cmp-line cmp-line-sm" />
        <div className="cmp-phone-card" />
        <div className="cmp-phone-card" />
        <div className="cmp-phone-wa">
          <Icon name="chat" size={16} />
          <span>Escríbenos</span>
        </div>
      </div>
    </div>
  </div>
);

export default WebMockup;
