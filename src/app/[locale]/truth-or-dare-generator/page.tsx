import type { Metadata } from "next";
import Stage2GrowthPage from "@/components/Stage2GrowthPage";
import { stage2Pages } from "@/data/stage2-growth-pages";
import { SUPPORTED_LOCALES, type Locale } from "@/i18n/config";
import { BASE_URL, buildAlternateLanguages, buildCanonicalUrl, getOpenGraphLocale } from "@/utils/seo";

interface PageProps {
  params: Promise<{ locale: string }>;
}

const pageKey = "truth-or-dare-generator";

export async function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const content = stage2Pages[pageKey][locale] ?? stage2Pages[pageKey].en;
  const canonicalUrl = buildCanonicalUrl(locale, content.path);

  return {
    title: content.title,
    description: content.description,
    keywords: content.keywords,
    alternates: {
      canonical: canonicalUrl,
      languages: buildAlternateLanguages(content.path),
    },
    openGraph: {
      title: content.title,
      description: content.description,
      type: "website",
      url: canonicalUrl,
      locale: getOpenGraphLocale(locale),
      images: [
        {
          url: `${BASE_URL}/charades-generator-og.png`,
          width: 1200,
          height: 630,
          alt: content.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: content.title,
      description: content.description,
      images: [`${BASE_URL}/charades-generator-og.png`],
    },
    robots: "index, follow",
  };
}

export default async function TruthOrDareGeneratorPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const content = stage2Pages[pageKey][locale] ?? stage2Pages[pageKey].en;

  return <Stage2GrowthPage locale={locale} content={content} />;
}
