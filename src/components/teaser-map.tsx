"use client";

import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";

export function TeaserMap({ pins }: { pins: { lat: number; lng: number }[] }) {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = new maplibregl.Map({
      container: mapRef.current,
      center: [-106.67, 52.13],
      zoom: 10.4,
      interactive: false,
      attributionControl: false,
      style: {
        version: 8,
        sources: {},
        layers: [
          {
            id: "background",
            type: "background",
            paint: { "background-color": "rgb(10, 9, 8)" },
          },
        ],
      },
    });

    pins.forEach((pin, index) => {
      const element = document.createElement("div");
      element.className =
        "h-2.5 w-2.5 rounded-full border border-blood-hot bg-blood shadow-[0_0_18px_rgba(179,0,15,0.72)]";
      element.setAttribute("aria-label", `Decoy signal ${index + 1}`);
      new maplibregl.Marker({ element }).setLngLat([pin.lng, pin.lat]).addTo(map);
    });

    return () => map.remove();
  }, [pins]);

  return (
    <div className="relative min-h-[420px] overflow-hidden border border-ash-line bg-background">
      <div ref={mapRef} className="absolute inset-0 opacity-90" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,transparent,rgba(10,9,8,0.88)_72%)]" />
      <div className="absolute left-4 top-4 border border-ash-line bg-background/85 px-3 py-2 font-mono text-xs uppercase text-sick">
        Decoy map, no real stops
      </div>
    </div>
  );
}
