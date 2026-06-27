export type TourStatus = "live" | "preorder" | "coming-soon" | "vote";
export type ProductFormat = "audio-tour" | "gps-guide" | "mega-guide" | "bundle";
export type ProductMarket = "CA" | "US";
export type ProductImprint = "Off Grid Sask" | "Creepy GPS Adventures" | "Dark Drives";

export type TeaserCard = {
  id: string;
  category: string;
  hook: string;
  audioSrc?: string;
};

export type Tour = {
  id: string;
  slug: string;
  citySlug: string;
  cityName: string;
  region: string;
  market: ProductMarket;
  imprint: ProductImprint;
  format: ProductFormat;
  formatBadge: string;
  title: string;
  tagline: string;
  status: TourStatus;
  priceId?: string;
  priceDisplay: string;
  priceCurrency: "CAD" | "USD";
  priceAmount: string;
  deliverable: string;
  launchSeason: string;
  refundLine: string;
  minimumAge: string;
  launchLabel?: string;
  durationEstimate: string;
  stopCountDisplay: string;
  locationCountDisplay: string;
  coverImage: string;
  trailerAudio?: string;
  categoryStats: { category: string; count: number }[];
  neighbourhoodHints: string[];
  regionHints: string[];
  whatsInside: string[];
  proofCopy: string;
  riskLine?: string;
  safetyBullets: string[];
  faqs: { question: string; answer: string }[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  teasers: TeaserCard[];
  decoyPins?: { lat: number; lng: number }[];
};

export const commerceMode =
  (process.env.NEXT_PUBLIC_COMMERCE_MODE as "preorder" | "live" | "waitlist") ??
  "preorder";

export const tours: Tour[] = [
  {
    id: "dark-side-of-saskatoon",
    slug: "saskatoon",
    citySlug: "saskatoon",
    cityName: "Saskatoon",
    region: "Saskatoon, SK",
    market: "CA",
    imprint: "Off Grid Sask",
    format: "audio-tour",
    formatBadge: "AUDIO DRIVING TOUR",
    title: "The Dark Side of Saskatoon",
    tagline: "A full audio driving tour through the city after the lights quit.",
    status: commerceMode === "live" ? "live" : "preorder",
    priceId: process.env.STRIPE_SASKATOON_PRICE_ID,
    priceDisplay: "$19 CAD",
    priceCurrency: "CAD",
    priceAmount: "19",
    deliverable: "Narrated audio tour",
    launchSeason: "this fall",
    refundLine: "Refundable until launch night.",
    minimumAge: "16",
    launchLabel: "Founding price $19 CAD. Launching this fall.",
    durationEstimate: "About 2 to 3 hours",
    stopCountDisplay: "40+ real locations",
    locationCountDisplay: "40+ real locations",
    coverImage: "/images/saskatoon-night-road.svg",
    trailerAudio: "/audio/dark-drives-hero-sample-mixed.mp3",
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
    regionHints: [
      "Nutana",
      "Sutherland",
      "Riverside edges",
      "Industrial roads",
    ],
    whatsInside: [
      "40+ real locations across Saskatoon.",
      "Full narrated audio for every stop.",
      "Hauntings, true crime, apparitions, cursed sites, and local legends.",
      "Built for one car, one night, and a passenger handling the phone.",
    ],
    proofCopy:
      "A one-time city unlock. No booking, no staff, no closing time. Just you, your car, your friends, your nerve, and a city that has been keeping things quiet.",
    riskLine:
      "The route is designed for lawful public roads and safe parking areas. Do not trespass, block traffic, or drive impaired.",
    safetyBullets: [
      "The driver does not touch the phone. Hand it to a passenger.",
      "Use lawful public roads and safe parking areas only.",
      "Do not trespass, disturb residents, or block traffic.",
      "Drive sober and obey every sign, closure, and traffic law.",
    ],
    faqs: [
      {
        question: "What do I get when I pre-order?",
        answer:
          "You lock in the founding price for the full narrated Saskatoon audio tour. On launch night, the route and audio access instructions are sent to you.",
      },
      {
        question: "Is this a PDF guide?",
        answer:
          "No. The Dark Side of Saskatoon is a narrated audio driving tour, built around the road, the map, and what you hear at each stop.",
      },
      {
        question: "Do I have to leave the car?",
        answer:
          "The tour is designed around public roads and safe places to stop. If any stop invites you out, use judgment and stay legal.",
      },
      {
        question: "Can I do it at night?",
        answer:
          "Yes. The tour is built for after dark, but stay sober, use safe parking, and let a passenger handle the phone.",
      },
      {
        question: "Do I need an app?",
        answer:
          "No separate app is planned for launch. You receive access instructions for the narrated route and audio when the tour opens.",
      },
      {
        question: "Can I pause and continue later?",
        answer:
          "Yes. It is self-guided, so you can stop, restart, or split the route across nights.",
      },
      {
        question: "Do I need headphones?",
        answer:
          "Headphones give the best atmosphere for passengers. If you play through the car, keep the volume safe for the driver.",
      },
      {
        question: "Is it suitable for children?",
        answer:
          "The tour is built for ages 16+ and includes disturbing history, crime, hauntings, and mature themes. Use your judgment for younger passengers.",
      },
      {
        question: "Is the tour based on real events?",
        answer:
          "Yes. The stories draw from documented history, local legends, and reported accounts, with public pages kept spoiler-safe.",
      },
      {
        question: "Can I share it with friends?",
        answer:
          "One purchase is for personal use in one vehicle. Load the car, but do not repost, resell, or redistribute the route or audio.",
      },
    ],
    seo: {
      title: "The Dark Side of Saskatoon | Haunted Audio Driving Tour",
      description:
        "A self-guided audio driving tour of Saskatoon's most haunted, cursed, and unsolved locations. 40+ real stops. Drive them after dark, if you dare.",
      keywords: [
        "haunted Saskatoon",
        "Saskatoon ghost tour",
        "Saskatoon audio tour",
        "scary things to do in Saskatoon",
      ],
    },
    teasers: [
      {
        id: "true-crime-ditch",
        category: "TRUE CRIME",
        hook:
          "A man's body in the ditch. The case went cold. The voice still asking for help did not.",
        audioSrc: "/audio/dark-drives-teaser-sample-mixed.mp3",
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
  {
    id: "regina-haunted",
    slug: "regina",
    citySlug: "regina",
    cityName: "Regina",
    region: "Regina, SK",
    market: "CA",
    imprint: "Off Grid Sask",
    format: "gps-guide",
    formatBadge: "GPS GUIDE",
    title: "Regina's Most Haunted Places",
    tagline:
      "25+ haunted buildings, paranormal places, and local legends in the Queen City. Real locations, real stories, explore at your own risk.",
    status: "live",
    priceId: process.env.STRIPE_REGINA_PRICE_ID,
    priceDisplay: "$9 CAD",
    priceCurrency: "CAD",
    priceAmount: "9",
    deliverable: "Instant PDF download",
    launchSeason: "available now",
    refundLine: "Digital downloads are final sale once accessed.",
    minimumAge: "18",
    launchLabel: "Instant download. Buy it, open it, drive tonight.",
    durationEstimate: "Self-guided",
    stopCountDisplay: "25+ real locations",
    locationCountDisplay: "25+ locations",
    coverImage: "/images/saskatoon-night-road.svg",
    categoryStats: [
      { category: "Haunted buildings", count: 10 },
      { category: "Paranormal places", count: 8 },
      { category: "Urban legends", count: 7 },
    ],
    neighbourhoodHints: ["Warehouse District", "Wascana", "Downtown", "City edges"],
    regionHints: ["Warehouse District", "Wascana", "Downtown", "City edges"],
    whatsInside: [
      "25+ locations across Regina.",
      "Haunted buildings, paranormal places, and local urban legends.",
      "From the Warehouse District to Wascana to the edges of the city.",
      "Every one a real place you can stand tonight.",
    ],
    proofCopy:
      "Unlock the guide once and download it immediately. Pick a route, load the file, and let the Queen City get stranger after dark.",
    riskLine:
      "Guide locations may be near private property, operating businesses, or unsafe areas. Do not enter restricted spaces or disturb anyone.",
    safetyBullets: [
      "A guide listing is not permission to enter private property.",
      "Stay outside closed, restricted, staff-only, fenced, or posted areas.",
      "Do not disturb operating businesses, residents, memorials, or graves.",
      "The driver does not use the phone. Navigate from a parked vehicle or with a passenger.",
    ],
    faqs: [
      {
        question: "Is Regina available now?",
        answer:
          "Yes. Regina is structured as an instant-download GPS guide once checkout is connected. Buy it, open it, and plan the drive tonight.",
      },
      {
        question: "Is this an audio tour?",
        answer:
          "No. Regina is a story-rich GPS guide PDF. Saskatoon is the narrated audio driving tour.",
      },
      {
        question: "Are these real places?",
        answer:
          "Yes, but the public page stays spoiler-safe. Exact locations and route details are inside the paid guide.",
      },
      {
        question: "Can I go inside the locations?",
        answer:
          "Only where public access is lawful and clearly allowed. The guide does not grant permission to enter private, restricted, or unsafe spaces.",
      },
    ],
    seo: {
      title: "Regina's Most Haunted Places | GPS Guide | Dark Drives",
      description:
        "A GPS guide to 25+ of Regina's most haunted buildings, paranormal places, and urban legends. Real locations, real stories, explore at your own risk.",
      keywords: [
        "haunted Regina",
        "ghost tour Regina",
        "haunted places Regina",
        "scary things to do in Regina",
        "Regina urban legends",
      ],
    },
    teasers: [
      {
        id: "montana-bar",
        category: "HAUNTED BUILDING",
        hook:
          "A century-old bar was carried up from Montana. Something came with it, and it was not the kind of spirit you order.",
      },
      {
        id: "empty-room",
        category: "THE QUEEN CITY",
        hook:
          "A woman was photographed in an empty room a hundred years ago. People still see her standing by the tables.",
      },
      {
        id: "black-bus",
        category: "URBAN LEGEND",
        hook:
          "A passenger boards the bus dressed all in black, with hooves for feet. Nobody has ever seen him get off.",
      },
      {
        id: "named-poltergeist",
        category: "HAUNTED BUILDING",
        hook:
          "A poltergeist who answers to a name, rearranges the furniture, and has opinions about the decorating.",
      },
      {
        id: "running-man",
        category: "URBAN LEGEND",
        hook:
          "A man who runs everywhere he goes, muttering the whole way. You do not want to know what he keeps in his basement.",
      },
    ],
  },
  {
    id: "lethbridge-haunted",
    slug: "lethbridge",
    citySlug: "lethbridge",
    cityName: "Lethbridge",
    region: "Lethbridge, AB",
    market: "CA",
    imprint: "Off Grid Sask",
    format: "gps-guide",
    formatBadge: "GPS GUIDE",
    title: "Lethbridge's Most Haunted Places",
    tagline:
      "15 haunted places where the coulees swallow sound and the bridge carries more than trains. Real locations, real stories, explore at your own risk.",
    status: "live",
    priceId: process.env.STRIPE_LETHBRIDGE_PRICE_ID,
    priceDisplay: "$9 CAD",
    priceCurrency: "CAD",
    priceAmount: "9",
    deliverable: "Instant PDF download",
    launchSeason: "available now",
    refundLine: "Digital downloads are final sale once accessed.",
    minimumAge: "18",
    launchLabel: "Instant download. Buy it, open it, drive tonight.",
    durationEstimate: "Self-guided",
    stopCountDisplay: "15 real locations",
    locationCountDisplay: "15 locations",
    coverImage: "/images/saskatoon-night-road.svg",
    categoryStats: [
      { category: "Haunted places", count: 6 },
      { category: "Local legends", count: 5 },
      { category: "River valley files", count: 4 },
    ],
    neighbourhoodHints: ["High Level Bridge", "The coulees", "Old hospitals", "River valley"],
    regionHints: ["High Level Bridge", "The coulees", "Old hospitals", "River valley"],
    whatsInside: [
      "15 locations across Lethbridge and the river valley.",
      "Haunted buildings, paranormal places, and local urban legends.",
      "From the High Level Bridge to the coulees to the old hospitals.",
      "Real places, broad public-facing teasers, and safety-first guidance.",
    ],
    proofCopy:
      "Open the guide, choose the night, and follow the places where the wind gets quiet for the wrong reasons.",
    riskLine:
      "The coulees, river valley, old structures, and restricted sites can be dangerous. Stay on lawful public access and do not enter abandoned buildings.",
    safetyBullets: [
      "Stay on lawful public access in the coulees and river valley.",
      "Do not enter abandoned buildings, closed sites, restricted areas, or old structures.",
      "Treat Indigenous history, burial grounds, memorials, and tragedy with respect.",
      "Check weather, terrain, darkness, and road conditions before you go.",
    ],
    faqs: [
      {
        question: "Is Lethbridge available now?",
        answer:
          "Yes. Lethbridge is structured as an instant-download GPS guide once checkout is connected.",
      },
      {
        question: "Why is the safety warning stronger here?",
        answer:
          "Some Lethbridge stories sit near coulees, river valley terrain, old structures, or sensitive history. The guide is for lawful, respectful exploration only.",
      },
      {
        question: "Does the guide use Indigenous history as horror?",
        answer:
          "No public sales copy should treat Blackfoot history or real historical trauma as a dare. Any historical context belongs inside the guide with care and respect.",
      },
      {
        question: "Can I do it at night?",
        answer:
          "You can, but darkness changes the risk. Stay sober, stay on public access, and skip any place that feels unsafe or unclear.",
      },
    ],
    seo: {
      title: "Lethbridge's Most Haunted Places | GPS Guide | Dark Drives",
      description:
        "A GPS guide to 15 of Lethbridge's most haunted places, from the High Level Bridge to the coulees. Real locations and the stories behind them.",
      keywords: [
        "haunted Lethbridge",
        "ghost tour Lethbridge",
        "haunted places Alberta",
        "scary things to do in Lethbridge",
        "Lethbridge coulees haunted",
      ],
    },
    teasers: [
      {
        id: "bridge",
        category: "THE BRIDGE",
        hook:
          "One of the highest trestle bridges in the world, and the ghost train that is said to run it before disaster strikes.",
      },
      {
        id: "hospital-nun",
        category: "HAUNTED HOSPITAL",
        hook:
          "A nun still checks on patients, comforting the dying, in a hospital where no nun has worked for decades.",
      },
      {
        id: "coulees",
        category: "THE COULEES",
        hook:
          "Something lives down in the river valley after dark. They say it only finds the people who are already lost.",
      },
      {
        id: "museum",
        category: "HAUNTED MUSEUM",
        hook:
          "A man who fell and never left, and children who wave from the upstairs windows long after closing.",
      },
      {
        id: "water",
        category: "THE WATER",
        hook:
          "They banned swimming here after the drowning. Stand at the end of the dock, call out, and see what answers.",
      },
    ],
  },
  {
    id: "ohio-creepy-gps",
    slug: "ohio",
    citySlug: "ohio",
    cityName: "Ohio",
    region: "Ohio, USA",
    market: "US",
    imprint: "Creepy GPS Adventures",
    format: "mega-guide",
    formatBadge: "MEGA GUIDE // 150+ LOCATIONS",
    title: "Ohio Creepy GPS Adventure Guide",
    tagline:
      "Over 150 GPS-mapped locations across the whole state. Abandoned asylums, haunted roads, Bigfoot country, tunnels, satanic ruins, and the fields where Ohio watches the sky. Explore safe, drive sober.",
    status: "live",
    priceId: process.env.STRIPE_OHIO_PRICE_ID,
    priceDisplay: "$15 USD",
    priceCurrency: "USD",
    priceAmount: "15",
    deliverable: "Instant PDF download",
    launchSeason: "available now",
    refundLine: "Digital downloads are final sale once accessed.",
    minimumAge: "18",
    launchLabel: "Instant download. A whole state of creepy, mapped.",
    durationEstimate: "Whole-state guide",
    stopCountDisplay: "150+ GPS-mapped locations",
    locationCountDisplay: "150+ locations",
    coverImage: "/images/saskatoon-night-road.svg",
    categoryStats: [
      { category: "Abandoned", count: 35 },
      { category: "Haunted", count: 45 },
      { category: "Cryptids", count: 20 },
      { category: "UFO skies", count: 15 },
      { category: "Tunnels", count: 12 },
    ],
    neighbourhoodHints: ["Statewide", "Back roads", "Old asylums", "UFO fields"],
    regionHints: ["Statewide", "Back roads", "Old asylums", "UFO fields"],
    whatsInside: [
      "150+ locations. One guide. A whole state.",
      "Abandoned buildings and asylums.",
      "Haunted cemeteries, schools, bars, bridges, roads, and rivers.",
      "Bigfoot hot spots, tunnels, old ritual sites, stargazing, and UFO fields.",
      "Every one pinned with GPS. Pick a category, pick a night, go.",
    ],
    proofCopy:
      "Ohio is the widest net in the catalog: less one-night ghost tour, more choose-your-own creepy road trip.",
    riskLine:
      "Some guide entries may reference abandoned, remote, or hazardous places. Do not trespass, enter unsafe structures, cross barriers, or ignore landowner permission.",
    safetyBullets: [
      "A GPS pin is not permission to enter land, buildings, tunnels, ruins, or restricted areas.",
      "Do not enter abandoned structures, cross barriers, climb fences, or ignore posted signs.",
      "Some locations may be remote, hazardous, seasonal, or unsuitable after dark.",
      "Ohio is a road-trip guide. Choose lawful viewpoints and public access, then move on.",
    ],
    faqs: [
      {
        question: "Why is Ohio different from the other guides?",
        answer:
          "Ohio is a statewide creepy adventure guide: abandoned places, hauntings, Bigfoot country, UFO skies, tunnels, roads, and more.",
      },
      {
        question: "Is this only haunted locations?",
        answer:
          "No. It is broader than haunted. Think creepy road-trip atlas, with over 150 GPS-mapped places across the state.",
      },
      {
        question: "Can I enter abandoned sites or tunnels?",
        answer:
          "No. The guide does not grant permission to enter unsafe, abandoned, closed, private, or restricted places. Use lawful public access only.",
      },
      {
        question: "Why USD?",
        answer:
          "Ohio is aimed at a US audience, so the page is structured for USD pricing and US email compliance.",
      },
    ],
    seo: {
      title: "Ohio Creepy GPS Adventure Guide | 150+ Locations | Dark Drives",
      description:
        "Over 150 GPS-mapped creepy Ohio locations: abandoned asylums, haunted roads, Bigfoot country, tunnels, satanic ruins, and UFO fields. One guide, a whole state.",
      keywords: [
        "haunted Ohio",
        "creepy places in Ohio",
        "abandoned places Ohio",
        "Ohio Bigfoot sightings",
        "Ohio ghost adventure",
        "things to do in Ohio at night",
      ],
    },
    teasers: [
      {
        id: "ridges",
        category: "ABANDONED",
        hook:
          "A lunatic asylum on a hill, the kind of place that earned the name The Ridges. Bring someone you trust.",
      },
      {
        id: "grassman",
        category: "CRYPTID",
        hook:
          "The campsites and back roads where Ohio's Grassman gets seen, and the exact water where the howl was recorded.",
      },
      {
        id: "bloody-mary",
        category: "THE ORIGINAL",
        hook:
          "The property locals swear is the real house behind Bloody Mary. Say her name if you dare.",
      },
      {
        id: "satan-hollow",
        category: "TUNNELS",
        hook:
          "There is a place under Cincinnati they call Satan's Hollow. People go in with flashlights. Not all the stories come back out.",
      },
      {
        id: "sky",
        category: "THE SKY",
        hook:
          "The fields and lakes where Ohio goes to watch for lights. Sometimes the sky watches back.",
      },
    ],
  },
  {
    id: "all-access",
    slug: "all-access",
    citySlug: "all-access",
    cityName: "All Access",
    region: "Saskatoon, Regina, Lethbridge, and Ohio",
    market: "CA",
    imprint: "Dark Drives",
    format: "bundle",
    formatBadge: "ALL ACCESS // BEST VALUE",
    title: "Dark Drives All Access",
    tagline:
      "Every launch product in one unlock: the Saskatoon audio tour, Regina and Lethbridge GPS guides, and the 150+ location Ohio mega guide.",
    status: commerceMode === "waitlist" ? "coming-soon" : "preorder",
    priceId: process.env.STRIPE_ALL_ACCESS_PRICE_ID,
    priceDisplay: "$34 CAD",
    priceCurrency: "CAD",
    priceAmount: "34",
    deliverable: "Bundle access",
    launchSeason: "this fall",
    refundLine:
      "Refundable until the first pre-order product in the bundle is delivered.",
    minimumAge: "18",
    launchLabel: "Best value. Four products for less than buying separately.",
    durationEstimate: "Four product unlocks",
    stopCountDisplay: "230+ mapped or narrated locations",
    locationCountDisplay: "230+ locations",
    coverImage: "/images/saskatoon-night-road.svg",
    categoryStats: [
      { category: "Audio tour", count: 1 },
      { category: "GPS guides", count: 2 },
      { category: "Mega guide", count: 1 },
    ],
    neighbourhoodHints: ["Saskatoon", "Regina", "Lethbridge", "Ohio"],
    regionHints: ["Saskatoon", "Regina", "Lethbridge", "Ohio"],
    whatsInside: [
      "The Dark Side of Saskatoon audio driving tour.",
      "Regina's Most Haunted Places GPS guide.",
      "Lethbridge's Most Haunted Places GPS guide.",
      "Ohio Creepy GPS Adventure Guide with 150+ mapped locations.",
      "One checkout for the whole launch shelf.",
    ],
    proofCopy:
      "Buying the products separately costs more. All Access is the obvious move if you want the whole Dark Drives launch shelf.",
    riskLine:
      "All Access includes both audio-tour and GPS-guide products. Follow the strictest safety rule for each location: lawful public access only, no trespass, no abandoned structures, no restricted areas.",
    safetyBullets: [
      "Bundle access does not change the safety rules for any product.",
      "GPS pins are not permission to enter private, closed, abandoned, or restricted places.",
      "The driver never handles the phone while moving.",
      "Read each product's safety notes before you drive.",
    ],
    faqs: [
      {
        question: "What is included?",
        answer:
          "All Access includes Saskatoon, Regina, Lethbridge, and Ohio: one audio tour, two city GPS guides, and one statewide mega guide.",
      },
      {
        question: "Why is this a pre-order?",
        answer:
          "Saskatoon is still the premium audio-tour pre-order. The instant guides are structured to deliver once checkout and files are connected.",
      },
      {
        question: "Is the bundle cheaper?",
        answer:
          "Yes. The individual launch products add up to more than the bundle price, so All Access is the built-in upsell.",
      },
      {
        question: "Can I share the bundle?",
        answer:
          "No. All Access is still a personal, non-transferable digital licence. Do not repost, resell, or redistribute the files, route, pins, or audio.",
      },
    ],
    seo: {
      title: "Dark Drives All Access | Haunted Audio Tour and GPS Guide Bundle",
      description:
        "Unlock every Dark Drives launch product: Saskatoon audio tour, Regina and Lethbridge GPS guides, and the Ohio Creepy GPS Adventure Guide.",
      keywords: [
        "Dark Drives bundle",
        "haunted GPS guide bundle",
        "haunted audio tour",
        "creepy road trip guides",
      ],
    },
    teasers: [
      {
        id: "bundle-saskatoon",
        category: "AUDIO TOUR",
        hook:
          "The premium Saskatoon route, narrated for the car and built to run after dark.",
      },
      {
        id: "bundle-regina",
        category: "GPS GUIDE",
        hook:
          "The Queen City file: haunted buildings, local legends, and places that keep their own hours.",
      },
      {
        id: "bundle-lethbridge",
        category: "GPS GUIDE",
        hook:
          "The coulees, the bridge, and the river valley gathered into one guide.",
      },
      {
        id: "bundle-ohio",
        category: "MEGA GUIDE",
        hook:
          "A whole state of creepy: abandoned places, cryptid roads, tunnels, UFO skies, and more.",
      },
    ],
  },
];

export const products = tours;
export const liveProducts = products.filter((product) => product.status !== "coming-soon");
export const audioProducts = products.filter((product) => product.format === "audio-tour");
export const guideProducts = products.filter(
  (product) => product.format === "gps-guide" || product.format === "mega-guide",
);
export const bundleProducts = products.filter((product) => product.format === "bundle");

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
