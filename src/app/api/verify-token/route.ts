import { NextResponse } from "next/server";
import { kv } from "@/lib/kv";

/**
 * Validate a token against Cloudflare KV.
 */
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get("token");

  if (!token) {
    return NextResponse.json({ valid: false, error: "Missing token" }, { status: 400 });
  }

  const tokenRaw = await kv.get(`token:${token}`);
  if (!tokenRaw) {
    return NextResponse.json({ valid: false, error: "Invalid token" });
  }

  const tokenData = JSON.parse(tokenRaw);

  // Check expiration (for party pass)
  if (tokenData.expiresAt && Date.now() > tokenData.expiresAt) {
    return NextResponse.json({ valid: false, error: "Token expired" });
  }

  return NextResponse.json({
    valid: true,
    plan: tokenData.plan,
    expiresAt: tokenData.expiresAt,
  });
}
