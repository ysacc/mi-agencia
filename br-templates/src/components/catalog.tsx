"use client";
import { useState } from "react";
import Link from "next/link";
import { Search, ArrowUpRight, X } from "lucide-react";
import { CATEGORIES, filterTemplates } from "../templates/registry";
import { requestWebsite } from "../lib/site";
import { Button } from "./ui/button";
export function Catalog() {
  const [search, setSearch] = useState(""),
    [category, setCategory] = useState("Todas");
  const results = filterTemplates(search, category);
  return (
    <section className="catalog-section app-wrap" id="catalogo">
      <div className="catalog-heading">
        <div>
          <p className="app-eyebrow">ELIGE TU PUNTO DE PARTIDA</p>
          <h2>Hechas para tu tipo de negocio.</h2>
        </div>
        <p>
          Explora el diseño. Imagina tu marca.
          <br />
          Nosotros hacemos el resto.
        </p>
      </div>
      <div className="catalog-tools">
        <label className="search-field">
          <Search size={18} aria-hidden="true" />
          <span className="sr-only">Buscar plantillas</span>
          <input
            type="search"
            placeholder="Busca por nombre o sector…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <button aria-label="Limpiar búsqueda" onClick={() => setSearch("")}>
              <X size={16} />
            </button>
          )}
        </label>
        <span className="catalog-collection-label">
          SEIS SECTORES. SEIS IDENTIDADES.
        </span>
      </div>
      <div
        className="category-list"
        role="group"
        aria-label="Filtrar por sector"
      >
        {["Todas", ...CATEGORIES].map((c) => (
          <button
            key={c}
            aria-pressed={category === c}
            className={category === c ? "active" : ""}
            onClick={() => setCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>
      <p className="results-count" aria-live="polite">
        {results.length}{" "}
        {results.length === 1
          ? "plantilla disponible"
          : "plantillas disponibles"}
      </p>
      <div className="template-grid">
        {results.map((t, i) => (
          <article className={`template-card card-${t.id}`} key={t.id}>
            <Link
              href={`/${t.id}/`}
              className="thumbnail"
              aria-label={`Ver demo de ${t.name}`}
            >
              <div className="thumbnail-browser">
                <span />
                <span />
                <span />
                <small>BR DIGITAL SYSTEM / {t.category.toUpperCase()}</small>
              </div>
              <img
                src={t.preview}
                width={800}
                height={500}
                alt={`Vista previa del diseño ${t.name}`}
                loading={i > 2 ? "lazy" : "eager"}
              />
              <span className="thumbnail-hover">
                Explorar diseño <ArrowUpRight size={18} />
              </span>
            </Link>
            <div className="template-card-body">
              <div className="template-card-meta">
                <span>{t.category}</span>
                <small>DISEÑO RESPONSIVE</small>
              </div>
              <h3>{t.name}</h3>
              <p>{t.description}</p>
              <div className="template-actions">
                <Button asChild variant="outline">
                  <Link href={`/${t.id}/`}>
                    Ver demo <ArrowUpRight size={15} />
                  </Link>
                </Button>
                <a className="request-link" href={requestWebsite(t.id)}>
                  Solicitar esta web <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
      {results.length === 0 && (
        <div className="empty-state">
          <Search size={32} />
          <h3>No encontramos esa combinación.</h3>
          <p>Prueba con otro sector o limpia los filtros.</p>
          <Button
            variant="outline"
            onClick={() => {
              setSearch("");
              setCategory("Todas");
            }}
          >
            Ver todas las plantillas
          </Button>
        </div>
      )}
      <div className="catalog-disclaimer">
        <strong>Una base de diseño, adaptada a tu negocio.</strong>
        <p>
          Las plantillas usan negocios ficticios, fotografías de referencia y
          contenido de ejemplo. No se realizan reservas, pedidos, citas ni
          pagos. La implementación se cotiza según el alcance y el plan del
          sitio comercial. Dominio, hosting y mantenimiento por separado.
        </p>
      </div>
    </section>
  );
}
