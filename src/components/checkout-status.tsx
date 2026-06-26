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
        ? "You're in. The route is being prepared. On launch night, the keys land in your inbox. Until then, keep your sound on."
        : "Checkout cancelled. The file is still waiting."}
    </div>
  );
}
