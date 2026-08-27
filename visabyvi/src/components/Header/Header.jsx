import { useState } from 'react';
import Logo from '../Logo/Logo';

const NAV_LINKS = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#processo', label: 'Como funciona' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#faq', label: 'FAQ' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header__row">
        <a href="#inicio" className="header__logo-link">
          <Logo variant="compact" />
        </a>

        {/* Nav desktop — escondida no mobile via CSS */}
        <nav className="header__nav header__nav--desktop">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>

        <a href="#contato" className="btn btn--primary header__cta">Agendar</a>

        {/* Botão hambúrguer — só aparece no mobile */}
        <button
          className={`header__burger ${menuOpen ? 'is-open' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Menu mobile — dropdown abaixo do header */}
      <nav className={`header__nav-mobile ${menuOpen ? 'is-open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;