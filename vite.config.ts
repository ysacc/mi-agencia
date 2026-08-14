import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('.', import.meta.url))

/** Rutas de las landings de campaña (una carpeta con su index.html por cada una). */
const CAMPAIGN_ROUTES = [
  '/web-para-negocios',
  '/tienda-online',
  '/sistemas-a-medida',
]

/**
 * En producción (Vercel) las rutas se resuelven con los rewrites de vercel.json.
 * Este plugin replica ese comportamiento en `vite dev` y `vite preview` para
 * poder validar las tres rutas en local exactamente igual que en producción.
 */
function campaignRoutes(): Plugin {
  const rewrite = (req: { url?: string }) => {
    if (!req.url) return
    const [path, query] = req.url.split('?')
    const clean = path.replace(/\/+$/, '')
    if (CAMPAIGN_ROUTES.includes(clean)) {
      req.url = `${clean}/index.html${query ? `?${query}` : ''}`
    }
  }

  return {
    name: 'brds-campaign-routes',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        rewrite(req)
        next()
      })
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, _res, next) => {
        rewrite(req)
        next()
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), campaignRoutes()],
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
        main: resolve(root, 'index.html'),
        'web-para-negocios': resolve(root, 'web-para-negocios/index.html'),
        'tienda-online': resolve(root, 'tienda-online/index.html'),
        'sistemas-a-medida': resolve(root, 'sistemas-a-medida/index.html'),
      },
    },
  },
})
