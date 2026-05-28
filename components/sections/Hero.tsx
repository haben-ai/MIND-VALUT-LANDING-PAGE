"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Badge } from "../ui/Badge";
import { GlowButton } from "../ui/GlowButton";
import { PhoneMockup } from "../ui/PhoneMockup";
import { BrowserMockup } from "../ui/BrowserMockup";
import { ParticleField } from "../ui/ParticleField";
import { AnimatedCounter } from "../ui/AnimatedCounter";
import { WaitlistForm } from "../ui/WaitlistForm";
import { SuccessState } from "../ui/SuccessState";

const PLATFORMS = [
  { name: "Instagram", color: "#E1306C" },
  { name: "TikTok", color: "#69C9D0" },
  { name: "YouTube", color: "#FF0000" },
  { name: "Reddit", color: "#FF4500" },
  { name: "X", color: "#7A9482" },
];

export const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [submission, setSubmission] = useState<{
    firstName: string;
    email: string;
    position: number;
  } | null>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleSuccess = (data: { firstName: string; email: string; position: number }) => {
    setSubmission(data);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const line1Words = "Stop losing what".split(" ");
  const line2Words = "you save online.".split(" ");

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.3,
      },
    },
  };

  const wordVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="relative min-h-[100vh] flex flex-col items-center justify-center bg-forest-base overflow-hidden pt-28 pb-20 select-none">
      {/* LAYER 1: Radial Glow (Visual Effect 2 - Saturated Neon) + Dot Grid Pattern (Visual Effect 3) */}
      <div
        className="absolute inset-0 z-0 bg-gradient-radial-glow pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(61,153,112,0.3) 0%, rgba(61,153,112,0.05) 45%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Ccircle cx='1' cy='1' r='0.8' fill='%233D9970' fill-opacity='0.04'/%3E%3C/svg%3E")`,
          maskImage: "radial-gradient(ellipse 60% 50% at 50% 0%, black 0%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 50% at 50% 0%, black 0%, transparent 100%)",
        }}
      />

      {/* LAYER 2: Twinkling Space Stars + Intelligence Nodes */}
      <ParticleField />

      {/* LAYER 3: Hero Content */}
      <div className="relative z-10 max-w-[1200px] w-full mx-auto px-6 md:px-12 flex flex-col xl:flex-row items-center gap-16">
        <div className="flex-1 flex flex-col items-center xl:items-start text-center xl:text-left">
          {/* Announcement badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6"
          >
            <Badge variant="pulse">✦ Now in early access</Badge>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={staggerContainer}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            className="text-[42px] sm:text-[62px] md:text-[84px] font-bold tracking-tighter leading-[0.95] text-forest-text-primary mb-6"
          >
            <span className="block overflow-hidden pb-1">
              {line1Words.map((word, idx) => (
                <motion.span key={idx} variants={wordVariant} className="inline-block mr-[0.2em]">
                  {word}
                </motion.span>
              ))}
            </span>
            <span className="block overflow-hidden bg-gradient-to-r from-forest-accent via-forest-accent-light to-forest-highlight bg-clip-text text-transparent pb-1">
              {line2Words.map((word, idx) => (
                <motion.span key={idx} variants={wordVariant} className="inline-block mr-[0.2em]">
                  {word}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl font-normal text-forest-text-secondary leading-relaxed max-w-[560px] mb-8"
          >
            Vora saves every reel, post, video and thread you share from Instagram, TikTok, YouTube,
            Reddit and X — and makes them findable forever.
          </motion.p>

          {/* Platforms Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center flex-wrap justify-center xl:justify-start gap-2.5 mb-8 w-full"
          >
            {PLATFORMS.map((platform, idx) => (
              <React.Fragment key={platform.name}>
                <div className="bg-white/[0.03] border border-white/[0.08] px-3.5 py-1.5 rounded-full flex items-center gap-2">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: platform.color }}
                  />
                  <span className="text-xs font-semibold text-forest-text-muted">
                    {platform.name}
                  </span>
                </div>
                {idx < PLATFORMS.length - 1 && (
                  <span className="h-4 w-[1px] bg-forest-border/20 hidden sm:block" />
                )}
              </React.Fragment>
            ))}
          </motion.div>

          {/* Inline Waitlist Dialog / Form on the very top */}
          <div className="w-full max-w-[480px] mb-8 z-20">
            <AnimatePresence mode="wait">
              {!submission ? (
                <motion.div
                  key="hero-waitlist-form"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="w-full text-left"
                >
                  <WaitlistForm onSuccess={handleSuccess} />
                  <div className="mt-4 flex justify-center xl:justify-start">
                    <button
                      onClick={() => scrollToSection("how-it-works")}
                      className="text-xs font-semibold text-forest-text-muted hover:text-forest-text-primary hover:underline transition-all py-1 cursor-pointer flex items-center gap-1 group"
                    >
                      See how it works
                      <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5 duration-300" />
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="hero-waitlist-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="w-full text-left bg-forest-surface-2/20 border border-forest-border/10 rounded-3xl p-6 backdrop-blur-md"
                >
                  <SuccessState
                    firstName={submission.firstName}
                    email={submission.email}
                    position={submission.position}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Social Proof Queue count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex items-center gap-3.5"
          >
            {/* Avatars */}
            <div className="flex -space-x-2">
              {[
                "from-forest-surface-3 to-forest-accent",
                "from-forest-surface-2 to-forest-accent-light",
                "from-forest-surface-3 to-forest-highlight",
                "from-[#1E4028] to-[#5AB88A]",
                "from-forest-border to-forest-accent",
              ].map((gradient, i) => (
                <div
                  key={i}
                  className={`w-7 h-7 rounded-full bg-gradient-to-br ${gradient} border border-forest-base`}
                />
              ))}
            </div>
            <div className="text-sm text-forest-text-muted font-normal">
              Join <span className="text-forest-text-primary font-semibold">
                <AnimatedCounter value={2847} />
              </span>{" "}
              people on the waitlist
            </div>
          </motion.div>
        </div>

        {/* Right side: Layered Dual Mockup (Browser + Phone) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex-1 w-full relative flex items-center justify-center min-h-[380px] md:min-h-[460px] z-10"
        >
          {/* 1. Desktop Browser Mockup (Layered Back, hidden on mobile) */}
          <div className="hidden lg:block absolute left-[-40px] top-[45px] scale-[0.95] z-0 opacity-70 hover:opacity-90 hover:scale-[0.97] hover:left-[-35px] transition-all duration-500">
            <BrowserMockup />
          </div>

          {/* 2. Mobile Phone Mockup (Layered Front, floats independently) */}
          <div className="relative z-10 lg:right-[-110px] lg:top-[-20px] scale-[0.95] lg:scale-[1.0] transition-all duration-300">
            <PhoneMockup />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
