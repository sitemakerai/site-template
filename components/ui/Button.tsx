import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-semibold rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
          {
            "bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500": variant === "primary",
            "bg-secondary-100 text-secondary-900 hover:bg-secondary-200 focus:ring-secondary-500": variant === "secondary",
            "border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500": variant === "outline",
            "text-secondary-700 hover:bg-secondary-100 focus:ring-secondary-500": variant === "ghost",
          },
          {
            "px-3 py-2 text-sm": size === "sm",
            "px-6 py-3 text-base": size === "md",
            "px-8 py-4 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
