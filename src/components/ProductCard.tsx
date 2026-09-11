import { buildWhatsAppLink } from "@/lib/site-config";
import { formatPKR, type Product } from "@/data/products";
import { DressSilhouette } from "./motifs";
import { WhatsAppGlyph } from "./Navbar";

export function ProductCard({ product }: { product: Product }) {
  const { name, occasion, description, priceFrom, palette } = product;
  const message = `Assalam-o-Alaikum! I'm interested in the "${name}" (${occasion}). Could you share more details and pricing?`;

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gold/15 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-gold/40 hover:shadow-xl hover:shadow-gold/15">
      <div
        className="relative aspect-[3/4] w-full overflow-hidden"
        style={{
          background: `linear-gradient(155deg, ${palette.from}, ${palette.via} 55%, ${palette.to})`,
        }}
      >
        <div
          className="absolute inset-0 opacity-25 transition-transform duration-700 group-hover:scale-110"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.5) 0, transparent 45%), radial-gradient(circle at 80% 0%, rgba(255,255,255,0.35) 0, transparent 40%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.9) 1px, transparent 0)",
            backgroundSize: "16px 16px",
          }}
          aria-hidden="true"
        />
        <DressSilhouette
          className="absolute inset-0 m-auto h-2/3 w-2/3 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:-rotate-1"
          style={{ color: palette.accent }}
        />
        <span className="absolute left-4 top-4 rounded-full bg-ivory/90 px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-wide text-ink shadow-sm">
          {occasion}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2.5 p-6">
        <h3 className="font-serif text-xl text-ink">{name}</h3>
        <p className="flex-1 font-sans text-sm leading-relaxed text-ink/65">{description}</p>
        <p className="pt-1 font-sans text-sm text-ink/50">
          Starting from{" "}
          <span className="font-serif text-lg text-gold-dark">{formatPKR(priceFrom)}</span>
        </p>
        <a
          href={buildWhatsAppLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366]/10 px-5 py-3 font-sans text-sm font-semibold text-[#1a7d46] transition-colors duration-300 hover:bg-[#25D366] hover:text-white"
        >
          <WhatsAppGlyph className="h-4 w-4" />
          Inquire on WhatsApp
        </a>
      </div>
    </div>
  );
}
