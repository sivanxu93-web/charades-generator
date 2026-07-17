import { Metadata } from "next";
import Link from "next/link";
import { getDictionary } from "@/i18n/dictionary";
import { SUPPORTED_LOCALES, type Locale } from "@/i18n/config";
import { BASE_URL, buildAlternateLanguages, buildCanonicalUrl, getOpenGraphLocale } from "@/utils/seo";
import { buildLocalePath } from "@/utils/localePaths";
import ImposterQuickGenerator from "@/components/imposter/ImposterQuickGenerator";
import FlatGeneratorPageLayout from "@/components/FlatGeneratorPageLayout";

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

  const canonicalPath = "/imposter-game";
  const canonicalUrl = buildCanonicalUrl(locale, canonicalPath);

  return {
    title: dictionary.seo.imposter.title,
    description: dictionary.seo.imposter.description,
    keywords: dictionary.seo.imposter.keywords,
    alternates: {
      canonical: canonicalUrl,
      languages: buildAlternateLanguages(canonicalPath),
    },
    openGraph: {
      title: dictionary.seo.imposter.title,
      description: dictionary.seo.imposter.description,
      type: "article",
      url: canonicalUrl,
      locale: getOpenGraphLocale(locale),
      images: [
        {
          url: `${BASE_URL}/charades-generator-og.png`,
          width: 1200,
          height: 630,
          alt: dictionary.seo.imposter.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dictionary.seo.imposter.title,
      description: dictionary.seo.imposter.description,
      images: [`${BASE_URL}/charades-generator-og.png`],
    },
    robots: "index, follow",
  };
}

export default async function ImposterGamePage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const dictionary = getDictionary(locale);
  const content = ((imposterContent as any)[locale] ?? imposterContent.en) as typeof imposterContent.en;

  const canonicalPath = "/imposter-game";
  const canonicalUrl = buildCanonicalUrl(locale, canonicalPath);
  const homeUrl = buildCanonicalUrl(locale, "/");
  const homeLabel = dictionary.navigation.items.find((item) => item.key === "home")?.title ?? "Home";

  return (
    <FlatGeneratorPageLayout
      locale={locale}
      dictionary={dictionary}
      canonicalPath={canonicalPath}
      breadcrumbs={[
        { name: homeLabel, url: homeUrl },
        { name: dictionary.pages.imposter.title, url: canonicalUrl },
      ]}
      structuredDataName={dictionary.seo.imposter.title}
      structuredDataDescription={dictionary.seo.imposter.description}
      faq={content.faq ?? []}
      themeColorClass="bg-slate-50"
    >
      <div className="text-center mb-8 mt-4">
        <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-700 mb-3 border border-indigo-200">
          {content.heroBadge}
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
          {content.heroTitle}
        </h1>
        <p className="text-slate-650 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
          {content.heroDescription}
        </p>
      </div>

      <div className="mb-12">
        <ImposterQuickGenerator />
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
        {locale === "en" ? "Featured Ways to Play" : "Modos de Juego Destacados"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Card 1: Online Multiplayer */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/60 flex flex-col justify-between hover:shadow-md transition-shadow">
          <div>
            <span className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 text-xl shadow-sm">🌐</span>
            <h3 className="font-bold text-slate-900 text-lg mb-2">
              {locale === "en" ? "Pusher Online Room" : "Sala Online Pusher"}
            </h3>
            <p className="text-slate-650 text-sm mb-4 leading-relaxed">
              {locale === "en" 
                ? "Create a live room. Everyone joins from their own phone to see their private secret words. Best for groups." 
                : "Crea una sala en vivo. Cada persona se une desde su propio móvil para ver sus palabras secretas de forma privada."}
            </p>
          </div>
          <Link
            href={buildLocalePath(locale, "/imposter-game/play/")}
            className="inline-flex items-center justify-center w-full rounded-xl bg-indigo-600 hover:bg-indigo-500 py-2.5 text-sm font-bold text-white shadow-sm transition-colors text-center"
          >
            {locale === "en" ? "Start Online Game" : "Empezar Online"}
          </Link>
        </div>

        {/* Card 2: Pass & Play */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/60 flex flex-col justify-between hover:shadow-md transition-shadow">
          <div>
            <span className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 text-xl shadow-sm">📱</span>
            <h3 className="font-bold text-slate-900 text-lg mb-2">
              {locale === "en" ? "Pass & Play (Offline)" : "Pasar y Jugar (Offline)"}
            </h3>
            <p className="text-slate-650 text-sm mb-4 leading-relaxed">
              {locale === "en"
                ? "No internet connection? Pass a single device around the circle to assign secret roles offline."
                : "¿Sin conexión a internet? Pásate el móvil en círculo para repartir las palabras secretas offline."}
            </p>
          </div>
          <Link
            href={buildLocalePath(locale, "/imposter-game/play/?mode=pass")}
            className="inline-flex items-center justify-center w-full rounded-xl bg-slate-800 hover:bg-slate-700 py-2.5 text-sm font-bold text-slate-200 transition-colors text-center"
          >
            {locale === "en" ? "Start Pass & Play" : "Jugar Pasar y Jugar"}
          </Link>
        </div>

        {/* Card 3: Word list */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/60 flex flex-col justify-between hover:shadow-md transition-shadow">
          <div>
            <span className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4 text-xl shadow-sm">📋</span>
            <h3 className="font-bold text-slate-900 text-lg mb-2">
              {locale === "en" ? "100+ Word Pairs List" : "Lista de 100+ Parejas"}
            </h3>
            <p className="text-slate-650 text-sm mb-4 leading-relaxed">
              {locale === "en"
                ? "Browse our full library of imposter word pairs. Easy to copy, print, or use as backup prompts."
                : "Explora nuestra biblioteca completa de parejas. Copia o imprime para jugar con lápiz y papel."}
            </p>
          </div>
          <Link
            href={buildLocalePath(locale, "/imposter-game-word-list/")}
            className="inline-flex items-center justify-center w-full rounded-xl border border-slate-350 hover:bg-slate-50 py-2.5 text-sm font-bold text-slate-750 transition-colors text-center"
          >
            {locale === "en" ? "Browse Word List" : "Ver Lista de Palabras"}
          </Link>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 mb-12">
        {/* What Is */}
        <div className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-slate-900/5">
          <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
            <span className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mr-3 text-xl shadow-sm">🧐</span>
            {content.whatIsTitle}
          </h2>
          <p className="text-slate-600 mb-4 leading-relaxed text-sm">
            {content.whatIsIntro}
          </p>
          <ul className="space-y-3">
            {content.whatIsBullets.map((item) => (
              <li key={item} className="flex items-start text-sm text-slate-600 bg-slate-50 rounded-lg p-2">
                <svg className="w-5 h-5 text-emerald-500 mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Rules Summary */}
        <div className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-slate-900/5">
          <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
             <span className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mr-3 text-xl shadow-sm">📜</span>
            {content.rulesTitle}
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">{content.setupTitle}</h3>
              <ol className="space-y-2">
                {content.setupSteps.map((step, idx) => (
                  <li key={step} className="flex items-start text-sm text-slate-600">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-slate-100 text-slate-500 text-xs font-bold mr-2 shrink-0">
                      {idx + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
            <div className="pt-4 border-t border-slate-100">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">{content.playTitle}</h3>
              <ol className="space-y-2">
                {content.playSteps.map((step, idx) => (
                  <li key={step} className="flex items-start text-sm text-slate-600">
                     <span className="flex items-center justify-center w-5 h-5 rounded-full bg-slate-100 text-slate-500 text-xs font-bold mr-2 shrink-0">
                      {idx + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">{content.rolesTitle}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {content.roles.map((role) => (
          <article 
            key={role.title} 
            className={`relative overflow-hidden rounded-2xl p-6 shadow-sm ring-1 ring-slate-900/5 transition-transform hover:-translate-y-1 ${
              role.title.toLowerCase().includes('imposter') || role.title.toLowerCase().includes('impostor') 
              ? 'bg-slate-900 text-white' 
              : 'bg-white text-slate-900'
            }`}
          >
            <div className="relative z-10">
               <h3 className={`font-bold text-lg mb-2 ${
                  role.title.toLowerCase().includes('imposter') || role.title.toLowerCase().includes('impostor')  ? 'text-red-400' : 'text-indigo-600'
               }`}>{role.title}</h3>
               <p className={`text-sm mb-4 ${
                  role.title.toLowerCase().includes('imposter') || role.title.toLowerCase().includes('impostor')  ? 'text-slate-300' : 'text-slate-600'
               }`}>{role.description}</p>
               <span className={`inline-block text-xs font-bold uppercase tracking-wider py-1 px-2 rounded-md ${
                  role.title.toLowerCase().includes('imposter') || role.title.toLowerCase().includes('impostor') 
                  ? 'bg-red-500/20 text-red-200' 
                  : 'bg-indigo-50 text-indigo-700'
               }`}>
                 {role.tagline}
               </span>
            </div>
          </article>
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between mb-6 mt-8">
         <h2 className="text-2xl font-bold text-slate-900">{content.wordsTitle}</h2>
         <Link href={buildLocalePath(locale, "/imposter-game-word-list/")} className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 mt-2 md:mt-0 flex items-center">
            {content.generatorHint.linkText} 
            <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
         </Link>
      </div>
      <p className="text-slate-650 text-base mb-6 max-w-2xl">{content.wordsIntro}</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {content.wordGroups.map((group) => (
          <div key={group.title} className="bg-white rounded-2xl p-5 shadow-sm ring-1 ring-slate-900/5 border-t-4 border-indigo-500">
            <h3 className="font-bold text-slate-900 mb-3">{group.title}</h3>
            <ul className="space-y-2">
              {group.items.map((item) => (
                <li key={item} className="text-sm text-slate-600 flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mr-2"></span>
                    {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mb-12 bg-slate-100 rounded-3xl p-8 border border-slate-200/60">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">{content.useCasesTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.useCases.map((useCase) => (
            <article key={useCase.title} className="bg-white rounded-xl p-5 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-3 flex items-center">
                  <span className="w-2 h-6 bg-indigo-500 rounded-full mr-3"></span>
                  {useCase.title}
              </h3>
              <ul className="text-sm text-slate-600 space-y-2">
                {useCase.items.map((item) => (
                  <li key={item} className="pl-5 relative before:absolute before:left-0 before:top-2 before:w-1 before:h-1 before:bg-slate-300 before:rounded-full">
                      {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center mt-8">{content.faqTitle}</h2>
      {content.faq.map((item) => (
        <div key={item.question} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm mb-4">
          <h3 className="font-bold text-slate-900 mb-2 flex items-start text-base">
              <span className="text-indigo-500 mr-3 text-lg">Q.</span>
              {item.question}
          </h3>
          <p className="text-slate-600 text-sm pl-7 leading-relaxed">{item.answer}</p>
        </div>
      ))}

      <div className="bg-gradient-to-br from-slate-900 to-indigo-900 rounded-3xl p-8 text-center text-white shadow-lg mb-8 mt-12">
        <h2 className="text-2xl font-bold mb-3">
          {content.ctaTitle}
        </h2>
        <p className="text-indigo-250 text-sm mb-6 max-w-lg mx-auto">
          {content.ctaDescription}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={buildLocalePath(locale, "/imposter-game/play/")}
            className="inline-flex items-center justify-center rounded-xl bg-white text-indigo-900 px-6 py-3 font-bold hover:bg-indigo-50 transition-colors text-sm"
          >
            {content.ctaPrimary}
          </Link>
          <Link
            href={buildLocalePath(locale, "/imposter-game-word-list/")}
            className="inline-flex items-center justify-center rounded-xl bg-transparent border-2 border-indigo-400 text-indigo-100 px-6 py-3 font-bold hover:bg-indigo-900/50 transition-colors text-sm"
          >
            {content.ctaSecondary}
          </Link>
        </div>
      </div>
    </FlatGeneratorPageLayout>
  );
}

const imposterContent = {
  en: {
    heroBadge: "Free imposter game generator",
    heroTitle: "Imposter Game Generator",
    heroDescription:
      "Create a free online imposter game room, generate secret word pairs, and assign roles on every player's phone. No app, login, or setup spreadsheet needed.",
    heroPrimaryCta: "Start online game",
    heroSecondaryCta: "Browse word list",
    heroNote: "Instant room · QR invite · private words",
    whatIsTitle: "What is the imposter word game?",
    whatIsIntro:
      "The imposter game is a free online social deduction party game where everyone secretly receives the same word, except for one or more players who receive a different word. The group must then try to guess the imposter.",
    whatIsBullets: [
      "Play online instantly—our free imposter game generator requires no app downloads.",
      "Perfect for 4–12 players in living rooms, classrooms, or online group calls.",
      "Inspired by party games like “Who’s the Impostor?”, “Spyfall”, and “Among Us in real life”.",
    ],
    rulesTitle: "How to play the imposter game (Rules)",
    setupTitle: "Setup",
    setupSteps: [
      "Choose a host who won’t play this round or can see everyone’s words.",
      "Pick a category such as foods, animals, or school subjects and prepare a word list.",
      "Select one or two imposter words that are similar but not identical to the main word.",
      "Deal one word face down to each player—most get the main word, imposters get the odd one.",
    ],
    playTitle: "How a round works",
    playSteps: [
      "Go around the circle and have each player describe their word in a single short clue.",
      "After everyone has spoken once, open a brief discussion where players can ask clarifying questions.",
      "Call for a vote: everyone points at who they think is the imposter on a countdown.",
      "Reveal the imposters’ cards. If the group guessed correctly, they win the round—otherwise, the imposters win.",
    ],
    rolesTitle: "Common roles and twists",
    roles: [
      {
        title: "Imposter",
        description:
          "Receives the odd word and tries to blend in with confident but vague clues.",
        tagline: "Bluff without over-explaining.",
      },
      {
        title: "Crew",
        description:
          "Holds the main word and listens closely for clues that don’t quite match.",
        tagline: "Notice tiny inconsistencies.",
      },
      {
        title: "Host",
        description:
          "Prepares word pairs, keeps time, and resolves ties during votes.",
        tagline: "Keep the game flowing.",
      },
    ],
    wordsTitle: "Best words for the imposter game (Generator ideas)",
    wordsIntro:
      "When using our imposter word game generator, start with simple everyday concepts. Then, you can try themed or question-based prompts once everyone understands how to play.",
    wordGroups: [
      {
        title: "Easy everyday pairs",
        items: [
          "Apple vs. Tomato",
          "Cat vs. Tiger",
          "Bus vs. Train",
          "Teacher vs. Principal",
          "Soccer vs. Basketball",
        ],
      },
      {
        title: "Party & pop culture",
        items: [
          "Harry Potter vs. Lord of the Rings",
          "Batman vs. Superman",
          "Netflix vs. YouTube",
          "Pizza vs. Lasagna",
          "Concert vs. Theatre",
        ],
      },
      {
        title: "Tricky/Hard mode pairs",
        items: [
          "Ocean vs. Sea",
          "Jacket vs. Coat",
          "Cupcake vs. Muffin",
          "Turtle vs. Tortoise",
          "Clock vs. Watch",
        ],
      },
      {
        title: "Question prompts",
        items: [
          "“Describe your word without naming it.”",
          "“Say what time of day fits your word best.”",
          "“Explain where you would usually find your word.”",
          "“Give a clue using only one adjective.”",
          "“Say who likes your word the most.”",
        ],
      },
    ],
    generatorHint: {
      before: "Need more ideas?",
      linkText: "browse the imposter word list",
      after: "or start an online room to assign secret words automatically.",
    },
    useCasesTitle: "Where the imposter game works best",
    useCases: [
      {
        title: "Party warm-ups",
        items: [
          "Break the ice before longer board games or charades sessions.",
          "Run two fast rounds while guests are still arriving.",
          "Use themed word pairs that match your party (movies, holidays, or work jokes).",
        ],
      },
      {
        title: "Classroom activities",
        items: [
          "Reinforce vocabulary in language or ESL lessons.",
          "Practice descriptive sentences without writing on the board.",
          "Let students design their own safe word pairs as homework.",
        ],
      },
      {
        title: "Remote teams",
        items: [
          "Run quick rounds at the start of virtual stand-ups.",
          "Use chat or reactions for voting when cameras are off.",
          "Let different team members host and bring their own themes.",
        ],
      },
    ],
    faqTitle: "Imposter game FAQ",
    faq: [
      {
        question: "How many players do you need for the imposter game?",
        answer:
          "Four to twelve players works best. With fewer than four, it’s hard to hide the imposter; with more than twelve, split into two groups so everyone gets enough speaking time.",
      },
      {
        question: "How does the imposter game generator work?",
        answer:
          "Our generator offers two ways to play: you can instantly generate and reveal secret word pairs for offline play (like Tomato vs. Apple), or create an online multiplayer room. If you start a room, a unique QR code allows your friends to join on their own phones, and the generator automatically distributes the secret words and assigns the Imposter role.",
      },
      {
        question: "Is the imposter game kid-friendly?",
        answer:
          "Yes—as long as you choose age-appropriate words. For younger kids, stick to animals, foods, and school objects, and keep descriptions simple.",
      },
      {
        question: "Can I customize the word list in the generator?",
        answer:
          "Yes! You can choose from pre-made packs like Food & Party, Classroom, Holidays, and Everyday Things, or browse our full word list page to copy and write your own custom pairs for a tailored game night.",
      },
      {
        question: "What’s the difference between this and charades?",
        answer:
          "Charades uses silent acting and guesses, while the imposter game focuses on short verbal clues and social deduction. You can easily use the same word lists for both activities.",
      },
    ],
    ctaTitle: "Ready to host your first imposter round?",
    ctaDescription:
      "Create a room now or keep the word list open when you want paper-friendly backup prompts.",
    ctaPrimary: "Create an imposter room",
    ctaSecondary: "Open the word list",
  },
  es: {
    heroBadge: "Generador gratuito del juego del impostor",
    heroTitle: "Generador del Juego del Impostor",
    heroDescription:
      "Crea una sala online gratuita, genera parejas de palabras secretas y reparte roles en el móvil de cada jugador. Sin app, registro ni preparación complicada.",
    heroPrimaryCta: "Empezar partida online",
    heroSecondaryCta: "Ver lista de palabras",
    heroNote: "Sala instantánea · QR para invitar · palabras privadas",
    whatIsTitle: "¿Qué es el juego de palabras del impostor?",
    whatIsIntro:
      "El juego del impostor es un juego de deducción social gratuito online donde todo el grupo recibe en secreto la misma palabra, excepto una o más personas que reciben una palabra distinta. El objetivo es adivinar quién es el impostor.",
    whatIsBullets: [
      "Juega online al instante: nuestro generador gratuito del juego del impostor no requiere descargar ninguna app.",
      "Ideal para 4–12 participantes en salones, aulas o videollamadas en grupo.",
      "Inspirado en juegos de fiesta como “Spyfall”, “Quién es el impostor” o “Among Us en la vida real”.",
    ],
    rulesTitle: "Cómo jugar al juego del impostor (Reglas)",
    setupTitle: "Preparación",
    setupSteps: [
      "Elige una persona anfitriona que no juegue esa ronda o que pueda ver todas las palabras.",
      "Escoge una categoría (comidas, animales, asignaturas) y prepara una lista de palabras.",
      "Selecciona una o dos palabras de impostor que sean parecidas pero no iguales a la palabra principal.",
      "Reparte una palabra boca abajo a cada jugador: la mayoría recibe la palabra principal y uno o dos reciben la palabra distinta.",
    ],
    playTitle: "Cómo se juega una ronda",
    playSteps: [
      "Pasad turno y que cada persona describa su palabra con una pista corta.",
      "Después de la primera vuelta, abre un breve debate donde se puedan hacer preguntas aclaratorias.",
      "Haz una votación: a la cuenta de tres, todos señalan a quien creen que es el impostor.",
      "Revela las cartas de impostor. Si el grupo acierta, gana; si no, ganan los impostores.",
    ],
    rolesTitle: "Roles y variaciones más comunes",
    roles: [
      {
        title: "Impostor",
        description:
          "Recibe la palabra diferente e intenta mezclarse con pistas seguras pero poco específicas.",
        tagline: "Engaña sin dar demasiados detalles.",
      },
      {
        title: "Grupo",
        description:
          "Tiene la palabra principal y escucha pistas que no terminan de encajar.",
        tagline: "Detecta las pequeñas incoherencias.",
      },
      {
        title: "Anfitrión",
        description:
          "Prepara parejas de palabras, controla el tiempo y resuelve empates en las votaciones.",
        tagline: "Mantén el ritmo de la partida.",
      },
    ],
    wordsTitle: "Las mejores palabras para el juego del impostor (Ideas)",
    wordsIntro:
      "Al usar nuestro generador online del juego del impostor, empieza con conceptos cotidianos sencillos. Después, puedes pasar a temas o preguntas cuando el grupo entienda cómo jugar.",
    wordGroups: [
      {
        title: "Pares cotidianos fáciles",
        items: [
          "Manzana vs. Tomate",
          "Gato vs. Tigre",
          "Autobús vs. Tren",
          "Profesor vs. Director",
          "Fútbol vs. Baloncesto",
        ],
      },
      {
        title: "Fiestas y cultura pop",
        items: [
          "Harry Potter vs. El Señor de los Anillos",
          "Batman vs. Superman",
          "Netflix vs. YouTube",
          "Pizza vs. Lasaña",
          "Concierto vs. Teatro",
        ],
      },
      {
        title: "Pares difíciles (Modo Difícil)",
        items: [
          "Océano vs. Mar",
          "Chaqueta vs. Abrigo",
          "Magdalena vs. Muffin",
          "Tortuga de agua vs. Tortuga de tierra",
          "Reloj de pared vs. Reloj de pulsera",
        ],
      },
      {
        title: "Prompts en forma de pregunta",
        items: [
          "“Describe tu palabra sin nombrarla.”",
          "“Di a qué hora del día encaja mejor tu palabra.”",
          "“Explica dónde se suele encontrar tu palabra.”",
          "“Da una pista usando solo un adjetivo.”",
          "“Cuenta quién disfruta más de tu palabra.”",
        ],
      },
    ],
    generatorHint: {
      before: "¿Necesitas más ideas?",
      linkText: "consulta la lista de palabras del impostor",
      after: "o crea una sala online para repartir palabras secretas automáticamente.",
    },
    useCasesTitle: "Dónde brilla el juego del impostor",
    useCases: [
      {
        title: "Arranques de fiesta",
        items: [
          "Rompe el hielo antes de juegos más largos o de las propias charadas.",
          "Juega un par de rondas mientras llegan todas las personas invitadas.",
          "Usa parejas de palabras que encajen con el tema de la fiesta (cine, Navidad, trabajo, etc.).",
        ],
      },
      {
        title: "Actividades en el aula",
        items: [
          "Refuerza vocabulario en clases de lengua o inglés.",
          "Practica descripciones orales sin necesidad de escribir en la pizarra.",
          "Deja que el alumnado invente sus propias parejas seguras como tarea.",
        ],
      },
      {
        title: "Equipos remotos",
        items: [
          "Haz rondas rápidas al inicio de dailies o retrospectivas.",
          "Usa chat o reacciones para votar cuando las cámaras estén apagadas.",
          "Deja que cada persona anfitriona traiga su propio tema de palabras.",
        ],
      },
    ],
    faqTitle: "Preguntas frecuentes sobre el juego del impostor",
    faq: [
      {
        question: "¿Cuántos jugadores se necesitan para el juego del impostor?",
        answer:
          "Lo ideal son entre cuatro y doce personas. Con menos de cuatro es difícil ocultar al impostor; con más de doce, mejor dividir en dos grupos para que todo el mundo pueda hablar.",
      },
      {
        question: "¿Cómo funciona el generador del juego del impostor?",
        answer:
          "Nuestro generador ofrece dos formas de jugar: puedes generar y revelar parejas de palabras secretas al instante para jugar en persona (como Tomate vs. Manzana), o crear una sala multijugador online. Si creas una sala, tus amigos se pueden unir desde sus móviles con un código QR, y el sistema repartirá las palabras y asignará el rol de Impostor automáticamente.",
      },
      {
        question: "¿Es apto para niños?",
        answer:
          "Sí, siempre que elijas palabras apropiadas para su edad. Para peques, usa animales, comidas y objetos del colegio y mantén las descripciones sencillas.",
      },
      {
        question: "¿Puedo personalizar la lista de palabras en el generador?",
        answer:
          "¡Sí! Puedes elegir entre packs temáticos ya creados (comida de fiesta, aula, eventos, cosas cotidianas) o consultar nuestra lista completa de palabras para copiar o imprimir tus propios pares personalizados.",
      },
      {
        question: "¿En qué se diferencia de las charadas?",
        answer:
          "En las charadas se actúa en silencio, mientras que el juego del impostor se basa en pistas habladas y deducción social. Puedes reutilizar las mismas listas de palabras para ambas actividades.",
      },
    ],
    ctaTitle: "¿Listo para tu primera ronda de impostor?",
    ctaDescription:
      "Crea una sala ahora o deja abierta la lista de palabras como apoyo para jugar en papel.",
    ctaPrimary: "Crear sala de impostor",
    ctaSecondary: "Abrir lista de palabras",
  },
} ;
