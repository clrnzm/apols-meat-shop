import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "default" | "compact";
};

export function ButtonLink({
  children,
  className,
  variant = "primary",
  size = "default",
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-sm font-semibold transition-[background-color,border-color,color,transform] duration-200 hover:-translate-y-0.5 active:translate-y-0",
        size === "default" ? "min-h-12 px-6 py-3" : "min-h-10 px-5 py-2.5 text-sm",
        variant === "primary"
          ? "bg-warm-red text-light-text hover:bg-warm-red-hover active:bg-warm-red-active"
          : "border border-white/30 bg-white/5 text-light-text hover:border-warm-red hover:bg-white/10 hover:text-white",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
