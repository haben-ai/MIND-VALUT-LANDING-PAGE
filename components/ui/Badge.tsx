import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "pulse" | "standard" | "amber" | "outline";
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  children,
  variant = "standard",
  ...props
}) => {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 text-xs md:text-sm font-medium rounded-full",
        {
          // Pulsing announcement pill
          "bg-forest-accent/10 border border-forest-accent/40 text-forest-accent-light":
            variant === "pulse",
          "bg-forest-surface-3/50 border border-forest-border/40 text-forest-text-secondary":
            variant === "standard",
          "bg-amber-500/10 border border-amber-500/30 text-amber-400":
            variant === "amber",
          "border border-forest-border text-forest-text-muted bg-transparent":
            variant === "outline",
        },
        className
      )}
      {...props}
    >
      {variant === "pulse" && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-forest-accent-light opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-forest-accent"></span>
        </span>
      )}
      {children}
    </span>
  );
};
