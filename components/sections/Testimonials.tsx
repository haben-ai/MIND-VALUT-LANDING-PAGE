"use client";

import React from "react";
import { GlassCard } from "../ui/GlassCard";
import { ScrollAnimate } from "../ui/ScrollAnimate";

const ROW1_TESTIMONIALS = [
  {
    quote: "I have 847 saved Instagram posts I've never opened again. Vora is the first app that made me feel like saving actually means something.",
    author: "Sarah K.",
    role: "Content Creator",
    initials: "SK",
  },
  {
    quote: "As someone with ADHD, I save everything and find nothing. Vora is the first tool that actually solves this instead of making it worse.",
    author: "Marcus T.",
    role: "Startup Founder",
    initials: "MT",
  },
  {
    quote: "I used Pocket for years. When it shut down I tried everything. Vora is the only one built for how I actually consume content in 2026.",
    author: "Priya N.",
    role: "Product Manager",
    initials: "PN",
  },
  {
    quote: "Every video I share to Vora is instantly transcribed and searchable. I can find a specific quote from a 2-hour podcast in seconds.",
    author: "Liam H.",
    role: "Researcher",
    initials: "LH",
  }
];

const ROW2_TESTIMONIALS = [
  {
    quote: "No folders, no tags, no manual cataloging. The AI organizes everything dynamically. It feels like a superpower.",
    author: "Elena R.",
    role: "Journalist",
    initials: "ER",
  },
  {
    quote: "My bookmark folder was a graveyard of good intentions. Vora makes it a live, functional second brain.",
    author: "David B.",
    role: "Software Engineer",
    initials: "DB",
  },
  {
    quote: "Saves Reels, YouTube Shorts, and TikToks instantly. Now I never lose recipe inspiration or coding tutorials.",
    author: "Chloe W.",
    role: "UI/UX Designer",
    initials: "CW",
  },
  {
    quote: "Being able to search by concept rather than exact keywords is a game changer. Worth every single penny.",
    author: "Alex G.",
    role: "Creative Director",
    initials: "AG",
  }
];

export const Testimonials: React.FC = () => {
  // Duplicate arrays to make sure we have enough items for endless looping
  const row1Items = [...ROW1_TESTIMONIALS, ...ROW1_TESTIMONIALS, ...ROW1_TESTIMONIALS];
  const row2Items = [...ROW2_TESTIMONIALS, ...ROW2_TESTIMONIALS, ...ROW2_TESTIMONIALS];

  return (
    <section className="py-28 md:py-36 bg-gradient-to-b from-forest-base to-forest-surface relative z-10 overflow-hidden">
      <div className="w-full">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <ScrollAnimate className="flex flex-col items-center text-center mb-16 md:mb-20">
            <span className="font-label text-forest-text-muted mb-4 block">EARLY ACCESS</span>
            <h2 className="text-[34px] sm:text-[40px] md:text-[48px] font-bold tracking-tight text-forest-text-primary">
              People who get it.
            </h2>
          </ScrollAnimate>
        </div>

        {/* Marquee Rows Container */}
        <div className="flex flex-col gap-6 md:gap-8 w-full max-w-[100vw] overflow-hidden">
          
          {/* ROW 1: Scrolling Left */}
          <div className="marquee-container w-full">
            <div className="scroll-left-marquee flex gap-6">
              {row1Items.map((t, idx) => (
                <div 
                  key={`row1-${t.author}-${idx}`} 
                  className="w-[300px] sm:w-[360px] md:w-[400px] shrink-0"
                >
                  <GlassCard className="p-6 md:p-8 h-full flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:scale-[1.01] hover:border-forest-accent/30 select-none">
                    {/* Quote marks decoration */}
                    <span className="absolute top-2 left-4 text-7xl font-serif text-forest-accent/15 pointer-events-none select-none">
                      “
                    </span>

                    <div className="relative z-10 pt-4">
                      <p className="text-sm sm:text-base font-normal italic text-forest-text-primary leading-relaxed mb-6 font-serif">
                        {t.quote}
                      </p>
                    </div>

                    {/* Author info */}
                    <div className="relative z-10 flex items-center gap-3 border-t border-forest-border/10 pt-4 mt-auto">
                      <div className="h-9 w-9 rounded-full bg-gradient-to-br from-forest-surface-3 to-forest-accent flex items-center justify-center border border-forest-border/20 text-xs font-bold text-white tracking-wider select-none shrink-0">
                        {t.initials}
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-semibold text-forest-text-primary">
                          {t.author}
                        </h4>
                        <p className="text-[10px] sm:text-xs text-forest-text-muted font-normal">{t.role}</p>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              ))}
            </div>
          </div>

          {/* ROW 2: Scrolling Right */}
          <div className="marquee-container w-full">
            <div className="scroll-right-marquee flex gap-6">
              {row2Items.map((t, idx) => (
                <div 
                  key={`row2-${t.author}-${idx}`} 
                  className="w-[300px] sm:w-[360px] md:w-[400px] shrink-0"
                >
                  <GlassCard className="p-6 md:p-8 h-full flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:scale-[1.01] hover:border-forest-accent/30 select-none">
                    {/* Quote marks decoration */}
                    <span className="absolute top-2 left-4 text-7xl font-serif text-forest-accent/15 pointer-events-none select-none">
                      “
                    </span>

                    <div className="relative z-10 pt-4">
                      <p className="text-sm sm:text-base font-normal italic text-forest-text-primary leading-relaxed mb-6 font-serif">
                        {t.quote}
                      </p>
                    </div>

                    {/* Author info */}
                    <div className="relative z-10 flex items-center gap-3 border-t border-forest-border/10 pt-4 mt-auto">
                      <div className="h-9 w-9 rounded-full bg-gradient-to-br from-forest-surface-3 to-forest-accent flex items-center justify-center border border-forest-border/20 text-xs font-bold text-white tracking-wider select-none shrink-0">
                        {t.initials}
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-semibold text-forest-text-primary">
                          {t.author}
                        </h4>
                        <p className="text-[10px] sm:text-xs text-forest-text-muted font-normal">{t.role}</p>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
