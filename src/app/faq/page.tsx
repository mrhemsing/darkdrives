import { PageHero } from "@/components/page-hero";

const faqs = [
  ["Is this the actual tour?", "No. This site sells the tour. The player, route, stops, and audio are not public."],
  ["Can I see the map first?", "Only the teaser map. Its dots are decoys and cannot be used to reconstruct the drive."],
  ["Does audio autoplay?", "No. Any audio experience requires a user gesture and can be muted."],
  ["Is it safe?", "It is designed for lawful public roads and safe stopping areas. Drive sober and obey every sign."],
];

export default function FaqPage() {
  return (
    <main>
      <PageHero eyebrow="FAQ" title="Questions before the drive.">
        <p>Short answers. No spoilers.</p>
      </PageHero>
      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-4xl gap-4">
          {faqs.map(([question, answer]) => (
            <article key={question} className="border border-ash-line bg-paper p-5">
              <h2 className="font-display text-3xl uppercase">{question}</h2>
              <p className="mt-3 text-bone-dim">{answer}</p>
            </article>
          ))}
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map(([question, answer]) => ({
              "@type": "Question",
              name: question,
              acceptedAnswer: { "@type": "Answer", text: answer },
            })),
          }),
        }}
      />
    </main>
  );
}
