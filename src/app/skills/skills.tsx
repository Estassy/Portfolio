"use client";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, ClipboardList, Database, BookOpen, HardDrive, Monitor, Server, Wrench, FlaskConical } from "lucide-react";
import { useLang } from "../i18n/LangContext";

/** Short descriptions shown in tooltips on hover (desktop only) */
const TECH_INFO: Record<string, string> = {
  "Java":                    "Langage principal — 3+ ans en prod",
  "Python":                  "Automatisation, data & ML",
  "Spring Boot":             "Framework Java REST & microservices",
  "Quarkus":                 "Runtime Java cloud-native (Sogeti)",
  "REST":                    "Architecture API sur tous les projets",
  "GraphQL":                 "Mission France Travail (Sogeti)",
  "JPA/Hibernate":           "ORM Java pour la persistance SQL",
  "Angular":                 "SPA — Sogeti & mission FDJ",
  "React":                   "UI lib — projets perso & Sopra",
  "Vue.js":                  "Framework frontend, projets académiques",
  "TypeScript":              "JS typé, utilisé sur tous les projets front",
  "JavaScript":              "Base du développement web",
  "Bootstrap":               "CSS responsive — mission FDJ",
  "Git":                     "Contrôle de version quotidien",
  "GitLab CI/CD":            "Pipelines CI/CD en production",
  "Docker":                  "Conteneurisation & stages MICROPOLE",
  "Bash":                    "Scripts d'automatisation DevOps",
  "Rancher":                 "Orchestration conteneurs (FDJ)",
  "PostgreSQL":              "SGBD relationnel principal",
  "MongoDB":                 "NoSQL orienté documents",
  "MySQL":                   "SGBD relationnel classique",
  "SQL Server":              "SGBD Microsoft — mission OSIC",
  "Neo4j":                   "Base de données orientée graphe",
  "Drupal":                  "CMS PHP — mission FDJ (Sopra)",
  "Directus":                "CMS Headless — mission France Travail",
  "JUnit":                   "Tests unitaires Java",
  "Jest":                    "Tests unitaires JS/TS",
  "Cypress":                 "Tests end-to-end web",
  "Sonar":                   "Analyse qualité du code",
  "Linting":                 "Vérification statique du style",
  "Code review":             "Revues de code quotidiennes (GitLab)",
  "Agile (Scrum – cert. EXIN)": "Certifié Agile Scrum par EXIN",
  "Agile/Kanban":            "Méthodo Kanban sur missions Sogeti & FDJ",
  "PRINCE2 Foundation":      "Gestion de projet — certification Foundation",
  "Linux":                   "Environnement de développement principal",
  "Windows":                 "Admin réseau & environnement client",
  "NLP":                     "Traitement automatique du langage",
  "TensorFlow":              "Framework deep learning (Google)",
  "PyTorch":                 "Framework deep learning (Meta)",
  "Keras":                   "API haut niveau pour réseaux de neurones",
  "scikit-learn":            "ML classique en Python",
  "NumPy":                   "Calcul scientifique Python",
  "Pandas":                  "Manipulation de données tabulaires",
  "OpenCV":                  "Vision par ordinateur & images",
};

function TechTag({ label }: { label: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const [mounted, setMounted] = useState(false);
  const info = TECH_INFO[label];

  // Only render portal after hydration
  useEffect(() => { setMounted(true); }, []);

  const handleMouseEnter = () => {
    if (!ref.current || !info) return;
    const rect = ref.current.getBoundingClientRect();
    // Clamp x so tooltip never exits viewport (assumes tooltip ~200px wide)
    const halfTooltip = 100;
    const clampedX = Math.max(
      halfTooltip + 8,
      Math.min(window.innerWidth - halfTooltip - 8, rect.left + rect.width / 2)
    );
    setPos({ x: clampedX, y: rect.top - 10 });
  };

  const handleMouseLeave = () => setPos(null);

  return (
    <>
      <span
        ref={ref}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="rounded-full border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-xs text-neutral-400 hover:border-indigo-600/50 hover:bg-indigo-950/30 hover:text-indigo-300 transition-all cursor-default inline-block"
      >
        {label}
      </span>

      {/* Portal: rendered at document.body → no overflow/clipping from parent */}
      {mounted && createPortal(
        <AnimatePresence>
          {pos && (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 6, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.95 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              style={{
                position: "fixed",
                left: pos.x,
                top: pos.y,
                transform: "translate(-50%, -100%)",
                zIndex: 9999,
              }}
              className="pointer-events-none hidden md:block"
              role="tooltip"
            >
              <div className="rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-xs text-neutral-200 shadow-2xl shadow-black/50 w-max max-w-[200px] text-center leading-snug backdrop-blur-sm">
                {info}
              </div>
              {/* Arrow */}
              <div
                style={{ left: "50%", transform: "translateX(-50%)" }}
                className="absolute top-full border-4 border-transparent border-t-neutral-700"
              />
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}

function Skills() {
  const { t } = useLang();

  const categories = [
    { title: t.skills.categories.backend,       icon: <Server className="h-4 w-4" />,       items: ["Java", "Python", "Spring Boot", "Quarkus", "REST", "GraphQL", "JPA/Hibernate"] },
    { title: t.skills.categories.frontend,      icon: <Monitor className="h-4 w-4" />,      items: ["Angular", "React", "Vue.js", "TypeScript", "JavaScript", "Bootstrap"] },
    { title: t.skills.categories.devops,        icon: <Wrench className="h-4 w-4" />,       items: ["Git", "GitLab CI/CD", "Docker", "Bash", "Rancher"] },
    { title: t.skills.categories.databases,     icon: <Database className="h-4 w-4" />,     items: ["PostgreSQL", "MongoDB", "MySQL", "SQL Server", "Neo4j"] },
    { title: t.skills.categories.cms,           icon: <BookOpen className="h-4 w-4" />,     items: ["Drupal", "Directus"] },
    { title: t.skills.categories.tests,         icon: <FlaskConical className="h-4 w-4" />, items: ["JUnit", "Jest", "Cypress", "Sonar", "Linting", "Code review"] },
    { title: t.skills.categories.methodologies, icon: <ClipboardList className="h-4 w-4" />,items: ["Agile (Scrum – cert. EXIN)", "Agile/Kanban", "PRINCE2 Foundation"] },
    { title: t.skills.categories.systems,       icon: <HardDrive className="h-4 w-4" />,    items: ["Linux", "Windows"] },
    { title: t.skills.categories.ai,            icon: <Brain className="h-4 w-4" />,        items: ["NLP", "TensorFlow", "PyTorch", "Keras", "scikit-learn", "NumPy", "Pandas", "OpenCV"] },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };
  const item = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="scroll-mt-24 py-8 sm:py-12 md:py-16">
      <div className="mb-6 sm:mb-10">
        <p className="mb-1 text-xs font-mono text-indigo-400 tracking-widest uppercase">{t.skills.sectionNum}</p>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{t.skills.title}</h2>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0 }}
        className="grid gap-4 sm:gap-6 sm:grid-cols-2"
      >
        {categories.map((cat, idx) => (
          <motion.div
            key={idx}
            variants={item}
            className="group rounded-2xl border border-neutral-800 bg-neutral-950 p-4 sm:p-5 transition-all hover:border-indigo-600/40 hover:bg-indigo-950/10 hover:shadow-lg hover:shadow-indigo-500/5"
          >
            <div className="mb-3 flex items-center gap-2">
              <span className="text-neutral-600 group-hover:text-indigo-400 transition-colors">{cat.icon}</span>
              <h3 className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-neutral-400 group-hover:text-neutral-200 transition-colors">{cat.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((s) => (
                <TechTag key={s} label={s} />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
export default Skills;