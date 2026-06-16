import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#6D4AFF",
          secondary: "#A78BFA",
          accent: "#E9C46A",
          ink: "#111827",
          paper: "#FFFFFF",
        },
      },
      boxShadow: {
        glow: "0 0 40px rgba(109, 74, 255, 0.18)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top, rgba(109,74,255,0.24), transparent 45%), radial-gradient(circle at 80% 20%, rgba(233,196,106,0.18), transparent 30%), linear-gradient(180deg, #ffffff 0%, #f8f6ff 100%)",
      },
      fontFamily: {
        sans: ["var(--font-body)", "sans-serif"],
        display: ["var(--font-display)", "serif"],
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -10px, 0)" },
        },
        drift: {
          "0%": { transform: "translate3d(-2%, 0, 0) scale(1)" },
          "50%": { transform: "translate3d(2%, -3%, 0) scale(1.03)" },
          "100%": { transform: "translate3d(-2%, 0, 0) scale(1)" },
        },
      },
      animation: {
        floaty: "floaty 8s ease-in-out infinite",
        drift: "drift 14s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
