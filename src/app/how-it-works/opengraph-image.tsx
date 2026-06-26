import { caseFileImage, shareCardSize } from "@/lib/share-card";
import { siteDomain } from "@/lib/seo";

export const size = shareCardSize;
export const contentType = "image/png";

export default function Image() {
  return caseFileImage({
    label: "DARK DRIVES // FIELD PROTOCOL",
    hook: "Buy. Drive. Listen. If your nerve holds.",
    footer: `DARK DRIVES // ${siteDomain}`,
  });
}
