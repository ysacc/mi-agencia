import React, { useState } from "react";
import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import type { Lang } from "./translations";
import TrustedCompanies from "./components/TrustedCompanies";
import Reviews from "./components/Reviews";
import WhyChooseUs from "./components/WhyChooseUs";
import WhyHireUs from "./components/WhyHireUs";
import FAQ from "./components/FAQ";

const App: React.FC = () => {
  const [lang, setLang] = useState<Lang>("es");

  // Servicios seleccionados (desde Services)
  const [selectedService, setSelectedService] = useState<string | null>(null);

  // NUEVO: Caso seleccionado (desde Portfolio)
  const [selectedCase, setSelectedCase] = useState<string | null>(null);

  return (
    <div>
      <Navbar lang={lang} setLang={setLang} />
      <main>
        <section id="inicio" className="section">
          <div className="container">
            <Hero lang={lang} />
          </div>
        </section>
        <section id="companies" className="section">
          <TrustedCompanies lang={lang} />
        </section>

        <section id="servicios" className="section-alt">
          <div className="container">
            <Services
              lang={lang}
              onSelectService={(title) => {
                setSelectedService(title);
                setSelectedCase(null);
              }}
            />
          </div>
        </section>

        <section id="reviews" className="section">
          <Reviews lang={lang} />
        </section>
        <WhyChooseUs lang={lang} />
        <WhyHireUs lang={lang} />

        <section id="faq" className="section">
          <FAQ />
        </section>
        <section id="contacto" className="section-alt">
          <div className="container">
            <Contact
              lang={lang}
              selectedService={selectedService}
              selectedCase={selectedCase}
              onClearSelectedService={() => setSelectedService(null)}
              onClearSelectedCase={() => setSelectedCase(null)}
            />
          </div>
        </section>
      </main>
      <Footer lang={lang} />
    </div>
  );
};

export default App;
