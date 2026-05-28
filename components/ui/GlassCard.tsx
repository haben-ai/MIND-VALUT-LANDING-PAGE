import * as React from "react";
import { cn } from "@/lib/utils";

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  tint?: "standard" | "red" | "green";
}

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, children, hoverEffect = false, tint = "standard", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-3xl overflow-hidden transition-all duration-200 select-none",
          // Duolingo-Style 3D Card Borders and Fills
          {
            "bg-forest-surface border-2 border-forest-border border-b-[6px] shadow-md":
              tint === "standard",
            "bg-red-500/5 dark:bg-red-950/10 border-2 border-red-500/30 border-b-[6px] shadow-md":
              tint === "red",
            "bg-forest-accent/5 border-2 border-forest-accent border-b-[6px] shadow-md":
              tint === "green",
          },
          // Tactile Hover effects if enabled
          {
            "hover:-translate-y-1 hover:brightness-[1.01] active:translate-y-[2px] active:border-b-[3px]":
              hoverEffect,
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

GlassCard.displayName = "GlassCard";
