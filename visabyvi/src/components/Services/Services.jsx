import useInView from '../../hooks/useInView';

/* 
  Cada serviço tem um slug — use pra rota (ex: /servicos/f1 com React Router)
  ou pra âncora/modal. Hoje aponta pra #slug como placeholder.
*/
const SERVICES = [
  { slug: 'f1', code: 'F-1', title: 'Visto de Estudante', desc: 'Ingresso em universidades e programas de intercâmbio.' },
  { slug: 'j1', code: 'J-1', title: 'Intercâmbio e Trabalho Temporário', desc: 'Programas de trabalho, pesquisa e formação profissional.' },
  { slug: 'h1b', code: 'H-1B', title: 'Trabalho Especializado', desc: 'Contratação por empresas americanas em cargos qualificados.' },
  { slug: 'b1b2', code: 'B-1/B-2', title: 'Turismo e Negócios', desc: 'Viagens de curta duração para turismo, eventos ou reuniões.' },
  { slug: 'green-card', code: 'GC', title: 'Green Card', desc: 'Caminhos legais para residência permanente nos EUA.' },
  { slug: 'ajuste-status', code: 'AOS', title: 'Mudança de Status', desc: 'Ajustes de status para quem já está legalmente nos EUA.' },
];

const Services = () => {
  const [ref, isVisible] = useInView({ threshold: 0.15 });

  return (
    <section className="services section" id="servicos">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">Serviços</span>
          <h2>Um plano jurídico para cada tipo de jornada.</h2>
        </div>

        <ul ref={ref} className={`services__list stagger ${isVisible ? 'is-visible' : ''}`}>
          {SERVICES.map((s) => (
            <li key={s.slug} className="stagger__item">
              <a href={`#${s.slug}`} className="service-row">
                <span className="service-row__code mono">{s.code}</span>
                <span className="service-row__text">
                  <span className="service-row__title">{s.title}</span>
                  <span className="service-row__desc">{s.desc}</span>
                </span>
                <span className="service-row__arrow" aria-hidden="true">→</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;