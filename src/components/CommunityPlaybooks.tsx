import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { buildLocalePath } from "@/utils/localePaths";

interface PlaybookEntry {
  id: string;
  persona: string;
  location: string;
  scenario: string;
  summary: string;
  highlights: string[];
  steps: string[];
  lastTested: string;
}

interface CommunityPlaybooksProps {
  locale: Locale;
  playbooks: {
    title: string;
    description: string;
    followLabel: string;
    shareHref?: string;
    shareCta?: string;
    entries: PlaybookEntry[];
  };
  fallbackShareCta: string;
  baseUrl?: string;
}

function formatDate(locale: Locale, isoDate: string) {
  try {
    const formatter = new Intl.DateTimeFormat(locale, {
      year: "numeric",
      month: "short",
      day: "numeric",
      timeZone: "UTC",
    });
    const safeDate = new Date(`${isoDate}T00:00:00Z`);
    return formatter.format(safeDate);
  } catch {
    return isoDate;
  }
}

export default function CommunityPlaybooks({
  locale,
  playbooks,
  fallbackShareCta,
  baseUrl = "https://charades-generator.com",
}: CommunityPlaybooksProps) {
  if (!playbooks?.entries?.length) {
    return null;
  }

  const localizedRoot = buildLocalePath(locale, "/");

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: playbooks.title,
    itemListElement: playbooks.entries.map((entry: PlaybookEntry, index: number) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "HowTo",
        "@id": `${baseUrl}${localizedRoot}#${entry.id}`,
        url: `${baseUrl}${localizedRoot}#${entry.id}`,
        name: entry.scenario,
        description: entry.summary,
        dateModified: entry.lastTested,
        author: {
          "@type": "Person",
          name: entry.persona,
        },
        step: entry.steps.map((step, stepIndex) => ({
          "@type": "HowToStep",
          position: stepIndex + 1,
          text: step,
        })),
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-2">
        {playbooks.title}
      </h2>
      <p className="text-gray-600 leading-relaxed mb-6">{playbooks.description}</p>

      {/* Grid optimized to 2 columns on tablet/desktop to avoid crowded cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {playbooks.entries.map((entry: PlaybookEntry) => (
          <article
            key={entry.id}
            id={entry.id}
            className="flex h-full flex-col justify-between rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
                {entry.persona}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-gray-900">{entry.scenario}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{entry.summary}</p>

              <div className="mt-4 space-y-2 text-sm text-gray-700">
                {entry.highlights.map((highlight) => (
                  <p key={highlight} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-500" />
                    <span className="leading-tight">{highlight}</span>
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <p className="text-xs text-gray-500">
                {entry.location} · {formatDate(locale, entry.lastTested)}
              </p>
              <details className="rounded-lg border border-indigo-200 bg-white px-4 py-2.5 text-sm text-gray-700">
                <summary className="cursor-pointer font-semibold text-indigo-700 hover:text-indigo-900 transition-colors">
                  {playbooks.followLabel}
                </summary>
                <ol className="mt-3 list-decimal list-inside space-y-1.5 text-gray-600 leading-relaxed">
                  {entry.steps.map((step) => (
                    <li key={step} className="pl-1 py-0.5">{step}</li>
                  ))}
                </ol>
              </details>
            </div>
          </article>
        ))}
      </div>

      <div className="text-sm text-gray-600 mb-8 mt-4">
        <Link
          href={playbooks.shareHref ?? "/contact"}
          className="text-blue-600 hover:text-blue-800 font-semibold underline"
        >
          {playbooks.shareCta ?? fallbackShareCta}
        </Link>
      </div>
    </>
  );
}
