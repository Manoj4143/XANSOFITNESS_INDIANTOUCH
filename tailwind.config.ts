import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F8FAF7",
        surface: "#FFFFFF",
        surfaceVariant: "#ECEEEB",
        "forest-deep": "#0E2318",
        "forest-surface": "#163324",
        "lime-accent": "#D4FA70",
        "lime-text": "#1E3A0F",
        "neutral-surface": "#E8EBE6",
        "neutral-light": "#F8FAF7",
        charcoal: "#181A18",
        "muted-gray": "#707570",
        primary: {
          DEFAULT: "#4F6700",
          container: "#D4FA70",
          hover: "#3E5200",
        },
        "text-main": "#191C1B",
        text: {
          main: "#191C1B",
          muted: "#707570",
          subtle: "#8E938D",
        },
        border: "#E1E3E0",
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "var(--font-sans)", "system-ui", "sans-serif"],
        display: ["'Playfair Display'", "var(--font-display)", "Georgia", "serif"],
        accent: ["Caveat", "var(--font-accent)", "cursive"],
      },
      boxShadow: {
        soft: "0 10px 40px -10px rgba(14,35,24,0.06)",
        card: "0 4px 24px -2px rgba(14,35,24,0.05), 0 1px 3px 0 rgba(14,35,24,0.03)",
        elevated: "0 20px 40px -8px rgba(14,35,24,0.12), 0 4px 12px -2px rgba(14,35,24,0.04)",
      },
      borderRadius: {
        button: "9999px",
        card: "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
