import { ImageResponse } from "next/og";
import { siteDomain } from "@/lib/seo";

export const shareCardSize = {
  width: 1200,
  height: 630,
};

export function caseFileImage({
  label,
  hook,
  footer,
}: {
  label: string;
  hook: string;
  footer?: string;
}) {
  const footerText = footer ?? `DARK DRIVES // ${siteDomain}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(circle at 52% 40%, rgba(146,184,107,0.13), transparent 320px), #0a0908",
          color: "#e6e1d6",
          padding: 58,
          border: "1px solid #3a352f",
          fontFamily: "monospace",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.18,
            background:
              "repeating-linear-gradient(0deg, transparent 0, transparent 5px, rgba(230,225,214,0.18) 6px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 58,
            top: 210,
            width: 360,
            height: 34,
            background: "#e6e1d6",
            opacity: 0.92,
          }}
        />
        <div style={{ fontSize: 26, letterSpacing: 5, color: "#92b86b" }}>
          {label}
        </div>
        <div
          style={{
            maxWidth: 940,
            fontSize: 74,
            lineHeight: 0.95,
            textTransform: "uppercase",
            fontWeight: 900,
            letterSpacing: 0,
          }}
        >
          {hook}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: 32, color: "#b3000f", fontWeight: 900 }}>
            DARK DRIVES
          </div>
          <div style={{ fontSize: 24, color: "#bdb5a6" }}>{footerText}</div>
        </div>
      </div>
    ),
    shareCardSize,
  );
}
