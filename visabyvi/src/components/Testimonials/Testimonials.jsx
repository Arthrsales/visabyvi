import { useState, useRef } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';

const content = {
  pt: {
    eyebrow: 'Depoimentos',
    title: 'Histórias reais de quem já atravessou o processo.',
    items: [
      { name: 'Cliente A', visto: 'F-1', quote: 'Placeholder — troque por um depoimento real.' },
      { name: 'Cliente B', visto: 'J-1→B-2', quote: 'Placeholder — troque por um depoimento real.' },
      { name: 'Cliente C', visto: 'B-2', quote: 'Placeholder — troque por um depoimento real.' },
    ],
  },
  en: {
    eyebrow: 'Testimonials',
    title: 'Real stories from people who went through the process.',
    items: [
      { name: 'Client A', visto: 'F-1', quote: 'Placeholder — replace with a real testimonial.' },
      { name: 'Client B', visto: 'J-1→B-2', quote: 'Placeholder — replace with a real testimonial.' },
      { name: 'Client C', visto: 'B-2', quote: 'Placeholder — replace with a real testimonial.' },
    ],
  },
};

const Testimonials = () => {
  const { lang } = useLanguage();
  const t = content[lang];
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(0);

  const goTo = (i) => setIndex((i + t.items.length) % t.items.length);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);
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
          <span className="eyebrow">{t.eyebrow}</span>
          <h2>{t.title}</h2>
        </div>
        <div className="carousel" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          <div className="carousel__track" style={{ transform: `translateX(-${index * 100}%)` }}>
            {t.items.map((item) => (
              <div className="carousel__slide" key={item.name}>
                <div className="testimonial-card">
                  <span className="testimonial-card__code mono">{item.visto}</span>
                  <p className="testimonial-card__quote">"{item.quote}"</p>
                  <span className="testimonial-card__name mono">{item.name}</span>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel__arrow carousel__arrow--prev" onClick={prev} aria-label="Previous">‹</button>
          <button className="carousel__arrow carousel__arrow--next" onClick={next} aria-label="Next">›</button>
          <div className="carousel__dots">
            {t.items.map((_, i) => (
              <button key={i} className={`carousel__dot ${i === index ? 'is-active' : ''}`} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;