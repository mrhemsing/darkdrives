import { PageHero } from "@/components/page-hero";
import { tours } from "@/data/tours";

const tour = tours[0];

const terms = [
  [
    "1. Agreement",
    "By buying or using a Dark Drives tour, or by using this website, you agree to these terms and to our Disclaimer. If you do not agree, do not use the product.",
  ],
  [
    "2. What you are buying",
    "A Dark Drives tour is a digital audio product. Your purchase gives you a personal, non-transferable, non-commercial licence to access and use the tour for your own enjoyment. One purchase covers personal use within a single vehicle. You may not copy, record, redistribute, resell, publicly perform, or share the audio, route, or content.",
  ],
  [
    "3. Pre-orders and pricing",
    "A pre-order charges the founding price at the time of purchase and grants access when the tour launches. Prices, including founding prices, may change for future buyers. The price you paid is the price you paid.",
  ],
  ["4. Refunds", tour.refundLine],
  [
    "5. Eligibility and conduct",
    `You must be ${tour.minimumAge} or older to purchase. You agree to use the tour lawfully and respectfully, to obey all traffic and property laws, to avoid trespassing, and to follow the Disclaimer at all times. We may revoke access for misuse.`,
  ],
  [
    "6. Intellectual property",
    "All tour content, audio, writing, routes, branding, and site content are owned by Off Grid Sask and protected by copyright. All rights reserved.",
  ],
  [
    "7. Submissions",
    "If you send us a sighting, location, or story, you grant Off Grid Sask a non-exclusive, royalty-free right to use, adapt, and publish it in our products and marketing. Only submit material you have the right to share.",
  ],
  [
    "8. Assumption of risk and release",
    "You take part voluntarily and at your own risk, and you release Off Grid Sask and Dark Drives from claims arising from your participation, to the fullest extent permitted by law. See the Disclaimer.",
  ],
  [
    "9. Limitation of liability",
    "To the fullest extent permitted by law, Off Grid Sask and Dark Drives are not liable for any indirect, incidental, or consequential damages, and our total liability is limited to the amount you paid for the product.",
  ],
  [
    "10. Indemnification",
    "You agree to indemnify Off Grid Sask and Dark Drives against claims arising from your misuse of the product or your breach of these terms.",
  ],
  ["11. Governing law", "These terms are governed by the laws of Saskatchewan, Canada."],
  [
    "12. Changes",
    "We may update these terms. Continued use after an update means you accept the new version.",
  ],
  [
    "13. Contact",
    "Questions: studio@darkdrives.app. Off Grid Sask will publish its business mailing address before live sales begin.",
  ],
];

export default function TermsPage() {
  return (
    <main>
      <PageHero eyebrow="Terms" title="Use the file lawfully.">
        <p>
          Plain-language launch draft. Legal review is still required before
          live sales.
        </p>
      </PageHero>
      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl space-y-4 text-bone-dim">
          {terms.map(([title, copy]) => (
            <section key={title} className="border border-ash-line bg-paper p-5">
              <h2 className="font-display text-3xl uppercase text-bone">{title}</h2>
              <p className="mt-3 leading-7">{copy}</p>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
