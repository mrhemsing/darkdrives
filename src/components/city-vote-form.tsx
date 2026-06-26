"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { captureEvent } from "@/components/analytics-events";
import { expansionCities } from "@/data/cities";

export function CityVoteForm({ defaultCity }: { defaultCity: string }) {
  const [status, setStatus] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setStatus("Sending signal...");
    const response = await fetch("/api/waitlist", {
      method: "POST",
      body: JSON.stringify({
        email: formData.get("email"),
        city: formData.get("city"),
        source: "city_vote",
        marketingConsent: formData.get("marketingConsent") === "on",
      }),
      headers: { "content-type": "application/json" },
    });
    const data = (await response.json()) as { ok?: boolean; error?: string };
    if (data.ok) {
      captureEvent("waitlist_signup", { city: String(formData.get("city") ?? "") });
    }
    setStatus(
      data.ok
        ? "Logged. If the file opens, you will hear first."
        : data.error ?? "Try again.",
    );
  }

  return (
    <form onSubmit={onSubmit} className="border border-ash-line bg-paper p-5">
      <label className="block font-mono text-xs uppercase text-ash" htmlFor="city">
        City
      </label>
      <select
        id="city"
        name="city"
        defaultValue={defaultCity}
        className="mt-2 h-11 w-full rounded-sm border border-ash-line bg-background px-3 font-mono text-sm text-bone"
      >
        {expansionCities.map((city) => (
          <option key={city} value={city.toLowerCase()}>
            {city}
          </option>
        ))}
      </select>
      <label className="mt-5 block font-mono text-xs uppercase text-ash" htmlFor="email">
        Email
      </label>
      <div className="mt-2 flex">
        <span className="inline-flex h-11 items-center border border-r-0 border-ash-line bg-background px-3 text-ash">
          <Mail size={16} aria-hidden />
        </span>
        <input
          id="email"
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
          I agree to receive Dark Drives email about this city launch and
          related tour updates. I can unsubscribe anytime.
        </span>
      </label>
      <button className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-sm bg-blood px-4 font-mono text-xs uppercase text-bone transition hover:bg-blood-hot">
        <Send size={16} aria-hidden />
        Vote to summon
      </button>
      {status ? <p className="mt-4 font-mono text-xs text-sick">{status}</p> : null}
    </form>
  );
}
