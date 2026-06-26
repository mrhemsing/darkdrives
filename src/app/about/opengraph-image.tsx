import { caseFileImage, shareCardSize } from "@/lib/share-card";
import { siteDomain } from "@/lib/seo";

export const size = shareCardSize;
export const contentType = "image/png";

export default function Image() {
  return caseFileImage({
    label: "DARK DRIVES // OFF GRID SASK",
    hook: "We map the dark side of cities.",
    footer: `A STUDIO THAT STAYS QUIET // ${siteDomain}`,
  });
}
