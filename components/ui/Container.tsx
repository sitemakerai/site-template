import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = "lg", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "mx-auto px-4 sm:px-6 lg:px-8 w-full",
          {
            "max-w-3xl": size === "sm",
            "max-w-5xl": size === "md",
            "max-w-7xl": size === "lg",
            "max-w-[90rem]": size === "xl",
            "max-w-full": size === "full",
          },
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";
