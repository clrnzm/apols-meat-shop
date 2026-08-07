import { Navbar } from "@/components/layout/navbar";
import { FeaturedProducts } from "@/components/sections/featured-products";
import { Hero } from "@/components/sections/hero";
import { LechonSpotlight } from "@/components/sections/lechon-spotlight";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedProducts />
        <LechonSpotlight />
      </main>
    </>
  );
}
