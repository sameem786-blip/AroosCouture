"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig, buildWhatsAppLink } from "@/lib/site-config";
import { WhatsAppGlyph } from "./Navbar";

export function Hero() {
  return (
    <section
      id="home"
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
      <div
        className="pointer-events-none absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-gold/20 blur-3xl sm:h-96 sm:w-96"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 top-10 h-64 w-64 rounded-full bg-maroon/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-2 lg:gap-8 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 flex flex-col items-start gap-6 text-left lg:order-1"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/50 px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-[0.25em] text-gold-dark">
            Pakistani Bridal Couture · {siteConfig.city}
          </span>

          <h1 className="font-serif text-4xl leading-[1.1] text-ink sm:text-5xl md:text-6xl">
            Woven in Tradition.
            <br />
            <span className="text-gold-dark">Crafted for Elegance.</span>
          </h1>

          <p className="max-w-lg font-sans text-base leading-relaxed text-ink/70 sm:text-lg">
            {siteConfig.description}
          </p>

          <div className="mt-2 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href="#collections"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 font-sans text-sm font-semibold uppercase tracking-wide text-ivory shadow-lg shadow-ink/10 transition-all hover:-translate-y-0.5 hover:bg-maroon"
            >
              View Collection
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href={buildWhatsAppLink("Assalam-o-Alaikum! I'd love to know more about Aroos Couture's collections.")}
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative order-1 mx-auto flex w-full max-w-md items-center justify-center lg:order-2 lg:max-w-none"
        >
          <div className="relative aspect-square w-full max-w-[440px]">
            <div className="absolute inset-6 rounded-full border border-gold/30" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold-light/40 via-transparent to-maroon/10" />
            <Image
              src="/favicon.png"
              alt="Aroos Couture bride in hand-embroidered ivory and gold bridal wear"
              fill
              priority
              className="object-contain drop-shadow-[0_20px_40px_rgba(107,74,33,0.25)]"
              sizes="(min-width: 1024px) 440px, 80vw"
            />
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
