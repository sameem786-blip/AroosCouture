"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, siteConfig, buildWhatsAppLink } from "@/lib/site-config";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Unmounting the menu's fixed-position overlay mid-scroll interrupts an
  // in-progress smooth scrollIntoView (the browser silently drops it), so we
  // close the menu, let its exit animation finish, then scroll ourselves
  // instead of relying on default <a href="#..."> navigation.
  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    const id = href.slice(1);
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", href);
    }, 320);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ivory/90 shadow-[0_1px_0_0_rgba(184,135,59,0.25)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#home" className="flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt="Aroos Couture emblem"
            width={44}
            height={44}
            className="h-10 w-10 object-contain sm:h-11 sm:w-11"
            priority
          />
          <span className="font-serif text-lg tracking-wide text-ink sm:text-xl">
            {siteConfig.name}
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative font-sans text-sm font-medium uppercase tracking-wide text-ink/75 transition-colors hover:text-gold-dark after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href={buildWhatsAppLink("Assalam-o-Alaikum! I'd love to know more about Aroos Couture's collections.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 font-sans text-sm font-semibold text-ink shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md"
          >
            <WhatsAppGlyph className="h-4 w-4" />
            Inquire Now
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-ink lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <span className="relative block h-3.5 w-4">
            <span
              className={`absolute left-0 top-0 h-px w-4 bg-current transition-transform duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 bg-current transition-opacity duration-300 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute bottom-0 left-0 h-px w-4 bg-current transition-transform duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden bg-ivory/97 backdrop-blur-md lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 pb-6 pt-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavLinkClick(e, link.href)}
                    className="block rounded-lg px-3 py-3 font-sans text-base font-medium text-ink/85 transition-colors hover:bg-gold/10 hover:text-gold-dark"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={buildWhatsAppLink("Assalam-o-Alaikum! I'd love to know more about Aroos Couture's collections.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 font-sans text-sm font-semibold text-ink"
                >
                  <WhatsAppGlyph className="h-4 w-4" />
                  Inquire on WhatsApp
                </a>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

export function WhatsAppGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.02 3C9.4 3 4 8.37 4 15c0 2.36.66 4.56 1.8 6.44L4 29l7.75-1.75A11.9 11.9 0 0 0 16.02 27C22.63 27 28 21.63 28 15S22.63 3 16.02 3Zm0 21.7c-1.97 0-3.8-.58-5.35-1.58l-.38-.24-4.6 1.04 1.08-4.48-.25-.4A9.6 9.6 0 0 1 6.3 15c0-5.36 4.36-9.7 9.72-9.7 5.35 0 9.7 4.34 9.7 9.7 0 5.36-4.35 9.7-9.7 9.7Zm5.32-7.26c-.29-.15-1.72-.85-1.99-.94-.27-.1-.46-.15-.66.14-.2.29-.75.94-.92 1.13-.17.2-.34.22-.63.08-.29-.15-1.22-.45-2.32-1.44-.86-.76-1.43-1.71-1.6-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.48.1-.2.05-.37-.02-.51-.08-.15-.66-1.6-.9-2.19-.24-.57-.48-.5-.66-.5-.17 0-.37-.02-.56-.02-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.44s1.05 2.83 1.19 3.03c.15.2 2.07 3.15 5.01 4.42.7.3 1.25.48 1.68.62.7.22 1.34.19 1.84.12.56-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.2-.55-.34Z" />
    </svg>
  );
}
