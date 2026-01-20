import HomeLanding from "@/components/HomeLanding";
import StructuredData from "@/components/StructuredData";
import FAQStructuredData from "@/components/FAQStructuredData";
import WebsiteStructuredData from "@/components/WebsiteStructuredData";
import SiteLinksStructuredData from "@/components/SiteLinksStructuredData";
import { Metadata } from "next";
import { pickWords } from "@/utils/charades";
import { getDictionary } from "@/i18n/dictionary";
import { SUPPORTED_LOCALES, type Locale } from "@/i18n/config";
import { BASE_URL, buildAlternateLanguages, buildCanonicalUrl, getOpenGraphLocale } from "@/utils/seo";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const dictionary = getDictionary(locale);

  const canonicalPath = "/";
  const canonicalUrl = buildCanonicalUrl(locale, canonicalPath);
  const alternateLanguages = buildAlternateLanguages(canonicalPath);

  const title = locale === "es"
    ? "Generador de Charadas y Palabras Aleatorias - Jugar Online"
    : "Charades Generator & Random Word Tool - Play Online (No Login)";
  
  const description = locale === "es"
    ? "El mejor generador de palabras para Charadas, Pictionary y juegos en grupo. Más de 1000 palabras divertidas y difíciles. ¡Sin descargar nada!"
    : "The best random word generator for Charades, Pictionary, and Catchphrase. Get 1000+ funny, hard, and easy words instantly. No app or login needed!";

  return {
    title,
    description,
    keywords: dictionary.seo.home.keywords,
    alternates: {
      canonical: canonicalUrl,
      languages: alternateLanguages,
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: canonicalUrl,
      locale: getOpenGraphLocale(locale),
      images: [
        {
          url: `${BASE_URL}/charades-generator-og.png`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${BASE_URL}/charades-generator-og.png`],
    },
    robots: "index, follow",
  };
}

export default async function Home({ params }: PageProps) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const dictionary = getDictionary(locale);
  const initialWords = pickWords("all", "all", "all", 3, locale);

  const canonicalPath = "/";
  const canonicalUrl = buildCanonicalUrl(locale, canonicalPath);

  return (
    <div className="bg-gray-50 min-h-screen">
      <HomeLanding initialWords={initialWords} dictionary={dictionary} locale={locale} />

      <WebsiteStructuredData locale={locale} dictionary={dictionary} />
      <SiteLinksStructuredData locale={locale} dictionary={dictionary} />
      <StructuredData
        type="WebApplication"
        name={dictionary.seo.home.structuredDataName}
        description={dictionary.seo.home.structuredDataDescription}
        url={canonicalUrl}
        category="Party Games"
        locale={locale}
      />
      <FAQStructuredData items={dictionary.home.generatorDeepDive.faq.items ?? []} />
    </div>
  );
}
