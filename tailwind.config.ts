// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Zustand ile body'ye "dark" class'ı ekleyeceğiz
  theme: {
    extend: {
      colors: {
        // Panda temalı renk paletimiz
        white: "#FFFFFF",
        lightGray: "#E8F5E9",       // Hafif yeşilimsi kart arka planı
        darkGray: "#212121",        // Dark mode ana arka plan + başlıklar
        darkGreen: "#2E7D32",       // Bambu gövdeleri, sekundary
        mediumGreen: "#4CAF50",     // Ana aksan (butonlar, linkler)
        lightGreen: "#C8E6C9",      // Hover, yumuşak alanlar
        pastelPink: "#FFCDD2",      // Panda yanakları, sevimli vurgular
        pastelYellow: "#FFF9C4",    // Opsiyonel güneş/gülümseme
      },
      fontFamily: {
        headings: ["var(--font-bubblegum)", "sans-serif"], // Bubblegum Sans
        body: ["var(--font-nunito)", "sans-serif"],       // Nunito
        accent: ["var(--font-sunshiney)", "cursive"],     // Sunshiney
      },
    },
  },
  plugins: [],
};

export default config;