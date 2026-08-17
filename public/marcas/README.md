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
- El logo en **una sola tinta** (blanco o negro): el CSS lo pinta en blanco, que
  es el tratamiento normal de un muro de marcas sobre fondo oscuro y evita que
  ocho paletas distintas compitan entre sí. Si el archivo trae color, se verá en
  blanco igualmente.
- Sin recuadros ni márgenes grandes alrededor del logo: la tarjeta ya aporta su
  propio espacio.

## Antes de publicarlos

Usar los archivos oficiales del manual de marca de cada empresa y contar con su
autorización para mostrarlos. Si alguna no autoriza el uso de su logo, basta con
borrar el archivo: la tarjeta vuelve a mostrar el nombre en texto.

Para añadir o quitar empresas de la lista, editar `COMPANIES` en
`src/components/TrustedCompanies.tsx`.
