import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "", {
  apiVersion: "2026-03-25.dahlia",
});

// Mapping slug → Stripe Price IDs (fill in when Stripe products are created)
const PRICE_IDS: Record<string, string> = {
  "nextjs-ai-starter": process.env.STRIPE_PRICE_NEXTJS_AI_STARTER ?? "",
  "ki-strategie-workbook": process.env.STRIPE_PRICE_KI_WORKBOOK ?? "",
  "prompt-engineering-kurs": process.env.STRIPE_PRICE_PROMPT_KURS ?? "",
  "freelancer-pack": process.env.STRIPE_PRICE_FREELANCER_PACK ?? "",
};

export async function POST(req: NextRequest) {
  try {
    const { slug } = (await req.json()) as { slug: string };

    const priceId = PRICE_IDS[slug];
    if (!priceId) {
      return NextResponse.json(
        { error: "Produkt nicht gefunden oder Preis noch nicht konfiguriert." },
        { status: 400 }
      );
    }

    const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL ?? "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card", "sepa_debit"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${baseUrl}/shop/success?session_id={CHECKOUT_SESSION_ID}&product=${slug}`,
      cancel_url: `${baseUrl}/shop/${slug}?cancelled=true`,
      billing_address_collection: "auto",
      locale: "de",
      metadata: {
        product_slug: slug,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: "Fehler beim Erstellen der Checkout-Session." },
      { status: 500 }
    );
  }
}
