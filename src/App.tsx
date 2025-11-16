import React, { useState } from 'react';
import './App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Services from './components/Services';
import Team from './components/Team';
import type { Lang } from './translations';

const App: React.FC = () => {
  const [lang, setLang] = useState<Lang>('es');

  return (
    <div>
      <Navbar lang={lang} setLang={setLang} />
      <main>
        <section id="inicio" className="section">
          <div className="container">
            <Hero lang={lang} />
          </div>
        </section>

        <section id="servicios" className="section-alt">
          <div className="container">
            <Services lang={lang} />
          </div>
        </section>

        <section id="proceso" className="section">
          <div className="container">
            <Process lang={lang} />
          </div>
        </section>

        <section id="equipo" className="section-alt">
          <div className="container">
            <Team lang={lang} />
          </div>
        </section>

        <section id="portafolio" className="section">
          <div className="container">
            <Portfolio lang={lang} />
          </div>
        </section>

        <section id="contacto" className="section-alt">
          <div className="container">
            <Contact lang={lang} />
          </div>
        </section>
      </main>
      <Footer lang={lang} />
    </div>
  );
};

export default App;
