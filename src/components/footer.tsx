import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-ash-line bg-background px-5 py-10 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto]">
        <div>
          <p className="logo-flicker logo-flicker-footer font-display text-3xl uppercase">
            Dark Drives
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-bone-dim">
            Published by Off Grid Sask. Entertainment only. Do not trespass,
            enter private property, block traffic, drive impaired, or ignore
            posted signs. The tour is meant to be heard from lawful public
            roads and safe parking areas.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 font-mono text-xs uppercase text-ash md:justify-end">
          <Link href="/legal/disclaimer">Disclaimer</Link>
          <Link href="/legal/terms">Terms</Link>
          <Link href="/about">About</Link>
          <Link href="/submit">Submit a sighting</Link>
        </div>
      </div>
    </footer>
  );
}
