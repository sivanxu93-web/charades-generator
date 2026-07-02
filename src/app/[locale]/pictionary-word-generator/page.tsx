import Sidebar from "@/components/Sidebar";
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
import CopyTextButton from "@/components/CopyTextButton";
import PrintButton from "@/components/PrintButton";
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
  const copy = pictionaryContent[locale] ?? pictionaryContent.en;
  const { title, description, keywords } = copy.seo;

  const canonicalPath = "/pictionary-word-generator";
  const canonicalUrl = buildCanonicalUrl(locale, canonicalPath);

  return {
    title,
    description,
    keywords,
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

  const { pageTitle, pageDescription } = copy.hero;
  const printableText = copy.printableWords.join("\n");
  const wordListTexts = Object.fromEntries(
    copy.wordLists.map((list) => [list.key, list.words.join("\n")]),
  );

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
        description={pageDescription}
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
        description={pageDescription}
        url={canonicalUrl}
        category="Party Games"
        locale={locale}
      />
      <FAQStructuredData items={copy.faq ?? []} />

      <div className="max-w-6xl mx-auto px-6 pb-10 flex flex-col lg:flex-row gap-8 items-start">
        <article className="entry-content post-content flex-grow min-w-0 w-full space-y-8">
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

        <section className="bg-white rounded-lg shadow-md p-6 mb-8 border-l-4 border-amber-500">
          <div className="mb-5">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{copy.wordListTitle}</h2>
            <p className="text-gray-600">{copy.wordListDescription}</p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {copy.wordLists.map((list) => (
              <div key={list.key} className="rounded-lg border border-amber-100 bg-amber-50 p-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{list.title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{list.description}</p>
                  </div>
                  <CopyTextButton
                    text={wordListTexts[list.key]}
                    label={copy.copyWordList}
                    copiedLabel={copy.copied}
                    className="inline-flex shrink-0 items-center justify-center rounded-md border border-amber-300 px-3 py-2 text-sm font-semibold text-amber-800 hover:bg-amber-100"
                  />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {list.words.map((word) => (
                    <span key={word} className="rounded-md bg-white px-2 py-1 text-sm font-medium text-gray-800 shadow-sm">
                      {word}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8 border-l-4 border-orange-500">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{copy.printableTitle}</h2>
              <p className="text-gray-600 max-w-2xl">{copy.printableDescription}</p>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row md:flex-col">
              <CopyTextButton
                text={printableText}
                label={copy.copyPrintable}
                copiedLabel={copy.copied}
                className="inline-flex items-center justify-center rounded-md border border-orange-200 px-4 py-2 text-sm font-semibold text-orange-700 hover:bg-orange-50"
              />
              <PrintButton
                label={copy.printCards}
                className="inline-flex items-center justify-center rounded-md bg-orange-600 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-700"
              />
            </div>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {copy.printableWords.map((word) => (
              <div key={word} className="flex min-h-20 items-center justify-center rounded-lg border-2 border-dashed border-orange-200 bg-orange-50 p-3 text-center text-sm font-bold text-gray-800">
                {word}
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
            <Link href={buildLocalePath(locale, "/imposter-game/")}
              className="inline-flex items-center rounded-md border border-gray-300 px-2 py-1 text-gray-800 hover:bg-gray-100">
              {dictionary.pages.imposter.title}
            </Link>
            <Link href={buildLocalePath(locale, "/movie-charades-generator/")}
              className="inline-flex items-center rounded-md border border-gray-300 px-2 py-1 text-gray-800 hover:bg-gray-100">
              {dictionary.pages.movies.title}
            </Link>
          </div>
        </section>
      </article>
        <Sidebar locale={locale} />
      </div>
    </div>
  );
}

const pictionaryContent = {
  en: {
    seo: {
      title: "Pictionary Word Generator - Random Words & Printable Cards",
      description:
        "Generate random Pictionary words, copy funny, hard, Christmas, and holiday word lists, and print simple cards for game nights, classrooms, and parties.",
      keywords: [
        "pictionary word generator",
        "pictionary word list generator",
        "pictionary words generator",
        "word generator for pictionary",
        "funny pictionary word generator",
        "hard pictionary words generator",
        "pictionary word generator christmas",
        "pictionary christmas word generator",
        "holiday pictionary word generator",
        "free pictionary word generator",
        "pictionary words",
        "random pictionary words",
        "drawing game words",
        "pictionary generator",
        "pictionary cards",
        "printable pictionary cards",
      ],
    },
    hero: {
      pageTitle: "Pictionary Word Generator",
      pageDescription:
        "Get random drawing prompts, themed Pictionary word lists, and printable cards for easy, hard, funny, Christmas, and holiday rounds.",
    },
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
    wordListTitle: "Pictionary Word List Generator",
    wordListDescription:
      "Use the random generator for fresh prompts, or copy one of these ready-made Pictionary word lists when you need a fast round for a specific group, difficulty, or holiday.",
    copyWordList: "Copy list",
    wordLists: [
      {
        key: "funny",
        title: "Funny Pictionary Words",
        description: "Light, silly prompts that work well for family game night and casual party rounds.",
        words: [
          "Wobbly chair",
          "Sneezing panda",
          "Disco potato",
          "Sleepwalking",
          "Lost sock",
          "Giant cupcake",
          "Dramatic haircut",
          "Bubble bath",
        ],
      },
      {
        key: "hard",
        title: "Hard Pictionary Words",
        description: "More challenging prompts for adults, teens, and players who want trickier drawings.",
        words: [
          "Gravity",
          "Time machine",
          "Secret identity",
          "Architecture",
          "Whirlpool",
          "Electricity",
          "First impression",
          "Parallel universe",
        ],
      },
      {
        key: "christmas",
        title: "Christmas Pictionary Words",
        description: "Seasonal drawing prompts for Christmas parties, classrooms, and family gatherings.",
        words: [
          "Santa hat",
          "Gingerbread house",
          "Snow globe",
          "Reindeer",
          "Christmas lights",
          "Candy cane",
          "Wrapping paper",
          "Sleigh ride",
        ],
      },
      {
        key: "holiday",
        title: "Holiday Pictionary Words",
        description: "General holiday prompts that can fit winter parties, school breaks, and mixed celebrations.",
        words: [
          "Fireworks",
          "Parade",
          "Family dinner",
          "Travel suitcase",
          "Holiday card",
          "Ice skating",
          "Festive sweater",
          "Gift exchange",
        ],
      },
    ],
    printableTitle: "Printable Pictionary Cards",
    printableDescription:
      "Need cards for a whiteboard, classroom, or paper game? Copy this starter set or print the page, then use the generator above when you need fresh prompts.",
    copyPrintable: "Copy card words",
    copied: "Copied",
    printCards: "Print cards",
    printableWords: [
      "Bicycle",
      "Penguin",
      "Birthday cake",
      "Fireworks",
      "Umbrella",
      "Castle",
      "Microscope",
      "Snowman",
      "Rocket",
      "Toothbrush",
      "Guitar",
      "Treasure map",
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
        question: "Can I use this as a Pictionary word list generator?",
        answer:
          "Yes. Use the generator for random prompts, or copy the ready-made funny, hard, Christmas, and holiday lists on this page when you want a fixed word list.",
      },
      {
        question: "Does this include Christmas or holiday Pictionary words?",
        answer:
          "Yes. The page includes Christmas and general holiday word lists, and the generator also has a Christmas category for fresh seasonal prompts.",
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
    seo: {
      title: "Generador de Palabras para Pictionary - Cartas Imprimibles",
      description:
        "Genera palabras para Pictionary, copia listas divertidas, difíciles, navideñas y festivas, y prepara cartas imprimibles para fiestas, clases y noches de juegos.",
      keywords: [
        "pictionary",
        "palabras para pictionary",
        "generador de palabras para pictionary",
        "lista de palabras para pictionary",
        "palabras dificiles para pictionary",
        "pictionary navidad",
        "palabras navidenas para pictionary",
        "generador pictionary gratis",
        "generador pictionary",
        "juego de dibujar",
        "adivinar dibujos",
        "cartas pictionary imprimibles",
      ],
    },
    hero: {
      pageTitle: "Generador de Palabras Pictionary",
      pageDescription:
        "Consigue palabras aleatorias, listas temáticas y cartas imprimibles para rondas fáciles, difíciles, divertidas, navideñas y familiares.",
    },
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
    wordListTitle: "Generador de listas de palabras para Pictionary",
    wordListDescription:
      "Usa el generador aleatorio para obtener ideas nuevas, o copia una de estas listas preparadas cuando necesites una ronda rápida por tema, dificultad o temporada.",
    copyWordList: "Copiar lista",
    wordLists: [
      {
        key: "funny",
        title: "Palabras divertidas para Pictionary",
        description: "Prompts ligeros y graciosos para noches de juegos familiares y fiestas informales.",
        words: [
          "Silla tambaleante",
          "Panda estornudando",
          "Patata bailarina",
          "Sonámbulo",
          "Calcetín perdido",
          "Cupcake gigante",
          "Corte de pelo dramático",
          "Baño de burbujas",
        ],
      },
      {
        key: "hard",
        title: "Palabras difíciles para Pictionary",
        description: "Prompts más complejos para adultos, adolescentes y jugadores que quieren más reto.",
        words: [
          "Gravedad",
          "Máquina del tiempo",
          "Identidad secreta",
          "Arquitectura",
          "Remolino",
          "Electricidad",
          "Primera impresión",
          "Universo paralelo",
        ],
      },
      {
        key: "christmas",
        title: "Palabras navideñas para Pictionary",
        description: "Ideas de temporada para fiestas de Navidad, clases y reuniones familiares.",
        words: [
          "Gorro de Santa",
          "Casa de jengibre",
          "Bola de nieve",
          "Reno",
          "Luces de Navidad",
          "Bastón de caramelo",
          "Papel de regalo",
          "Paseo en trineo",
        ],
      },
      {
        key: "holiday",
        title: "Palabras festivas para Pictionary",
        description: "Prompts generales para vacaciones, celebraciones escolares y reuniones variadas.",
        words: [
          "Fuegos artificiales",
          "Desfile",
          "Cena familiar",
          "Maleta de viaje",
          "Tarjeta festiva",
          "Patinaje sobre hielo",
          "Suéter festivo",
          "Intercambio de regalos",
        ],
      },
    ],
    printableTitle: "Cartas imprimibles para Pictionary",
    printableDescription:
      "¿Necesitas cartas para pizarra, clase o juego en papel? Copia esta lista inicial o imprime la página y usa el generador para obtener nuevos prompts.",
    copyPrintable: "Copiar palabras",
    copied: "Copiado",
    printCards: "Imprimir cartas",
    printableWords: [
      "Bicicleta",
      "Pingüino",
      "Tarta de cumpleaños",
      "Fuegos artificiales",
      "Paraguas",
      "Castillo",
      "Microscopio",
      "Muñeco de nieve",
      "Cohete",
      "Cepillo de dientes",
      "Guitarra",
      "Mapa del tesoro",
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
        question: "¿Puedo usarlo como generador de listas para Pictionary?",
        answer:
          "Sí. Puedes generar palabras aleatorias o copiar las listas preparadas de palabras divertidas, difíciles, navideñas y festivas de esta página.",
      },
      {
        question: "¿Incluye palabras navideñas o festivas?",
        answer:
          "Sí. La página incluye listas de Navidad y de celebraciones generales, y el generador también tiene una categoría navideña para obtener más prompts.",
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
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  hero: {
    pageTitle: string;
    pageDescription: string;
  };
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
  wordListTitle: string;
  wordListDescription: string;
  copyWordList: string;
  wordLists: Array<{
    key: string;
    title: string;
    description: string;
    words: string[];
  }>;
  printableTitle: string;
  printableDescription: string;
  copyPrintable: string;
  copied: string;
  printCards: string;
  printableWords: string[];
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
