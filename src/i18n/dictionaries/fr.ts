import { seo } from "./fr/seo";
import {
  categories,
  difficulties,
  ageGroups,
  filter,
  languageSwitcher,
  navigation,
  sidebar,
  imposterWords,
  imposterRules,
  generator,
} from "./fr/generator";
import { home } from "./fr/home";
import { pages } from "./fr/pages";
import { footer } from "./fr/footer";

export const fr = {
  locale: "fr",
  localeName: "Français",
  seo,
  imposterWords,
  imposterRules,
  languageSwitcher,
  navigation,
  sidebar,
  categories,
  difficulties,
  ageGroups,
  filter,
  generator,
  home,
  pages,
  footer,
};

export type DictionaryFr = typeof fr;
