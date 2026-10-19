import assert from "node:assert/strict";
import { test, after } from "node:test";
import { JSDOM } from "jsdom";
import { readFile } from "node:fs/promises";
const dom = new JSDOM(
  '<!doctype html><html lang="es-PE"><head><title>Catálogo</title></head><body><main><div id="root"></div></main></body></html>',
  { url: "http://localhost:4174/" },
);
Object.assign(globalThis, {
  window: dom.window,
  self: dom.window,
  document: dom.window.document,
  HTMLElement: dom.window.HTMLElement,
  IS_REACT_ACT_ENVIRONMENT: true,
});
Object.defineProperty(globalThis, "navigator", {
  value: dom.window.navigator,
  configurable: true,
});
const { createElement, act } = await import("react");
const { createRoot } = await import("react-dom/client");
const { Catalog } = await import("../src/components/catalog");
const { DemoForm } = await import("../src/components/demo-form");
const { default: axe } = await import("axe-core");
const root = createRoot(document.getElementById("root")!);
const click = async (element: Element) =>
  act(() => {
    (element as HTMLElement).click();
  });
const input = async (element: Element, value: string) =>
  act(() => {
    Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      "value",
    )!.set!.call(element, value);
    element.dispatchEvent(new window.Event("input", { bubbles: true }));
  });
test("catálogo: filtros, búsquedas, limpieza y estado vacío", async () => {
  await act(() => root.render(createElement(Catalog)));
  assert.equal(document.querySelectorAll(".template-card").length, 6);
  await click(
    [...document.querySelectorAll(".category-list button")].find(
      (b) => b.textContent === "Barberías",
    )!,
  );
  assert.equal(document.querySelectorAll(".template-card").length, 1);
  await click(
    [...document.querySelectorAll(".category-list button")].find(
      (b) => b.textContent === "Todas",
    )!,
  );
  await input(document.querySelector("input[type=search]")!, "RESTAURANTE");
  assert.equal(document.querySelectorAll(".template-card").length, 1);
  await input(
    document.querySelector("input[type=search]")!,
    "sin coincidencias",
  );
  assert.ok(document.querySelector(".empty-state"));
  await click(document.querySelector(".empty-state button")!);
  assert.equal(document.querySelectorAll(".template-card").length, 6);
});
test("formulario visual: validar muestra sin red, pagos ni almacenamiento", async () => {
  await act(() => root.render(createElement(DemoForm, { kind: "property" })));
  let network = 0;
  const previousFetch = globalThis.fetch;
  globalThis.fetch = async () => {
    network++;
    throw new Error("No debe enviar solicitudes.");
  };
  try {
    const inputs = document.querySelectorAll("input");
    await input(inputs[0], "Nombre de muestra");
    await input(inputs[1], "ejemplo@example.test");
    const textarea = document.querySelector("textarea")!;
    await act(() => {
      textarea.value = "Consulta de muestra";
    });
    await click(document.querySelector("button")!);
    assert.ok(
      document
        .querySelector("[role=status]")
        ?.textContent?.includes("No se envió"),
    );
    assert.equal(network, 0);
    assert.equal(window.localStorage.length, 0);
    assert.equal(window.sessionStorage.length, 0);
    const form = document.querySelector("form")!;
    assert.equal(form.querySelector("button")!.type, "button");
    const event = new window.Event("submit", {
      bubbles: true,
      cancelable: true,
    });
    await act(() => {
      form.dispatchEvent(event);
    });
    assert.equal(event.defaultPrevented, true);
  } finally {
    globalThis.fetch = previousFetch;
  }
});
test("accesibilidad estructural: catálogo y seis páginas estáticas (sin medir contraste o geometría)", async () => {
  for (const id of [
    "",
    "barberia",
    "restaurante",
    "consultorio",
    "inmobiliaria",
    "belleza",
    "profesionales",
  ]) {
    const html = await readFile(`out/${id ? `${id}/` : ""}index.html`, "utf8");
    const page = new JSDOM(html, { runScripts: "outside-only" });
    try {
      page.window.eval(axe.source);
      const runner = (page.window as unknown as { axe: typeof axe }).axe;
      const result = await runner.run(page.window.document.documentElement, {
        rules: { "color-contrast": { enabled: false } },
      });
      assert.equal(
        result.violations.length,
        0,
        JSON.stringify({
          page: id || "catálogo",
          violations: result.violations.map((v) => ({
            id: v.id,
            nodes: v.nodes.map((n) => n.target),
          })),
        }),
      );
    } finally {
      page.window.close();
    }
  }
});
after(async () => {
  await act(() => root.unmount());
  dom.window.close();
});
