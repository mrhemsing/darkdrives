import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Tour } from "@/data/tours";

export function ProductCard({ product }: { product: Tour }) {
  return (
    <article className="flex min-h-72 flex-col border border-ash-line bg-background p-5">
      <div className="flex items-start justify-between gap-4">
        <p className="font-mono text-xs uppercase text-sick">{product.formatBadge}</p>
        <p className="shrink-0 font-mono text-xs uppercase text-ash">
          {product.tierLabel}
        </p>
      </div>
      <h3 className="mt-5 font-display text-4xl uppercase leading-none text-bone">
        {product.title}
      </h3>
      <p className="mt-4 text-sm leading-6 text-bone-dim">{product.tagline}</p>
      <div className="mt-5 grid gap-2 font-mono text-xs uppercase text-ash">
        <p>{product.locationCountDisplay}</p>
        <p>{product.deliverable}</p>
        <p>{product.priceDisplay}</p>
      </div>
      <Link
        href={`/${product.slug}`}
        className="mt-auto inline-flex h-11 items-center justify-center gap-2 rounded-sm border border-blood px-4 font-mono text-xs uppercase text-bone transition hover:bg-blood"
      >
        View
        <ArrowRight size={16} aria-hidden />
      </Link>
    </article>
  );
}
