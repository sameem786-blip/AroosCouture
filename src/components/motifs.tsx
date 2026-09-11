import type { CSSProperties } from "react";

export function PaisleyRow({ className = "" }: { className?: string }) {
  const leaf = (
    <path d="M12 2c4 1.5 6 5 4.6 9-1 2.9-3.6 4.4-3.6 7.4 0 1.7 1 2.9 2.4 3.4-3.4.6-6.4-1.6-6.4-5 0-2.6 1.7-4 1.7-6.4 0-2.7-2-4.4-4.7-4.4 1.4-2.8 3.9-4.6 6-4z" />
  );
  return (
    <div
      className={`flex items-center justify-center gap-6 text-gold/70 ${className}`}
      aria-hidden="true"
    >
      <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold/60" />
      {[0, 1, 2].map((i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className="h-4 w-4 fill-current opacity-70"
          style={{ transform: i === 1 ? "scale(1.3)" : undefined }}
        >
          {leaf}
        </svg>
      ))}
      <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold/60" />
    </div>
  );
}

export function DressSilhouette({
  className = "",
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 120 160"
      className={className}
      style={style}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.2}
      aria-hidden="true"
    >
      <circle cx="60" cy="14" r="7" />
      <path d="M60 21c-6 0-11 4-12 9-1 5 1 9 3 12-6 8-11 15-14 24-8 22-14 46-16 74-1 5 3 9 8 9h62c5 0 9-4 8-9-2-28-8-52-16-74-3-9-8-16-14-24 2-3 4-7 3-12-1-5-6-9-12-9z" />
      <path d="M60 46v100" strokeDasharray="1 5" strokeLinecap="round" opacity={0.7} />
      <path d="M40 58c6 3 12 3 20 0s14-3 20 0" strokeLinecap="round" opacity={0.85} />
      <path d="M27 100c10 4 20 4 33 0s23-4 33 0" strokeLinecap="round" opacity={0.85} />
      <path d="M20 130c12 5 25 5 40 0s28-5 40 0" strokeLinecap="round" opacity={0.85} />
    </svg>
  );
}

export function CornerFlourish({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      aria-hidden="true"
    >
      <path d="M2 2c30 0 55 8 68 24 10 12 12 26 8 38" strokeLinecap="round" />
      <circle cx="78" cy="64" r="3" fill="currentColor" stroke="none" />
      <path d="M2 2c14 4 24 12 30 24" strokeLinecap="round" opacity={0.6} />
    </svg>
  );
}
