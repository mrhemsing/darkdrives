import { caseFileImage, shareCardSize } from "@/lib/share-card";
import { siteDomain } from "@/lib/seo";

export const size = shareCardSize;
export const contentType = "image/png";

export default function Image() {
  return caseFileImage({
    label: "DARK DRIVES // TOUR 001 // SASKATOON",
    hook: "40+ real locations. Drive them after dark, if you dare.",
    footer: `THE DARK SIDE OF SASKATOON // ${siteDomain}`,
  });
}
