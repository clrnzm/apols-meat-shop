import Image from "next/image";
import { Container } from "@/components/layout/container";

type TrustPoint = {
  label: string;
  description: string;
};

const TRUST_POINTS = [
  {
    label: "Local since 2021",
    description:
      "Serving the everyday meals and special occasions of Bustos families.",
  },
  {
    label: "One-stop selection",
    description:
      "Fresh meat, frozen favorites, embutido, skinless, longganisa, and lechon in one place.",
  },
  {
    label: "Prepared your way",
    description:
      "Custom cuts and practical choices for different meals and budgets.",
  },
] as const satisfies readonly TrustPoint[];

export function WhyApols() {
  return (
    <section
      id="why-apols"
      className="paper-pattern-background scroll-mt-20 border-t border-warm-red/60 bg-warm-paper py-20 text-brand-ink sm:py-24 lg:py-28 xl:py-32"
      aria-labelledby="why-apols-heading"
    >
      <Container width="wide" className="relative z-10">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-12 xl:gap-16">
          <div className="min-w-0 lg:col-span-5 lg:pr-4">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-warm-red-ink sm:text-sm">
              Why Apol’s
            </p>
            <h2
              id="why-apols-heading"
              className="mt-5 max-w-2xl text-balance font-display text-4xl font-bold leading-[1.02] tracking-[-0.04em] text-brand-ink sm:text-5xl lg:text-6xl"
            >
              Serving Bustos families since 2021.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-ink-muted sm:text-lg sm:leading-8">
              Apol’s Meat Shop brings fresh meat, frozen favorites, and
              celebration-ready lechon together in one convenient local shop.
            </p>
            <p className="mt-4 max-w-xl text-base leading-7 text-ink-muted">
              We focus on dependable quality, budget-friendly choices, clean
              service, and cuts prepared the way our customers need them.
            </p>

            <ul className="mt-10 border-t border-border-paper">
              {TRUST_POINTS.map((point) => (
                <li
                  key={point.label}
                  className="grid min-w-0 gap-2 border-b border-border-paper py-5 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-6"
                >
                  <h3 className="text-xs font-bold uppercase leading-5 tracking-[0.16em] text-warm-red-ink">
                    {point.label}
                  </h3>
                  <p className="text-sm leading-6 text-ink-muted">
                    {point.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0 lg:col-span-7">
            <div className="relative lg:pb-20">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.375rem] border border-border-paper bg-brand-ink/10">
                <Image
                  src="/images/shop/poblacion-storefront.webp"
                  alt="Apol’s Meat Shop storefront and meat counter at the Poblacion branch in Bustos"
                  fill
                  quality={90}
                  sizes="(min-width: 1664px) 930px, (min-width: 1024px) 58vw, (min-width: 640px) calc(100vw - 4rem), calc(100vw - 2.5rem)"
                  className="object-cover object-[center_48%]"
                />
              </div>

              <div className="relative mt-4 aspect-[179/80] overflow-hidden rounded-[1.375rem] border-[0.375rem] border-warm-paper bg-brand-ink/10 lg:absolute lg:bottom-0 lg:left-8 lg:mt-0 lg:w-[62%] xl:left-12">
                <Image
                  src="/images/shop/poblacion-counter.webp"
                  alt="Fresh meat displayed at the Apol’s Meat Shop Poblacion counter"
                  fill
                  quality={90}
                  sizes="(min-width: 1664px) 580px, (min-width: 1024px) 36vw, (min-width: 640px) calc(100vw - 4rem), calc(100vw - 2.5rem)"
                  className="object-cover object-[center_45%]"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
