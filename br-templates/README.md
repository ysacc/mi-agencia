# BR Digital System — Catálogo de plantillas

Catálogo estático con seis diseños independientes, preparado para `https://demo.brdigitalsystem.online`.

**Sin base de datos, backend, API, autenticación, administración, CMS, editor, suscripciones ni almacenamiento de formularios.** No se ha publicado ni cambiado el DNS. El sitio comercial de la raíz del workspace conserva su propia aplicación y despliegue.

## Instalación y vista previa

Requiere Node.js 22.22 o compatible y npm. Desde esta carpeta:

```sh
npm ci
npm run dev
```

Desarrollo: http://localhost:3001.

Para comprobar los archivos estáticos que se publicarán:

```sh
npm run lint
npm run typecheck
npm run build
npm test
npm run preview
```

La preview local sirve **únicamente `out/`** en http://127.0.0.1:4174. Su pequeño servidor de archivos es una herramienta local, no un backend de la aplicación ni un requisito de producción. Las pruebas que inspeccionan los HTML requieren ejecutar el build primero.

## Las siete páginas

| Ruta | Plantilla | Composición |
| --- | --- | --- |
| `/` | Catálogo | Galería, búsqueda y filtros por sector |
| `/barberia/` | Barbería Premium | Negro y dorado, portada asimétrica, carta lineal, galería y horarios |
| `/restaurante/` | Restaurante | Masthead editorial, fotografía gastronómica, especialidades y carta |
| `/consultorio/` | Consultorio | Navegación lateral, especialidades, perfiles de ejemplo y citas |
| `/inmobiliaria/` | Inmobiliaria | Portada panorámica, propiedades ficticias y consulta visual |
| `/belleza/` | Belleza y estética | Composición suave, fotografía curva, tratamientos y galería |
| `/profesionales/` | Servicios profesionales | Módulos geométricos, ventajas, proceso y formulario visual |

Todos los HTML se generan en build mediante `output: 'export'`. No se ejecuta Next.js en el hosting final. Se utiliza `trailingSlash: true` para servir cada página como carpeta con `index.html`.

## Personalización por archivos

Cada diseño tiene un `config.ts` y un `view.tsx`:

```text
src/templates/
  barberia/config.ts
  restaurante/config.ts
  consultorio/config.ts
  inmobiliaria/config.ts
  belleza/config.ts
  profesionales/config.ts
  types.ts
  registry.ts
  shared.tsx
```

1. Abre el `config.ts` correspondiente.
2. Cambia `business.name`, `business.slogan`, `hero`, `about`, servicios, precios, galería y contacto. Las propiedades o perfiles de equipo también se configuran allí.
3. Cambia los colores hexadecimales en `theme`. Tipografías predefinidas: `system`, `editorial` y `geometric`; no descargan fuentes externas.
4. `business.whatsapp` utiliza por defecto el número comercial existente **51928577224**. Los mensajes explican que son consultas de demostración a BR Digital System, no reservas reales. La barra comercial usa siempre `src/lib/site.ts`.
5. Las redes están vacías para no inventar perfiles de negocios ficticios. Puedes completar URLs HTTPS en `business.instagram` y `business.facebook`; los enlaces aparecen automáticamente. `business.logo` es opcional y puede apuntar a un archivo local.
6. Para cambiar fotografías, agrega dos WebP locales en `public/photos/`, por ejemplo `mi-foto-640.webp` y `mi-foto-1280.webp`. Usa `photo('mi-foto', 'Descripción accesible')`. El componente genera `srcset`, tamaños y lazy loading. Para el hero carga prioritaria.
7. Si cambias el nombre o la portada, ejecuta `npm run previews` para regenerar las miniaturas del catálogo y el mosaico en `docs/`.
8. Ejecuta las comprobaciones y vuelve a generar `out/`.

Las interfaces TypeScript (`satisfies TemplateConfig`) verifican cada configuración. No necesitas modificar JSX para los cambios habituales. El archivo `view.tsx` solo define la composición visual de cada sector; `public/templates.css` contiene los estilos de las seis demos y `src/app/globals.css` los del catálogo.

Los textos de advertencia de demostración permanecen en los componentes compartidos para que la presentación no confunda los negocios ficticios con servicios reales. No hay testimonios ni métricas inventadas. Si conviertes un diseño en una web real, revisa expresamente todo el contenido, los derechos de las imágenes, los enlaces y las condiciones comerciales.

## Formularios visuales y WhatsApp

Inmobiliaria y profesionales tienen formularios etiquetados como demostración. Validan los campos en el navegador y muestran un aviso local. No hacen peticiones, no guardan información y no procesan pagos. El botón tiene `type="button"` y se previene el submit nativo. No introduzcas datos personales reales.

La barra de cada demo muestra: «Estás viendo una plantilla de BR Digital System», con enlaces al catálogo y a WhatsApp. No es fija: no tapa el menú ni el contenido móvil. Cada consulta incluye el identificador de la plantilla.

## Imágenes de vista previa

- Miniaturas WebP: `public/previews/`.
- Mosaico de la colección: [docs/vista-previa-coleccion.webp](docs/vista-previa-coleccion.webp).
- Son representaciones ilustrativas generadas desde las configuraciones y fotos locales, no capturas de un navegador.
- Fotografías optimizadas, dos resoluciones por archivo, almacenadas en `public/photos/`. El catálogo y las demos no solicitan imágenes de servicios externos durante la navegación.
- Créditos y fuentes: `public/photos/sources.json`; licencia de las fotografías: [Unsplash License](https://unsplash.com/license).
- `scripts/download-photos.mjs` permite regenerar los assets de origen de forma opcional. **No se ejecuta durante el build ni se necesita red para compilar las imágenes ya incluidas.**

## Publicar en el subdominio

No se asume un proveedor de hosting. La existencia de configuración Vercel en el proyecto comercial y DNS de Vercel no basta para confirmar su hosting efectivo. El catálogo se puede servir desde cualquier hosting estático.

1. Ejecuta las comprobaciones y `npm run build`.
2. Crea un sitio separado en tu hosting, con raíz de proyecto `br-templates` si usas este repositorio completo. Comando de build: `npm run build`. Directorio publicable: **`out`**. No configurar funciones ni un comando de servidor.
3. Publica primero en una URL de preview del proveedor y comprueba las siete rutas, imágenes, navegación y formularios.
4. Cuando se autorice publicar, asigna **solo** `demo.brdigitalsystem.online` al nuevo sitio. Usa el destino DNS que entregue ese hosting: normalmente un CNAME de `demo` al nombre indicado por el proveedor. Si este exige otro tipo de registro, sigue su valor exacto.
5. No modificar registros de `@`, `www`, correo ni el destino del dominio principal. Si ya existe un registro para `demo`, revisarlo antes de sustituirlo.
6. Habilita HTTPS y verifica la carga directa de `/barberia/`, `/restaurante/`, `/consultorio/`, `/inmobiliaria/`, `/belleza/` y `/profesionales/`. El servidor debe resolver directorios mediante `index.html`; no requiere un fallback SPA a la home.
7. Las rutas deben colgar de la raíz del subdominio. Si usas otra URL definitiva, actualiza `CATALOG_SITE` en `src/lib/site.ts` y recompila para corregir canonical, Open Graph y sitemap.

No hay variables de entorno ni servicios externos obligatorios. No publicar el código fuente, `.next/`, `node_modules/` ni `.data/`: únicamente el contenido de `out/`. Se conserva una carpeta `.data` ignorada del trabajo anterior; el catálogo no la lee y el build no la incluye.

## Validación

Consulta [docs/verificacion.md](docs/verificacion.md) para el resultado de las pruebas y el alcance de la revisión responsive. Antes de publicar, comprueba en navegador real escritorio, 320/390 px, tablet, zoom y teclado.
