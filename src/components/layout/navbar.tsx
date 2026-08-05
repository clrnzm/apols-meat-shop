"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/shared/button-link";
import { MESSENGER_URL, NAV_ITEMS } from "@/constants/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);
  const mobileNavigationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const mainContent = document.querySelector<HTMLElement>("main");
    const wasMainContentInert = mainContent?.inert ?? false;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        window.requestAnimationFrame(() => menuButtonRef.current?.focus());
        return;
      }

      if (event.key !== "Tab") return;

      const menuButton = menuButtonRef.current;
      const mobileNavigation = mobileNavigationRef.current;

      if (!menuButton || !mobileNavigation) return;

      const menuItems = Array.from(
        mobileNavigation.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );
      const focusableElements = [menuButton, ...menuItems];
      const firstElement = focusableElements[0];
      const lastElement = focusableElements.at(-1);

      if (!lastElement) return;

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      } else if (
        !focusableElements.includes(document.activeElement as HTMLElement)
      ) {
        event.preventDefault();
        firstMobileLinkRef.current?.focus();
      }
    };

    document.body.style.overflow = "hidden";
    if (mainContent) mainContent.inert = true;
    document.addEventListener("keydown", handleKeyDown);
    window.requestAnimationFrame(() => firstMobileLinkRef.current?.focus());

    return () => {
      document.body.style.overflow = previousOverflow;
      if (mainContent) mainContent.inert = wasMainContentInert;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const desktopBreakpoint = window.matchMedia("(min-width: 64rem)");
    const closeMenuAtDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setIsMenuOpen(false);
    };

    desktopBreakpoint.addEventListener("change", closeMenuAtDesktop);
    return () =>
      desktopBreakpoint.removeEventListener("change", closeMenuAtDesktop);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300",
        isScrolled || isMenuOpen
          ? "border-white/10 bg-brand-ink/90 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <Container
        width="wide"
        className="flex h-20 items-center justify-between"
      >
        <a
          href="#top"
          className="group inline-flex flex-col leading-none"
          aria-label="Apol’s Meat Shop, back to top"
          onClick={closeMenu}
        >
          <span className="font-display text-2xl font-bold tracking-[-0.04em] text-light-text transition-colors group-hover:text-warm-red-text">
            Apol’s
          </span>
          <span className="mt-1 text-[0.58rem] font-bold tracking-[0.26em] text-warm-red-text">
            MEAT SHOP
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-light-text/80 transition-colors hover:text-warm-red-text"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink
            href={MESSENGER_URL}
            target="_blank"
            rel="noreferrer"
            size="compact"
          >
            <MessageCircle aria-hidden="true" size={17} strokeWidth={2} />
            Message Us
          </ButtonLink>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-sm border border-white/20 text-light-text transition-colors hover:border-warm-red hover:text-warm-red-text lg:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? (
            <X aria-hidden="true" size={23} />
          ) : (
            <Menu aria-hidden="true" size={23} />
          )}
        </button>
      </Container>

      {isMenuOpen ? (
        <div
          ref={mobileNavigationRef}
          id="mobile-navigation"
          className="fixed inset-x-0 bottom-0 top-20 overflow-y-auto border-t border-white/10 bg-brand-ink lg:hidden"
        >
          <Container width="wide" className="flex min-h-full flex-col py-8">
            <nav className="flex flex-col" aria-label="Mobile navigation">
              {NAV_ITEMS.map((item, index) => (
                <a
                  key={item.href}
                  ref={index === 0 ? firstMobileLinkRef : undefined}
                  href={item.href}
                  className="border-b border-white/10 py-5 font-display text-2xl font-semibold text-light-text transition-colors hover:text-warm-red-text"
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <ButtonLink
              href={MESSENGER_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-8 w-full"
              onClick={closeMenu}
            >
              <MessageCircle aria-hidden="true" size={18} strokeWidth={2} />
              Message Us
            </ButtonLink>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
