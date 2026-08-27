import LogoAnimation from "../LogoAnimation/LogoAnimation";

const Hero = () => {
  return (
    <section className="hero" id="inicio">
      <div className="banner">
        <div className="container hero__row">
          <div className="hero__content">
            <span className="eyebrow">
              Consultoria de visto e imigração · EUA
            </span>

            <h1 className="hero__title">
              O caminho legal para os Estados Unidos, sem atalhos e sem
              adivinhação.
            </h1>

            <p className="hero__subtitle">
              Assessoria jurídica licenciada e mentoria de carreira para quem
              quer estudar, trabalhar ou viver nos EUA com o processo certo — do
              primeiro formulário à entrevista no consulado.
            </p>

            <div className="hero__actions">
              <a href="#contato" className="btn btn--primary">
                Agendar consulta gratuita
              </a>

              <a href="#processo" className="btn btn--ghost">
                Ver como funciona
              </a>
              
            </div>

            <p className="hero__visas mono">
              F-1 · J-1 · H-1B · B-1/B-2 · GREEN CARD
            </p>
          </div>

          <div className="hero__visual" aria-hidden="true">
            <svg viewBox="0 0 320 320" className="hero__path"></svg>

            <div className="hero__logo">
              <LogoAnimation />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
