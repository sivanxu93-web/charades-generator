import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import GoogleScripts from "@/components/GoogleScripts";
import RouteTracking from "@/components/RouteTracking";
import { ensureUrlCanParse } from "@/utils/polyfills";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://charades-generator.com"),
  title: {
    default: "Charades Generator - Free Online Charades Words & Ideas",
    template: "%s | Charades Generator",
  },
  description:
    "Free online charades generator with 1000+ words and ideas. Generate instant charades for kids, adults, movies, Disney, animals, actions and more. Perfect for parties and family game nights!",
  keywords:
    "charades generator, charades words, charades ideas, charades for kids, charades movies, party games, family games, disney charades, online charades generator",
  authors: [{ name: "Charades Generator Team" }],
  creator: "Charades Generator",
  publisher: "Charades Generator",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://charades-generator.com/",
    siteName: "Charades Generator",
    title: "Free Charades Generator - Instant Words for Your Game Night",
    description:
      "Generate instant charades words and ideas for kids and adults. Free online charades generator with movies, animals, actions, Disney themes and more.",
    images: [
      {
        url: "/charades-generator-og.png",
        width: 1200,
        height: 630,
        alt: "Charades Generator - Free Online Game",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Charades Generator - Instant Words for Your Game Night",
    description:
      "Generate instant charades words and ideas for kids and adults. Perfect for parties and family fun!",
    images: ["/charades-generator-og.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#3B82F6",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  ensureUrlCanParse();
  const isProduction = process.env.NODE_ENV === "production";

  return (
    <html lang="en" dir="ltr" data-locale="en">
      <head>
        {/* Preload critical assets */}
        <link rel="preload" href="/logo.svg" as="image" type="image/svg+xml" />

        {/* Minimal critical CSS for initial render */}
        <style>{`
          *{box-sizing:border-box}
          body{margin:0;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;background:var(--background);color:var(--foreground)}
          .critical-nav{position:sticky;top:0;z-index:50;background:white;border-bottom:1px solid #e5e7eb}
          .critical-container{max-width:72rem;margin:0 auto;padding:0 1rem}
          .critical-flex{display:flex;justify-content:space-between;align-items:center;height:4rem}
          .critical-logo{height:4rem;width:auto}
        `}</style>
      </head>
      <body className="antialiased">
        {children}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "whn6xf9ygp");
          `}
        </Script>
        <GoogleScripts isProduction={isProduction} />
        <Suspense fallback={null}>
          <RouteTracking />
        </Suspense>
      </body>
    </html>
  );
}
