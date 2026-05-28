"use client";

import React from "react";
import { GlassCard } from "../ui/GlassCard";
import { ScrollAnimate } from "../ui/ScrollAnimate";
import {
  FolderArchive,
  MessageSquare,
  Globe2,
  FileSpreadsheet,
  Send,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";

export const Problem: React.FC = () => {
  return (
    <section
      id="problem"
      className="py-28 md:py-36 bg-gradient-to-b from-forest-base to-forest-surface relative z-10 overflow-hidden"
    >
      <div className="max-w-[1200px] w-full mx-auto px-6 md:px-12">
        <ScrollAnimate className="flex flex-col items-center text-center mb-16 md:mb-20">
          {/* Label style */}
          <span className="font-label text-forest-text-muted mb-4 block">THE PROBLEM</span>

          {/* Heading */}
          <h2 className="text-[34px] sm:text-[46px] md:text-[60px] font-bold tracking-tight leading-[1.1] text-forest-text-primary mb-6 max-w-[800px]">
            You save everything. <br />
            <span className="bg-gradient-to-r from-forest-accent via-forest-accent-light to-forest-highlight bg-clip-text text-transparent">
              You find nothing.
            </span>
          </h2>

          {/* Body */}
          <p className="text-base sm:text-lg md:text-xl font-normal text-forest-text-secondary leading-relaxed max-w-[680px]">
            Every day you save dozens of reels, posts, threads and videos. They disappear into
            847-item saved folders, WhatsApp &ldquo;saved messages&rdquo;, notes apps, and browser bookmarks
            you never open. The content is gone. The knowledge is lost.
          </p>
        </ScrollAnimate>

        {/* Chaos vs Solution */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          {/* Left Card: Before Vora */}
          <ScrollAnimate delay={0.1} className="h-full">
            <GlassCard
              tint="red"
              className="p-6 md:p-8 h-full flex flex-col justify-between border-red-500/20 relative"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[11px] font-semibold text-red-400 tracking-wider uppercase bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20 flex items-center gap-1.5">
                    <AlertTriangle className="h-3 w-3" /> Before Vora
                  </span>
                  <span className="text-xs text-red-300 font-medium">Where things go to die</span>
                </div>

                <div className="flex flex-col gap-4">
                  {/* Item 1 */}
                  <div className="flex items-center justify-between bg-black/25 border border-red-500/10 rounded-xl p-3 px-4">
                    <div className="flex items-center gap-3">
                      <FolderArchive className="h-4.5 w-4.5 text-red-400" />
                      <span className="text-sm font-medium text-forest-text-primary">
                        Instagram saved
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-red-300">847 items</span>
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                      </span>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="flex items-center justify-between bg-black/25 border border-red-500/10 rounded-xl p-3 px-4">
                    <div className="flex items-center gap-3">
                      <MessageSquare className="h-4.5 w-4.5 text-red-400" />
                      <span className="text-sm font-medium text-forest-text-primary">
                        WhatsApp Saved
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-red-300">234 links</span>
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                      </span>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="flex items-center justify-between bg-black/25 border border-red-500/10 rounded-xl p-3 px-4">
                    <div className="flex items-center gap-3">
                      <Globe2 className="h-4.5 w-4.5 text-red-400" />
                      <span className="text-sm font-medium text-forest-text-primary">
                        Chrome bookmarks
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-red-300">1,204 items</span>
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                      </span>
                    </div>
                  </div>

                  {/* Item 4 */}
                  <div className="flex items-center justify-between bg-black/25 border border-red-500/10 rounded-xl p-3 px-4">
                    <div className="flex items-center gap-3">
                      <FileSpreadsheet className="h-4.5 w-4.5 text-red-400" />
                      <span className="text-sm font-medium text-forest-text-primary">
                        Notes app
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-red-300">89 notes</span>
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                      </span>
                    </div>
                  </div>

                  {/* Item 5 */}
                  <div className="flex items-center justify-between bg-black/25 border border-red-500/10 rounded-xl p-3 px-4">
                    <div className="flex items-center gap-3">
                      <Send className="h-4.5 w-4.5 text-red-400" />
                      <span className="text-sm font-medium text-forest-text-primary">
                        Telegram Saved
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-red-300">156 links</span>
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </ScrollAnimate>

          {/* Right Card: With Vora */}
          <ScrollAnimate delay={0.2} className="h-full">
            <GlassCard
              tint="green"
              className="p-6 md:p-8 h-full flex flex-col justify-between relative overflow-hidden"
            >
              {/* Soft radial backdrop accent */}
              <div className="absolute inset-0 bg-forest-accent/5 pointer-events-none z-0" />
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[11px] font-semibold text-forest-accent-light tracking-wider uppercase bg-forest-accent/15 px-3 py-1 rounded-full border border-forest-accent/30 flex items-center gap-1.5 animate-pulse-subtle">
                      <CheckCircle className="h-3 w-3" /> With Vora
                    </span>
                    <span className="text-xs text-forest-accent-light font-medium">
                      Where knowledge lives
                    </span>
                  </div>

                  <div className="flex flex-col gap-4">
                    {/* Solution 1 */}
                    <div className="flex items-center justify-between bg-forest-surface-3/30 border border-forest-border/30 rounded-xl p-4">
                      <div className="flex items-center gap-3">
                        <span className="text-forest-accent text-lg">✓</span>
                        <span className="text-sm font-semibold text-forest-text-primary">
                          One place for everything
                        </span>
                      </div>
                    </div>

                    {/* Solution 2 */}
                    <div className="flex items-center justify-between bg-forest-surface-3/30 border border-forest-border/30 rounded-xl p-4">
                      <div className="flex items-center gap-3">
                        <span className="text-forest-accent text-lg">✓</span>
                        <span className="text-sm font-semibold text-forest-text-primary">
                          Searchable by meaning
                        </span>
                      </div>
                    </div>

                    {/* Solution 3 */}
                    <div className="flex items-center justify-between bg-forest-surface-3/30 border border-forest-border/30 rounded-xl p-4">
                      <div className="flex items-center gap-3">
                        <span className="text-forest-accent text-lg">✓</span>
                        <span className="text-sm font-semibold text-forest-text-primary">
                          Found in seconds
                        </span>
                      </div>
                    </div>

                    {/* Solution 4 */}
                    <div className="flex items-center justify-between bg-forest-surface-3/30 border border-forest-border/30 rounded-xl p-4">
                      <div className="flex items-center gap-3">
                        <span className="text-forest-accent text-lg">✓</span>
                        <span className="text-sm font-semibold text-forest-text-primary">
                          Never lost again
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
};
