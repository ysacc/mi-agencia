import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { PLANS, CONDITIONS, money } from "./src/data/plans";
import { WEB_FAQ } from "./src/data/webFaq";
import {
  buildOrganization,
  buildGraph,
  buildFaqPage,
  organizationRef,
} from "./src/lib/structuredData";
import { SITE_URL, BRAND } from "./src/lib/site";

const root = fileURLToPath(new URL(".", import.meta.url));

/** Rutas de las landings de campaña (una carpeta con su index.html por cada una). */
const CAMPAIGN_ROUTES = [
  "/web-para-negocios",
  "/tienda-online",
  "/sistemas-a-medida",
];

/**
 * En producción (Vercel) las rutas se resuelven con los rewrites de vercel.json.
 * Este plugin replica ese comportamiento en `vite dev` y `vite preview` para
 * poder validar las tres rutas en local exactamente igual que en producción.
 */
function campaignRoutes(): Plugin {
  const rewrite = (req: { url?: string }) => {
    if (!req.url) return;
    const [path, query] = req.url.split("?");
    const clean = path.replace(/\/+$/, "");
    if (CAMPAIGN_ROUTES.includes(clean)) {
      req.url = `${clean}/index.html${query ? `?${query}` : ""}`;
    }
  };

  return {
    name: "brds-campaign-routes",
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        rewrite(req);
        next();
      });
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, _res, next) => {
        rewrite(req);
        next();
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    campaignRoutes(),
    {
      name: "br-commercial-metadata",
      transformIndexHtml(html) {
        const graph = buildGraph([
          buildOrganization(),
          {
            "@type": "WebSite",
            "@id": `${SITE_URL}/#website`,
            url: `${SITE_URL}/`,
            name: BRAND,
            inLanguage: "es-PE",
            publisher: organizationRef,
          },
          buildFaqPage(WEB_FAQ),
          {
            "@type": "Service",
            name: "Diseño y desarrollo de páginas web para negocios",
            provider: organizationRef,
            url: `${SITE_URL}/`,
            areaServed: { "@type": "Country", name: "Perú" },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Planes de páginas web",
              itemListElement: PLANS.map((plan) => ({
                "@type": "Offer",
                name: `Plan ${plan.name}`,
                price: plan.price,
                priceCurrency: "PEN",
                url: `${SITE_URL}/#planes`,
                description: `${plan.features.join(". ")}. ${CONDITIONS.join(" ")}`,
                itemOffered: {
                  "@type": "Service",
                  name: `Página web — ${plan.name}`,
                },
              })),
            },
          },
        ]);
        return html
          .replaceAll("__STARTING_PRICE__", money(PLANS[0].price))
          .replace(
            "__BR_STRUCTURED_DATA__",
            `<script type="application/ld+json">${JSON.stringify(graph).replace(/</g, "\\u003c")}</script>`,
          );
      },
    },
  ],
  build: {
    rollupOptions: {
      /**
       * Multi-página: el sitio principal se mantiene igual (index.html) y cada
       * landing de campaña se compila como su propio HTML estático.
       *
       * Ventajas para campañas publicitarias:
       * - Los metadatos (title, description, canonical y Open Graph) viajan en
       *   el HTML, así los rastreadores de Meta y de los buscadores los leen sin
       *   ejecutar JavaScript.
       * - Cada landing carga solo su propio bundle, no el del sitio completo.
       * - Las rutas se sirven como archivos estáticos reales.
       */
      input: {
        main: resolve(root, "index.html"),
        "web-para-negocios": resolve(root, "web-para-negocios/index.html"),
        "tienda-online": resolve(root, "tienda-online/index.html"),
        "sistemas-a-medida": resolve(root, "sistemas-a-medida/index.html"),
      },
    },
  },
});
