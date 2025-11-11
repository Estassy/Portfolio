import {
  ArrowRight,
  Boxes,
  Brain,
  ClipboardList,
  Cloud,
  Database,
  FileDown,
  Server,
} from "lucide-react";
import { motion } from "framer-motion";
import PanelWithTabs from "./profileADroite";
import SmoothLink from "../components/SmoothLink";

function Profile() {
  return (
    <section id="home" className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 md:grid-cols-2"
      >
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-neutral-400">
            Full‑Stack • Cloud • DevOps
          </p>
          <h1 className="text-3xl font-bold leading-tight md:text-5xl">
            <span className="block">
              Marc <span className="text-neutral-400">Estassy</span>
            </span>
            <span className="block bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent">
              BATABA
            </span>
            <span className="block text-lg font-normal text-neutral-300 md:text-2xl">
              Ingénieur Logiciel — Full‑Stack & Cloud
            </span>
            <div className="mt-3 flex items-center gap-3">
              <span className="inline-flex items-center rounded-full bg-green-600/20 px-2.5 py-0.5 text-xs font-medium text-green-300 ring-1 ring-green-600/30">Open to work</span>
              <span className="text-xs text-neutral-400">Disponible pour missions & projets</span>
            </div>
          </h1>
          <p className="mt-6 max-w-prose text-neutral-300">
            J’aide à concevoir et déployer des applications web performantes, du back-end Java/Spring
            au front avec des frameworks modernes <span className="whitespace-nowrap">(React / Angular)</span>,
            avec une approche DevOps orientée qualité, automatisation et delivery.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <SmoothLink
              targetId="projects"
              className="inline-flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-neutral-900 hover:bg-white"
            >
              Voir mes projets <ArrowRight className="ml-2 h-4 w-4" />
            </SmoothLink>
            <SmoothLink
              targetId="experiences"
              className="inline-flex items-center rounded-full border border-neutral-700 px-4 py-2 text-sm text-neutral-200 hover:bg-neutral-900"
            >
              <FileDown className="mr-2 h-4 w-4" /> Mon parcours
            </SmoothLink>
          </div>
        </div>
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.45 }}
            className="rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-950 p-6 shadow-2xl"
          >
            {/* top: compact skill tiles */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { icon: <Server className="h-4 w-4" />, label: "Back-end", value: "Java Spring" },
                { icon: <Boxes className="h-4 w-4" />, label: "Front-end", value: "React Angular" },
                { icon: <Brain className="h-4 w-4" />, label: "DevOps", value: "GitLab CI" },
                { icon: <Database className="h-4 w-4" />, label: "Bases de données", value: "Postgres" },
                { icon: <Cloud className="h-4 w-4" />, label: "Cloud", value: "AWS" },
                { icon: <ClipboardList className="h-4 w-4" />, label: "Méthodo", value: "Agile Scrum" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col items-center justify-center rounded-lg border border-neutral-800 bg-neutral-950 p-3 text-center">
                  <div className="mb-1 text-neutral-400">{s.icon}</div>
                  <div className="text-xs uppercase tracking-wider text-neutral-400">{s.label}</div>
                  <div className="mt-1 text-sm font-semibold text-white">{s.value}</div>
                </div>
              ))}
            </div>
            <PanelWithTabs />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
export default Profile;



