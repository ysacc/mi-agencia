/**
 * Manejo de parámetros UTM para las landings de campaña.
 *
 * - Se leen de la URL de entrada (primer click del anuncio).
 * - Se guardan en sessionStorage para que sobrevivan a la navegación interna.
 * - Se reinyectan en los enlaces internos y en el mensaje de WhatsApp.
 */

export const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
] as const;

export type UtmKey = (typeof UTM_KEYS)[number];
export type UtmParams = Partial<Record<UtmKey, string>>;

const STORAGE_KEY = "brds_utm";

const isBrowser = () => typeof window !== "undefined";

/** Lee los UTM presentes en un query string (por defecto, el de la URL actual). */
export function readUtmFromSearch(search?: string): UtmParams {
  if (!isBrowser() && search === undefined) return {};
  const out: UtmParams = {};
  try {
    const params = new URLSearchParams(search ?? window.location.search);
    for (const key of UTM_KEYS) {
      const value = params.get(key);
      if (value) out[key] = value.slice(0, 120);
    }
  } catch {
    // querystring inválido: se ignora
  }
  return out;
}

function readStoredUtm(): UtmParams {
  if (!isBrowser()) return {};
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as UtmParams;
    const out: UtmParams = {};
    for (const key of UTM_KEYS) {
      const value = parsed?.[key];
      if (typeof value === "string" && value) out[key] = value;
    }
    return out;
  } catch {
    return {};
  }
}

/**
 * Combina los UTM de la URL con los ya guardados y persiste el resultado.
 * Los de la URL actual tienen prioridad (click más reciente del anuncio).
 */
export function captureUtm(): UtmParams {
  const merged: UtmParams = { ...readStoredUtm(), ...readUtmFromSearch() };
  if (isBrowser() && Object.keys(merged).length > 0) {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
    } catch {
      // modo privado / storage lleno: seguimos sin persistir
    }
  }
  return merged;
}

/** UTM vigentes (URL + almacenados). */
export function getUtm(): UtmParams {
  return { ...readStoredUtm(), ...readUtmFromSearch() };
}

/** Agrega los UTM vigentes a una ruta interna, sin duplicarlos. */
export function withUtm(path: string): string {
  const utm = getUtm();
  const entries = Object.entries(utm).filter(([, v]) => Boolean(v));
  if (entries.length === 0) return path;

  const [base, existingQuery = ""] = path.split("?");
  const params = new URLSearchParams(existingQuery);
  for (const [key, value] of entries) {
    if (!params.has(key)) params.set(key, value as string);
  }
  const query = params.toString();
  return query ? `${base}?${query}` : base;
}

/** Resumen legible del origen, para adjuntar al mensaje de WhatsApp. */
export function formatUtmSummary(utm: UtmParams = getUtm()): string {
  const parts = UTM_KEYS.filter((key) => utm[key]).map(
    (key) => `${key.replace("utm_", "")}: ${utm[key]}`
  );
  return parts.join(" · ");
}
