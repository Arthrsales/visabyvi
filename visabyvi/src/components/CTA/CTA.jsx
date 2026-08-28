import { useLanguage } from '../../i18n/LanguageContext';

const content = {
  pt: { eyebrow: 'Vamos começar', title: 'Pronta(o) para organizar seu processo nos Estados Unidos?', cta: 'Agendar consulta gratuita' },
  en: { eyebrow: "Let's get started", title: 'Ready to organize your process in the United States?', cta: 'Book a free consultation' },
};

const CTA = () => {
  const { lang } = useLanguage();
  const t = content[lang];
  return (
    <section className="cta section" id="contato">
      <div className="container cta__box">
        <span className="eyebrow">{t.eyebrow}</span>
        <h2 className="cta__title">{t.title}</h2>
        <a href="mailto:contato@visabyvi.com" className="btn btn--primary">{t.cta}</a>
      </div>
    </section>
  );
};

export default CTA;