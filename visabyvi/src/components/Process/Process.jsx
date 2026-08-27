import { useEffect, useRef, useState } from 'react';

const STEPS = [
  {
    n: '01',
    title: 'Diagnóstico',
    desc: 'Avaliamos seu perfil, histórico e objetivo nos EUA.',
  },
  {
    n: '02',
    title: 'Estratégia',
    desc: 'Definimos o visto e o caminho jurídico mais seguro.',
  },
  {
    n: '03',
    title: 'Documentação',
    desc: 'Montamos e revisamos cada formulário com você.',
  },
  {
    n: '04',
    title: 'Preparação',
    desc: 'Simulamos a entrevista no consulado americano.',
  },
  {
    n: '05',
    title: 'Acompanhamento',
    desc: 'Seguimos ao seu lado até a aprovação final.',
  },
];

const Process = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`process section ${visible ? 'process--visible' : ''}`}
      id="processo"
    >
      <div className="container">

        <div className="section__head process__head">
          <span className="eyebrow">Como funciona</span>
          <h2>Do diagnóstico ao carimbo de aprovado.</h2>
        </div>

        <div className="process__strip">

          {/* Linha de progresso */}
          <div className="process__progress">
            <div className="process__progress-line" />
          </div>

          {STEPS.map((step, i) => (
            <div
              className="process__stub"
              key={step.n}
              style={{
                '--delay': `${0.3 + i * 0.25}s`,
              }}
            >
              <span className="process__n mono">
                {step.n}
              </span>

              <h3>{step.title}</h3>

              <p>{step.desc}</p>

              {i < STEPS.length - 1 && (
                <hr className="dashed-divider process__stub-divider" />
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Process;