import { useLanguage } from '../../i18n/LanguageContext';

const content = {
  pt: {
    eyebrow: 'Por que a VisaByVi',
    title: 'Menos incerteza, mais planejamento.',
    items: [
      { title: 'Acompanhamento completo', desc: 'Vamos além do formulário — organizamos toda a preparação com você.' },
      { title: 'Foco em processos internos', desc: 'Especialistas em mudança e extensão de status dentro dos EUA.' },
      { title: 'Transparência total', desc: 'Você acompanha cada etapa e cada decisão do seu processo.' },
      { title: 'Atendimento em português', desc: 'Do primeiro contato à entrega final, sem barreira de idioma.' },
    ],
  },
  en: {
    eyebrow: 'Why VisaByVi',
    title: 'Less uncertainty, more planning.',
    items: [
      { title: 'End-to-end support', desc: 'We go beyond the form — we organize the whole preparation with you.' },
      { title: 'Focus on in-country processes', desc: 'Specialists in change and extension of status inside the US.' },
      { title: 'Full transparency', desc: 'You follow every step and every decision of your process.' },
      { title: 'Support in Portuguese', desc: 'From first contact to final delivery, with no language barrier.' },
    ],
  },
};

const WhyUs = () => {
  const { lang } = useLanguage();
  const t = content[lang];
  return (
    <section className="whyus section whyus--visible">
      <div className="container whyus__row">
        <div className="section__head whyus__head">
          <span className="eyebrow">{t.eyebrow}</span>
          <h2>{t.title}</h2>
        </div>
        <div className="whyus__list">
          {t.items.map((item,i) => (
            <div className="whyus__item" key={item.title} style={{ '--delay': `${i * 0.15}s` }}>
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