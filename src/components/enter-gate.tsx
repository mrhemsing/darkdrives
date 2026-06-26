"use client";

import { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { captureEvent } from "@/components/analytics-events";

export function EnterGate() {
  const [dismissed, setDismissed] = useState(false);
  const [signalArmed, setSignalArmed] = useState(false);

  if (!dismissed) {
    return (
      <div className="fixed inset-0 z-[90] flex items-center justify-center bg-background px-5">
        <div className="max-w-md text-center">
          <p className="font-display text-6xl uppercase text-blood-hot">
            Dark Drives
          </p>
          <p className="mt-4 font-mono text-sm uppercase tracking-[0.24em] text-sick">
            Every drive has a dark side.
          </p>
          <p className="mt-8 text-xl leading-8 text-bone">
            This is meant to be heard. Turn your sound on.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <button
              onClick={() => {
                setSignalArmed(true);
                setDismissed(true);
                captureEvent("sample_listen", { state: "armed" });
              }}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-blood px-5 font-mono text-sm uppercase text-bone transition hover:bg-blood-hot"
            >
              <Volume2 size={18} aria-hidden />
              Enter
            </button>
            <button
              onClick={() => {
                setSignalArmed(false);
                setDismissed(true);
                captureEvent("sample_listen", { state: "muted" });
              }}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-sm border border-ash-line px-5 font-mono text-sm uppercase text-bone transition hover:border-sick hover:text-sick"
            >
              <VolumeX size={18} aria-hidden />
              Continue muted
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={() => {
        setSignalArmed((value) => !value);
        captureEvent("sample_listen", { state: signalArmed ? "muted" : "armed" });
      }}
      className="inline-flex h-12 items-center justify-center gap-2 rounded-sm border border-ash-line px-5 font-mono text-sm uppercase text-bone transition hover:border-sick hover:text-sick"
      aria-pressed={signalArmed}
    >
      {signalArmed ? <Volume2 size={18} aria-hidden /> : <VolumeX size={18} aria-hidden />}
      {signalArmed ? "Signal armed" : "Hear the signal"}
    </button>
  );
}
