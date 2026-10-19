import assert from "node:assert/strict";
import { test } from "node:test";
import { readFileSync, existsSync } from "node:fs";
import {
  PLANS,
  EXTRA_SECTION_PRICE,
  CONDITIONS,
  estimateQuote,
  quoteMessage,
} from "../src/data/plans.ts";

test("planes: precios, páginas y límites publicados", () => {
  assert.deepEqual(
    PLANS.map((p) => [p.id, p.price, p.pages, p.sections]),
    [
      ["esencial", 299, 1, 3],
      ["negocio", 499, 1, 5],
      ["profesional", 799, 4, 7],
    ],
  );
  assert.equal(EXTRA_SECTION_PRICE, 80);
  assert.equal(
    PLANS.every((p) => p.features.length === 6),
    true,
  );
  assert.ok(CONDITIONS.some((c) => c.includes("ecommerce")));
});
for (const plan of PLANS) {
  test(`${plan.name}: base y extras pendientes de validación`, () => {
    assert.equal(estimateQuote(plan.id, 0).total, plan.price);
    assert.equal(estimateQuote(plan.id, 0).needsValidation, false);
    for (const extras of [1, 2, 5, 20]) {
      const quote = estimateQuote(plan.id, extras);
      assert.equal(quote.total, plan.price + extras * 80);
      assert.equal(quote.requestedSections, plan.sections + extras);
      assert.equal(quote.needsValidation, true);
      assert.equal(quote.plan.pages, plan.pages);
    }
  });
}
test("rechaza negativos, decimales, NaN, infinitos y cantidades inseguras", () => {
  for (const extras of [
    -1,
    0.5,
    NaN,
    Infinity,
    Number.MAX_SAFE_INTEGER,
    -Infinity,
  ]) {
    assert.throws(() => estimateQuote("esencial", extras), RangeError);
  }
});
test("resumen: nombre especial, dominio, precio y advertencia de límites", () => {
  const message = quoteMessage(
    "negocio",
    2,
    "Sí, ya tengo",
    "  Café & Diseño / Perú  ",
  );
  assert.ok(message.includes("Negocio: Café & Diseño / Perú"));
  assert.ok(message.includes("Dominio: Sí, ya tengo"));
  assert.ok(message.includes("S/ 659"));
  assert.ok(message.includes("excede el límite"));
  assert.ok(message.includes("Dominio, hosting y mantenimiento por separado"));
  assert.equal(decodeURIComponent(encodeURIComponent(message)), message);
  assert.ok(
    quoteMessage("esencial", 0, "No estoy seguro", "").includes("Por definir"),
  );
  assert.ok(
    !quoteMessage("esencial", 0, "No", "").includes("excede el límite"),
  );
});
test("nombre del negocio limitado a 80 caracteres", () => {
  const businessLine = quoteMessage(
    "profesional",
    0,
    "No",
    "x".repeat(100),
  ).split("\n")[1];
  assert.equal(businessLine.length, "Negocio: ".length + 80);
});
test("build: metadata, JSON-LD, rutas conservadas y sin tokens pendientes", () => {
  for (const route of [
    "",
    "web-para-negocios/",
    "tienda-online/",
    "sistemas-a-medida/",
  ]) {
    const html = readFileSync(`dist/${route}index.html`, "utf8");
    assert.ok(!/__STARTING_PRICE__|__BR_STRUCTURED_DATA__/.test(html));
    assert.ok(html.includes("Páginas web desde S/ 299"));
    assert.ok(html.includes("https://brdigitalsystem.online/"));
    const graph = JSON.parse(
      html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1],
    );
    const service = graph["@graph"].find((node) => node["@type"] === "Service");
    assert.deepEqual(
      service.hasOfferCatalog.itemListElement.map((offer) => [
        offer.price,
        offer.priceCurrency,
      ]),
      [
        [299, "PEN"],
        [499, "PEN"],
        [799, "PEN"],
      ],
    );
    assert.ok(graph["@graph"].some((node) => node["@type"] === "FAQPage"));
    for (const [, asset] of html.matchAll(/(?:src|href)="(\/assets\/[^\"]+)"/g))
      assert.ok(existsSync(`dist${asset}`), asset);
  }
});
test("demos: páginas reales, navegación interna y aviso de ficción", () => {
  for (const name of ["studio", "food", "consulting"]) {
    const html = readFileSync(`dist/demos/${name}.html`, "utf8");
    assert.ok(html.includes("marca ficticia"));
    assert.ok(html.includes("noindex, follow"));
    assert.ok(!/__\w+__/.test(html));
    assert.ok(html.includes("/#cotizador"));
    for (const [, id] of html.matchAll(/href="#([^"]+)"/g))
      assert.ok(html.includes(`id="${id}"`), id);
  }
});
test("home: destinos de navegación, teléfono conservado y sin almacenamiento de consultas", () => {
  const app = readFileSync("src/App.tsx", "utf8");
  for (const id of ["inicio", "planes", "ejemplos", "contacto"])
    assert.ok(app.includes(`id="${id}"`), id);
  assert.ok(readFileSync("src/lib/site.ts", "utf8").includes("51928577224"));
  const quote = readFileSync("src/components/WebQuote.tsx", "utf8");
  assert.ok(!/localStorage|sessionStorage/.test(quote));
  assert.ok(
    quote.includes("encodeURIComponent") ||
      readFileSync("src/lib/whatsapp.ts", "utf8").includes(
        "encodeURIComponent",
      ),
  );
});
