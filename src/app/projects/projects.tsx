import { ExternalLink } from "lucide-react";
import { LINKS } from "../links/linksData";
import { PROJECTS } from "./projectsData";
import { motion } from "framer-motion";

function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-16">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-2xl font-bold md:text-3xl">Projets</h2>
        <a href={LINKS.github} target="_blank" className="text-sm text-neutral-400 hover:text-white" rel="noreferrer">
          Voir tous les repos →
        </a>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {PROJECTS.map((p) => (
          <motion.article
            key={p.slug}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="group rounded-2xl border border-neutral-800 bg-neutral-950 p-5 hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <h3 className="text-lg font-semibold text-white">{p.title}</h3>
            <p className="mt-2 text-sm text-neutral-300">{p.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="rounded-full bg-neutral-900 px-2.5 py-1 text-xs text-neutral-300">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-3">
              <a
                href={p.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-sm text-neutral-200 hover:text-white"
              >
                Code <ExternalLink className="ml-1 h-3.5 w-3.5" />
              </a>
              <span className="text-neutral-700">•</span>
              <a href={p.demo} className="inline-flex items-center text-sm text-neutral-200 hover:text-white">
                Démo <ExternalLink className="ml-1 h-3.5 w-3.5" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
export default Projects;