// components/ThemeProvider.tsx
"use client";

import { useEffect } from "react";
import { useThemeStore } from "../stores/themeStore";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useThemeStore();

  useEffect(() => {
    // Theme değişince body'ye dark class ekle/çıkar
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return <>{children}</>;
}