import { PageHero } from "@/components/page-hero";
import { pageMetadata, seo } from "@/lib/seo";

export const metadata = pageMetadata({
  ...seo.howItWorks,
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  return (
    <main>
      <PageHero eyebrow="Field protocol" title="How the drive works.">
        <p>It is simple. That is what makes it worse.</p>
      </PageHero>
      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            [
              "01",
              "Unlock",
              "Buy the tour once. The full route and every audio file are yours for good. No app store, no subscription, no expiry.",
            ],
            [
              "02",
              "Gather",
              "Wait for dark. Round up the people you trust to keep their nerve. Fill the tank.",
            ],
            [
              "03",
              "Drive",
              "Follow the route across the city. At each stop you press play, and you hear what happened on that exact patch of ground.",
            ],
            [
              "04",
              "Listen",
              "You are the camera now. Roll the window down when the audio says to. Stay in the car when it says to.",
            ],
          ].map(([number, title, copy]) => (
            <article key={title} className="border border-ash-line bg-paper p-5">
              <p className="font-mono text-xs text-blood-hot">{number}</p>
              <h2 className="mt-4 font-display text-4xl uppercase">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-bone-dim">{copy}</p>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-4xl border border-ash-line bg-background p-6">
          <h2 className="font-display text-4xl uppercase">A few honest truths</h2>
          <ul className="mt-5 space-y-3 text-bone-dim">
            <li>The whole route runs on public roads and public places. You never have to trespass, and you never should.</li>
            <li>The driver does not touch the phone. Hand it to a passenger.</li>
            <li>Go sober. Obey every sign. Use the head you were born with.</li>
            <li>It runs about 2 to 3 hours. Longer if you keep stopping to check the back seat.</li>
          </ul>
          <p className="mt-6 text-bone-dim">
            Then the road ends, you drive home, and the city looks a little
            different than it did before.
          </p>
        </div>
      </section>
    </main>
  );
}
