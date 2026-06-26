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
      <PageHero eyebrow="DARK DRIVES // TOUR 001" title={tour.title}>
        <p>
          A self-guided audio tour of the city&apos;s haunted, cursed, and
          unsolved. {tour.stopCountDisplay}. Drive them after dark, if your
          nerve holds.
        </p>
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
                A one-time city unlock. No booking, no staff, no closing time.
                Just you, your car, your friends, your nerve, and a city that
                has been keeping things quiet.
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
                "Full narrated audio",
                "Buy once, yours for good",
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
          <h2 className="font-display text-5xl uppercase">What you are buying</h2>
          <p className="mt-4 max-w-3xl text-bone-dim">
            {tour.stopCountDisplay} across Saskatoon, every one of them true to
            the ground. Full narrated audio for every stop. About 2 to 3 hours,
            self-guided, at your own pace. Drive it any night you want. Replay
            it as many times as you can stand.
          </p>
          <h3 className="mt-12 font-display text-4xl uppercase">
            We are not telling you where.
          </h3>
          <p className="mt-4 max-w-3xl text-bone-dim">
            That is the whole point. Here is what we will say.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {tour.categoryStats.map((stat) => (
              <div key={stat.category} className="border border-ash-line bg-background p-5">
                <p className="font-display text-5xl text-blood-hot">{stat.count}</p>
                <p className="font-mono text-xs uppercase text-ash">{stat.category}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-bone-dim">
            From Nutana to Sutherland to the edges of the city where the
            pavement gives out. You have been near most of them already.
          </p>
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
            <h2 className="font-display text-5xl uppercase">Cheaper than an escape room.</h2>
            <p className="mt-4 text-bone-dim">
              Longer than a movie. No booking, no staff, no closing time. Just
              you, your car, your friends, your nerve, and a city that has been
              keeping things quiet.
            </p>
          </div>
          <div className="border border-ash-line bg-background p-5">
            <div className="flex gap-3">
              <ShieldAlert className="mt-1 text-blood-hot" size={22} aria-hidden />
              <div>
                <h3 className="font-display text-3xl uppercase">The rules</h3>
                <p className="mt-3 text-sm leading-6 text-bone-dim">
                  The driver does not touch the phone. Hand it to a passenger.
                  Stay in the vehicle unless the audio tells you it is safe to
                  step out. Respect every landmark. Do not trespass. Drive
                  sober. Obey every sign. If you hear knocking, it is probably
                  nothing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-ash-line px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-5xl uppercase">Questions before you drive</h2>
          <div className="mt-8 grid gap-4">
            {[
              [
                "How does it work?",
                "Buy the tour, drive to each stop, press play. The audio does the rest.",
              ],
              [
                "Do I have to go in order?",
                "No. Run the route however your nerve allows.",
              ],
              [
                "Is it safe?",
                "The tour sticks to public roads and public places. You will never need to trespass. Drive sober, obey signs, and use your head.",
              ],
              ["Can I do it alone?", "You can. We do not recommend it."],
              [
                "How long does it take?",
                "About 2 to 3 hours. Longer if you keep stopping to make sure.",
              ],
              [
                "When does it launch?",
                "Pre-order now at the founding price. The keys land in your inbox on launch night.",
              ],
            ].map(([question, answer]) => (
              <article key={question} className="border border-ash-line bg-paper p-5">
                <h3 className="font-display text-3xl uppercase">{question}</h3>
                <p className="mt-3 text-bone-dim">{answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-sick">
              Closing file
            </p>
            <h2 className="mt-4 font-display text-5xl uppercase leading-none">
              The city is waiting for you to notice.
            </h2>
            <p className="mt-5 text-bone-dim">
              Founding price {tour.priceDisplay}. {tour.refundLine}
            </p>
          </div>
          <TourCta tour={tour} />
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
