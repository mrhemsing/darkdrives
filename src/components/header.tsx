import Link from "next/link";
import { LogoMark } from "@/components/logo-mark";

const nav = [
  ["Saskatoon", "/saskatoon"],
  ["How it works", "/how-it-works"],
  ["FAQ", "/faq"],
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ash-line/80 bg-background/82 backdrop-blur">
      <div className="mx-auto flex h-28 max-w-7xl items-center justify-center gap-4 px-5 py-4 sm:h-20 sm:px-8 sm:py-0 lg:justify-between">
        <Link
          href="/"
          className="header-brand inline-flex flex-col items-center"
          aria-label="Dark Drives home"
        >
          <LogoMark
            flickerClassName="logo-flicker-header"
            className="text-[4.05rem] sm:text-[2.56rem]"
          />
          <span className="header-city-label">Saskatoon</span>
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
