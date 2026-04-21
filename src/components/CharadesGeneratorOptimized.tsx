'use client';

import Link from 'next/link';
import { useState, useEffect, useCallback, useRef, lazy, Suspense, useMemo } from 'react';
import type { CharadesWord } from '@/data/charades-types';
import { useLocale } from '@/contexts/LocaleContext';
import { categoryIds, difficultyIds, ageGroupIds } from '@/data/charades-metadata';
import { buildLocalePath } from '@/utils/localePaths';
import { trackEvent } from '@/lib/analytics';
import { usePro } from '@/hooks/usePro';
import UpgradeModal from '@/components/UpgradeModal';

const DEFAULT_BATCH_SIZE = 3;
const PRO_CATEGORIES = ['funny'];

interface ScenarioPreset {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: string;
  ageGroup: string;
  wordCount: number;
  roundLength: string;
  tip: string;
}

const FilterComponent = lazy(() => import('@/components/FilterComponent'));

interface CharadesGeneratorProps {
  defaultCategory?: string;
  defaultAgeGroup?: string;
  defaultDifficulty?: string;
  title?: string;
  description?: string;
  hideFilters?: boolean;
  initialWords?: CharadesWord[];
  hideCategoryFilter?: boolean;
  hideDifficultyFilter?: boolean;
  hideAgeGroupFilter?: boolean;
  isShowScenarios?: boolean;
  showChristmasPromoLink?: boolean;
  allowedCategories?: string[];
}

type PickWordsFn = (
  category: string | string[],
  difficulty: string,
  ageGroup: string,
  count: number,
  locale: string,
  excludeWords?: string[],
) => CharadesWord[];

export default function CharadesGeneratorOptimized({
  defaultCategory = 'all',
  defaultAgeGroup = 'all',
  defaultDifficulty = 'all',
  title,
  description,
  hideFilters = false,
  initialWords,
  hideCategoryFilter = false,
  hideDifficultyFilter = false,
  hideAgeGroupFilter = false,
  isShowScenarios = false,
  showChristmasPromoLink = false,
  allowedCategories,
}: CharadesGeneratorProps = {}) {
  const { locale, dictionary, t } = useLocale();
  const difficultiesLabel = dictionary.difficulties;
  const categoriesLabel = dictionary.categories;
  const ageGroupLabels = dictionary.ageGroups;
  const resolvedTitle = title ?? dictionary.generator.defaultTitle;
  const resolvedDescription = description ?? dictionary.generator.defaultDescription;
  const categoriesToDisplay = allowedCategories ?? categoryIds;
  const scenarios = useMemo(
    () => (dictionary.generator.scenarios ?? []) as ScenarioPreset[],
    [dictionary],
  );
  const christmasHref = useMemo(
    () => buildLocalePath(locale, '/christmas-charades-generator/'),
    [locale],
  );
  const christmasLabel =
    locale === 'es'
      ? 'Especial de Navidad: charadas navideñas'
      : 'Holiday special: Christmas charades generator';

  const { isPro, loaded: isProLoaded } = usePro();
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState<string>(defaultCategory);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>(defaultDifficulty);
  const [selectedAgeGroup, setSelectedAgeGroup] = useState<string>(defaultAgeGroup);
  const [filtersExpanded, setFiltersExpanded] = useState<boolean>(false);
  const [batchSize, setBatchSize] = useState<number>(DEFAULT_BATCH_SIZE);
  const [customCount, setCustomCount] = useState<string>('');
  const [isCustomMode, setIsCustomMode] = useState<boolean>(false);

  const parsedCustomCount = Number.parseInt(customCount, 10);
  const isCustomValid =
    isCustomMode && !Number.isNaN(parsedCustomCount) && parsedCustomCount >= 1 && parsedCustomCount <= 50;

  const checkProInterception = useCallback((category: string): boolean => {
    if (!isProLoaded || isPro) return false;

    const hasSeenModal = window.sessionStorage.getItem('cg-shown-first-modal');
    if (!hasSeenModal) {
      setIsUpgradeModalOpen(true);
      window.sessionStorage.setItem('cg-shown-first-modal', 'true');
      return true;
    }

    if (PRO_CATEGORIES.includes(category)) {
      setIsUpgradeModalOpen(true);
      return true;
    }

    return false;
  }, [isPro, isProLoaded]);

  const handleSetCategory = useCallback((cat: string) => {
    if (PRO_CATEGORIES.includes(cat) && !isPro) {
       setIsUpgradeModalOpen(true);
       return;
    }
    setSelectedCategory(cat);
  }, [isPro]);

  const handleSetBatchSize = useCallback((size: number) => {
    setBatchSize(size);
    setIsCustomMode(false);
    setCustomCount('');
  }, []);

  const [generatedWords, setGeneratedWords] = useState<CharadesWord[]>(initialWords || []);
  const [hasHydrated, setHasHydrated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const hasTriggeredInitialFetch = useRef(false);
  const pickWordsRef = useRef<PickWordsFn | null>(null);
  const [activeScenarioId, setActiveScenarioId] = useState<string | null>(null);
  const [copyFeedback, setCopyFeedback] = useState<'idle' | 'success' | 'error'>('idle');
  const [scenarioUsage, setScenarioUsage] = useState<Record<string, boolean>>({});
  const [scenariosExpanded, setScenariosExpanded] = useState(false);
  const seenWordsRef = useRef<string[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const storedScenarios = window.localStorage.getItem('cg-scenario-usage');
      if (storedScenarios) setScenarioUsage(JSON.parse(storedScenarios));
      const storedSeen = window.localStorage.getItem('cg-seen-words');
      if (storedSeen) seenWordsRef.current = JSON.parse(storedSeen);
    } catch { /* ignore */ }
  }, []);

  useEffect(() => { setActiveScenarioId(null); }, [locale]);
  useEffect(() => { setSelectedCategory(defaultCategory); }, [defaultCategory]);
  useEffect(() => { setSelectedDifficulty(defaultDifficulty); }, [defaultDifficulty]);
  useEffect(() => { setSelectedAgeGroup(defaultAgeGroup); }, [defaultAgeGroup]);

  useEffect(() => {
    if (!scenarios.find((scenario) => scenario.id === activeScenarioId)) {
      setActiveScenarioId(null);
    }
  }, [scenarios, activeScenarioId]);

  const loadPickWords = useCallback(async (): Promise<PickWordsFn> => {
    if (pickWordsRef.current) return pickWordsRef.current;
    const mod = await import('@/utils/charades');
    pickWordsRef.current = mod.pickWords as PickWordsFn;
    return pickWordsRef.current;
  }, []);

  const generateBatchWords = useCallback(
    async (count: number) => {
      setIsLoading(true);
      setErrorMessage(null);

      try {
        const pickWords = await loadPickWords();
        const categoryParam =
          selectedCategory === 'all' && allowedCategories
            ? allowedCategories.filter((c) => c !== 'all')
            : selectedCategory;

        const words = pickWords(
          categoryParam,
          selectedDifficulty,
          selectedAgeGroup,
          count,
          locale,
          seenWordsRef.current,
        );
        setGeneratedWords(words);

        const newWords = words.map((w) => w.word);
        seenWordsRef.current = [...seenWordsRef.current, ...newWords].slice(-150);
        try {
          window.localStorage.setItem('cg-seen-words', JSON.stringify(seenWordsRef.current));
        } catch { /* ignore */ }
      } catch {
        setErrorMessage(dictionary.generator.errorFetchingWords);
      } finally {
        setIsLoading(false);
      }
    },
    [dictionary.generator.errorFetchingWords, loadPickWords, locale, selectedAgeGroup, selectedCategory, selectedDifficulty, allowedCategories],
  );

  const activeScenario = useMemo(() => {
    if (!activeScenarioId) return null;
    return scenarios.find((scenario) => scenario.id === activeScenarioId) ?? null;
  }, [activeScenarioId, scenarios]);

  const handleApplyScenario = useCallback(
    (scenario: ScenarioPreset) => {
      setActiveScenarioId(scenario.id);
      setSelectedCategory(scenario.category);
      setSelectedDifficulty(scenario.difficulty);
      setSelectedAgeGroup(scenario.ageGroup);
      setBatchSize(scenario.wordCount);
      setIsCustomMode(false);
      setCustomCount('');
      setScenariosExpanded(true);
      trackEvent('charades_scenario_apply', { scenarioId: scenario.id });
    },
    [],
  );

  const handleScenarioReset = useCallback(() => {
    setActiveScenarioId(null);
    setSelectedCategory(defaultCategory);
    setSelectedDifficulty(defaultDifficulty);
    setSelectedAgeGroup(defaultAgeGroup);
    setBatchSize(DEFAULT_BATCH_SIZE);
    setIsCustomMode(false);
    setCustomCount('');
  }, [defaultAgeGroup, defaultCategory, defaultDifficulty]);

  const markScenarioUsed = useCallback(() => {
    if (!activeScenario) return;
    const next = { ...scenarioUsage, [activeScenario.id]: true };
    setScenarioUsage(next);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('cg-scenario-usage', JSON.stringify(next));
    }
  }, [activeScenario, scenarioUsage]);

  useEffect(() => {
    if (!hasHydrated) setHasHydrated(true);
  }, [hasHydrated]);

  const handleGenerateClick = useCallback(() => {
    if (checkProInterception(selectedCategory)) return;

    trackEvent('charades_generate_click', {
      category: selectedCategory,
      difficulty: selectedDifficulty,
      ageGroup: selectedAgeGroup,
      count: isCustomMode && isCustomValid ? parsedCustomCount : batchSize,
    });

    if (isCustomMode && isCustomValid) {
      setBatchSize(parsedCustomCount);
      void generateBatchWords(parsedCustomCount);
    } else {
      void generateBatchWords(batchSize);
    }
  }, [batchSize, generateBatchWords, isCustomMode, isCustomValid, parsedCustomCount, selectedAgeGroup, selectedCategory, selectedDifficulty, checkProInterception]);

  useEffect(() => {
    if (!hasHydrated) return;
    if (!hasTriggeredInitialFetch.current) {
      hasTriggeredInitialFetch.current = true;
      if (initialWords && initialWords.length > 0) return;
    }
    const effectiveCount = isCustomMode && isCustomValid ? parsedCustomCount : batchSize;
    void generateBatchWords(effectiveCount);
  }, [batchSize, generateBatchWords, hasHydrated, initialWords, isCustomMode, isCustomValid, parsedCustomCount, selectedAgeGroup, selectedCategory, selectedDifficulty]);

  const quickPickOptions = [1, 3, 5, 10];
  const displayCount = isCustomMode ? customCount || String(batchSize) : String(batchSize);

  const handleCopyWords = useCallback(async () => {
    if (!generatedWords.length) return;
    const list = generatedWords
      .map((word) => {
        const diff = difficultiesLabel[word.difficulty as keyof typeof difficultiesLabel] ?? word.difficulty;
        const cat = categoriesLabel[word.category as keyof typeof categoriesLabel] ?? word.category;
        const age = ageGroupLabels[word.ageGroup as keyof typeof ageGroupLabels] ?? word.ageGroup;
        return `${word.word} — ${diff} · ${cat} · ${age}`;
      })
      .join('\n');

    try {
      await navigator.clipboard.writeText(list);
      setCopyFeedback('success');
    } catch {
      setCopyFeedback('error');
    }
    setTimeout(() => setCopyFeedback('idle'), 3000);
  }, [generatedWords, difficultiesLabel, categoriesLabel, ageGroupLabels]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <header className="text-center mb-8">
        {showChristmasPromoLink && (
          <div className="mb-3">
            <Link href={christmasHref} className="inline-flex items-center rounded-full bg-red-600 px-4 py-1.5 text-sm font-semibold text-white shadow-md hover:bg-red-500 transition-colors">
              <span className="mr-2" aria-hidden="true">🎄</span>
              {christmasLabel}
            </Link>
          </div>
        )}
        <h1 className="text-4xl font-bold text-gray-800 mb-2">{resolvedTitle}</h1>
        <p className="text-gray-600 text-lg">{resolvedDescription}</p>
        <p className="text-gray-500 text-sm mt-2">{dictionary.generator.wordsCountSublabel}</p>
      </header>

      {/* RE-RESTORE SCENARIOS SECTION */}
      {scenarios.length > 0 && isShowScenarios && (
        <section className="mb-8 rounded-2xl border border-indigo-100 bg-indigo-50 p-5 pt-4 pb-4 sm:p-6 sm:pt-4 sm:pb-4">
          <div className="sm:flex sm:items-start sm:justify-between gap-3">
            <div className="max-w-2xl">
              <button
                type="button"
                onClick={() => setScenariosExpanded((prev) => !prev)}
                className="flex items-center gap-2 text-left text-lg font-semibold text-indigo-900"
              >
                <span>{dictionary.generator.scenarioHeading}</span>
                <svg className={`h-4 w-4 transition-transform ${scenariosExpanded ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>
              {scenariosExpanded && <p className="mt-1 text-sm text-indigo-800">{dictionary.generator.scenarioSubheading}</p>}
            </div>
            <div className="mt-3 flex shrink-0 items-center gap-2 sm:mt-0">
              <button type="button" onClick={() => setScenariosExpanded((prev) => !prev)} className="inline-flex items-center rounded-md border border-indigo-300 px-3 py-1.5 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-100">
                {scenariosExpanded ? dictionary.generator.scenarioToggleClose : dictionary.generator.scenarioToggleOpen}
              </button>
              {activeScenario && (
                <button type="button" onClick={handleScenarioReset} className="inline-flex items-center rounded-md border border-indigo-300 px-3 py-1.5 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-100">
                  {dictionary.generator.scenarioReset}
                </button>
              )}
            </div>
          </div>

          {scenariosExpanded && (
            <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4 animate-in fade-in slide-in-from-top-2 duration-300">
              {scenarios.map((scenario) => {
                const isActive = scenario.id === activeScenarioId;
                return (
                  <button key={scenario.id} type="button" onClick={() => handleApplyScenario(scenario)} className={`text-left rounded-xl border p-4 transition ${isActive ? 'border-indigo-400 bg-white shadow-sm ring-2 ring-indigo-100' : 'border-transparent bg-white/80 hover:border-indigo-200 hover:bg-white'}`}>
                    <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-tighter text-indigo-500">
                      <span className="bg-indigo-50 px-2 py-0.5 rounded">{difficultiesLabel[scenario.difficulty as keyof typeof difficultiesLabel] ?? scenario.difficulty}</span>
                      <span className="bg-indigo-50 px-2 py-0.5 rounded">{categoriesLabel[scenario.category as keyof typeof categoriesLabel] ?? scenario.category}</span>
                    </div>
                    <h3 className="mt-3 text-sm font-bold text-indigo-900">{scenario.title}</h3>
                    <p className="mt-1 text-xs text-indigo-800 line-clamp-2">{scenario.description}</p>
                  </button>
                );
              })}
            </div>
          )}
        </section>
      )}

      {!hideFilters && (
        <Suspense fallback={<div className="mb-8 bg-gray-50 h-14 animate-pulse rounded-lg" />}>
          <FilterComponent
            selectedCategory={selectedCategory}
            selectedDifficulty={selectedDifficulty}
            selectedAgeGroup={selectedAgeGroup}
            filtersExpanded={filtersExpanded}
            setSelectedCategory={handleSetCategory}
            setSelectedDifficulty={setSelectedDifficulty}
            setSelectedAgeGroup={setSelectedAgeGroup}
            setFiltersExpanded={setFiltersExpanded}
            categories={categoriesToDisplay}
            difficulties={difficultyIds}
            ageGroups={ageGroupIds}
            showCategoryFilter={!hideCategoryFilter}
            showDifficultyFilter={!hideDifficultyFilter}
            showAgeGroupFilter={!hideAgeGroupFilter}
          />
        </Suspense>
      )}

      {generatedWords.length > 0 && (
        <div className="bg-white rounded-xl shadow-lg p-4 mb-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{dictionary.generator.yourWordsHeading}</h2>
            <p className="text-gray-600">
              {t('generator.readyToPlay', { count: generatedWords.length })}
            </p>
            <div className="mt-3 flex items-center justify-center gap-2 text-sm">
              <button onClick={handleCopyWords} className="rounded-md border border-indigo-300 px-3 py-1.5 font-semibold text-indigo-700 hover:bg-indigo-100">
                {dictionary.generator.copyListButton}
              </button>
              {copyFeedback !== 'idle' && <span className="text-xs text-gray-500">{copyFeedback === 'success' ? dictionary.generator.copySuccess : dictionary.generator.copyError}</span>}
            </div>

            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-center gap-2 flex-wrap">
                <span className="text-sm font-medium text-gray-700">{dictionary.generator.quickPickLabel}</span>
                {quickPickOptions.map((num) => (
                  <button key={num} onClick={() => handleSetBatchSize(num)} className={`px-3 py-2 rounded-lg text-sm font-medium ${batchSize === num && !isCustomMode ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-blue-100'}`}>
                    {num}
                  </button>
                ))}
                <button onClick={() => setIsCustomMode(true)} className={`px-3 py-2 rounded-lg text-sm font-medium ${isCustomMode ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-blue-100'}`}>
                  {dictionary.generator.customLabel}
                </button>
              </div>

              {isCustomMode && (
                <div className="flex items-center justify-center gap-2">
                  <input type="number" min="1" max="50" value={customCount} onChange={(e) => setCustomCount(e.target.value)} placeholder="1-50" className="w-16 px-2 py-1 border rounded text-center" />
                  <button onClick={() => isCustomValid && generateBatchWords(parsedCustomCount)} disabled={!isCustomValid} className="px-3 py-1 bg-green-500 text-white text-sm rounded disabled:bg-gray-300">
                    {dictionary.generator.apply}
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {generatedWords.map((word, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:shadow-md transition-shadow">
                <div className="text-2xl font-bold text-gray-800 mb-3">{word.word}</div>
                <div className="flex justify-center gap-2 text-[10px] text-gray-400 uppercase tracking-tighter">
                  <span className="bg-gray-50 px-2 py-0.5 rounded border border-gray-100">{difficultiesLabel[word.difficulty as keyof typeof difficultiesLabel] ?? word.difficulty}</span>
                  <span className="bg-gray-50 px-2 py-0.5 rounded border border-gray-100">{categoriesLabel[word.category as keyof typeof categoriesLabel] ?? word.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="text-center mb-6">
        <button onClick={handleGenerateClick} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-10 rounded-xl shadow-lg shadow-blue-200 transition-all active:scale-95">
          {t('generator.generateButton', { count: displayCount })}
        </button>
      </div>

      <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-800 mb-4">{dictionary.generator.howToPlayHeading}</h2>
        <ul className="text-gray-600 space-y-3">
          {dictionary.generator.howToPlaySteps.map((step, idx) => (
            <li key={idx} className="flex gap-2">
              <span className="text-blue-500 font-bold">{idx + 1}.</span>
              <span>{step}</span>
            </li>
          ))}
        </ul>
      </div>

      <UpgradeModal
        isOpen={isUpgradeModalOpen}
        onClose={() => setIsUpgradeModalOpen(false)}
        dictionary={dictionary.pricing.upgrade}
        paymentUnderDevelopment={dictionary.pricing.paymentUnderDevelopment}
      />
    </div>
  );
}
