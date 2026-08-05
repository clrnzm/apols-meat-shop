import { BadgeDollarSign, Scissors, Sprout } from "lucide-react";
import { Container } from "@/components/layout/container";

const trustItems = [
  {
    title: "Fresh farm-sourced meat",
    description: "Fresh choices for everyday meals",
    icon: Sprout,
  },
  {
    title: "Budget-friendly choices",
    description: "Quality that respects your budget",
    icon: BadgeDollarSign,
  },
  {
    title: "Custom cuts available",
    description: "Prepared the way you need it",
    icon: Scissors,
  },
] as const;

export function TrustStrip() {
  return (
    <div className="border-t border-white/15">
      <Container width="wide">
        <ul className="grid md:grid-cols-3 md:divide-x md:divide-white/15">
          {trustItems.map((item) => {
            const Icon = item.icon;

            return (
              <li
                key={item.title}
                className="flex items-start gap-4 border-b border-white/15 py-5 last:border-b-0 md:border-b-0 md:px-7 md:py-6 md:first:pl-0 md:last:pr-0 lg:gap-5"
              >
                <Icon
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-warm-red"
                  size={24}
                  strokeWidth={1.75}
                />
                <div>
                  <p className="font-display text-base font-semibold text-light-text">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-text-muted">
                    {item.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </div>
  );
}
