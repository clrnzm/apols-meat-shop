import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { FeaturedProducts } from "@/components/sections/featured-products";
import { Hero } from "@/components/sections/hero";
import { LechonSpotlight } from "@/components/sections/lechon-spotlight";
import { VisitUs } from "@/components/sections/visit-us";
import { WhyApols } from "@/components/sections/why-apols";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="fixed left-5 top-4 z-[100] -translate-y-24 whitespace-nowrap rounded-sm border border-warm-red bg-warm-paper px-5 py-3 font-semibold text-brand-ink transition-transform focus:translate-y-0 sm:left-8 lg:left-12 2xl:left-16"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1} data-mobile-menu-inert="">
        <Hero />
        <FeaturedProducts />
        <LechonSpotlight />
        <WhyApols />
        <VisitUs />
      </main>
      <Footer />
    </>
  );
}
