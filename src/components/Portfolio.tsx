import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { translations, type Lang } from '../translations';

interface PortfolioProps {
  lang: Lang;
}

const Portfolio: React.FC<PortfolioProps> = ({ lang }) => {
  const t = translations[lang].portfolio;

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
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2.5 },
        }}
        className="portfolio-swiper"
      >
        {t.projects.map((project, idx) => (
          <SwiperSlide key={project.name}>
            <article className="card" data-aos="zoom-in">
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
              <h3 className="card-title">{project.name}</h3>
              <p className="card-text">{project.description}</p>
              <span className="card-tag">{project.tag}</span>
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
