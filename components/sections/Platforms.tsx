"use client";

import React, { useState } from "react";
import { ScrollAnimate } from "../ui/ScrollAnimate";
import {
  Instagram,
  Youtube,
  Linkedin,
  MessageCircle,
  Hash,
} from "lucide-react";

// Platform definitions
const PLATFORMS = [
  {
    id: "instagram",
    name: "Instagram",
    color: "#E1306C",
    types: "Reels, Posts, Carousels",
    icon: Instagram,
  },
  {
    id: "tiktok",
    name: "TikTok",
    color: "#69C9D0",
    types: "Videos, Duets",
    // Simple custom musical note / TikTok SVG fallback
    icon: ({ className }: { className?: string }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
  },
  {
    id: "youtube",
    name: "YouTube",
    color: "#FF0000",
    types: "Videos, Shorts",
    icon: Youtube,
  },
  {
    id: "reddit",
    name: "Reddit",
    color: "#FF4500",
    types: "Posts, Threads",
    // Custom Reddit logo SVG
    icon: ({ className }: { className?: string }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 11.5c0-1.65-1.35-3-3-3-.96 0-1.86.48-2.42 1.24-1.64-1-3.75-1.64-5.99-1.72l1.27-4 3.48.77c.04.91.79 1.63 1.71 1.63 1.1 0 2-1 2-2s-.9-2-2-2c-.79 0-1.48.47-1.8 1.15l-3.87-.87c-.28-.06-.57.12-.64.4l-1.5 4.75c-2.31.05-4.48.69-6.17 1.72-.56-.76-1.46-1.24-2.42-1.24-1.65 0-3 1.35-3 3 0 1.2.71 2.24 1.75 2.72-.03.24-.05.49-.05.74 0 3.86 4.43 7 9.88 7s9.88-3.14 9.88-7c0-.25-.02-.5-.05-.74 1.04-.48 1.75-1.52 1.75-2.72zm-17 1c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5zm10.74 4.8c-.85.85-2.44.93-3.24.93-.79 0-2.39-.08-3.24-.93-.19-.19-.19-.51 0-.7.19-.19.51-.19.7 0 .55.55 1.74.68 2.54.68.79 0 1.99-.13 2.54-.68.19-.19.51-.19.7 0 .2.19.2.51 0 .7zm-.24-3.3c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
      </svg>
    ),
  },
  {
    id: "x",
    name: "X / Twitter",
    color: "#7A9482",
    types: "Posts, Threads",
    // X icon SVG
    icon: ({ className }: { className?: string }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    color: "#0A66C2",
    types: "Posts, Articles",
    icon: Linkedin,
  },
];

export const Platforms: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="platforms" className="py-20 bg-forest-base relative z-10 overflow-hidden">
      <div className="max-w-[1200px] w-full mx-auto px-6 md:px-12">
        <ScrollAnimate className="flex flex-col items-center text-center mb-16">
          <span className="font-label text-forest-text-muted mb-4 block">WORKS WITH</span>
          <h2 className="text-[34px] sm:text-[40px] md:text-[48px] font-bold tracking-tight text-forest-text-primary">
            Every platform you use.
          </h2>
        </ScrollAnimate>

        {/* Responsive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {PLATFORMS.map((platform, idx) => {
            const Icon = platform.icon;
            const isHovered = hoveredIdx === idx;
            return (
              <ScrollAnimate key={platform.id} delay={idx * 0.05}>
                <div
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className="bg-[#0E1A12]/80 border border-forest-border/30 rounded-2xl p-8 text-center flex flex-col items-center justify-center transition-all duration-300 select-none cursor-pointer h-full"
                  style={{
                    boxShadow: isHovered
                      ? `0 0 30px ${platform.color}1E, inset 0 1px 0 rgba(255,255,255,0.05)`
                      : "none",
                    borderColor: isHovered ? platform.color : "rgba(46,107,62,0.3)",
                  }}
                >
                  {/* Icon Circle */}
                  <div
                    className="h-16 w-16 rounded-full bg-forest-surface-2 border border-forest-border/20 flex items-center justify-center mb-5 transition-all duration-300"
                    style={{
                      color: isHovered ? platform.color : "#A8BFB0",
                      borderColor: isHovered ? `${platform.color}40` : "rgba(46,107,62,0.2)",
                    }}
                  >
                    <Icon className="h-7 w-7" />
                  </div>

                  {/* Name */}
                  <h3 className="text-base sm:text-lg font-semibold text-forest-text-primary mb-1">
                    {platform.name}
                  </h3>

                  {/* Types */}
                  <p className="text-[13px] text-forest-text-muted font-normal">
                    {platform.types}
                  </p>
                </div>
              </ScrollAnimate>
            );
          })}
        </div>

        {/* Bottom footer text */}
        <ScrollAnimate delay={0.3} className="text-center mt-12">
          <span className="text-sm font-medium text-forest-text-muted">
            More platforms coming soon
          </span>
        </ScrollAnimate>
      </div>
    </section>
  );
};
