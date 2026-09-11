export type ProductPalette = {
  from: string;
  via: string;
  to: string;
  accent: string;
};

export type Product = {
  id: string;
  name: string;
  occasion: string;
  description: string;
  priceFrom: number;
  palette: ProductPalette;
};

export const products: Product[] = [
  {
    id: "zarbaft-bridal-lehenga",
    name: "Zarbaft Bridal Lehenga",
    occasion: "Baraat",
    description:
      "Hand-embellished zardozi and dabka work over silk, finished with a hand-embroidered dupatta border.",
    priceFrom: 285000,
    palette: {
      from: "#5c1024",
      via: "#8a1f3a",
      to: "#c99a3f",
      accent: "#f1d38a",
    },
  },
  {
    id: "gul-e-rana-walima-gown",
    name: "Gul-e-Rana Walima Gown",
    occasion: "Walima",
    description:
      "Pearl and sequin florals cascading over an ivory silk gown, tailored for an unforgettable entrance.",
    priceFrom: 245000,
    palette: {
      from: "#efe3c8",
      via: "#e8d3a0",
      to: "#b8873b",
      accent: "#6b4a21",
    },
  },
  {
    id: "resham-mehndi-peshwas",
    name: "Resham Mehndi Peshwas",
    occasion: "Mehndi",
    description:
      "Vibrant resham thread embroidery in mustard and bottle green, styled for dholki nights and dance.",
    priceFrom: 95000,
    palette: {
      from: "#3f5d2f",
      via: "#7e8f3a",
      to: "#e6b84a",
      accent: "#fbe7a6",
    },
  },
  {
    id: "noor-nikkah-farshi",
    name: "Noor Nikkah Farshi Frock",
    occasion: "Nikkah",
    description:
      "A floor-sweeping ivory farshi frock with gota-kinari trim, made for a serene, radiant Nikkah.",
    priceFrom: 175000,
    palette: {
      from: "#f7f1e2",
      via: "#e9d9ad",
      to: "#a67c27",
      accent: "#5a3f18",
    },
  },
  {
    id: "shahi-sangeet-sharara",
    name: "Shahi Sangeet Sharara",
    occasion: "Sangeet",
    description:
      "Mirror-work and tilla embroidery on a flared sharara, cut for movement on the dance floor.",
    priceFrom: 120000,
    palette: {
      from: "#4a1030",
      via: "#83204f",
      to: "#d9a441",
      accent: "#f3cf82",
    },
  },
  {
    id: "mehr-barat-gharara",
    name: "Mehr Barat Gharara",
    occasion: "Baraat",
    description:
      "Regal dabka and kora work in deep red and gold, a timeless silhouette for the big day.",
    priceFrom: 220000,
    palette: {
      from: "#6b0f1a",
      via: "#a3172a",
      to: "#dba53f",
      accent: "#f6dd9c",
    },
  },
];

export function formatPKR(amount: number) {
  return new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    maximumFractionDigits: 0,
  }).format(amount);
}
