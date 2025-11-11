import { FileDown, Github, Linkedin, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import IconLink from "../links/iconLink";
import { LINKS } from "../links/linksData";

function Header({ active, setActive }: { active: string; setActive: (k: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const items = [
    { id: "home", label: "Accueil" },
    { id: "projects", label: "Projets" },
    { id: "skills", label: "Compétences" },
    { id: "experiences", label: "Expériences" },
    { id: "contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="text-lg font-semibold tracking-wide" aria-label="Identité du portfolio">
          <span className="font-medium text-neutral-200">Marc <span className="text-neutral-400">Estassy</span></span>{' '}
          <span className="bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent">BATABA</span>
        </div>
        <ul className="relative hidden gap-6 md:flex">
          {items.map((it) => (
            <li key={it.id}>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  setActive(it.id);
                  document.getElementById(it.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={
                  "relative cursor-pointer px-1.5 pb-1 text-sm text-neutral-300 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded-sm " +
                  (active === it.id ? " font-semibold" : "")
                }
              >
                {it.label}
                {active === it.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-0.5 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-white/80 via-white/60 to-white/80"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-neutral-300 hover:text-white"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          <IconLink href={LINKS.github} icon={<Github className="h-5 w-5" />} label="GitHub" />
          <IconLink href={LINKS.linkedin} icon={<Linkedin className="h-5 w-5" />} label="LinkedIn" />
          <a
            href={LINKS.cv}
            className="hidden rounded-full border border-neutral-700 px-3 py-1.5 text-sm text-neutral-200 hover:bg-neutral-900 md:inline-flex"
          >
            <FileDown className="mr-2 h-4 w-4" /> CV
          </a>
        </div>
      </nav>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        className="overflow-hidden md:hidden"
      >
        <ul className="flex flex-col gap-4 px-4 py-4 bg-neutral-950/90 backdrop-blur">
          {items.map((it) => (
            <li key={it.id}>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  setActive(it.id);
                  document.getElementById(it.id)?.scrollIntoView({ behavior: 'smooth' });
                  setIsOpen(false);
                }}
                className={
                  "block py-2 text-sm text-neutral-300 hover:text-white transition-colors " +
                  (active === it.id ? " font-semibold" : "")
                }
              >
                {it.label}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </header>
  );
}
export default Header;