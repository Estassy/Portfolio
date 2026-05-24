"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Theme = "dark" | "light" | "ocean";

interface ThemeContextValue {
  theme: Theme;
  setTheme: (t: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");

  const applyTheme = (t: Theme) => {
    setThemeState(t);
    // Apply directly to <html> so CSS selectors [data-theme="x"] cascade everywhere
    document.documentElement.setAttribute("data-theme", t);
    localStorage.setItem("portfolio-theme", t);
  };

  // Restore saved theme on first mount — runs client-side only
  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme") as Theme | null;
    const initial: Theme =
      saved && ["dark", "light", "ocean"].includes(saved) ? saved : "dark";
    document.documentElement.setAttribute("data-theme", initial);
    setThemeState(initial);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme: applyTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
}
