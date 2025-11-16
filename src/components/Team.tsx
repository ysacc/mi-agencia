import React from 'react';
import { translations, type Lang } from '../translations';

interface TeamProps {
  lang: Lang;
}

const Team: React.FC<TeamProps> = ({ lang }) => {
  const t = translations[lang].team;

  return (
    <>
      <div className="section-heading">
        <h2 className="section-title">{t.title}</h2>
        <p className="section-subtitle">{t.subtitle}</p>
      </div>
      <div className="grid-2">
        {t.members.map(m => (
          <article key={m.name} className="card">
            <h3 className="card-title">{m.name}</h3>
            <p className="card-text" style={{ marginTop: '0.15rem' }}>
              {m.role}
            </p>
            <p className="card-text" style={{ marginTop: '0.6rem' }}>
              {m.description}
            </p>
            <div className="member-tags">
              {m.tags.map(tag => (
                <span key={tag} className="member-tag">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </>
  );
};

export default Team;
