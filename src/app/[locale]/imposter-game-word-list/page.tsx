import { Metadata } from "next";
import Link from "next/link";
import { getDictionary } from "@/i18n/dictionary";
import { SUPPORTED_LOCALES, type Locale } from "@/i18n/config";
import { buildCanonicalUrl, buildAlternateLanguages } from "@/utils/seo";
import BreadcrumbStructuredData from "@/components/BreadcrumbStructuredData";
import { IMPOSTER_PACKS, IMPOSTER_PACK_IDS } from "@/data/imposter-packs";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const locale = params.locale as Locale;
  const dictionary = getDictionary(locale);
  const canonicalUrl = buildCanonicalUrl(locale, "/imposter-game-word-list/");

  return {
    title: dictionary.imposterWords.title,
    description: dictionary.imposterWords.description,
    alternates: {
      canonical: canonicalUrl,
      languages: buildAlternateLanguages("/imposter-game-word-list/"),
    },
    openGraph: {
      title: dictionary.imposterWords.title,
      description: dictionary.imposterWords.description,
      url: canonicalUrl,
      type: "website",
    },
  };
}

export default async function ImposterWordListPage(props: Props) {
  const params = await props.params;
  const locale = params.locale as Locale;
  const dictionary = getDictionary(locale);
  const canonicalUrl = buildCanonicalUrl(locale, "/imposter-game-word-list/");

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <BreadcrumbStructuredData
        items={[
          { name: dictionary.navigation.items.find(i => i.key === "home")?.title || "Home", url: buildCanonicalUrl(locale, "/") },
          { name: dictionary.seo.imposter.title, url: buildCanonicalUrl(locale, "/imposter-game/") },
          { name: dictionary.imposterWords.heading, url: canonicalUrl },
        ]}
      />

      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          {dictionary.imposterWords.heading}
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {dictionary.imposterWords.lead}
        </p>
      </div>

      <div className="space-y-12">
        {IMPOSTER_PACK_IDS.map((packId) => {
          const pack = IMPOSTER_PACKS[packId];
          return (
            <section key={packId} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-indigo-600 px-6 py-4 flex justify-between items-center">
                <h2 className="text-xl font-bold text-white">
                  {pack.label[locale] || pack.label.en}
                </h2>
                <Link
                  href={`/${locale}/imposter-game?pack=${packId}`}
                  className="text-sm font-medium bg-white/20 hover:bg-white/30 text-white px-4 py-1.5 rounded-full transition-colors"
                >
                  {dictionary.imposterWords.cta}
                </Link>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {pack.pairs.map((pair, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100 group hover:border-indigo-200 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-lg text-sm font-bold">
                          {idx + 1}
                        </span>
                        <div className="flex flex-col">
                          <span className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Pair</span>
                          <span className="text-gray-900 font-medium">{pair.main} vs {pair.imposter}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <div className="mt-16 bg-indigo-50 rounded-3xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Ready to Play with These Words?
        </h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Don't waste time on paper and pens. Open an online room, share the QR code, and let our generator assign these secret roles and words automatically.
        </p>
        <Link
          href={`/${locale}/imposter-game`}
          className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-2xl text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all transform hover:scale-105 shadow-lg"
        >
          {dictionary.pages.imposterGame.hostButton}
        </Link>
      </div>
    </div>
  );
}
