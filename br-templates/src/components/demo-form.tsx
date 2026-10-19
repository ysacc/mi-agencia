"use client";
import { useRef, useState } from "react";
export function DemoForm({ kind }: { kind: "property" | "professional" }) {
  const form = useRef<HTMLFormElement>(null),
    [tested, setTested] = useState(false),
    prefix = kind === "property" ? "propiedad" : "consulta";
  return (
    <form
      ref={form}
      className="demo-form"
      onSubmit={(e) => e.preventDefault()}
      autoComplete="off"
    >
      <span className="tpl-kicker">FORMULARIO DE DEMOSTRACIÓN</span>
      <h3>
        {kind === "property"
          ? "Imagina tu próxima visita."
          : "Una conversación empieza con una idea."}
      </h3>
      <p>
        Solo es una muestra visual. No introduzcas datos personales reales. No
        se envía ni guarda información.
      </p>
      <div className="demo-form-grid">
        <label htmlFor={`${prefix}-name`}>
          Nombre de ejemplo
          <input
            id={`${prefix}-name`}
            placeholder="Nombre de muestra"
            maxLength={80}
            required
          />
        </label>
        <label htmlFor={`${prefix}-email`}>
          Correo de ejemplo
          <input
            id={`${prefix}-email`}
            type="email"
            placeholder="ejemplo@example.com"
            maxLength={120}
            required
          />
        </label>
      </div>
      <label htmlFor={`${prefix}-message`}>
        {kind === "property"
          ? "¿Qué espacio te interesa?"
          : "Cuéntanos tu idea de ejemplo"}
        <textarea
          id={`${prefix}-message`}
          rows={3}
          placeholder="Escribe un mensaje de muestra…"
          maxLength={600}
          required
        />
      </label>
      <button
        type="button"
        className="tpl-button"
        onClick={() => {
          if (form.current?.reportValidity()) setTested(true);
        }}
      >
        Probar formulario (demo) <span aria-hidden="true">↗</span>
      </button>
      {tested && (
        <p className="form-demo-status" role="status">
          Vista de ejemplo completada. No se envió ni guardó información. Para
          solicitar esta web, usa la barra de BR Digital System.
        </p>
      )}
    </form>
  );
}
