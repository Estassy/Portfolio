import { ExternalLink, Clock } from "lucide-react";
import { LINKS } from "../links/linksData";
import { PROJECTS } from "./projectsData";
import { motion } from "framer-motion";

function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-8 sm:py-12 md:py-16">
      <div className="mb-6 sm:mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="mb-1 text-xs font-mono text-indigo-400 tracking-widest uppercase">01. Work</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Projets</h2>
          </div>
          <a href={LINKS.github} target="_blank" className="text-sm text-neutral-500 hover:text-indigo-300 transition-colors" rel="noreferrer">
            Tous les repos →
          </a>
        </div>
      </div>
      <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
        {PROJECTS.map((p) => {
          const isWip = p.status === "wip";
          return (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: PROJECTS.indexOf(p) * 0.1,
                ease: "easeOut"
              }}
              whileHover={{
                y: isWip ? 0 : -5,
                transition: { duration: 0.2 }
              }}
              className={`group rounded-2xl border p-4 sm:p-5 shadow-lg transition-all duration-300 ${
                isWip
                  ? "border-neutral-800/50 bg-neutral-950/50 opacity-70"
                  : "border-neutral-800 bg-neutral-950 hover:shadow-xl hover:border-neutral-700"
              }`}
            >
              <div className="mb-2 flex items-start justify-between gap-2">
                <h3 className="text-base sm:text-lg font-semibold text-white leading-snug">{p.title}</h3>
                {isWip && (
                  <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-amber-600/40 bg-amber-600/10 px-2 py-0.5 text-xs font-medium text-amber-400">
                    <Clock className="h-3 w-3" /> En cours
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm text-neutral-300">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-neutral-900 px-2.5 py-1 text-xs text-neutral-300">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3">
                {p.repo ? (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center text-sm text-neutral-200 hover:text-white"
                  >
                    Code <ExternalLink className="ml-1 h-3.5 w-3.5" />
                  </a>
                ) : (
                  <span className="inline-flex items-center text-sm text-neutral-600 cursor-not-allowed" title="Repo pas encore disponible">
                    Code <ExternalLink className="ml-1 h-3.5 w-3.5" />
                  </span>
                )}
                <span className="text-neutral-700">•</span>
                {p.demo ? (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center text-sm text-neutral-200 hover:text-white"
                  >
                    Démo <ExternalLink className="ml-1 h-3.5 w-3.5" />
                  </a>
                ) : (
                  <span className="inline-flex items-center text-sm text-neutral-600 cursor-not-allowed" title="Démo pas encore disponible">
                    Démo <ExternalLink className="ml-1 h-3.5 w-3.5" />
                  </span>
                )}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
export default Projects;