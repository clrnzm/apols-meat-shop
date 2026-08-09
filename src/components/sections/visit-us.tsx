import Image from "next/image";
import {
  Clock3,
  ExternalLink,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/shared/button-link";
import {
  SHOP_HOURS,
  SHOP_LOCATIONS,
  SHOP_PHONE,
  type ShopLocation,
} from "@/constants/locations";
import { MESSENGER_URL } from "@/constants/site";
import { cn } from "@/lib/utils";

type LocationCardProps = {
  location: ShopLocation;
  prominence: "primary" | "secondary";
};

function LocationCard({ location, prominence }: LocationCardProps) {
  const isPrimary = prominence === "primary";

  return (
    <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-[1.375rem] border border-white/15 bg-surface-muted/35">
      <div className="relative aspect-[4/3] shrink-0 overflow-hidden bg-surface-deep sm:aspect-[16/10] lg:aspect-auto lg:h-[clamp(20rem,28vw,28rem)]">
        <Image
          src={location.image.src}
          alt={location.image.alt}
          fill
          quality={90}
          sizes={
            isPrimary
              ? "(min-width: 1664px) 930px, (min-width: 1024px) 58vw, (min-width: 640px) calc(100vw - 4rem), calc(100vw - 2.5rem)"
              : "(min-width: 1664px) 650px, (min-width: 1024px) 42vw, (min-width: 640px) calc(100vw - 4rem), calc(100vw - 2.5rem)"
          }
          className={cn("object-cover", location.image.position)}
        />
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <span className="inline-flex w-fit self-start rounded-full border border-warm-red-text/35 px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.17em] text-warm-red-text">
          {location.badge}
        </span>
        <h3 className="mt-5 font-display text-3xl font-bold leading-none tracking-[-0.035em] text-light-text sm:text-4xl">
          {location.name}
        </h3>

        <p className="mt-4 flex items-start gap-3 text-sm leading-6 text-text-muted sm:text-base">
          <MapPin
            className="mt-0.5 shrink-0 text-warm-red-text"
            size={20}
            strokeWidth={1.8}
            aria-hidden="true"
          />
          {location.address}
        </p>

        <div className="mt-5 flex items-start gap-3 border-t border-white/15 pt-5">
          <Clock3
            className="mt-0.5 shrink-0 text-warm-red-text"
            size={20}
            strokeWidth={1.8}
            aria-hidden="true"
          />
          <p className="text-sm leading-6 text-text-muted">
            <span className="block font-semibold text-light-text">
              Open daily
            </span>
            <span className="block">{SHOP_HOURS.days}</span>
            <span className="block">{SHOP_HOURS.time}</span>
          </p>
        </div>

        <div className="mt-auto pt-8">
          <ButtonLink
            href={location.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Get directions to the ${location.name} branch (opens in a new tab)`}
            className="w-full sm:w-fit"
          >
            <ExternalLink aria-hidden="true" size={18} strokeWidth={2} />
            Get Directions
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}

export function VisitUs() {
  return (
    <section
      id="visit"
      className="scroll-mt-20 border-t-4 border-warm-red bg-brand-ink py-20 text-light-text sm:py-24 lg:py-28 xl:py-32"
      aria-labelledby="visit-heading"
    >
      <Container width="wide">
        <div className="max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-warm-red-text sm:text-sm">
            Visit Apol’s
          </p>
          <h2
            id="visit-heading"
            className="mt-5 text-balance font-display text-4xl font-bold leading-[1.02] tracking-[-0.04em] text-light-text sm:text-5xl lg:text-6xl xl:text-[4.5rem]"
          >
            Fresh choices, right here in Bustos.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-text-muted sm:text-lg sm:leading-8">
            Visit the branch most convenient for you. Both locations are open
            every day from 5:00 AM to 12:00 PM.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-12 lg:items-stretch xl:mt-16 xl:gap-8">
          <div className="lg:col-span-7">
            <LocationCard
              location={SHOP_LOCATIONS[0]}
              prominence="primary"
            />
          </div>
          <div className="lg:col-span-5">
            <LocationCard
              location={SHOP_LOCATIONS[1]}
              prominence="secondary"
            />
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-y border-white/15 py-8 sm:py-10 lg:mt-20 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-2xl">
            <h3 className="font-display text-2xl font-semibold leading-tight tracking-[-0.025em] text-light-text sm:text-3xl">
              Questions before you visit?
            </h3>
            <p className="mt-2 text-base leading-7 text-text-muted">
              Call or message Apol’s Meat Shop before heading to your preferred
              branch.
            </p>
          </div>

          <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row">
            <ButtonLink
              href={SHOP_PHONE.href}
              variant="secondary"
              className="w-full sm:w-auto"
            >
              <Phone aria-hidden="true" size={18} strokeWidth={2} />
              Call {SHOP_PHONE.display}
            </ButtonLink>
            <ButtonLink
              href={MESSENGER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <MessageCircle aria-hidden="true" size={19} strokeWidth={2} />
              Message Us
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
