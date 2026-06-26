"use client";

import { useState } from "react";
import { CreditCard, Loader2 } from "lucide-react";
import { captureEvent } from "@/components/analytics-events";
import type { Tour } from "@/data/tours";

export function TourCta({ tour }: { tour: Tour }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [marketingConsent, setMarketingConsent] = useState(false);

  async function startCheckout() {
    setLoading(true);
    setError("");
    captureEvent("cta_click", { tourId: tour.id, target: "checkout" });
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ tourId: tour.id, marketingConsent }),
    });
    const data = (await response.json()) as { url?: string; error?: string };
    setLoading(false);
    if (data.url) {
      captureEvent("checkout_start", { tourId: tour.id });
      window.location.href = data.url;
      return;
    }
    setError(data.error ?? "Checkout is not configured yet.");
  }

  return (
    <div id="buy" className="flex flex-col gap-2">
      <label className="mb-2 flex max-w-md gap-3 text-xs leading-5 text-bone-dim">
        <input
          type="checkbox"
          checked={marketingConsent}
          onChange={(event) => setMarketingConsent(event.target.checked)}
          className="mt-1 h-4 w-4 accent-blood"
        />
        <span>
          Send me Dark Drives launch notes, pre-launch files, and related tour
          updates. I can unsubscribe anytime.
        </span>
      </label>
      <button
        onClick={startCheckout}
        disabled={loading}
        className="inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-blood px-5 font-mono text-sm uppercase text-bone transition hover:bg-blood-hot disabled:cursor-wait disabled:bg-blood-dim"
      >
        {loading ? <Loader2 className="animate-spin" size={18} /> : <CreditCard size={18} />}
        {tour.status === "live" ? "Buy the tour" : "Pre-order now"} {tour.priceDisplay}
      </button>
      {error ? <p className="max-w-sm font-mono text-xs text-sick">{error}</p> : null}
    </div>
  );
}
