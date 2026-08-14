import React from "react";

interface JsonLdProps {
  /** Objeto ya construido con los datos estructurados. */
  data: Record<string, unknown>;
}

/**
 * Inserta datos estructurados JSON-LD.
 *
 * Nota de seguridad: `dangerouslySetInnerHTML` es la forma estándar de emitir
 * JSON-LD en React y aquí es seguro porque el contenido lo genera
 * `JSON.stringify` sobre datos propios del sitio (nunca entrada del usuario).
 * Se escapa `<` para evitar que un valor pudiera cerrar la etiqueta script.
 */
const JsonLd: React.FC<JsonLdProps> = ({ data }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(data).replace(/</g, "\\u003c"),
    }}
  />
);

export default JsonLd;
