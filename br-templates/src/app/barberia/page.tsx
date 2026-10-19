import type { Metadata } from "next";
import { barberia } from "@/templates/barberia/config";
import { BarberiaView } from "@/templates/barberia/view";
export const metadata: Metadata = {
  title: barberia.name,
  description: barberia.description,
  alternates: { canonical: "/barberia/" },
  robots: { index: false, follow: true },
  openGraph: {
    title: barberia.name,
    description: barberia.description,
    images: [barberia.preview],
  },
};
export default function Page() {
  return <BarberiaView config={barberia} />;
}
