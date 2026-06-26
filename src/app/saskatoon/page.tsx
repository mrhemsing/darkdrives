import type { Metadata } from "next";
import { Suspense } from "react";
import { Check, ShieldAlert } from "lucide-react";
import { CheckoutStatus } from "@/components/checkout-status";
import { PageHero } from "@/components/page-hero";
import { RedactedCard } from "@/components/redacted-card";
import { TeaserMap } from "@/components/teaser-map";
import { TourCta } from "@/components/tour-cta";
import { tours } from "@/data/tours";
import { pageMetadata, seo } from "@/lib/seo";

const tour = tours[0];

export const metadata: Metadata = pageMetadata({
  ...seo.saskatoon,
  path: "/saskatoon",
});

export default function SaskatoonPage() {
  return (
    <main>
      <PageHero eyebrow="First city file" title={tour.title}>
        <p>{tour.tagline}</p>
      </PageHero>

      <section className="px-5 py-14 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <div className="border border-ash-line bg-paper p-6">
              <p className="font-mono text-xs uppercase text-sick">
                {tour.launchLabel}
              </p>
              <p className="mt-3 font-display text-6xl uppercase text-blood-hot">
                {tour.priceDisplay}
              </p>
              <p className="mt-4 text-bone-dim">
                A one-time city unlock. Built for a car full of friends, a date,
                or a dare that got out of hand.
              </p>
              <div className="mt-6">
                <TourCta tour={tour} />
              </div>
              <div className="mt-4">
                <Suspense fallback={null}>
                  <CheckoutStatus />
                </Suspense>
              </div>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                tour.stopCountDisplay,
                tour.durationEstimate,
                "Replayable forever",
                "No booking required",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 border border-ash-line p-3 text-sm text-bone-dim">
                  <Check size={16} className="text-sick" aria-hidden />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <TeaserMap pins={tour.decoyPins} />
        </div>
      </section>

      <section className="border-y border-ash-line bg-paper/70 px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-5xl uppercase">What is inside</h2>
          <p className="mt-4 max-w-3xl text-bone-dim">
            The paid tour holds the names, routes, stories, and audio. This
            page only shows categories, broad neighbourhood energy, and redacted
            hooks.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {tour.categoryStats.map((stat) => (
              <div key={stat.category} className="border border-ash-line bg-background p-5">
                <p className="font-display text-5xl text-blood-hot">{stat.count}</p>
                <p className="font-mono text-xs uppercase text-ash">{stat.category}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {tour.neighbourhoodHints.map((hint) => (
              <span key={hint} className="border border-ash-line px-3 py-2 font-mono text-xs uppercase text-bone-dim">
                {hint}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-5xl uppercase">Redacted files</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {tour.teasers.map((teaser) => (
              <RedactedCard key={teaser.id} teaser={teaser} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-ash-line bg-paper px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-5xl uppercase">Cheaper than a room you escape.</h2>
            <p className="mt-4 text-bone-dim">
              Longer than a movie, easier than booking a group activity, and
              built for any night you can convince people to get in the car.
            </p>
          </div>
          <div className="border border-ash-line bg-background p-5">
            <div className="flex gap-3">
              <ShieldAlert className="mt-1 text-blood-hot" size={22} aria-hidden />
              <div>
                <h3 className="font-display text-3xl uppercase">Rules of the drive</h3>
                <p className="mt-3 text-sm leading-6 text-bone-dim">
                  Drive sober. Stay on public roads. Do not trespass. Obey every
                  sign. The dread is better when nobody has to explain it to a
                  tow truck driver.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: tour.title,
            brand: "Dark Drives",
            description: tour.tagline,
            offers: {
              "@type": "Offer",
              price: "19",
              priceCurrency: "CAD",
              availability: "https://schema.org/PreOrder",
            },
          }),
        }}
      />
    </main>
  );
}
