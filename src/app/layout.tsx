import type { Metadata } from "next";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/next";
import { AnalyticsEvents } from "@/components/analytics-events";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://darkdrives.ca"),
  title: {
    default: "Dark Drives",
    template: "%s | Dark Drives",
  },
  description:
    "Immersive audio driving tours through haunted, cursed, and true-crime ground. First file: The Dark Side of Saskatoon.",
  openGraph: {
    title: "Dark Drives",
    description:
      "Everything you are about to hear happened here. Get in the car.",
    siteName: "Dark Drives",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="film-grain min-h-full bg-background text-bone antialiased">
        <Header />
        {children}
        <Footer />
        <Suspense fallback={null}>
          <AnalyticsEvents />
        </Suspense>
        <Analytics />
      </body>
    </html>
  );
}
