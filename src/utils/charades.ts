import { getCharadesDatabase } from '@/data/charades-data';
import type { CharadesWord } from '@/data/charades-types';
import type { Locale } from '@/i18n/config';

export function pickWords(
  category: string | string[],
  difficulty: string,
  ageGroup: string,
  count: number,
  locale: Locale,
  excludeWords: string[] = [],
): CharadesWord[] {
  const database = getCharadesDatabase(locale);

  const filtered = database.filter((word) => {
    let matchesCategory = false;
    if (Array.isArray(category)) {
      matchesCategory = category.includes(word.category);
    } else {
      matchesCategory = category === 'all' || word.category === category;
    }

    const matchesDifficulty = difficulty === 'all' || word.difficulty === difficulty;
    const matchesAgeGroup =
      ageGroup === 'all' || word.ageGroup === ageGroup || word.ageGroup === 'all';

    return matchesCategory && matchesDifficulty && matchesAgeGroup;
  });

  const pool = filtered.length > 0 ? filtered : database;

  // Separate fresh words from previously seen words
  const freshWords = pool.filter((w) => !excludeWords.includes(w.word));
  const seenWords = pool.filter((w) => excludeWords.includes(w.word));

  // Helper to shuffle an array in-place
  const shuffle = <T>(array: T[]) => {
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  // 1. Try to fulfill the request with fresh words first
  shuffle(freshWords);
  const result = freshWords.slice(0, Math.min(count, freshWords.length));

  // 2. If we still need more words, fill from the seen pool
  if (result.length < count) {
    shuffle(seenWords);
    const needed = count - result.length;
    result.push(...seenWords.slice(0, needed));
  }

  // 3. Shuffle the final result so fresh/seen words are mixed
  shuffle(result);

  return result;
}
