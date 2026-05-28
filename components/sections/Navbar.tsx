"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/Button";
import { ThemeToggle } from "../ui/ThemeToggle";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-500",
          {
            "bg-forest-base/80 backdrop-blur-[20px] border-b-[0.5px] border-forest-border/30 py-3":
              isScrolled,
            "bg-transparent py-5": !isScrolled,
          }
        )}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Left: VORA wordmark + small logo */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 cursor-pointer select-none group"
          >
            {/* V-shaped SVG logo */}
            <svg
              className="h-6 w-6 text-forest-accent group-hover:text-forest-accent-light transition-colors duration-300"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4.5l8 14 8-14" />
            </svg>
            <span className="text-xl font-bold tracking-[0.1em] text-forest-text-primary">
              VORA
            </span>
          </div>

          {/* Center: Nav links (desktop) */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-sm font-normal text-forest-text-secondary hover:text-forest-text-primary transition-colors cursor-pointer"
            >
              How it works
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-sm font-normal text-forest-text-secondary hover:text-forest-text-primary transition-colors cursor-pointer"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("platforms")}
              className="text-sm font-normal text-forest-text-secondary hover:text-forest-text-primary transition-colors cursor-pointer"
            >
              Platforms
            </button>
          </div>

          {/* Right: Theme Toggle + Join waitlist (desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Button
              variant="pill-outline"
              size="sm"
              className="h-9 font-medium"
              onClick={() => scrollToSection("waitlist")}
            >
              Join waitlist
            </Button>
          </div>

          {/* Mobile hamburger toggle + Theme toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1 text-forest-text-secondary hover:text-forest-text-primary focus:outline-none transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-forest-base pt-20 flex flex-col md:hidden animate-fade-in">
          <div className="flex flex-col items-center gap-6 py-10 px-6">
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-lg font-medium text-forest-text-secondary hover:text-forest-text-primary py-2 w-full text-center border-b border-forest-border/10 transition-colors"
            >
              How it works
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-lg font-medium text-forest-text-secondary hover:text-forest-text-primary py-2 w-full text-center border-b border-forest-border/10 transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("platforms")}
              className="text-lg font-medium text-forest-text-secondary hover:text-forest-text-primary py-2 w-full text-center border-b border-forest-border/10 transition-colors"
            >
              Platforms
            </button>
            <Button
              variant="pill-outline"
              size="lg"
              className="w-full mt-4 text-base font-semibold"
              onClick={() => scrollToSection("waitlist")}
            >
              Join waitlist
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
