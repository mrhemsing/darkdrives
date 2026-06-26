import Link from "next/link";

const nav = [
  ["Saskatoon", "/saskatoon"],
  ["Cities", "/cities"],
  ["How it works", "/how-it-works"],
  ["FAQ", "/faq"],
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ash-line/80 bg-background/82 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="font-display text-2xl uppercase text-blood-hot">
          Dark Drives
        </Link>
        <nav className="hidden items-center gap-6 font-mono text-xs uppercase text-bone-dim md:flex">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className="transition hover:text-bone">
              {label}
            </Link>
          ))}
        </nav>
        <Link
          href="/saskatoon#buy"
          className="rounded-sm border border-blood px-3 py-2 font-mono text-xs uppercase text-bone transition hover:bg-blood"
        >
          Pre-order
        </Link>
      </div>
    </header>
  );
}
