import { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { translations, type Lang } from "../translations";

interface ReviewsProps {
  lang: Lang;
}

function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const total = 5;

  return (
    // role="img" para que aria-label sea válido: un div genérico no admite
    // nombre accesible, y sin él la calificación no se anuncia.
    <div className="review-stars" role="img" aria-label={`Calificación ${rating} de 5`}>
      {Array.from({ length: total }, (_, i) => (
        <span
          key={i}
          className={`review-star ${i < full ? "full" : "empty"}`}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
}

const Reviews: React.FC<ReviewsProps> = ({ lang }) => {
  const t = translations[lang].reviews;

  // Duplicamos si hay pocas reseñas para loop visual
  const items = useMemo(() => {
    if (!t.items || t.items.length >= 6) return t.items;
    return [...t.items, ...t.items];
  }, [t.items]);

  return (
    <section className="reviews-section" id="reviews">
      <div
        className="section-heading section-heading-center"
        data-aos="fade-up"
      >
        <h2 className="section-title">{t.title}</h2>
        {t.subtitle && <p className="section-subtitle">{t.subtitle}</p>}
      </div>

      <div className="reviews-wrap" data-aos="fade-up">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".reviews-next",
            prevEl: ".reviews-prev",
          }}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          loop
          spaceBetween={18}
          slidesPerView={"auto"}
          breakpoints={{
            640: { slidesPerView: 1.1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: "auto" },
          }}
          className="reviews-swiper"
        >
          {items.map((r, idx) => (
            <SwiperSlide key={`${r.name}-${idx}`} className="reviews-slide">
              <article
                className="review-card"
                aria-label={`Reseña de ${r.name}`}
              >
                <header className="review-head">
                  <div className="review-user">
                    <div className="review-avatar">
                      <span>{r.name.slice(0, 1).toUpperCase()}</span>
                    </div>

                    <div className="review-meta">
                      <div className="review-name">{r.name}</div>
                      <div className="review-when">{r.time}</div>
                    </div>
                  </div>

                  {r.source === "Google" && (
                    <span className="google-badge" title="Google">
                      G
                    </span>
                  )}
                </header>

                <Stars rating={r.rating} />

                <p className="review-text">{r.text}</p>
              </article>
            </SwiperSlide>
          ))}

          <button className="reviews-prev" aria-label="Anterior" type="button">
            ‹
          </button>
          <button className="reviews-next" aria-label="Siguiente" type="button">
            ›
          </button>
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
