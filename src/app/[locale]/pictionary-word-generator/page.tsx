import CharadesGeneratorOptimized from "@/components/CharadesGeneratorOptimized";
import StructuredData from "@/components/StructuredData";
import FAQStructuredData from "@/components/FAQStructuredData";
import Link from "next/link";
import { Metadata } from "next";
import { pickWords } from "@/utils/charades";
import { getDictionary } from "@/i18n/dictionary";
import { SUPPORTED_LOCALES, type Locale } from "@/i18n/config";
import { BASE_URL, buildAlternateLanguages, buildCanonicalUrl, getOpenGraphLocale } from "@/utils/seo";
import BreadcrumbStructuredData from "@/components/BreadcrumbStructuredData";
import { buildLocalePath } from "@/utils/localePaths";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  // Fallback to English for specific pictionary SEO data if not yet in dictionary
  const title = locale === "es" 
    ? "Generador de Palabras para Pictionary - Jugar Online" 
    : "Pictionary Word Generator - Random Pictionary Words";
  const description = locale === "es"
    ? "Genera palabras divertidas y aleatorias para jugar a Pictionary. Ideal para noches de juegos, fiestas y clases. ¡Sin inicio de sesión!"
    : "Generate fun, random words for Pictionary. The best Pictionary word generator for game nights, parties, and classrooms. No login required!";

  const canonicalPath = "/pictionary-word-generator";
  const canonicalUrl = buildCanonicalUrl(locale, canonicalPath);

  return {
    title,
    description,
    keywords: locale === "es" 
      ? ["pictionary", "palabras para pictionary", "generador pictionary", "juego de dibujar", "adivinar dibujos"]
      : ["pictionary word generator", "pictionary words", "random pictionary words", "drawing game words", "pictionary generator"],
    alternates: {
      canonical: canonicalUrl,
      languages: buildAlternateLanguages(canonicalPath),
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

export default async function PictionaryPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const dictionary = getDictionary(locale);
  const copy = pictionaryContent[locale] ?? pictionaryContent.en;
  // Objects and Animals are best for drawing
  const initialWords = pickWords("objects", "easy", "all", 3, locale);

  const canonicalPath = "/pictionary-word-generator";
  const canonicalUrl = buildCanonicalUrl(locale, canonicalPath);
  const homeUrl = buildCanonicalUrl(locale, "/");
  const homeLabel = dictionary.navigation.items.find((item) => item.key === "home")?.title ?? "Home";
  const exploreLabel = dictionary.home.exploreLabel;
  const howToUseLabel =
    dictionary.navigation.items.find((item) => item.key === "howToUse")?.title ?? "How to Use";

  // Use a fallback title/desc since it might not be in the main dictionary yet
  const pageTitle = locale === "es" ? "Generador de Palabras Pictionary" : "Pictionary Word Generator";
  const pageDesc = locale === "es" 
    ? "Consigue palabras perfectas para dibujar y adivinar. Desde objetos fáciles hasta conceptos difíciles." 
    : "Get the perfect words for drawing and guessing games. From easy objects to difficult concepts.";

  return (
    <div className="bg-gray-50 min-h-screen">
      <BreadcrumbStructuredData
        items={[
          { name: homeLabel, url: homeUrl },
          { name: pageTitle, url: canonicalUrl },
        ]}
      />
      <CharadesGeneratorOptimized
        title={pageTitle}
        description={pageDesc}
        defaultCategory="objects"
        defaultDifficulty="easy"
        defaultAgeGroup="all"
        initialWords={initialWords}
        allowedCategories={[
          "all",
          "objects",
          "animals",
          "actions",
          "professions",
          "disney",
          "christmas",
        ]}
      />

      <StructuredData
        type="WebApplication"
        name={pageTitle}
        description={pageDesc}
        url={canonicalUrl}
        category="Party Games"
        locale={locale}
      />
      <FAQStructuredData items={copy.faq ?? []} />

      <div className="max-w-4xl mx-auto px-6 pb-10">
        <section className="bg-white rounded-lg shadow-md p-6 mb-8 border-l-4 border-yellow-500">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{copy.introTitle}</h2>
          <p className="text-gray-600 mb-4">{copy.introDescription}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {copy.featuresColumns.map((column) => (
              <div key={column.title} className="p-4 rounded-lg" style={{ backgroundColor: column.background }}>
                <h3 className="font-semibold mb-2" style={{ color: column.headingColor }}>
                  {column.title}
                </h3>
                <ul className="text-sm space-y-1" style={{ color: column.textColor }}>
                  {column.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{copy.categoriesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {copy.categories.map((card) => (
              <div key={card.title} className="text-center p-4 rounded-lg" style={{ backgroundColor: card.background }}>
                <h3 className="font-semibold mb-2" style={{ color: card.headingColor }}>
                  {card.title}
                </h3>
                <p className="text-sm" style={{ color: card.textColor }}>
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6 mb-8 border border-yellow-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{copy.tipsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-orange-800">
                {copy.tips.drawingTitle}
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {copy.tips.drawingItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-orange-800">
                {copy.tips.guessingTitle}
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {copy.tips.guessingItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">{copy.faqTitle}</h2>
          <div className="space-y-4">
            {copy.faq.map((item) => (
              <div key={item.question}>
                <h3 className="font-semibold text-gray-800 mb-2">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 bg-gray-50 rounded-lg border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">{exploreLabel}</h2>
          <div className="flex flex-wrap gap-2 text-sm">
            <Link href={buildLocalePath(locale, "/random-charades-generator/")}
              className="inline-flex items-center rounded-md border border-gray-300 px-2 py-1 text-gray-800 hover:bg-gray-100">
              {dictionary.pages.random.title}
            </Link>
            <Link href={buildLocalePath(locale, "/charades-generator-for-kids/")}
              className="inline-flex items-center rounded-md border border-gray-300 px-2 py-1 text-gray-800 hover:bg-gray-100">
              {dictionary.pages.kids.title}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

const pictionaryContent = {
  en: {
    introTitle: "The Ultimate Pictionary Word Generator",
    introDescription: "Never run out of things to draw again. Whether you are playing classic Pictionary, Telestrations, or just sketching for fun, our generator provides thousands of words optimized for drawing games.",
    featuresColumns: [
      {
        title: "For Game Nights",
        items: [
          "Classic object words",
          "Fun animals to sketch",
          "Difficult concepts for experts",
          "Pop culture references",
        ],
        background: "#fffbeb",
        headingColor: "#b45309",
        textColor: "#b45309",
      },
      {
        title: "For Classrooms",
        items: [
          "Vocabulary building",
          "ESL learning activities",
          "Art class warm-ups",
          "Recess games",
        ],
        background: "#ecfdf5",
        headingColor: "#047857",
        textColor: "#047857",
      },
    ],
    categoriesTitle: "Best Pictionary Categories",
    categories: [
      {
        title: "Objects",
        description: "Everyday items like 'Toaster', 'Bicycle', or 'Castle' that are perfect for drawing.",
        background: "#fef3c7",
        headingColor: "#92400e",
        textColor: "#92400e",
      },
      {
        title: "Animals",
        description: "From 'Giraffe' to 'Penguin', animals are always a hit with players of all ages.",
        background: "#dcfce7",
        headingColor: "#166534",
        textColor: "#166534",
      },
      {
        title: "Actions",
        description: "Challenge your friends to draw verbs like 'Running', 'Dancing', or 'Cooking'.",
        background: "#fae8ff",
        headingColor: "#6b21a8",
        textColor: "#6b21a8",
      },
    ],
    tipsTitle: "How to Win at Pictionary",
    tips: {
      drawingTitle: "Drawing Tips:",
      drawingItems: [
        "Break the word down into smaller parts",
        "Draw the category first (e.g., a movie reel for films)",
        "Use simple shapes and stick figures",
        "Don't worry about quality, focus on speed",
        "Use arrows to point to the key part of your drawing",
      ],
      guessingTitle: "Guessing Strategy:",
      guessingItems: [
        "Yell out everything you see",
        "Look for common symbols (like a sun for 'day')",
        "Think about synonyms for what is drawn",
        "Watch the drawer's hand, not just the paper",
        "Consider the category context",
      ],
    },
    faqTitle: "Pictionary Generator FAQ",
    faq: [
      {
        question: "Is this good for Pictionary Air?",
        answer:
          "Yes! This word generator works perfectly with Pictionary Air, whiteboard games, or just pencil and paper. You just need a way to draw.",
      },
      {
        question: "Can I get hard Pictionary words?",
        answer:
          "Absolutely. Use the difficulty filter at the top to select 'Hard' or 'Expert' to get challenging abstract concepts and complex phrases.",
      },
      {
        question: "Is it safe for kids?",
        answer:
          "Yes. By default, our words are family-friendly. You can specifically select the 'Kids' age group to ensure all words are simple and easy to understand.",
      },
      {
        question: "Do I need to download an app?",
        answer:
          "No. This Pictionary word generator runs entirely in your browser. Just load the page and start playing instantly.",
      },
    ],
  },
  es: {
    introTitle: "El mejor generador de palabras para Pictionary",
    introDescription: "Nunca te quedes sin ideas para dibujar. Ya sea que juegues al Pictionary clásico, Pinturillo o simplemente dibujes por diversión, nuestro generador ofrece miles de palabras optimizadas para juegos de dibujo.",
    featuresColumns: [
      {
        title: "Para noches de juegos",
        items: [
          "Objetos clásicos",
          "Animales divertidos",
          "Conceptos difíciles para expertos",
          "Referencias culturales",
        ],
        background: "#fffbeb",
        headingColor: "#b45309",
        textColor: "#b45309",
      },
      {
        title: "Para el aula",
        items: [
          "Construcción de vocabulario",
          "Actividades de aprendizaje",
          "Calentamiento para clase de arte",
          "Juegos de recreo",
        ],
        background: "#ecfdf5",
        headingColor: "#047857",
        textColor: "#047857",
      },
    ],
    categoriesTitle: "Mejores categorías para Pictionary",
    categories: [
      {
        title: "Objetos",
        description: "Cosas cotidianas como 'Tostadora', 'Bicicleta' o 'Castillo' perfectas para dibujar.",
        background: "#fef3c7",
        headingColor: "#92400e",
        textColor: "#92400e",
      },
      {
        title: "Animales",
        description: "Desde 'Jirafa' hasta 'Pingüino', los animales siempre gustan a todas las edades.",
        background: "#dcfce7",
        headingColor: "#166534",
        textColor: "#166534",
      },
      {
        title: "Acciones",
        description: "Desafía a tus amigos a dibujar verbos como 'Correr', 'Bailar' o 'Cocinar'.",
        background: "#fae8ff",
        headingColor: "#6b21a8",
        textColor: "#6b21a8",
      },
    ],
    tipsTitle: "Cómo ganar en Pictionary",
    tips: {
      drawingTitle: "Consejos para dibujar:",
      drawingItems: [
        "Divide la palabra en partes más pequeñas",
        "Dibuja la categoría primero (ej. una claqueta para cine)",
        "Usa formas simples y figuras de palitos",
        "No te preocupes por la calidad, prioriza la velocidad",
        "Usa flechas para señalar la parte clave",
      ],
      guessingTitle: "Estrategia para adivinar:",
      guessingItems: [
        "Di en voz alta todo lo que veas",
        "Busca símbolos comunes (como un sol para 'día')",
        "Piensa en sinónimos de lo dibujado",
        "Mira la mano del dibujante, no solo el papel",
        "Ten en cuenta el contexto de la categoría",
      ],
    },
    faqTitle: "Preguntas frecuentes",
    faq: [
      {
        question: "¿Sirve para Pictionary Air?",
        answer:
          "¡Sí! Este generador funciona perfectamente con Pictionary Air, juegos de pizarra o simplemente lápiz y papel.",
      },
      {
        question: "¿Hay palabras difíciles?",
        answer:
          "Por supuesto. Usa el filtro de dificultad para seleccionar 'Difícil' y obtener conceptos abstractos y frases complejas.",
      },
      {
        question: "¿Es seguro para niños?",
        answer:
          "Sí. Por defecto, nuestras palabras son aptas para familias. Puedes seleccionar específicamente el grupo 'Niños' para asegurar palabras simples.",
      },
      {
        question: "¿Necesito bajar una app?",
        answer:
          "No. Este generador funciona totalmente en tu navegador. Solo carga la página y empieza a jugar al instante.",
      },
    ],
  },
} satisfies Record<Locale, {
  introTitle: string;
  introDescription: string;
  featuresColumns: Array<{
    title: string;
    items: string[];
    background: string;
    headingColor: string;
    textColor: string;
  }>;
  categoriesTitle: string;
  categories: Array<{
    title: string;
    description: string;
    background: string;
    headingColor: string;
    textColor: string;
  }>;
  tipsTitle: string;
  tips: {
    drawingTitle: string;
    drawingItems: string[];
    guessingTitle: string;
    guessingItems: string[];
  };
  faqTitle: string;
  faq: Array<{
    question: string;
    answer: string;
  }>;
}>;
