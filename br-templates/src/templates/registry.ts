import { barberia } from "./barberia/config";
import { restaurante } from "./restaurante/config";
import { consultorio } from "./consultorio/config";
import { inmobiliaria } from "./inmobiliaria/config";
import { belleza } from "./belleza/config";
import { profesionales } from "./profesionales/config";
import type { TemplateConfig } from "./types";
export const TEMPLATES: readonly TemplateConfig[] = [
  barberia,
  restaurante,
  consultorio,
  inmobiliaria,
  belleza,
  profesionales,
];
export const CATEGORIES = TEMPLATES.map((t) => t.category);
export function getTemplate(id: string) {
  const result = TEMPLATES.find((t) => t.id === id);
  if (!result) throw new Error("Plantilla no encontrada.");
  return result;
}
export const normalizeSearch = (text: string) =>
  text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
export function filterTemplates(search: string, category: string) {
  return TEMPLATES.filter(
    (t) =>
      (category === "Todas" || t.category === category) &&
      normalizeSearch(`${t.name} ${t.category} ${t.description}`).includes(
        normalizeSearch(search),
      ),
  );
}
