import type { Metadata } from "next";
import { profesionales } from "@/templates/profesionales/config";
import { ProfesionalesView } from "@/templates/profesionales/view";
export const metadata: Metadata = {
  title: profesionales.name,
  description: profesionales.description,
  alternates: { canonical: "/profesionales/" },
  robots: { index: false, follow: true },
  openGraph: {
    title: profesionales.name,
    description: profesionales.description,
    images: [profesionales.preview],
  },
};
export default function Page() {
  return <ProfesionalesView config={profesionales} />;
}
