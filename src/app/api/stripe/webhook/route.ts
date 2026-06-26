import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { getSupabaseAdmin } from "@/lib/supabase";

export async function POST(request: Request) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  const stripeKey = process.env.STRIPE_SECRET_KEY;

  if (!secret || !stripeKey) {
    return NextResponse.json({ error: "Webhook is not configured." }, { status: 500 });
  }

  const stripe = new Stripe(stripeKey);
  const body = await request.text();
  const signature = (await headers()).get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "Missing signature." }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, secret);
  } catch {
    return NextResponse.json({ error: "Invalid signature." }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const supabase = getSupabaseAdmin();
    if (supabase) {
      await supabase.from("orders").insert({
        stripe_session_id: session.id,
        email: session.customer_details?.email,
        tour_id: session.metadata?.tourId,
        commerce_mode: session.metadata?.commerceMode,
        amount_total: session.amount_total,
        currency: session.currency,
      });
    }
  }

  return NextResponse.json({ received: true });
}
