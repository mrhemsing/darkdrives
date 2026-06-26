import type { TeaserCard } from "@/data/tours";

export function RedactedCard({ teaser }: { teaser: TeaserCard }) {
  const captionSrc = teaser.audioSrc?.replace(/\.mp3$/, ".vtt");

  return (
    <article className="min-h-56 border border-ash-line bg-background/80 p-5">
      <div className="flex items-center gap-2 border-b border-ash-line pb-4 font-mono text-xs">
        <span className="text-blood-hot">{teaser.category}</span>
        <span className="text-ash">{"//"}</span>
        <span className="text-ash">
          FILE <span className="redacted" />
        </span>
      </div>
      <p className="mt-6 font-mono text-lg leading-8 text-bone">{teaser.hook}</p>
      {teaser.audioSrc ? (
        <audio className="mt-5 w-full" controls preload="none" src={teaser.audioSrc}>
          {captionSrc ? (
            <track kind="captions" src={captionSrc} srcLang="en" label="English" />
          ) : null}
        </audio>
      ) : null}
      <div className="mt-7 space-y-2">
        <span className="redacted min-w-40" />
        <span className="redacted ml-4 min-w-28" />
      </div>
    </article>
  );
}
