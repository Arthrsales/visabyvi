import { useState } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';

const content = {
  pt: {
    eyebrow: 'Perguntas frequentes',
    title: 'Tudo o que você precisa saber antes de começar.',
    items: [
      { q: 'A VisaByVi faz vistos?', a: 'Não. Nosso foco é em processos não imigratórios dentro dos Estados Unidos — não emitimos vistos consulares.' },
      { q: 'Quando devo começar meu processo?', a: 'Cerca de 3 meses de antecedência para mudança de status (J-1→B-2 ou F-1) e cerca de 50 dias para extensão de B-2.' },
      { q: 'Como sei quais documentos preciso?', a: 'Você recebe uma lista personalizada de acordo com a sua situação, e a equipe acompanha a organização.' },
      { q: 'Vocês ajudam com RFE?', a: 'Sim, preparamos a resposta a pedidos adicionais de evidência (RFE Response).' },
      { q: 'Vocês fazem mapeamento de escola?', a: 'Sim — considerando localização, programa, valores e objetivos. Pode ser avulso ou incluído em pacotes de estudante.' },
      { q: 'Posso contratar somente uma carta?', a: 'Sim, oferecemos serviços avulsos sem precisar contratar a assessoria completa.' },
      { q: 'A VisaByVi é um escritório de advocacia?', a: 'Não. Não oferecemos aconselhamento jurídico nem representação legal — nosso trabalho é preparação documental.' },
    ],
  },
  en: {
    eyebrow: 'FAQ',
    title: 'Everything you need to know before you start.',
    items: [
      { q: 'Does VisaByVi issue visas?', a: 'No. We focus on non-immigrant processes inside the US — we do not issue consular visas.' },
      { q: 'When should I start my process?', a: 'About 3 months in advance for change of status (J-1→B-2 or F-1) and about 50 days for a B-2 extension.' },
      { q: 'How do I know which documents I need?', a: 'You receive a personalized checklist based on your situation, and our team supports the organization.' },
      { q: 'Do you help with RFEs?', a: 'Yes, we prepare responses to Requests for Evidence.' },
      { q: 'Do you do school mapping?', a: 'Yes — based on location, program, cost and goals. Available on its own or included in student packages.' },
      { q: 'Can I hire just one letter?', a: 'Yes, we offer individual services without needing the full package.' },
      { q: 'Is VisaByVi a law firm?', a: 'No. We do not provide legal advice or representation — our work is document preparation.' },
    ],
  },
};

const FAQ = () => {
  const { lang } = useLanguage();
  const t = content[lang];
  const [open, setOpen] = useState(0);

  return (
    <section className="faq section" id="faq">
      <div className="container faq__row">
        <div className="section__head faq__head">
          <span className="eyebrow">{t.eyebrow}</span>
          <h2>{t.title}</h2>
        </div>
        <div className="faq__list">
          {t.items.map((item, i) => (
            <div className={`faq__item ${open === i ? 'is-open' : ''}`} key={item.q}>
              <button className="faq__question" onClick={() => setOpen(open === i ? -1 : i)}>
                <span className="mono faq__index">{String(i + 1).padStart(2, '0')}</span>
                <span>{item.q}</span>
                <span className="faq__icon">{open === i ? '–' : '+'}</span>
              </button>
              <div className="faq__answer"><p>{item.a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;