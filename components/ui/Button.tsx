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
          "inline-flex items-center justify-center font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-accent focus-visible:ring-offset-2 focus-visible:ring-offset-forest-base disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
          // Variant mappings
          {
            "bg-forest-accent hover:bg-forest-accent-light text-forest-text-primary border border-transparent shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]":
              variant === "primary",
            "bg-forest-surface-2 hover:bg-forest-surface-3 text-forest-text-primary border border-forest-border/20":
              variant === "secondary",
            "border border-forest-border hover:bg-forest-surface-2 text-forest-text-primary":
              variant === "outline",
            "text-forest-text-muted hover:text-forest-text-primary hover:bg-forest-surface-2/40 border border-transparent":
              variant === "ghost",
            "bg-forest-accent/15 border border-forest-accent hover:bg-forest-accent text-forest-accent hover:text-white rounded-full":
              variant === "pill-outline",
          },
          // Size mappings
          {
            "h-9 px-4 text-sm rounded-md": size === "sm",
            "h-11 px-6 text-base rounded-md": size === "md",
            "h-14 px-8 text-lg rounded-lg": size === "lg",
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
