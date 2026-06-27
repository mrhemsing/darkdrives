import { PageHero } from "@/components/page-hero";

const sections = [
  [
    "For entertainment and information only.",
    "The Dark Side of Saskatoon is a work of entertainment. The stories, legends, and accounts in the tour are drawn from publicly reported events, local news, urban legend, folklore, and reports submitted by the public. Some are dramatized. We make no claim that any paranormal event described is literally true, and references to real events, places, or history are presented for storytelling and entertainment, not as statements of fact.",
  ],
  [
    "Real places, real respect.",
    "The tour references real, public locations. Many are near homes, businesses, schools, and places where real people live and work, and in some cases where real tragedies occurred. Treat every location with respect. Do not trespass. Do not enter private property. Do not disturb residents, businesses, memorials, graves, or the peace of any neighbourhood. Obey all signs, gates, and posted hours. Be considerate of victims and their families.",
  ],
  [
    "Drive safely.",
    "Never operate a phone or any device while driving. A passenger handles the audio. The driver drives. Obey all traffic laws, speed limits, and signs. Never drive while impaired by alcohol, cannabis, or any other substance. If you need to look at something, pull over only where it is safe and legal to do so.",
  ],
  [
    "You take part at your own risk.",
    "Participation is entirely voluntary and at your own risk. You are responsible for your own safety, your vehicle, your passengers, and your conduct, and for obeying all laws. To the fullest extent permitted by law, Off Grid Sask and Dark Drives are not liable for any injury, loss, damage, fine, or harm arising from your use of a tour or your visit to any location.",
  ],
  [
    "Stay outside restricted places.",
    "Do not enter abandoned structures, cross barriers, ignore posted signs, or access private land without explicit permission from the landowner. A location being referenced in the tour is not permission to enter it.",
  ],
];

export default function DisclaimerPage() {
  return (
    <main>
      <PageHero eyebrow="Legal" title="Disclaimer">
        <p>For entertainment and information only.</p>
      </PageHero>
      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl space-y-6 text-bone-dim">
          {sections.map(([title, copy]) => (
            <section key={title} className="border border-ash-line bg-paper p-5">
              <h2 className="font-display text-3xl uppercase text-bone">{title}</h2>
              <p className="mt-3 leading-7">{copy}</p>
            </section>
          ))}
          <p className="font-mono text-sm uppercase text-sick">
            If you cannot do this safely, lawfully, and respectfully, please do
            not do it.
          </p>
        </div>
      </section>
    </main>
  );
}
