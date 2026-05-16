"use client";
import { motion } from "framer-motion";
import { Brain, ClipboardList, Database, BookOpen, HardDrive, Monitor, Server, Wrench, FlaskConical } from "lucide-react";

function Skills() {
  const categories = [
    {
      title: "Back‑end",
      icon: <Server className="h-4 w-4" />,
      items: ["Java", "Python", "Spring Boot", "Quarkus", "REST", "GraphQL", "JPA/Hibernate"],
    },
    {
      title: "Front‑end",
      icon: <Monitor className="h-4 w-4" />,
      items: ["Angular", "React", "Vue.js", "TypeScript", "JavaScript", "Bootstrap"],
    },
    {
      title: "DevOps",
      icon: <Wrench className="h-4 w-4" />,
      items: ["Git", "GitLab CI/CD", "Docker", "Bash", "Rancher"],
    },
    {
      title: "Bases de données",
      icon: <Database className="h-4 w-4" />,
      items: ["PostgreSQL", "MongoDB", "MySQL", "SQL Server", "Neo4j"],
    },
    {
      title: "CMS",
      icon: <BookOpen className="h-4 w-4" />,
      items: ["Drupal", "Directus"],
    },
    {
      title: "Tests & Qualité",
      icon: <FlaskConical className="h-4 w-4" />,
      items: ["JUnit", "Jest", "Cypress", "Sonar", "Linting", "Revue de code"],
    },
    {
      title: "Méthodologies",
      icon: <ClipboardList className="h-4 w-4" />,
      items: ["Agile (Scrum – cert. EXIN)", "Agile/Kanban", "PRINCE2 Foundation"],
    },
    {
      title: "Systèmes",
      icon: <HardDrive className="h-4 w-4" />,
      items: ["Linux", "Windows"],
    },
    {
      title: "IA / Data",
      icon: <Brain className="h-4 w-4" />,
      items: ["NLP", "TensorFlow", "PyTorch", "Keras", "scikit-learn", "NumPy", "Pandas", "OpenCV"],
    },
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
        <p className="mb-1 text-xs font-mono text-indigo-400 tracking-widest uppercase">03. Stack</p>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Compétences</h2>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-4 sm:gap-6 sm:grid-cols-2"
      >
        {categories.map((cat) => (
          <motion.div
            key={cat.title}
            variants={item}
            className="group rounded-2xl border border-neutral-800 bg-neutral-950 p-4 sm:p-5 transition-all hover:border-indigo-600/40 hover:bg-indigo-950/10 hover:shadow-lg hover:shadow-indigo-500/5"
          >
            <div className="mb-3 flex items-center gap-2">
              <span className="text-neutral-600 group-hover:text-indigo-400 transition-colors">{cat.icon}</span>
              <h3 className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-neutral-400 group-hover:text-neutral-200 transition-colors">{cat.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-xs text-neutral-400 hover:border-indigo-600/50 hover:bg-indigo-950/30 hover:text-indigo-300 transition-all cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
export default Skills;