import type { TeaserCard } from "@/data/tours";
import SignalPlayer from "@/components/signal-player";

export function RedactedCard({ teaser }: { teaser: TeaserCard }) {
  return (
    <article className="min-h-56 border border-ash-line bg-background/80 p-5">
      <div className="flex items-center gap-2 border-b border-ash-line pb-4 font-mono text-xs">
        <span className="text-blood-hot">{teaser.category}</span>
        <span className="text-ash">{" // "}</span>
        <span className="text-ash">
          FILE <span className="redacted" />
        </span>
      </div>
      <p className="mt-6 font-mono text-lg leading-8 text-bone">{teaser.hook}</p>
      {teaser.audioSrc ? (
        <SignalPlayer
          audioSrc={teaser.audioSrc}
          label="Preview signal"
          description="Press play. The bars move with the file."
          className="mt-5"
        />
      ) : null}
      <div className="mt-7 space-y-2">
        <span className="redacted min-w-40" />
        <span className="redacted ml-4 min-w-28" />
      </div>
    </article>
  );
}
