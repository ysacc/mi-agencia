import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import { MAIN_SITE } from "../lib/site";
export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="app-wrap site-header-inner">
        <Link href="/" className="app-brand">
          BR
          <span className="brand-divider" />
          Digital System<small>CATÁLOGO DE PLANTILLAS</small>
        </Link>
        <nav aria-label="Principal">
          <Link href="/#catalogo">Plantillas</Link>
          <Button asChild variant="outline">
            <a href={MAIN_SITE}>
              Web principal <ArrowUpRight size={14} />
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
