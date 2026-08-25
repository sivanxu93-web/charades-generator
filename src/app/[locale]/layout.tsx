import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { LocaleProvider } from "@/contexts/LocaleContext";
import { isLocale, SUPPORTED_LOCALES, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    notFound();
  }
  const locale = localeParam as Locale;
  const dictionary = getDictionary(locale);

  return (
    <LocaleProvider initialLocale={locale}>
      <Navigation locale={locale} items={dictionary.navigation.items} />
      <main className="min-h-screen bg-gray-50">{children}</main>
      <Footer locale={locale} footer={dictionary.footer} />
    </LocaleProvider>
  );
}
