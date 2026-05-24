"use client";

import React, { createContext, useContext, useState } from "react";
import { Lang, translations } from "./translations";

// Use a type that's compatible with both locales by using the structure
// (the actual values differ per locale, so we widen string literals to string)
type DeepMutable<T> = T extends object
  ? { [K in keyof T]: DeepMutable<T[K]> }
  : string;

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: DeepMutable<typeof translations.fr>;
}

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");

  return (
    <LangContext.Provider
      value={{ lang, setLang, t: translations[lang] as DeepMutable<typeof translations.fr> }}
    >
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LangProvider");
  return ctx;
}
