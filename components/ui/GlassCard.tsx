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
          "rounded-lg overflow-hidden backdrop-blur-[12px] transition-all duration-300",
          // Glassmorphism border and background (Visual Effect 4)
          {
            "bg-forest-surface-2/60 border border-forest-border/50 shadow-glass-card":
              tint === "standard",
            "bg-[#1E0A0A]/60 border border-red-500/30 shadow-[0_0_0_0.5px_rgba(239,68,68,0.3),0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(239,68,68,0.1)]":
              tint === "red",
            "bg-forest-surface-2/60 border border-forest-accent/50 shadow-[0_0_0_0.5px_rgba(61,153,112,0.3),0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(90,184,138,0.1)]":
              tint === "green",
          },
          // Hover effects if enabled
          {
            "hover:border-forest-accent/60 hover:-translate-y-1 hover:shadow-[0_0_0_0.5px_rgba(61,153,112,0.5),0_12px_40px_rgba(0,0,0,0.5)]":
              hoverEffect && tint === "standard",
            "hover:border-red-500/50 hover:-translate-y-1":
              hoverEffect && tint === "red",
            "hover:border-forest-accent/80 hover:-translate-y-1":
              hoverEffect && tint === "green",
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
