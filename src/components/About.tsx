import Image from "next/image";
import { Reveal } from "./Reveal";
import { CornerFlourish } from "./motifs";

const stats = [
  ["12+", "Years of Craftsmanship"],
  ["3,000+", "Brides Dressed"],
  ["40+", "Master Artisans"],
] as const;

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <CornerFlourish className="pointer-events-none absolute -left-4 -top-4 h-32 w-32 text-gold/25" />
      <CornerFlourish className="pointer-events-none absolute -bottom-4 -right-4 h-32 w-32 rotate-180 text-gold/25" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative order-2 mx-auto w-full max-w-md lg:order-1">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-gold/25 bg-ivory shadow-xl shadow-ink/5">
            <Image
              src="/Brand Logo.png"
              alt="Aroos Couture brand emblem with bridal illustration"
              fill
              className="object-contain p-8"
              sizes="(min-width: 1024px) 420px, 80vw"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-gold/30 bg-ivory px-6 py-4 shadow-lg sm:block">
            <p className="font-serif text-lg italic text-ink/80">
              &ldquo;Tradition meets elegance&rdquo;
            </p>
          </div>
        </Reveal>

        <div className="order-1 flex flex-col items-start gap-6 text-left lg:order-2">
          <Reveal>
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.35em] text-gold-dark">
              Our Story
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-serif text-3xl leading-tight text-ink sm:text-4xl md:text-5xl">
              Heritage stitched into every hemline
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-xl font-sans text-base leading-relaxed text-ink/70 sm:text-lg">
              Aroos Couture began as a small karigar workshop in the heart of Lahore, rooted in the
              hand-embroidery traditions of Mughal-era Pakistan. Today, our artisans still hand-stitch
              every zardozi thread, gota border and dabka motif — but our silhouettes are cut for the
              modern bride, blending centuries-old craft with contemporary tailoring.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="max-w-xl font-sans text-base leading-relaxed text-ink/70 sm:text-lg">
              From your Mehndi to your Walima, every piece is made to order, fitted to you, and finished
              by hand — because a bride&rsquo;s attire should feel like it belongs to no one else.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="mt-4 grid w-full grid-cols-3 gap-6 border-t border-gold/25 pt-6">
            {stats.map(([value, label]) => (
              <div key={label}>
                <p className="font-serif text-2xl text-gold-dark sm:text-3xl">{value}</p>
                <p className="font-sans text-xs uppercase tracking-wide text-ink/55">{label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
