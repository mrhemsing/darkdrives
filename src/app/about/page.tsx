import { PageHero } from "@/components/page-hero";

export default function AboutPage() {
  return (
    <main>
      <PageHero eyebrow="Publisher" title="Off Grid Sask opened the file.">
        <p>
          Dark Drives is the night-drive arm of Off Grid Sask: documentary
          atmosphere, local obsession, and stories kept sealed until you pay for
          the key.
        </p>
      </PageHero>
      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl text-lg leading-8 text-bone-dim">
          <p>
            The first release is The Dark Side of Saskatoon, a full audio
            driving tour designed for groups who want a real night out without
            booking a room, waiting for a guide, or pretending the city is tame.
          </p>
        </div>
      </section>
    </main>
  );
}
