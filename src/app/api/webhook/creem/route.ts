import { NextResponse } from "next/server";
import { kv } from "@/lib/kv";
import { nanoid } from "nanoid";
import { sendTokenEmail } from "@/lib/email";
import crypto from "crypto";

export async function POST(req: Request) {
  const body = await req.text();
  const signature = req.headers.get("x-creem-signature");
  
  console.log("[Creem Webhook] New Request Received");

  // 1. Verify Signature (Security)
  if (process.env.CREEM_WEBHOOK_SECRET && signature) {
    const expectedSignature = crypto
      .createHmac("sha256", process.env.CREEM_WEBHOOK_SECRET)
      .update(body)
      .digest("hex");

    if (signature !== expectedSignature) {
      console.error("[Creem Webhook] Signature mismatch!");
      // We return 200 to acknowledge receipt but log error
      return NextResponse.json({ error: "Invalid signature" }, { status: 200 });
    }
  }

  const payload = JSON.parse(body);
  const eventType = payload.eventType || payload.event;
  const data = payload.object || payload.data;

  console.log(`[Creem Webhook] Processing Event: ${eventType}`);

  if (eventType === "checkout.completed") {
    const customer = data.customer;
    const metadata = data.metadata;
    const product = data.product;

    // 2. Identify Plan
    let plan = metadata?.plan as "party" | "pro";
    if (!plan) {
      // Fallback by Product ID
      if (product?.id === process.env.NEXT_PUBLIC_CREEM_PRODUCT_ID_PARTY || product?.id === "prod_3YuJ8TdViYVqy6TxSN7HSZ") {
        plan = "party";
      } else if (product?.id === process.env.NEXT_PUBLIC_CREEM_PRODUCT_ID_PRO || product?.id === "prod_7T08zkIG0mw7OhfV6gPR0r") {
        plan = "pro";
      }
    }

    const email = customer?.email || metadata?.email;
    const customerId = typeof customer === 'string' ? customer : customer?.id;

    console.log("[Creem Webhook] Handling access...", { customerId, plan, email });

    if (!plan) {
      console.warn("[Creem Webhook] Skip: Plan not identified");
      return NextResponse.json({ received: true });
    }

    const tokenId = nanoid(32);
    const expiresAt = plan === "party" ? Date.now() + 86400 * 1000 : null;

    const tokenData = {
      id: tokenId,
      plan,
      createdAt: Date.now(),
      expiresAt,
      email: email || null,
      productId: product?.id || product,
    };

    try {
      // 3. Save to KV
      const expirationTtl = plan === "party" ? 86400 : undefined;
      await kv.set(`token:${tokenId}`, JSON.stringify(tokenData), expirationTtl);
      
      if (customerId) {
        const mappingKey = `checkout:${customerId}`;
        const mappingSuccess = await kv.set(mappingKey, tokenId, 300);
        console.log(`[Creem Webhook] SUCCESS: KV mapping saved for ${mappingKey}. Token: ${tokenId}`);
      }

      if (plan === "pro" && email) {
        await sendTokenEmail(email, tokenId);
      }
    } catch (err) {
      console.error("[Creem Webhook] KV Error:", err);
    }
  }

  return NextResponse.json({ received: true });
}
