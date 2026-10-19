# BR Digital System

Web comercial de páginas web para emprendedores y pequeñas empresas de Perú. React 19, TypeScript y Vite; configuración de Vercel conservada. No se ha desplegado el rediseño.

## Desarrollo y comprobación

Requiere Node.js 22.22 o compatible y npm.

```sh
npm ci
npm run dev
```

Vite muestra la URL de desarrollo. Para comprobar el resultado que se publicará:

```sh
npm run lint
npm run typecheck
npm run build
npm test
npm run preview
```

Las pruebas de artefactos requieren ejecutar primero el build. Preview sirve normalmente en http://localhost:4173. `npm run format` da formato a los archivos del rediseño. Las pruebas de interacción usan jsdom y axe-core, sin navegador ni envío real de mensajes.

## Dónde cambiar el contenido

- `src/data/plans.ts`: fuente única tipada de planes, importes, extras, condiciones, cálculos y resumen comercial. También alimenta los metadatos y las ofertas JSON-LD.
- `src/data/webFaq.ts`: preguntas y respuestas visibles y estructuradas.
- `src/lib/site.ts`: identidad, WhatsApp, correo y redes existentes.
- `src/App.tsx`: home comercial; `src/components/WebUi.tsx`: navegación, CTA y vistas ilustrativas; `src/components/WebQuote.tsx`: cotizador.
- `src/App.css`: estilos responsive, foco y reducción de movimiento.
- `public/demos/`: tres demostraciones navegables, marcadas como ficticias y excluidas de indexación.
- `vite.config.ts`: compilación multipágina y generación de metadata desde los planes. Los tokens `__STARTING_PRICE__` y `__BR_STRUCTURED_DATA__` se resuelven en desarrollo y build; no editar directamente `dist/`.

## Rutas e integraciones

`/`, `/web-para-negocios`, `/tienda-online` y `/sistemas-a-medida` siguen resolviendo. Todas presentan la nueva oferta y tienen canonical hacia `/`; las URLs históricas se excluyen del sitemap. Se preservan los rewrites y encabezados de Vercel. El código anterior de campañas y componentes queda archivado en el repositorio y no se importa en los HTML activos.

Se mantienen el teléfono comercial, correo, redes, utilidades de WhatsApp, eventos y UTM. No se añade ningún proveedor de analítica ni ID de medición. El cotizador conserva los datos del negocio únicamente en memoria; abre un mensaje preparado en WhatsApp y el visitante decide enviarlo. Solo los UTM existentes pueden persistir en sessionStorage. No hay pagos, backend de leads ni almacenamiento de información personal.

## Publicación manual

1. Revisar [la auditoría y los pendientes](docs/rediseno-comercial.md), especialmente extras y demostraciones.
2. Ejecutar los comandos de comprobación anteriores.
3. Abrir la preview en un celular y escritorio; revisar menú, zoom, teclado, contraste, posición del CTA y WhatsApp. Falta esa revisión visual en navegador real.
4. En el proyecto existente de Vercel, conservar Vite, `npm run build` y salida `dist`, usando Node 22. Crear primero una preview según el flujo del equipo, revisar las cuatro rutas y las demos, y publicar a producción manualmente cuando se apruebe. Evitar subir los tokens HTML como un sitio sin compilar.
5. Para otro hosting estático, publicar el contenido de `dist/` y reproducir los rewrites existentes si se necesitan las rutas sin `index.html`. No subir `node_modules`, `.npm-cache` ni `.test-dist`.

No se ejecutaron deploy, push ni cambios en la configuración remota.
