import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/shared/button-link";
import {
  FEATURED_PRODUCTS,
  SUPPORTING_PRODUCTS,
  type FeaturedProduct,
} from "@/constants/products";
import { MESSENGER_URL } from "@/constants/site";
import { cn } from "@/lib/utils";

type FeaturedProductPanelProps = {
  product: FeaturedProduct;
  prominence: "primary" | "secondary";
};

function FeaturedProductPanel({
  product,
  prominence,
}: FeaturedProductPanelProps) {
  const isPrimary = prominence === "primary";

  return (
    <article className="flex h-full flex-col border border-border-paper">
      <div
        className={cn(
          "relative shrink-0 overflow-hidden bg-brand-ink/10 lg:aspect-auto lg:h-[clamp(22rem,28vw,30rem)]",
          isPrimary
            ? "aspect-[5/4] sm:aspect-[16/11]"
            : "aspect-[4/3] sm:aspect-video",
        )}
      >
        <Image
          src={product.image.src}
          alt={product.image.alt}
          fill
          quality={90}
          sizes={
            isPrimary
              ? "(min-width: 1664px) 880px, (min-width: 1024px) 58vw, (min-width: 640px) calc(100vw - 4rem), calc(100vw - 2.5rem)"
              : "(min-width: 1664px) 625px, (min-width: 1024px) 42vw, (min-width: 640px) calc(100vw - 4rem), calc(100vw - 2.5rem)"
          }
          className={cn("object-cover", product.image.position)}
        />
      </div>

      <div
        className={cn(
          "flex flex-1 flex-col border-t border-border-paper p-6 sm:p-8",
          isPrimary && "lg:p-10",
        )}
      >
        <span className="inline-flex w-fit self-start border border-warm-red/35 px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-warm-red-ink">
          {product.badge}
        </span>
        <h3
          className={cn(
            "mt-5 font-display font-bold leading-none tracking-[-0.035em] text-brand-ink",
            isPrimary ? "text-4xl sm:text-5xl" : "text-3xl sm:text-4xl",
          )}
        >
          {product.name}
        </h3>
        <p className="mb-6 mt-4 max-w-xl text-base leading-7 text-ink-muted">
          {product.description}
        </p>
        <p className="mt-auto border-t border-border-paper pt-4 text-sm font-semibold text-brand-ink">
          {product.note}
        </p>
      </div>
    </article>
  );
}

export function FeaturedProducts() {
  return (
    <section
      id="products"
      className="scroll-mt-20 border-t-4 border-warm-red bg-warm-paper py-20 text-brand-ink sm:py-24 lg:py-28 xl:py-32"
      aria-labelledby="products-heading"
    >
      <Container width="wide">
        <div className="grid gap-8 border-b border-border-paper pb-12 lg:grid-cols-12 lg:items-end lg:gap-10 lg:pb-16">
          <div className="lg:col-span-7 xl:col-span-8">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-warm-red-ink sm:text-sm">
              Our Products
            </p>
            <h2
              id="products-heading"
              className="mt-5 text-balance font-display text-4xl font-bold leading-[1.02] tracking-[-0.04em] text-brand-ink sm:text-5xl lg:text-6xl xl:text-[4.5rem]"
            >
              <span className="block">Fresh for everyday meals.</span>
              <span className="block">Made special for celebrations.</span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-ink-muted sm:text-lg sm:leading-8 lg:col-span-5 lg:pb-1 xl:col-span-4">
            From fresh, farm-sourced meat to celebration-ready lechon, Apol’s
            brings dependable quality and budget-friendly choices to Bustos
            families.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-12 lg:items-stretch xl:mt-16 xl:gap-8">
          <div className="lg:col-span-7 lg:h-full">
            <FeaturedProductPanel
              product={FEATURED_PRODUCTS[0]}
              prominence="primary"
            />
          </div>

          <div className="lg:col-span-5 lg:h-full">
            <FeaturedProductPanel
              product={FEATURED_PRODUCTS[1]}
              prominence="secondary"
            />
          </div>
        </div>

        <section
          className="mt-20 border-t border-border-paper pt-12 lg:mt-28 lg:pt-16"
          aria-labelledby="everyday-favorites-heading"
        >
          <div className="grid gap-5 lg:grid-cols-12 lg:items-end lg:gap-8">
            <div className="lg:col-span-7">
              <h3
                id="everyday-favorites-heading"
                className="font-display text-3xl font-bold leading-tight tracking-[-0.035em] text-brand-ink sm:text-4xl"
              >
                More Everyday Favorites
              </h3>
              <p className="mt-3 max-w-2xl text-base leading-7 text-ink-muted sm:text-lg">
                Convenient choices for quick meals, family favorites, and
                everyday cravings.
              </p>
            </div>

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-warm-red-ink lg:hidden">
              Swipe to explore
            </p>
          </div>

          <div className="-mx-5 mt-8 sm:-mx-8 lg:mx-0 lg:mt-10">
            <ul
              className="flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain px-5 pb-4 touch-pan-x [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-6 sm:px-8 lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0"
              aria-label="More everyday favorites"
              tabIndex={0}
            >
              {SUPPORTING_PRODUCTS.map((product) => (
                <li
                  key={product.name}
                  className="w-[82%] shrink-0 snap-start sm:w-[44%] md:w-[43%] lg:w-auto"
                >
                  <article className="flex h-full min-w-0 flex-col border border-border-paper">
                    <div className="relative aspect-[4/3] overflow-hidden bg-brand-ink/10">
                      <Image
                        src={product.image.src}
                        alt={product.image.alt}
                        fill
                        quality={90}
                        sizes="(min-width: 1664px) 366px, (min-width: 1024px) 24vw, (min-width: 640px) 44vw, 72vw"
                        className={cn(
                          "object-cover",
                          product.image.position,
                        )}
                      />
                    </div>

                    <div className="flex flex-1 flex-col border-t border-border-paper p-5 sm:p-6">
                      <h4 className="font-display text-2xl font-semibold leading-tight tracking-[-0.025em] text-brand-ink">
                        {product.name}
                      </h4>
                      <p className="mt-2 text-sm font-medium leading-6 text-ink-muted">
                        {product.description}
                      </p>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="mt-16 flex flex-col gap-6 border-y border-border-paper py-8 sm:py-10 lg:mt-20 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="font-display text-2xl font-semibold leading-tight tracking-[-0.025em] text-brand-ink sm:text-3xl">
              Looking for something specific?
            </h3>
            <p className="mt-2 text-base leading-7 text-ink-muted">
              Message Apol’s to ask what’s available today.
            </p>
          </div>

          <ButtonLink
            href={MESSENGER_URL}
            target="_blank"
            rel="noreferrer"
            className="w-full shrink-0 sm:w-auto"
          >
            <MessageCircle aria-hidden="true" size={19} strokeWidth={2} />
            Ask What’s Available Today
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
