"use client";

import Script from "next/script";

interface GoogleScriptsProps {
  isProduction: boolean;
}

export default function GoogleScripts({ isProduction }: GoogleScriptsProps) {
  if (!isProduction) return null;

  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-YC6P6CMMW2" strategy="afterInteractive" />
      <Script id="gtag-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-YC6P6CMMW2', {
            anonymize_ip: true,
            page_path: window.location.pathname,
            send_page_view: false,
          });
        `}
      </Script>
      <Script
        async
        src="https://scripts.scriptwrapper.com/tags/1f04f612-13c5-4212-b2f2-7c2009b4aa91.js"
        type="text/javascript"
        data-noptimize="1"
        data-cfasync="false"
        strategy="afterInteractive"
      />
    </>
  );
}
