export function TeaserMap({ pins }: { pins: { lat: number; lng: number }[] }) {
  const sourcePins =
    pins.length > 0
      ? pins
      : [
          { lat: 0.2, lng: 0.1 },
          { lat: 0.5, lng: 0.7 },
          { lat: 0.8, lng: 0.4 },
        ];
  const latitudes = sourcePins.map((pin) => pin.lat);
  const longitudes = sourcePins.map((pin) => pin.lng);
  const minLat = Math.min(...latitudes);
  const maxLat = Math.max(...latitudes);
  const minLng = Math.min(...longitudes);
  const maxLng = Math.max(...longitudes);
  const latRange = maxLat - minLat || 1;
  const lngRange = maxLng - minLng || 1;
  const visiblePins = sourcePins.slice(0, 26).map((pin, index) => ({
    id: `${pin.lat}-${pin.lng}-${index}`,
    x: 10 + ((pin.lng - minLng) / lngRange) * 80,
    y: 10 + (1 - (pin.lat - minLat) / latRange) * 80,
  }));

  return (
    <div className="relative min-h-[420px] overflow-hidden border border-ash-line bg-background">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(146,184,107,0.08)_1px,transparent_1px),linear-gradient(0deg,rgba(146,184,107,0.08)_1px,transparent_1px)] bg-[size:3.25rem_3.25rem]" />
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        role="img"
        aria-label="Stylized decoy map with fake route lines and red signal markers"
      >
        <defs>
          <filter id="map-glow">
            <feGaussianBlur stdDeviation="0.8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <rect width="100" height="100" fill="rgba(10, 9, 8, 0.38)" />
        <g
          fill="none"
          stroke="rgba(111, 106, 96, 0.42)"
          strokeLinecap="round"
          strokeWidth="0.45"
        >
          <path d="M-6 21 C 14 18, 21 29, 38 27 S 63 14, 105 19" />
          <path d="M-5 48 C 13 45, 22 54, 39 51 S 68 39, 105 44" />
          <path d="M-3 72 C 21 66, 35 77, 55 70 S 76 58, 106 63" />
          <path d="M17 -3 C 19 18, 12 31, 21 47 S 32 73, 24 104" />
          <path d="M45 -5 C 43 18, 53 34, 49 53 S 41 80, 52 105" />
          <path d="M76 -5 C 70 20, 82 35, 77 52 S 66 78, 82 105" />
        </g>
        <g fill="none" stroke="rgba(146, 184, 107, 0.24)" strokeWidth="0.35">
          <path d="M7 35 L26 30 L35 39 L28 58 L12 55 Z" />
          <path d="M56 18 L82 24 L88 45 L69 55 L51 42 Z" />
          <path d="M39 64 L63 59 L74 78 L56 91 L34 82 Z" />
        </g>
        <g fill="none" stroke="rgba(146, 184, 107, 0.34)" strokeWidth="0.32">
          <circle cx="50" cy="51" r="13" />
          <circle cx="50" cy="51" r="25" />
          <circle cx="50" cy="51" r="37" />
        </g>
        <g filter="url(#map-glow)">
          {visiblePins.map((pin) => (
            <g key={pin.id}>
              <circle
                cx={pin.x}
                cy={pin.y}
                r="1.45"
                fill="rgba(179, 0, 15, 0.22)"
              />
              <circle
                cx={pin.x}
                cy={pin.y}
                r="0.58"
                fill="#b3000f"
                stroke="#e6e1d6"
                strokeWidth="0.12"
              />
            </g>
          ))}
        </g>
      </svg>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,transparent,rgba(10,9,8,0.55)_78%)]" />
      <div className="absolute bottom-4 right-4 hidden border border-ash-line bg-background/85 px-3 py-2 font-mono text-[0.65rem] uppercase text-ash sm:block">
        Signal displaced / coordinates scrambled
      </div>
      <div className="absolute left-4 top-4 border border-ash-line bg-background/85 px-3 py-2 font-mono text-xs uppercase text-sick">
        Decoy map, no real stops
      </div>
    </div>
  );
}
