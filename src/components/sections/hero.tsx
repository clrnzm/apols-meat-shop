import Image from "next/image";
import { ArrowRight, Clock3, MapPin, MessageCircle } from "lucide-react";
import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/shared/button-link";
import { TrustStrip } from "@/components/sections/trust-strip";
import { MESSENGER_URL } from "@/constants/site";

export function Hero() {
  return (
    <section
      id="top"
      className="hero-background flex min-h-svh flex-col overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* TODO: Replace this 1823×863 placeholder with a licensed 2800–3200px-wide source; quality cannot restore missing detail. */}
      <Image
        src="/images/apols-hero-products.webp"
        alt=""
        fill
        priority
        quality={90}
        sizes="100vw"
        className="-z-30 object-cover object-[70%_center] sm:object-[64%_center] lg:object-[center_center]"
      />

      <div className="flex flex-1 items-center pb-12 pt-32 sm:pb-16 sm:pt-36 lg:py-28 xl:py-32">
        <Container width="wide">
          <div className="max-w-4xl">
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-warm-red-text sm:text-sm">
              <span className="h-px w-8 bg-warm-red" aria-hidden="true" />
              Serving Bustos since 2021
            </p>

            <h1
              id="hero-heading"
              className="mt-6 max-w-[52rem] text-balance font-display text-5xl font-bold leading-[0.98] tracking-[-0.045em] text-light-text sm:text-6xl lg:text-[4.25rem] xl:text-[4.75rem]"
            >
              Fresh Cuts for Every Meal. Lechon for Every Celebration.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-text-muted sm:text-lg sm:leading-8">
              Fresh meat, frozen favorites, and celebration-ready lechon—quality
              choices made affordable for Bustos families.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink
                href={MESSENGER_URL}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto"
              >
                <MessageCircle aria-hidden="true" size={19} strokeWidth={2} />
                Message Us
              </ButtonLink>
              <ButtonLink
                href="#products"
                variant="secondary"
                className="w-full sm:w-auto"
              >
                Explore Products
                <ArrowRight aria-hidden="true" size={18} strokeWidth={2} />
              </ButtonLink>
            </div>

            <div className="mt-9 flex flex-col gap-4 text-sm font-medium text-light-text/80 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3">
              <p className="flex items-center gap-2.5">
                <MapPin
                  aria-hidden="true"
                  className="shrink-0 text-warm-red"
                  size={19}
                  strokeWidth={1.8}
                />
                Poblacion &amp; Bonga Mayor, Bustos
              </p>
              <p className="flex items-center gap-2.5">
                <Clock3
                  aria-hidden="true"
                  className="shrink-0 text-warm-red"
                  size={19}
                  strokeWidth={1.8}
                />
                Open daily, 5 AM–12 PM
              </p>
            </div>
          </div>
        </Container>
      </div>

      <TrustStrip />
    </section>
  );
}
