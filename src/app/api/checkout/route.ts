import { NextResponse } from "next/server";
import Stripe from "stripe";
import { checkoutSchema } from "@/lib/validation";
import { commerceMode, tours } from "@/data/tours";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = checkoutSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Unknown tour." }, { status: 400 });
  }

  const tour = tours.find((item) => item.id === parsed.data.tourId);
  if (!tour) {
    return NextResponse.json({ error: "Unknown tour." }, { status: 404 });
  }

  if (commerceMode === "waitlist") {
    return NextResponse.json({ error: "Checkout is paused. Join the waitlist for launch." });
  }

  if (!process.env.STRIPE_SECRET_KEY || !tour.priceId) {
    return NextResponse.json({
      error: "Stripe is ready in code. Add STRIPE_SECRET_KEY and STRIPE_SASKATOON_PRICE_ID to enable checkout.",
    });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const origin = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [{ price: tour.priceId, quantity: 1 }],
    success_url: `${origin}/saskatoon?checkout=success`,
    cancel_url: `${origin}/saskatoon?checkout=cancelled`,
    metadata: {
      tourId: tour.id,
      commerceMode,
      marketingConsent: String(parsed.data.marketingConsent),
    },
  });

  return NextResponse.json({ url: session.url });
}
