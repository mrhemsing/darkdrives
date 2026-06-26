import type { MetadataRoute } from "next";

const routes = [
  "",
  "/saskatoon",
  "/cities",
  "/how-it-works",
  "/about",
  "/faq",
  "/submit",
  "/legal/disclaimer",
  "/legal/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://darkdrives.ca${route}`,
    lastModified: new Date(),
  }));
}
