import { PaisleyRow } from "./motifs";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <Reveal
      className={`flex flex-col gap-4 ${isCenter ? "items-center text-center" : "items-start text-left"}`}
    >
      <span
        className={`font-sans text-xs font-semibold uppercase tracking-[0.35em] ${
          light ? "text-gold-light" : "text-gold-dark"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`font-serif text-3xl leading-tight sm:text-4xl md:text-5xl ${
          light ? "text-ivory" : "text-ink"
        }`}
      >
        {title}
      </h2>
      <PaisleyRow className={light ? "text-gold-light/70" : "text-gold/70"} />
      {description ? (
        <p
          className={`max-w-2xl font-sans text-base leading-relaxed ${
            light ? "text-ivory/75" : "text-ink/70"
          } ${isCenter ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
