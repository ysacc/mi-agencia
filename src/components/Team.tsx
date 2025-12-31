import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Lang } from "../translations";
import { getTranslation } from "../i18n/getTranslation";

interface TeamProps {
  lang: Lang;
}

const Team: React.FC<TeamProps> = ({ lang }) => {
  const t = getTranslation(lang).team;

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
          nextEl: ".team-swiper .swiper-button-next",
          prevEl: ".team-swiper .swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2.5 },
        }}
        className="team-swiper"
      >
        {t?.members.map((member) => (
          <SwiperSlide key={member.name}>
            <article className="card" data-aos="zoom-in">
              <img
                src="/images/perfil empresa.jpg"
                alt={member.name}
                className="team-photo"
              />

              <h3 className="card-title">{member.name}</h3>
              <p className="card-text" style={{ marginTop: "0.15rem" }}>
                {member.role}
              </p>
              <p className="card-text" style={{ marginTop: "0.6rem" }}>
                {member.description}
              </p>

              <div className="member-tags">
                {member.tags.map((tag) => (
                  <span key={tag} className="member-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </SwiperSlide>
        ))}

        <div className="swiper-button-prev" />
        <div className="swiper-button-next" />
      </Swiper>
    </>
  );
};

export default Team;
