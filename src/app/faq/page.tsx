import { PageHero } from "@/components/page-hero";
import { tours } from "@/data/tours";
import { pageMetadata, seo } from "@/lib/seo";

export const metadata = pageMetadata({ ...seo.faq, path: "/faq" });

const tour = tours[0];

const faqSections = [
  {
    title: "The catalog",
    items: [
      [
        "What is The Dark Side of Saskatoon?",
        "A self-guided audio driving tour of real haunted, cursed, and unsolved places across Saskatoon. You drive the route in your own car, after dark, and at each stop you press play and hear what happened on that ground, and what people say has happened since.",
      ],
      [
        "What are Regina, Lethbridge, and Ohio?",
        "They are instant-download GPS guides. Regina and Lethbridge are city haunt guides. Ohio is a 150+ location creepy road-trip guide covering hauntings, abandoned places, cryptids, UFO skies, tunnels, and more.",
      ],
      [
        "Is this an app I have to download?",
        "No subscription and no app store. Audio tours include full access instructions. GPS guides are instant downloads you can open after checkout.",
      ],
      [
        "How long does it take?",
        "About 2 to 3 hours, depending on how often you stop, and how long you sit at each one before you can make yourself move on.",
      ],
      [
        "Do I have to do the stops in order?",
        "No. There is a suggested route, but you can run it in whatever order your nerve allows.",
      ],
      [
        "Can I do it more than once?",
        "Yes. Once it is yours, it is yours. Replay it as many times as you can stand.",
      ],
    ],
  },
  {
    title: "The drive",
    items: [
      [
        "Is it safe?",
        "The products are built for lawful public access. You never have to trespass, and you never should. GPS guide pins are not permission to enter land, abandoned structures, tunnels, ruins, private property, staff-only areas, or restricted places. Drive sober, obey every traffic law and sign, and use your head.",
      ],
      [
        "Do I have to get out of the car?",
        "For Saskatoon, almost never. For GPS guides, you choose how to approach each place. Stay on lawful public access, avoid restricted areas, and skip any location that looks unsafe or unclear.",
      ],
      [
        "Can I do it alone?",
        "You can. We do not recommend it. This is better with a full car and people you trust.",
      ],
      ["How many people can share one tour?", "One purchase covers one car. Pile your friends in."],
      [
        "Do I need cell signal?",
        "Download or open your files before you drive, especially for remote areas or the edges of a city. Do not rely on perfect signal.",
      ],
      [
        "What about winter?",
        "The tour runs year round. A Saskatchewan winter night only makes it worse, in the best way. Dress warm, keep the tank full, and drive to the conditions.",
      ],
    ],
  },
  {
    title: "Buying and access",
    items: [
      [
        "When does it launch?",
        `Saskatoon is on pre-order for ${tour.launchSeason}. Regina, Lethbridge, and Ohio are positioned as instant-download guides once their Stripe products are connected.`,
      ],
      [
        "What does pre-order mean?",
        "For Saskatoon, you pay the founding price now and lock it in. You get access the night the audio tour goes live. Instant guides do not use the pre-order flow.",
      ],
      ["Can I buy it as a gift?", "Yes. A Dark Drives tour makes a properly unsettling gift."],
      [
        "What is your refund policy?",
        `${tour.refundLine} Because this is a digital product, please read the policy before you buy.`,
      ],
      [
        "Will there be an All Access pass?",
        "Yes. The storefront is structured for an All Access bundle once prices and Stripe products are confirmed.",
      ],
    ],
  },
  {
    title: "The stories",
    items: [
      [
        "Are the stories true?",
        "They are drawn from real events, local news, urban legend, and reports people have submitted over the years. The crimes and the history are real. The hauntings are what people say. You can decide what to believe by the time you reach the last stop.",
      ],
      [
        "How scary is it?",
        "That depends on you and who is in the car. It deals with real crimes and real tragedy, so it sits closer to true crime and folklore than to a jump-scare haunted house. The fear is the quiet kind, the kind that follows you home.",
      ],
      [
        "Is there an age requirement?",
        `You must be ${tour.minimumAge} or older to buy. The content covers real crimes and mature themes, so use judgment about who is in the car.`,
      ],
    ],
  },
  {
    title: "Other cities",
    items: [
      [
        "Will there be other cities?",
        "Yes. Saskatoon, Regina, Lethbridge, and Ohio are the launch catalog. Medicine Hat and future cities stay on the vote list until they are built.",
      ],
      [
        "Can I suggest a location or a city?",
        "Please do. If your street or your city has a story we should know, send it. We read everything.",
      ],
    ],
  },
];

const faqs = faqSections.flatMap((section) => section.items);

export default function FaqPage() {
  return (
    <main>
      <PageHero eyebrow="FAQ" title="Questions you should ask before you drive.">
        <p>Use your head. Then use the headlights.</p>
      </PageHero>
      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-4xl gap-10">
          {faqSections.map((section) => (
            <section key={section.title}>
              <h2 className="font-display text-4xl uppercase text-blood-hot">
                {section.title}
              </h2>
              <div className="mt-4 grid gap-4">
                {section.items.map(([question, answer]) => (
                  <article key={question} className="border border-ash-line bg-paper p-5">
                    <h3 className="font-display text-3xl uppercase">{question}</h3>
                    <p className="mt-3 text-bone-dim">{answer}</p>
                  </article>
                ))}
              </div>
            </section>
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
