export function TeaserMap({
  pins,
  numbered = false,
}: {
  pins: { lat: number; lng: number }[];
  numbered?: boolean;
}) {
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
  const visiblePins = sourcePins.slice(0, numbered ? 9 : 26).map((pin, index) => ({
    id: `${pin.lat}-${pin.lng}-${index}`,
    x: 10 + ((pin.lng - minLng) / lngRange) * 80,
    y: 10 + (1 - (pin.lat - minLat) / latRange) * 80,
    label: index + 1,
  }));
  const routePath = visiblePins
    .map((pin, index) => `${index === 0 ? "M" : "L"} ${pin.x.toFixed(1)} ${pin.y.toFixed(1)}`)
    .join(" ");
  const glowId = numbered ? "map-glow-route" : "map-glow-spots";

  return (
    <div className="relative aspect-[1.15/1] min-h-[20rem] overflow-hidden rounded-md border border-ash-line bg-[radial-gradient(120%_90%_at_50%_30%,#10120d_0%,#0a0a08_70%)] lg:min-h-[420px]">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 348"
        preserveAspectRatio="xMidYMid slice"
        role="img"
        aria-label="Stylized city map with route lines and red location markers"
      >
        <defs>
          <filter id={glowId}>
            <feGaussianBlur stdDeviation="0.8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g fill="none" stroke="rgba(127,174,90,0.22)" strokeWidth="1">
          <path d="M-10 60 L120 90 L180 60 L300 110 L410 80" />
          <path d="M40 -10 L70 120 L40 230 L90 360" />
          <path d="M-10 200 L130 180 L240 240 L410 210" />
          <path d="M250 -10 L270 130 L230 250 L300 360" />
          <path d="M-10 300 L160 280 L330 320 L410 300" />
          <path d="M340 -10 L360 160 L330 360" />
        </g>
        <g fill="none" stroke="rgba(146,184,107,0.18)" strokeWidth="0.75">
          <path d="M32 36 L120 58 L144 118 L82 160 L28 120 Z" />
          <path d="M214 30 L326 56 L360 148 L284 206 L206 162 Z" />
          <path d="M128 214 L232 190 L298 284 L208 338 L96 292 Z" />
        </g>
        <g fill="none" stroke="rgba(146,184,107,0.18)" strokeWidth="0.7">
          <circle cx="200" cy="174" r="48" />
          <circle cx="200" cy="174" r="96" />
          <circle cx="200" cy="174" r="144" />
        </g>
        <g filter={`url(#${glowId})`}>
          {numbered ? (
            <>
              <path
                d={routePath.replaceAll(
                  /([ML]) ([0-9.]+) ([0-9.]+)/g,
                  (_, command, x, y) =>
                    `${command} ${(Number(x) * 4).toFixed(1)} ${(Number(y) * 3.48).toFixed(1)}`,
                )}
                fill="none"
                stroke="rgba(209,31,42,0.72)"
                strokeDasharray="8 6"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              {visiblePins[0] ? (
                <rect
                  x={visiblePins[0].x * 4 - 18}
                  y={visiblePins[0].y * 3.48 - 10}
                  width="36"
                  height="18"
                  fill="#7fae5a"
                  rx="2"
                />
              ) : null}
              {visiblePins.at(-1) ? (
                <rect
                  x={visiblePins.at(-1)!.x * 4 - 21}
                  y={visiblePins.at(-1)!.y * 3.48 - 10}
                  width="42"
                  height="18"
                  fill="#d11f2a"
                  rx="2"
                />
              ) : null}
            </>
          ) : null}
          {visiblePins.map((pin) => (
            <g key={pin.id}>
              {numbered ? (
                <>
                  <circle
                    cx={pin.x * 4}
                    cy={pin.y * 3.48}
                    r="7"
                    fill="#0a0908"
                    stroke="#e6e1d6"
                    strokeWidth="1"
                  />
                  <text
                    x={pin.x * 4}
                    y={pin.y * 3.48 + 3}
                    fill="#e6e1d6"
                    fontSize="8"
                    fontWeight="700"
                    textAnchor="middle"
                  >
                    {pin.label}
                  </text>
                </>
              ) : (
                <>
                  <circle
                    cx={pin.x * 4}
                    cy={pin.y * 3.48}
                    r="8"
                    fill="rgba(209,31,42,0.18)"
                  />
                  <circle
                    cx={pin.x * 4}
                    cy={pin.y * 3.48}
                    r="3.5"
                    fill="#d11f2a"
                  />
                </>
              )}
            </g>
          ))}
        </g>
      </svg>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_40%,transparent_55%,rgba(0,0,0,0.6)_100%)]" />
      <div className="absolute bottom-4 right-4 hidden rounded-sm border border-ash-line bg-background/80 px-3 py-2 font-mono text-[0.65rem] uppercase text-ash sm:block">
        {numbered ? "Preview route / exact stops hidden" : "40+ spots across Saskatoon"}
      </div>
      <div className="absolute left-3 top-3 rounded-sm border border-sick/45 bg-background/75 px-3 py-2 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-sick">
        {numbered ? "Route preview, no story details" : "Full route comes with the tour"}
      </div>
      {numbered ? (
        <div className="absolute bottom-4 left-4 flex gap-2 font-mono text-[0.65rem] uppercase">
          <span className="border border-ash-line bg-background/85 px-2 py-1 text-sick">
            Start
          </span>
          <span className="border border-ash-line bg-background/85 px-2 py-1 text-blood-hot">
            Finish
          </span>
        </div>
      ) : null}
    </div>
  );
}
