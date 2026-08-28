import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('pt'); // idioma padrão
  const toggleLanguage = () => setLang((prev) => (prev === 'pt' ? 'en' : 'pt'));

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Use isso em qualquer componente pra pegar { lang, toggleLanguage }
export const useLanguage = () => useContext(LanguageContext);