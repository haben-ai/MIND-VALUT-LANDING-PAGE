"use client";

import React, { useEffect, useRef, useState } from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { Problem } from "@/components/sections/Problem";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Features } from "@/components/sections/Features";
import { Platforms } from "@/components/sections/Platforms";
import { Waitlist } from "@/components/sections/Waitlist";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";
import { ContentRain } from "@/components/ui/ContentRain";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [waitlistCount, setWaitlistCount] = useState(109);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      // Get the bounding box of the document to get absolute page coordinates
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top + window.scrollY; // adjust for scroll

      containerRef.current.style.setProperty("--x", `${x}px`);
      containerRef.current.style.setProperty("--y", `${y}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    fetch("/api/waitlist")
      .then((res) => res.json())
      .then((data) => {
        if (data && typeof data.count === "number") {
          setWaitlistCount(data.count);
        }
      })
      .catch((err) => console.error("Error fetching waitlist count:", err));
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-forest-base overflow-x-hidden selection:bg-forest-accent/30 selection:text-white"
    >
      {/* Visual Effect 10: Cursor Glow spotlight (Desktop only) */}
      <div
        className="absolute inset-0 z-10 pointer-events-none hidden md:block"
        style={{
          background: "radial-gradient(600px circle at var(--x, 0px) var(--y, 0px), rgba(163, 255, 0, 0.035), transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Global Header */}
      <Navbar />

      {/* Main Page Layout Sections in Exact Order */}
      <main>
        {/* Relative Container that spans from top of Hero to top of Waitlist for the ContentRain */}
        <div className="relative w-full overflow-hidden">
          <ContentRain />
          <Hero waitlistCount={waitlistCount} />
          <StatsBar waitlistCount={waitlistCount} />
          
          {/* Smooth transition from hero/statsbar to problem */}
          <div className="h-[120px] w-full bg-gradient-to-b from-[#060C02] to-[#0E1A06] pointer-events-none relative z-0" />
          
          <Problem />
          <HowItWorks />
          <Features />
          <Platforms />
        </div>
        
        <Waitlist />
        <FAQ />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
