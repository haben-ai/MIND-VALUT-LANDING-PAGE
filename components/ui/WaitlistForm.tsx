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
      {/* Duolingo-Style 3D Slate Card Container */}
      <div className="bg-white text-slate-900 border-2 border-b-[6px] border-slate-200 dark:bg-[#202F36] dark:text-white dark:border-[#3C4F58] p-6 md:p-8 rounded-3xl flex flex-col gap-5 shadow-xl relative z-10">
        <div className="flex flex-col md:flex-row gap-4">
          {/* First Name Input */}
          <div className="relative flex-1">
            <input
              type="text"
              id="firstName"
              placeholder=" "
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              disabled={loading}
              className="peer w-full h-[58px] pt-5 pb-1 px-4 bg-slate-50 border-2 border-slate-200 hover:border-slate-300 focus:border-forest-accent rounded-2xl text-black text-base font-bold focus:outline-none focus:ring-4 focus:ring-forest-accent/10 transition-all dark:bg-slate-900 dark:border-slate-700 dark:hover:border-slate-600 dark:focus:border-forest-accent dark:text-white disabled:opacity-50"
            />
            <label
              htmlFor="firstName"
              className="absolute left-4 top-[18px] text-slate-400 dark:text-slate-500 font-bold pointer-events-none transition-all duration-200 origin-left
                peer-placeholder-shown:top-[18px] peer-placeholder-shown:scale-100
                peer-focus:top-2 peer-focus:scale-75 peer-focus:text-forest-accent
                peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:scale-75"
            >
              Your first name
            </label>
          </div>

          {/* Email Input */}
          <div className="relative flex-[2]">
            <input
              type="email"
              id="email"
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              className="peer w-full h-[58px] pt-5 pb-1 px-4 bg-slate-50 border-2 border-slate-200 hover:border-slate-300 focus:border-forest-accent rounded-2xl text-black text-base font-bold focus:outline-none focus:ring-4 focus:ring-forest-accent/10 transition-all dark:bg-slate-900 dark:border-slate-700 dark:hover:border-slate-600 dark:focus:border-forest-accent dark:text-white disabled:opacity-50"
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-[18px] text-slate-400 dark:text-slate-500 font-bold pointer-events-none transition-all duration-200 origin-left
                peer-placeholder-shown:top-[18px] peer-placeholder-shown:scale-100
                peer-focus:top-2 peer-focus:scale-75 peer-focus:text-forest-accent
                peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:scale-75"
            >
              your@email.com
            </label>
          </div>
        </div>

        {/* Platform preferences checkboxes */}
        <div className="mt-2">
          <label className="block text-[11px] font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase mb-3">
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
                    "h-10 px-4 rounded-full text-xs font-bold tracking-wide border-2 transition-all active:scale-[0.98] cursor-pointer disabled:opacity-50",
                    {
                      "bg-forest-accent border-transparent text-white shadow-md":
                        isSelected,
                      "bg-slate-50 border-slate-200 text-slate-600 hover:border-forest-accent/50 hover:text-black dark:bg-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:border-forest-accent/50 dark:hover:text-white":
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

      {/* Error state */}
      {error && (
        <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-4 text-center text-sm text-red-600 font-bold dark:bg-red-950/20 dark:border-red-900/50 dark:text-red-400">
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
