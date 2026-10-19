import type { Metadata } from "next";
import { belleza } from "@/templates/belleza/config";
import { BellezaView } from "@/templates/belleza/view";
export const metadata: Metadata = {
  title: belleza.name,
  description: belleza.description,
  alternates: { canonical: "/belleza/" },
  robots: { index: false, follow: true },
  openGraph: {
    title: belleza.name,
    description: belleza.description,
    images: [belleza.preview],
  },
};
export default function Page() {
  return <BellezaView config={belleza} />;
}
