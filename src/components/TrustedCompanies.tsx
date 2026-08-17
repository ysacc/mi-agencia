import { useMemo, useState } from "react";
import { translations, type Lang } from "../translations";

interface Company {
  name: string;
  /** Nombre del archivo en `public/marcas/`, sin extension. */
  slug: string;
}

/**
 * Empresas con las que se ha trabajado, indicadas por el propietario del sitio.
 *
 * Cada logo se carga desde `public/marcas/<slug>.png`. Mientras el archivo no
 * exista, la tarjeta muestra el nombre de la empresa: asi la seccion nunca se
 * ve rota y los logos se pueden ir agregando de uno en uno.
 *
 * Formato recomendado para cada archivo: PNG con fondo transparente, unos
 * 400 px de ancho y el logo en una sola tinta (blanco o negro). El CSS lo pinta
 * en blanco, que es el tratamiento habitual de un muro de marcas sobre fondo
 * oscuro y evita que ocho paletas distintas compitan entre si.
 *
 * Usar siempre los archivos oficiales que entrega cada empresa en su manual de
 * marca, y contar con su autorizacion para mostrarlos.
 */
const COMPANIES: Company[] = [
  { name: "BBVA", slug: "bbva" },
  { name: "Supermercados Peruanos", slug: "supermercados-peruanos" },
  { name: "Aceros Arequipa", slug: "aceros-arequipa" },
  { name: "UTP", slug: "utp" },
  { name: "Principal Chile", slug: "principal" },
  { name: "Sanna", slug: "sanna" },
  { name: "Clínica Ricardo Palma", slug: "clinica-ricardo-palma" },
  { name: "Interbank", slug: "interbank" },
];

interface TrustedCompaniesProps {
  lang: Lang;
}

const TrustedCompanies: React.FC<TrustedCompaniesProps> = ({ lang }) => {
  const t = translations[lang].trustedCompanies;

  /** Marcas cuyo archivo de logo aun no existe: se muestran como texto. */
  const [sinLogo, setSinLogo] = useState<Record<string, boolean>>({});

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
              {track.map((company, i) => {
                const esCopia = i >= COMPANIES.length;

                return (
                  <div
                    className={`trusted-brand ${
                      sinLogo[company.slug] ? "is-text" : ""
                    }`}
                    key={`${company.slug}-${i}`}
                    /* La segunda mitad es una copia visual: se oculta a los
                       lectores de pantalla para no repetir la lista. */
                    aria-hidden={esCopia ? true : undefined}
                  >
                    {sinLogo[company.slug] ? (
                      company.name
                    ) : (
                      <img
                        src={`/marcas/${company.slug}.png`}
                        alt={esCopia ? "" : company.name}
                        loading="lazy"
                        decoding="async"
                        draggable={false}
                        onError={() =>
                          setSinLogo((prev) => ({
                            ...prev,
                            [company.slug]: true,
                          }))
                        }
                      />
                    )}
                  </div>
                );
              })}
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
