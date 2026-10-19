import type { Metadata } from "next";
import { CATALOG_SITE } from "@/lib/site";
import "./globals.css";
import "../../public/templates.css";
export const metadata: Metadata = {
  metadataBase: new URL(CATALOG_SITE),
  title: {
    default: "Plantillas web para negocios | BR Digital System",
    template: "%s | BR Digital System",
  },
  description:
    "Explora seis plantillas de páginas web para barberías, restaurantes, consultorios, inmobiliarias, belleza y profesionales. Demos de BR Digital System.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_PE",
    siteName: "BR Digital System",
    title: "Encuentra el diseño de tu próxima web",
    description: "Seis diseños con identidad propia para tu negocio.",
    images: [
      {
        url: "/brand-og.jpg",
        width: 1200,
        height: 630,
        alt: "BR Digital System",
      },
    ],
  },
  robots: { index: true, follow: true },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-PE">
      <body>{children}</body>
    </html>
  );
}
