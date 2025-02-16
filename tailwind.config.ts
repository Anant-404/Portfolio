import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        glow: "rgba(255, 255, 255, 0.15)",
      },
      boxShadow: {
        glow: "0 0 60px rgba(255, 255, 255, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
