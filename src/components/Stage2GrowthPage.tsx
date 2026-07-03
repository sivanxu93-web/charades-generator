import Link from "next/link";
import { Fragment } from "react";
import FlatGeneratorPageLayout from "@/components/FlatGeneratorPageLayout";
import CopyTextButton from "@/components/CopyTextButton";
import Stage2PromptGenerator from "@/components/Stage2PromptGenerator";
import { getDictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";
import type { Stage2PageContent } from "@/data/stage2-growth-pages";
import { buildLocalePath } from "@/utils/localePaths";
import { buildCanonicalUrl } from "@/utils/seo";

interface Stage2GrowthPageProps {
  locale: Locale;
  content: Stage2PageContent;
}

export default function Stage2GrowthPage({ locale, content }: Stage2GrowthPageProps) {
  const dictionary = getDictionary(locale);
  const homeLabel = dictionary.navigation.items.find((item) => item.key === "home")?.title ?? "Home";
  const canonicalUrl = buildCanonicalUrl(locale, content.path);
  const allPromptsText = content.groups
    .map((group) => [group.label, ...group.prompts].join("\n"))
    .join("\n\n");

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
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href="#generator"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700 shadow-sm"
          >
            {content.primaryCta}
          </a>
          <a
            href="#related-games"
            className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-colors shadow-sm"
          >
            {content.relatedTitle}
          </a>
        </div>
      </div>

      <div id="generator" className="mb-8">
        <Stage2PromptGenerator
          title={content.generatorTitle}
          description={content.generatorDescription}
          buttonLabel={content.generatorButton}
          copyLabel={content.copyLabel}
          copiedLabel={content.copiedLabel}
          groups={content.groups}
        />
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">{content.promptListTitle}</h2>
      <p className="text-gray-600 mb-4 leading-relaxed">{content.generatorDescription}</p>
      
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-4">
        <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{content.copyLabel}:</span>
        <CopyTextButton
          text={allPromptsText}
          label={content.copyLabel}
          copiedLabel={content.copiedLabel}
          className="inline-flex items-center justify-center rounded-md border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"
        />
      </div>
      <pre className="max-h-80 overflow-auto rounded-lg bg-gray-50 border border-gray-200 p-4 text-sm leading-6 text-gray-750 mb-8">
        {allPromptsText}
      </pre>

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
