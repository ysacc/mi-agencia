# Auditoría y rediseño comercial — 19 de octubre de 2026

## Estado previo a los cambios

- React 19.2, TypeScript 5.9, Vite 7, CSS propio, AOS y Swiper instalados. Entradas multipágina en `vite.config.ts`, sin router adicional. Scripts iniciales: dev, lint, build y preview; no había script de pruebas ni typecheck independiente.
- Home: Navbar, Hero, TrustedCompanies, Services, ServiceLinks, WhyChooseUs, WhyHireUs, FAQ, Contact, Footer y WhatsAppFab; contenido bilingüe en translations.ts. Estilos generales en App.css y estilos de campañas separados.
- Campañas independientes: `/web-para-negocios`, `/tienda-online`, `/sistemas-a-medida`; Vercel resolvía cada HTML mediante rewrites, replicados en dev/preview por un plugin de Vite.
- WhatsApp existente: **+51 928 577 224**, definido en `src/lib/site.ts` y utilizado por `src/lib/whatsapp.ts`. Correo: brdigitalsystem.contact@gmail.com. Marca, logo/OG, favicons y redes existentes reutilizables.
- SEO existente: canonical, Open Graph, Twitter, Organization/WebSite, FAQPage, sitemap, robots, manifest y 404. El contenido anunciaba también tiendas y sistemas; robots bloqueaba assets necesarios para renderizar.
- Analítica: capa de eventos en analytics.ts para herramientas presentes en runtime. No se encontraron IDs ni scripts de GA/GTM/Pixel/Vercel Analytics, ni mecanismo de consentimiento instalado. UTM almacenados en sessionStorage y añadidos al mensaje de WhatsApp. Se conservan estas utilidades sin inventar IDs.
- El formulario Contact guardaba el payload personal en `localStorage` (`brds_last_lead`). Fue retirado del recorrido activo, junto con su modal y campos innecesarios. El rediseño no accede ni escribe esa clave. No se borran datos históricos del navegador automáticamente.
- Logos de terceros presentes en `public/marcas/`; su README condiciona su uso a autorización. No se encontró evidencia suficiente para publicar clientes, testimonios o métricas. No se usan esas afirmaciones.
- No había enlaces a demos o sitios de clientes verificados: los ejemplos de campañas eran descripciones, no proyectos navegables. Se crean demos locales explícitamente ficticias.
- La consulta de https://brdigitalsystem.online/ con la herramienta web no pudo acceder al sitio. La auditoría se basa en el repositorio local; no se afirma equivalencia exacta con producción.
- Estado Git inicial: `.claude/` sin seguimiento. No se modifica. No se encontraron AGENTS.md aplicables.

## Implementación

Home exclusivamente de páginas web: hero, planes, demos, beneficios, proceso, cotizador, FAQ y contacto, en ese orden. Menú Inicio/Planes/Ejemplos/Contacto; CTA móvil fijo con espacio reservado al final del documento y safe-area. Se reutilizan la identidad y activos de marca existentes, el contacto real y las integraciones válidas. Tipografía de sistema, sin fuentes o imágenes remotas; vistas ilustrativas hechas con CSS. No se importan AOS ni Swiper en el bundle nuevo.

### Planes y límite de extras

`src/data/plans.ts` reúne Esencial S/ 299 (1 página, hasta 3 secciones), Negocio S/ 499 (1 página, hasta 5 secciones) y Profesional S/ 799 (hasta 4 páginas y 7 secciones totales), con todas sus prestaciones y revisiones. Los tres importes se usan desde la configuración; metadata y ofertas estructuradas se generan durante build desde la misma fuente.

Los planes ya incluyen hasta su máximo de secciones. Como no existe un máximo comercial aprobado para ampliaciones, **ningún extra se acepta automáticamente**. El cotizador calcula `precio base + cantidad × S/ 80`, compara las secciones solicitadas con las del plan y marca todo excedente como sujeto a validación. Esa advertencia aparece tanto junto al campo como en el resumen enviado a WhatsApp. No aumenta el número de páginas. Rechaza negativos, fracciones, vacíos y cantidades numéricamente inseguras. El total solo estima desarrollo; no incluye dominio, hosting o mantenimiento.

Se conservan las URLs históricas y la configuración de despliegue. Sus HTML ahora importan la nueva app, presentan canonical `/` y ya no venden servicios antiguos. Se actualizan sitemap, robots, manifest y enlaces de 404. Los componentes de campañas anteriores quedan archivados, sin entrada en el build activo; `docs/landings-campanas.md` describe el enfoque histórico.

### Archivos modificados y añadidos

| Grupo | Archivos | Propósito |
| --- | --- | --- |
| Home | `src/App.tsx`, `src/App.css`, `src/main.tsx` | Nuevo recorrido, diseño y entrada sin librerías de animación |
| Componentes nuevos | `src/components/WebUi.tsx`, `src/components/WebQuote.tsx` | Navegación accesible, CTA, vistas ilustrativas y cotizador |
| Datos nuevos | `src/data/plans.ts`, `src/data/webFaq.ts` | Oferta tipada, condiciones, cálculo y FAQ |
| Demos nuevas | `public/demos/studio.html`, `food.html`, `consulting.html`, `demo.css` | Tres ejemplos navegables, sin atribuciones de clientes |
| SEO y rutas | `index.html`, `web-para-negocios/index.html`, `tienda-online/index.html`, `sistemas-a-medida/index.html`, `vite.config.ts`, `public/sitemap.xml`, `public/robots.txt`, `public/site.webmanifest`, `public/404.html` | Oferta coherente, metadata, datos estructurados y compatibilidad de URLs |
| Calidad | `tests/commercial.test.mjs`, `tests/interaction.test.mjs`, `tests/prepare.mjs`, `package.json`, `package-lock.json`, `.gitignore` | Pruebas, herramientas de desarrollo, formato y exclusión de archivos locales |
| Documentación | `README.md`, `docs/rediseno-comercial.md` | Auditoría, límites y publicación manual |

## Validación

- `npm run lint`: correcto.
- `npm run typecheck`: correcto.
- `npm run build`: correcto; compila los cuatro HTML. Aproximadamente **68.2 KB JS gzip y 5.3 KB CSS gzip** para la home. No constituyen mediciones de Core Web Vitals.
- `npm test`: **16 pruebas**, incluyendo cálculos de todos los planes, datos inválidos, límites, mensaje con caracteres especiales, DOM interactivo, selección de plan, foco, menú/Escape, destinos internos, WhatsApp, ausencia de persistencia personal y datos personales en analítica, metadata, JSON-LD y demos.
- axe-core sobre jsdom: sin infracciones detectadas de estructura/controles. Contraste y geometría no se evaluaron; no equivale a certificación WCAG AA.
- Preview HTTP: **200** en `/`, las tres URLs históricas, las tres demos, su CSS, robots y sitemap.
- Se corrigieron caracteres dañados en un CTA y una región accesible faltante detectados en las pruebas.
- npm audit detectó 13 alertas al instalar el lockfile original (12 altas, 1 moderada). Se aplicó `npm audit fix` sin `--force`, manteniendo rangos compatibles; resultado: **0 vulnerabilidades**. No se cambiaron versiones mayores del stack.
- No hay navegador disponible a través de CUA en esta sesión. No se comprobaron visualmente móvil/escritorio, zoom real, lector de pantalla, contraste, oclusión del CTA, Lighthouse ni Core Web Vitals de campo. El envío de WhatsApp se simula en jsdom y se comprueban sus enlaces y mensaje; no se envía ninguna consulta real.
- No se publicaron cambios ni se alteraron recursos remotos.

## Datos comerciales pendientes

1. Validar cuántas secciones extra se aceptan por plan y si requieren migrar de plan. El estado actual siempre exige validación de excedentes.
2. Aportar URLs verificadas de trabajos reales y autorización para mostrarlos si se desean casos de clientes. Las demos actuales pueden explorarse, pero no representan trabajos entregados.
3. Confirmar costes de dominio, hosting, mantenimiento, forma de pago y condiciones tributarias antes de publicarlas. No se inventaron valores ni tratamiento fiscal.
4. Confirmar plazos para cada proyecto después de revisar alcance y materiales. No se promete entrega en un número fijo de días.
5. Si se incorpora un proveedor de analítica real, definir su medición y consentimiento cuando corresponda. No hay IDs pendientes necesarios para ejecutar esta versión.
6. El número y las redes se conservaron tal como figuran en el repositorio; comprobar su vigencia operativa antes de publicar.

La previsualización, las comprobaciones y el procedimiento de publicación manual están en el README. Revisar en navegador real antes de promover a producción.
