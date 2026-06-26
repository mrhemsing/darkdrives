import { PageHero } from "@/components/page-hero";
import { pageMetadata, seo } from "@/lib/seo";

export const metadata = pageMetadata({
  ...seo.howItWorks,
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  return (
    <main>
      <PageHero eyebrow="Concept only" title="Buy. Drive. Listen.">
        <p>
          Dark Drives is a storefront for self-guided audio driving tours. The
          public site never reveals the stops, route, rituals, or paid stories.
        </p>
      </PageHero>
      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {[
            ["01", "Unlock a city", "Pre-order or buy one city file."],
            ["02", "Gather the car", "Go at night, at your pace, with people who will not bail."],
            ["03", "Hear the ground", "Audio tells you what happened where you are allowed to be."],
          ].map(([number, title, copy]) => (
            <article key={title} className="border border-ash-line bg-paper p-5">
              <p className="font-mono text-xs text-blood-hot">{number}</p>
              <h2 className="mt-4 font-display text-4xl uppercase">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-bone-dim">{copy}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
