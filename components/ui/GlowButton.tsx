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
          "relative inline-flex items-center justify-center font-bold tracking-wide text-white bg-forest-accent rounded-2xl active:scale-[0.99] transition-all duration-150 cursor-pointer border-b-[5px] border-[#047857] hover:brightness-[1.03] active:border-b-[1px] active:translate-y-[4px] disabled:pointer-events-none disabled:opacity-50 shine-sweep",
          {
            "h-12 px-6 text-sm md:text-base": size === "md",
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
