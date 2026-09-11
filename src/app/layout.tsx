import type { Metadata } from "next";
import { Playfair_Display, Jost } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: `${siteConfig.name} | Traditional Pakistani Bridal Wear`,
  description: siteConfig.description,
  icons: {
    icon: [{ url: "/favicon-512.png", type: "image/png", sizes: "512x512" }],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: `${siteConfig.name} | Traditional Pakistani Bridal Wear`,
    description: siteConfig.description,
    images: ["/cover.png"],
    locale: "en_PK",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jost.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
