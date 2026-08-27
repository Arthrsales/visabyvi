const Header = () => {
  return (
    <header className="header">
      <div className="container header__row">
        <a href="#inicio" className="header__logo mono">VISA BY VI</a>
        <nav className="header__nav">
          <a href="#servicos">Serviços</a>
          <a href="#processo">Como funciona</a>
          <a href="#depoimentos">Depoimentos</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a href="#contato" className="btn btn--primary header__cta">Agendar consulta</a>
      </div>
    </header>
  );
};

export default Header;