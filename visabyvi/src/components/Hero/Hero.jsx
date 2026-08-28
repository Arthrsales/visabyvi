import Logo from '../Logo/Logo';
import useParallax from '../../hooks/useParallax';
import { useLanguage } from '../../i18n/LanguageContext';

const content = {
  pt: {
    eyebrow: 'Assessoria documental · Processos não imigratórios nos EUA',
    title: 'Organização e preparação documental para o seu processo nos Estados Unidos.',
    subtitle:
      'Acompanhamento completo na preparação de status, formulários, cartas e evidências — do diagnóstico inicial à entrega final organizada. A VisaByVi não é um escritório de advocacia; nosso foco é suporte administrativo e documental.',
    primaryButton: 'Agendar consulta gratuita',
    secondaryButton: 'Ver como funciona',
    visas: 'B-2 · J-1→B-2 · F-1 · RFE · TROCA DE ESCOLA',
  },

  en: {
    eyebrow: 'Document assistance · Non-immigrant processes in the US',
    title: 'Document organization and preparation for your process in the United States.',
    subtitle:
      'Complete support with status preparation, forms, letters, and evidence — from the initial assessment to the final organized delivery. VisaByVi is not a law firm; our focus is administrative and document support.',
    primaryButton: 'Schedule a free consultation',
    secondaryButton: 'See how it works',
    visas: 'B-2 · J-1→B-2 · F-1 · RFE · SCHOOL TRANSFER',
  },
};

const Hero = () => {
  const { lang } = useLanguage();
  const t = content[lang];

  const parallaxRef = useParallax(0.15);

  return (
    <section className="hero" id="inicio">
      <div className="hero__parallax" ref={parallaxRef}>
        <img
          src="/hero-bandeira.webp"
          alt=""
          className="hero__parallax-img"
        />
      </div>

      <div className="hero__overlay" aria-hidden="true" />

      <div className="container hero__row">
        <div className="hero__logo-badge">
          <Logo variant="full" />
        </div>

        <div className="hero__content">
          <span className="eyebrow">
            {t.eyebrow}
          </span>

          <h1 className="hero__title">
            {t.title}
          </h1>

          <p className="hero__subtitle">
            {t.subtitle}
          </p>

          <div className="hero__actions">
            <a
              href="#contato"
              className="btn btn--primary"
            >
              {t.primaryButton}
            </a>

            <a
              href="#processo"
              className="btn btn--ghost"
            >
              {t.secondaryButton}
            </a>
          </div>

          <p className="hero__visas mono">
            {t.visas}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;