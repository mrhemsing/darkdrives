import { caseFileImage, shareCardSize } from "@/lib/share-card";
import { siteDomain } from "@/lib/seo";

export const size = shareCardSize;
export const contentType = "image/png";

export default function Image() {
  return caseFileImage({
    label: "DARK DRIVES // TRANSMISSION 001",
    hook: "Everything you are about to hear happened here.",
    footer: `DARK DRIVES // ${siteDomain}`,
  });
}
