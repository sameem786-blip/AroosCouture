import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const testimonials = [
  {
    quote:
      "My Baraat lehenga from Aroos Couture felt like it was made for royalty. The zardozi work was flawless and the fit was perfect on the day.",
    name: "Ayesha K.",
    city: "Lahore",
  },
  {
    quote:
      "We ordered Walima and Mehndi outfits together. The team understood exactly what we wanted — traditional, but not heavy or outdated.",
    name: "Hira M.",
    city: "Islamabad",
  },
  {
    quote:
      "The attention to detail is unmatched. Every stitch felt intentional. Worth every rupee for a day this important.",
    name: "Sana R.",
    city: "Karachi",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 text-gold" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-current">
          <path d="M10 1.5l2.6 5.6 6 .7-4.5 4.1 1.2 6-5.3-3-5.3 3 1.2-6-4.5-4.1 6-.7z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Kind Words"
          title="Loved by brides across Pakistan"
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <figure className="flex h-full flex-col gap-4 rounded-2xl border border-gold/15 bg-cream/50 p-8">
                <Stars />
                <blockquote className="flex-1 font-serif text-lg italic leading-relaxed text-ink/85">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="font-sans text-sm text-ink/60">
                  <span className="font-semibold text-ink/80">{t.name}</span> · {t.city}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
