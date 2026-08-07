import Image from "next/image";
import { CalendarClock, CircleCheck, MessageCircle } from "lucide-react";
import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/shared/button-link";
import { MESSENGER_URL } from "@/constants/site";

const LECHON_OPTIONS = ["Regular Size", "Large Size"] as const;

export function LechonSpotlight() {
  return (
    <section
      id="lechon"
      className="scroll-mt-20 border-t-4 border-warm-red bg-brand-ink py-20 text-light-text sm:py-24 lg:py-28 xl:py-32"
      aria-labelledby="lechon-heading"
    >
      <Container width="wide">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-12 xl:gap-16">
          <div className="lg:col-span-7">
            <div className="relative aspect-[3/2] overflow-hidden rounded-[1.375rem] border border-white/15 bg-surface-deep">
              <Image
                src="/images/lechon/lechon-celebration.webp"
                alt="Whole roasted lechon served on banana leaves for a Filipino celebration"
                fill
                quality={90}
                sizes="(min-width: 1664px) 930px, (min-width: 1024px) 58vw, (min-width: 640px) calc(100vw - 4rem), calc(100vw - 2.5rem)"
                className="object-cover object-[center_56%]"
              />
            </div>
          </div>

          <div className="min-w-0 lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-warm-red-text sm:text-sm">
              Celebration Favorite
            </p>
            <h2
              id="lechon-heading"
              className="mt-5 max-w-2xl text-balance font-display text-4xl font-bold leading-[1.02] tracking-[-0.04em] text-light-text sm:text-5xl lg:text-6xl"
            >
              Bring the celebration to the table.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-text-muted sm:text-lg sm:leading-8">
              Choose between regular and large lechon, served with free lechon
              sauce and prepared for family gatherings, fiestas, and special
              occasions.
            </p>

            <div className="mt-9 sm:mt-10">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-warm-red-text">
                Available options
              </h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {LECHON_OPTIONS.map((option, index) => (
                  <li
                    key={option}
                    className="flex min-w-0 items-center gap-4 rounded-xl border border-white/15 bg-surface-muted/45 px-4 py-4 sm:px-5"
                  >
                    <span
                      className="font-display text-sm font-semibold text-warm-red-text"
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-xl font-semibold tracking-[-0.02em] text-light-text sm:text-2xl">
                      {option}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 grid gap-5 border-b border-white/15 pb-8 sm:grid-cols-2">
              <p className="flex min-w-0 items-start gap-3 text-sm font-medium leading-6 text-light-text">
                <CircleCheck
                  className="mt-0.5 shrink-0 text-warm-red-text"
                  size={20}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
                Free lechon sauce included
              </p>
              <p className="flex min-w-0 items-start gap-3 text-sm font-medium leading-6 text-light-text">
                <CalendarClock
                  className="mt-0.5 shrink-0 text-warm-red-text"
                  size={20}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
                Please order at least one day ahead
              </p>
            </div>

            <p className="mt-8 max-w-lg text-sm leading-6 text-text-muted sm:text-base sm:leading-7">
              Message us to check availability and confirm your preferred date.
            </p>
            <ButtonLink
              href={MESSENGER_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-6 w-full sm:w-fit"
            >
              <MessageCircle aria-hidden="true" size={19} strokeWidth={2} />
              Ask About Lechon
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
