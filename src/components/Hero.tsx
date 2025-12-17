import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { translations, type Lang } from '../translations';

interface HeroProps {
  lang: Lang;
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = translations[lang].hero;

  const handleContact = () => {
    const el = document.getElementById('contacto');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handlePortfolio = () => {
    const el = document.getElementById('portafolio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <motion.div
      className="hero"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="hero-main">
        <motion.div className="hero-pill" variants={itemVariants}>
          {t.tag}
        </motion.div>

        <motion.h1 className="hero-title" variants={itemVariants}>
          {t.titleMain}
          <span className="hero-highlight">{t.titleHighlight}</span>
        </motion.h1>

        <motion.p className="hero-text" variants={itemVariants}>
          {t.sub}
        </motion.p>

        <motion.div className="hero-actions" variants={itemVariants}>
          <button type="button" className="btn btn-primary" onClick={handleContact}>
            {t.cta}
          </button>

          <button type="button" className="btn btn-text" onClick={handlePortfolio}>
            {t.seeProjects}
          </button>
        </motion.div>

        {/* NUEVO: señales tech (proof) */}
        <motion.div className="hero-proof" variants={itemVariants}>
          <span className="hero-proof-badge">{t.proof1}</span>
          <span className="hero-proof-badge">{t.proof2}</span>
          <span className="hero-proof-badge">{t.proof3}</span>
          <span className="hero-proof-badge">{t.proof4}</span>
        </motion.div>

        <motion.p className="hero-langs" variants={itemVariants}>
          {t.langs}
        </motion.p>
      </div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="hero-box">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="hero-swiper"
          >
            {['emprendedor.png', 'empresa full.png', 'tienda oline.png', 'flyer.png'].map(
              (name, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={`/images/${encodeURIComponent(name)}`}
                    alt={`Slide ${i + 1}`}
                    className="hero-slide-img"
                    loading={i === 0 ? 'eager' : 'lazy'}
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
