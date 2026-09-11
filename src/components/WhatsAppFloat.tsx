"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { buildWhatsAppLink } from "@/lib/site-config";
import { WhatsAppGlyph } from "./Navbar";

export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.a
          href={buildWhatsAppLink("Assalam-o-Alaikum! I'd love to know more about Aroos Couture's collections.")}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl sm:bottom-8 sm:right-8"
          aria-label="Inquire on WhatsApp"
        >
          <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-60" />
          <WhatsAppGlyph className="relative h-7 w-7" />
        </motion.a>
      ) : null}
    </AnimatePresence>
  );
}
