import Logo from '../Logo/Logo';

/* 
  DADOS PLACEHOLDER — troque pelos reais da cliente:
  endereço, telefone, e-mail e links de redes sociais.
*/
const SOCIALS = [
  { label: 'Instagram', href: 'https://instagram.com/' },
  { label: 'LinkedIn', href: 'https://linkedin.com/' },
  { label: 'WhatsApp', href: 'https://wa.me/' },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__col">
          <Logo variant="compact" />
          <p className="footer__tagline">Consultoria de visto e imigração para os EUA.</p>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading mono">Endereço</h4>
          <p>Rua Exemplo, 123 — Sala 45<br />São Paulo, SP — Brasil</p>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading mono">Contato</h4>
          <p>
            <a href="mailto:contato@visabyvi.com">contato@visabyvi.com</a><br />
            <a href="tel:+5511999999999">+55 11 99999-9999</a>
          </p>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading mono">Redes sociais</h4>
          <ul className="footer__socials">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p className="footer__legal">
          {/* Texto placeholder — recomendo revisar com um advogado antes de publicar */}
          Este site tem caráter informativo e não constitui aconselhamento jurídico definitivo.
          Ao utilizá-lo, você concorda com nossos{' '}
          <a href="#termos">Termos de Uso</a> e nossa{' '}
          <a href="#privacidade">Política de Privacidade</a>.
        </p>
        <span className="mono footer__copy">© 2026 Visa by Vi — Todos os direitos reservados.</span>
      </div>
    </footer>
  );
};

export default Footer;