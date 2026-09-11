"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { products } from "@/data/products";
import { SectionHeading } from "./SectionHeading";
import { ProductCard } from "./ProductCard";

const occasions = ["All", ...Array.from(new Set(products.map((p) => p.occasion)))];

export function Collections() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () => (active === "All" ? products : products.filter((p) => p.occasion === active)),
    [active]
  );

  return (
    <section id="collections" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The Collection"
          title="Every occasion, hand-crafted"
          description="From Mehndi to Walima, each piece is made to order in our Lahore atelier. Browse by occasion or explore it all."
        />

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
          {occasions.map((occasion) => (
            <button
              key={occasion}
              type="button"
              onClick={() => setActive(occasion)}
              className={`rounded-full border px-5 py-2 font-sans text-sm font-medium transition-all duration-300 ${
                active === occasion
                  ? "border-gold bg-ink text-ivory shadow-md"
                  : "border-gold/30 bg-white/70 text-ink/70 hover:border-gold hover:text-ink"
              }`}
            >
              {occasion}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
