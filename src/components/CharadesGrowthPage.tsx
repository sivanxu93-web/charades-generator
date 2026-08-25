import Link from "next/link";
import { Fragment } from "react";
import FlatGeneratorPageLayout from "@/components/FlatGeneratorPageLayout";
import CharadesGeneratorOptimized from "@/components/CharadesGeneratorOptimized";
import { getDictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";
import type { Stage2PageContent } from "@/data/stage2-growth-pages";
import { buildLocalePath } from "@/utils/localePaths";
import { buildCanonicalUrl } from "@/utils/seo";
import { pickWords } from "@/utils/charades";

interface CharadesGrowthPageProps {
  locale: Locale;
  content: Stage2PageContent;
  category: string;
}

export default function CharadesGrowthPage({ locale, content, category }: CharadesGrowthPageProps) {
  const dictionary = getDictionary(locale);
  const homeLabel = dictionary.navigation.items.find((item) => item.key === "home")?.title ?? "Home";
  const canonicalUrl = buildCanonicalUrl(locale, content.path);
  const initialWords = pickWords(category, "medium", "all", 3, locale);

  return (
    <FlatGeneratorPageLayout
      locale={locale}
      dictionary={dictionary}
      canonicalPath={content.path}
      breadcrumbs={[
        { name: homeLabel, url: buildCanonicalUrl(locale, "/") },
        { name: content.heroTitle, url: canonicalUrl },
      ]}
      structuredDataName={content.heroTitle}
      structuredDataDescription={content.description}
      structuredDataType="WebApplication"
      structuredDataCategory="Party Games"
      faq={content.faq}
      themeColorClass="bg-gray-50"
    >
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
          {content.heroLabel}
        </p>
        <h1 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl leading-tight">
          {content.heroTitle}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-gray-600">
          {content.heroDescription}
        </p>
      </div>

      <div id="generator" className="mb-8">
        <CharadesGeneratorOptimized
          title={content.generatorTitle}
          description={content.generatorDescription}
          headingLevel="h2"
          defaultCategory={category}
          defaultDifficulty="medium"
          defaultAgeGroup="all"
          hideCategoryFilter={true}
          initialWords={initialWords}
        />
      </div>

      {content.sections.map((section) => (
        <Fragment key={section.id}>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-2">{section.title}</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">{section.description}</p>
          <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-8">
            {section.items.map((item) => (
              <li key={item} className="rounded-lg border border-gray-150 bg-gray-50 p-4 text-sm leading-relaxed text-gray-700 shadow-sm">
                {item}
              </li>
            ))}
          </ul>
        </Fragment>
      ))}

      {/* Imposter Game Premium CTA Banner */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-6 md:p-8 text-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 mb-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">
              {locale === "es" ? "🧩 ¿Jugando con un grupo grande? ¡Prueba el Juego del Impostor!" : "🧩 Playing with a large group? Try the Imposter Game!"}
            </h3>
            <p className="mt-2 text-sm text-indigo-100 leading-relaxed max-w-2xl">
              {locale === "es" 
                ? "¿Cansado de las charadas tradicionales? Reúne a tus amigos y entra en nuestro juego web multijugador. ¡Crea una sala en 10 segundos, escanea el código QR y jueguen gratis desde sus teléfonos!" 
                : "Tired of regular charades? Gather your friends and jump into our multiplayer web game. Setup a room in 10 seconds, scan QR to join, and play directly on your phones!"}
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link
              href={buildLocalePath(locale, "/imposter-game/")}
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-indigo-700 hover:bg-indigo-50 hover:scale-105 active:scale-95 transition-all shadow-md"
            >
              {locale === "es" ? "Jugar al Impostor Gratis →" : "Play Imposter Game Free →"}
            </Link>
          </div>
        </div>
      </div>

      <h2 id="related-games" className="text-2xl font-bold text-gray-900 mt-12 mb-3">{content.relatedTitle}</h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 mb-8">
        {content.relatedLinks.map((link) => (
          <Link
            key={`${link.href}:${link.label}`}
            href={buildLocalePath(locale, link.href)}
            className="rounded-xl border border-blue-100 bg-blue-50/50 p-5 hover:bg-blue-50 hover:border-blue-200 transition shadow-sm"
          >
            <span className="block font-semibold text-gray-900 text-base">{link.label}</span>
            <span className="mt-1 block text-sm leading-relaxed text-gray-600">{link.description}</span>
          </Link>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">{content.faqTitle}</h2>
      <div className="space-y-4 mb-8">
        {content.faq.map((item) => (
          <div key={item.question} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-2">{item.question}</h3>
            <p className="text-gray-600 leading-relaxed text-sm">{item.answer}</p>
          </div>
        ))}
      </div>
    </FlatGeneratorPageLayout>
  );
}
