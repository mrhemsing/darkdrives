type StepMotif = "key" | "road" | "waveform" | "route";

function Motif({ type }: { type: StepMotif }) {
  if (type === "key") {
    return (
      <svg
        className="absolute right-[-0.4rem] top-1/2 z-0 h-[118%] w-auto -translate-y-1/2 text-bone opacity-100 [mask-image:linear-gradient(to_right,transparent_8%,#000_52%)]"
        viewBox="0 0 200 340"
        fill="none"
        aria-hidden
      >
        <g stroke="currentColor" strokeWidth="3" opacity="0.16">
          <circle cx="104" cy="58" r="34" />
          <circle cx="104" cy="58" r="13" />
          <line x1="104" y1="92" x2="104" y2="312" />
          <path d="M104 250 h28 v15 h-28" />
          <path d="M104 282 h20 v13 h-20" />
        </g>
      </svg>
    );
  }

  if (type === "road" || type === "route") {
    return (
      <svg
        className="absolute right-[-0.4rem] top-1/2 z-0 h-[118%] w-auto -translate-y-1/2 text-bone opacity-100 [mask-image:linear-gradient(to_right,transparent_8%,#000_52%)]"
        viewBox="0 0 230 340"
        fill="none"
        aria-hidden
      >
        <g stroke="currentColor" strokeWidth="2.5" opacity="0.15">
          <path d="M6 336 L104 64" />
          <path d="M224 336 L128 64" />
          <line x1="116" y1="320" x2="116" y2="92" strokeDasharray="11 16" />
          <path d="M44 268 V204 M44 232 l-14 -18 M44 244 l16 -20 M44 220 l13 -16" />
          <path d="M196 264 V200 M196 226 l14 -18 M196 240 l-16 -20 M196 214 l-12 -15" />
        </g>
      </svg>
    );
  }

  return (
    <svg
      className="absolute right-[-0.4rem] top-1/2 z-0 h-[118%] w-auto -translate-y-1/2 text-bone opacity-100 [mask-image:linear-gradient(to_right,transparent_8%,#000_52%)]"
      viewBox="0 0 240 340"
      fill="none"
      aria-hidden
    >
      <g stroke="currentColor" strokeWidth="6" strokeLinecap="round" opacity="0.16">
        <line x1="22" y1="150" x2="22" y2="190" />
        <line x1="48" y1="120" x2="48" y2="220" />
        <line x1="74" y1="92" x2="74" y2="248" />
        <line x1="100" y1="138" x2="100" y2="202" />
        <line x1="126" y1="70" x2="126" y2="270" />
        <line x1="152" y1="116" x2="152" y2="224" />
        <line x1="178" y1="150" x2="178" y2="190" />
        <line x1="204" y1="100" x2="204" y2="240" />
        <line x1="230" y1="134" x2="230" y2="206" />
      </g>
    </svg>
  );
}

export function HowItWorksCard({
  number,
  title,
  copy,
  motif,
}: {
  number: string;
  title: string;
  copy: string;
  motif: StepMotif;
}) {
  return (
    <article className="relative flex min-h-48 overflow-hidden rounded-sm border border-ash-line bg-[radial-gradient(120%_70%_at_80%_10%,rgba(146,184,107,0.05),transparent_60%),linear-gradient(to_top,rgba(150,160,150,0.05),transparent_38%),var(--paper)] px-6 py-7">
      <span className="absolute left-3 top-3 z-10 h-4 w-4 border-l border-t border-bone/50" />
      <span className="absolute bottom-3 right-3 z-10 h-4 w-4 border-b border-r border-bone/50" />
      <Motif type={motif} />
      <div className="relative z-10 my-auto">
        <p className="flicker mb-3 font-mono text-sm font-medium uppercase tracking-[0.18em] text-blood-hot">
          {number}
        </p>
        <h2 className="font-display text-5xl uppercase leading-[1.15] text-bone">
          {title}
        </h2>
        <p className="mt-3 max-w-[30ch] text-base leading-7 text-bone-dim">
          {copy}
        </p>
      </div>
    </article>
  );
}
