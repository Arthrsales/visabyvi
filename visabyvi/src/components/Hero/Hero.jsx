import Logo from '../Logo/Logo';
import useParallax from '../../hooks/useParallax';

const Hero = () => {
  const parallaxRef = useParallax(0.15); // ajuste a intensidade aqui

  return (
    <section className="hero" id="inicio">
      {/* 
        FUNDO PARALLAX — cobre o hero inteiro.
        Troque .hero__parallax-placeholder por:
        <img src="/caminho-da-imagem.jpg" alt="" className="hero__parallax-img" />
        O ref (parallaxRef) já cuida do movimento no scroll.
      */}
      <div className="hero__parallax" ref={parallaxRef}>
       <img src="/hero-bandeira.webp" alt="" className="hero__parallax-img" />
      </div>
      <div className="hero__overlay" aria-hidden="true" />

      <div className="container hero__row">
        {/* Mobile-first: logo aparece primeiro, depois o texto */}
        <div className="hero__logo-badge">
          <Logo variant="full" />
        </div>

        <div className="hero__content">
          <span className="eyebrow">Consultoria de visto e imigração · EUA</span>
          <h1 className="hero__title">
            O caminho legal para os Estados Unidos, sem atalhos e sem adivinhação.
          </h1>
          <p className="hero__subtitle">
            Assessoria jurídica licenciada e mentoria de carreira para quem quer estudar,
            trabalhar ou viver nos EUA com o processo certo — do primeiro formulário
            à entrevista no consulado.
          </p>
          <div className="hero__actions">
            <a href="#contato" className="btn btn--primary">Agendar consulta gratuita</a>
            <a href="#processo" className="btn btn--ghost">Ver como funciona</a>
          </div>
          <p className="hero__visas mono">F-1 · J-1 · H-1B · B-1/B-2 · GREEN CARD</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;