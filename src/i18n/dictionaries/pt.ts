import { seo } from "./pt/seo";
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
} from "./pt/generator";
import { home } from "./pt/home";
import { pages } from "./pt/pages";
import { footer } from "./pt/footer";

export const pt = {
  locale: "pt",
  localeName: "Português",
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

export type DictionaryPt = typeof pt;
