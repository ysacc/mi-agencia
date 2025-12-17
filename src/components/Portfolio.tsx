import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { translations, type Lang } from '../translations';

interface PortfolioProps {
  lang: Lang;
  onSelectCase?: (caseName: string) => void; // NUEVO
}

const Portfolio: React.FC<PortfolioProps> = ({ lang, onSelectCase }) => {
  const t = translations[lang].portfolio;

  const goToContact = () => {
    const el = document.getElementById('contacto');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleCaseCta = (caseName: string) => {
    onSelectCase?.(caseName);
    goToContact();
  };

  return (
    <>
      <div className="section-heading" data-aos="fade-up">
        <h2 className="section-title">{t.title}</h2>
        <p className="section-subtitle">{t.subtitle}</p>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={16}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
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
        {t.projects.map((project, idx) => (
          <SwiperSlide key={project.name}>
            <article className="card case-card" data-aos="zoom-in">
              <div
                className="card-media"
                role="img"
                aria-label={`${project.name} preview`}
                style={{
                  backgroundImage: `url('/images/${
                    ['empresa full.png', 'tienda oline.png', 'PORTADA.png'][idx % 3]
                  }')`,
                }}
              />

              <div className="case-head">
                <h3 className="card-title">{project.name}</h3>
                <span className="card-tag">{project.tag}</span>
              </div>

              <p className="card-text">{project.description}</p>

              {/* Si ya agregaste result/stack en translations, esto se muestra */}
              {'result' in project && <p className="case-result">{(project as any).result}</p>}

              {'stack' in project && Array.isArray((project as any).stack) && (
                <div className="case-stack">
                  {(project as any).stack.map((s: string) => (
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
                {'cta' in project ? (project as any).cta : 'Ver caso'}
              </button>
            </article>
          </SwiperSlide>
        ))}

        <div className="swiper-button-prev" />
        <div className="swiper-button-next" />
      </Swiper>
    </>
  );
};

export default Portfolio;
