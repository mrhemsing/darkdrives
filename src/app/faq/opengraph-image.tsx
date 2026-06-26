import { caseFileImage, shareCardSize } from "@/lib/share-card";
import { siteDomain } from "@/lib/seo";

export const size = shareCardSize;
export const contentType = "image/png";

export default function Image() {
  return caseFileImage({
    label: "DARK DRIVES // QUERIES",
    hook: "Read this before you take the drive.",
    footer: `DARK DRIVES // ${siteDomain}`,
  });
}
