import { NextResponse } from "next/server";
import { kv } from "@/lib/kv";

/**
 * Endpoint to retrieve token by checkout/customer_id on success page.
 */
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const customerId = searchParams.get("customer_id");
  console.log(`[Activate API] Requesting activation for customerId: ${customerId}`);

  if (!customerId) {
    return NextResponse.json({ error: "Missing customer_id" }, { status: 400 });
  }

  // Retrieve tokenId from temporary mapping
  const key = `checkout:${customerId}`;
  const tokenId = await kv.get(key);
  console.log(`[Activate API] KV Lookup result for ${key}: ${tokenId ? "Found" : "Not Found"}`);

  if (!tokenId) {
    return NextResponse.json({ error: "Token not found or already activated" }, { status: 404 });
  }

  // Retrieve actual token data
  const tokenRaw = await kv.get(`token:${tokenId}`);
  if (!tokenRaw) {
    return NextResponse.json({ error: "Token data missing" }, { status: 500 });
  }

  const tokenData = JSON.parse(tokenRaw);

  // Success: Client will store tokenId and expiration locally
  return NextResponse.json({
    token: tokenId,
    expiresAt: tokenData.expiresAt,
    plan: tokenData.plan,
  });
}
