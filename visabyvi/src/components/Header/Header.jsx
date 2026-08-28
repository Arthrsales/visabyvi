import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import { useLanguage } from '../../i18n/LanguageContext';

const content = {
  pt: {
    nav: [
      { href: '#servicos', label: 'Serviços' },
      { href: '#processo', label: 'Como funciona' },
      { href: '#depoimentos', label: 'Depoimentos' },
      { href: '#faq', label: 'FAQ' },
    ],
    sobre: 'Sobre',
    cta: 'Agendar',
  },
  en: {
    nav: [
      { href: '#servicos', label: 'Services' },
      { href: '#processo', label: 'How it works' },
      { href: '#depoimentos', label: 'Testimonials' },
      { href: '#faq', label: 'FAQ' },
    ],
    sobre: 'About',
    cta: 'Book a call',
  },
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggleLanguage } = useLanguage();
  const t = content[lang];

  return (
    <header className="header">
      <div className="container header__row">
        <Link to="/" className="header__logo-link">
          <Logo variant="compact" />
        </Link>

        <nav className="header__nav header__nav--desktop">
          {t.nav.map((link) => (
            <a key={link.href} href={`/${link.href}`}>{link.label}</a>
          ))}
          <Link to="/sobre">{t.sobre}</Link>
        </nav>

        {/* Botão de idioma — troca PT/EN no site inteiro via contexto */}
        <button className="header__lang" onClick={toggleLanguage} aria-label="Toggle language">
          {lang === 'pt' ? 'EN' : 'PT'}
        </button>

        <a href="/#contato" className="btn btn--primary header__cta">{t.cta}</a>

        <button
          className={`header__burger ${menuOpen ? 'is-open' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      <nav className={`header__nav-mobile ${menuOpen ? 'is-open' : ''}`}>
        {t.nav.map((link) => (
          <a key={link.href} href={`/${link.href}`} onClick={() => setMenuOpen(false)}>
            {link.label}
          </a>
        ))}
        <Link to="/sobre" onClick={() => setMenuOpen(false)}>{t.sobre}</Link>
      </nav>
    </header>
  );
};

export default Header;