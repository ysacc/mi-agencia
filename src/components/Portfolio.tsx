import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { translations, type Lang } from "../translations";

interface PortfolioProps {
  lang: Lang;
  onSelectCase?: (caseName: string) => void;
}

const FALLBACK_IMAGES = ["empresa full.png", "tienda oline.png", "PORTADA.png"];

const Portfolio: React.FC<PortfolioProps> = ({ lang, onSelectCase }) => {
  // ✅ fallback seguro: evita "possibly undefined"
  const { portfolio: t } = translations[lang] ?? translations.es;

  const goToContact = () => {
    const el = document.getElementById("contacto");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleCaseCta = (caseName: string) => {
    onSelectCase?.(caseName);
    goToContact();
  };

  const images = useMemo(() => FALLBACK_IMAGES, []);

  return (
    <>
      <div className="section-heading" data-aos="fade-up">
        <h2 className="section-title">{t?.title}</h2>
        <p className="section-subtitle">{t?.subtitle}</p>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={16}
        slidesPerView={1}
        navigation={{
          nextEl: ".portfolio-next",
          prevEl: ".portfolio-prev",
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2.5 },
        }}
        className="portfolio-swiper"
      >
        {t?.projects.map((project, idx) => {
          const imgName = images[idx % images.length];
          const bgUrl = `/images/${encodeURIComponent(imgName)}`;

          return (
            <SwiperSlide key={project.name}>
              <article className="card case-card" data-aos="zoom-in">
                <div
                  className="card-media"
                  role="img"
                  aria-label={`${project.name} preview`}
                  style={{ backgroundImage: `url('${bgUrl}')` }}
                />

                <div className="case-head">
                  <h3 className="card-title">{project.name}</h3>
                  <span className="card-tag">{project.tag}</span>
                </div>

                <p className="card-text">{project.description}</p>

                <p className="case-result">{project.result}</p>

                {project.stack?.length > 0 && (
                  <div className="case-stack">
                    {project.stack.map((s) => (
                      <span key={s} className="case-chip">
                        {s}
                      </span>
                    ))}
                  </div>
                )}

                <button
                  type="button"
                  className="btn btn-primary case-cta"
                  onClick={() => handleCaseCta(project.name)}
                >
                  {project.cta}
                </button>
              </article>
            </SwiperSlide>
          );
        })}

        {/* ✅ OJO: usa clases únicas para no chocar con otros Swipers */}
        <button
          className="portfolio-prev"
          aria-label="Anterior"
          type="button"
        />
        <button
          className="portfolio-next"
          aria-label="Siguiente"
          type="button"
        />
      </Swiper>
    </>
  );
};

export default Portfolio;
