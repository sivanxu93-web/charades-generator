import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary";
import Sidebar from "@/components/Sidebar";
import BreadcrumbStructuredData from "@/components/BreadcrumbStructuredData";
import StructuredData from "@/components/StructuredData";
import FAQStructuredData from "@/components/FAQStructuredData";
import { buildCanonicalUrl } from "@/utils/seo";

interface FlatGeneratorPageLayoutProps {
  locale: Locale;
  dictionary: Dictionary;
  canonicalPath: string;
  breadcrumbs: Array<{ name: string; url: string }>;
  structuredDataName: string;
  structuredDataDescription: string;
  structuredDataType?: "WebApplication" | "Game" | "Article";
  structuredDataCategory?: string;
  faq?: Array<{ question: string; answer: string }>;
  themeColorClass?: string; // Standardized background colors, e.g. bg-gray-50, bg-emerald-50
  children: React.ReactNode;
}

export default function FlatGeneratorPageLayout({
  locale,
  canonicalPath,
  breadcrumbs,
  structuredDataName,
  structuredDataDescription,
  structuredDataType = "WebApplication",
  structuredDataCategory = "Party Games",
  faq,
  themeColorClass = "bg-gray-50",
  children,
}: FlatGeneratorPageLayoutProps) {
  const canonicalUrl = buildCanonicalUrl(locale, canonicalPath);

  return (
    <div className={`${themeColorClass} min-h-screen`}>
      {/* SEO Structured Data */}
      <BreadcrumbStructuredData items={breadcrumbs} />
      <StructuredData
        type={structuredDataType}
        name={structuredDataName}
        description={structuredDataDescription}
        url={canonicalUrl}
        category={structuredDataCategory}
        locale={locale}
      />
      {faq && faq.length > 0 && <FAQStructuredData items={faq} />}

      {/* Main page skeleton */}
      <div className="max-w-[1500px] mx-auto px-6 py-6 lg:py-10 flex flex-col lg:flex-row gap-8 items-start justify-center">
        {/* Spacer for centering */}
        <div className="hidden xl:block w-[300px] xl:w-[320px] shrink-0 pointer-events-none" aria-hidden="true" />
        
        {/* Main flat content article */}
        <article className="entry-content post-content flex-grow max-w-4xl w-full">
          {children}
        </article>

        {/* Sidebar */}
        <Sidebar />
      </div>
    </div>
  );
}
