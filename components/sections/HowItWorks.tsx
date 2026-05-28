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

const PhoneBezel: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative w-[220px] h-[380px] rounded-[36px] bg-[#0A1208] border-[6px] border-[#1E4028] shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_30px_rgba(61,153,112,0.15)] flex flex-col overflow-hidden select-none shrink-0 z-10 transition-transform duration-300 hover:scale-[1.03]">
      {/* Screen Frame Border */}
      <div className="absolute inset-0 border border-forest-accent/20 rounded-[30px] pointer-events-none z-30" />
      
      {/* Notch */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-3 bg-[#1E4028] rounded-full z-30 flex items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-[#0A1208]/60" />
      </div>

      {/* Screen Inner scaled to fit 270px mockup perfectly inside */}
      <div className="w-full h-full overflow-hidden bg-forest-surface relative flex flex-col pt-3 z-10">
        <div className="scale-[0.76] origin-top translate-y-2 -translate-x-[31px] w-[270px] h-[330px] shrink-0">
          {children}
        </div>
      </div>
    </div>
  );
};

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

        {/* Stack of Alternating Steps */}
        <div className="flex flex-col gap-24 md:gap-32 max-w-4xl mx-auto relative">
          
          {/* Vertical timeline center line for desktop */}
          <div className="absolute left-1/2 top-12 bottom-12 w-[1.5px] bg-gradient-to-b from-forest-accent/10 via-forest-accent/40 to-forest-accent/10 -translate-x-1/2 hidden md:block" />

          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            const MockupComponent = step.mockup;
            const isEven = idx % 2 === 1;

            return (
              <ScrollAnimate
                key={step.number}
                delay={0.1}
                className="w-full"
              >
                <div className={`flex flex-col ${isEven ? "md:flex-row-reverse" : "md:flex-row"} items-center justify-between gap-12 md:gap-16 group relative`}>
                  
                  {/* Left/Right Text Content (takes 50% on desktop) */}
                  <div className="w-full md:w-[45%] flex flex-col items-start text-left relative">
                    
                    {/* Floating soft neon highlight glow */}
                    <div className="absolute -inset-8 rounded-3xl bg-forest-accent/[0.02] blur-2xl group-hover:bg-forest-accent/[0.05] transition-all duration-500 pointer-events-none" />

                    {/* Step number watermark */}
                    <div className="text-6xl font-black text-forest-accent/[0.06] select-none pointer-events-none group-hover:text-forest-accent/[0.1] transition-all duration-300 mb-2">
                      {step.number}
                    </div>

                    {/* Icon Circle */}
                    <div className="h-11 w-11 rounded-full bg-forest-accent/10 border border-forest-accent/20 flex items-center justify-center mb-5 shadow-[0_0_12px_rgba(61,153,112,0.1)] group-hover:border-forest-accent/50 transition-all duration-300 relative z-10">
                      <Icon className="h-4.5 w-4.5 text-forest-accent-light" />
                    </div>

                    {/* Step Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-forest-text-primary mb-3 relative z-10">
                      {step.title}
                    </h3>

                    {/* Step Body */}
                    <p className="text-sm text-forest-text-secondary leading-relaxed max-w-md relative z-10">
                      {step.body}
                    </p>
                  </div>

                  {/* Desktop Timeline Node point */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full border-2 border-forest-accent bg-[#0A1208] z-20 hidden md:block transition-all duration-300 group-hover:bg-forest-accent shadow-[0_0_10px_rgba(61,153,112,0.4)]" />

                  {/* Left/Right Phone Mockup Box (takes 50% on desktop, centered) */}
                  <div className="w-full md:w-[45%] flex justify-center relative">
                    <div className="relative">
                      {/* Neon glow behind phone bezel */}
                      <div className="absolute inset-0 rounded-[36px] bg-forest-accent/8 blur-2xl group-hover:bg-forest-accent/15 transition-all duration-500 opacity-60 pointer-events-none" />
                      
                      <PhoneBezel>
                        <MockupComponent />
                      </PhoneBezel>
                    </div>
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
