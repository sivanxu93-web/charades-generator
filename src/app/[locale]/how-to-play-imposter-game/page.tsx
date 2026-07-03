import { Metadata } from "next";
import Link from "next/link";
import { getDictionary } from "@/i18n/dictionary";
import { SUPPORTED_LOCALES, type Locale } from "@/i18n/config";
import { BASE_URL, buildAlternateLanguages, buildCanonicalUrl, getOpenGraphLocale } from "@/utils/seo";
import BreadcrumbStructuredData from "@/components/BreadcrumbStructuredData";
import Sidebar from "@/components/Sidebar";
import HowToStructuredData from "@/components/HowToStructuredData";

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
  const canonicalUrl = buildCanonicalUrl(locale, "/how-to-play-imposter-game/");

  return {
    title: dictionary.imposterRules.title,
    description: dictionary.imposterRules.description,
    alternates: {
      canonical: canonicalUrl,
      languages: buildAlternateLanguages("/how-to-play-imposter-game/"),
    },
    openGraph: {
      title: dictionary.imposterRules.title,
      description: dictionary.imposterRules.description,
      url: canonicalUrl,
      type: "website",
    },
  };
}

export default async function ImposterRulesPage(props: Props) {
  const params = await props.params;
  const locale = params.locale as Locale;
  const dictionary = getDictionary(locale);
  const canonicalUrl = buildCanonicalUrl(locale, "/how-to-play-imposter-game/");

  const steps = [
    {
      name: locale === "es" ? "Crea una sala" : "Create a Room",
      text: locale === "es" ? "Inicia el juego como anfitrión y elige un pack de palabras (Comida, Películas, etc.)." : "Start the game as a host and choose a word pack (Food, Movies, etc.).",
      image: "https://charades-generator.com/website.png"
    },
    {
      name: locale === "es" ? "Invita a tus amigos" : "Invite Your Friends",
      text: locale === "es" ? "Muestra el código QR o comparte el enlace. Tus amigos se unirán desde sus propios móviles." : "Show the QR code or share the link. Your friends join from their own phones.",
      image: "https://charades-generator.com/website2.png"
    },
    {
      name: locale === "es" ? "Recibe tu palabra secreta" : "Get Your Secret Word",
      text: locale === "es" ? "Cada jugador verá su rol. La mayoría verá la misma palabra, pero el Impostor verá una palabra diferente o ninguna." : "Each player sees their role. Most see the same word, but the Imposter sees a different one or none at all.",
      image: "https://charades-generator.com/website3.png"
    },
    {
      name: locale === "es" ? "Describe y Vota" : "Describe and Vote",
      text: locale === "es" ? "Túrnense para dar una pista de una palabra. Luego, debatan y voten quién creen que es el Impostor." : "Take turns giving a one-word clue. Then, discuss and vote on who you think the Imposter is.",
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-[1500px] mx-auto px-6 py-6 lg:py-10 flex flex-col lg:flex-row gap-8 items-start justify-center">
        <div className="hidden 2xl:block w-[300px] xl:w-[320px] shrink-0 pointer-events-none" aria-hidden="true" />
        <article className="entry-content post-content flex-grow max-w-4xl w-full p-6 bg-white rounded-lg shadow-sm">
          <BreadcrumbStructuredData
        items={[
          { name: dictionary.navigation.items.find(i => i.key === "home")?.title || "Home", url: buildCanonicalUrl(locale, "/") },
          { name: dictionary.seo.imposter.title, url: buildCanonicalUrl(locale, "/imposter-game/") },
          { name: dictionary.imposterRules.heading, url: canonicalUrl },
        ]}
      />
      <HowToStructuredData
        name={dictionary.imposterRules.title}
        description={dictionary.imposterRules.description}
        steps={steps.map(s => s.text)}
      />

      <article className="prose prose-indigo max-w-none">
        <div className="text-center not-prose mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            {dictionary.imposterRules.heading}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {dictionary.imposterRules.description}
          </p>
        </div>

        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">{dictionary.imposterRules.stepsTitle}</h2>
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2">{step.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
            <h2 className="text-2xl font-bold text-green-900 mb-4">{dictionary.imposterRules.winningTipsTitle}</h2>
            <ul className="space-y-3 text-green-800 list-disc pl-5">
              {locale === "es" ? (
                <>
                  <li>Escucha las pistas de los demás antes de dar la tuya.</li>
                  <li>Da pistas lo suficientemente generales como para encajar en ambas palabras.</li>
                  <li>Intenta actuar con confianza, incluso si no tienes ni idea de cuál es la palabra real.</li>
                  <li>Fíjate en quién duda o da pistas demasiado obvias.</li>
                </>
              ) : (
                <>
                  <li>Listen to others' clues before giving yours if possible.</li>
                  <li>Give clues vague enough to fit multiple related words.</li>
                  <li>Act confident, even if you have no idea what the real word is.</li>
                  <li>Watch for players who hesitate or give overly obvious clues.</li>
                </>
              )}
            </ul>
          </div>
          <div className="bg-indigo-50 rounded-2xl p-8 border border-indigo-100 flex flex-col justify-center text-center">
            <h2 className="text-2xl font-bold text-indigo-900 mb-4">
              {locale === "es" ? "¡Pruébalo ahora!" : "Try it Now!"}
            </h2>
            <p className="text-indigo-800 mb-6">
              {locale === "es" 
                ? "La mejor manera de aprender es jugando. Crea una sala online gratuita en segundos."
                : "The best way to learn is by playing. Create a free online room in seconds."}
            </p>
            <Link
              href={`/${locale}/imposter-game`}
              className="inline-block bg-indigo-600 text-white font-bold py-3 px-8 rounded-xl hover:bg-indigo-700 transition-colors shadow-md"
            >
              {dictionary.pages.imposterGame.hostButton}
            </Link>
          </div>
        </section>
      </article>
      </article>
      <Sidebar />
    </div>
  </div>
  );
}
