"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    // Safely sync with document.documentElement on mounting
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      setTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center justify-between w-14 h-8 bg-forest-surface-2 border border-forest-border/40 rounded-full p-1 cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-forest-accent/50"
      aria-label="Toggle theme"
    >
      <Moon className="w-3.5 h-3.5 text-forest-accent-light z-10 ml-1" />
      <Sun className="w-3.5 h-3.5 text-amber-500 z-10 mr-1" />
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="absolute left-1 w-6 h-6 bg-forest-accent rounded-full shadow-md z-0"
        animate={{
          x: theme === "dark" ? 0 : 22,
        }}
      />
    </button>
  );
};
