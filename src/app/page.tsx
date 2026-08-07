import { Navbar } from "@/components/layout/navbar";
import { FeaturedProducts } from "@/components/sections/featured-products";
import { Hero } from "@/components/sections/hero";
import { LechonSpotlight } from "@/components/sections/lechon-spotlight";
import { WhyApols } from "@/components/sections/why-apols";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedProducts />
        <LechonSpotlight />
        <WhyApols />
      </main>
    </>
  );
}
