import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

const routes = [
  "",
  "/catalog",
  "/all-access",
  "/saskatoon",
  "/regina",
  "/lethbridge",
  "/ohio",
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
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
