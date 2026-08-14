import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { translations, type Lang } from "../translations";
import { trackPrimaryCta, trackViewService } from "../lib/analytics";
import { usePrefersReducedMotion } from "../lib/usePrefersReducedMotion";

interface HeroProps {
  lang: Lang;
}

/**
 * Imágenes de oferta.
 *
 * Se sirve WebP con respaldo PNG y dos anchos (480 y 900) para que el móvil
 * no descargue la versión grande. Se declaran width/height para reservar el
 * espacio y evitar saltos de layout.
 */
const SLIDES = [
  {
    webp: "/images/web299usd.webp",
    webpSmall: "/images/web299usd-480.webp",
    png: "/images/web299usd.png",
    alt: "Paquete Web Emprendedor desde USD 299: incluye WhatsApp, formulario de contacto, rapidez con soporte y diseño responsive.",
  },
  {
    webp: "/images/tienda499usd.webp",
    webpSmall: "/images/tienda499usd-480.webp",
    png: "/images/tienda499usd.png",
    alt: "Paquete Tienda Online desde USD 499: catálogo de productos, pedidos y administración de la tienda.",
  },
  {
    webp: "/images/aula499usd.webp",
    webpSmall: "/images/aula499usd-480.webp",
    png: "/images/aula499usd.png",
    alt: "Paquete Aula Virtual desde USD 499: cursos y exámenes, calificaciones y alumnos, preparado para crecer.",
  },
];

const IMG_WIDTH = 900;
const IMG_HEIGHT = 1350;

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = translations[lang].hero;
  const reduceMotion = usePrefersReducedMotion();

  const goTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  /**
   * Entrada escalonada con CSS.
   * Solo anima `transform`: el texto se pinta visible desde el primer frame,
   * así la animación no retrasa el Largest Contentful Paint.
   */
  const rise = (step: number): React.CSSProperties | undefined =>
    reduceMotion ? undefined : { animationDelay: `${step * 70}ms` };

  const animClass = reduceMotion ? "" : "hero-rise";

  return (
    <div className="hero hero-commercial">
      <div className="hero-main">
        <p className={`hero-pill ${animClass}`} style={rise(0)}>
          {t.pill}
        </p>

        <h1
          className={`hero-title hero-title-commercial ${animClass}`}
          style={rise(1)}
        >
          {t.h1a} <span className="hero-highlight">{t.h1b}</span> {t.h1c}.
        </h1>

        <p className={`hero-text ${animClass}`} style={rise(2)}>
          {t.sub}
        </p>

        {/* Precio visible */}
        <div className={`hero-offer ${animClass}`} style={rise(3)}>
          <div className="hero-offer-price">
            <span className="hero-offer-from">{t.priceLabel}</span>
            <span className="hero-offer-amount">{t.price}</span>
          </div>
          <div className="hero-offer-note">{t.priceNote}</div>
        </div>

        {/* Bullets comerciales (no técnicos) */}
        <ul className={`hero-bullets ${animClass}`} style={rise(4)}>
          {t.bullets?.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>

        <div className={`hero-actions ${animClass}`} style={rise(5)}>
          <button
            type="button"
            className="btn hero-cta-primary"
            onClick={() => {
              trackPrimaryCta({
                page: "/",
                location: "hero",
                label: t.cta ?? "Quiero mi web",
              });
              goTo("contacto");
            }}
          >
            {t.cta}
          </button>

          <button
            type="button"
            className="btn hero-cta-secondary"
            onClick={() => {
              trackViewService({
                page: "/",
                location: "hero_secundario",
                label: t.cta2 ?? "Ver precios",
              });
              goTo("servicios");
            }}
          >
            {t.cta2} →
          </button>
        </div>

        <p className={`hero-trust ${animClass}`} style={rise(6)}>
          {t.trust}
        </p>
      </div>

      <div className="hero-visual">
        <div className="hero-box hero-box-commercial">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            loop
            // Sin reproducción automática si el usuario pide menos movimiento.
            autoplay={
              reduceMotion ? false : { delay: 4200, disableOnInteraction: false }
            }
            pagination={{ clickable: true }}
            className="hero-swiper"
          >
            {SLIDES.map((slide, i) => (
              <SwiperSlide key={slide.webp}>
                <picture>
                  <source
                    type="image/webp"
                    srcSet={`${slide.webpSmall} 480w, ${slide.webp} 900w`}
                    sizes="(max-width: 1024px) 92vw, 420px"
                  />
                  <img
                    src={slide.png}
                    alt={slide.alt}
                    className="hero-slide-img"
                    width={IMG_WIDTH}
                    height={IMG_HEIGHT}
                    loading={i === 0 ? "eager" : "lazy"}
                    fetchPriority={i === 0 ? "high" : "low"}
                    decoding={i === 0 ? "sync" : "async"}
                  />
                </picture>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Hero;
