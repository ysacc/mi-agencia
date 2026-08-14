import React from "react";
import { SERVICE_LINKS } from "../lib/site";
import { withUtm } from "../lib/utm";
import { trackViewService } from "../lib/analytics";

/**
 * Enlaces desde la home a las páginas de cada servicio.
 * Son enlaces reales (no anclas): dan entrada de rastreo a las tres páginas
 * y permiten al visitante profundizar en el servicio que le interesa.
 */
const ServiceLinks: React.FC = () => (
  <div className="service-links">
    {SERVICE_LINKS.map((service) => (
      <a
        key={service.id}
        className="service-link-card"
        href={withUtm(service.path)}
        onClick={() =>
          trackViewService({
            page: "/",
            service: service.name,
            location: "servicios",
            label: service.name,
          })
        }
      >
        <h3 className="service-link-title">{service.name}</h3>
        <p className="service-link-text">{service.short}</p>
        <span className="service-link-go">Ver detalle →</span>
      </a>
    ))}
  </div>
);

export default ServiceLinks;
