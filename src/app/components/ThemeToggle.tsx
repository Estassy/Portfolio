"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme, Theme } from "../i18n/ThemeContext";
import { Monitor, Sun, Waves } from "lucide-react";

const THEMES: { id: Theme; label: string; icon: React.ReactNode; colors: [string, string] }[] = [
  {
    id: "dark",
    label: "Dark",
    icon: <Monitor className="h-3.5 w-3.5" />,
    colors: ["#0a0a0a", "#6366f1"],
  },
  {
    id: "light",
    label: "Light",
    icon: <Sun className="h-3.5 w-3.5" />,
    colors: ["#f8fafc", "#6366f1"],
  },
  {
    id: "ocean",
    label: "Ocean",
    icon: <Waves className="h-3.5 w-3.5" />,
    colors: ["#060d1f", "#38bdf8"],
  },
];

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = THEMES.find((t) => t.id === theme)!;

  // Close on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative" aria-label="Sélection du thème">
      {/* Trigger button */}
      <button
        id="theme-toggle-btn"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 rounded-full border border-neutral-700 bg-neutral-900 px-2.5 py-1 text-xs font-semibold text-neutral-300 hover:border-neutral-600 hover:text-white transition-all"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {/* Color dot */}
        <span
          className="h-2.5 w-2.5 rounded-full border border-white/20 flex-shrink-0"
          style={{
            background: `linear-gradient(135deg, ${current.colors[0]} 50%, ${current.colors[1]} 50%)`,
          }}
        />
        <span className="hidden sm:inline">{current.label}</span>
        <motion.svg
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="h-3 w-3 opacity-60"
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M2 4l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            role="listbox"
            initial={{ opacity: 0, y: -6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.96 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute right-0 top-full mt-2 w-36 origin-top-right rounded-xl border border-neutral-800 bg-neutral-900 p-1 shadow-2xl shadow-black/60 backdrop-blur-sm z-50"
          >
            {THEMES.map((t) => (
              <button
                key={t.id}
                id={`theme-option-${t.id}`}
                role="option"
                aria-selected={theme === t.id}
                onClick={() => {
                  setTheme(t.id);
                  setOpen(false);
                }}
                className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-xs transition-all ${
                  theme === t.id
                    ? "bg-indigo-600/20 text-indigo-300 font-semibold"
                    : "text-neutral-400 hover:bg-neutral-800 hover:text-neutral-200"
                }`}
              >
                {/* Swatch */}
                <span
                  className="h-4 w-4 flex-shrink-0 rounded-full border border-white/15 shadow-sm"
                  style={{
                    background: `linear-gradient(135deg, ${t.colors[0]} 50%, ${t.colors[1]} 50%)`,
                  }}
                />
                <span className="flex items-center gap-1.5">
                  {t.icon}
                  {t.label}
                </span>
                {theme === t.id && (
                  <motion.span
                    layoutId="theme-check"
                    className="ml-auto text-indigo-400"
                  >
                    ✓
                  </motion.span>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
