"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { Send } from "lucide-react";

export function SubmitForm() {
  const [status, setStatus] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setStatus("Sending...");
    const response = await fetch("/api/submit", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name: form.get("name"),
        email: form.get("email"),
        city: form.get("city"),
        report: form.get("report"),
      }),
    });
    const data = (await response.json()) as { ok?: boolean; error?: string };
    setStatus(data.ok ? "Logged. The studio will review it." : data.error ?? "Try again.");
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 border border-ash-line bg-paper p-5">
      {[
        ["name", "Name", "text"],
        ["email", "Email", "email"],
        ["city", "City", "text"],
      ].map(([name, label, type]) => (
        <label key={name} className="font-mono text-xs uppercase text-ash">
          {label}
          <input
            name={name}
            type={type}
            required
            className="mt-2 h-11 w-full border border-ash-line bg-background px-3 font-sans text-sm normal-case text-bone outline-none"
          />
        </label>
      ))}
      <label className="font-mono text-xs uppercase text-ash">
        Report
        <textarea
          name="report"
          required
          minLength={20}
          rows={7}
          className="mt-2 w-full border border-ash-line bg-background px-3 py-3 font-sans text-sm normal-case text-bone outline-none"
        />
      </label>
      <button className="inline-flex h-11 items-center justify-center gap-2 rounded-sm bg-blood px-4 font-mono text-xs uppercase text-bone transition hover:bg-blood-hot">
        <Send size={16} aria-hidden />
        Submit for review
      </button>
      {status ? <p className="font-mono text-xs text-sick">{status}</p> : null}
    </form>
  );
}
