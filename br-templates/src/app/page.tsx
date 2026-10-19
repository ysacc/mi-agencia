import {
  ArrowDown,
  ArrowUpRight,
  LayoutTemplate,
  MousePointer2,
  Smartphone,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { Catalog } from "@/components/catalog";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <>
      <a href="#catalogo" className="skip-link">
        Saltar al catálogo
      </a>
      <SiteHeader />
      <main>
        <section className="catalog-hero">
          <div className="app-wrap catalog-hero-grid">
            <div>
              <p className="app-eyebrow">
                <span />
                DISEÑOS QUE SE CONVIERTEN EN POSIBILIDADES
              </p>
              <h1>
                Tu próxima web
                <br />
                empieza <em>aquí.</em>
                <span className="hero-asterisk" aria-hidden="true">
                  ✳
                </span>
              </h1>
              <p className="catalog-hero-text">
                Una colección de diseños para negocios con ganas de crecer.
                Encuentra tu estilo y lo convertimos en la página web de tu
                marca.
              </p>
              <div className="catalog-hero-actions">
                <Button asChild>
                  <a href="#catalogo">
                    Explorar plantillas <ArrowDown size={16} />
                  </a>
                </Button>
                <span>
                  Desarrollo desde <strong>S/ 299</strong>
                </span>
              </div>
              <small>
                Pago único por desarrollo · Dominio y hosting por separado
              </small>
            </div>
            <div
              className="hero-moodboard"
              aria-label="Una muestra de los diseños del catálogo"
            >
              <div className="moodboard-tag">
                <span /> DISEÑADO PARA TU SIGUIENTE PASO
              </div>
              <div className="moodboard-main">
                <div className="tiny-browser">
                  <i />
                  <i />
                  <i />
                </div>
                <img
                  src="/previews/restaurante.webp"
                  alt="Diseño editorial para restaurantes"
                  width={800}
                  height={500}
                />
              </div>
              <div className="moodboard-secondary">
                <img
                  src="/previews/barberia.webp"
                  alt="Diseño oscuro para barberías"
                  width={800}
                  height={500}
                />
              </div>
              <div className="moodboard-chip">
                <MousePointer2 size={18} />
                <span>
                  Tu marca.
                  <br />
                  <strong>Tu propia versión.</strong>
                </span>
              </div>
            </div>
          </div>
          <div className="app-wrap hero-proof">
            <span>
              <LayoutTemplate size={16} />6 diseños con identidad propia
            </span>
            <span>
              <Smartphone size={16} />
              Pensados también para celulares
            </span>
            <span>
              <MousePointer2 size={16} />
              Demos que puedes explorar
            </span>
            <span className="hero-proof-index">COLECCIÓN / 01</span>
          </div>
        </section>
        <Catalog />
        <section className="catalog-final">
          <div className="app-wrap">
            <div>
              <p className="app-eyebrow">DEL DISEÑO A TU NEGOCIO</p>
              <h2>
                ¿Encontraste tu estilo?
                <br />
                Hagámoslo tuyo.
              </h2>
              <p>
                Comparte la plantilla que te gusta y conversemos sobre lo que
                necesitas.
              </p>
            </div>
            <Button
              asChild
              className="bg-amber-300 text-slate-950 hover:bg-amber-200"
            >
              <a href="https://brdigitalsystem.online/#cotizador">
                Conoce tu presupuesto <ArrowUpRight size={18} />
              </a>
            </Button>
          </div>
        </section>
      </main>
      <footer className="catalog-footer app-wrap">
        <div>
          <strong>BR Templates</strong>
          <p>Dise?os para tu pr?ximo paso.</p>
        </div>
        <a href="https://brdigitalsystem.online">Visitar sitio principal ↗</a>
        <span>Diseños de ejemplo · Sin pagos en esta plataforma</span>
      </footer>
    </>
  );
}
