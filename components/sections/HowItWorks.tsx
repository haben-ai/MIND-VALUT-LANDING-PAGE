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

        {/* Process Timeline Column */}
        <div className="flex flex-col gap-24 md:gap-36 max-w-4xl mx-auto relative">
          
          {/* Connector Line decoration for timeline */}
          <div className="hidden md:block absolute top-[60px] bottom-[60px] left-1/2 -translate-x-1/2 w-[1px] bg-forest-border/20 z-0 pointer-events-none" />

          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            const MockupComponent = step.mockup;
            const isEven = idx % 2 === 0;

            return (
              <div
                key={step.number}
                className={`flex flex-col md:flex-row items-center gap-12 lg:gap-20 z-10 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Text Description Block */}
                <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left relative">
                  {/* Step number absolute overlay background */}
                  <div className="absolute top-[-35px] left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 text-7xl md:text-8xl font-black text-forest-accent/[0.05] select-none z-0">
                    {step.number}
                  </div>

                  {/* Icon Circle */}
                  <div className="relative z-10 h-14 w-14 rounded-full bg-forest-accent/10 border border-forest-accent/30 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(61,153,112,0.15)] group-hover:border-forest-accent/60 transition-all duration-300">
                    <Icon className="h-6 w-6 text-forest-accent-light" />
                  </div>

                  {/* Title */}
                  <h3 className="relative z-10 text-xl md:text-2xl font-bold text-forest-text-primary mb-3">
                    {step.title}
                  </h3>

                  {/* Body */}
                  <p className="relative z-10 text-sm sm:text-base text-forest-text-secondary leading-relaxed max-w-md">
                    {step.body}
                  </p>
                </div>

                {/* Screenshot Mockup Block */}
                <ScrollAnimate
                  delay={0.1}
                  className="flex-1 flex justify-center w-full max-w-[270px] sm:max-w-none"
                >
                  <div className="relative group">
                    {/* Pulsing neon highlight glow behind card */}
                    <div className="absolute inset-0 rounded-2xl bg-forest-accent/15 blur-2xl group-hover:bg-forest-accent/25 transition-all duration-500 opacity-60 pointer-events-none" />
                    
                    <MockupComponent />
                  </div>
                </ScrollAnimate>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
