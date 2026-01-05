import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { translations, type Lang } from "../translations";

interface HeroProps {
  lang: Lang;
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = translations[lang].hero;
  const goTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65 } },
  };

  return (
    <motion.div
      className="hero hero-commercial"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="hero-main">
        <motion.div className="hero-pill" variants={itemVariants}>
          {t.pill}
        </motion.div>

        <motion.h1
          className="hero-title hero-title-commercial"
          variants={itemVariants}
        >
          {t.h1a} <span className="hero-highlight">{t.h1b}</span> {t.h1c}.
        </motion.h1>

        <motion.p className="hero-text" variants={itemVariants}>
          {t.sub}
        </motion.p>

        {/* Precio visible */}
        <motion.div className="hero-offer" variants={itemVariants}>
          <div className="hero-offer-price">
            <span className="hero-offer-from">{t.priceLabel}</span>
            <span className="hero-offer-amount">{t.price}</span>
          </div>
          <div className="hero-offer-note">{t.priceNote}</div>
        </motion.div>

        {/* Bullets comerciales (no técnicos) */}
        <motion.ul className="hero-bullets" variants={itemVariants}>
          {t.bullets?.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </motion.ul>

        <motion.div className="hero-actions" variants={itemVariants}>
          <button
            type="button"
            className="btn hero-cta-primary"
            onClick={() => goTo("contacto")}
          >
            {t.cta}
          </button>

          <button
            type="button"
            className="btn hero-cta-secondary"
            onClick={() => goTo("servicios")}
          >
            {t.cta2} →
          </button>
        </motion.div>

        <motion.p className="hero-trust" variants={itemVariants}>
          {t.trust}
        </motion.p>
      </div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75, delay: 0.2 }}
      >
        <div className="hero-box hero-box-commercial">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            loop
            autoplay={{ delay: 4200, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="hero-swiper"
          >
            {["web299usd.png", "tienda499usd.png", "aula499usd.png"].map(
              (name, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={`/images/${encodeURIComponent(name)}`}
                    alt={`Oferta ${i + 1}`}
                    className="hero-slide-img"
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
