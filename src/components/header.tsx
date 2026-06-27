import Link from "next/link";

const nav = [
  ["Saskatoon", "/saskatoon"],
  ["How it works", "/how-it-works"],
  ["FAQ", "/faq"],
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ash-line/80 bg-background/82 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link
          href="/"
          className="logo-flicker logo-flicker-header font-logo whitespace-nowrap text-[2.44rem] uppercase leading-none sm:text-[2.56rem]"
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
      </div>
    </header>
  );
}
