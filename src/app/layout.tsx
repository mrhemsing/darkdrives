import type { Metadata } from "next";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/next";
import { AnalyticsEvents } from "@/components/analytics-events";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { defaultOg, siteUrl } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dark Drives",
    template: "%s",
  },
  description: defaultOg.description,
  openGraph: {
    title: defaultOg.title,
    description: defaultOg.description,
    siteName: "Dark Drives",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultOg.title,
    description: defaultOg.description,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Dark Drives",
              url: siteUrl,
              publisher: {
                "@type": "Organization",
                name: "Off Grid Sask",
              },
            }),
          }}
        />
        <Suspense fallback={null}>
          <AnalyticsEvents />
        </Suspense>
        <Analytics />
      </body>
    </html>
  );
}
