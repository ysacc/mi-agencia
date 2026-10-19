import type { Metadata } from "next";
import { inmobiliaria } from "@/templates/inmobiliaria/config";
import { InmobiliariaView } from "@/templates/inmobiliaria/view";
export const metadata: Metadata = {
  title: inmobiliaria.name,
  description: inmobiliaria.description,
  alternates: { canonical: "/inmobiliaria/" },
  robots: { index: false, follow: true },
  openGraph: {
    title: inmobiliaria.name,
    description: inmobiliaria.description,
    images: [inmobiliaria.preview],
  },
};
export default function Page() {
  return <InmobiliariaView config={inmobiliaria} />;
}
