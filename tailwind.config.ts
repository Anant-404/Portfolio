import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          lg: "80px",
        },
      },
      // colors: {
      //   glow: "rgba(255, 255, 255, 0.15)",
      // },
      boxShadow: {
        glow: "0 0 60px rgba(255, 255, 255, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
