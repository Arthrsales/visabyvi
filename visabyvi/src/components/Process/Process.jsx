import useInView from '../../hooks/useInView';
import { useLanguage } from '../../i18n/LanguageContext';

const content = {
  pt: {
    eyebrow: 'Como funciona',
    title: 'Um acompanhamento que vai além de preencher formulário.',
    steps: [
      { n: '01', title: 'Diagnóstico', desc: 'Entendemos qual serviço você precisa e sua situação atual.' },
      { n: '02', title: 'Explicação da preparação', desc: 'Mostramos como vai funcionar cada etapa do seu processo.' },
      { n: '03', title: 'Lista personalizada', desc: 'Enviamos as informações e documentos necessários pro seu caso.' },
      { n: '04', title: 'Acompanhamento', desc: 'Sinalizamos pendências e ajudamos na organização.' },
      { n: '05', title: 'Preparação documental', desc: 'Montamos formulários, cartas e evidências do serviço contratado.' },
      { n: '06', title: 'Revisão final', desc: 'Conferimos tudo com atenção antes da entrega.' },
      { n: '07', title: 'Entrega e próximos passos', desc: 'Explicamos os passos administrativos seguintes ao envio.' },
    ],
  },
  en: {
    eyebrow: 'How it works',
    title: 'Support that goes beyond filling out a form.',
    steps: [
      { n: '01', title: 'Diagnosis', desc: 'We understand which service you need and your current situation.' },
      { n: '02', title: 'Preparation walkthrough', desc: 'We explain how each step of your process will work.' },
      { n: '03', title: 'Personalized checklist', desc: 'We send the information and documents required for your case.' },
      { n: '04', title: 'Follow-up', desc: 'We flag pending items and help you get organized.' },
      { n: '05', title: 'Document preparation', desc: 'We put together forms, letters and evidence for your service.' },
      { n: '06', title: 'Final review', desc: 'We carefully review everything before delivery.' },
      { n: '07', title: 'Delivery and next steps', desc: 'We explain the administrative next steps after submission.' },
    ],
  },
};

const Process = () => {
  const { lang } = useLanguage();
  const t = content[lang];
  const [ref, isVisible] = useInView({ threshold: 0.1 });

  return (
    <section className="process section" id="processo">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">{t.eyebrow}</span>
          <h2>{t.title}</h2>
        </div>

        <div ref={ref} className={`process__strip stagger ${isVisible ? 'is-visible' : ''}`}>
          {t.steps.map((step, i) => (
            <div className="process__stub stagger__item" key={step.n}>
              <span className="process__n mono">{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
              {i < t.steps.length - 1 && <hr className="dashed-divider process__stub-divider" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;