"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Share2,
  Download,
  FolderHeart,
  Instagram,
  Youtube,
  Link2,
  Folder,
  Search,
  CheckCircle2,
  Sparkles,
  ClipboardCheck,
} from "lucide-react";

// STEP 1: Share Mockup (Simulated YouTube video screen with slide-up iOS share sheet)
export const ShareMockup: React.FC = () => {
  return (
    <div className="w-full max-w-[270px] h-[330px] rounded-2xl bg-black border border-forest-border/25 relative overflow-hidden shadow-2xl flex flex-col justify-between p-3 select-none">
      {/* Video Content Area */}
      <div className="relative h-44 rounded-xl overflow-hidden bg-gradient-to-br from-red-600/90 to-red-950 flex flex-col justify-between p-2.5">
        <div className="flex items-center gap-1.5">
          <Youtube className="w-5 h-5 text-white" />
          <span className="text-[10px] font-bold text-white tracking-wide">YouTube Shorts</span>
        </div>
        <div className="text-white">
          <div className="h-1 w-full bg-white/20 rounded-full mb-1">
            <div className="h-full w-[65%] bg-red-600 rounded-full" />
          </div>
          <p className="text-[9px] font-medium line-clamp-1">How to scale SaaS to $10k/mo</p>
          <p className="text-[7px] text-white/70">@design.secrets</p>
        </div>
      </div>

      {/* Slide-Up Share Sheet */}
      <motion.div
        initial={{ y: 80 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
        className="bg-forest-surface border-t border-forest-border/30 rounded-t-xl absolute bottom-0 left-0 right-0 p-3.5 z-10 flex flex-col gap-2.5 shadow-[0_-8px_24px_rgba(0,0,0,0.5)]"
      >
        <div className="flex items-center justify-between text-[9px] text-forest-text-muted font-medium border-b border-forest-border/10 pb-1.5">
          <span>SHARE VIDEO</span>
          <Share2 className="w-3 h-3" />
        </div>
        
        {/* Share Destinations Row */}
        <div className="flex items-center justify-between gap-1.5 overflow-x-auto py-1">
          {/* Target 1: Messages */}
          <div className="flex flex-col items-center gap-1 shrink-0">
            <div className="w-8 h-8 rounded-full bg-blue-500/25 flex items-center justify-center">
              <span className="w-4 h-4 rounded-full bg-blue-500" />
            </div>
            <span className="text-[7px] text-forest-text-muted">Messages</span>
          </div>

          {/* Target 2: VORA (The star CTA!) */}
          <div className="flex flex-col items-center gap-1 shrink-0 relative">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-10 h-10 rounded-full bg-forest-accent border border-forest-accent-light flex items-center justify-center shadow-[0_0_15px_rgba(61,153,112,0.6)] cursor-pointer"
            >
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                <path d="M4 4.5l8 14 8-14" />
              </svg>
            </motion.div>
            <span className="text-[8px] font-bold text-forest-accent-light">Save to Vora</span>
          </div>

          {/* Target 3: WhatsApp */}
          <div className="flex flex-col items-center gap-1 shrink-0">
            <div className="w-8 h-8 rounded-full bg-emerald-500/25 flex items-center justify-center">
              <span className="w-4 h-4 rounded-full bg-emerald-500" />
            </div>
            <span className="text-[7px] text-forest-text-muted">WhatsApp</span>
          </div>

          {/* Target 4: Mail */}
          <div className="flex flex-col items-center gap-1 shrink-0">
            <div className="w-8 h-8 rounded-full bg-gray-600/20 flex items-center justify-center">
              <span className="w-4 h-4 rounded-full bg-gray-500" />
            </div>
            <span className="text-[7px] text-forest-text-muted">Mail</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// STEP 2: Save Mockup (Vora app saving overlay)
export const SaveMockup: React.FC = () => {
  return (
    <div className="w-full max-w-[270px] h-[330px] rounded-2xl bg-forest-surface border border-forest-border/30 overflow-hidden shadow-2xl flex flex-col justify-between p-3 select-none relative">
      {/* Background radial soft light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(61,153,112,0.12)_0%,transparent_60%)] pointer-events-none" />

      {/* Mock Header */}
      <div className="flex items-center justify-between border-b border-forest-border/10 pb-2">
        <span className="text-[9px] font-bold text-forest-text-muted tracking-wider">VORA CAPTURE</span>
        <Sparkles className="w-3.5 h-3.5 text-forest-accent animate-pulse-subtle" />
      </div>

      {/* Middle Animation Area */}
      <div className="flex-1 flex flex-col items-center justify-center py-4 relative">
        {/* Captured card with slide in */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full max-w-[210px] bg-forest-surface-2 border border-forest-border/40 rounded-xl p-3 shadow-md relative z-10 flex flex-col gap-2.5"
        >
          {/* Metadata Card top thumbnail preview */}
          <div className="h-16 rounded-md bg-gradient-to-r from-red-600/80 to-[#FD1D1D]/70 overflow-hidden relative flex items-center justify-center">
            <span className="text-[8px] font-bold text-white uppercase bg-black/40 px-2 py-0.5 rounded">
              Youtube Video
            </span>
          </div>

          <div>
            <div className="flex items-center gap-1 mb-0.5">
              <Link2 className="w-2.5 h-2.5 text-forest-accent" />
              <span className="text-[7px] font-medium text-forest-text-muted">youtube.com/shorts/...</span>
            </div>
            <h4 className="text-[9px] font-semibold text-forest-text-primary line-clamp-1">
              How to scale SaaS to $10k/mo
            </h4>
            <p className="text-[7px] text-forest-accent-light font-medium">@design.secrets</p>
          </div>
        </motion.div>

        {/* Pulsing loading circle behind the card */}
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <div className="w-28 h-28 border border-forest-accent/20 rounded-full animate-ping" />
        </div>
      </div>

      {/* Status Checked Footer */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-forest-accent/10 border border-forest-accent/30 rounded-lg p-2 flex items-center justify-center gap-1.5"
      >
        <CheckCircle2 className="w-4 h-4 text-forest-accent" />
        <span className="text-[9px] font-semibold text-forest-accent-light">Saved successfully ✓</span>
      </motion.div>
    </div>
  );
};

// STEP 3: Library Mockup (Vora Organized Library, Search and Folderwise)
export const LibraryMockup: React.FC = () => {
  return (
    <div className="w-full max-w-[270px] h-[330px] rounded-2xl bg-forest-surface border border-forest-border/30 overflow-hidden shadow-2xl flex flex-col p-3 select-none relative">
      
      {/* Header Search bar */}
      <div className="relative max-w-full bg-forest-base border border-forest-border/20 rounded-lg flex items-center p-1.5 px-2 mb-3.5">
        <Search className="w-3 h-3 text-forest-text-muted mr-1.5 shrink-0" />
        <span className="text-[8px] text-forest-text-primary font-medium">
          cold email
        </span>
        <div className="h-2 w-[1px] bg-forest-accent animate-pulse ml-0.5 shrink-0" />
      </div>

      {/* Title */}
      <div className="mb-3">
        <div className="text-[8px] font-semibold text-forest-text-muted tracking-wider uppercase mb-1">
          Collections
        </div>
        <h4 className="text-[10px] font-bold text-forest-text-primary">Folder-wise Library</h4>
      </div>

      {/* Grid Collections Folders */}
      <div className="grid grid-cols-2 gap-2 flex-1 overflow-y-auto no-scrollbar">
        {/* Folder 1: Marketing (Highlighted) */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-forest-accent/10 border border-forest-accent/40 rounded-xl p-2.5 flex flex-col justify-between shadow-sm cursor-pointer"
        >
          <div className="flex items-center justify-between mb-2">
            <Folder className="w-5 h-5 text-forest-accent-light" />
            <span className="text-[7px] font-bold text-white bg-forest-accent px-1.5 py-0.2 rounded-full">
              3
            </span>
          </div>
          <div>
            <h5 className="text-[9px] font-semibold text-forest-text-primary">Marketing Inspo</h5>
            <p className="text-[6px] text-forest-text-muted">Contains "cold email"</p>
          </div>
        </motion.div>

        {/* Folder 2: Tech Tutorials */}
        <div className="bg-forest-surface-2 border border-forest-border/10 rounded-xl p-2.5 flex flex-col justify-between shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <Folder className="w-5 h-5 text-forest-text-muted" />
            <span className="text-[7px] font-bold text-forest-text-muted bg-forest-surface-3 px-1.5 py-0.2 rounded-full">
              12
            </span>
          </div>
          <div>
            <h5 className="text-[9px] font-semibold text-forest-text-primary">Tech Tutorials</h5>
            <p className="text-[6px] text-forest-text-muted">Next.js & Design</p>
          </div>
        </div>

        {/* Folder 3: Design Inspiration */}
        <div className="bg-forest-surface-2 border border-forest-border/10 rounded-xl p-2.5 flex flex-col justify-between shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <Folder className="w-5 h-5 text-forest-text-muted" />
            <span className="text-[7px] font-bold text-forest-text-muted bg-forest-surface-3 px-1.5 py-0.2 rounded-full">
              8
            </span>
          </div>
          <div>
            <h5 className="text-[9px] font-semibold text-forest-text-primary">Design Secrets</h5>
            <p className="text-[6px] text-forest-text-muted">Stripe & Linear</p>
          </div>
        </div>

        {/* Folder 4: Recipes */}
        <div className="bg-forest-surface-2 border border-forest-border/10 rounded-xl p-2.5 flex flex-col justify-between shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <Folder className="w-5 h-5 text-forest-text-muted" />
            <span className="text-[7px] font-bold text-forest-text-muted bg-forest-surface-3 px-1.5 py-0.2 rounded-full">
              4
            </span>
          </div>
          <div>
            <h5 className="text-[9px] font-semibold text-forest-text-primary">Recipes</h5>
            <p className="text-[6px] text-forest-text-muted">Coffee & Baking</p>
          </div>
        </div>
      </div>
    </div>
  );
};
