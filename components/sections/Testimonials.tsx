"use client";

import React from "react";
import { GlassCard } from "../ui/GlassCard";
import { ScrollAnimate } from "../ui/ScrollAnimate";

const TESTIMONIALS = [
  {
    quote:
      "I have 847 saved Instagram posts I've never opened again. Vora is the first app that made me feel like saving actually means something.",
    author: "Sarah K.",
    role: "Content Creator",
    initials: "SK",
  },
  {
    quote:
      "As someone with ADHD, I save everything and find nothing. Vora is the first tool that actually solves this instead of making it worse.",
    author: "Marcus T.",
    role: "Startup Founder",
    initials: "MT",
  },
  {
    quote:
      "I used Pocket for years. When it shut down I tried everything. Vora is the only one built for how I actually consume content in 2026.",
    author: "Priya N.",
    role: "Product Manager",
    initials: "PN",
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-28 md:py-36 bg-gradient-to-b from-forest-base to-forest-surface relative z-10 overflow-hidden">
      <div className="max-w-[1200px] w-full mx-auto px-6 md:px-12">
        <ScrollAnimate className="flex flex-col items-center text-center mb-16 md:mb-20">
          <span className="font-label text-forest-text-muted mb-4 block">EARLY ACCESS</span>
          <h2 className="text-[34px] sm:text-[40px] md:text-[48px] font-bold tracking-tight text-forest-text-primary">
            People who get it.
          </h2>
        </ScrollAnimate>

        {/* Testimonials grid */}
        <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
          {TESTIMONIALS.map((t, idx) => (
            <ScrollAnimate key={t.author} delay={idx * 0.1} className="h-full">
              <GlassCard className="p-6 md:p-8 h-full flex flex-col justify-between relative overflow-hidden">
                {/* Quote marks background decoration */}
                <span className="absolute top-2 left-4 text-7xl font-serif text-forest-accent/30 pointer-events-none select-none">
                  “
                </span>

                <div className="relative z-10 pt-6">
                  {/* Quote text */}
                  <p className="text-base md:text-[17px] font-normal italic text-forest-text-primary leading-relaxed mb-6 font-serif">
                    {t.quote}
                  </p>
                </div>

                {/* Author row */}
                <div className="relative z-10 flex items-center gap-3 border-t border-forest-border/10 pt-4 mt-auto">
                  {/* Avatar circle with Forest gradient */}
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-forest-surface-3 to-forest-accent flex items-center justify-center border border-forest-border/20 text-xs font-bold text-white tracking-wider select-none shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-forest-text-primary">
                      {t.author}
                    </h4>
                    <p className="text-xs text-forest-text-muted font-normal">{t.role}</p>
                  </div>
                </div>
              </GlassCard>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  );
};
