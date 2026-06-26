import { PageHero } from "@/components/page-hero";
import { SubmitForm } from "@/components/submit-form";

export default function SubmitPage() {
  return (
    <main>
      <PageHero eyebrow="Community file" title="Submit a sighting.">
        <p>
          Send a tip to the studio inbox. Nothing auto-publishes and no public
          page will expose a location from this form.
        </p>
      </PageHero>
      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-2xl">
          <SubmitForm />
        </div>
      </section>
    </main>
  );
}
