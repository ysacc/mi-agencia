import { useMemo } from "react";
import { translations, type Lang } from "../translations";

/**
 * Empresas con las que se ha trabajado, indicadas por el propietario del sitio.
 *
 * Se muestran como texto y no como logotipos: no disponemos de los archivos de
 * marca originales y reproducir logotipos ajenos sin autorización expresa es
 * un riesgo innecesario. Si en algún momento se cuenta con los logos y el
 * permiso para usarlos, se sustituye este listado por imágenes.
 */
const COMPANIES: string[] = [
  "BBVA",
  "Supermercados Peruanos",
  "Aceros Arequipa",
  "UTP",
  "Principal Chile",
  "Sanna",
  "Clínica Ricardo Palma",
  "Interbank",
];

interface TrustedCompaniesProps {
  lang: Lang;
}

const TrustedCompanies: React.FC<TrustedCompaniesProps> = ({ lang }) => {
  const t = translations[lang].trustedCompanies;

  // Se duplica la lista para que el desplazamiento no muestre cortes.
  const track = useMemo(() => [...COMPANIES, ...COMPANIES], []);

  return (
    <section className="trusted-section" aria-label={t.ariaLabel}>
      <div className="container">
        <div className="trusted-heading">
          <h2 className="section-title">{t.title}</h2>
          <p>{t.subtitle}</p>
        </div>

        <div className="trusted-marquee">
          <div className="trusted-row">
            <div className="trusted-track trusted-track--left">
              {track.map((name, i) => (
                <div
                  className="trusted-name"
                  key={`${name}-${i}`}
                  /* La segunda mitad es una copia visual: se oculta a los
                     lectores de pantalla para no repetir la lista. */
                  aria-hidden={i >= COMPANIES.length ? true : undefined}
                >
                  {name}
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
