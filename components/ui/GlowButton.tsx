import * as React from "react";
import { cn } from "@/lib/utils";

export interface GlowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  size?: "md" | "lg";
}

export const GlowButton = React.forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ className, children, loading = false, size = "md", disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          "relative inline-flex items-center justify-center font-semibold text-white bg-forest-accent rounded-md transition-all duration-300 active:scale-[0.98] cursor-pointer shadow-glow-btn hover:shadow-glow-btn-hover hover:-translate-y-[1px] disabled:pointer-events-none disabled:opacity-50",
          {
            "h-11 px-6 text-sm md:text-base": size === "md",
            "h-14 px-8 text-base md:text-lg": size === "lg",
          },
          className
        )}
        {...props}
      >
        {loading ? (
          <span className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
        ) : null}
        {children}
      </button>
    );
  }
);

GlowButton.displayName = "GlowButton";
