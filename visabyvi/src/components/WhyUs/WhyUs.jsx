import { useEffect, useRef, useState } from 'react';

const ITEMS = [
  {
    title: 'Assessoria licenciada',
    desc: 'Consultoria jurídica conduzida por profissionais habilitados nos EUA.',
  },
  {
    title: 'Mentoria além do visto',
    desc: 'Apoio acadêmico e de carreira para toda a sua jornada.',
  },
  {
    title: 'Transparência total',
    desc: 'Você acompanha cada etapa e cada decisão do seu processo.',
  },
  {
    title: 'Atendimento em português',
    desc: 'Do primeiro contato à entrevista, sem barreira de idioma.',
  },
];

const WhyUs = () => {
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
      className={`whyus section ${visible ? 'whyus--visible' : ''}`}
    >
      <div className="container whyus__row">

        <div className="section__head whyus__head">
          <span className="eyebrow">Por que a Visa by Vi</span>
          <h2>Menos incerteza, mais planejamento.</h2>
        </div>

        {/* <div className='vitoria'></div> */}

        <div className="whyus__list">
          {ITEMS.map((item, index) => (
            <div
              className="whyus__item"
              key={item.title}
              style={{ '--delay': `${index * 0.15}s` }}
            >
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;