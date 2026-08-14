// src/i18n/libreTranslate.ts
import type { Lang } from "../translations";
import { translations } from "../translations";

const cacheKey = (lang: Lang) => `brds_i18n_cache_${lang}_v1`;

// Instancia pública (puede variar/caerse). Mejor: self-host.
const LIBRE_URL = "https://libretranslate.com/translate";

async function translateText(q: string, target: Lang) {
  const res = await fetch(LIBRE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      q,
      source: "es",
      target,
      format: "text",
    }),
  });
  if (!res.ok) throw new Error("Translate failed");
  const data = await res.json();
  return String(data.translatedText || "");
}

type Nested = Record<string, unknown>;

function flattenStrings(
  obj: unknown,
  prefix = "",
  out: Record<string, string> = {}
) {
  const source = obj as Nested | null;
  if (!source) return out;
  for (const k of Object.keys(source)) {
    const val = source[k];
    const path = prefix ? `${prefix}.${k}` : k;

    if (typeof val === "string") out[path] = val;
    else if (typeof val === "object" && !Array.isArray(val))
      flattenStrings(val, path, out);
  }
  return out;
}

function applyFlatStrings(base: unknown, flat: Record<string, string>) {
  const clone = structuredClone(base);
  for (const path in flat) {
    const parts = path.split(".");
    let ref = clone as Nested;
    for (let i = 0; i < parts.length - 1; i++) {
      ref = ref[parts[i]] as Nested;
    }
    ref[parts[parts.length - 1]] = flat[path];
  }
  return clone;
}

export async function getDict(lang: Lang) {
  if (lang === "es") return translations.es;

  // cache
  try {
    const raw = localStorage.getItem(cacheKey(lang));
    if (raw) return JSON.parse(raw);
  } catch {
    // Sin acceso a localStorage (modo privado o almacenamiento lleno).
  }

  const base = translations.es;
  const flat = flattenStrings(base);

  // traducimos “en bloque” con JSON string para que vuelva con estructura
  const payload = JSON.stringify(flat);

  const translated = await translateText(payload, lang);

  let translatedFlat: Record<string, string>;
  try {
    translatedFlat = JSON.parse(translated);
  } catch {
    // si la API devuelve algo no parseable, fallback
    return translations.es;
  }

  const dict = applyFlatStrings(base, translatedFlat);

  try {
    localStorage.setItem(cacheKey(lang), JSON.stringify(dict));
  } catch {
    // Sin acceso a localStorage (modo privado o almacenamiento lleno).
  }

  return dict;
}
