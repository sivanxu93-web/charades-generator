import { Metadata } from "next";
import Link from "next/link";
import { getDictionary } from "@/i18n/dictionary";
import { SUPPORTED_LOCALES, type Locale } from "@/i18n/config";
import Sidebar from "@/components/Sidebar";
import { BASE_URL, buildAlternateLanguages, buildCanonicalUrl, getOpenGraphLocale } from "@/utils/seo";
import BreadcrumbStructuredData from "@/components/BreadcrumbStructuredData";
import CopyTextButton from "@/components/CopyTextButton";
import FAQStructuredData from "@/components/FAQStructuredData";
import PrintButton from "@/components/PrintButton";
import StructuredData from "@/components/StructuredData";
import { IMPOSTER_PACKS, IMPOSTER_PACK_IDS } from "@/data/imposter-packs";
import { buildLocalePath } from "@/utils/localePaths";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const locale = params.locale as Locale;
  const copy = imposterWordListContent[locale] ?? imposterWordListContent.en;
  const canonicalUrl = buildCanonicalUrl(locale, "/imposter-game-word-list/");

  return {
    title: copy.title,
    description: copy.description,
    keywords: copy.keywords,
    alternates: {
      canonical: canonicalUrl,
      languages: buildAlternateLanguages("/imposter-game-word-list/"),
    },
    openGraph: {
      title: copy.title,
      description: copy.description,
      url: canonicalUrl,
      type: "website",
      locale: getOpenGraphLocale(locale),
      images: [
        {
          url: `${BASE_URL}/charades-generator-og.png`,
          width: 1200,
          height: 630,
          alt: copy.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.title,
      description: copy.description,
      images: [`${BASE_URL}/charades-generator-og.png`],
    },
    robots: "index, follow",
  };
}

export default async function ImposterWordListPage(props: Props) {
  const params = await props.params;
  const locale = params.locale as Locale;
  const dictionary = getDictionary(locale);
  const copy = imposterWordListContent[locale] ?? imposterWordListContent.en;
  const canonicalUrl = buildCanonicalUrl(locale, "/imposter-game-word-list/");
  const allPairsText = IMPOSTER_PACK_IDS.flatMap((packId) => {
    const pack = IMPOSTER_PACKS[packId];
    return [
      pack.label[locale] || pack.label.en,
      ...pack.pairs.map((pair) => `${pair.main} vs ${pair.imposter}`),
    ];
  }).join("\n");

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-[1500px] mx-auto px-6 py-6 lg:py-10 flex flex-col lg:flex-row gap-8 items-start justify-center">
        <div className="hidden xl:block w-[300px] xl:w-[320px] shrink-0 pointer-events-none" aria-hidden="true" />
        <article className="entry-content post-content flex-grow max-w-4xl w-full p-6 bg-white rounded-lg shadow-sm">
          <BreadcrumbStructuredData
        items={[
          { name: dictionary.navigation.items.find(i => i.key === "home")?.title || "Home", url: buildCanonicalUrl(locale, "/") },
          { name: dictionary.seo.imposter.title, url: buildCanonicalUrl(locale, "/imposter-game/") },
          { name: copy.heading, url: canonicalUrl },
        ]}
      />

      <StructuredData
        type="Article"
        name={copy.heading}
        description={copy.description}
        url={canonicalUrl}
        category="Party Games"
        locale={locale}
      />
      <FAQStructuredData items={copy.faq} />

      <div className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          {copy.heading}
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {copy.lead}
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={buildLocalePath(locale, "/imposter-game/play/")}
            className="inline-flex w-full items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 text-base font-bold text-white shadow-sm hover:bg-indigo-700 sm:w-auto"
          >
            {copy.primaryCta}
          </Link>
          <CopyTextButton
            text={allPairsText}
            label={copy.copyAll}
            copiedLabel={copy.copied}
            className="inline-flex w-full items-center justify-center rounded-xl border border-indigo-200 px-6 py-3 text-base font-bold text-indigo-700 hover:bg-indigo-50 sm:w-auto"
          />
          <PrintButton
            label={copy.print}
            className="inline-flex w-full items-center justify-center rounded-xl border border-gray-300 px-6 py-3 text-base font-bold text-gray-700 hover:bg-gray-50 sm:w-auto"
          />
        </div>
      </div>

      <section className="mb-10 rounded-2xl border border-indigo-100 bg-indigo-50 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">{copy.howToUseTitle}</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {copy.howToUseSteps.map((step, index) => (
            <div key={step} className="rounded-xl bg-white p-4 shadow-sm">
              <span className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">
                {index + 1}
              </span>
              <p className="text-sm text-gray-700">{step}</p>
            </div>
          ))}
        </div>
      </section>

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
                  href={buildLocalePath(locale, `/imposter-game/?pack=${packId}`)}
                  className="text-sm font-medium bg-white/20 hover:bg-white/30 text-white px-4 py-1.5 rounded-full transition-colors"
                >
                  {copy.packCta}
                </Link>
              </div>
              <div className="p-6">
                <div className="mb-4 flex justify-end">
                  <CopyTextButton
                    text={pack.pairs.map((pair) => `${pair.main} vs ${pair.imposter}`).join("\n")}
                    label={copy.copyPack}
                    copiedLabel={copy.copied}
                    className="inline-flex items-center rounded-md border border-gray-300 px-3 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50"
                  />
                </div>
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
          {copy.finalCtaTitle}
        </h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          {copy.finalCtaDescription}
        </p>
        <Link
          href={buildLocalePath(locale, "/imposter-game/")}
          className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-2xl text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all transform hover:scale-105 shadow-lg"
        >
          {dictionary.pages.imposterGame.hostButton}
        </Link>
      </div>

      <section className="mt-12 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-5">{copy.faqTitle}</h2>
        <div className="space-y-5">
          {copy.faq.map((item) => (
            <div key={item.question}>
              <h3 className="font-semibold text-gray-900 mb-1">{item.question}</h3>
              <p className="text-sm leading-6 text-gray-600">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>
      </article>
      <Sidebar />
    </div>
  </div>
  );
}

const imposterWordListContent = {
  en: {
    title: "100+ Imposter Game Words & Word Pairs List",
    description:
      "Browse easy, funny, classroom, party, and holiday imposter game word pairs. Copy, print, or use the list in a free online imposter game room.",
    keywords: [
      "imposter game words",
      "imposter game words list",
      "imposter word list",
      "imposter game word ideas",
      "imposter word pairs",
    ],
    heading: "100+ Imposter Game Words & Word Pairs",
    lead:
      "Use this printable imposter game word list when you need quick pairs for parties, classrooms, family nights, or online rooms. Each pair gives the crew one word and the imposter a close but different word.",
    primaryCta: "Play these words online",
    copyAll: "Copy all pairs",
    copyPack: "Copy pack",
    copied: "Copied",
    print: "Print list",
    packCta: "Use this pack online",
    howToUseTitle: "How to use these imposter word pairs",
    howToUseSteps: [
      "Pick one pack that matches your group, such as everyday words, party food, classroom, or holidays.",
      "Give most players the main word and give one or two imposters the second word in the pair.",
      "Let everyone give short clues, discuss suspicious answers, and vote on the imposter.",
    ],
    finalCtaTitle: "Ready to play with these words?",
    finalCtaDescription:
      "Open an online room, share the QR code, and let the generator assign secret roles and words automatically.",
    faqTitle: "Imposter game word list FAQ",
    faq: [
      {
        question: "What makes a good imposter game word pair?",
        answer:
          "A good pair is similar enough that the imposter can bluff, but different enough that careful clues reveal the mismatch. Apple vs. Tomato works better than Apple vs. Airplane.",
      },
      {
        question: "Can I print these imposter words?",
        answer:
          "Yes. Use the print button to make a paper-friendly list, or copy a single pack if you only need one category for your round.",
      },
      {
        question: "How many imposter words do I need?",
        answer:
          "For a short party game, 10 to 20 pairs is enough. For classrooms or longer game nights, prepare 30 or more so groups do not repeat clues too quickly.",
      },
    ],
  },
  es: {
    title: "Más de 100 Palabras y Parejas para el Juego del Impostor",
    description:
      "Explora parejas fáciles, divertidas, escolares y festivas para el juego del impostor. Copia, imprime o usa la lista en una sala online gratuita.",
    keywords: [
      "palabras juego impostor",
      "lista palabras impostor",
      "generador juego impostor",
      "parejas de palabras impostor",
    ],
    heading: "Más de 100 Palabras y Parejas para el Juego del Impostor",
    lead:
      "Usa esta lista imprimible cuando necesites parejas rápidas para fiestas, clases, noches familiares o salas online. Cada pareja da al grupo una palabra y al impostor otra parecida pero distinta.",
    primaryCta: "Jugar online con estas palabras",
    copyAll: "Copiar todas",
    copyPack: "Copiar pack",
    copied: "Copiado",
    print: "Imprimir lista",
    packCta: "Usar este pack online",
    howToUseTitle: "Cómo usar estas parejas de palabras",
    howToUseSteps: [
      "Elige un pack que encaje con tu grupo: cotidiano, comida de fiesta, aula o eventos.",
      "Da la palabra principal a la mayoría y la segunda palabra a uno o dos impostores.",
      "Que cada persona dé pistas breves, debatid respuestas sospechosas y votad al impostor.",
    ],
    finalCtaTitle: "¿Listo para jugar con estas palabras?",
    finalCtaDescription:
      "Abre una sala online, comparte el código QR y deja que el generador reparta roles y palabras secretas automáticamente.",
    faqTitle: "Preguntas sobre palabras para el impostor",
    faq: [
      {
        question: "¿Qué hace buena a una pareja de palabras?",
        answer:
          "Una buena pareja es suficientemente parecida para que el impostor pueda improvisar, pero distinta para que las pistas lo delaten. Manzana vs. Tomate funciona mejor que Manzana vs. Avión.",
      },
      {
        question: "¿Puedo imprimir estas palabras?",
        answer:
          "Sí. Usa el botón de imprimir para crear una lista en papel, o copia un solo pack si solo necesitas una categoría.",
      },
      {
        question: "¿Cuántas palabras necesito?",
        answer:
          "Para una partida corta, 10 a 20 parejas bastan. Para clases o noches largas, prepara 30 o más para evitar repetir pistas.",
      },
    ],
  },
} satisfies Record<Locale, {
  title: string;
  description: string;
  keywords: string[];
  heading: string;
  lead: string;
  primaryCta: string;
  copyAll: string;
  copyPack: string;
  copied: string;
  print: string;
  packCta: string;
  howToUseTitle: string;
  howToUseSteps: string[];
  finalCtaTitle: string;
  finalCtaDescription: string;
  faqTitle: string;
  faq: Array<{
    question: string;
    answer: string;
  }>;
}>;
