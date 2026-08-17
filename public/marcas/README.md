# Logos de marcas

Aquí van los logotipos que se muestran en la sección "Marcas con las que hemos
trabajado" de la portada.

## Nombres de archivo

El componente busca cada logo por el nombre exacto que aparece abajo. Mientras
un archivo no exista, esa tarjeta muestra el nombre de la empresa como texto,
así que se pueden ir agregando de uno en uno sin romper nada.

| Empresa                | Archivo                          |
| ---------------------- | -------------------------------- |
| BBVA                   | `bbva.png`                       |
| Supermercados Peruanos | `supermercados-peruanos.png`     |
| Aceros Arequipa        | `aceros-arequipa.png`            |
| UTP                    | `utp.png`                        |
| Principal Chile        | `principal.png`                  |
| Sanna                  | `sanna.png`                      |
| Clínica Ricardo Palma  | `clinica-ricardo-palma.png`      |
| Interbank              | `interbank.png`                  |

## Formato

- **PNG con fondo transparente**, unos 400 px de ancho.
- **En sus colores originales.** Se muestran sobre una tarjeta clara, así que no
  hace falta adaptarlos: pintarlos a una sola tinta arruina los logos que tienen
  recortes en blanco (Interbank perdería el rombo interior) o más de un color
  (Clínica Ricardo Palma perdería el detalle de la hoja), y además suele ir
  contra el manual de marca.
- Sin recuadros ni márgenes grandes alrededor del logo: la tarjeta ya aporta su
  propio espacio.
- Alto útil: el logo se escala para no pasar de 56 px de alto en escritorio y
  46 px en móvil, manteniendo su proporción.

## Antes de publicarlos

Usar los archivos oficiales del manual de marca de cada empresa y contar con su
autorización para mostrarlos. Si alguna no autoriza el uso de su logo, basta con
borrar el archivo: la tarjeta vuelve a mostrar el nombre en texto.

Para añadir o quitar empresas de la lista, editar `COMPANIES` en
`src/components/TrustedCompanies.tsx`.
