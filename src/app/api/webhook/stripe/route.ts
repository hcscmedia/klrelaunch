import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { headers } from "next/headers";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "", {
  apiVersion: "2026-03-25.dahlia",
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET ?? "";

// Download URLs per product (set after uploading files)
const DOWNLOAD_URLS: Record<string, string> = {
  "nextjs-ai-starter": process.env.DOWNLOAD_URL_NEXTJS_AI_STARTER ?? "",
  "ki-strategie-workbook": process.env.DOWNLOAD_URL_KI_WORKBOOK ?? "",
  "prompt-engineering-kurs": process.env.DOWNLOAD_URL_PROMPT_KURS ?? "",
  "freelancer-pack": process.env.DOWNLOAD_URL_FREELANCER_PACK ?? "",
};

export async function POST(req: NextRequest) {
  const body = await req.text();
  const headersList = await headers();
  const signature = headersList.get("stripe-signature") ?? "";

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const productSlug = session.metadata?.product_slug;
    const customerEmail = session.customer_details?.email;

    if (productSlug && customerEmail) {
      const downloadUrl = DOWNLOAD_URLS[productSlug];
      console.log(
        `[Stripe] Purchase complete: ${productSlug} → ${customerEmail} (download: ${downloadUrl || "not configured"})`
      );
      // TODO: Send email via Resend/Postmark with download link
      // await sendPurchaseEmail({ email: customerEmail, productSlug, downloadUrl });
    }
  }

  return NextResponse.json({ received: true });
}
