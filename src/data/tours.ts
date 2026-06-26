export type TourStatus = "live" | "preorder" | "coming-soon" | "vote";

export type TeaserCard = {
  id: string;
  category: string;
  hook: string;
};

export type Tour = {
  id: string;
  citySlug: string;
  cityName: string;
  title: string;
  tagline: string;
  status: TourStatus;
  priceId?: string;
  priceDisplay: string;
  launchSeason: string;
  refundLine: string;
  minimumAge: string;
  launchLabel?: string;
  durationEstimate: string;
  stopCountDisplay: string;
  coverImage: string;
  trailerAudio?: string;
  categoryStats: { category: string; count: number }[];
  neighbourhoodHints: string[];
  teasers: TeaserCard[];
  decoyPins: { lat: number; lng: number }[];
};

export const commerceMode =
  (process.env.NEXT_PUBLIC_COMMERCE_MODE as "preorder" | "live" | "waitlist") ??
  "preorder";

export const tours: Tour[] = [
  {
    id: "dark-side-of-saskatoon",
    citySlug: "saskatoon",
    cityName: "Saskatoon",
    title: "The Dark Side of Saskatoon",
    tagline: "A full audio driving tour through the city after the lights quit.",
    status: commerceMode === "live" ? "live" : "preorder",
    priceId: process.env.STRIPE_SASKATOON_PRICE_ID,
    priceDisplay: "$19 CAD",
    launchSeason: "this fall",
    refundLine: "Refundable until launch night.",
    minimumAge: "18",
    launchLabel: "Founding price $19 CAD. Launching this fall.",
    durationEstimate: "About 2 to 3 hours",
    stopCountDisplay: "40+ real locations",
    coverImage: "/images/saskatoon-night-road.svg",
    categoryStats: [
      { category: "True crime", count: 9 },
      { category: "Hauntings", count: 11 },
      { category: "Cursed sites", count: 7 },
      { category: "Apparitions", count: 6 },
      { category: "Cemetery files", count: 4 },
      { category: "Cryptid reports", count: 3 },
    ],
    neighbourhoodHints: [
      "Nutana",
      "Sutherland",
      "Riversdale",
      "City Park",
      "The riverbank",
      "Industrial edges",
    ],
    teasers: [
      {
        id: "true-crime-ditch",
        category: "TRUE CRIME",
        hook:
          "A man's body in the ditch. The case went cold. The voice still asking for help did not.",
      },
      {
        id: "cursed-corner",
        category: "CURSED GROUND",
        hook:
          "Cross at this corner and check your shadow. It grows something it should not have.",
      },
      {
        id: "apparition-crossing",
        category: "APPARITION",
        hook:
          "She waits to cross in a dress a hundred years out of style. Look twice and the corner is empty.",
      },
      {
        id: "haunting-upstairs",
        category: "HAUNTING",
        hook:
          "The staff gave it a name so they would stop being scared. It still walks the upstairs after last call.",
      },
      {
        id: "called-up",
        category: "RITUAL",
        hook:
          "A few kids wanted to get back at a teacher. What they called up stayed long after he left.",
      },
      {
        id: "creature-water",
        category: "THE CREATURE",
        hook: "Say the name across the water and wait. Something always answers.",
      },
    ],
    decoyPins: [
      { lat: 52.1252, lng: -106.6931 },
      { lat: 52.1494, lng: -106.6522 },
      { lat: 52.1148, lng: -106.6148 },
      { lat: 52.0976, lng: -106.6754 },
      { lat: 52.1679, lng: -106.7019 },
      { lat: 52.1382, lng: -106.5927 },
      { lat: 52.1029, lng: -106.7288 },
      { lat: 52.1854, lng: -106.6407 },
      { lat: 52.0715, lng: -106.6124 },
      { lat: 52.1328, lng: -106.7491 },
      { lat: 52.1559, lng: -106.7198 },
      { lat: 52.0906, lng: -106.6457 },
      { lat: 52.1798, lng: -106.6812 },
      { lat: 52.1208, lng: -106.5736 },
      { lat: 52.0617, lng: -106.6885 },
      { lat: 52.1971, lng: -106.6176 },
      { lat: 52.1447, lng: -106.7652 },
      { lat: 52.0839, lng: -106.7043 },
      { lat: 52.1646, lng: -106.5839 },
      { lat: 52.1113, lng: -106.7587 },
      { lat: 52.1891, lng: -106.7282 },
      { lat: 52.0758, lng: -106.6602 },
      { lat: 52.1517, lng: -106.6284 },
      { lat: 52.1237, lng: -106.7145 },
      { lat: 52.0586, lng: -106.6331 },
      { lat: 52.2064, lng: -106.6619 },
      { lat: 52.1712, lng: -106.7498 },
      { lat: 52.0993, lng: -106.5909 },
      { lat: 52.1366, lng: -106.6815 },
      { lat: 52.1848, lng: -106.6014 },
      { lat: 52.0662, lng: -106.7251 },
      { lat: 52.1179, lng: -106.6358 },
      { lat: 52.1591, lng: -106.6694 },
      { lat: 52.1935, lng: -106.7077 },
      { lat: 52.0851, lng: -106.7463 },
      { lat: 52.1471, lng: -106.6065 },
      { lat: 52.1058, lng: -106.7012 },
      { lat: 52.1741, lng: -106.6328 },
      { lat: 52.1296, lng: -106.5921 },
      { lat: 52.0937, lng: -106.6849 },
      { lat: 52.2011, lng: -106.7427 },
      { lat: 52.0732, lng: -106.5988 },
    ],
  },
];
