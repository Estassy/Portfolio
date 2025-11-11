"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Remonter"
      className="fixed bottom-6 right-6 z-[60] rounded-full bg-white/90 p-3 text-neutral-900 shadow-xl ring-1 ring-white/30 hover:bg-white"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
