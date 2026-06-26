import { Suspense } from "react";
import { Check, ShieldAlert } from "lucide-react";
import { CheckoutStatus } from "@/components/checkout-status";
import { PageHero } from "@/components/page-hero";
import { RedactedCard } from "@/components/redacted-card";
import { TeaserMap } from "@/components/teaser-map";
import { TourCta } from "@/components/tour-cta";
import type { Tour } from "@/data/tours";

export function ProductSalesPage({ product }: { product: Tour }) {
  const availability =
    product.status === "preorder"
      ? "https://schema.org/PreOrder"
      : "https://schema.org/InStock";

  return (
    <main>
      <PageHero eyebrow={`DARK DRIVES // ${product.formatBadge}`} title={product.title}>
        <p>{product.tagline}</p>
      </PageHero>

      <section className="px-5 py-14 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <div className="border border-ash-line bg-paper p-6">
              <p className="font-mono text-xs uppercase text-sick">
                {product.launchLabel}
              </p>
              <p className="mt-3 font-display text-6xl uppercase text-blood-hot">
                {product.priceDisplay}
              </p>
              <p className="mt-4 text-bone-dim">{product.proofCopy}</p>
              <div className="mt-6">
                <TourCta tour={product} />
              </div>
              <div className="mt-4">
                <Suspense fallback={null}>
                  <CheckoutStatus />
                </Suspense>
              </div>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                product.locationCountDisplay,
                product.durationEstimate,
                product.deliverable,
                "Buy once, yours for good",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 border border-ash-line p-3 text-sm text-bone-dim"
                >
                  <Check size={16} className="text-sick" aria-hidden />
                  {item}
                </div>
              ))}
            </div>
          </div>
          {product.decoyPins ? (
            <TeaserMap pins={product.decoyPins} />
          ) : (
            <div className="min-h-[28rem] border border-ash-line bg-paper p-6">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-sick">
                Broad region only
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {product.regionHints.map((hint) => (
                  <div key={hint} className="border border-ash-line bg-background p-5">
                    <p className="font-display text-3xl uppercase text-bone">
                      {hint}
                    </p>
                    <p className="mt-3 font-mono text-xs uppercase text-ash">
                      Exact stops unlock after purchase
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="border-y border-ash-line bg-paper/70 px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-5xl uppercase">What is inside</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {product.whatsInside.map((item) => (
              <div key={item} className="border border-ash-line bg-background p-5">
                <p className="text-bone-dim">{item}</p>
              </div>
            ))}
          </div>
          <div className="metric-grid mt-8">
            {product.categoryStats.map((stat) => (
              <div
                key={stat.category}
                className="metric-card bg-background"
              >
                <p className="metric-card-value">{stat.count}</p>
                <p className="metric-card-label">{stat.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-5xl uppercase">Redacted files</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {product.teasers.map((teaser) => (
              <RedactedCard key={teaser.id} teaser={teaser} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-ash-line bg-paper px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-5xl uppercase">
              Explore safe. Drive sober.
            </h2>
            <p className="mt-4 text-bone-dim">
              Dark Drives points you toward real places, which means the rules
              matter. Respect private property, posted signs, operating
              businesses, homes, memorials, and anyone else sharing the road.
            </p>
          </div>
          <div className="border border-ash-line bg-background p-5">
            <div className="flex gap-3">
              <ShieldAlert className="mt-1 text-blood-hot" size={22} aria-hidden />
              <div>
                <h3 className="font-display text-3xl uppercase">The rules</h3>
                <p className="mt-3 text-sm leading-6 text-bone-dim">
                  {product.riskLine ??
                    "Do not trespass. Do not enter private property. Do not block traffic. The driver does not touch the phone."}
                </p>
                <ul className="mt-5 space-y-2 text-sm leading-6 text-bone-dim">
                  {product.safetyBullets.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-blood-hot" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-ash-line px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-5xl uppercase">Before you buy</h2>
          <div className="mt-8 grid gap-4">
            {product.faqs.map((faq) => (
              <article key={faq.question} className="border border-ash-line bg-paper p-5">
                <h3 className="font-display text-3xl uppercase">{faq.question}</h3>
                <p className="mt-3 text-bone-dim">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-sick">
              {product.imprint}
            </p>
            <h2 className="mt-4 font-display text-5xl uppercase leading-none">
              {product.status === "preorder"
                ? "Lock in the founding price."
                : "Open the file tonight."}
            </h2>
            <p className="mt-5 text-bone-dim">
              {product.priceDisplay}. {product.refundLine}
            </p>
          </div>
          <TourCta tour={product} />
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.title,
            brand: "Dark Drives",
            description: product.tagline,
            offers: {
              "@type": "Offer",
              price: product.priceAmount,
              priceCurrency: product.priceCurrency,
              availability,
            },
          }),
        }}
      />
    </main>
  );
}
