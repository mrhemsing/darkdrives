export type EmailTemplate = {
  id: string;
  name: string;
  trigger: string;
  type: "transactional" | "marketing" | "transactional-marketing";
  subject: string;
  subjectAlt: string;
  preheader: string;
  body: string;
};

export const emailSequence: EmailTemplate[] = [
  {
    id: "city-vote-waitlist-confirmation",
    name: "City vote waitlist confirmation",
    trigger: "Someone votes for a coming-soon city on /cities.",
    type: "marketing",
    subject: "Your vote is counted.",
    subjectAlt: "You summoned {CITY}.",
    preheader: "We will tell you the night it goes live.",
    body: `Your vote for {CITY} is counted.

When we raise it, you will be among the first to know. We send one message, on the night it goes live, and nothing in between unless something in {CITY} cannot wait.

Until then, the city stays buried.

If you would rather not wait, Saskatoon is already awake. {COUNT}+ real locations, one night, your car.

[ TAKE THE SASKATOON DRIVE ]

Dark Drives
A product of Off Grid Sask`,
  },
  {
    id: "preorder-confirmation",
    name: "Pre-order confirmation",
    trigger: "Successful pre-order checkout.",
    type: "transactional",
    subject: "You're in. The route is being prepared.",
    subjectAlt: "Pre-order confirmed // The Dark Side of Saskatoon",
    preheader: "Your keys land on launch night.",
    body: `You're in, {FIRST_NAME}.

You have pre-ordered The Dark Side of Saskatoon at the founding price of {PRICE}. That price is locked. Your order reference is {ORDER_REF}.

Here is what happens next. On launch night this {SEASON}, we send you the keys: your full route and every audio file, yours for good. No app store, no subscription, no expiry. You do nothing until then except keep your sound on.

A reminder for the night you drive:
- The driver does not touch the phone. Hand it to a passenger.
- The whole route runs on public roads. You never have to trespass.
- Go sober. Obey every sign.

Questions about your order, reply to this email.

Dark Drives
A product of Off Grid Sask`,
  },
  {
    id: "prelaunch-anticipation",
    name: "Pre-launch anticipation",
    trigger: "A few days before launch, to all consenting pre-orderers.",
    type: "marketing",
    subject: "It is almost dark.",
    subjectAlt: "Three nights until the drive.",
    preheader: "Get the car ready.",
    body: `{FIRST_NAME}, it is almost time.

The Dark Side of Saskatoon goes live this {SEASON}. When it does, your route unlocks the same night. Use the days you have left to get ready.

Fill the tank. Pick the friends you trust to keep their nerve. Clear an evening you do not mind ending a little rattled.

One file from the route, to keep you company until then:

HAUNTING // FILE ███
The staff gave it a name so they would stop being scared.
It still walks the upstairs after last call.

You will find out which building soon enough.

[ SEE WHAT YOU PRE-ORDERED ]

Dark Drives
A product of Off Grid Sask`,
  },
  {
    id: "launch-night-delivery",
    name: "Launch night delivery",
    trigger: "Launch night, to all pre-orderers.",
    type: "transactional-marketing",
    subject: "The tour is yours. Wait for dark.",
    subjectAlt: "It is live. The Dark Side of Saskatoon.",
    preheader: "Your route is unlocked.",
    body: `It is live, {FIRST_NAME}.

The Dark Side of Saskatoon is yours. Your full route and every audio file are unlocked and waiting.

[ OPEN YOUR TOUR ]

How to run it:
1. Wait for dark. Round up your car.
2. Open the tour, follow the route, and press play at each stop.
3. Do what the audio tells you, if you are brave enough.

The rules, one more time: passenger holds the phone, driver drives, everyone stays sober, nobody trespasses. The city has kept these stories a long time. Treat the ground with respect.

One last thing. Film it. If you make it through, tag it #DarkDrives. We want to see the faces.

Drive safe. Drive sober. Good luck.

Dark Drives
A product of Off Grid Sask`,
  },
  {
    id: "cart-abandonment-recovery",
    name: "Cart abandonment recovery",
    trigger: "Started checkout, did not finish. Send once after 1 to 4 hours when consent exists.",
    type: "marketing",
    subject: "You left the engine running.",
    subjectAlt: "The route is still waiting.",
    preheader: "The founding price will not last.",
    body: `You got close, {FIRST_NAME}.

The Dark Side of Saskatoon is still in your hands, you just did not turn the key. The founding price of {PRICE} is still good, but it is a founding price for a reason. It goes up.

{COUNT}+ real locations. One night. Your car, your friends, your nerve.

[ FINISH YOUR PRE-ORDER ]

Or do not. The city is patient. It has waited this long.

Dark Drives
A product of Off Grid Sask`,
  },
];
