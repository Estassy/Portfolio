"use client";

import { useLang } from "../i18n/LangContext";
import { motion, AnimatePresence } from "framer-motion";

export default function LangToggle() {
  const { lang, setLang } = useLang();

  return (
    <div
      className="relative flex items-center rounded-full border border-neutral-700 bg-neutral-900 p-0.5 text-xs font-semibold"
      aria-label="Sélection de la langue"
    >
      {/* sliding pill */}
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className={`absolute top-0.5 h-[calc(100%-4px)] w-[calc(50%-2px)] rounded-full bg-indigo-600 ${
          lang === "en" ? "left-[calc(50%+1px)]" : "left-0.5"
        }`}
      />

      <button
        onClick={() => setLang("fr")}
        className={`relative z-10 rounded-full px-2.5 py-1 transition-colors ${
          lang === "fr" ? "text-white" : "text-neutral-400 hover:text-neutral-200"
        }`}
        aria-pressed={lang === "fr"}
        id="lang-toggle-fr"
      >
        FR
      </button>
      <button
        onClick={() => setLang("en")}
        className={`relative z-10 rounded-full px-2.5 py-1 transition-colors ${
          lang === "en" ? "text-white" : "text-neutral-400 hover:text-neutral-200"
        }`}
        aria-pressed={lang === "en"}
        id="lang-toggle-en"
      >
        EN
      </button>
    </div>
  );
}
