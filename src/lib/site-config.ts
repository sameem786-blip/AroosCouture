export const siteConfig = {
  name: "Aroos Couture",
  shortName: "Aroos",
  tagline: "Woven in Tradition. Crafted for Elegance.",
  description:
    "Aroos Couture is a Pakistani bridal couture house crafting handworked lehengas, gharara and Nikkah, Mehndi, Barat and Walima ensembles that carry generations of tradition into every stitch.",
  // TODO: replace with the real WhatsApp Business number (country code + number, no spaces or symbols)
  whatsappNumber: "923001234567",
  instagramHandle: "@aroos.couture",
  instagramUrl: "https://instagram.com/aroos.couture",
  facebookUrl: "https://facebook.com/aroos.couture",
  city: "Lahore, Pakistan",
  email: "hello@arooscouture.pk",
  hours: "Mon – Sat, 11:00 AM – 8:00 PM",
} as const;

export function buildWhatsAppLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Collections", href: "#collections" },
  { label: "Craftsmanship", href: "#craftsmanship" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
] as const;
