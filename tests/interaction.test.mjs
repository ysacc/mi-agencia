import assert from "node:assert/strict";
import { test, after } from "node:test";
import { JSDOM, VirtualConsole } from "jsdom";

const navigationErrors = [];
const console = new VirtualConsole();
console.on("jsdomError", (error) => {
  navigationErrors.push(error.message);
});
const dom = new JSDOM(
  '<!doctype html><html lang="es-PE"><head><title>BR Digital System</title></head><body><div id="root"></div></body></html>',
  {
    url: "https://brdigitalsystem.online/",
    pretendToBeVisual: true,
    virtualConsole: console,
  },
);
globalThis.window = dom.window;
globalThis.document = dom.window.document;
Object.defineProperty(globalThis, "navigator", {
  value: dom.window.navigator,
  configurable: true,
});
globalThis.HTMLElement = dom.window.HTMLElement;
globalThis.IS_REACT_ACT_ENVIRONMENT = true;
window.matchMedia = () => ({ matches: false });
window.HTMLElement.prototype.scrollIntoView = function () {};
const { createElement, act } = await import("react");
const { createRoot } = await import("react-dom/client");
const { default: App } = await import("../.test-dist/App.js");
const { default: axe } = await import("axe-core");
const root = createRoot(document.getElementById("root"));
await act(() => root.render(createElement(App)));
const click = async (element) => act(() => element.click());
const select = async (element, value) =>
  act(() => {
    element.value = value;
    element.dispatchEvent(new window.Event("change", { bubbles: true }));
  });
const input = async (element, value) =>
  act(() => {
    Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      "value",
    ).set.call(element, value);
    element.dispatchEvent(new window.Event("input", { bubbles: true }));
  });

test("elegir plan actualiza cotizador y lleva el foco al selector", async () => {
  await click(
    [...document.querySelectorAll("button")].find((el) =>
      el.textContent.includes("Elegir Esencial"),
    ),
  );
  const control = document.querySelector("#cotizador select");
  assert.equal(control.value, "esencial");
  assert.equal(document.activeElement, control);
  assert.ok(
    document.querySelector(".quote-total").textContent.includes("S/ 299"),
  );
});
test("calcular extras, cambiar plan y rechazar cantidades inválidas", async () => {
  const extras = document.getElementById("extras");
  await input(extras, "2");
  assert.ok(
    document.querySelector(".quote-total").textContent.includes("S/ 459"),
  );
  assert.ok(
    document.getElementById("extra-help").textContent.includes("supera las 3"),
  );
  await select(document.querySelector("#cotizador select"), "profesional");
  assert.equal(extras.value, "0");
  assert.ok(
    document.querySelector(".quote-total").textContent.includes("S/ 799"),
  );
  await input(extras, "-1");
  assert.equal(extras.getAttribute("aria-invalid"), "true");
  assert.equal(document.querySelector(".quote-card button").disabled, true);
  await input(extras, "1.5");
  assert.equal(document.querySelector(".quote-card button").disabled, true);
  await input(extras, "");
  assert.equal(document.querySelector(".quote-card button").disabled, true);
  await input(extras, "3");
  assert.ok(
    document.querySelector(".quote-total").textContent.includes("S/ 1,039"),
  );
  assert.equal(document.querySelector(".quote-card button").disabled, false);
});
test("menú móvil: estado expandido, Escape y cierre al navegar", async () => {
  const toggle = document.querySelector(".menu-toggle");
  await click(toggle);
  assert.equal(toggle.getAttribute("aria-expanded"), "true");
  await act(() =>
    document
      .querySelector("#main-nav")
      .dispatchEvent(
        new window.KeyboardEvent("keydown", { key: "Escape", bubbles: true }),
      ),
  );
  assert.equal(toggle.getAttribute("aria-expanded"), "false");
  assert.equal(document.activeElement, toggle);
  await click(toggle);
  await click(document.querySelector('#main-nav a[href="#planes"]'));
  assert.equal(toggle.getAttribute("aria-expanded"), "false");
});
test("todos los enlaces locales de la home tienen destino y WhatsApp usa el número existente", () => {
  for (const a of document.querySelectorAll('a[href^="#"]'))
    assert.ok(
      document.getElementById(a.getAttribute("href").slice(1)),
      a.outerHTML,
    );
  const links = [...document.querySelectorAll('a[href^="https://wa.me/"]')];
  assert.ok(links.length >= 4);
  for (const a of links) {
    const url = new URL(a.href);
    assert.equal(url.pathname, "/51928577224");
    assert.ok(url.searchParams.get("text").includes("página web"));
  }
});
test("el resumen sale por WhatsApp sin guardar el negocio ni enviarlo a analítica", async () => {
  await input(document.getElementById("business"), "Negocio privado de prueba");
  await act(() =>
    document
      .querySelector(".quote-card")
      .dispatchEvent(
        new window.Event("submit", { bubbles: true, cancelable: true }),
      ),
  );
  assert.equal(window.localStorage.length, 0);
  assert.equal(window.sessionStorage.length, 0);
  assert.ok(window.dataLayer.some((event) => event.event === "submit_form"));
  assert.ok(
    !JSON.stringify(window.dataLayer).includes("Negocio privado de prueba"),
  );
  assert.ok(navigationErrors.some((error) => error.includes("navigation")));
});
test("accesibilidad automática de estructura y controles (sin contraste ni geometría)", async () => {
  const result = await axe.run(document.documentElement, {
    rules: { "color-contrast": { enabled: false } },
  });
  assert.deepEqual(
    result.violations.map((v) => ({
      id: v.id,
      description: v.description,
      nodes: v.nodes.map((n) => n.target),
    })),
    [],
  );
});
after(async () => {
  await act(() => root.unmount());
  dom.window.close();
});
