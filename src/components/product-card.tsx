import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Tour } from "@/data/tours";

export function ProductCard({ product }: { product: Tour }) {
  return (
    <article className="relative flex min-h-72 overflow-hidden rounded-sm border border-ash-line bg-[radial-gradient(110%_70%_at_82%_8%,rgba(146,184,107,0.05),transparent_60%),linear-gradient(to_top,rgba(150,160,150,0.05),transparent_38%),var(--background)] p-5">
      <span className="absolute left-3 top-3 z-10 h-4 w-4 border-l border-t border-bone/45" />
      <span className="absolute bottom-3 right-3 z-10 h-4 w-4 border-b border-r border-bone/45" />
      <svg
        className="absolute right-[-1rem] top-1/2 h-[115%] w-auto -translate-y-1/2 text-bone opacity-100 [mask-image:linear-gradient(to_right,transparent_8%,#000_55%)]"
        viewBox="0 0 240 340"
        fill="none"
        aria-hidden
      >
        <g stroke="currentColor" strokeWidth="5" strokeLinecap="round" opacity="0.11">
          <line x1="22" y1="150" x2="22" y2="190" />
          <line x1="56" y1="110" x2="56" y2="230" />
          <line x1="90" y1="78" x2="90" y2="262" />
          <line x1="124" y1="138" x2="124" y2="202" />
          <line x1="158" y1="92" x2="158" y2="248" />
          <line x1="192" y1="126" x2="192" y2="214" />
          <line x1="226" y1="150" x2="226" y2="190" />
        </g>
      </svg>
      <div className="relative z-10 flex min-h-full w-full flex-col">
      <div className="flex items-start justify-between gap-4">
        <p className="font-mono text-xs uppercase tracking-[0.04em] text-sick">
          {product.formatBadge}
        </p>
      </div>
      <h3 className="mt-5 font-display text-4xl uppercase leading-none text-bone">
        {product.title}
      </h3>
      <p className="mt-4 text-sm leading-6 text-bone-dim">{product.tagline}</p>
      <div className="mt-5 grid gap-2 font-mono text-xs uppercase tracking-[0.04em] text-ash">
        <p>{product.locationCountDisplay}</p>
        <p>{product.deliverable}</p>
        <p>{product.priceDisplay}</p>
      </div>
      <div className="mt-auto pt-4">
        <Link
          href={`/${product.slug}`}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-sm border border-blood px-4 font-mono text-xs uppercase text-bone transition hover:bg-blood"
        >
          View
          <ArrowRight size={16} aria-hidden />
        </Link>
      </div>
      </div>
    </article>
  );
}
