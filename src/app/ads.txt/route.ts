import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const adPartner = process.env.AD_PARTNER || process.env.NEXT_PUBLIC_AD_PARTNER || process.env.NEXT_PUBLIC_AD_PROVIDER || "journey";

  if (adPartner.toLowerCase() === "journey") {
    // 301 Redirect to Journey's ads.txt
    return NextResponse.redirect(
      "https://adstxt.journeymv.com/sites/1f04f612-13c5-4212-b2f2-7c2009b4aa91/ads.txt",
      {
        status: 301,
      }
    );
  } else {
    // Return Google's ads.txt content
    const content = "google.com, pub-4855228928819714, DIRECT, f08c47fec0942fa0\n";
    return new NextResponse(content, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "public, max-age=86400, s-maxage=86400",
      },
    });
  }
}
