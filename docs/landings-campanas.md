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
  lib/campaignContext.ts         Campaña activa disponible en todo el árbol

src/lib/                         Compartido con el sitio principal
  site.ts                        Marca, dominio, WhatsApp, correo y redes
  whatsapp.ts                    Construcción del enlace de WhatsApp
  utm.ts                         Captura y persistencia de UTM
  analytics.ts                   Envío de eventos a la herramienta que exista
  structuredData.ts              Generación del JSON-LD
```

## WhatsApp

Número: `+51 928 577 224` → `https://wa.me/51928577224`.

Todo CTA usa `<a href target="_blank" rel="noopener noreferrer">`: WhatsApp nunca
se abre solo, siempre tras un click del usuario. El mensaje se arma en
`buildWhatsAppUrl()` y se codifica con `encodeURIComponent`.

El texto lo lee y lo envia el propio cliente, asi que se mantiene natural: la
campana ya se nombra dentro del mensaje, y el servicio y la ubicacion del CTA
viajan en los eventos de analitica, no en el texto. Lo unico que se anade es una
referencia corta del origen, y solo cuando la visita trae UTM:

```
Hola, llegue desde la campana Tienda Online. Quiero informacion para vender mis
productos por internet.

Ref. facebook/cpc/tienda_ago/video1
```

Sin UTM (trafico directo u organico) el mensaje va limpio, sin ninguna linea extra.

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

| Evento                     | Cuándo                                        |
| -------------------------- | --------------------------------------------- |
| `page_view`                | Carga de la página                            |
| `view_service`             | Interés en un servicio concreto               |
| `click_primary_cta`        | CTA principal (hero)                          |
| `click_whatsapp`           | Cualquier CTA que abre WhatsApp               |
| `cta_final_click`          | CTA de cierre                                 |
| `whatsapp_flotante_click`  | Botón flotante                                |
| `click_social`             | Enlace a una red social                       |
| `lead_start`               | Primer campo del formulario                   |
| `submit_form`              | Envío válido del formulario                   |
| `form_error`               | Envío rechazado por validación                |

Todos llevan `page`, `campaign`, `campaign_id`, `service`, `cta_location` y los
UTM disponibles.

## Rutas en producción (Vercel)

Cada landing es una carpeta con su `index.html`, así que se sirve como archivo
estático real. `vercel.json` define un rewrite explícito por ruta. No hay
catch-all: las rutas inexistentes caen en `public/404.html`, que Vercel sirve
con estado 404 real en lugar de devolver la home. Las mismas rutas
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

`public/images/logoempresa.jpg` es el logo original y todavía lleva la "s" final
en el texto de la imagen. De él derivan tres archivos que sí se usan en el sitio:

| Derivado                     | Dónde se usa                                  |
| ---------------------------- | --------------------------------------------- |
| `images/favicon-192.png`     | Favicon, cabecera y pie de las landings, pie de la home |
| `images/favicon-512.png`     | Manifiesto                                    |
| `images/logo-og.jpg`         | Open Graph y Twitter Card de las cuatro páginas |

Al sustituir el original hay que regenerar esos tres derivados; ningún componente
necesita cambios.

---

## Auditoría técnica (14/08/2026)

Cambios aplicados en esa revisión, más allá de las landings:

- **SEO técnico**: `lang="es"`, title/description/canonical/Open Graph en la home,
  `robots.txt`, `sitemap.xml`, `site.webmanifest`, favicon ligero y página 404 real
  (`public/404.html`, servida por Vercel al no existir ya el catch-all).
- **Datos estructurados**: Organization y WebSite en la home, FAQPage en la home y
  en cada landing (generado desde el mismo array que se muestra), y Service +
  BreadcrumbList en las tres landings.
- **Rendimiento**: imágenes convertidas a WebP con respaldo PNG (hero 6,4 MB → 250 KB,
  muestras 1,7 MB → 100 KB), `srcset` de 480/900 px, width/height en todas las
  imágenes, `framer-motion` sustituido por animación CSS (bundle 268 → 156 KB).
- **Accesibilidad**: menú móvil accesible, foco visible global, enlace de salto al
  contenido, labels asociados, errores de formulario anunciados, `role="img"` en la
  calificación de reseñas y respeto de `prefers-reduced-motion` en todo el sitio.
- **Conversión**: enlaces internos de la home a los tres servicios, botón flotante de
  WhatsApp también en la home y footer con redes reales.
- **Analítica**: eventos `page_view`, `view_service`, `click_primary_cta`,
  `click_whatsapp`, `click_social`, `lead_start`, `submit_form` y `form_error`,
  todos con página, campaña, servicio, ubicación del CTA y UTM.
- **Seguridad**: cabeceras en `vercel.json`, honeypot anti-spam y `npm audit` en 0.
