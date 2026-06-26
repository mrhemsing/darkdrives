import Link from "next/link";

const nav = [
  ["Catalog", "/catalog"],
  ["Saskatoon", "/saskatoon"],
  ["Cities", "/cities"],
  ["How it works", "/how-it-works"],
  ["FAQ", "/faq"],
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ash-line/80 bg-background/82 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link
          href="/"
          className="logo-flicker logo-flicker-header font-display text-3xl uppercase leading-none sm:text-4xl"
        >
          Dark Drives
        </Link>
        <nav className="hidden items-center gap-7 font-mono text-sm uppercase text-bone-dim lg:flex lg:text-base">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className="transition hover:text-bone">
              {label}
            </Link>
          ))}
        </nav>
        <Link
          href="/catalog"
          className="rounded-sm border border-blood px-4 py-3 font-mono text-sm uppercase text-bone transition hover:bg-blood sm:text-base"
        >
          Shop
        </Link>
      </div>
    </header>
  );
}
