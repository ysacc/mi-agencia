import { useMemo } from "react";
import { translations, type Lang } from "../translations";

type LogoItem = { src: string; webp: string; alt: string };

/** Tamaño intrínseco aproximado de las muestras, para reservar el espacio. */
const LOGO_WIDTH = 384;
const LOGO_HEIGHT = 300;

/**
 * Muestras de proyectos web.
 *
 * PENDIENTE DE VERIFICAR: estas imágenes son maquetas de sitios, no logotipos
 * de clientes. Si corresponden a proyectos reales, conviene sustituir el alt
 * por el nombre del proyecto; si no lo son, esta sección debería retirarse
 * para no dar a entender una cartera de clientes que no existe.
 */
const LOGOS: LogoItem[] = [
  { src: "/logos/logo1.jpg", webp: "/logos/logo1.webp", alt: "Muestra de diseño web para veterinaria" },
  { src: "/logos/logo2.jpg", webp: "/logos/logo2.webp", alt: "Muestra de diseño web de proyecto" },
  { src: "/logos/logo3.jpg", webp: "/logos/logo3.webp", alt: "Muestra de diseño web de proyecto" },
  { src: "/logos/logo4.jpg", webp: "/logos/logo4.webp", alt: "Muestra de diseño web de proyecto" },
  { src: "/logos/logo5.jpg", webp: "/logos/logo5.webp", alt: "Muestra de diseño web de proyecto" },
  { src: "/logos/logo6.jpg", webp: "/logos/logo6.webp", alt: "Muestra de diseño web de proyecto" },
  { src: "/logos/logo7.jpg", webp: "/logos/logo7.webp", alt: "Muestra de diseño web de proyecto" },
  { src: "/logos/logo8.jpg", webp: "/logos/logo8.webp", alt: "Muestra de diseño web de proyecto" },
  { src: "/logos/logo9.jpg", webp: "/logos/logo9.webp", alt: "Muestra de diseño web de proyecto" },
];

interface TrustedCompaniesProps {
  lang: Lang;
}

const TrustedCompanies: React.FC<TrustedCompaniesProps> = ({ lang }) => {
  const t = translations[lang].trustedCompanies;

  // duplicamos para que el loop sea “infinito” sin saltos
  const track = useMemo(() => [...LOGOS, ...LOGOS], []);

  return (
    <section className="trusted-section" aria-label={t.ariaLabel}>
      <div className="container">
        <div className="trusted-heading">
          <h2 className="section-title">{t.title}</h2>
          <p>{t.subtitle}</p>
        </div>

        <div className="trusted-marquee">
          {/* Carril 1 */}
          <div className="trusted-row">
            <div className="trusted-track trusted-track--left">
              {track.map((l, i) => (
                <div className="trusted-logo" key={`t1-${i}`}>
                  <picture>
                    <source srcSet={l.webp} type="image/webp" />
                    <img
                      src={l.src}
                      alt={l.alt}
                      width={LOGO_WIDTH}
                      height={LOGO_HEIGHT}
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                    />
                  </picture>
                </div>
              ))}
            </div>
          </div>

          {/* Carril 2 (sentido inverso) */}
          <div className="trusted-row">
            <div className="trusted-track trusted-track--right">
              {track.map((l, i) => (
                <div className="trusted-logo" key={`t2-${i}`}>
                  {/* Carril decorativo duplicado: alt vacío para no repetir
                      la misma información a los lectores de pantalla. */}
                  <picture>
                    <source srcSet={l.webp} type="image/webp" />
                    <img
                      src={l.src}
                      alt=""
                      width={LOGO_WIDTH}
                      height={LOGO_HEIGHT}
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                    />
                  </picture>
                </div>
              ))}
            </div>
          </div>

          {/* fades laterales */}
          <div className="trusted-fade trusted-fade--left" />
          <div className="trusted-fade trusted-fade--right" />
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
