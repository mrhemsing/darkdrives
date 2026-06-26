"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { captureEvent } from "@/components/analytics-events";

export function FreeFileForm() {
  const [status, setStatus] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setStatus("Sending the file...");
    const response = await fetch("/api/waitlist", {
      method: "POST",
      body: JSON.stringify({
        email: formData.get("email"),
        city: "free-file",
        source: "free_file",
        marketingConsent: formData.get("marketingConsent") === "on",
      }),
      headers: { "content-type": "application/json" },
    });
    const data = (await response.json()) as { ok?: boolean; error?: string };
    if (data.ok) {
      captureEvent("email_capture", { source: "free_file" });
    }
    setStatus(data.ok ? "File request logged. Watch your inbox after dark." : data.error ?? "Try again.");
  }

  return (
    <form onSubmit={onSubmit} className="border border-ash-line bg-paper p-5">
      <p className="font-mono text-xs uppercase tracking-[0.28em] text-sick">
        Not ready?
      </p>
      <h2 className="mt-4 font-display text-4xl uppercase leading-none">
        Take one file with you.
      </h2>
      <p className="mt-4 text-sm leading-6 text-bone-dim">
        Drop your email for a free location and first word when new cities go live.
      </p>
      <label className="mt-5 block font-mono text-xs uppercase text-ash" htmlFor="free-file-email">
        Email
      </label>
      <div className="mt-2 flex">
        <span className="inline-flex h-11 items-center border border-r-0 border-ash-line bg-background px-3 text-ash">
          <Mail size={16} aria-hidden />
        </span>
        <input
          id="free-file-email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="h-11 min-w-0 flex-1 rounded-none border border-ash-line bg-background px-3 font-mono text-sm text-bone outline-none placeholder:text-ash"
        />
      </div>
      <label className="mt-4 flex gap-3 text-xs leading-5 text-bone-dim">
        <input
          name="marketingConsent"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 accent-blood"
        />
        <span>
          I agree to receive Dark Drives email, the free file, and related tour
          updates. I can unsubscribe anytime.
        </span>
      </label>
      <button className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-sm bg-blood px-4 font-mono text-xs uppercase text-bone transition hover:bg-blood-hot">
        <Send size={16} aria-hidden />
        Send me a file
      </button>
      {status ? <p className="mt-4 font-mono text-xs text-sick">{status}</p> : null}
    </form>
  );
}
