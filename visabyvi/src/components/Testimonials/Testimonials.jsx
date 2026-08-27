import { useState, useRef } from 'react';

/* Troque pelos depoimentos reais da cliente */
const TESTIMONIALS = [
  { name: 'Cliente A', visto: 'F-1', quote: 'Placeholder — troque por um depoimento real de aluna(o) aprovada(o).' },
  { name: 'Cliente B', visto: 'H-1B', quote: 'Placeholder — troque por um depoimento real de cliente aprovada(o).' },
  { name: 'Cliente C', visto: 'B-1/B-2', quote: 'Placeholder — troque por um depoimento real de cliente aprovada(o).' },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(0);

  const goTo = (i) => setIndex((i + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  // Suporte a swipe no mobile
  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 50) prev();
    if (delta < -50) next();
  };

  return (
    <section className="testimonials section" id="depoimentos">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">Depoimentos</span>
          <h2>Histórias reais de quem já atravessou o processo.</h2>
        </div>

        <div
          className="carousel"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="carousel__track"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {TESTIMONIALS.map((t) => (
              <div className="carousel__slide" key={t.name}>
                <div className="testimonial-card">
                  <span className="testimonial-card__code mono">{t.visto}</span>
                  <p className="testimonial-card__quote">"{t.quote}"</p>
                  <span className="testimonial-card__name mono">{t.name}</span>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel__arrow carousel__arrow--prev" onClick={prev} aria-label="Anterior">‹</button>
          <button className="carousel__arrow carousel__arrow--next" onClick={next} aria-label="Próximo">›</button>

          <div className="carousel__dots">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                className={`carousel__dot ${i === index ? 'is-active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Ir para depoimento ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;