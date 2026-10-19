# Verificación del catálogo estático

## Alcance final

Se sustituyó el enfoque de plataforma por una colección estática. Se retiraron las rutas de administración, autenticación, demos persistentes y API; también sus servicios, esquemas, scripts de base de datos y dependencias. No se reutiliza ningún dato de los borradores anteriores. La carpeta local ignorada `.data/` se conservó después de que la revisión automática rechazara su eliminación por posible contenido persistente; no se importa ni se exporta.

La aplicación del sitio comercial continúa separada. En la raíz solo se mantiene la exclusión de `br-templates/**` de su lint para que las dos aplicaciones ejecuten sus propias configuraciones.

## Resultado de los controles

- Lint: correcto, con reglas de TypeScript, React Hooks y accesibilidad.
- Typecheck: correcto.
- Build: exportación estática correcta. El catálogo y las seis rutas figuran como `○` (prerenderizadas). No hay rutas de servidor ni funciones.
- Pruebas: **14 aprobadas**. Incluyen filtros, búsqueda sin acentos, estados vacíos, enlaces internos, número comercial, atribución, estructura de cada demo, fotografías locales, miniaturas, archivos exportados y ausencia de módulos administrativos.
- Formularios: validación visual y aviso local comprobados con jsdom; cero peticiones de envío y cero uso de localStorage/sessionStorage. No se enviaron mensajes de WhatsApp.
- Accesibilidad: axe-core sin infracciones detectadas de estructura y controles en los siete HTML. No se midieron contraste, geometría ni navegación con lector de pantalla.
- HTTP sobre archivos estáticos: **200** en las siete rutas, robots, sitemap, una miniatura y una fotografía de referencia.
- Fotografías: 14 archivos de origen, 28 WebP en resoluciones de 640/1280 píxeles; aproximadamente 2.26 MB en total para toda la colección. Carga responsive y diferida salvo imagen principal.
- Dependencias: las alertas de las herramientas de lint iniciales se eliminaron al sustituir esa configuración por herramientas estándar; npm reportó **cero vulnerabilidades** al instalar la configuración final.

## Responsive: comprobado y pendiente

Implementado mobile-first con catálogo en una columna en móvil, dos en tablet y tres en escritorio; secciones apiladas, fotografías con recorte y dimensiones, navegación que se adapta en varias líneas y formularios a una columna. La barra comercial permanece en el flujo normal y no obstruye la navegación. Los campos móviles utilizan 16 px y hay estilos de foco y reducción de movimiento.

Se verificaron las reglas responsive y la existencia de destinos e imágenes automáticamente. Las miniaturas de la colección se generaron y revisaron como imágenes. **No son capturas reales del renderizado del navegador.**

CUA no ofreció ningún navegador en esta sesión. Queda pendiente verificar visualmente en un navegador real 320 px, 390 px, 768 px y escritorio, además de zoom al 200 %, contraste, tamaños táctiles y Core Web Vitals. Las pruebas DOM no miden layout, solapamientos o desplazamiento horizontal; no se afirma que esos aspectos se hayan comprobado en un dispositivo real.

No se desplegó el catálogo ni se modificó ningún registro DNS.
