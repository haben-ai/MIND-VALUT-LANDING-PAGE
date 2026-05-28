"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Twitter, Copy, Check } from "lucide-react";
import { Button } from "./Button";

interface SuccessStateProps {
  firstName: string;
  email: string;
  position: number;
}

export const SuccessState: React.FC<SuccessStateProps> = ({
  firstName,
  email,
  position,
}) => {
  const [copied, setCopied] = useState(false);
  const shareUrl = typeof window !== "undefined" ? window.location.origin : "https://vora.app";
  const tweetText = `Just joined the Vora waitlist — an app that saves your reels and social media posts so you never lose them again. Join me: ${shareUrl}`;
  const twitterIntent = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy URL", err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", duration: 0.6, bounce: 0.2 }}
      className="flex flex-col items-center text-center max-w-lg mx-auto py-6"
    >
      {/* Large checkmark circle (Visual Effect: spring animation scale 0 -> 1) */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
        className="w-20 h-20 bg-forest-accent/10 border-2 border-forest-accent rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(61,153,112,0.2)]"
      >
        <CheckCircle2 className="w-9 h-9 text-forest-accent" />
      </motion.div>

      {/* Title */}
      <h3 className="text-2xl md:text-3xl font-bold text-forest-text-primary mb-4 tracking-tight">
        You&apos;re on the list! 🎉
      </h3>

      {/* Position Display */}
      <div className="bg-forest-surface-2/40 border border-forest-border/30 rounded-2xl p-6 md:p-8 w-full mb-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold text-forest-accent mb-2 tracking-tighter"
        >
          #{position.toLocaleString()}
        </motion.div>
        <div className="text-xs md:text-sm font-semibold tracking-widest text-forest-text-muted uppercase">
          Your position in queue
        </div>
      </div>

      {/* Message */}
      <p className="text-sm md:text-base text-forest-text-secondary leading-relaxed mb-8 max-w-sm">
        We&apos;ll email <span className="text-forest-text-primary font-medium">{firstName}</span> at{" "}
        <span className="text-forest-text-primary font-medium">{email}</span> when Vora is ready for
        early access.
      </p>

      {/* Share Actions */}
      <div className="w-full flex flex-col gap-3">
        <div className="text-xs font-semibold tracking-widest text-forest-text-muted uppercase mb-1">
          Tell a friend about Vora
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          {/* Twitter / X */}
          <Button
            variant="outline"
            className="flex-1 gap-2 border-forest-border/40 hover:border-forest-accent/50 hover:bg-forest-surface-2 h-12"
            onClick={() => window.open(twitterIntent, "_blank")}
          >
            <Twitter className="w-4 h-4 text-[#1DA1F2]" />
            Share on X
          </Button>

          {/* Copy Link */}
          <Button
            variant="outline"
            className="flex-1 gap-2 border-forest-border/40 hover:border-forest-accent/50 hover:bg-forest-surface-2 h-12"
            onClick={handleCopyLink}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-forest-accent" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-forest-text-muted" />
                Copy Link
              </>
            )}
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
