type Project = {
  slug: string;
  title: string;
  tags: string[];
  description: string;
  repo: string | null;
  demo: string | null;
  status?: string;
};

export const PROJECTS_DATA: Record<"fr" | "en", Project[]> = {
  fr: [
    {
      slug: "jeu-babylon",
      title: "Jeu 3D – Babylon.js",
      tags: ["Babylon.js", "TypeScript", "Blender", "WebGL", "Webpack"],
      description: "Jeu 3D immersif avec Babylon.js et WebGL. Gameplay innovant avec graphics haute performance.",
      repo: "https://github.com/Estassy/JeuBabylon",
      demo: "https://estassy.github.io/JeuBabylon/",
    },
    {
      slug: "exam-management-system",
      title: "ExamEase – Gestion d'examens",
      tags: ["Spring Boot", "React", "PostgreSQL", "JWT"],
      description: "Plateforme web de gestion des examens, utilisateurs (étudiants/enseignants/admins), notifications et résultats.",
      repo: "https://github.com/Estassy/exam-management-system",
      demo: "https://github.com/Estassy/exam-management-system#-aperçu",
    },
    {
      slug: "hackathon-airbus",
      title: "Hackathon Airbus – RL Drone Navigation",
      tags: ["Reinforcement Learning", "Python", "Jupyter", "Multi-Agent"],
      description: "Algorithme RL pour navigation autonome de drones en environnement simulé. Optimisation d'évacuation avec LIDAR et obstacles dynamiques.",
      repo: "https://github.com/Estassy/hackathon_toolkit",
      demo: null,
    },
    {
      slug: "tasks-time",
      title: "Tasks & Time – Full‑Stack",
      tags: ["Spring Boot", "React", "Postgres", "Docker"],
      description: "App de gestion de tâches et suivi de temps avec Auth JWT, CI/CD GitHub Actions et Docker Compose.",
      repo: null,
      demo: null,
      status: "wip",
    },
    {
      slug: "aws-devops",
      title: "Infra AWS – DevOps",
      tags: ["AWS EC2", "Nginx", "HTTPS", "Terraform"],
      description: "Déploiement prod‑like sur EC2 (reverse proxy, Certbot, budgets/alertes), pipeline de déploiement.",
      repo: null,
      demo: null,
      status: "wip",
    },
    {
      slug: "saas-ia",
      title: "Mini‑SaaS IA – Docs Q&A",
      tags: ["RAG", "Embeddings", "Stripe(test)", "React"],
      description: "Upload PDF → embeddings → chat Q&A par document. Auth et quotas. Déploiement Render/DO.",
      repo: null,
      demo: null,
      status: "wip",
    },
  ],
  en: [
    {
      slug: "jeu-babylon",
      title: "3D Game – Babylon.js",
      tags: ["Babylon.js", "TypeScript", "Blender", "WebGL", "Webpack"],
      description: "Immersive 3D game built with Babylon.js and WebGL. Innovative gameplay with high-performance graphics.",
      repo: "https://github.com/Estassy/JeuBabylon",
      demo: "https://estassy.github.io/JeuBabylon/",
    },
    {
      slug: "exam-management-system",
      title: "ExamEase – Exam Management",
      tags: ["Spring Boot", "React", "PostgreSQL", "JWT"],
      description: "Web platform for managing exams, users (students/teachers/admins), notifications and results.",
      repo: "https://github.com/Estassy/exam-management-system",
      demo: "https://github.com/Estassy/exam-management-system#-aperçu",
    },
    {
      slug: "hackathon-airbus",
      title: "Airbus Hackathon – RL Drone Navigation",
      tags: ["Reinforcement Learning", "Python", "Jupyter", "Multi-Agent"],
      description: "RL algorithm for autonomous drone navigation in a simulated environment. Evacuation optimisation with LIDAR and dynamic obstacles.",
      repo: "https://github.com/Estassy/hackathon_toolkit",
      demo: null,
    },
    {
      slug: "tasks-time",
      title: "Tasks & Time – Full‑Stack",
      tags: ["Spring Boot", "React", "Postgres", "Docker"],
      description: "Task management & time tracking app with JWT Auth, CI/CD via GitHub Actions and Docker Compose.",
      repo: null,
      demo: null,
      status: "wip",
    },
    {
      slug: "aws-devops",
      title: "AWS Infra – DevOps",
      tags: ["AWS EC2", "Nginx", "HTTPS", "Terraform"],
      description: "Production-like deployment on EC2 (reverse proxy, Certbot, budgets/alerts), deployment pipeline.",
      repo: null,
      demo: null,
      status: "wip",
    },
    {
      slug: "saas-ia",
      title: "Mini‑SaaS AI – Docs Q&A",
      tags: ["RAG", "Embeddings", "Stripe(test)", "React"],
      description: "Upload PDF → embeddings → per-document Q&A chat. Auth and quotas. Deployed on Render/DO.",
      repo: null,
      demo: null,
      status: "wip",
    },
  ],
};

// Keep PROJECTS export for backwards compatibility
export const PROJECTS = PROJECTS_DATA.fr;
