import { NextResponse } from "next/server";
import { waitlistSchema } from "@/lib/validation";
import { getSupabaseAdmin } from "@/lib/supabase";

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

  const { error } = await supabase.from("waitlist_signups").insert(parsed.data);
  if (error) {
    return NextResponse.json({ error: "The signal failed. Try again." }, { status: 500 });
  }

  return NextResponse.json({ ok: true, stored: true });
}
