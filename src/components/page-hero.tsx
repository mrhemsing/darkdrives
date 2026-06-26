import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-b border-ash-line px-5 pb-16 pt-32 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-sick">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-4xl font-display text-6xl uppercase leading-none text-bone sm:text-8xl">
          {title}
        </h1>
        <div className="mt-6 max-w-3xl text-lg leading-8 text-bone-dim">
          {children}
        </div>
      </div>
    </section>
  );
}
