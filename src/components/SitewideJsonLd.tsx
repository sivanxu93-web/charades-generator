import { BASE_URL } from "@/utils/seo";

const siteNavigationLinks = [
  { name: "Charades Generator", path: "/" },
  { name: "Pictionary Word Generator", path: "/pictionary-word-generator/" },
  { name: "Imposter Game", path: "/imposter-game/" },
  { name: "Truth or Dare Generator", path: "/truth-or-dare-generator/" },
  { name: "Would You Rather Generator", path: "/would-you-rather-generator/" },
  { name: "Christmas Party Games", path: "/christmas-party-games/" },
  { name: "Halloween Party Games", path: "/halloween-party-games/" },
  { name: "Family Game Night Ideas", path: "/family-game-night-ideas/" },
  { name: "Charades Ideas", path: "/charades-ideas/" },
  { name: "How to Play Charades", path: "/how-to-use/" },
];

function absoluteUrl(path: string) {
  return `${BASE_URL}${path}`;
}

function escapeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export default function SitewideJsonLd() {
  const organizationId = `${BASE_URL}/#organization`;
  const websiteId = `${BASE_URL}/#website`;

  const sitewideData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: "Charades Generator",
        url: `${BASE_URL}/`,
        logo: {
          "@type": "ImageObject",
          url: `${BASE_URL}/logo.svg`,
          width: 160,
          height: 62,
        },
        description:
          "Free online party game tools for charades, pictionary, imposter games, truth or dare, and family game nights.",
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: "Charades Generator",
        alternateName: [
          "Free Charades Word Generator",
          "Pictionary Word Generator",
          "Party Game Generator",
        ],
        url: `${BASE_URL}/`,
        inLanguage: ["en-US", "es-ES"],
        publisher: {
          "@id": organizationId,
        },
      },
      {
        "@type": "ItemList",
        "@id": `${BASE_URL}/#site-navigation`,
        name: "Charades Generator Site Navigation",
        itemListElement: siteNavigationLinks.map((link, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "SiteNavigationElement",
            name: link.name,
            url: absoluteUrl(link.path),
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: escapeJsonLd(sitewideData),
      }}
    />
  );
}
