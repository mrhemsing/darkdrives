import { CityVoteForm } from "@/components/city-vote-form";
import { PageHero } from "@/components/page-hero";
import { cityHooks } from "@/data/cities";
import { tours } from "@/data/tours";
import { pageMetadata, seo } from "@/lib/seo";

export const metadata = pageMetadata({ ...seo.cities, path: "/cities" });

export default function CitiesPage() {
  return (
    <main>
      <PageHero
        eyebrow="DARK DRIVES // THE ROAD DOES NOT END HERE"
        title="Every city has a dark side."
      >
        <p>
          Saskatoon was first. It will not be last. The cities below are
          already whispering. The one you wake gets driven next.
        </p>
      </PageHero>
      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div className="grid gap-4 md:grid-cols-2">
            <article className="border border-blood bg-paper p-5">
              <p className="font-mono text-xs uppercase text-sick">
                Pre-order open
              </p>
              <h2 className="mt-3 font-display text-4xl uppercase">
                {tours[0].cityName}
              </h2>
              <p className="mt-3 text-sm text-bone-dim">{tours[0].title}</p>
              <p className="mt-3 font-mono text-xs uppercase text-ash">
                {tours[0].stopCountDisplay}. Drive it tonight.
              </p>
            </article>
            {cityHooks.map((city) => (
              <article
                key={city.city}
                className="border border-ash-line bg-background p-5"
              >
                <p className="font-mono text-xs uppercase text-ash">
                  Summoning
                </p>
                <h2 className="mt-3 font-display text-4xl uppercase">
                  {city.city}
                </h2>
                <p className="mt-3 text-lg text-bone">{city.title}</p>
                <p className="mt-3 text-sm text-bone-dim">
                  {city.copy}
                </p>
              </article>
            ))}
          </div>
          <div>
            <h2 className="font-display text-4xl uppercase">
              Choose what we raise next.
            </h2>
            <p className="mt-4 text-bone-dim">
              The city with the most votes gets mapped first. Leave your email
              and we will tell you the night it goes live. Until then, it stays
              buried.
            </p>
            <div className="mt-6">
              <CityVoteForm defaultCity="regina" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
