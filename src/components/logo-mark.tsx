type LogoMarkProps = {
  className?: string;
  flickerClassName?: string;
};

export function LogoMark({ className, flickerClassName }: LogoMarkProps) {
  return (
    <span
      className={[
        "logo-mark logo-flicker font-logo inline-flex whitespace-nowrap uppercase leading-none",
        flickerClassName,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span>Dark Drives</span>
      <sup className="logo-mark-tm" aria-label="trademark">
        &trade;
      </sup>
    </span>
  );
}
