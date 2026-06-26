"use client";

import { useEffect, useState } from "react";
import { TourCta } from "@/components/tour-cta";
import type { Tour } from "@/data/tours";

export function StickyBuyBar({ tour }: { tour: Tour }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function update() {
      const footer = document.querySelector("footer");
      const footerTop = footer?.getBoundingClientRect().top ?? Number.POSITIVE_INFINITY;
      setVisible(window.scrollY > window.innerHeight * 0.85 && footerTop > window.innerHeight + 80);
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-ash-line bg-background/95 px-3 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-xl items-center gap-3">
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-bone">
            The Dark Side of Saskatoon · {tour.priceDisplay}
          </p>
          <p className="font-mono text-[0.66rem] uppercase tracking-[0.04em] text-ash">
            or guides from $9
          </p>
        </div>
        <div className="shrink-0">
          <TourCta tour={tour} label="Unlock" compact showConsent={false} />
        </div>
      </div>
    </div>
  );
}
