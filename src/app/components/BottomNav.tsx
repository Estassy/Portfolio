"use client";

import { Home, FolderOpen, Briefcase, Cpu, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useLang } from "../i18n/LangContext";

const SECTIONS = [
  { id: "home",        icon: Home },
  { id: "projects",   icon: FolderOpen },
  { id: "experiences",icon: Briefcase },
  { id: "skills",     icon: Cpu },
  { id: "contact",    icon: Mail },
] as const;

interface Props {
  active: string;
  setActive: (id: string) => void;
}

export default function BottomNav({ active, setActive }: Props) {
  const { t } = useLang();

  const labels: Record<string, string> = {
    home:        t.nav.home,
    projects:    t.nav.projects,
    experiences: t.nav.experiences,
    skills:      t.nav.skills,
    contact:     t.nav.contact,
  };

  const handleTap = (id: string) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-[60] md:hidden"
      aria-label="Navigation principale"
    >
      {/* Glass bar */}
      <div className="border-t border-neutral-800/80 bg-neutral-950/80 backdrop-blur-xl px-1 bottom-nav-safe">
        <div className="flex items-stretch justify-around">
          {SECTIONS.map(({ id, icon: Icon }) => {
            const isActive = active === id;
            return (
              <button
                key={id}
                id={`bottom-nav-${id}`}
                onClick={() => handleTap(id)}
                aria-label={labels[id]}
                aria-current={isActive ? "page" : undefined}
                className="relative flex flex-1 flex-col items-center justify-center gap-1 py-2.5 min-h-[56px] transition-colors"
              >
                {/* Active indicator pill */}
                {isActive && (
                  <motion.div
                    layoutId="bottom-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    className="absolute inset-x-2 inset-y-1 rounded-xl bg-indigo-600/15 border border-indigo-600/20"
                  />
                )}

                <Icon
                  className={`relative h-5 w-5 transition-colors ${
                    isActive ? "text-indigo-400" : "text-neutral-500"
                  }`}
                />
                <span
                  className={`relative text-[10px] font-medium leading-none transition-colors ${
                    isActive ? "text-indigo-400" : "text-neutral-600"
                  }`}
                >
                  {labels[id]}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
