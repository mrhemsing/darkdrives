import Link from "next/link";
import { ArrowRight, MapPin, Radio, Video } from "lucide-react";
import { CityVoteForm } from "@/components/city-vote-form";
import { FreeFileForm } from "@/components/free-file-form";
import { HeroSignal } from "@/components/hero-signal";
import { HowItWorksCard } from "@/components/how-it-works-card";
import { ProductCard } from "@/components/product-card";
import { RedactedCard } from "@/components/redacted-card";
import { StickyBuyBar } from "@/components/sticky-buy-bar";
import { TeaserMap } from "@/components/teaser-map";
import { bundleProducts, guideProducts, tours } from "@/data/tours";
import { pageMetadata, seo } from "@/lib/seo";

const tour = tours[0];

export const metadata = pageMetadata({ ...seo.home, path: "/" });

export default function Home() {
  return (
    <main>
      <section className="scanlines relative min-h-[92vh] overflow-hidden border-b border-ash-line">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-45"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=78')",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,9,8,0.96),rgba(10,9,8,0.74)_48%,rgba(10,9,8,0.92)),radial-gradient(circle_at_60%_20%,rgba(146,184,107,0.14),transparent_22rem)]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-5 py-28 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.34em] text-sick">
            Off Grid Sask presents
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-6xl uppercase leading-none text-bone sm:text-8xl lg:text-9xl">
            Everything you are about to hear happened here.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-bone-dim sm:text-lg">
            You have driven past all of it. You just never knew. The Dark Side
            of Saskatoon is a self-guided audio tour you run after dark. Real
            places. Real records. One city you thought you knew.
          </p>
          <HeroSignal audioSrc={tour.trailerAudio} />
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/catalog"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-blood px-5 font-mono text-sm uppercase text-bone transition hover:bg-blood-hot"
            >
              <ArrowRight size={18} aria-hidden />
              Shop the catalog
            </Link>
            <Link
              href="/saskatoon#preview"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-sm border border-ash-line px-5 font-mono text-sm uppercase text-bone transition hover:border-sick hover:text-sick"
            >
              <Radio size={18} aria-hidden />
              Preview the tour
            </Link>
          </div>
          <div className="mt-6 grid gap-2 border-y border-ash-line/80 py-4 font-mono text-[0.68rem] uppercase leading-5 tracking-[0.04em] text-ash sm:flex sm:flex-wrap sm:gap-x-4">
            <span>4 guides live</span>
            <span>230+ real locations</span>
            <span>Instant access</span>
            <span>Drive tonight</span>
          </div>
          <p className="mt-4 max-w-xl text-sm leading-6 text-bone-dim">
            Every road on every tour was driven by us, at the hours the stories happen.
          </p>
        </div>
      </section>

      <section className="border-b border-ash-line bg-background px-5 py-12 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {[
            ["01", "Unlock", "Buy the tour once. It is yours for good.", "key"],
            ["02", "Drive", "Gather your bravest friends. Wait for dark. Follow the route.", "road"],
            ["03", "Listen", "Press play at every stop. Hear what the city buried.", "waveform"],
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

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-sick">
              The map
            </p>
            <h2 className="mt-4 font-display text-5xl uppercase leading-none">
              It is all around you.
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-bone-dim">
              Every dot suggests the shape of the tour without marking a real
              stop. We moved the signal so you cannot cheat. Pay the toll and
              we hand you the real ones.
            </p>
            <p className="mt-5 flex gap-2 font-mono text-xs uppercase leading-6 tracking-[0.04em] text-ash">
              <span className="shrink-0 text-sick">&gt;</span>
              <span>
                {tour.stopCountDisplay}, citywide. The pins below are decoys.
              </span>
            </p>
            <div className="mt-7 grid grid-cols-3 gap-3">
              {tour.categoryStats.slice(0, 3).map((stat) => (
                <div
                  key={stat.category}
                  className="min-w-0 rounded-sm border border-ash-line border-t-2 border-t-blood/60 bg-background/70 px-3 py-4 sm:p-5"
                >
                  <p className="font-display text-[2.1rem] leading-none text-blood-hot sm:text-4xl">
                    {stat.count}
                  </p>
                  <p className="mt-2 break-words font-mono text-[0.62rem] uppercase leading-tight tracking-[0.12em] text-ash sm:text-xs">
                    {stat.category}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <TeaserMap pins={tour.decoyPins ?? []} />
        </div>
      </section>

      <section className="border-y border-ash-line bg-paper/70 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-sick">
              Redacted reports
            </p>
            <h2 className="mt-4 font-display text-5xl uppercase leading-none">
              Unlock the complete case files.
            </h2>
            <p className="mt-4 max-w-2xl text-bone-dim">
              Get access to the full investigation: audio, maps, redacted
              reports, and every stop sealed behind the public preview.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {tour.teasers.map((teaser) => (
              <RedactedCard key={teaser.id} teaser={teaser} />
            ))}
          </div>
          <div className="mt-10 border border-ash-line bg-background/70 p-5">
            <p className="font-mono text-sm uppercase text-bone-dim">
              {tour.stopCountDisplay.replace(" real locations", "")} more
              files. All of them sealed until you take the drive.
            </p>
            <Link
              href="/saskatoon#buy"
              className="mt-4 inline-flex h-11 items-center justify-center gap-2 rounded-sm bg-blood px-4 font-mono text-xs uppercase text-bone transition hover:bg-blood-hot"
            >
              <ArrowRight size={16} aria-hidden />
              Unlock the files {tour.priceDisplay}
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto mb-20 max-w-7xl">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-sick">
            Instant guides
          </p>
          <div className="mt-6 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <h2 className="font-display text-5xl uppercase leading-none">
                Download the dark.
              </h2>
              <p className="mt-5 max-w-2xl text-bone-dim">
                Regina, Lethbridge, and Ohio are GPS guides: buy, download,
                drive. Saskatoon stays the premium narrated audio tour.
              </p>
            </div>
            <Link
              href="/catalog"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-sm border border-blood px-4 font-mono text-xs uppercase text-bone transition hover:bg-blood"
            >
              <ArrowRight size={16} aria-hidden />
              View all products
            </Link>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {guideProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-4 grid gap-4">
            {bundleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        <div className="mx-auto mb-20 max-w-7xl">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-sick">
            Reports from the road
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
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-sick">
              More cities
            </p>
            <h2 className="mt-4 font-display text-5xl uppercase leading-none">
              Medicine Hat is still buried.
            </h2>
            <p className="mt-5 max-w-2xl text-bone-dim">
              The first catalog is live. Tell us what should get mapped after
              that.
            </p>
            <p className="mt-6 font-mono text-xl uppercase text-blood-hot">
              Film your drive. If you make it through, tag it. #DarkDrives
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 border border-ash-line px-3 py-2 font-mono text-xs text-bone-dim">
                <MapPin size={14} aria-hidden />
                Four files active
              </span>
              <span className="inline-flex items-center gap-2 border border-ash-line px-3 py-2 font-mono text-xs text-bone-dim">
                <Radio size={14} aria-hidden />
                Vote to summon
              </span>
              <span className="inline-flex items-center gap-2 border border-ash-line px-3 py-2 font-mono text-xs text-bone-dim">
                <Video size={14} aria-hidden />
                Footage wanted
              </span>
            </div>
          </div>
          <div className="grid gap-4">
            <FreeFileForm />
            <CityVoteForm defaultCity="medicine hat" />
          </div>
        </div>
      </section>
      <StickyBuyBar tour={tour} />
    </main>
  );
}
