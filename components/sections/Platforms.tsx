"use client";

import React, { useState } from "react";
import { ScrollAnimate } from "../ui/ScrollAnimate";
import {
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";

// Platform definitions with specific brand colors
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
    color: "#010101", // brand black
    brandColor: "#00f2fe", // vibrant cyan-teal brand accent
    types: "Videos, Duets",
    icon: ({ className }: { className?: string }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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
    icon: ({ className }: { className?: string }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 11.5c0-1.65-1.35-3-3-3-.96 0-1.86.48-2.42 1.24-1.64-1-3.75-1.64-5.99-1.72l1.27-4 3.48.77c.04.91.79 1.63 1.71 1.63 1.1 0 2-1 2-2s-.9-2-2-2c-.79 0-1.48.47-1.8 1.15l-3.87-.87c-.28-.06-.57.12-.64.4l-1.5 4.75c-2.31.05-4.48.69-6.17 1.72-.56-.76-1.46-1.24-2.42-1.24-1.65 0-3 1.35-3 3 0 1.2.71 2.24 1.75 2.72-.03.24-.05.49-.05.74 0 3.86 4.43 7 9.88 7s9.88-3.14 9.88-7c0-.25-.02-.5-.05-.74 1.04-.48 1.75-1.52 1.75-2.72zm-17 1c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5zm10.74 4.8c-.85.85-2.44.93-3.24.93-.79 0-2.39-.08-3.24-.93-.19-.19-.19-.51 0-.7.19-.19.51-.19.7 0 .55.55 1.74.68 2.54.68.79 0 1.99-.13 2.54-.68.19-.19.51-.19.7 0 .2.19.2.51 0 .7zm-.24-3.3c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
      </svg>
    ),
  },
  {
    id: "x",
    name: "X / Twitter",
    color: "#000000",
    types: "Posts, Threads",
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
    <section
      id="platforms"
      className="py-24 relative z-10 overflow-hidden"
      style={{
        background: "radial-gradient(ellipse 100% 60% at 50% 50%, rgba(34, 197, 94, 0.04) 0%, transparent 70%), #0A1208",
      }}
    >
      <div className="max-w-[1200px] w-full mx-auto px-6 md:px-12">
        <ScrollAnimate className="flex flex-col items-center text-center mb-16">
          {/* Neon pill label */}
          <div className="inline-block text-[11px] font-bold tracking-[0.15em] text-[#22C55E] bg-[rgba(34,197,94,0.08)] border border-[rgba(34,197,94,0.3)] px-3 py-1 rounded-full mb-4">
            6 PLATFORMS · MORE COMING
          </div>

          <h2 className="text-[34px] sm:text-[40px] md:text-[48px] font-bold tracking-tight text-[#E8F0EC]">
            Every platform{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #22C55E, #4ADE80, #86EFAC)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              you use.
            </span>
          </h2>
        </ScrollAnimate>

        {/* Responsive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {PLATFORMS.map((platform, idx) => {
            const Icon = platform.icon;
            const isHovered = hoveredIdx === idx;
            return (
              <ScrollAnimate key={platform.id} delay={idx * 0.05} className="h-full">
                <div
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className="rounded-2xl p-[28px_24px] text-center flex flex-col items-center justify-center select-none cursor-pointer h-full"
                  style={{
                    backgroundColor: "#F0FFF4",
                    border: "1.5px solid #22C55E",
                    transform: isHovered ? "translateY(-6px) scale(1.02)" : "none",
                    boxShadow: isHovered
                      ? `
                        0 0 0 1.5px #22C55E,
                        0 0 40px rgba(34, 197, 94, 0.35),
                        0 0 80px rgba(34, 197, 94, 0.15),
                        0 20px 60px rgba(0, 0, 0, 0.4),
                        inset 0 1px 0 rgba(255, 255, 255, 1)
                      `
                      : `
                        0 0 0 1px rgba(34, 197, 94, 0.3),
                        0 0 20px rgba(34, 197, 94, 0.15),
                        0 0 60px rgba(34, 197, 94, 0.08),
                        0 8px 32px rgba(0, 0, 0, 0.3),
                        inset 0 1px 0 rgba(255, 255, 255, 0.9)
                      `,
                    transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  }}
                >
                  {/* Icon Circle */}
                  <div
                    className="h-[52px] w-[52px] rounded-xl bg-white border-[1.5px] border-[rgba(34,197,94,0.4)] flex items-center justify-center mb-5 transition-all duration-300"
                    style={{
                      boxShadow: "0 2px 8px rgba(34, 197, 94, 0.2)",
                      color: platform.id === "tiktok" && platform.brandColor ? platform.brandColor : platform.color,
                      backgroundColor: platform.id === "tiktok" ? "#010101" : "white",
                    }}
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Name */}
                  <h3 className="text-[18px] font-semibold text-[#0F1E14] mb-1 font-sans">
                    {platform.name}
                  </h3>

                  {/* Types */}
                  <p className="text-[13px] text-[#374151] font-normal font-sans">
                    {platform.types}
                  </p>
                </div>
              </ScrollAnimate>
            );
          })}
        </div>

        {/* Bottom footer text */}
        <ScrollAnimate delay={0.3} className="text-center mt-12">
          <span className="text-sm font-semibold text-[#22C55E] bg-[rgba(34,197,94,0.06)] border border-[rgba(34,197,94,0.2)] px-4 py-1.5 rounded-full inline-block">
            More platforms coming soon
          </span>
        </ScrollAnimate>
      </div>
    </section>
  );
};
