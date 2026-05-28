import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
      },
      colors: {
        forest: {
          base: "var(--base-color)",          // Deepest background
          surface: "var(--surface-color)",    // Main page background
          "surface-2": "var(--surface-color-2)", // Cards, sections
          "surface-3": "var(--surface-color-3)", // Elevated elements
          border: "var(--border-color)",      // Borders, dividers
          "border-subtle": "var(--border-subtle-color)", // Very subtle borders
          accent: "#3D9970",                  // Original Vora green
          "accent-light": "#5AB88A",          // Original Vora green hover
          highlight: "#C8E6C9",               // Original Vora green highlight
          // Text values
          "text-primary": "var(--text-primary-color)",
          "text-secondary": "var(--text-secondary-color)",
          "text-muted": "var(--text-muted-color)",
        },
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(180deg, #0A1208 0%, #0E1A12 40%, #0A1208 100%)",
        "gradient-radial-glow": "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(61,153,112,0.2) 0%, transparent 70%)",
        "gradient-cursor-glow": "radial-gradient(300px circle at var(--x, 0px) var(--y, 0px), rgba(61,153,112,0.06), transparent 70%)",
      },
      boxShadow: {
        // Visual Effect 5: Glow button shadow
        "glow-btn": "0 0 20px rgba(61,153,112,0.4), 0 0 60px rgba(61,153,112,0.15), inset 0 1px 0 rgba(255,255,255,0.1)",
        "glow-btn-hover": "0 0 30px rgba(61,153,112,0.6), 0 0 80px rgba(61,153,112,0.25), inset 0 1px 0 rgba(255,255,255,0.15)",
        // Visual Effect 4: Glassmorphic shadow
        "glass-card": "0 0 0 0.5px rgba(46,107,62,0.3), 0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(90,184,138,0.1)",
        // Phone shadow
        "phone-mock": "0 0 0 1px rgba(46,107,62,0.2), 0 40px 80px rgba(0,0,0,0.6), 0 0 120px rgba(61,153,112,0.1)",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "pulse-subtle": "pulse-subtle 2s ease-in-out infinite",
        "float-slow": "float 5s ease-in-out infinite",
      },
      keyframes: {
        "pulse-subtle": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: ".5", transform: "scale(0.92)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      borderRadius: {
        sm: "6px",
        md: "12px",
        lg: "16px",
        xl: "24px",
      },
    },
  },
  plugins: [],
};
export default config;
