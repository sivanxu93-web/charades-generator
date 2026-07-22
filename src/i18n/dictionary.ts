import { DEFAULT_LOCALE, type Locale } from "./config";
import { en, type Dictionary as Dictionary } from "./dictionaries/en";
import { es } from "./dictionaries/es";
import { fr } from "./dictionaries/fr";
import { pt } from "./dictionaries/pt";

const dictionaries: Record<Locale, Dictionary> = {
  en,
  es: es as Dictionary,
  fr: fr as Dictionary,
  pt: pt as Dictionary,
};

export type { Dictionary };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
}
