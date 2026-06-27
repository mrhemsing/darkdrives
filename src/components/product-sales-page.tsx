import { Suspense } from "react";
import {
  Check,
  Clock,
  Headphones,
  Route,
  ShieldAlert,
  Star,
} from "lucide-react";
import { CheckoutStatus } from "@/components/checkout-status";
import { HowItWorksCard } from "@/components/how-it-works-card";
import { PageHero } from "@/components/page-hero";
import { RedactedCard } from "@/components/redacted-card";
import SignalPlayer from "@/components/signal-player";
import { TeaserMap } from "@/components/teaser-map";
import { TourCta } from "@/components/tour-cta";
import type { Tour } from "@/data/tours";

export function ProductSalesPage({ product }: { product: Tour }) {
  const availability =
    product.status === "preorder"
      ? "https://schema.org/PreOrder"
      : "https://schema.org/InStock";
  const isAudioTour = product.format === "audio-tour";
  const experienceCards = [
    [
      "Haunted buildings",
      "Stand outside old walls while the story in your headphones changes the street in front of you.",
    ],
    [
      "Ghost sightings",
      "Hear the accounts people still repeat when they think nobody is listening.",
    ],
    [
      "Historic crimes",
      "Follow the city through cold cases, bad nights, and details that never settled.",
    ],
    [
      "Forgotten cemeteries",
      "Stop near places most drivers pass without knowing what is buried nearby.",
    ],
    [
      "Urban legends",
      "Meet the stories Saskatoon keeps alive because nobody has fully explained them.",
    ],
    [
      "Unexplained mysteries",
      "Leave room for the parts of the city that still refuse a clean ending.",
    ],
  ];
  const snapshot = [
    ["Duration", product.durationEstimate],
    ["Stops", product.stopCountDisplay],
    ["Format", "Self-guided audio"],
    ["Map", "GPS on your phone"],
    ["Difficulty", "Easy drive"],
    ["When", "Available anytime"],
  ];
  const reviews = [
    [
      "We did one stop as a joke and ended up finishing the whole route in silence.",
      "Early test listener",
    ],
    [
      "It feels less like a tour and more like being let into a file you should not have opened.",
      "Saskatoon preview group",
    ],
    [
      "The best part is realizing you have passed these places for years without knowing the stories.",
      "Local listener",
    ],
  ];

  return (
    <main>
      {isAudioTour ? (
        <section className="relative min-h-[92vh] overflow-hidden border-b border-ash-line">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-55"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=82')",
            }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,9,8,0.96),rgba(10,9,8,0.66)_48%,rgba(10,9,8,0.9)),radial-gradient(circle_at_70%_35%,rgba(179,0,15,0.22),transparent_24rem)]" />
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-background to-transparent" />
          <div className="relative mx-auto grid min-h-[92vh] max-w-7xl gap-8 px-5 pb-10 pt-28 sm:px-8 lg:grid-cols-[1fr_23rem] lg:items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-sick">
                Dark Drives // Saskatoon audio tour
              </p>
              <h1 className="mt-5 max-w-4xl font-display text-6xl uppercase leading-none text-bone sm:text-8xl lg:text-9xl">
                Some stories refuse to stay buried.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-bone-dim sm:text-xl">
                Explore real locations through an immersive self-guided audio
                experience featuring haunted history, local legends, and chilling
                stories, with the route mapped on your phone.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <TourCta
                  tour={product}
                  label="Unlock the tour"
                  compact
                  showConsent={false}
                />
                <a
                  href="#preview"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-sm border border-ash-line bg-background/65 px-4 font-mono text-xs uppercase text-bone transition hover:border-sick hover:text-sick"
                >
                  <Headphones size={16} aria-hidden />
                  Preview the tour
                </a>
              </div>
            </div>
            <div className="border border-ash-line bg-background/82 p-4 backdrop-blur">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-sick">
                Tour snapshot
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {snapshot.map(([label, value]) => (
                  <div key={label} className="border border-ash-line bg-paper/80 p-3">
                    <p className="font-mono text-[0.62rem] uppercase text-ash">
                      {label}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-bone">{value}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm leading-6 text-bone-dim">
                No guide, no schedule, no crowd. Start when the city gets quiet.
              </p>
            </div>
          </div>
        </section>
      ) : (
        <PageHero eyebrow={`DARK DRIVES // ${product.formatBadge}`} title={product.title}>
          <p>{product.tagline}</p>
        </PageHero>
      )}

      {isAudioTour ? (
        <section id="preview" className="border-b border-ash-line bg-paper px-5 py-16 sm:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-sick">
                Tour preview
              </p>
              <h2 className="mt-4 font-display text-5xl uppercase leading-none">
                See what you are buying.
              </h2>
              <p className="mt-5 text-bone-dim">
                The tour is built to feel cinematic in your headphones: narrated
                story, low atmosphere, and enough silence to make the street
                around you feel different.
              </p>
              <p className="mt-4 inline-flex items-center gap-2 font-mono text-xs uppercase text-ash">
                <Headphones size={15} aria-hidden />
                Best experienced with headphones
              </p>
            </div>
            <div className="border border-ash-line bg-background p-5">
              <div className="flex items-center justify-between gap-4 border-b border-ash-line pb-4">
                <div>
                  <p className="font-display text-3xl uppercase">
                    Saskatoon preview file
                  </p>
                  <p className="mt-1 font-mono text-xs uppercase text-ash">
                    00:48 sample / final audio asset slot
                  </p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blood bg-blood/20 text-blood-hot">
                  <Headphones size={22} aria-hidden />
                </div>
              </div>
              {product.trailerAudio ? (
                <SignalPlayer
                  audioSrc={product.trailerAudio}
                  label="Preview signal"
                  description="Press play. The bars move with the file."
                  className="mt-5"
                />
              ) : (
                <div className="mt-5">
                  <div className="flex h-24 items-end gap-1 overflow-hidden border border-ash-line bg-paper p-3">
                    {Array.from({ length: 42 }).map((_, index) => (
                      <span
                        key={index}
                        className="w-full bg-sick/70"
                        style={{ height: `${18 + ((index * 17) % 64)}%` }}
                      />
                    ))}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-bone-dim">
                    Preview sample is being mastered. This slot is reserved for
                    the final 30 to 60 second narrated sample with atmosphere.
                  </p>
                </div>
              )}
              <div className="mt-5">
                <TourCta
                  tour={product}
                  label="Unlock the tour"
                  compact
                  showConsent={false}
                />
              </div>
            </div>
          </div>
        </section>
      ) : null}

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
              <div className="mt-5 border border-ash-line bg-background/70 p-4">
                <p className="font-display text-3xl uppercase text-bone">
                  Self-guided driving tour map
                </p>
                <p className="mt-3 text-sm leading-6 text-bone-dim">
                  Explore all 40+ locations using GPS on your phone, with
                  backstories, urban legends, and narrated audio at each stop.
                </p>
                <p className="mt-4 font-mono text-xs uppercase leading-5 tracking-[0.04em] text-ash">
                  Ages {product.minimumAge}+. Keep your doors locked. Passenger
                  handles the phone. Drive safe and sober.
                </p>
              </div>
              <div id="buy" className="mt-6">
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
            <TeaserMap pins={product.decoyPins} numbered={isAudioTour} />
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
          <h2 className="font-display text-5xl uppercase">
            {isAudioTour ? "What you will experience" : "What is inside"}
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {(isAudioTour ? experienceCards : product.whatsInside.map((item) => [item, item])).map(
              ([title, copy]) => (
              <div key={title} className="border border-ash-line bg-background p-5">
                {isAudioTour ? (
                  <p className="font-display text-3xl uppercase text-bone">{title}</p>
                ) : null}
                <p className={`${isAudioTour ? "mt-3" : ""} text-bone-dim`}>{copy}</p>
              </div>
              ),
            )}
          </div>
          <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
            {product.categoryStats.map((stat) => (
              <div
                key={stat.category}
                className="min-w-0 border border-ash-line bg-background p-3 sm:p-5"
              >
                <p className="font-display text-[2.6rem] leading-none text-blood-hot sm:text-5xl">
                  {stat.count}
                </p>
                <p className="mt-2 break-words font-mono text-[0.56rem] uppercase leading-tight text-ash sm:text-xs">
                  {stat.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {isAudioTour ? (
        <section className="border-b border-ash-line px-5 py-16 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-sick">
                  How it works
                </p>
                <h2 className="mt-4 font-display text-5xl uppercase leading-none">
                  Four steps. No friction.
                </h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {[
                  ["01", "Unlock", "Unlock the tour.", "key"],
                  ["02", "Drive", "Drive to the starting area.", "road"],
                  ["03", "Gear up", "Put on your headphones.", "waveform"],
                  ["04", "Listen", "Press play.", "waveform"],
                ].map(([number, title, copy, motif]) => (
                  <HowItWorksCard
                    key={number}
                    number={number}
                    title={title}
                    copy={copy}
                    motif={motif as "key" | "road" | "waveform" | "route"}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}

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

      {isAudioTour ? (
        <section className="border-y border-ash-line bg-paper/70 px-5 py-16 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-sick">
                  Proof
                </p>
                <h2 className="mt-4 font-display text-5xl uppercase leading-none">
                  Built from documented history and local legends.
                </h2>
              </div>
              <div className="grid grid-cols-3 gap-3 text-center">
                {[
                  [Star, "4.9", "preview rating"],
                  [Route, "40+", "real locations"],
                  [Clock, "2-3h", "night route"],
                ].map(([Icon, value, label]) => (
                  <div key={String(label)} className="border border-ash-line bg-background p-3">
                    <Icon className="mx-auto text-sick" size={18} aria-hidden />
                    <p className="mt-2 font-display text-3xl text-blood-hot">{String(value)}</p>
                    <p className="font-mono text-[0.58rem] uppercase text-ash">{String(label)}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {reviews.map(([quote, byline]) => (
                <figure key={quote} className="border border-ash-line bg-background p-5">
                  <blockquote className="text-lg leading-7 text-bone">{quote}</blockquote>
                  <figcaption className="mt-5 font-mono text-xs uppercase text-ash">
                    {byline}
                  </figcaption>
                </figure>
              ))}
            </div>
            <div className="mt-8">
              <TourCta
                tour={product}
                label="Unlock the tour"
                compact
                showConsent={false}
              />
            </div>
          </div>
        </section>
      ) : null}

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
                <p className="mt-2 font-mono text-xs uppercase leading-5 tracking-[0.04em] text-blood-hot">
                  Ages {product.minimumAge}+ // Entertainment only // Respect property
                </p>
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
              {isAudioTour
                ? "Are you ready?"
                : product.status === "preorder"
                ? "Lock in the founding price."
                : "Open the file tonight."}
            </h2>
            <p className="mt-5 text-bone-dim">
              {isAudioTour
                ? "Tonight you will drive streets thousands of people pass every day. Most will never know what happened there. You will."
                : `${product.priceDisplay}. ${product.refundLine}`}
            </p>
          </div>
          <TourCta
            tour={product}
            label={isAudioTour ? "Unlock the tour" : undefined}
          />
        </div>
      </section>

      {isAudioTour ? (
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ash-line bg-background/94 p-3 backdrop-blur md:hidden">
          <TourCta
            tour={product}
            label="Unlock the tour"
            compact
            showConsent={false}
          />
        </div>
      ) : null}

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
