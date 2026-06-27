import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Radio, Video } from "lucide-react";
import { HeroSignal } from "@/components/hero-signal";
import { HowItWorksCard } from "@/components/how-it-works-card";
import { StickyBuyBar } from "@/components/sticky-buy-bar";
import { TeaserMap } from "@/components/teaser-map";
import { tours } from "@/data/tours";
import { pageMetadata, seo } from "@/lib/seo";

const tour = tours[0];

export const metadata = pageMetadata({ ...seo.home, path: "/" });

export default function Home() {
  return (
    <main>
      <section className="scanlines relative min-h-[92vh] overflow-hidden border-b border-ash-line">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-95"
          style={{
            backgroundImage: "url('/images/dark-drives-haunted-road.png')",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,9,8,0.96),rgba(10,9,8,0.74)_48%,rgba(10,9,8,0.92)),radial-gradient(circle_at_60%_20%,rgba(146,184,107,0.14),transparent_22rem)]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-5 py-28 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.34em] text-sick">
            Off Grid Sask presents
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl uppercase leading-[1.08] text-bone sm:text-7xl sm:leading-[1.04] lg:text-8xl">
            Everything you are about to hear happened here.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-bone-dim sm:text-lg">
            Grab your friends, get in the car after dark, and press play. As
            you drive, a voice tells you the true, terrifying story behind every
            haunted place you pass. 40+ of them, all over Saskatoon.
          </p>
          <HeroSignal audioSrc={tour.trailerAudio} />
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/saskatoon#buy"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-blood px-5 font-mono text-sm uppercase text-bone transition hover:bg-blood-hot"
            >
              <ArrowRight size={18} aria-hidden />
              Get the tour {tour.priceDisplay}
            </Link>
          </div>
          <div className="mt-6 grid gap-2 border-y border-ash-line/80 py-4 font-mono text-[0.68rem] uppercase leading-5 tracking-[0.04em] text-ash sm:flex sm:flex-wrap sm:gap-x-4">
            <span>Instant access</span>
            <span>Works on your phone</span>
            <span>No app to download</span>
            <span>Done in one night</span>
          </div>
        </div>
      </section>

      <section className="border-b border-ash-line bg-background px-5 py-12 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {[
            ["01", "Get the tour", "It lands on your phone instantly.", "key"],
            ["02", "Grab your friends", "Wait for dark. Pile into one car.", "road"],
            ["03", "Press play and drive", "We tell you everything. You just hold on.", "waveform"],
          ].map(([number, title, copy, motif]) => (
            <HowItWorksCard
              key={title}
              number={number}
              title={title}
              copy={copy}
              motif={motif as "key" | "road" | "waveform"}
            />
          ))}
        </div>
      </section>

      <section className="border-y border-ash-line bg-paper/70 px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-sick">
            This is the drive
          </p>
          <h2 className="mt-4 font-display text-5xl uppercase leading-[1.15]">
            Here&apos;s the whole idea.
          </h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {[
              {
                src: "/images/dark-drives-face-in-bushes.png",
                alt: "A pale face hidden in bushes outside a car at night.",
                title: "You stay in the car.",
                copy: "The scary stuff happens outside your window.",
              },
              {
                src: "/images/dark-drives-window-face.png",
                alt: "A dark abandoned building with a pale face in an upstairs window.",
                title: "You press play.",
                copy: "The voice tells you what really happened there.",
              },
            ].map((image) => (
              <figure
                key={image.src}
                className="overflow-hidden rounded-sm border border-ash-line bg-background"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-4">
                    <p className="font-display text-3xl uppercase leading-none text-bone">
                      {image.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-bone-dim">
                      {image.copy}
                    </p>
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
          <div className="mt-10 grid gap-8 min-[840px]:grid-cols-[0.88fr_1.12fr] min-[840px]:items-stretch min-[840px]:gap-11">
            <div className="flex flex-col gap-7">
              <div className="space-y-10">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-sick">
                    The map
                  </p>
                  <h3 className="mt-4 font-display text-5xl uppercase leading-[1.15] sm:text-6xl sm:leading-[1.15]">
                    It&apos;s all around you.
                  </h3>
                  <p className="mb-8 mt-5 max-w-xl text-lg leading-8 text-bone-dim">
                    40+ real haunted spots, scattered across the whole city. The
                    full map and route come with the tour.
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-3 min-[840px]:grid-cols-3">
                  {tour.categoryStats.slice(0, 3).map((stat) => (
                    <div
                      key={stat.category}
                      className="border border-ash-line border-t-2 border-t-blood bg-background px-4 py-3"
                    >
                      <p className="font-display text-4xl uppercase leading-none text-blood-hot">
                        {stat.count}
                      </p>
                      <p className="mt-2 font-mono text-[0.66rem] uppercase leading-4 tracking-[0.08em] text-ash">
                        {stat.category}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <Link
                href="/saskatoon#buy"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-sm bg-blood px-5 font-mono text-sm uppercase text-bone transition hover:bg-blood-hot min-[840px]:mt-auto"
              >
                Get the tour {tour.priceDisplay}
                <ArrowRight size={18} aria-hidden />
              </Link>
            </div>
            <TeaserMap pins={tour.decoyPins ?? []} />
          </div>
        </div>
      </section>

      <section className="border-y border-ash-line bg-paper/70 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-sick">
            The case files
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "The Black Alley",
              "The College Park Soap Girl",
              "The Confed Crawler",
              "Devil's Tail Crossing",
              "The Evergreen Field Thing",
              "The Haunted Road",
              "The Hodgson Rd Knocker",
              "The James Anderson Park Peeper",
              "The Diefenbaker Bunker",
              "The Old San Road",
              "The Train Bridge Shadow",
              "The Riverbank Watcher",
              "The Broadway Hotel Room",
              "The Nutana Footsteps",
              "The Sutherland Tracks",
              "The Cemetery Light",
            ].map((name, index) => (
              <div
                key={name}
                className="group relative min-h-28 overflow-hidden rounded-sm border border-ash-line bg-background px-4 py-4 transition hover:border-blood/50 hover:shadow-[0_0_0_1px_rgba(159,0,11,0.25),0_0_22px_rgba(159,0,11,0.12)]"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-2 opacity-40 [background:linear-gradient(var(--bone),var(--bone))_left_top/13px_1px_no-repeat,linear-gradient(var(--bone),var(--bone))_left_top/1px_13px_no-repeat,linear-gradient(var(--bone),var(--bone))_right_top/13px_1px_no-repeat,linear-gradient(var(--bone),var(--bone))_right_top/1px_13px_no-repeat,linear-gradient(var(--bone),var(--bone))_left_bottom/13px_1px_no-repeat,linear-gradient(var(--bone),var(--bone))_left_bottom/1px_13px_no-repeat,linear-gradient(var(--bone),var(--bone))_right_bottom/13px_1px_no-repeat,linear-gradient(var(--bone),var(--bone))_right_bottom/1px_13px_no-repeat]"
                />
                <div className="relative flex items-center justify-between gap-3 font-mono text-[0.6rem] uppercase tracking-[0.14em]">
                  <span className="text-ash">
                    FILE {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-blood-hot/85">SEALED</span>
                </div>
                <p className="relative mt-3 font-display text-xl uppercase leading-[1.08] text-bone sm:text-[1.38rem] sm:leading-[1.04]">
                  {name}
                </p>
                <div className="relative mt-3 flex items-center gap-2">
                  <span className="shrink-0 font-mono text-[0.56rem] uppercase tracking-[0.12em] text-ash">
                    LOC
                  </span>
                  <span
                    aria-hidden
                    className="relative h-3 border border-bone/10 bg-ash-deep before:absolute before:inset-0 before:bg-[linear-gradient(100deg,transparent_30%,rgba(230,225,214,0.06)_50%,transparent_70%)]"
                    style={{ width: `${50 + ((index * 7) % 24)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-7 font-display text-3xl uppercase leading-none text-blood-hot">
            And many more sealed.
          </p>
          <p className="mt-4 max-w-3xl font-mono text-xs uppercase leading-6 tracking-[0.04em] text-ash">
            The route, stop order, and the full story behind every name come
            with the tour.
          </p>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto mb-20 max-w-7xl">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-sick">
            Reports from the road
          </p>
          <h2 className="mt-4 font-display text-5xl uppercase leading-[1.15]">
            People are filming their reactions. They are not okay.
          </h2>
          <p className="mt-4 max-w-2xl text-bone-dim">
            Do yours. Tag #DarkDrives.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              [
                "We rolled the window down at the third stop like the audio said. Something rolled it back up.",
                "submitted anonymously",
              ],
              [
                "My friend laughed at the whole thing until stop eleven. He has not laughed about it since.",
                "K, Saskatoon",
              ],
              [
                "Do not do the cemetery one alone. That is all I will say.",
                "received 2:14 a.m.",
              ],
            ].map(([quote, byline]) => (
              <figure key={quote} className="border border-ash-line bg-paper p-5">
                <blockquote className="text-lg leading-7 text-bone">
                  {quote}
                </blockquote>
                <figcaption className="mt-5 font-mono text-xs uppercase text-ash">
                  {byline}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
        <div className="mx-auto max-w-7xl">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-sick">
              Start the tour
            </p>
            <h2 className="mt-4 font-display text-5xl uppercase leading-[1.15]">
              Saskatoon is waiting.
            </h2>
            <p className="mt-5 max-w-2xl text-bone-dim">
              One city. 40+ real haunted places. One night you will not forget.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 border border-ash-line px-3 py-2 font-mono text-xs text-bone-dim">
                <MapPin size={14} aria-hidden />
                {tour.stopCountDisplay}
              </span>
              <span className="inline-flex items-center gap-2 border border-ash-line px-3 py-2 font-mono text-xs text-bone-dim">
                <Radio size={14} aria-hidden />
                Audio preview live
              </span>
              <span className="inline-flex items-center gap-2 border border-ash-line px-3 py-2 font-mono text-xs text-bone-dim">
                <Video size={14} aria-hidden />
                Footage wanted
              </span>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/saskatoon#buy"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-sm bg-blood px-4 font-mono text-xs uppercase text-bone transition hover:bg-blood-hot"
              >
                <ArrowRight size={16} aria-hidden />
                Get the tour {tour.priceDisplay}
              </Link>
            </div>
            <p className="mt-4 font-mono text-xs uppercase leading-6 tracking-[0.04em] text-ash">
              Instant access. On your phone. Do it tonight.
            </p>
            <p className="mt-6 max-w-3xl text-sm leading-6 text-bone-dim">
              You never have to leave the car. The whole route is on normal
              public roads. Just bring friends, drive sober, keep your doors
              locked, and have a blast. {tour.minimumAge}+.
            </p>
          </div>
        </div>
      </section>
      <StickyBuyBar tour={tour} />
    </main>
  );
}
