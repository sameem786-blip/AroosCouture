import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Craftsmanship } from "@/components/Craftsmanship";
import { Collections } from "@/components/Collections";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Craftsmanship />
        <Collections />
        <Testimonials />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
