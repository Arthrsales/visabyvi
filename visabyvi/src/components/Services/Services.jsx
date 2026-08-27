import { useEffect, useRef, useState } from 'react';

const SERVICES = [
  {
    code: 'F-1',
    title: 'Visto de Estudante',
    desc: 'Ingresso em universidades e programas de intercâmbio acadêmico nos EUA.',
  },
  {
    code: 'J-1',
    title: 'Intercâmbio e Trabalho Temporário',
    desc: 'Programas de trabalho, pesquisa e formação profissional.',
  },
  {
    code: 'H-1B',
    title: 'Trabalho Especializado',
    desc: 'Contratação por empresas americanas em cargos de alta qualificação.',
  },
  {
    code: 'B-1/B-2',
    title: 'Turismo e Negócios',
    desc: 'Viagens de curta duração para turismo, eventos ou reuniões.',
  },
  {
    code: 'GC',
    title: 'Green Card',
    desc: 'Caminhos legais para residência permanente nos Estados Unidos.',
  },
  {
    code: 'AOS',
    title: 'Mudança de Status',
    desc: 'Ajustes de status para quem já está legalmente nos EUA.',
  },
];

const Services = () => {
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
        threshold: 0.15,
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
      className={`services section ${visible ? 'services--visible' : ''}`}
      id="servicos"
    >
      <div className="container">

        <div className="section__head services__head">
          <span className="eyebrow">Serviços</span>
          <h2>Um plano jurídico para cada tipo de jornada.</h2>
        </div>

        <div className="services__grid">
          {SERVICES.map((s, index) => (
            <div
              className="service-card"
              key={s.code}
              style={{
                '--delay': `${index * 0.20}s`,
              }}
            >
              <span className="service-card__code mono">
                {s.code}
              </span>

              <h3>{s.title}</h3>

              <p>{s.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
  
};

export default Services;