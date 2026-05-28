"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Folder,
  Search,
  Instagram,
  Youtube,
  Linkedin,
  Sparkles,
  Layers,
  Settings,
  Grid,
} from "lucide-react";

export const BrowserMockup: React.FC = () => {
  return (
    <div className="w-full max-w-[480px] h-[310px] rounded-xl bg-forest-surface/90 border border-forest-border/35 shadow-phone-mock overflow-hidden flex flex-col select-none relative backdrop-blur-md">
      {/* Neon highlight spotlight inside browser */}
      <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-forest-accent/5 rounded-full blur-[80px] pointer-events-none" />

      {/* Browser Title Bar */}
      <div className="h-9 bg-forest-base/60 border-b border-forest-border/20 flex items-center px-4 justify-between shrink-0">
        {/* macOS Window Controls */}
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
        </div>

        {/* Address Bar */}
        <div className="bg-forest-surface-2 border border-forest-border/20 rounded-md px-12 py-0.5 text-[8px] text-forest-text-muted font-medium select-none shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]">
          vora.app/inbox
        </div>

        <div className="w-12" />
      </div>

      {/* Main Workspace */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Left Sidebar */}
        <div className="w-[110px] bg-forest-base/30 border-r border-forest-border/10 p-2.5 flex flex-col gap-4 shrink-0">
          <div className="flex items-center gap-1.5 px-1.5 py-1 bg-forest-accent/15 border border-forest-accent/30 rounded-md">
            <Layers className="w-3 h-3 text-forest-accent-light" />
            <span className="text-[8px] font-bold text-forest-accent-light">All Saves</span>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-[7px] font-bold text-forest-text-muted uppercase tracking-wider px-1.5">
              Folders
            </span>
            <div className="flex flex-col gap-0.5">
              <div className="flex items-center gap-1.5 px-1.5 py-0.5 text-forest-text-secondary hover:text-forest-text-primary rounded text-[8px] cursor-pointer">
                <Folder className="w-2.5 h-2.5 text-forest-text-muted" /> Marketing
              </div>
              <div className="flex items-center gap-1.5 px-1.5 py-0.5 text-forest-text-secondary hover:text-forest-text-primary rounded text-[8px] cursor-pointer">
                <Folder className="w-2.5 h-2.5 text-forest-text-muted" /> Tech Code
              </div>
            </div>
          </div>
        </div>

        {/* Workspace content grid */}
        <div className="flex-1 p-3 flex flex-col gap-3 overflow-y-auto no-scrollbar">
          {/* Dashboard Header toolbar */}
          <div className="flex items-center justify-between border-b border-forest-border/10 pb-2">
            <div className="flex items-center gap-1">
              <span className="text-[10px] font-bold text-forest-text-primary">Your Inbox</span>
              <Sparkles className="w-3 h-3 text-forest-accent animate-pulse-subtle" />
            </div>
            <div className="h-5 w-24 bg-forest-base/60 border border-forest-border/20 rounded px-1.5 flex items-center gap-1">
              <Search className="w-2.5 h-2.5 text-forest-text-muted" />
              <span className="text-[7px] text-forest-text-muted">Search inbox...</span>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-2 gap-2.5">
            {/* Card 1: Instagram */}
            <div className="bg-forest-surface-2/60 border border-forest-border/15 rounded-lg p-1.5 flex flex-col gap-1.5 shadow-sm">
              <div className="h-12 rounded bg-gradient-to-tr from-[#FD1D1D] to-[#FCB045] relative overflow-hidden" />
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  <Instagram className="w-2.5 h-2.5 text-[#E1306C]" />
                  <span className="text-[6px] text-forest-text-muted uppercase font-bold">Reel</span>
                </div>
                <h5 className="text-[8px] font-bold text-forest-text-primary line-clamp-1">
                  10x CSS Grid Tricks
                </h5>
              </div>
            </div>

            {/* Card 2: YouTube */}
            <div className="bg-forest-surface-2/60 border border-forest-border/15 rounded-lg p-1.5 flex flex-col gap-1.5 shadow-sm">
              <div className="h-12 rounded bg-gradient-to-tr from-[#FF0000] to-[#E52D27] relative overflow-hidden" />
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  <Youtube className="w-2.5 h-2.5 text-[#FF0000]" />
                  <span className="text-[6px] text-forest-text-muted uppercase font-bold">Video</span>
                </div>
                <h5 className="text-[8px] font-bold text-forest-text-primary line-clamp-1">
                  SaaS Architectures
                </h5>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
