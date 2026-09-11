import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const features = [
  {
    title: "Hand Embroidery",
    description: "Zardozi, dabka and gota-kinari worked by karigars, thread by thread.",
    icon: NeedleIcon,
  },
  {
    title: "Premium Fabrics",
    description: "Pure silk, raw chiffon and organza sourced for drape and durability.",
    icon: FabricIcon,
  },
  {
    title: "Bespoke Fitting",
    description: "Every gown is cut and fitted to your measurements, not off the rack.",
    icon: RulerIcon,
  },
  {
    title: "Nationwide Delivery",
    description: "Safely packaged and delivered across Pakistan, with tracking.",
    icon: TruckIcon,
  },
];

export function Craftsmanship() {
  return (
    <section id="craftsmanship" className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why Aroos Couture"
          title="Craftsmanship you can feel"
          description="Every ensemble passes through the hands of our embroidery artisans, tailors and finishers before it reaches you."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, description, icon: Icon }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <div className="group flex h-full flex-col items-start gap-4 rounded-2xl border border-gold/15 bg-cream/60 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-lg hover:shadow-gold/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold-dark transition-colors duration-300 group-hover:bg-gold group-hover:text-ivory">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-xl text-ink">{title}</h3>
                <p className="font-sans text-sm leading-relaxed text-ink/65">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function iconProps(className: string) {
  return {
    className,
    viewBox: "0 0 24 24",
    fill: "none" as const,
    stroke: "currentColor" as const,
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
}

function NeedleIcon({ className = "" }: { className?: string }) {
  return (
    <svg {...iconProps(className)}>
      <path d="M20 4 8 16" />
      <circle cx="20" cy="4" r="2" />
      <path d="M9 15 3 21l3-7 3 1Z" />
      <path d="M13 11c2 1 3 2 4 4" opacity={0.6} />
    </svg>
  );
}

function FabricIcon({ className = "" }: { className?: string }) {
  return (
    <svg {...iconProps(className)}>
      <path d="M4 6c4-2 12-2 16 0v13c-4-2-12-2-16 0Z" />
      <path d="M4 6v13" />
      <path d="M20 6v13" />
      <path d="M8 9c2-1 6-1 8 0" opacity={0.6} />
    </svg>
  );
}

function RulerIcon({ className = "" }: { className?: string }) {
  return (
    <svg {...iconProps(className)}>
      <rect x="3" y="8" width="18" height="8" rx="1.5" transform="rotate(-8 12 12)" />
      <path d="M7 8.5 7.8 11M11 7.8l.8 3M15 7 15.8 10" opacity={0.6} />
    </svg>
  );
}

function TruckIcon({ className = "" }: { className?: string }) {
  return (
    <svg {...iconProps(className)}>
      <path d="M3 7h11v10H3z" />
      <path d="M14 11h4l3 3v3h-7z" />
      <circle cx="7.5" cy="18" r="1.6" />
      <circle cx="17.5" cy="18" r="1.6" />
    </svg>
  );
}
