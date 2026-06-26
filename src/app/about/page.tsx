import { PageHero } from "@/components/page-hero";
import { pageMetadata, seo } from "@/lib/seo";

export const metadata = pageMetadata({ ...seo.about, path: "/about" });

export default function AboutPage() {
  return (
    <main>
      <PageHero eyebrow="About Dark Drives" title="We map the dark side of cities.">
        <p>Every place has one. Most people feel it and keep driving.</p>
      </PageHero>
      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl space-y-6 text-lg leading-8 text-bone-dim">
          <p>
            The corner where something happened. The building people walk past
            a little faster. The road out of town you do not take at night. We
            stop, and we write it down.
          </p>
          <p>
            Dark Drives turns that buried history into a self-guided audio tour
            you run from your own car. Real locations. Real records. The crimes,
            the hauntings, and the things that never got an explanation, all
            stitched into a route you can drive in a single night.
          </p>
          <p>
            We started in Saskatoon, because that is where the bodies were, so
            to speak. We drove every road on the tour ourselves, at the hours
            the stories happen, so that when you go, you are following someone
            who already went first.
          </p>
          <p>
            Off Grid Sask is the studio behind it. We stay quiet about who we
            are. That feels appropriate.
          </p>
          <p>
            If your city has a story we should know, send it. We read
            everything.
          </p>
        </div>
      </section>
    </main>
  );
}
