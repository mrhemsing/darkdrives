import { PageHero } from "@/components/page-hero";

export default function TermsPage() {
  return (
    <main>
      <PageHero eyebrow="Terms" title="Use the file lawfully.">
        <p>
          Purchase unlocks access to a city audio experience for personal use.
          Redistribution, scraping, copying, or public reposting of paid content
          is not allowed.
        </p>
      </PageHero>
      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl space-y-5 text-bone-dim">
          <p>
            Final production terms, refund policy, and support contact will be
            completed before live sales begin.
          </p>
          <p>
            Pre-order customers receive launch access when the Saskatoon file is
            released.
          </p>
        </div>
      </section>
    </main>
  );
}
