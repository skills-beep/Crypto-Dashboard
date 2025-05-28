
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#0A0A0B",
        foreground: "#FAFAF9",
        primary: {
          DEFAULT: "#00D4FF",
          foreground: "#0A0A0B",
        },
        secondary: {
          DEFAULT: "#1A1A1D",
          foreground: "#FAFAF9",
        },
        success: {
          DEFAULT: "#10B981",
          foreground: "#FAFAF9",
        },
        warning: {
          DEFAULT: "#F59E0B",
          foreground: "#FAFAF9",
        },
        danger: {
          DEFAULT: "#EF4444",
          foreground: "#FAFAF9",
        },
        muted: {
          DEFAULT: "#374151",
          foreground: "#9CA3AF",
        },
        accent: {
          DEFAULT: "#00D4FF",
          foreground: "#0A0A0B",
        },
        card: {
          DEFAULT: "#111111",
          foreground: "#FAFAF9",
        },
        neon: {
          blue: "#00D4FF",
          green: "#10B981",
          purple: "#8B5CF6",
        },
      },
      borderRadius: {
        lg: "1rem",
        md: "0.75rem",
        sm: "0.5rem",
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        "slide-up": "slide-up 0.5s ease-out",
        "glow": "glow 2s ease-in-out infinite alternate",
        "hover-lift": "hover-lift 0.3s ease-out",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "glow": {
          "0%": { boxShadow: "0 0 5px #00D4FF" },
          "100%": { boxShadow: "0 0 20px #00D4FF, 0 0 30px #00D4FF" },
        },
        "hover-lift": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-4px)" },
        },
      },
      boxShadow: {
        'glow': '0 0 20px rgba(0, 212, 255, 0.3)',
        'glow-green': '0 0 20px rgba(16, 185, 129, 0.3)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
