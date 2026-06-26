import { PageHero } from "@/components/page-hero";

export default function DisclaimerPage() {
  return (
    <main>
      <PageHero eyebrow="Legal" title="Entertainment only.">
        <p>
          Dark Drives is an entertainment experience. Stories may involve
          folklore, reported events, interpretation, and dramatized atmosphere.
        </p>
      </PageHero>
      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl space-y-5 text-bone-dim">
          <p>
            Do not trespass, enter private property, climb fences, ignore posted
            signs, block traffic, drive distracted, or drive impaired.
          </p>
          <p>
            The tour is intended for lawful public roads, lawful parking areas,
            and safe conditions. You are responsible for your vehicle, passengers,
            route choices, and local laws.
          </p>
        </div>
      </section>
    </main>
  );
}
