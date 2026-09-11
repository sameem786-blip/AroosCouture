"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { siteConfig, buildWhatsAppLink } from "@/lib/site-config";
import { WhatsAppGlyph } from "./Navbar";

type HeroSlide = {
  id: string;
  badge: string;
  headingLine1: string;
  headingLine2: string;
  description: string;
  whatsappMessage: string;
  rotate: number;
  scale: number;
  palette: { from: string; to: string; ring: string };
};

const heroSlides: HeroSlide[] = [
  {
    id: "baraat",
    badge: "Pakistani Bridal Couture · Lahore",
    headingLine1: "Woven in Tradition.",
    headingLine2: "Crafted for Elegance.",
    description: siteConfig.description,
    whatsappMessage:
      "Assalam-o-Alaikum! I'd love to know more about Aroos Couture's Baraat collection.",
    rotate: 0,
    scale: 1,
    palette: { from: "#5c1024", to: "#c99a3f", ring: "#8a1f3a" },
  },
  {
    id: "walima",
    badge: "Walima Edit · Radiant Silhouettes",
    headingLine1: "Grace That Lights",
    headingLine2: "the Room.",
    description:
      "Pearl and sequin florals cascading over hand-finished silk — gowns tailored for your most luminous entrance.",
    whatsappMessage:
      "Assalam-o-Alaikum! I'd love to know more about Aroos Couture's Walima collection.",
    rotate: -1.5,
    scale: 1.03,
    palette: { from: "#e8d3a0", to: "#b8873b", ring: "#6b4a21" },
  },
  {
    id: "mehndi",
    badge: "Mehndi Nights · Colour & Movement",
    headingLine1: "Vibrant Threads,",
    headingLine2: "Joyous Beginnings.",
    description:
      "Resham embroidery in mustard and bottle green, styled for dholki nights that move with you till dawn.",
    whatsappMessage:
      "Assalam-o-Alaikum! I'd love to know more about Aroos Couture's Mehndi collection.",
    rotate: 1.5,
    scale: 1,
    palette: { from: "#3f5d2f", to: "#e6b84a", ring: "#7e8f3a" },
  },
  {
    id: "nikkah",
    badge: "Nikkah Serenity · Timeless Ivory",
    headingLine1: "Serenity, Stitched",
    headingLine2: "for Your Nikkah.",
    description:
      "A floor-sweeping farshi silhouette in ivory and gota-kinari, made for a calm, radiant beginning.",
    whatsappMessage:
      "Assalam-o-Alaikum! I'd love to know more about Aroos Couture's Nikkah collection.",
    rotate: -1,
    scale: 1.02,
    palette: { from: "#e9d9ad", to: "#a67c27", ring: "#5a3f18" },
  },
  {
    id: "sangeet",
    badge: "Sangeet Nights · Mirror & Movement",
    headingLine1: "Where Tradition Meets",
    headingLine2: "the Dance Floor.",
    description:
      "Mirror-work and tilla embroidery on a flared sharara, cut to move as freely as the night does.",
    whatsappMessage:
      "Assalam-o-Alaikum! I'd love to know more about Aroos Couture's Sangeet collection.",
    rotate: 1,
    scale: 1,
    palette: { from: "#83204f", to: "#d9a441", ring: "#4a1030" },
  },
];

const AUTOPLAY_MS = 6000;

const imageVariants = {
  enter: (direction: number) => ({ opacity: 0, x: direction > 0 ? 36 : -36, scale: 0.96 }),
  center: { opacity: 1, x: 0, scale: 1 },
  exit: (direction: number) => ({ opacity: 0, x: direction > 0 ? -36 : 36, scale: 0.96 }),
};

export function Hero() {
  const [[index, direction], setSlide] = useState<[number, number]>([0, 0]);
  const [paused, setPaused] = useState(false);
  const reducedMotionRef = useRef(false);
  const slide = heroSlides[index];

  useEffect(() => {
    reducedMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (paused || reducedMotionRef.current) return;
    const timer = window.setInterval(() => {
      setSlide(([current]) => [(current + 1) % heroSlides.length, 1]);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [paused, index]);

  const goTo = (target: number) => {
    setSlide(([current]) => [target, target > current ? 1 : -1]);
  };

  const paginate = (step: 1 | -1) => {
    setSlide(([current]) => [(current + step + heroSlides.length) % heroSlides.length, step]);
  };

  return (
    <section
      id="home"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-ivory pt-24 sm:pt-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(184,135,59,0.18) 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
        aria-hidden="true"
      />
      <motion.div
        animate={{ backgroundColor: slide.palette.from }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-32 top-1/3 h-72 w-72 rounded-full opacity-20 blur-3xl sm:h-96 sm:w-96"
        aria-hidden="true"
      />
      <motion.div
        animate={{ backgroundColor: slide.palette.to }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-24 top-10 h-64 w-64 rounded-full opacity-10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-2 lg:gap-8 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 flex flex-col items-start gap-6 text-left lg:order-1"
        >
          <div className="grid w-full" aria-live="polite">
            {heroSlides.map((s, i) => (
              <motion.div
                key={s.id}
                initial={false}
                animate={{
                  opacity: i === index ? 1 : 0,
                  x: i === index ? 0 : i > index ? 24 : -24,
                }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                aria-hidden={i !== index}
                style={{ pointerEvents: i === index ? "auto" : "none", gridArea: "1 / 1" }}
                className="flex flex-col items-start gap-6"
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/50 px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-[0.25em] text-gold-dark">
                  {s.badge}
                </span>

                <h1 className="font-serif text-4xl leading-[1.1] text-ink sm:text-5xl md:text-6xl">
                  {s.headingLine1}
                  <br />
                  <span className="text-gold-dark">{s.headingLine2}</span>
                </h1>

                <p className="max-w-lg font-sans text-base leading-relaxed text-ink/70 sm:text-lg">
                  {s.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href="#collections"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 font-sans text-sm font-semibold uppercase tracking-wide text-ivory shadow-lg shadow-ink/10 transition-all hover:-translate-y-0.5 hover:bg-maroon"
            >
              View Collection
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href={buildWhatsAppLink(slide.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/50 bg-white/60 px-7 py-3.5 font-sans text-sm font-semibold uppercase tracking-wide text-ink transition-all hover:-translate-y-0.5 hover:border-gold hover:bg-white"
            >
              <WhatsAppGlyph className="h-4 w-4 text-[#25D366]" />
              Inquire on WhatsApp
            </a>
          </div>

          <dl className="mt-4 grid grid-cols-3 gap-6 border-t border-gold/20 pt-6">
            {[
              ["12+", "Years of Craft"],
              ["3,000+", "Brides Dressed"],
              ["100%", "Hand Embroidered"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="sr-only">{label}</dt>
                <dd className="font-serif text-2xl text-gold-dark sm:text-3xl">{value}</dd>
                <dd className="font-sans text-xs uppercase tracking-wide text-ink/55">{label}</dd>
              </div>
            ))}
          </dl>

          <div className="flex items-center gap-2 pt-1">
            {heroSlides.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to ${s.id} slide`}
                aria-current={i === index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-7 bg-gold-dark" : "w-1.5 bg-gold/30 hover:bg-gold/50"
                }`}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative order-1 mx-auto flex w-full max-w-md items-center justify-center lg:order-2 lg:max-w-none"
        >
          <div className="relative aspect-square w-full max-w-[440px]">
            <motion.div
              animate={{ background: `radial-gradient(circle, ${slide.palette.from}26, transparent 70%)` }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className="absolute inset-8 rounded-full blur-2xl"
              aria-hidden="true"
            />

            <div className="absolute inset-0">
              <AnimatePresence custom={direction} initial={false}>
                <motion.div
                  key={slide.id}
                  custom={direction}
                  variants={imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                  style={{ transform: `rotate(${slide.rotate}deg) scale(${slide.scale})` }}
                >
                  <Image
                    src="/favicon.png"
                    alt="Aroos Couture bride in hand-embroidered ivory and gold bridal wear"
                    fill
                    priority
                    className="object-contain drop-shadow-[0_20px_40px_rgba(107,74,33,0.25)]"
                    sizes="(min-width: 1024px) 440px, 80vw"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              type="button"
              onClick={() => paginate(-1)}
              aria-label="Previous slide"
              className="absolute left-0 top-1/2 flex h-10 w-10 -translate-x-1 -translate-y-1/2 items-center justify-center rounded-full border border-gold/40 bg-white/70 text-ink shadow-sm backdrop-blur-sm transition-colors hover:bg-white"
            >
              <ArrowGlyph className="h-4 w-4 rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => paginate(1)}
              aria-label="Next slide"
              className="absolute right-0 top-1/2 flex h-10 w-10 -translate-y-1/2 translate-x-1 items-center justify-center rounded-full border border-gold/40 bg-white/70 text-ink shadow-sm backdrop-blur-sm transition-colors hover:bg-white"
            >
              <ArrowGlyph className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ink/40 sm:flex">
        <span className="font-sans text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px bg-gradient-to-b from-gold to-transparent"
        />
      </div>
    </section>
  );
}

function ArrowGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.75}>
      <path d="M5 12h14" strokeLinecap="round" />
      <path d="M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
