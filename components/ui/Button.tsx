import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "pill-outline";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      variant = "primary",
      size = "md",
      loading = false,
      disabled,
      type = "button",
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || loading}
        className={cn(
          "inline-flex items-center justify-center font-bold tracking-wide select-none active:scale-[0.99] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 shine-sweep",
          // Variant mappings
          {
            "bg-forest-accent hover:brightness-[1.03] text-white border-b-[5px] border-[#047857] active:border-b-[1px] active:translate-y-[4px]":
              variant === "primary",
            "bg-forest-surface-2 text-forest-text-primary border border-forest-border border-b-[5px] hover:bg-forest-surface-3 active:border-b-[1px] active:translate-y-[4px]":
              variant === "secondary",
            "bg-transparent text-forest-text-primary border-2 border-forest-border border-b-[5px] hover:bg-forest-surface-2/45 active:border-b-[1px] active:translate-y-[4px]":
              variant === "outline",
            "text-forest-text-muted hover:text-forest-text-primary hover:bg-forest-surface-2/40 border border-transparent":
              variant === "ghost",
            "bg-forest-accent/10 border border-forest-accent border-b-[4px] hover:bg-forest-accent hover:text-white text-forest-accent rounded-full active:translate-y-[3px] active:border-b-[1px]":
              variant === "pill-outline",
          },
          // Size mappings
          {
            "h-10 px-4 text-sm rounded-xl": size === "sm",
            "h-12 px-6 text-base rounded-2xl": size === "md",
            "h-14 px-8 text-lg rounded-2xl": size === "lg",
          },
          className
        )}
        {...props}
      >
        {loading ? (
          <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : null}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
