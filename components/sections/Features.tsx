"use client";

import React from "react";
import { GlassCard } from "../ui/GlassCard";
import { ScrollAnimate } from "../ui/ScrollAnimate";
import { Badge } from "../ui/Badge";
import {
  Zap,
  Search,
  FolderOpen,
  Globe,
  BrainCircuit,
  Shield,
  MessageSquare,
  Sparkles,
} from "lucide-react";

const FEATURES = [
  {
    icon: Zap,
    title: "One-tap saving",
    body: "Share from Instagram, TikTok, YouTube, Reddit or X. Vora appears in your share sheet and does the rest instantly.",
    badge: null,
  },
  {
    icon: Search,
    title: "Powerful search",
    body: "Find any save by title, creator, platform, hashtag or date. Semantic search coming in V2.",
    badge: { text: "V2: Semantic search", variant: "standard" as const },
  },
  {
    icon: FolderOpen,
    title: "Smart collections",
    body: "Organise saves into colour-coded collections. Marketing inspo, coding tutorials, recipes — everything in its place.",
    badge: null,
  },
  {
    icon: Globe,
    title: "6 platforms, one inbox",
    body: "Instagram, TikTok, YouTube Shorts, Twitter/X threads, Reddit posts, and LinkedIn articles — all in one beautiful library.",
    badge: null,
  },
  {
    icon: BrainCircuit,
    title: "AI layer coming",
    body: "V2 brings auto-summaries, transcription, smart tags and 'ask your library' Q&A. The more you save, the smarter it gets.",
    badge: { text: "Coming in V2", variant: "amber" as const },
  },
  {
    icon: Shield,
    title: "Yours forever",
    body: "Your library is private, encrypted, and owned by you. No algorithm. No ads. No data selling. Ever.",
    badge: null,
  },
];

export const Features: React.FC = () => {
  return (
    <section
      id="features"
      className="py-28 md:py-36 bg-gradient-to-b from-forest-surface to-forest-base relative z-10 overflow-hidden"
    >
      <div className="max-w-[1200px] w-full mx-auto px-6 md:px-12">
        <ScrollAnimate className="flex flex-col items-center text-center mb-16 md:mb-20">
          <span className="font-label text-forest-text-muted mb-4 block">FEATURES</span>
          <h2 className="text-[34px] sm:text-[46px] md:text-[56px] font-bold tracking-tight leading-[1.1] text-forest-text-primary max-w-[700px]">
            Built for how you <br />
            <span className="bg-gradient-to-r from-forest-accent to-forest-highlight bg-clip-text text-transparent">
              actually use social media.
            </span>
          </h2>
        </ScrollAnimate>

        {/* Feature Cards Grid (3 cols desktop, 1 col mobile) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 items-stretch">
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <ScrollAnimate key={feature.title} delay={idx * 0.05} className="h-full">
                <GlassCard hoverEffect={true} className="p-6 md:p-8 h-full flex flex-col justify-between">
                  <div>
                    {/* Icon & Badge row */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="h-11 w-11 rounded-2xl bg-forest-accent/10 border-2 border-forest-border flex items-center justify-center shadow-sm">
                        <Icon className="h-5 w-5 text-forest-accent" />
                      </div>
                      {feature.badge && (
                        <Badge variant={feature.badge.variant} className="text-[10px] py-0.5">
                          {feature.badge.text}
                        </Badge>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-bold text-forest-text-primary mb-3">
                      {feature.title}
                    </h3>

                    {/* Body */}
                    <p className="text-sm md:text-base text-forest-text-secondary leading-relaxed">
                      {feature.body}
                    </p>
                  </div>
                </GlassCard>
              </ScrollAnimate>
            );
          })}
        </div>

        {/* Bottom Full Width Card V2 AI Chat simulation */}
        <ScrollAnimate delay={0.3} className="w-full mt-6">
          <div className="rounded-3xl bg-forest-surface border-2 border-forest-border border-b-[6px] p-6 md:p-10 shadow-lg relative overflow-hidden flex flex-col lg:flex-row items-center gap-10">
            {/* Soft grid/particles background inside the container */}
            <div className="absolute inset-0 bg-forest-accent/[0.01] pointer-events-none z-0" />
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-forest-accent/5 rounded-full blur-[100px] pointer-events-none z-0" />

            {/* Left Content */}
            <div className="flex-1 relative z-10 text-center lg:text-left">
              <span className="font-label text-forest-accent text-xs font-bold tracking-widest uppercase mb-3.5 block flex items-center justify-center lg:justify-start gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-forest-accent animate-pulse-subtle" />
                AI-POWERED · COMING SOON
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-forest-text-primary tracking-tight mb-4">
                Coming in V2: Ask your library
              </h3>
              <p className="text-sm md:text-base text-forest-text-secondary leading-relaxed max-w-lg mx-auto lg:mx-0">
                Instead of searching through files, simply ask Vora anything about what you saved. Get
                summaries, translations, code snippets, and key citations drawn instantly across your
                entire inbox repository.
              </p>
            </div>

            {/* Right: Fake Chat Interface Mockup */}
            <div className="w-full lg:max-w-md relative z-10 bg-forest-surface border-2 border-forest-border border-b-[6px] rounded-2xl p-4 shadow-md flex flex-col gap-3.5">
              {/* Chat Header */}
              <div className="flex items-center gap-2 border-b border-forest-border/10 pb-2.5">
                <div className="h-5 w-5 rounded-full bg-forest-accent/20 border border-forest-accent flex items-center justify-center">
                  <span className="h-2 w-2 rounded-full bg-forest-accent" />
                </div>
                <span className="text-[10px] font-bold text-forest-text-primary tracking-wide">
                  Vora AI Assistant
                </span>
              </div>

              {/* User Prompt */}
              <div className="flex flex-col items-end gap-1">
                <div className="bg-forest-surface-3/80 border border-forest-border/40 p-2.5 px-3.5 rounded-2xl rounded-tr-none text-xs text-forest-text-primary max-w-[85%] font-medium shadow-sm">
                  What did I save about cold email?
                </div>
                <span className="text-[8px] text-forest-text-muted mr-1.5">You · Just now</span>
              </div>

              {/* Vora AI Response */}
              <div className="flex flex-col items-start gap-1">
                <div className="bg-forest-surface-2 border border-forest-border/20 p-3 px-4 rounded-2xl rounded-tl-none text-xs text-forest-text-secondary max-w-[90%] leading-relaxed shadow-sm">
                  <p className="mb-2 text-forest-text-primary font-medium">
                    You saved 3 strategies on cold email:
                  </p>
                  <ul className="list-disc list-inside space-y-1.5">
                    <li>
                      <span className="text-forest-text-primary font-medium">
                        The &ldquo;1-Sentence Pitch&rdquo;
                      </span>{" "}
                      focuses on clear ROI first.
                      <span className="ml-1.5 px-1 py-0.2 bg-[#1DA1F2]/20 text-[#1DA1F2] text-[7px] font-bold rounded">
                        X THREAD
                      </span>
                    </li>
                    <li>
                      <span className="text-forest-text-primary font-medium">No-brain CTA</span> at
                      the end to maximize calendar responses.
                      <span className="ml-1.5 px-1 py-0.2 bg-[#FF0000]/20 text-[#FF0000] text-[7px] font-bold rounded">
                        YOUTUBE
                      </span>
                    </li>
                  </ul>
                </div>
                <span className="text-[8px] text-forest-text-muted ml-1.5 flex items-center gap-1">
                  Vora AI · Just now
                </span>
              </div>
            </div>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
};
