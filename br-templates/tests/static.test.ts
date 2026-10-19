import assert from "node:assert/strict";
import { test } from "node:test";
import { readFile, access, readdir } from "node:fs/promises";
import { renderToStaticMarkup } from "react-dom/server";
import { createElement } from "react";
import sharp from "sharp";
import { TEMPLATES, filterTemplates } from "../src/templates/registry";
import { demoContactUrl } from "../src/templates/types";
import { requestWebsite, WHATSAPP_NUMBER } from "../src/lib/site";
import { BarberiaView } from "../src/templates/barberia/view";
import { RestauranteView } from "../src/templates/restaurante/view";
import { ConsultorioView } from "../src/templates/consultorio/view";
import { InmobiliariaView } from "../src/templates/inmobiliaria/view";
import { BellezaView } from "../src/templates/belleza/view";
import { ProfesionalesView } from "../src/templates/profesionales/view";
const views = [
  BarberiaView,
  RestauranteView,
  ConsultorioView,
  InmobiliariaView,
  BellezaView,
  ProfesionalesView,
];
test("seis configuraciones independientes y las rutas solicitadas", () => {
  assert.deepEqual(
    TEMPLATES.map((t) => t.id),
    [
      "barberia",
      "restaurante",
      "consultorio",
      "inmobiliaria",
      "belleza",
      "profesionales",
    ],
  );
  assert.equal(new Set(TEMPLATES.map((t) => t.category)).size, 6);
});
test("búsqueda de categorías y nombres ignora acentos y mayúsculas", () => {
  assert.equal(filterTemplates("BARBERIA", "Todas")[0].id, "barberia");
  assert.equal(filterTemplates("", "Inmobiliarias").length, 1);
  assert.equal(filterTemplates("sin coincidencias", "Todas").length, 0);
  assert.equal(filterTemplates("", "Todas").length, 6);
});
test("contacto comercial existente y atribución de plantilla sin reservas ficticias", () => {
  assert.equal(WHATSAPP_NUMBER, "51928577224");
  for (const config of TEMPLATES) {
    const url = new URL(requestWebsite(config.id));
    assert.equal(url.pathname, `/${WHATSAPP_NUMBER}`);
    assert.ok(url.searchParams.get("text")?.includes(config.id));
    assert.ok(
      new URL(demoContactUrl(config)).searchParams
        .get("text")
        ?.includes("no es una reserva"),
    );
  }
});
for (const [i, config] of TEMPLATES.entries()) {
  test(`${config.name}: estructura distinta, enlaces internos, imágenes y contenido completo`, async () => {
    const html = renderToStaticMarkup(createElement(views[i], { config }));
    assert.ok(html.includes(`template-${config.id}`));
    assert.equal((html.match(/<h1[ >]/g) || []).length, 1);
    assert.ok(html.includes("Estás viendo una plantilla"));
    assert.ok(html.includes("horarios ilustrativos"));
    assert.ok(!html.includes("/admin"));
    for (const [, id] of html.matchAll(/href="#([^"]+)"/g))
      assert.ok(html.includes(`id="${id}"`), `${config.id}: ${id}`);
    for (const [, image] of html.matchAll(/src="(\/photos\/[^"]+)"/g))
      await access(`public${image}`);
    const preview = await sharp(`public${config.preview}`).metadata();
    assert.equal(preview.width, 800);
    assert.equal(preview.height, 500);
  });
}
test("exportación: siete HTML, SEO, assets locales y ausencia de rutas de servidor", async () => {
  for (const route of ["", ...TEMPLATES.map((t) => `${t.id}/`)]) {
    const html = await readFile(`out/${route}index.html`, "utf8");
    assert.ok(html.includes("BR Digital System"));
    assert.ok(html.includes('<meta name="viewport"'));
    if (route) assert.ok(/name="robots" content="noindex, follow"/.test(html));
    else {
      assert.ok(html.includes("https://demo.brdigitalsystem.online/"));
      assert.equal((html.match(/class="template-card /g) || []).length, 6);
    }
    for (const [, asset] of html.matchAll(
      /(?:src|href)="(\/(?:_next|photos|previews)\/[^"?]+)(?:\?[^" ]*)?"/g,
    ))
      await access(`out${asset}`);
  }
  const directories = await readdir("out");
  assert.ok(!directories.includes("api"));
  assert.ok(!directories.includes("admin"));
  assert.ok(!directories.includes("d"));
  assert.ok(!directories.includes("t"));
  const app = await readdir("src/app");
  assert.ok(!app.includes("api"));
  assert.ok(!app.includes("admin"));
  const pkg = JSON.parse(await readFile("package.json", "utf8"));
  for (const dependency of [
    "pg",
    "drizzle-orm",
    "better-auth",
    "@aws-sdk/client-s3",
  ])
    assert.ok(!pkg.dependencies[dependency]);
});
test("fotografías responsivas locales con dos tamaños optimizados", async () => {
  const sources = JSON.parse(
    await readFile("public/photos/sources.json", "utf8"),
  );
  for (const { name } of sources) {
    for (const width of [640, 1280]) {
      const meta = await sharp(
        `public/photos/${name}-${width}.webp`,
      ).metadata();
      assert.equal(meta.format, "webp");
      assert.ok(meta.width! <= width);
    }
  }
  const css = await readFile("public/templates.css", "utf8");
  assert.ok(
    css.includes("@media(max-width:700px)") ||
      css.includes("@media (max-width: 700px)"),
  );
  assert.ok(css.includes("prefers-reduced-motion"));
});
