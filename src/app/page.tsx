import Link from "next/link";
import { ArrowRight, MapPin, Radio, Volume2 } from "lucide-react";
import { CityVoteForm } from "@/components/city-vote-form";
import { EnterGate } from "@/components/enter-gate";
import { RedactedCard } from "@/components/redacted-card";
import { TeaserMap } from "@/components/teaser-map";
import { TourCta } from "@/components/tour-cta";
import { tours } from "@/data/tours";

const tour = tours[0];

export default function Home() {
  return (
    <main>
      <section className="scanlines relative min-h-[92vh] overflow-hidden border-b border-ash-line">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(146,184,107,0.11),transparent_20rem),linear-gradient(180deg,rgba(10,9,8,0.25),var(--background)_86%)]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-5 py-28 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.34em] text-sick">
            Off Grid Sask presents
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-6xl uppercase leading-none text-bone sm:text-8xl lg:text-9xl">
            <span className="flicker block text-blood-hot">Dark Drives</span>
          </h1>
          <p className="mt-6 max-w-2xl text-2xl font-semibold leading-tight text-bone sm:text-4xl">
            Everything you are about to hear happened here. Get in the car.
          </p>
          <p className="mt-6 max-w-xl text-base leading-7 text-bone-dim sm:text-lg">
            A self-guided audio driving tour through the haunted, cursed, and
            true-crime files Saskatoon leaves out of the brochure.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/saskatoon"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-blood px-5 font-mono text-sm uppercase text-bone transition hover:bg-blood-hot"
            >
              <ArrowRight size={18} aria-hidden />
              Open the Saskatoon file
            </Link>
            <EnterGate />
          </div>
        </div>
      </section>

      <section className="border-b border-ash-line bg-paper/55 px-5 py-12 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {[
            ["Buy the file", "One city unlock. No booking. No lobby."],
            ["Drive after dark", "Bring friends, a date, or the wrong person."],
            ["Listen on site", "Narrated audio turns ordinary streets into evidence."],
          ].map(([title, copy], index) => (
            <div key={title} className="border border-ash-line bg-background/70 p-5">
              <p className="font-mono text-xs text-blood-hot">STEP 0{index + 1}</p>
              <h2 className="mt-4 font-display text-3xl uppercase">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-bone-dim">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-sick">
              City-wide signal
            </p>
            <h2 className="mt-4 font-display text-5xl uppercase leading-none">
              Forty plus reports. Zero revealed stops.
            </h2>
            <p className="mt-5 text-bone-dim">
              The map shows scale only. Every dot is a decoy, with no labels,
              popups, real coordinates, or paid story content in the public
              bundle.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {tour.categoryStats.slice(0, 3).map((stat) => (
                <div key={stat.category} className="border border-ash-line p-4">
                  <p className="font-display text-4xl text-blood-hot">
                    {stat.count}
                  </p>
                  <p className="font-mono text-xs uppercase text-ash">
                    {stat.category}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <TeaserMap pins={tour.decoyPins} />
        </div>
      </section>

      <section className="border-y border-ash-line bg-paper/70 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-sick">
                Redacted reports
              </p>
              <h2 className="mt-4 font-display text-5xl uppercase leading-none">
                The answer is paid.
              </h2>
            </div>
            <TourCta tour={tour} />
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {tour.teasers.map((teaser) => (
              <RedactedCard key={teaser.id} teaser={teaser} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-sick">
              More cities
            </p>
            <h2 className="mt-4 font-display text-5xl uppercase leading-none">
              Tell us where to haunt next.
            </h2>
            <p className="mt-5 max-w-2xl text-bone-dim">
              Saskatoon opens the archive. Regina, Edmonton, Calgary, Winnipeg,
              and Vancouver are waiting for demand to get loud enough.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 border border-ash-line px-3 py-2 font-mono text-xs text-bone-dim">
                <MapPin size={14} aria-hidden />
                Saskatoon file active
              </span>
              <span className="inline-flex items-center gap-2 border border-ash-line px-3 py-2 font-mono text-xs text-bone-dim">
                <Radio size={14} aria-hidden />
                Vote to summon
              </span>
              <span className="inline-flex items-center gap-2 border border-ash-line px-3 py-2 font-mono text-xs text-bone-dim">
                <Volume2 size={14} aria-hidden />
                Audio never autoplays
              </span>
            </div>
          </div>
          <CityVoteForm defaultCity="regina" />
        </div>
      </section>
    </main>
  );
}
