import useInView from '../../hooks/useInView';
import { useLanguage } from '../../i18n/LanguageContext';

const content = {
  pt: {
    eyebrow: 'Prazos recomendados',
    title: 'Quando começar seu processo com a VisaByVi.',
    disclaimer: 'Prazo recomendado pela VisaByVi para organização — o tempo de processamento e decisão depois disso não depende da nossa equipe.',
    items: [
      { service: 'Mudança J-1 → B-2', lead: '3 meses', note: 'de antecedência, pra organizar com calma antes do fim do status.' },
      { service: 'Mudança para F-1', lead: '3 meses', note: 'de antecedência — geralmente envolve mapeamento e application da escola.' },
      { service: 'Extensão B-2', lead: '50 dias', note: 'de antecedência, pra dar tempo de preparar a documentação com cuidado.' },
    ],
  },
  en: {
    eyebrow: 'Recommended timelines',
    title: 'When to start your process with VisaByVi.',
    disclaimer: 'Timeline recommended by VisaByVi for organization purposes — actual processing and decision time afterward is not up to our team.',
    items: [
      { service: 'J-1 → B-2 Change of Status', lead: '3 months', note: 'in advance, so we can organize everything before status ends.' },
      { service: 'Change of Status to F-1', lead: '3 months', note: 'in advance — usually involves school mapping and the application.' },
      { service: 'B-2 Extension', lead: '50 days', note: 'in advance, to give us time to prepare documentation carefully.' },
    ],
  },
};

const Timelines = () => {
  const { lang } = useLanguage();
  const t = content[lang];
  const [ref, isVisible] = useInView({ threshold: 0.15 });

  return (
    <section className="timelines section">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">{t.eyebrow}</span>
          <h2>{t.title}</h2>
          <p className="timelines__disclaimer">{t.disclaimer}</p>
        </div>

        <div ref={ref} className={`timelines__grid stagger ${isVisible ? 'is-visible' : ''}`}>
          {t.items.map((item) => (
            <div className="timeline-card stagger__item" key={item.service}>
              <span className="timeline-card__lead mono">{item.lead}</span>
              <h3>{item.service}</h3>
              <p>{item.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timelines;