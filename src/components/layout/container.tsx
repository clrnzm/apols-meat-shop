import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = ComponentPropsWithoutRef<"div"> & {
  width?: "default" | "wide";
};

export function Container({
  className,
  width = "default",
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-8 lg:px-12 2xl:px-16",
        width === "wide" ? "max-w-[104rem]" : "max-w-7xl",
        className,
      )}
      {...props}
    />
  );
}
