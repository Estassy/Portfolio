import { LINKS } from "../links/linksData";

function Footer() {
  return (
    <footer className="border-t border-neutral-900 py-4">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 sm:px-6 text-xs sm:text-sm text-neutral-500 sm:gap-4 md:flex-row md:items-center md:justify-between">
        <p className="select-none text-center sm:text-left">© {new Date().getFullYear()} <span className="bg-gradient-to-r from-neutral-200 to-neutral-400 bg-clip-text text-transparent">Marc Estassy BATABA</span> — Tous droits réservés.</p>
        <div className="flex items-center justify-center gap-4 sm:justify-start">
          <a href={LINKS.github} className="rounded-md px-1 py-0.5 transition hover:text-neutral-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30">GitHub</a>
          <a href={LINKS.linkedin} className="rounded-md px-1 py-0.5 transition hover:text-neutral-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30">LinkedIn</a>
          <a href={LINKS.email} className="rounded-md px-1 py-0.5 transition hover:text-neutral-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30">Email</a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;