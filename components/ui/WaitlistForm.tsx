"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { GlowButton } from "./GlowButton";

interface WaitlistFormProps {
  onSuccess: (data: { firstName: string; email: string; position: number }) => void;
}

const PLATFORMS = [
  { id: "instagram", label: "Instagram" },
  { id: "tiktok", label: "TikTok" },
  { id: "youtube", label: "YouTube" },
  { id: "reddit", label: "Reddit" },
  { id: "x", label: "X / Twitter" },
  { id: "linkedin", label: "LinkedIn" },
];

export const WaitlistForm: React.FC<WaitlistFormProps> = ({ onSuccess }) => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const togglePlatform = (id: string) => {
    setSelectedPlatforms((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Basic client validation
    if (!firstName.trim()) {
      setError("Please enter your first name.");
      setLoading(false);
      return;
    }
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: firstName.trim(),
          email: email.trim(),
          platform: selectedPlatforms,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.error === "already_registered") {
          // Custom treatment for already registered waitlist entries
          onSuccess({
            firstName: data.firstName || firstName,
            email: email,
            position: data.position,
          });
          return;
        }
        throw new Error(data.error || "Something went wrong.");
      }

      onSuccess({
        firstName: data.firstName,
        email: data.email,
        position: data.position,
      });
    } catch (err: any) {
      console.error("Submission error", err);
      setError(err.message || "Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
      {/* Rotating Conic Border Wrapper (Visual Effect 6) */}
      <div className="rotating-border-container shadow-2xl">
        <div className="rotating-border-inner bg-forest-surface p-6 md:p-8 flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* First Name Input */}
            <div className="flex-1">
              <input
                type="text"
                placeholder="Your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                disabled={loading}
                className="w-full h-[52px] bg-forest-surface-2/80 border border-forest-border/40 hover:border-forest-border/60 focus:border-forest-accent rounded-xl px-4 text-forest-text-primary text-base font-normal placeholder-forest-text-muted focus:outline-none focus:ring-4 focus:ring-forest-accent/15 transition-all disabled:opacity-50"
              />
            </div>

            {/* Email Input */}
            <div className="flex-[2]">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                className="w-full h-[52px] bg-forest-surface-2/80 border border-forest-border/40 hover:border-forest-border/60 focus:border-forest-accent rounded-xl px-4 text-forest-text-primary text-base font-normal placeholder-forest-text-muted focus:outline-none focus:ring-4 focus:ring-forest-accent/15 transition-all disabled:opacity-50"
              />
            </div>
          </div>

          {/* Platform preferences checkboxes */}
          <div className="mt-2">
            <label className="block text-[11px] font-semibold tracking-widest text-forest-text-muted uppercase mb-3">
              What do you mainly save from?
            </label>
            <div className="flex flex-wrap gap-2">
              {PLATFORMS.map((platform) => {
                const isSelected = selectedPlatforms.includes(platform.id);
                return (
                  <button
                    key={platform.id}
                    type="button"
                    onClick={() => togglePlatform(platform.id)}
                    disabled={loading}
                    className={cn(
                      "h-9 px-3.5 rounded-full text-xs font-semibold tracking-wide border transition-all active:scale-[0.98] cursor-pointer disabled:opacity-50",
                      {
                        "bg-forest-accent border-transparent text-white shadow-md":
                          isSelected,
                        "bg-transparent border-forest-border/50 text-forest-text-secondary hover:border-forest-accent/50 hover:text-forest-text-primary":
                          !isSelected,
                      }
                    )}
                  >
                    {platform.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Error state */}
      {error && (
        <div className="bg-[#2E1A1A] border border-red-500/50 rounded-xl p-3 px-4 text-center text-sm text-red-300 font-medium">
          {error}
        </div>
      )}

      {/* Submit Button */}
      <GlowButton type="submit" loading={loading} className="w-full h-14" size="lg">
        {loading ? "Joining..." : "Join the waitlist →"}
      </GlowButton>
    </form>
  );
};
