import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";
import { submitSchema } from "@/lib/validation";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = submitSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Complete every field before sending." }, { status: 400 });
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return NextResponse.json({ ok: true, stored: false });
  }

  const { error } = await supabase.from("sighting_submissions").insert(parsed.data);
  if (error) {
    return NextResponse.json({ error: "Submission failed. Try again." }, { status: 500 });
  }

  return NextResponse.json({ ok: true, stored: true });
}
