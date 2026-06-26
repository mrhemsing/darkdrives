"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import posthog from "posthog-js";

export function AnalyticsEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    if (!key || posthog.__loaded) return;

    posthog.init(key, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com",
      capture_pageview: false,
    });
  }, []);

  useEffect(() => {
    if (!posthog.__loaded) return;
    posthog.capture("$pageview", {
      $current_url: `${pathname}?${searchParams.toString()}`,
    });
    if (pathname === "/") {
      posthog.capture("hero_enter");
    }
  }, [pathname, searchParams]);

  return null;
}

export function captureEvent(name: string, properties?: Record<string, string>) {
  if (posthog.__loaded) {
    posthog.capture(name, properties);
  }
}
