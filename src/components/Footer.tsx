import Image from "next/image";
import { navLinks, siteConfig, buildWhatsAppLink } from "@/lib/site-config";
import { WhatsAppGlyph } from "./Navbar";
import { PaisleyRow } from "./motifs";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="relative overflow-hidden bg-ink text-ivory">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(228,201,138,0.9) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-20 sm:px-8 sm:pt-24">
        <div className="flex flex-col items-center gap-4 text-center">
          <Image
            src="/logo.png"
            alt="Aroos Couture emblem"
            width={72}
            height={72}
            className="h-16 w-16 object-contain opacity-90"
          />
          <h2 className="font-serif text-3xl sm:text-4xl">{siteConfig.name}</h2>
          <p className="font-sans text-sm italic text-gold-light/80">
            {siteConfig.tagline}
          </p>
          <PaisleyRow className="text-gold-light/50" />
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-10 sm:grid-cols-3">
          <div className="flex flex-col items-center gap-3 text-center sm:items-start sm:text-left">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-gold-light">
              Explore
            </h3>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-ivory/70 transition-colors hover:text-gold-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center gap-3 text-center sm:items-start sm:text-left">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-gold-light">
              Visit the Atelier
            </h3>
            <p className="font-sans text-sm text-ivory/70">{siteConfig.city}</p>
            <p className="font-sans text-sm text-ivory/70">
              {siteConfig.hours}
            </p>
            <p className="font-sans text-sm text-ivory/70">
              {siteConfig.email}
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 text-center sm:items-start sm:text-left">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-gold-light">
              Get in Touch
            </h3>
            <a
              href={buildWhatsAppLink(
                "Assalam-o-Alaikum! I'd love to know more about Aroos Couture's collections.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 font-sans text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              <WhatsAppGlyph className="h-4 w-4" />
              Chat on WhatsApp
            </a>
            <div className="mt-1 flex items-center gap-4">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-ivory/70 transition-colors hover:text-gold-light"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-ivory/70 transition-colors hover:text-gold-light"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-2 border-t border-gold-light/15 pt-8 text-center">
          <p className="font-sans text-xs text-ivory/50">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="font-sans text-xs text-ivory/40">
            Handcrafted with tradition in {siteConfig.city}
          </p>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path d="M15 8h-2a2 2 0 0 0-2 2v2H9v3h2v6h3v-6h2.2l.8-3H14v-1.6c0-.5.3-.9.9-.9H16V8Z" />
      <circle cx="12" cy="12" r="9.25" />
    </svg>
  );
}
