import { NextResponse } from "next/server";
import { waitlistSchema } from "@/lib/validation";
import { getSupabaseAdmin } from "@/lib/supabase";

const consentText =
  "I agree to receive Dark Drives email about this city launch and related tour updates. I can unsubscribe anytime.";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = waitlistSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Enter a valid email and city." }, { status: 400 });
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return NextResponse.json({ ok: true, stored: false });
  }

  const { error } = await supabase.from("waitlist_signups").insert({
    ...parsed.data,
    consent_text: consentText,
    consented_at: new Date().toISOString(),
  });
  if (error) {
    return NextResponse.json({ error: "The signal failed. Try again." }, { status: 500 });
  }

  return NextResponse.json({ ok: true, stored: true });
}
