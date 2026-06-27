import type { Metadata } from "next";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://darkdrives.app";

export const siteDomain = new URL(siteUrl).hostname;

export const defaultOg = {
  title: "Dark Drives",
  description: "Haunted audio driving tours you run after dark.",
};

type SeoConfig = {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
  ogDescription?: string;
  keywords?: string[];
};

export function pageMetadata({
  title,
  description,
  path,
  ogTitle = title,
  ogDescription = description,
  keywords,
}: SeoConfig): Metadata {
  const canonical = path === "/" ? siteUrl : `${siteUrl}${path}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: canonical,
      siteName: "Dark Drives",
      type: "website",
      images: [{ url: `${canonical}/opengraph-image` }],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: [`${canonical}/opengraph-image`],
    },
  };
}

export const seo = {
  home: {
    title: "Dark Drives | Haunted Audio Driving Tours After Dark",
    description:
      "Self-guided paranormal audio driving tours through a city's real haunted, cursed, and true-crime locations. Start with The Dark Side of Saskatoon.",
    ogTitle: "Everything you are about to hear happened here.",
    ogDescription:
      "A self-guided audio driving tour you run after dark. Real places. Real records. The Dark Side of Saskatoon is live.",
  },
  catalog: {
    title: "The Dark Side of Saskatoon | Dark Drives",
    description:
      "Start with The Dark Side of Saskatoon, a self-guided haunted audio driving tour through 40+ real locations.",
    ogTitle: "The Dark Side of Saskatoon",
    ogDescription:
      "One city. Forty real places. A self-guided audio tour you drive after dark.",
  },
  saskatoon: {
    title: "The Dark Side of Saskatoon | Haunted Audio Driving Tour",
    description:
      "A self-guided audio driving tour of Saskatoon's most haunted, cursed, and unsolved locations. 40+ real stops. Drive them after dark, if you dare.",
    ogTitle: "The Dark Side of Saskatoon",
    ogDescription:
      "40+ real haunted and true-crime locations. A self-guided audio tour you drive in a single night. Pre-order the founding price now.",
  },
  cities: {
    title: "The Dark Side of Saskatoon | Dark Drives",
    description:
      "The Dark Side of Saskatoon is the first Dark Drives audio tour.",
    ogTitle: "The Dark Side of Saskatoon",
    ogDescription:
      "The first Dark Drives release is focused on Saskatoon.",
  },
  howItWorks: {
    title: "How Dark Drives Works | Haunted Audio Driving Tours",
    description:
      "Buy the tour, drive to each real location after dark, and press play. Here is how a Dark Drives self-guided haunted audio driving tour works.",
    ogTitle: "How the drive works.",
    ogDescription:
      "It is simple. That is what makes it worse. Buy once, drive after dark, press play at every stop.",
  },
  about: {
    title: "About Dark Drives | We Map the Dark Side of Cities",
    description:
      "Dark Drives turns a city's real crimes, hauntings, and unexplained history into self-guided audio driving tours. Meet the studio behind the road.",
    ogTitle: "We map the dark side of cities.",
    ogDescription:
      "Real locations. Real records. The crimes, the hauntings, and the things that never got an explanation.",
  },
  faq: {
    title: "Dark Drives FAQ | Haunted Audio Driving Tours",
    description:
      "How long is the tour, is it safe, do I need to go in order? Answers about The Dark Side of Saskatoon and Dark Drives audio driving tours.",
    ogTitle: "Questions you should ask before you drive.",
    ogDescription:
      "How long, how safe, and whether you should do it alone. Read before you take the drive.",
  },
};
