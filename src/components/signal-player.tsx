"use client";

import { Pause, Play } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

type SignalPlayerProps = {
  audioSrc?: string;
  label?: string;
  description?: string;
  disabledDescription?: string;
  className?: string;
};

const idleBars = Array.from({ length: 28 }, (_, index) => 18 + ((index * 19) % 52));

export default function SignalPlayer({
  audioSrc,
  label = "The signal",
  description = "This is what the dark sounds like. Press play.",
  disabledDescription = "The narrated sample is being mastered.",
  className = "",
}: SignalPlayerProps) {
  const audioId = useId();
  const captionSrc = audioSrc?.replace(/\.mp3$/, ".vtt");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);
  const frameRef = useRef<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [bars, setBars] = useState(idleBars);

  useEffect(() => {
    const audio = audioRef.current;

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      audio?.pause();
    };
  }, []);

  function stopVisualizer() {
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }
    setBars(idleBars);
  }

  function startVisualizer() {
    const analyser = analyserRef.current;

    if (!analyser) {
      return;
    }

    const data = new Uint8Array(analyser.frequencyBinCount);

    const tick = () => {
      analyser.getByteFrequencyData(data);
      const sliceSize = Math.max(1, Math.floor(data.length / idleBars.length));

      setBars((currentBars) =>
        currentBars.map((_, index) => {
          const start = index * sliceSize;
          const slice = data.slice(start, start + sliceSize);
          const average =
            slice.reduce((total, value) => total + value, 0) / Math.max(1, slice.length);
          return Math.max(12, Math.min(96, 10 + average * 0.46));
        }),
      );

      frameRef.current = requestAnimationFrame(tick);
    };

    tick();
  }

  async function toggleAudio() {
    const audio = audioRef.current;

    if (!audioSrc || !audio) {
      return;
    }

    if (isPlaying) {
      audio.pause();
      return;
    }

    const AudioContextConstructor =
      window.AudioContext ||
      (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextConstructor) {
      return;
    }
    audioContextRef.current ??= new AudioContextConstructor();

    if (!sourceRef.current) {
      sourceRef.current = audioContextRef.current.createMediaElementSource(audio);
      analyserRef.current = audioContextRef.current.createAnalyser();
      analyserRef.current.fftSize = 128;
      sourceRef.current.connect(analyserRef.current);
      analyserRef.current.connect(audioContextRef.current.destination);
    }

    await audioContextRef.current.resume();
    await audio.play();
  }

  return (
    <div className={`border border-ash-line bg-background/78 p-4 backdrop-blur ${className}`}>
      <p className="font-mono text-xs uppercase tracking-[0.28em] text-sick">{label}</p>
      <div className="mt-3 flex items-center gap-4">
        <button
          type="button"
          onClick={toggleAudio}
          disabled={!audioSrc}
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-ash-line bg-paper text-bone transition hover:border-sick hover:text-sick disabled:cursor-not-allowed disabled:text-ash"
          aria-label={isPlaying ? "Pause the signal" : "Play the signal"}
          aria-controls={audioSrc ? audioId : undefined}
        >
          {isPlaying ? <Pause size={22} aria-hidden /> : <Play size={22} aria-hidden />}
        </button>
        <div className="min-w-0 flex-1">
          <p className="text-sm leading-6 text-bone">
            {audioSrc ? description : disabledDescription}
          </p>
          <div className="mt-3 flex h-8 items-end gap-1 overflow-hidden">
            {bars.map((height, index) => (
              <span
                key={index}
                data-signal-bar="true"
                className="w-full bg-sick/70 transition-[height,opacity] duration-100"
                style={{ height: `${height}%`, opacity: isPlaying ? 0.88 : 0.5 }}
              />
            ))}
          </div>
        </div>
      </div>
      {audioSrc ? (
        <audio
          id={audioId}
          ref={audioRef}
          className="sr-only"
          preload="none"
          src={audioSrc}
          onPlay={() => {
            setIsPlaying(true);
            startVisualizer();
          }}
          onPause={() => {
            setIsPlaying(false);
            stopVisualizer();
          }}
          onEnded={() => {
            setIsPlaying(false);
            stopVisualizer();
          }}
        >
          {captionSrc ? (
            <track kind="captions" src={captionSrc} srcLang="en" label="English" />
          ) : null}
        </audio>
      ) : null}
    </div>
  );
}
