import Link from "next/link";
import BreadcrumbStructuredData from "@/components/BreadcrumbStructuredData";
import CopyTextButton from "@/components/CopyTextButton";
import FAQStructuredData from "@/components/FAQStructuredData";
import Stage2PromptGenerator from "@/components/Stage2PromptGenerator";
import StructuredData from "@/components/StructuredData";
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
    <div className="bg-gray-50">
      <BreadcrumbStructuredData
        items={[
          { name: homeLabel, url: buildCanonicalUrl(locale, "/") },
          { name: content.heroTitle, url: canonicalUrl },
        ]}
      />
      <StructuredData
        type="WebApplication"
        name={content.heroTitle}
        description={content.description}
        url={canonicalUrl}
        category="Party Games"
        locale={locale}
      />
      <FAQStructuredData items={content.faq} />

      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-12">
        <header className="mb-8 rounded-lg border border-blue-100 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
            {content.heroLabel}
          </p>
          <h1 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            {content.heroTitle}
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-600">
            {content.heroDescription}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="#generator"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
            >
              {content.primaryCta}
            </a>
            <a
              href="#related-games"
              className="inline-flex items-center justify-center rounded-md border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-white"
            >
              {content.relatedTitle}
            </a>
          </div>
        </header>

        <main className="space-y-8">
          <div id="generator">
            <Stage2PromptGenerator
              title={content.generatorTitle}
              description={content.generatorDescription}
              buttonLabel={content.generatorButton}
              copyLabel={content.copyLabel}
              copiedLabel={content.copiedLabel}
              groups={content.groups}
            />
          </div>

          <section className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{content.promptListTitle}</h2>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {content.generatorDescription}
                </p>
              </div>
              <CopyTextButton
                text={allPromptsText}
                label={content.copyLabel}
                copiedLabel={content.copiedLabel}
                className="inline-flex items-center justify-center rounded-md border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"
              />
            </div>
            <pre className="mt-4 max-h-80 overflow-auto rounded-lg bg-gray-50 p-4 text-sm leading-6 text-gray-700">
              {allPromptsText}
            </pre>
          </section>

          {content.sections.map((section) => (
            <section key={section.id} className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
              <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
              <p className="mt-2 text-sm leading-6 text-gray-600">{section.description}</p>
              <ul className="mt-4 grid gap-3 md:grid-cols-3">
                {section.items.map((item) => (
                  <li key={item} className="rounded-md border border-gray-100 bg-gray-50 p-3 text-sm leading-6 text-gray-700">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <section id="related-games" className="rounded-lg border border-blue-100 bg-blue-50 p-5 sm:p-6">
            <h2 className="text-2xl font-bold text-gray-900">{content.relatedTitle}</h2>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {content.relatedLinks.map((link) => (
                <Link
                  key={`${link.href}:${link.label}`}
                  href={buildLocalePath(locale, link.href)}
                  className="rounded-lg border border-blue-100 bg-white p-4 hover:border-blue-300"
                >
                  <span className="block font-semibold text-gray-900">{link.label}</span>
                  <span className="mt-1 block text-sm leading-6 text-gray-600">{link.description}</span>
                </Link>
              ))}
            </div>
          </section>

          <section className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-2xl font-bold text-gray-900">{content.faqTitle}</h2>
            <div className="mt-5 space-y-5">
              {content.faq.map((item) => (
                <div key={item.question}>
                  <h3 className="font-semibold text-gray-900">{item.question}</h3>
                  <p className="mt-1 text-sm leading-6 text-gray-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
