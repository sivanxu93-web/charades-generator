import { Metadata } from "next";
import { getDictionary } from "@/i18n/dictionary";
import { SUPPORTED_LOCALES, type Locale } from "@/i18n/config";
import { BASE_URL, buildAlternateLanguages, buildCanonicalUrl, getOpenGraphLocale } from "@/utils/seo";
import PricingTable from "@/components/PricingTable";

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

  const canonicalPath = "/pricing";
  const canonicalUrl = buildCanonicalUrl(locale, canonicalPath);

  return {
    title: dictionary.seo.pricing.title,
    description: dictionary.seo.pricing.description,
    keywords: dictionary.seo.pricing.keywords,
    alternates: {
      canonical: canonicalUrl,
      languages: buildAlternateLanguages(canonicalPath),
    },
    openGraph: {
      title: dictionary.seo.pricing.title,
      description: dictionary.seo.pricing.description,
      type: "website",
      url: canonicalUrl,
      locale: getOpenGraphLocale(locale),
      images: [
        {
          url: `${BASE_URL}/charades-generator-og.png`,
          width: 1200,
          height: 630,
          alt: dictionary.seo.pricing.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dictionary.seo.pricing.title,
      description: dictionary.seo.pricing.description,
      images: [`${BASE_URL}/charades-generator-og.png`],
    },
    robots: "index, follow",
  };
}

export default async function PricingPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const dictionary = getDictionary(locale);
  const pricing = dictionary.pricing;

  // SEO Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": dictionary.seo.pricing.structuredDataName,
    "description": dictionary.seo.pricing.structuredDataDescription,
    "offers": pricing.tiers.map(tier => ({
      "@type": "Offer",
      "name": tier.name,
      "price": tier.price.replace('$', ''),
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }))
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            {pricing.heroTitle}
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            {pricing.heroSubtitle}
          </p>
        </div>

        <PricingTable 
          tiers={pricing.tiers} 
        />

        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            {pricing.faqTitle}
          </h2>
          <dl className="space-y-8">
            {pricing.faqs.map((faq) => (
              <div key={faq.question} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <dt className="text-lg font-bold text-gray-900">{faq.question}</dt>
                <dd className="mt-3 text-base text-gray-600 leading-relaxed">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
