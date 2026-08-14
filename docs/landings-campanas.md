# Landings de campaña — BR Digital System

Tres páginas independientes, pensadas para tráfico pagado. No forman parte del
sitio principal: cada una se compila como su propio HTML estático.

| Ruta                  | Campaña             | Público                                   | Acento  |
| --------------------- | ------------------- | ----------------------------------------- | ------- |
| `/web-para-negocios`  | Web para Negocios   | Negocios locales, profesionales, pymes    | Cian    |
| `/tienda-online`      | Tienda Online       | Quien vende por chat, redes o catálogo PDF| Cálido  |
| `/sistemas-a-medida`  | Sistemas a Medida   | Empresas con procesos manuales y Excel    | Azul    |

## Estructura de archivos

```
web-para-negocios/index.html     HTML de entrada (title, description, canonical, Open Graph)
tienda-online/index.html
sistemas-a-medida/index.html

src/campaigns/
  campaignConfig.ts              Identidad de cada campaña: SEO, mensaje de WhatsApp, CTA
  campaigns.css                  Estilos propios de las landings (no tocan el sitio principal)
  entries/                       Punto de montaje de React por landing
  pages/                         Contenido y estructura de cada landing
  components/                    Piezas reutilizables (layout, hero, dolores, beneficios, FAQ, CTA)
  components/visuals/            Maquetas del hero hechas con DOM + CSS
  lib/whatsapp.ts                Construcción del enlace de WhatsApp
  lib/utm.ts                     Captura y persistencia de UTM
  lib/analytics.ts               Envío de eventos a la herramienta que exista
```

## WhatsApp

Número: `+1 914 434 5249` → `https://wa.me/19144345249`.

Todo CTA usa `<a href target="_blank" rel="noopener noreferrer">`: WhatsApp nunca
se abre solo, siempre tras un click del usuario. El mensaje se arma en
`buildWhatsAppUrl()` y se codifica con `encodeURIComponent`:

```
<mensaje de la campaña>

---
Campaña: Tienda Online · Origen: hero · source: facebook · medium: cpc · campaign: … · content: …
```

Los UTM (`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`) se leen de la
URL de entrada, se guardan en `sessionStorage` y se reinyectan tanto en el
mensaje como en los enlaces internos (`withUtm()`).

## Analítica

El proyecto **no tiene** hoy Google Analytics, Meta Pixel ni Vercel Analytics
instalados, así que `lib/analytics.ts` no inyecta ningún script ni inventa IDs:
solo publica los eventos en `window.dataLayer` y los reenvía a `window.gtag`,
`window.fbq` o `window.va` **si existen**. Al pegar GA4/GTM o el Pixel, los
eventos empiezan a llegar sin tocar código.

Eventos emitidos:

| Evento                     | Cuándo                                   |
| -------------------------- | ---------------------------------------- |
| `page_view`                | Carga de la landing                      |
| `whatsapp_click`           | Cualquier CTA que abre WhatsApp          |
| `cta_principal_click`      | CTA del hero                             |
| `cta_final_click`          | CTA de cierre                            |
| `whatsapp_flotante_click`  | Botón flotante                           |

Todos incluyen `campaign`, `campaign_id` y `cta_location`.

## Rutas en producción (Vercel)

Cada landing es una carpeta con su `index.html`, así que se sirve como archivo
estático real. `vercel.json` define un rewrite explícito por ruta y deja el
catch-all hacia `/index.html` para el resto del sitio. Las mismas rutas
funcionan en `npm run dev` y `npm run preview` gracias al plugin
`brds-campaign-routes` de `vite.config.ts`.

## Reglas de contenido

- La marca se escribe **BR Digital System**, sin "s" final.
- No se muestran precios: se usa "cotización personalizada", "cuéntanos qué
  necesitas", "solicita una evaluación", "conversemos sobre tu proyecto".
- No hay testimonios, logos de clientes, estadísticas ni casos de éxito: el
  repositorio no tiene proyectos reales documentados, así que no se incluyó
  sección de portafolio. Cuando existan casos verificables, se agrega.

## Pendiente de marca

`public/images/logoempresa.jpg` es el logo que se usa en el encabezado, el
footer, el favicon y las imágenes Open Graph de las tres landings, y todavía
lleva la "s" final en el texto de la imagen. Al reemplazar ese archivo por la
versión corregida, las tres landings y el sitio principal quedan actualizados
sin tocar código.
