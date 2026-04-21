import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { productId, metadata, successUrl } = await req.json();

    if (!productId) {
      return NextResponse.json({ error: "Missing productId" }, { status: 400 });
    }

    const apiKey = process.env.CREEM_API_KEY;
    if (!apiKey) {
      console.error("CREEM_API_KEY is not configured");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const isTestMode = process.env.NODE_ENV !== 'production' || apiKey.startsWith('creem_test_');
    const apiUrl = isTestMode ? "https://test-api.creem.io/v1/checkouts" : "https://api.creem.io/v1/checkouts";

    // 1. Prepare Base Payload
    const payload: any = {
      product_id: productId,
      success_url: successUrl || `${process.env.NEXT_PUBLIC_URL}/pro/success`,
      metadata: metadata || {},
    };

    // 2. ONLY include customer email if it's not empty
    const email = metadata?.email;
    if (email && email.trim() !== "") {
      payload.customer = {
        email: email.trim()
      };
    }

    console.log(`[Creem Checkout] Target: ${apiUrl}`, JSON.stringify(payload));

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Creem API Error:", response.status, errorData);
      
      // Handle nested error objects from Creem
      const errorMessage = errorData.message || (errorData.errors ? JSON.stringify(errorData.errors) : "Failed to create session");

      return NextResponse.json({ 
        error: "Checkout failed", 
        details: Array.isArray(errorMessage) ? errorMessage[0] : errorMessage 
      }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json({ checkout_url: data.checkout_url });

  } catch (error: any) {
    console.error("Checkout API Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
