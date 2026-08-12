import {
  ArrowUp,
  Clock3,
  ExternalLink,
  MessageCircle,
  Phone,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import {
  SHOP_HOURS,
  SHOP_LOCATIONS,
  SHOP_PHONE,
} from "@/constants/locations";
import { MESSENGER_URL, NAV_ITEMS } from "@/constants/site";

const linkClassName =
  "inline-flex min-h-11 items-center text-sm font-medium text-text-muted transition-colors hover:text-warm-red-text";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-warm-red bg-surface-deep py-14 text-warm-paper sm:py-16 lg:py-20">
      <Container width="wide">
        <div className="grid gap-10 sm:grid-cols-2 sm:gap-x-12 lg:grid-cols-12 lg:gap-8 xl:gap-12">
          <div className="sm:col-span-2 lg:col-span-4 xl:col-span-5">
            <div className="inline-flex flex-col leading-none">
              <span className="font-display text-3xl font-bold tracking-[-0.04em] text-warm-paper">
                Apol’s
              </span>
              <span className="mt-1.5 text-[0.62rem] font-bold tracking-[0.26em] text-warm-red-text">
                MEAT SHOP
              </span>
            </div>
            <p className="mt-6 max-w-md text-base leading-7 text-text-muted">
              Fresh meat, frozen favorites, and celebration-ready lechon for
              Bustos families.
            </p>
          </div>

          <nav
            className="border-t border-white/10 pt-8 sm:border-t-0 sm:pt-0 lg:col-span-2"
            aria-label="Footer navigation"
          >
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-warm-red-text">
              Explore
            </h2>
            <ul className="mt-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={linkClassName}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="border-t border-white/10 pt-8 sm:border-t-0 sm:pt-0 lg:col-span-3">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-warm-red-text">
              Our Locations
            </h2>
            <ul className="mt-4 space-y-2">
              {SHOP_LOCATIONS.map((location) => (
                <li key={location.name}>
                  <a
                    href={location.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open directions to the ${location.name} branch in a new tab`}
                    className="group flex min-h-14 items-center justify-between gap-4 py-1"
                  >
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold text-warm-paper transition-colors group-hover:text-warm-red-text">
                        {location.name}
                      </span>
                      <span className="mt-1 block text-sm text-text-muted">
                        {location.municipality}
                      </span>
                    </span>
                    <ExternalLink
                      className="shrink-0 text-warm-red-text"
                      size={16}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-white/10 pt-8 sm:col-span-2 sm:border-t-0 sm:pt-0 lg:col-span-3 xl:col-span-2">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-warm-red-text">
              Contact
            </h2>
            <ul className="mt-4">
              <li>
                <a href={SHOP_PHONE.href} className={`${linkClassName} gap-3`}>
                  <Phone
                    className="shrink-0 text-warm-red-text"
                    size={17}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                  {SHOP_PHONE.display}
                </a>
              </li>
              <li>
                <a
                  href={MESSENGER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkClassName} gap-3`}
                >
                  <MessageCircle
                    className="shrink-0 text-warm-red-text"
                    size={18}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                  Message Us
                </a>
              </li>
            </ul>

            <div className="mt-5 flex items-start gap-3 border-t border-white/10 pt-5">
              <Clock3
                className="mt-0.5 shrink-0 text-warm-red-text"
                size={18}
                strokeWidth={1.8}
                aria-hidden="true"
              />
              <p className="text-sm leading-6 text-text-muted">
                <span className="block font-semibold text-warm-paper">
                  Open daily
                </span>
                <span className="block">{SHOP_HOURS.time}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-6 text-sm text-text-muted sm:mt-14 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Apol’s Meat Shop. All rights reserved.</p>
          <a
            href="#top"
            className="inline-flex min-h-11 w-fit items-center gap-2 font-semibold text-warm-paper transition-colors hover:text-warm-red-text"
          >
            Back to top
            <ArrowUp aria-hidden="true" size={17} strokeWidth={2} />
          </a>
        </div>
      </Container>
    </footer>
  );
}
