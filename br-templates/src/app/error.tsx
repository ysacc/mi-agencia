"use client";
import Link from "next/link";
export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main className="system-state">
      <h1>No pudimos mostrar esta página.</h1>
      <p>Vuelve a intentarlo o explora el catálogo.</p>
      <button onClick={reset}>Volver a intentar</button>
      <Link href="/">Volver a las plantillas</Link>
    </main>
  );
}
