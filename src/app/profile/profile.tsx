import {
  ArrowRight,
  Boxes,
  Brain,
  ClipboardList,
  Cloud,
  Database,
  MapPin,
  Server,
  Briefcase,
} from "lucide-react";
import { motion } from "framer-motion";
import PanelWithTabs from "./profileADroite";
import SmoothLink from "../components/SmoothLink";
import { useLang } from "../i18n/LangContext";

function Profile() {
  const { t } = useLang();

  const skillTiles = [
    { icon: <Server className="h-4 w-4" />, label: t.profile.skillTiles.backend, value: "Java (Spring / Quarkus)" },
    { icon: <Boxes className="h-4 w-4" />, label: t.profile.skillTiles.frontend, value: "React & Angular" },
    { icon: <Brain className="h-4 w-4" />, label: t.profile.skillTiles.devops, value: "CI/CD & Cloud" },
    { icon: <Database className="h-4 w-4" />, label: t.profile.skillTiles.databases, value: "SQL & NoSQL" },
    { icon: <Cloud className="h-4 w-4" />, label: "API", value: "REST & GraphQL" },
    { icon: <ClipboardList className="h-4 w-4" />, label: t.profile.skillTiles.methodologies, value: "Agile/Kanban" },
  ];

  return (
    <section id="home" className="relative py-8 sm:py-12 md:py-16 lg:py-24 overflow-hidden">
      {/* Background accent glow */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-[120px] accent-glow" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-[400px] w-[400px] rounded-full bg-violet-600/8 blur-[100px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 lg:gap-12 xl:gap-16 lg:grid-cols-2 px-4 sm:px-6"
      >
        <div>
          {/* Avatar + status line */}
          <div className="mb-5 flex items-center gap-4">
            <div className="relative shrink-0">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 text-lg font-bold text-white shadow-lg shadow-indigo-500/25">
                MB
              </div>
              <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-neutral-950 bg-emerald-400" title={t.profile.available} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                Software Engineer • Full‑Stack • Consultant
              </p>
              <div className="mt-1 flex items-center gap-2 text-xs text-neutral-400">
                <Briefcase className="h-3 w-3 text-indigo-400" />
                <span className="font-medium text-indigo-300">Sogeti · CDI</span>
                <span className="text-neutral-600">·</span>
                <MapPin className="h-3 w-3" />
                <span>Aix-en-Provence</span>
              </div>
            </div>
          </div>

          <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl tracking-tight">
            <span className="text-white">Marc Estassy</span>{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
              BATABA
            </span>
          </h1>
          <p className="mt-3 text-base font-medium text-neutral-300 sm:text-lg md:text-xl">
            {t.profile.subtitle}
          </p>

          <div className="mt-4 sm:mt-5 space-y-3 max-w-prose text-sm sm:text-base text-neutral-400 leading-relaxed">
            <p>
              {t.profile.bio1} <span className="text-indigo-300 font-medium">{t.profile.bio1Tech}</span>.
            </p>
            <p>
              {t.profile.bio2} <span className="text-neutral-200 font-medium">{t.profile.bio2Tech}</span> {t.profile.bio2Rest}
            </p>
            <p>
              {t.profile.bio3} <span className="text-indigo-300 font-medium">{t.profile.bio3Tech}</span>.
            </p>
          </div>

          <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <SmoothLink
              targetId="projects"
              className="inline-flex items-center rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 hover:bg-indigo-500 transition-colors"
            >
              {t.profile.ctaProjects} <ArrowRight className="ml-2 h-4 w-4" />
            </SmoothLink>
            <SmoothLink
              targetId="experiences"
              className="inline-flex items-center rounded-full border border-neutral-700 px-5 py-2.5 text-sm text-neutral-300 hover:border-indigo-600/50 hover:text-white transition-colors"
            >
              {t.profile.ctaExperiences}
            </SmoothLink>
          </div>
        </div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.45 }}
            className="rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-950 p-4 sm:p-6 shadow-2xl shadow-black/50 ring-1 ring-white/5"
          >
            {/* top: compact skill tiles */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
              {skillTiles.map((s) => (
                <div
                  key={s.label}
                  className="group flex flex-col items-center justify-center rounded-xl border border-neutral-800 bg-neutral-950 p-2 sm:p-3 text-center transition-all hover:border-indigo-600/40 hover:bg-indigo-950/20"
                >
                  <div className="mb-1 text-neutral-500 group-hover:text-indigo-400 transition-colors">{s.icon}</div>
                  <div className="text-xs uppercase tracking-wider text-neutral-500 hidden sm:block group-hover:text-neutral-400 transition-colors">{s.label}</div>
                  <div className="mt-1 text-xs sm:text-sm font-semibold text-neutral-200">{s.value}</div>
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
