"use client";

import { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { captureEvent } from "@/components/analytics-events";

export function EnterGate() {
  const [entered, setEntered] = useState(false);

  return (
    <button
      onClick={() => {
        setEntered((value) => !value);
        captureEvent("sample_listen", { state: entered ? "muted" : "armed" });
      }}
      className="inline-flex h-12 items-center justify-center gap-2 rounded-sm border border-ash-line px-5 font-mono text-sm uppercase text-bone transition hover:border-sick hover:text-sick"
      aria-pressed={entered}
    >
      {entered ? <Volume2 size={18} aria-hidden /> : <VolumeX size={18} aria-hidden />}
      {entered ? "Signal armed" : "Enter muted"}
    </button>
  );
}
