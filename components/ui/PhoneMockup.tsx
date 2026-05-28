"use client";

import React from "react";
import { motion } from "framer-motion";
import { Link2, ClipboardList, Instagram, Youtube, Music2 } from "lucide-react";

const RedditIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 11.5c0-1.65-1.35-3-3-3-.96 0-1.86.48-2.42 1.24-1.64-1-3.75-1.64-5.99-1.72l1.27-4 3.48.77c.04.91.79 1.63 1.71 1.63 1.1 0 2-1 2-2s-.9-2-2-2c-.79 0-1.48.47-1.8 1.15l-3.87-.87c-.28-.06-.57.12-.64.4l-1.5 4.75c-2.31.05-4.48.69-6.17 1.72-.56-.76-1.46-1.24-2.42-1.24-1.65 0-3 1.35-3 3 0 1.2.71 2.24 1.75 2.72-.03.24-.05.49-.05.74 0 3.86 4.43 7 9.88 7s9.88-3.14 9.88-7c0-.25-.02-.5-.05-.74 1.04-.48 1.75-1.52 1.75-2.72zm-17 1c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5zm10.74 4.8c-.85.85-2.44.93-3.24.93-.79 0-2.39-.08-3.24-.93-.19-.19-.19-.51 0-.7.19-.19.51-.19.7 0 .55.55 1.74.68 2.54.68.79 0 1.99-.13 2.54-.68.19-.19.51-.19.7 0 .2.19.2.51 0 .7zm-.24-3.3c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
  </svg>
);

export const PhoneMockup: React.FC = () => {
  return (
    <motion.div
      // Floating animation (y: [0, -12, 0], 5s easeInOut, infinite)
      animate={{ y: [0, -12, 0] }}
      transition={{
        duration: 5,
        ease: "easeInOut",
        repeat: Infinity,
      }}
      className="relative mx-auto"
    >
      {/* 3D angled container (Visual Effect 5: transform tilt) */}
      <div
        className="w-[230px] sm:w-[260px] h-[480px] sm:h-[530px] rounded-[32px] bg-forest-surface border-[1.5px] border-forest-border/50 shadow-phone-mock overflow-hidden flex flex-col p-3 pb-4 select-none"
        style={{
          transform: "perspective(1000px) rotateX(8deg) rotateY(-12deg)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Screen Bezel Frame Inside shadow */}
        <div className="absolute inset-0 border border-forest-accent/10 rounded-[32px] pointer-events-none z-30" />

        {/* Status Bar */}
        <div className="flex items-center justify-between text-[9px] text-forest-text-muted px-2 pt-1 pb-2">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-1.5 border border-forest-text-muted/50 rounded-sm inline-block" />
            <span className="w-2 h-2 rounded-full bg-forest-accent inline-block" />
          </div>
        </div>

        {/* Header */}
        <div className="px-2 mb-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold tracking-[0.1em] text-forest-text-primary">
              VORA
            </span>
            <div className="h-5 w-5 rounded-full bg-forest-accent/20 border border-forest-accent/50 flex items-center justify-center">
              <span className="h-2.5 w-2.5 rounded-full bg-forest-accent" />
            </div>
          </div>
          <p className="text-[9px] text-forest-text-muted">Your social memory</p>
        </div>

        {/* URL Paste Bar */}
        <div className="bg-forest-surface-2 border border-forest-border/20 rounded-lg p-1.5 px-2 flex items-center justify-between gap-1.5 mb-3 shadow-[inset_0_1px_2px_rgba(0,0,0,0.4)]">
          <div className="flex items-center gap-1.5 overflow-hidden">
            <Link2 className="h-3 w-3 text-forest-accent" />
            <span className="text-[9px] text-forest-text-muted whitespace-nowrap">
              Paste any link to save...
            </span>
          </div>
          <ClipboardList className="h-3.5 w-3.5 text-forest-text-muted shrink-0 cursor-pointer hover:text-forest-accent transition-colors" />
        </div>

        {/* Filter Chips */}
        <div className="flex gap-1 overflow-x-auto no-scrollbar mb-3 px-0.5">
          <span className="bg-forest-accent text-white px-2 py-0.5 rounded-full text-[8px] font-medium whitespace-nowrap">
            All
          </span>
          <span className="bg-forest-surface-2 border border-forest-border/20 text-forest-text-secondary px-2 py-0.5 rounded-full text-[8px] font-medium whitespace-nowrap flex items-center gap-0.5">
            <Instagram className="h-2 w-2 text-[#E1306C]" /> Instagram
          </span>
          <span className="bg-forest-surface-2 border border-forest-border/20 text-forest-text-secondary px-2 py-0.5 rounded-full text-[8px] font-medium whitespace-nowrap flex items-center gap-0.5">
            <Music2 className="h-2 w-2 text-[#69C9D0]" /> TikTok
          </span>
        </div>

        {/* Grid Cards (2 columns x 2 rows) */}
        <div className="grid grid-cols-2 gap-2 overflow-y-auto no-scrollbar flex-1 pb-1">
          {/* CARD 1: Instagram */}
          <div className="bg-forest-surface-2 border border-forest-border/10 rounded-lg p-1.5 flex flex-col justify-between overflow-hidden shadow-md">
            <div className="h-14 rounded bg-gradient-to-tr from-[#833AB4] via-[#FD1D1D] to-[#FCB045] relative overflow-hidden mb-1.5 flex items-center justify-center opacity-90">
              <Instagram className="h-4 w-4 text-white drop-shadow-md" />
            </div>
            <div>
              <div className="flex items-center gap-1 mb-0.5">
                <span className="px-1 py-0.2 bg-[#E1306C]/20 text-[#E1306C] text-[6px] font-bold rounded">
                  REEL
                </span>
                <span className="text-[6px] text-forest-text-muted">Instagram</span>
              </div>
              <p className="text-[8px] font-medium text-forest-text-primary line-clamp-1">
                Visual Hook Tutorial
              </p>
              <p className="text-[6px] text-forest-text-muted">@creator.studio</p>
            </div>
          </div>

          {/* CARD 2: YouTube */}
          <div className="bg-forest-surface-2 border border-forest-border/10 rounded-lg p-1.5 flex flex-col justify-between overflow-hidden shadow-md">
            <div className="h-14 rounded bg-gradient-to-tr from-[#FF0000] to-[#E52D27] relative overflow-hidden mb-1.5 flex items-center justify-center opacity-90">
              <Youtube className="h-4 w-4 text-white drop-shadow-md" />
            </div>
            <div>
              <div className="flex items-center gap-1 mb-0.5">
                <span className="px-1 py-0.2 bg-[#FF0000]/20 text-[#FF0000] text-[6px] font-bold rounded">
                  VIDEO
                </span>
                <span className="text-[6px] text-forest-text-muted">YouTube</span>
              </div>
              <p className="text-[8px] font-medium text-forest-text-primary line-clamp-1">
                Linear Design Secrets
              </p>
              <p className="text-[6px] text-forest-text-muted">@design.craft</p>
            </div>
          </div>

          {/* CARD 3: TikTok */}
          <div className="bg-forest-surface-2 border border-forest-border/10 rounded-lg p-1.5 flex flex-col justify-between overflow-hidden shadow-md">
            <div className="h-14 rounded bg-gradient-to-tr from-[#010101] via-[#69C9D0] to-[#EE1D52] relative overflow-hidden mb-1.5 flex items-center justify-center opacity-90">
              <Music2 className="h-4 w-4 text-white drop-shadow-md" />
            </div>
            <div>
              <div className="flex items-center gap-1 mb-0.5">
                <span className="px-1 py-0.2 bg-[#69C9D0]/20 text-[#69C9D0] text-[6px] font-bold rounded">
                  TIKTOK
                </span>
                <span className="text-[6px] text-forest-text-muted">TikTok</span>
              </div>
              <p className="text-[8px] font-medium text-forest-text-primary line-clamp-1">
                No-code SaaS Blueprint
              </p>
              <p className="text-[6px] text-forest-text-muted">@buildinpublic</p>
            </div>
          </div>

          {/* CARD 4: Reddit */}
          <div className="bg-forest-surface-2 border border-forest-border/10 rounded-lg p-1.5 flex flex-col justify-between overflow-hidden shadow-md">
            <div className="h-14 rounded bg-gradient-to-tr from-[#FF4500] to-[#FF8700] relative overflow-hidden mb-1.5 flex items-center justify-center opacity-90">
              <RedditIcon className="h-4 w-4 text-white drop-shadow-md" />
            </div>
            <div>
              <div className="flex items-center gap-1 mb-0.5">
                <span className="px-1 py-0.2 bg-[#FF4500]/20 text-[#FF4500] text-[6px] font-bold rounded">
                  POST
                </span>
                <span className="text-[6px] text-forest-text-muted">Reddit</span>
              </div>
              <p className="text-[8px] font-medium text-forest-text-primary line-clamp-1">
                ADHD Bookmark Hacks
              </p>
              <p className="text-[6px] text-forest-text-muted">r/productivity</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
