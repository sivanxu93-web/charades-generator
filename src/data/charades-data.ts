import { DEFAULT_LOCALE, type Locale } from "@/i18n/config";
import type { CharadesWord } from "./charades-types";
import { moviesData } from "./categories/movies";
import { animalsData } from "./categories/animals";
import { actionsData } from "./categories/actions";
import { professionsData } from "./categories/professions";
import { objectsData } from "./categories/objects";
import { emotionsData } from "./categories/emotions";
import { disneyData } from "./categories/disney";
import { funnyData } from "./categories/funny";
import { christmasData } from "./categories/christmas";
import { bibleData } from "./categories/bible";
import { celebrityData } from "./categories/celebrity";
import { familyData } from "./categories/family";
import { thanksgivingData } from "./categories/thanksgiving";
import { halloweenData } from "./categories/halloween";
import { esCharadesDatabase } from "./locales/es";
import { frCharadesDatabase } from "./locales/fr";
import { ptCharadesDatabase } from "./locales/pt";
import { categoryIds, difficultyIds, ageGroupIds } from "./charades-metadata";

const enDatabase: CharadesWord[] = [
  ...moviesData,
  ...animalsData,
  ...actionsData,
  ...professionsData,
  ...objectsData,
  ...emotionsData,
  ...disneyData,
  ...funnyData,
  ...christmasData,
  ...bibleData,
  ...celebrityData,
  ...familyData,
  ...thanksgivingData,
  ...halloweenData,
];

const databaseByLocale: Record<Locale, CharadesWord[]> = {
  en: enDatabase,
  es: esCharadesDatabase,
  fr: frCharadesDatabase,
  pt: ptCharadesDatabase,
};

export { categoryIds, difficultyIds as difficulties, ageGroupIds as ageGroups };

export const charadesDatabase = enDatabase;

export function getCharadesDatabase(locale: Locale = DEFAULT_LOCALE): CharadesWord[] {
  return databaseByLocale[locale] ?? enDatabase;
}
