import Logo from '../Logo/Logo';
import { useLanguage } from '../../i18n/LanguageContext';

const SOCIALS = [
  { label: 'Instagram', href: 'https://instagram.com/' },
  { label: 'LinkedIn', href: 'https://linkedin.com/' },
  { label: 'WhatsApp', href: 'https://wa.me/' },
];

const content = {
  pt: {
    tagline: 'Assessoria documental para processos não imigratórios nos EUA.',
    address: 'Endereço', addressValue: <>Rua Exemplo, 123 — Sala 45<br />São Paulo, SP — Brasil</>,
    contact: 'Contato', socials: 'Redes sociais',
    legal: 'A VisaByVi não é um escritório de advocacia e não oferece aconselhamento jurídico ou representação legal. Nossos serviços são voltados à preparação documental e ao suporte administrativo. Caso sua situação exija orientação jurídica, recomendamos consultar um advogado de imigração devidamente licenciado.',
    copy: '© 2026 Visa by Vi — Todos os direitos reservados.',
    termsTitle: 'Termos de Uso e Política de Privacidade',
    termsBody: 'A VisaByVi presta serviços de preparação documental e suporte administrativo relacionados a processos não imigratórios nos Estados Unidos. Não é um escritório de advocacia, não presta aconselhamento jurídico e não realiza representação legal perante órgãos governamentais. Os prazos indicados no site são recomendações para organização e não representam prazos de processamento de nenhum órgão. Ao utilizar este site, você concorda com estes termos.',
  },
  en: {
    tagline: 'Documentation support for non-immigrant processes in the US.',
    address: 'Address', addressValue: <>123 Example St — Suite 45<br />São Paulo, SP — Brazil</>,
    contact: 'Contact', socials: 'Social media',
    legal: 'VisaByVi is not a law firm and does not provide legal advice or legal representation. Our services focus on document preparation and administrative support. If your situation requires legal guidance, we recommend consulting a duly licensed immigration attorney.',
    copy: '© 2026 Visa by Vi — All rights reserved.',
    termsTitle: 'Terms of Use and Privacy Policy',
    termsBody: 'VisaByVi provides document preparation and administrative support services related to non-immigrant processes in the United States. It is not a law firm, does not provide legal advice and does not perform legal representation before government agencies. Timelines on this site are recommendations for organizational purposes and do not represent any agency\'s processing time. By using this site, you agree to these terms.',
  },
};

const Footer = () => {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__col">
          <Logo variant="compact" />
          <p className="footer__tagline">{t.tagline}</p>
        </div>
        <div className="footer__col">
          <h4 className="footer__heading mono">{t.address}</h4>
          <p>{t.addressValue}</p>
        </div>
        <div className="footer__col">
          <h4 className="footer__heading mono">{t.contact}</h4>
          <p><a href="mailto:contato@visabyvi.com">contato@visabyvi.com</a><br /><a href="tel:+5511999999999">+55 11 99999-9999</a></p>
        </div>
        <div className="footer__col">
          <h4 className="footer__heading mono">{t.socials}</h4>
          <ul className="footer__socials">
            {SOCIALS.map((s) => <li key={s.label}><a href={s.href} target="_blank" rel="noreferrer">{s.label}</a></li>)}
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p className="footer__legal">{t.legal}</p>
        <span className="mono footer__copy">{t.copy}</span>
      </div>

      <div className="container">
        <details className="footer__terms" id="termos">
          <summary>{t.termsTitle}</summary>
          <p>{t.termsBody}</p>
        </details>
      </div>
    </footer>
  );
};

export default Footer;