import { translations, type Lang, type Translation } from "../translations";

export function getTranslation(lang: Lang): Translation {
  return translations[lang] ?? translations.es;
}
