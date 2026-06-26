import { CityVoteForm } from "@/components/city-vote-form";
import { PageHero } from "@/components/page-hero";
import { expansionCities } from "@/data/cities";
import { tours } from "@/data/tours";

export default function CitiesPage() {
  return (
    <main>
      <PageHero eyebrow="Expansion ritual" title="Vote to summon the next file.">
        <p>
          Saskatoon is the first active signal. Every other city opens when
          enough people ask for it.
        </p>
      </PageHero>
      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div className="grid gap-4 md:grid-cols-2">
            <article className="border border-blood bg-paper p-5">
              <p className="font-mono text-xs uppercase text-sick">Pre-order</p>
              <h2 className="mt-3 font-display text-4xl uppercase">{tours[0].cityName}</h2>
              <p className="mt-3 text-sm text-bone-dim">{tours[0].title}</p>
            </article>
            {expansionCities.map((city) => (
              <article key={city} className="border border-ash-line bg-background p-5">
                <p className="font-mono text-xs uppercase text-ash">Vote to summon</p>
                <h2 className="mt-3 font-display text-4xl uppercase">{city}</h2>
                <p className="mt-3 text-sm text-bone-dim">
                  Demand list open. No route, stops, or stories published.
                </p>
              </article>
            ))}
          </div>
          <CityVoteForm defaultCity="regina" />
        </div>
      </section>
    </main>
  );
}
