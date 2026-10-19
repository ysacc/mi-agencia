import type { Metadata } from "next";
import { restaurante } from "@/templates/restaurante/config";
import { RestauranteView } from "@/templates/restaurante/view";
export const metadata: Metadata = {
  title: restaurante.name,
  description: restaurante.description,
  alternates: { canonical: "/restaurante/" },
  robots: { index: false, follow: true },
  openGraph: {
    title: restaurante.name,
    description: restaurante.description,
    images: [restaurante.preview],
  },
};
export default function Page() {
  return <RestauranteView config={restaurante} />;
}
