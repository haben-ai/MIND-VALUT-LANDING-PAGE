"use client";

import React from "react";
import { ScrollAnimate } from "../ui/ScrollAnimate";

export const Footer: React.FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-forest-base footer-animated-border py-12 relative z-10 overflow-hidden">
      <div className="max-w-[1200px] w-full mx-auto px-6 md:px-12">
        <ScrollAnimate className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-forest-border/10">
          {/* Left: Brand */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <div
              onClick={handleScrollToTop}
              className="flex items-center gap-2 cursor-pointer select-none group"
            >
              <svg
                className="h-5 w-5 text-forest-accent group-hover:text-forest-accent-light transition-colors"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4.5l8 14 8-14" />
              </svg>
              <span className="text-lg font-bold tracking-[0.1em] text-forest-text-primary">
                VORA
              </span>
            </div>
            <p className="text-xs text-forest-text-muted">Your social memory</p>
          </div>

          {/* Center: Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            <a
              href="#"
              className="text-sm font-normal text-forest-text-muted hover:text-forest-text-primary transition-colors cursor-pointer"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm font-normal text-forest-text-muted hover:text-forest-text-primary transition-colors cursor-pointer"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-sm font-normal text-forest-text-muted hover:text-forest-text-primary transition-colors cursor-pointer"
            >
              Contact
            </a>
          </div>

          {/* Right: Made with */}
          <div className="text-sm font-normal text-forest-text-muted flex items-center gap-1 select-none">
            Made with <span className="text-forest-accent animate-pulse-subtle">✦</span> for people
            who save too much
          </div>
        </ScrollAnimate>

        {/* Bottom strip */}
        <ScrollAnimate delay={0.1} className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <div className="text-xs text-forest-text-muted/70 font-normal">
            &copy; 2026 Vora. All rights reserved.
          </div>
          <div className="text-xs text-forest-text-muted/50 font-normal">
            Designed for Forest Intelligence
          </div>
        </ScrollAnimate>
      </div>
    </footer>
  );
};
