import { useState } from "react";
import LogoAnimation from "../LogoAnimation/LogoAnimation";

const TESTIMONIALS = [
  {
    name: "Cliente A",
    visto: "F-1",
    quote:
      "Placeholder — troque por um depoimento real de aluna(o) aprovada(o).",
  },
  {
    name: "Cliente B",
    visto: "H-1B",
    quote:
      "Placeholder — troque por um depoimento real de cliente aprovada(o).",
  },
  {
    name: "Cliente C",
    visto: "B-1/B-2",
    quote:
      "Placeholder — troque por um depoimento real de cliente aprovada(o).",
  },
  {
    name: "Cliente D",
    visto: "B-1/B-2",
    quote:
      "Placeholder — troque por um depoimento real de cliente aprovada(o).",
  },
  {
    name: "Cliente E",
    visto: "B-1/B-2",
    quote:
      "Placeholder — troque por um depoimento real de cliente aprovada(o).",
  },
  {
    name: "Cliente F",
    visto: "B-1/B-2",
    quote:
      "Placeholder — troque por um depoimento real de cliente aprovada(o).",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) =>
      prev === TESTIMONIALS.length - 1 ? 0 : prev + 1
    );
  };

  const prev = () => {
    setCurrent((prev) =>
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
    );
  };

  const testimonial = TESTIMONIALS[current];

  return (
    <section className="testimonials section" id="depoimentos">
      <div className="container">

        <div className="section__head">
          <span className="eyebrow">Depoimentos</span>
          <h2>Histórias reais de quem já atravessou o processo.</h2>
        </div>

        <div className="testimonials__carousel">

          <button
            className="testimonial-arrow testimonial-arrow--prev"
            onClick={prev}
            aria-label="Depoimento anterior"
          >
            ←
          </button>

          <div className="testimonial-card">

            <div className="testimonial-card__top">
              <span className="testimonial-card__visto mono">
                {testimonial.visto}
              </span>

              <div className="testimonial-card__stamp">
                <LogoAnimation />
              </div>
            </div>

            <p className="testimonial-card__quote">
              “{testimonial.quote}”
            </p>

            <span className="testimonial-card__name mono">
              {testimonial.name}
            </span>

          </div>

          <button
            className="testimonial-arrow testimonial-arrow--next"
            onClick={next}
            aria-label="Próximo depoimento"
          >
            →
          </button>

        </div>

        <div className="testimonials__dots">
          {TESTIMONIALS.map((testimonial, index) => (
            <button
              key={testimonial.name}
              className={`testimonial-dot ${
                index === current ? "active" : ""
              }`}
              onClick={() => setCurrent(index)}
              aria-label={`Ir para depoimento ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;