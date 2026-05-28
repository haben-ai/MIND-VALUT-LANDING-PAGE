"use client";

import React from "react";
import { ScrollAnimate } from "../ui/ScrollAnimate";
import { Share2, Layers, Search } from "lucide-react";
import { ShareMockup, SaveMockup, LibraryMockup } from "../ui/ProcessMockups";

const STEPS = [
  {
    number: "01",
    icon: Share2,
    title: "Share from any app",
    body: "Open any reel, post, or video in Instagram, TikTok, YouTube, Reddit or X. Tap Share. Select Vora. Done in one tap.",
    mockup: ShareMockup,
  },
  {
    number: "02",
    icon: Layers,
    title: "Vora captures everything",
    body: "Vora fetches the title, creator, thumbnail, caption and metadata automatically. Your library updates instantly.",
    mockup: SaveMockup,
  },
  {
    number: "03",
    icon: Search,
    title: "Find it in seconds",
    body: "Search by topic, creator, platform, or date. Filter by content type. Your saved content is always organized folder-wise.",
    mockup: LibraryMockup,
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section
      id="how-it-works"
      className="py-28 md:py-36 bg-forest-surface relative z-10 overflow-hidden"
    >
      {/* Dynamic backdrop glow accents for that "neon" look */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-forest-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-forest-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1200px] w-full mx-auto px-6 md:px-12">
        <ScrollAnimate className="flex flex-col items-center text-center mb-24">
          <span className="font-label text-forest-text-muted mb-4 block">HOW IT WORKS</span>
          <h2 className="text-[34px] sm:text-[46px] md:text-[56px] font-bold tracking-tight leading-[1.1] text-forest-text-primary">
            Three taps. Zero effort. <br />
            <span className="bg-gradient-to-r from-forest-accent to-forest-accent-light bg-clip-text text-transparent">
              Everything organised.
            </span>
          </h2>
        </ScrollAnimate>

        {/* 3-Column Side-by-Side Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto relative">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            const MockupComponent = step.mockup;

            return (
              <ScrollAnimate
                key={step.number}
                delay={idx * 0.15}
                className="flex flex-col items-center text-center bg-forest-surface-2/30 border border-forest-border/10 rounded-3xl p-6 lg:p-8 relative overflow-hidden backdrop-blur-md hover:border-forest-accent/30 hover:bg-forest-surface-2/55 hover:shadow-2xl transition-all duration-500 group"
              >
                {/* Floating soft neon highlight glow inside card */}
                <div className="absolute inset-x-0 bottom-[-50px] h-[120px] rounded-full bg-forest-accent/5 blur-3xl group-hover:bg-forest-accent/15 transition-all duration-500 pointer-events-none" />

                {/* Step number large background watermark */}
                <div className="absolute top-4 right-6 text-6xl font-black text-forest-accent/[0.04] select-none pointer-events-none group-hover:text-forest-accent/[0.07] transition-all duration-300">
                  {step.number}
                </div>

                {/* Icon Circle */}
                <div className="h-12 w-12 rounded-full bg-forest-accent/10 border border-forest-accent/20 flex items-center justify-center mb-5 shadow-[0_0_12px_rgba(61,153,112,0.1)] group-hover:border-forest-accent/50 transition-all duration-300">
                  <Icon className="h-5 w-5 text-forest-accent-light" />
                </div>

                {/* Step Title */}
                <h3 className="text-lg font-bold text-forest-text-primary mb-2">
                  {step.title}
                </h3>

                {/* Step Body */}
                <p className="text-xs sm:text-sm text-forest-text-secondary leading-relaxed mb-8 max-w-[280px]">
                  {step.body}
                </p>

                {/* Mockup Component */}
                <div className="w-full flex justify-center mt-auto transform scale-[0.92] lg:scale-[0.98] group-hover:scale-[1.04] transition-transform duration-500">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-2xl bg-forest-accent/8 blur-xl group-hover:bg-forest-accent/15 transition-all duration-500 opacity-60 pointer-events-none" />
                    <MockupComponent />
                  </div>
                </div>
              </ScrollAnimate>
            );
          })}
        </div>
      </div>
    </section>
  );
};
