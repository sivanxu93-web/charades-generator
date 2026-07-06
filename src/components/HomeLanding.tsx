import Link from "next/link";
import CharadesGeneratorOptimized from "@/components/CharadesGeneratorOptimized";
import { buildLocalePath } from "@/utils/localePaths";
import type { CharadesWord } from "@/data/charades-types";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary";
import CommunityPlaybooks from "@/components/CommunityPlaybooks";
import CopyTextButton from "@/components/CopyTextButton";

interface HomeLandingProps {
  initialWords: CharadesWord[];
  dictionary: Dictionary;
  locale: Locale;
}

export default function HomeLanding({ initialWords, dictionary, locale }: HomeLandingProps) {
  const themedGenerators = dictionary.home.themedGenerators;
  const generatorDeepDive = dictionary.home.generatorDeepDive;

  const difference = generatorDeepDive.difference;
  const presets = generatorDeepDive.presets;
  const capabilities = generatorDeepDive.capabilities;
  const faq = generatorDeepDive.faq;
  const playGuides = generatorDeepDive.playGuides;
  const expertInsights = generatorDeepDive.expertInsights;

  return (
    <>
      <CharadesGeneratorOptimized
        initialWords={initialWords}
        isShowScenarios
      />

      <div className="flex flex-col gap-3 sm:flex-row sm:justify-center mt-6 mb-8">
        <Link
          href={buildLocalePath(locale, "/charades-ideas/")}
          className="inline-flex items-center justify-center rounded-md border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-50"
        >
          {dictionary.home.heroShortcuts?.ideasLabel ?? "Browse ideas & word lists"}
        </Link>
        <Link
          href={buildLocalePath(locale, "/how-to-use/")}
          className="inline-flex items-center justify-center rounded-md border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-50"
        >
          {dictionary.home.heroShortcuts?.howToLabel ?? "Learn rules & how to play"}
        </Link>
      </div>

      {dictionary.home?.seoIntro && (
        <>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">{dictionary.home.seoIntro.title}</h2>
          <p className="text-gray-700 leading-relaxed mb-4">{dictionary.home.seoIntro.lead}</p>
          <div className="flex flex-wrap gap-2 text-sm mb-8">
            <Link href={buildLocalePath(locale, "/random-charades-generator/")}
              className="inline-flex items-center rounded-md border border-gray-200 px-2.5 py-1 text-gray-700 hover:bg-gray-50">
              Random
            </Link>
            <Link href={buildLocalePath(locale, "/movie-charades-generator/")}
              className="inline-flex items-center rounded-md border border-gray-200 px-2.5 py-1 text-gray-700 hover:bg-gray-50">
              Movies
            </Link>
            <Link href={buildLocalePath(locale, "/disney-charades-generator/")}
              className="inline-flex items-center rounded-md border border-gray-200 px-2.5 py-1 text-gray-700 hover:bg-gray-50">
              Disney
            </Link>
            <Link href={buildLocalePath(locale, "/charades-generator-for-kids/")}
              className="inline-flex items-center rounded-md border border-gray-200 px-2.5 py-1 text-gray-700 hover:bg-gray-50">
              Kids
            </Link>
            <Link href={buildLocalePath(locale, "/reverse-charades-game/")}
              className="inline-flex items-center rounded-md border border-gray-200 px-2.5 py-1 text-gray-700 hover:bg-gray-50">
              Reverse
            </Link>
            <Link
              href={buildLocalePath(locale, "/imposter-game/")}
              className="inline-flex items-center rounded-md border border-gray-200 px-2.5 py-1 text-gray-700 hover:bg-gray-50"
            >
              Imposter game
            </Link>
          </div>
        </>
      )}

      {dictionary.home.rulesAndLists && (
        <>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">
            {dictionary.home.rulesAndLists.rulesTitle}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {dictionary.home.rulesAndLists.rulesDescription}
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-6">
            {dictionary.home.rulesAndLists.rulesSteps.map((step: string) => (
              <li key={step} className="text-sm leading-relaxed">{step}</li>
            ))}
          </ol>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">
            {dictionary.home.rulesAndLists.gesturesTitle}
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            {dictionary.home.rulesAndLists.gesturesDescription}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {dictionary.home.rulesAndLists.gestures.map((g: { sign: string; action: string }) => (
              <div key={g.sign} className="bg-white border border-gray-150 p-4 rounded-xl shadow-sm flex flex-col justify-center">
                <span className="font-bold text-indigo-700 text-sm mb-1">{g.sign}</span>
                <span className="text-gray-600 text-xs leading-relaxed">{g.action}</span>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">
            {dictionary.home.rulesAndLists.quickListTitle}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {dictionary.home.rulesAndLists.quickListDescription}
          </p>
          
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                {dictionary.home.rulesAndLists.quickWords.length} Popular Words:
              </span>
              <CopyTextButton
                text={dictionary.home.rulesAndLists.quickWords.join("\n")}
                label={dictionary.home.rulesAndLists.copyButton}
                copiedLabel={dictionary.home.rulesAndLists.copiedButton}
                className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-3 py-1.5 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors shadow-sm"
              />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {dictionary.home.rulesAndLists.quickWords.map((word: string) => (
                <div key={word} className="bg-white border border-gray-100 px-3 py-2 rounded-lg text-center text-xs font-medium text-gray-800 shadow-sm">
                  {word}
                </div>
              ))}
            </div>
          </div>

          {dictionary.home.siloDirectory && (
            <>
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                {dictionary.home.siloDirectory.title}
              </h2>
              <p className="text-gray-600 mb-6">
                {dictionary.home.siloDirectory.description}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {dictionary.home.siloDirectory.links.map((link: { href: string; anchor: string }) => (
                  <Link 
                    key={link.href}
                    href={buildLocalePath(locale, link.href)} 
                    className="p-4 rounded-xl border border-gray-200 bg-white hover:border-blue-500 hover:shadow-md transition text-center flex flex-col justify-center min-h-[90px]"
                  >
                    <span className="font-semibold text-sm text-gray-900">
                      {link.anchor}
                    </span>
                  </Link>
                ))}
              </div>
            </>
          )}
        </>
      )}

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{difference.title}</h2>
      <p className="text-gray-600 mb-4">{difference.lead}</p>
      <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
        {difference.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      <p className="text-gray-600 mb-8">
        {difference.footer.before}{" "}
        <Link
          href={buildLocalePath(locale, difference.footer.href)}
          className="text-indigo-600 hover:text-indigo-800 underline"
        >
          {difference.footer.linkText}
        </Link>{" "}
        {difference.footer.after}
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{presets.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        {presets.items.map((preset) => (
          <div key={preset.title} className="bg-white rounded-xl border border-indigo-100 p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-indigo-700 mb-2">{preset.title}</h3>
            <p className="text-sm text-gray-700 mb-2">{preset.description}</p>
            <p className="text-xs uppercase tracking-wider text-indigo-500 font-semibold">{preset.note}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">{capabilities.title}</h2>
      <p className="text-gray-600 mb-5">{capabilities.description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {capabilities.items.map((item) => (
          <div key={item.title} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
            <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-6">{faq.title}</h2>
      <div className="space-y-4 mb-8">
        {faq.items.map((item) => (
          <div key={item.question} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-800 mb-2">{item.question}</h3>
            <p className="text-gray-600">{item.answer}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-2">{dictionary.home.themedHeading}</h2>
      <p className="text-gray-600 mb-6">{dictionary.home.themedDescription}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
        {themedGenerators.map((item) => (
          <Link
            key={item.href}
            href={buildLocalePath(locale, item.href)}
            className="group relative flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <span className="inline-flex w-fit items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-700">
              {item.badge}
            </span>
            <h3 className="mt-4 text-xl font-semibold text-gray-900 group-hover:text-blue-700">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-gray-600 flex-1">{item.description}</p>
            <span className="mt-4 inline-flex items-center text-sm font-semibold text-blue-600">
              {dictionary.home.browsePromptsLabel}
              <svg
                className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        ))}
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-2">{dictionary.home.guidesHeading}</h2>
      <p className="text-gray-600 mb-6">{dictionary.home.guidesDescription}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        {playGuides.items.map((resource) => (
          <Link
            key={resource.href}
            href={buildLocalePath(locale, resource.href)}
            className="group flex h-full flex-col rounded-xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-700">{resource.title}</h3>
            <p className="mt-2 text-sm text-gray-600 flex-1">{resource.description}</p>
            <span className="mt-4 inline-flex items-center text-sm font-semibold text-green-600">
              {dictionary.home.readMoreLabel}
              <svg
                className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        ))}
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-2">{expertInsights.title}</h2>
      <p className="text-gray-600 mb-6">{expertInsights.description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {expertInsights.items.map((item, idx) => (
          <article key={idx} className="rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
            <p className="text-sm text-gray-600 italic">“{item.quote}”</p>
            <h4 className="mt-4 text-sm font-semibold uppercase tracking-wide text-gray-800">
              {item.author} — {item.role}
            </h4>
          </article>
        ))}
      </div>
      <div className="flex flex-col gap-4 rounded-2xl border border-indigo-200 bg-indigo-50 p-6 sm:flex-row sm:items-center sm:justify-between mb-10">
        <div>
          <h3 className="text-lg font-semibold text-indigo-900">{expertInsights.shareTitle}</h3>
          <p className="mt-1 text-sm text-indigo-800">{expertInsights.shareDescription}</p>
        </div>
        <Link
          href={buildLocalePath(locale, expertInsights.shareHref)}
          className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
        >
          {expertInsights.shareCta}
        </Link>
      </div>

      {dictionary.home.communityPlaybooks && (
        <CommunityPlaybooks
          locale={locale}
          playbooks={dictionary.home.communityPlaybooks}
          fallbackShareCta={expertInsights.shareCta}
        />
      )}
    </>
  );
}
