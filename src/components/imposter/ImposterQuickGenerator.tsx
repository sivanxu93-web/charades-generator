"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";
import { IMPOSTER_PACKS, IMPOSTER_PACK_IDS, type ImposterPackId, type ImposterWordPair } from "@/data/imposter-packs";
import { buildLocalePath } from "@/utils/localePaths";
import { trackEvent } from "@/lib/analytics";

const LOCALIZED = {
  en: {
    title: "Instant Word Pair Generator",
    subtitle: "Need offline prompts? Choose a category and generate a secret word pair instantly. Perfect for party hosts!",
    generateBtn: "Generate Next Pair",
    crewLabel: "Crew Word (Most players)",
    imposterLabel: "Imposter Word (1-2 players)",
    revealBtn: "Click to Reveal",
    hideBtn: "Click to Hide",
    playOnline: "Create Online Room 🔗",
    playPass: "Pass & Play on this Phone 📱",
    copied: "Copied!",
    copyPair: "Copy Pair 📋",
    hintText: "Tip: The Imposter word is similar but different. Perfect for offline hosting!",
  },
  es: {
    title: "Generador de Palabras Instantáneo",
    subtitle: "¿Necesitas ideas para jugar? Elige una categoría y genera una pareja en segundos. ¡Ideal para anfitriones!",
    generateBtn: "Generar Siguiente Pareja",
    crewLabel: "Palabra del Grupo (La mayoría)",
    imposterLabel: "Palabra del Impostor (1-2 personas)",
    revealBtn: "Revelar Palabra",
    hideBtn: "Ocultar Palabra",
    playOnline: "Crear Sala Online 🔗",
    playPass: "Pasar y Jugar en este Móvil 📱",
    copied: "¡Copiado!",
    copyPair: "Copiar Pareja 📋",
    hintText: "Consejo: La palabra del impostor es parecida pero distinta. ¡Ideal para jugar en papel!",
  },
};

export default function ImposterQuickGenerator() {
  const { locale } = useLocale();
  const t = LOCALIZED[locale] || LOCALIZED.en;

  const [activePackId, setActivePackId] = useState<ImposterPackId>("everyday");
  const [isRevealed, setIsRevealed] = useState(false);
  const [copied, setCopied] = useState(false);
  const [animate, setAnimate] = useState(false);

  // ==========================================
  // LOCAL STORAGE DUP-PREVENTION
  // ==========================================
  const getSeenPairs = useCallback((): string[] => {
    if (typeof window === "undefined") return [];
    try {
      const stored = window.localStorage.getItem("imposter-seen-pairs");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  }, []);

  const saveSeenPair = useCallback((mainWord: string) => {
    if (typeof window === "undefined") return;
    try {
      const seen = getSeenPairs();
      if (!seen.includes(mainWord)) {
        seen.push(mainWord);
        if (seen.length > 30) seen.shift(); // Cap size
        window.localStorage.setItem("imposter-seen-pairs", JSON.stringify(seen));
      }
    } catch {
      // ignore
    }
  }, [getSeenPairs]);

  const pack = useMemo(() => IMPOSTER_PACKS[activePackId], [activePackId]);

  const selectNextPair = useCallback(() => {
    if (!pack || !pack.pairs.length) return { main: "", imposter: "" };
    const seen = getSeenPairs();
    const unseenPairs = pack.pairs.filter((pair) => !seen.includes(pair.main));
    
    let chosenPair: ImposterWordPair;
    if (unseenPairs.length > 0) {
      chosenPair = unseenPairs[Math.floor(Math.random() * unseenPairs.length)];
    } else {
      if (typeof window !== "undefined") {
        window.localStorage.removeItem("imposter-seen-pairs");
      }
      chosenPair = pack.pairs[Math.floor(Math.random() * pack.pairs.length)];
    }
    
    saveSeenPair(chosenPair.main);
    return chosenPair;
  }, [pack, getSeenPairs, saveSeenPair]);

  const [currentPair, setCurrentPair] = useState<ImposterWordPair>({ main: "", imposter: "" });

  // Initialize first pair
  useEffect(() => {
    if (pack && pack.pairs.length > 0 && currentPair.main === "") {
      setCurrentPair(selectNextPair());
    }
  }, [pack, currentPair.main, selectNextPair]);

  const handleGenerate = () => {
    setAnimate(true);
    setCurrentPair(selectNextPair());
    setIsRevealed(false);
    trackEvent("imposter_quick_generator_click", {
      locale,
      packId: activePackId,
    });
    setTimeout(() => setAnimate(false), 300);
  };

  const handlePackChange = (packId: ImposterPackId) => {
    setActivePackId(packId);
    setIsRevealed(false);
    const newPack = IMPOSTER_PACKS[packId];
    if (newPack && newPack.pairs.length > 0) {
      const seen = getSeenPairs();
      const unseen = newPack.pairs.filter((pair) => !seen.includes(pair.main));
      const pair = unseen.length > 0 
        ? unseen[Math.floor(Math.random() * unseen.length)] 
        : newPack.pairs[Math.floor(Math.random() * newPack.pairs.length)];
      setCurrentPair(pair);
      saveSeenPair(pair.main);
    }
    trackEvent("imposter_quick_generator_pack_change", {
      locale,
      packId,
    });
  };

  const handleCopyPair = async () => {
    if (typeof navigator === "undefined" || !navigator.clipboard) return;
    const textToCopy = `${currentPair.main} vs ${currentPair.imposter}`;
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      trackEvent("imposter_quick_generator_copy", { locale });
    } catch {
      // ignore
    }
  };

  return (
    <section className="bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-8 shadow-2xl relative overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-72 h-72 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        {/* Header */}
        <div className="mb-6 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            Quick Tool
          </div>
          <h2 className="text-2xl font-extrabold text-slate-100 tracking-tight">
            {t.title}
          </h2>
          <p className="text-slate-400 text-sm mt-1 max-w-xl">
            {t.subtitle}
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="mb-6 flex flex-wrap gap-2 justify-center sm:justify-start">
          {IMPOSTER_PACK_IDS.map((packId) => {
            const isActive = packId === activePackId;
            const packLabel = IMPOSTER_PACKS[packId].label[locale] || IMPOSTER_PACKS[packId].label.en;
            return (
              <button
                key={packId}
                type="button"
                onClick={() => handlePackChange(packId)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20 scale-105"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-slate-100"
                }`}
              >
                {packLabel}
              </button>
            );
          })}
        </div>

        {/* Generator Main Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* Crew Word Card */}
          <div className="bg-slate-950/60 border border-slate-800/80 rounded-2xl p-5 flex flex-col justify-between min-h-[120px] transition-all hover:border-cyan-500/30">
            <div>
              <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest block mb-2">
                {t.crewLabel}
              </span>
              <p className={`text-2xl font-extrabold text-slate-50 transition-all duration-300 ${animate ? "opacity-40 scale-95" : "opacity-100 scale-100"}`}>
                {currentPair.main}
              </p>
            </div>
            <span className="text-[10px] text-slate-500 mt-2 block">
              Common word
            </span>
          </div>

          {/* Imposter Word Card */}
          <div className="bg-slate-950/60 border border-slate-800/80 rounded-2xl p-5 flex flex-col justify-between min-h-[120px] relative overflow-hidden transition-all hover:border-rose-500/30">
            <div>
              <span className="text-[10px] font-bold text-rose-400 uppercase tracking-widest block mb-2">
                {t.imposterLabel}
              </span>
              
              <div className="relative">
                <p
                  className={`text-2xl font-extrabold text-slate-50 select-none transition-all duration-300 ${
                    isRevealed ? "filter-none opacity-100 scale-100" : "blur-md opacity-20 scale-95 pointer-events-none"
                  } ${animate ? "opacity-0" : ""}`}
                >
                  {currentPair.imposter}
                </p>

                {!isRevealed && (
                  <div className="absolute inset-0 flex items-center justify-start">
                    <span className="text-xs font-semibold text-rose-300 bg-rose-500/10 border border-rose-500/20 px-2.5 py-1 rounded-lg">
                      Hidden
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between z-10">
              <button
                type="button"
                onClick={() => setIsRevealed(!isRevealed)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  isRevealed
                    ? "bg-slate-800 hover:bg-slate-700 text-slate-300"
                    : "bg-rose-600 hover:bg-rose-500 text-white shadow-md shadow-rose-900/20"
                }`}
              >
                {isRevealed ? t.hideBtn : t.revealBtn}
              </button>
            </div>
          </div>
        </div>

        {/* Generate & Call To Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800/60">
          <div className="flex flex-wrap gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={handleGenerate}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-900/40 transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
            >
              <svg
                className={`w-4 h-4 transition-transform duration-500 ${animate ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 8H18.5"
                />
              </svg>
              {t.generateBtn}
            </button>
            <button
              type="button"
              onClick={handleCopyPair}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/40 hover:bg-slate-850 px-4 py-3 text-sm font-semibold text-slate-200 hover:text-white transition-all w-full sm:w-auto"
            >
              {copied ? t.copied : t.copyPair}
            </button>
          </div>

          <div className="flex flex-wrap gap-2 w-full sm:w-auto justify-end">
            <Link
              href={buildLocalePath(locale, "/imposter-game/play/")}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-800/40 text-xs font-bold text-slate-300 hover:bg-slate-800 hover:text-slate-100 transition-colors text-center"
            >
              {t.playOnline}
            </Link>
            <Link
              href={buildLocalePath(locale, "/imposter-game/play/?mode=pass")}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-800/40 text-xs font-bold text-slate-300 hover:bg-slate-800 hover:text-slate-100 transition-colors text-center"
            >
              {t.playPass}
            </Link>
          </div>
        </div>

        <p className="mt-4 text-[10px] text-slate-500 text-center sm:text-left">
          {t.hintText}
        </p>
      </div>
    </section>
  );
}
