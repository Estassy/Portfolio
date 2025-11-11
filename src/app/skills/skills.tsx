import { motion } from "framer-motion";
import { Brain, ClipboardList, Database, BookOpen, HardDrive, Monitor, Server, Wrench, FlaskConical } from "lucide-react";

function Skills() {
  const categories = [
    {
      title: "Back‑end",
      icon: <Server className="h-4 w-4" />,
      items: ["Java", "Python", "Spring Boot/Data/Security", "REST", "JPA/Hibernate"],
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
      items: ["Drupal"],
    },
    {
      title: "Tests & Qualité",
      icon: <FlaskConical className="h-4 w-4" />,
      items: ["JUnit", "Jest", "Cypress", "Sonar", "Linting", "Revue de code"],
    },
    {
      title: "Méthodologies",
      icon: <ClipboardList className="h-4 w-4" />,
      items: ["Agile (Scrum – cert. EXIN)", "PRINCE2 Foundation"],
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
    <section id="skills" className="scroll-mt-24 py-16">
      <h2 className="mb-6 text-2xl font-bold md:text-3xl">Compétences</h2>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-6 sm:grid-cols-2"
      >
        {categories.map((cat) => (
          <motion.div
            key={cat.title}
            variants={item}
            className="rounded-2xl border border-neutral-800 bg-neutral-950 p-5 transition group hover:border-neutral-700 hover:bg-neutral-900/90 focus-within:border-neutral-600"
          >
            <div className="mb-3 flex items-center gap-2 text-neutral-300">
              {cat.icon}
              <h3 className="text-sm font-semibold tracking-wide uppercase">{cat.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-xs text-neutral-300 hover:border-neutral-700 hover:bg-neutral-800/80 transition-colors"
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