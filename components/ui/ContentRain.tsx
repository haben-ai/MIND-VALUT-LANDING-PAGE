"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

interface RainIcon {
  id: number;
  type: 1 | 2 | 3;
  size: number;
  startX: number; // in percentage (0 - 100)
  startY: number; // in pixels (-200 to -20)
  duration: number;
  delay: number;
  drift: number; // horizontal drift in pixels (-60 to +60)
  rotation: number; // random rotation (-20 to +20)
  peakOpacity: number;
}

export const ContentRain: React.FC = () => {
  const [icons, setIcons] = useState<RainIcon[]>([]);
  const [isVisible, setIsVisible] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // 1. Listen for tab visibility changes
    const handleVisibilityChange = () => {
      setIsVisible(document.visibilityState === "visible");
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // 2. Check for prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const motionListener = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    mediaQuery.addEventListener("change", motionListener);

    // 3. Setup rain instances
    const isMobile = window.innerWidth < 768;
    const totalCount = isMobile ? 20 : 40;

    const newIcons: RainIcon[] = Array.from({ length: totalCount }).map((_, i) => {
      // Pick icon type: distribute evenly
      // Type 1: Instagram Reel (idx % 3 === 0)
      // Type 2: YouTube Short (idx % 3 === 1)
      // Type 3: TikTok Video (idx % 3 === 2)
      const type = (i % 3 === 0 ? 1 : i % 3 === 1 ? 2 : 3) as 1 | 2 | 3;

      // Triangular center-weighted distribution for horizontal spread (startX)
      // Math.random() + Math.random() peaks heavily around 1.0. Divided by 2, it peaks around 0.5 (50%).
      const centerWeightedRandom = (Math.random() + Math.random()) / 2;
      const startX = centerWeightedRandom * 100;

      const size =
        type === 1
          ? Math.random() * 8 + 14 // 14px to 22px
          : type === 2
          ? Math.random() * 8 + 12 // 12px to 20px
          : Math.random() * 8 + 13; // 13px to 21px

      const startY = -Math.floor(Math.random() * 180) - 20; // -200px to -20px
      const duration = isMobile
        ? Math.random() * 8 + 8 // 8s to 16s on mobile
        : Math.random() * 8 + 6; // 6s to 14s on desktop
      const delay = Math.random() * 8; // 0s to 8s
      const drift = Math.random() * 120 - 60; // -60px to +60px
      const rotation = Math.random() * 40 - 20; // -20 to +20 degrees
      
      const peakOpacity =
        type === 1
          ? Math.random() * 0.3 + 0.4 // 0.4 to 0.7
          : type === 2
          ? Math.random() * 0.3 + 0.35 // 0.35 to 0.65
          : Math.random() * 0.3 + 0.35; // 0.35 to 0.65

      return {
        id: i,
        type,
        size,
        startX,
        startY,
        duration,
        delay,
        drift,
        rotation,
        peakOpacity,
      };
    });

    setIcons(newIcons);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      mediaQuery.removeEventListener("change", motionListener);
    };
  }, []);

  // Pause rendering completely if visibility is false or prefers reduced motion
  if (!isVisible || prefersReducedMotion) {
    return null;
  }

  // Icon SVG rendering maps
  const renderIconSvg = (type: 1 | 2 | 3, size: number) => {
    if (type === 1) {
      // Instagram Reel SVG
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          style={{ width: size, height: size }}
          className="text-[#E1306C]"
        >
          <rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.6" />
          <line x1="2" y1="7" x2="22" y2="7" stroke="currentColor" strokeWidth="1" />
          <line x1="2" y1="17" x2="22" y2="17" stroke="currentColor" strokeWidth="1" />
          <line x1="6" y1="4" x2="6" y2="7" stroke="currentColor" strokeWidth="1.5" />
          <line x1="10" y1="4" x2="10" y2="7" stroke="currentColor" strokeWidth="1.5" />
          <line x1="14" y1="4" x2="14" y2="7" stroke="currentColor" strokeWidth="1.5" />
          <line x1="18" y1="4" x2="18" y2="7" stroke="currentColor" strokeWidth="1.5" />
          <line x1="6" y1="17" x2="6" y2="20" stroke="currentColor" strokeWidth="1.5" />
          <line x1="10" y1="17" x2="10" y2="20" stroke="currentColor" strokeWidth="1.5" />
          <line x1="14" y1="17" x2="14" y2="20" stroke="currentColor" strokeWidth="1.5" />
          <line x1="18" y1="17" x2="18" y2="20" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    } else if (type === 2) {
      // YouTube Short SVG
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          style={{ width: size, height: size }}
          className="text-[#FF0000]"
        >
          <rect x="5" y="1" width="14" height="22" rx="3" stroke="currentColor" strokeWidth="1.5" />
          <polygon points="9,7 17,12 9,17" fill="currentColor" opacity="0.7" />
          <line x1="8" y1="20" x2="16" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    } else {
      // TikTok Video SVG
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          style={{ width: size, height: size }}
          className="text-[#69C9D0]"
        >
          <path d="M9 18V5l12-2v13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="18" cy="16" r="3" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    }
  };

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0"
      style={{
        maskImage: "linear-gradient(to bottom, black 0%, black 60%, transparent 90%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 60%, transparent 90%, transparent 100%)",
      }}
    >
      {icons.map((icon) => (
        <motion.div
          key={icon.id}
          initial={{
            y: icon.startY,
            x: `${icon.startX}vw`,
            opacity: 0,
            rotate: 0,
          }}
          animate={{
            y: ["0vh", "120vh"],
            x: [`${icon.startX}vw`, `calc(${icon.startX}vw + ${icon.drift}px)`],
            opacity: [0, icon.peakOpacity, icon.peakOpacity, 0],
            rotate: [0, icon.rotation],
          }}
          transition={{
            duration: icon.duration,
            delay: icon.delay,
            ease: "linear",
            repeat: Infinity,
          }}
          className="absolute"
          style={{
            willChange: "transform",
          }}
        >
          {renderIconSvg(icon.type, icon.size)}
        </motion.div>
      ))}
    </div>
  );
};
