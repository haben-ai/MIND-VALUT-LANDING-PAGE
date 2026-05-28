"use client";

import React from "react";
import { AnimatedCounter } from "../ui/AnimatedCounter";
import { ScrollAnimate } from "../ui/ScrollAnimate";

export const StatsBar: React.FC = () => {
  return (
    <section className="bg-forest-surface border-y-[0.5px] border-forest-border/20 py-10 relative z-10 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <ScrollAnimate>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 items-center justify-center">
            {/* Stat 1 */}
            <div className="flex flex-col items-center text-center lg:px-4">
              <span className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-forest-text-primary tracking-tight mb-1">
                <AnimatedCounter value={2847} suffix="+" />
              </span>
              <span className="text-xs sm:text-sm font-medium text-forest-text-muted">
                People on the waitlist
              </span>
            </div>

            {/* Divider 1 */}
            <div className="hidden lg:block h-12 w-[1px] bg-forest-border/20 justify-self-center" />

            {/* Stat 2 */}
            <div className="flex flex-col items-center text-center lg:px-4">
              <span className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-forest-text-primary tracking-tight mb-1">
                <AnimatedCounter value={6} />
              </span>
              <span className="text-xs sm:text-sm font-medium text-forest-text-muted">
                Platforms supported
              </span>
            </div>

            {/* Divider 2 */}
            <div className="hidden lg:block h-12 w-[1px] bg-forest-border/20 justify-self-center" />

            {/* Stat 3 */}
            <div className="flex flex-col items-center text-center lg:px-4 col-span-1">
              <span className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-[#E8F0EC] tracking-tight mb-1">
                &lt; 1
              </span>
              <span className="text-xs sm:text-sm font-medium text-forest-text-muted">
                Tap to save any content
              </span>
            </div>

            {/* Divider 3 */}
            <div className="hidden lg:block h-12 w-[1px] bg-forest-border/20 justify-self-center" />

            {/* Stat 4 */}
            <div className="flex flex-col items-center text-center lg:px-4">
              <span className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-forest-text-primary tracking-tight mb-1">
                <AnimatedCounter value={100} suffix="%" />
              </span>
              <span className="text-xs sm:text-sm font-medium text-forest-text-muted">
                Free during beta
              </span>
            </div>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
};
