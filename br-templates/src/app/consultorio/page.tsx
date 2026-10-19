import type { Metadata } from "next";
import { consultorio } from "@/templates/consultorio/config";
import { ConsultorioView } from "@/templates/consultorio/view";
export const metadata: Metadata = {
  title: consultorio.name,
  description: consultorio.description,
  alternates: { canonical: "/consultorio/" },
  robots: { index: false, follow: true },
  openGraph: {
    title: consultorio.name,
    description: consultorio.description,
    images: [consultorio.preview],
  },
};
export default function Page() {
  return <ConsultorioView config={consultorio} />;
}
