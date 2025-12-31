import { useMemo } from "react";
import { translations, type Lang } from "../translations";

type LogoItem = { src: string; alt?: string };

const LOGOS: LogoItem[] = [
  { src: "/logos/logo1.png", alt: "Cliente 1" },
  { src: "/logos/logo2.png", alt: "Cliente 2" },
  { src: "/logos/logo3.png", alt: "Cliente 3" },
  { src: "/logos/logo4.png", alt: "Cliente 4" },
  { src: "/logos/logo5.png", alt: "Cliente 5" },
  { src: "/logos/logo6.png", alt: "Cliente 6" },
  { src: "/logos/logo7.png", alt: "Cliente 7" },
  { src: "/logos/logo8.png", alt: "Cliente 8" },
  { src: "/logos/logo9.png", alt: "Cliente 9" },
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
                  <img src={l.src} alt={l.alt ?? ""} draggable={false} />
                </div>
              ))}
            </div>
          </div>

          {/* Carril 2 (sentido inverso) */}
          <div className="trusted-row">
            <div className="trusted-track trusted-track--right">
              {track.map((l, i) => (
                <div className="trusted-logo" key={`t2-${i}`}>
                  <img src={l.src} alt={l.alt ?? ""} draggable={false} />
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
