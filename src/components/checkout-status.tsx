"use client";

import { useSearchParams } from "next/navigation";

export function CheckoutStatus() {
  const searchParams = useSearchParams();
  const state = searchParams.get("checkout");

  if (state !== "success" && state !== "cancelled") {
    return null;
  }

  return (
    <div className="border border-sick bg-sick-dim/35 p-4 font-mono text-sm text-bone">
      {state === "success"
        ? "Pre-order logged. You will get the keys when the Saskatoon file opens."
        : "Checkout cancelled. The file is still waiting."}
    </div>
  );
}
