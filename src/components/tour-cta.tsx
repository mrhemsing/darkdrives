"use client";

import { useEffect, useState } from "react";
import { CreditCard, Loader2 } from "lucide-react";
import { captureEvent } from "@/components/analytics-events";
import type { Tour } from "@/data/tours";

export function TourCta({
  tour,
  label,
  compact = false,
  showConsent = true,
}: {
  tour: Tour;
  label?: string;
  compact?: boolean;
  showConsent?: boolean;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setMounted(true), 0);
    return () => window.clearTimeout(id);
  }, []);

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

  const purchaseLabel =
    label ??
    tour.status === "preorder"
      ? "Unlock the files"
      : tour.format === "audio-tour"
        ? "Buy the tour"
        : tour.format === "bundle"
          ? "Get all access"
          : "Buy the guide";
  const buttonClassName = `inline-flex items-center justify-center gap-2 rounded-sm bg-blood font-mono uppercase text-bone transition hover:bg-blood-hot disabled:cursor-wait disabled:bg-blood-dim ${
    compact ? "h-11 px-4 text-xs" : "h-12 px-5 text-sm"
  }`;

  return (
    <div className="flex flex-col gap-2">
      {showConsent ? (
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
      ) : null}
      {mounted ? (
        <button
          onClick={startCheckout}
          disabled={loading}
          className={buttonClassName}
        >
          {loading ? <Loader2 className="animate-spin" size={18} /> : <CreditCard size={18} />}
          {purchaseLabel} {tour.priceDisplay}
        </button>
      ) : (
        <button disabled className={buttonClassName}>
          <CreditCard size={18} />
          {purchaseLabel} {tour.priceDisplay}
        </button>
      )}
      {error ? <p className="max-w-sm font-mono text-xs text-sick">{error}</p> : null}
      <div className="max-w-sm space-y-1 font-mono text-[0.68rem] uppercase leading-5 tracking-[0.04em] text-ash">
        {tour.status === "preorder" ? <p>Founding price. It goes up after launch.</p> : null}
        <p>{tour.refundLine}</p>
      </div>
    </div>
  );
}
