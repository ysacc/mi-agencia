import Link from "next/link";
export default function NotFound() {
  return (
    <main className="system-state">
      <p className="app-eyebrow">404 / BR DIGITAL SYSTEM</p>
      <h1>No encontramos esa plantilla.</h1>
      <p>Explora el catálogo y encuentra el diseño para tu próxima web.</p>
      <Link href="/">Volver a las plantillas →</Link>
    </main>
  );
}
