import useInView from '../../hooks/useInView';
import { useLanguage } from '../../i18n/LanguageContext';

const content = {
  pt: {
    eyebrow: 'Serviços',
    title: 'Assessoria completa para cada tipo de processo.',
    core: [
      { slug: 'extensao-b2', code: 'B-2', title: 'Extensão de Status B-2', desc: 'Prorrogação da permanência dentro dos Estados Unidos.' },
      { slug: 'j1-b2', code: 'J-1→B-2', title: 'Mudança de Status J-1 para B-2', desc: 'Transição de status após o programa J-1.' },
      { slug: 'mudanca-f1', code: 'F-1', title: 'Mudança de Status para F-1', desc: 'Preparação completa, do mapeamento de escola ao application.' },
      { slug: 'troca-escola', code: 'TRANSFER', title: 'Transferência / Troca de Escola', desc: 'Organização documental pra mudar de instituição sem perder o status.' },
      { slug: 'rfe', code: 'RFE', title: 'RFE Response', desc: 'Preparação de resposta a pedidos adicionais de evidência.' },
      { slug: 'mapeamento-escolas', code: 'MAP', title: 'Mapeamento de Escolas', desc: 'Pesquisa de instituições por localização, programa, valor e objetivo.' },
    ],
    individualTitle: 'Também atendemos sob demanda',
    individualLead: 'Pra quem já está com o processo encaminhado e precisa só de um item específico.',
    individual: ['Carta de intenção', 'Carta explicativa', 'Planejamento de atividades', 'Cartas de suporte', 'Organização de evidências', 'Suporte para documentos adicionais em processos já existentes'],
  },
  en: {
    eyebrow: 'Services',
    title: 'Full support for every type of process.',
    core: [
      { slug: 'extensao-b2', code: 'B-2', title: 'B-2 Status Extension', desc: 'Extending your authorized stay inside the United States.' },
      { slug: 'j1-b2', code: 'J-1→B-2', title: 'J-1 to B-2 Change of Status', desc: 'Transitioning status after your J-1 program.' },
      { slug: 'mudanca-f1', code: 'F-1', title: 'Change of Status to F-1', desc: 'Full preparation, from school mapping to the application.' },
      { slug: 'troca-escola', code: 'TRANSFER', title: 'School Transfer', desc: 'Document organization to change schools without losing status.' },
      { slug: 'rfe', code: 'RFE', title: 'RFE Response', desc: 'Preparing responses to Requests for Evidence.' },
      { slug: 'mapeamento-escolas', code: 'MAP', title: 'School Mapping', desc: 'Researching schools by location, program, cost and goals.' },
    ],
    individualTitle: 'Also available on demand',
    individualLead: 'For clients whose process is already underway and just need one specific item.',
    individual: ['Letter of intent', 'Explanatory letter', 'Activity planning', 'Support letters', 'Evidence organization', 'Support for additional documents in existing processes'],
  },
};

const Services = () => {
  const { lang } = useLanguage();
  const t = content[lang];
  const [ref, isVisible] = useInView({ threshold: 0.15 });
  const [refInd, isVisibleInd] = useInView({ threshold: 0.1 });

  return (
    <section className="services section" id="servicos">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">{t.eyebrow}</span>
          <h2>{t.title}</h2>
        </div>

        <ul ref={ref} className={`services__list stagger ${isVisible ? 'is-visible' : ''}`}>
          {t.core.map((s) => (
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

        <div className="services__individual">
          <h3 className="services__individual-title">{t.individualTitle}</h3>
          <p className="services__individual-lead">{t.individualLead}</p>
          <ul ref={refInd} className={`services__tags stagger ${isVisibleInd ? 'is-visible' : ''}`}>
            {t.individual.map((item) => (
              <li key={item} className="services__tag stagger__item">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;