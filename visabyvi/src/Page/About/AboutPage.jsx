import useInView from '../../hooks/useInView';
import { useLanguage } from '../../i18n/LanguageContext';

const content = {
  pt: {
    eyebrow: 'Quem está por trás',
    title: 'A história por trás da VisaByVi.',
    p1: '[TEXTO A DEFINIR — história de como a Vitória começou a VisaByVi]',
    p2: '[TEXTO A DEFINIR — como a equipe cresceu e como funciona o acompanhamento hoje]',
    statNumber: '+500',
    statLabel: 'pessoas já contaram com o suporte da VisaByVi',
  },
  en: {
    eyebrow: 'Who is behind it',
    title: 'The story behind VisaByVi.',
    p1: '[TEXT TO BE DEFINED — how Vitória started VisaByVi]',
    p2: '[TEXT TO BE DEFINED — how the team grew and how support works today]',
    statNumber: '+500',
    statLabel: 'people have already been supported by VisaByVi.',
  },
};

const AboutPage = () => {
  const { lang } = useLanguage();
  const t = content[lang];
  const [ref, isVisible] = useInView({ threshold: 0.2 });

  return (
    <main className="about-page">
      <section className="about section" ref={ref}>
        <div className="container about__row">
          <div className={`about__content reveal ${isVisible ? 'is-visible' : ''}`}>
            <span className="eyebrow">{t.eyebrow}</span>
            <h2>{t.title}</h2>
            <p>{t.p1}</p>
            <p>{t.p2}</p>
          </div>
          <div className={`about__stat reveal ${isVisible ? 'is-visible' : ''}`}>
            <span className="about__stat-number mono">{t.statNumber}</span>
            <span className="about__stat-label">{t.statLabel}</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;