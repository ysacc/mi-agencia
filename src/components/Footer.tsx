import React from 'react';
import { translations, type Lang } from '../translations';

interface FooterProps {
  lang: Lang;
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  const year = new Date().getFullYear();
  const t = translations[lang].footer;

  return (
    <footer className="site-footer">
      <div className="container">
        © {year} Agencia Roncal. {t.text}
      </div>
    </footer>
  );
};

export default Footer;
