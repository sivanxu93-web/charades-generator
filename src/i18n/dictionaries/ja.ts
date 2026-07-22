import { seo } from "./ja/seo";
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
} from "./ja/generator";
import { home } from "./ja/home";
import { pages } from "./ja/pages";
import { footer } from "./ja/footer";

export const ja = {
  locale: "ja",
  localeName: "日本語",
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

export type DictionaryJa = typeof ja;
