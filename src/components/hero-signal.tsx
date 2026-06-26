import SignalPlayer from "@/components/signal-player";

export function HeroSignal({ audioSrc }: { audioSrc?: string }) {
  return (
    <SignalPlayer
      audioSrc={audioSrc}
      disabledDescription="The 60-second narrated sample is being mastered."
      className="mt-8 max-w-xl"
    />
  );
}
