import { useEffect, useRef, useState } from "react";

const FAQS = [
  {
    q: "Quanto tempo demora o processo?",
    a: "Varia por tipo de visto: em média de algumas semanas (turismo) a alguns meses (trabalho e residência). Definimos um prazo estimado já no diagnóstico.",
  },
  {
    q: "Vocês garantem a aprovação do visto?",
    a: "Nenhuma consultoria pode garantir aprovação — a decisão é do consulado ou do USCIS. Nosso trabalho é reduzir riscos e fortalecer cada etapa do seu processo.",
  },
  {
    q: "Também ajudam com bolsas de estudo?",
    a: "Sim. Oferecemos mentoria para quem busca estudar nos EUA com bolsa parcial ou integral, da escolha da instituição à documentação.",
  },
  {
    q: "Posso reaplicar após uma negativa?",
    a: "Sim. Analisamos o motivo da recusa e reconstruímos a estratégia antes de uma nova aplicação.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(0);
  const [visible, setVisible] = useState(false);

  const faqRef = useRef(null);

  useEffect(() => {
    const element = faqRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.05,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={faqRef}
      className={`faq section ${visible ? "faq--visible" : ""}`}
      id="faq"
    >
      <div className="container faq__row">

        <div className="section__head faq__head">
          <span className="eyebrow">
            Perguntas frequentes
          </span>

          <h2>
            Tudo o que você precisa saber antes de começar.
          </h2>
        </div>

        <div className="faq__list">
          {FAQS.map((item, i) => (
            <div
              className={`faq__item ${
                open === i ? "is-open" : ""
              }`}
              key={item.q}
              style={{
                "--delay": `${i * 0.2}s`,
              }}
            >
              <button
                className="faq__question"
                onClick={() =>
                  setOpen(open === i ? -1 : i)
                }
              >
                <span className="mono faq__index">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span>{item.q}</span>

                <span className="faq__icon">
                  {open === i ? "–" : "+"}
                </span>
              </button>

              <div className="faq__answer">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;