// stores/themeStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";  // LocalStorage persist için (Zustand 5+)

type Theme = "light" | "dark";

interface ThemeStore {
  theme: Theme;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: "light",
      toggleTheme: () => set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
    }),
    { name: "theme-storage" }  // LocalStorage key
  )
);