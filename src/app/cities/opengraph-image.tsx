import { caseFileImage, shareCardSize } from "@/lib/share-card";

export const size = shareCardSize;
export const contentType = "image/png";

export default function Image() {
  return caseFileImage({
    label: "DARK DRIVES // PENDING SITES",
    hook: "Vote for the city we raise next.",
    footer: "REGINA // LETHBRIDGE // MEDICINE HAT",
  });
}
