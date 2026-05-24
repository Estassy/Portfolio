type SubExperience = {
  id: string;
  title: string;
  type: string;
  period: string;
  duration?: string;
  description: string;
  missions: string[];
  highlights?: string[];
};

type Experience = {
  id: string;
  title: string;
  company: string;
  type: string;
  location: string;
  period: string;
  duration: string;
  description: string;
  client?: string;
  isGrouped?: boolean;
  subExperiences?: SubExperience[];
  missions?: string[];
  technologies: string[];
  highlights: string[];
  isCurrent?: boolean;
};

export const ExperiencesData: Experience[] = [
  {
    id: "sogeti",
    title: "Software Engineer – Java / Angular",
    company: "Sogeti",
    type: "CDI",
    location: "Aix-en-Provence",
    period: "Mai 2026 — Aujourd'hui",
    duration: "En cours",
    description:
      "Consultant au sein de l'unité Digital de Sogeti, en mission chez France Travail sur la modernisation de services numériques.",
    missions: [
      "Développement Full-Stack (Backend Java Spring Boot / Frontend Angular)",
      "Mise en place et configuration du CMS Headless Directus pour la gestion de contenu dynamique",
      "Conception d'API REST et intégration de services via GraphQL",
      "Participation aux évolutions techniques dans un environnement Agile/Kanban",
      "Focus sur la qualité logicielle, le Clean Code et le CI/CD",
    ],
    technologies: ["Java 17", "Spring Boot", "Angular", "Directus", "GraphQL", "PostgreSQL", "GitLab CI/CD"],
    highlights: ["Mission France Travail", "CMS Headless Directus", "GraphQL", "Agile/Kanban"],
    isCurrent: true,
  },
  {
    id: "sopra-steria-group",
    title: "Développeur Full‑Stack",
    company: "SOPRA Steria",
    type: "Évolution professionnelle",
    location: "Aix‑en‑Provence",
    period: "Septembre 2024 — Avril 2026",
    duration: "1 an 7 mois",
    client: "La Française des Jeux (FDJ)",
    description: "Parcours complet chez Sopra Steria : de l'alternance au CDI sur la mission FDJ",
    isGrouped: true,
    subExperiences: [
      {
        id: "sopra-steria-cdi",
        title: "CDI - Nouvelle équipe",
        type: "CDI",
        period: "Octobre 2025 — Avril 2026",
        duration: "7 mois",
        description: "Poursuite de la mission FDJ dans une nouvelle équipe avec un périmètre fonctionnel élargi",
        missions: [
          "Participation aux développements et aux évolutions techniques",
          "Analyse des besoins fonctionnels et contribution aux ateliers de cadrage",
          "Collaboration quotidienne avec les équipes FDJ (métier, PO, QA...)",
          "Workflows Agile SAFe et coordination multi-équipes",
          "Évolution et maintenance d'applications métier Java/Spring Boot à forte valeur ajoutée",
          "Contribution à l'amélioration de la qualité logicielle (revues de code, Sonar, CI/CD)",
        ],
        highlights: ["Évolution Alternance → CDI", "Nouvelle équipe", "Périmètre élargi"],
      },
      {
        id: "sopra-steria-alternance",
        title: "Alternance - Première équipe",
        type: "Alternance",
        period: "Septembre 2024 — Septembre 2025",
        duration: "1 an",
        description: "Débuts chez Sopra Steria en alternance sur la mission FDJ",
        missions: [
          "Refonte et évolution des applications Resocom et Pjeux",
          "Conception de nouvelles fonctionnalités et évolution du socle applicatif",
          "Planification et prise en charge d'User Stories en méthodologie Agile SAFe",
          "Contribution à la qualité logicielle, la gestion des livraisons et le suivi des retours QA",
          "Contribution au CMS Drupal et intégration continue avec GitLab CI/CD, Rancher",
          "Rédaction de documentation technique pour assurer la maintenabilité des solutions développées",
        ],
        highlights: ["Mission client prestigieux (FDJ)", "Méthodologie Agile SAFe", "CI/CD production"],
      },
    ],
    technologies: ["Java", "Spring Boot", "React.js", "Agile SAFe", "GitLab CI/CD", "Bootstrap", "Drupal"],
    highlights: ["Évolution Alternance → CDI", "Continuité mission FDJ", "Multi-équipes", "1+ an d'expérience"],
  },
  {
    id: "micropole",
    title: "Développeur Full‑Stack",
    company: "MICROPOLE",
    type: "Stage",
    location: "Aix‑en‑Provence",
    period: "Avril 2024 — Août 2024",
    duration: "5 mois",
    description: "Stage de fin d'études en développement full‑stack",
    missions: [
      "Développement et tests unitaires sur applications web complexes",
      "Conception et mise en œuvre de pipelines CI/CD pour automatiser les processus de déploiement",
      "Collaboration avec les équipes de développement et d'opérations pour améliorer les processus DevOps",
      "Analyse des besoins et contribution à la phase d'analyse technique",
      "Rédaction de documentation technique complète",
    ],
    technologies: ["Java", "Spring Boot", "Angular", "GitLab CI", "Bash", "Docker"],
    highlights: ["Automatisation CI/CD", "Collaboration DevOps", "Tests unitaires"],
  },
  {
    id: "osic",
    title: "Développeur Python",
    company: "OSIC",
    type: "Alternance",
    location: "Marseille",
    period: "Août 2022 — Août 2023",
    duration: "1 an",
    description: "Première expérience professionnelle en développement Python",
    missions: [
      "Développement d'une application d'automatisation pour le détourage automatique d'images scannées",
      "Utilisation avancée de Python pour le traitement de fichiers CSV et manipulation de données",
      "Gestion de la documentation GED en utilisant Novaxel et SQL",
      "Responsabilité de la gestion du parc réseau et rédaction de documentation technique",
    ],
    technologies: ["Python", "SQL Server", "SQLAlchemy", "Novaxel", "Edocs", "CSV Processing"],
    highlights: ["Automatisation d'images", "Traitement de données", "Gestion système"],
  },
];

export const ExperiencesDataEn: Experience[] = [
  {
    id: "sogeti",
    title: "Software Engineer – Java / Angular",
    company: "Sogeti",
    type: "Permanent",
    location: "Aix-en-Provence",
    period: "May 2026 — Present",
    duration: "Ongoing",
    description:
      "Consultant within Sogeti's Digital unit, on assignment at France Travail modernising digital services.",
    missions: [
      "Full-Stack development (Backend Java Spring Boot / Frontend Angular)",
      "Setup and configuration of the Directus Headless CMS for dynamic content management",
      "REST API design and service integration via GraphQL",
      "Contributing to technical evolution in an Agile/Kanban environment",
      "Focus on software quality, Clean Code and CI/CD",
    ],
    technologies: ["Java 17", "Spring Boot", "Angular", "Directus", "GraphQL", "PostgreSQL", "GitLab CI/CD"],
    highlights: ["France Travail project", "Directus Headless CMS", "GraphQL", "Agile/Kanban"],
    isCurrent: true,
  },
  {
    id: "sopra-steria-group",
    title: "Full‑Stack Developer",
    company: "SOPRA Steria",
    type: "Career progression",
    location: "Aix‑en‑Provence",
    period: "September 2024 — April 2026",
    duration: "1 year 7 months",
    client: "La Française des Jeux (FDJ)",
    description: "Complete journey at Sopra Steria: from apprenticeship to permanent contract on the FDJ project",
    isGrouped: true,
    subExperiences: [
      {
        id: "sopra-steria-cdi",
        title: "Permanent – New team",
        type: "CDI",
        period: "October 2025 — April 2026",
        duration: "7 months",
        description: "Continuation of the FDJ mission within a new team with an expanded functional scope",
        missions: [
          "Participating in developments and technical evolutions",
          "Analysing functional requirements and contributing to scoping workshops",
          "Daily collaboration with FDJ teams (business, PO, QA...)",
          "Agile SAFe workflows and multi-team coordination",
          "Evolution and maintenance of high-value Java/Spring Boot business applications",
          "Contributing to software quality improvement (code reviews, Sonar, CI/CD)",
        ],
        highlights: ["Apprenticeship → Permanent", "New team", "Expanded scope"],
      },
      {
        id: "sopra-steria-alternance",
        title: "Apprenticeship – First team",
        type: "Alternance",
        period: "September 2024 — September 2025",
        duration: "1 year",
        description: "Started at Sopra Steria as an apprentice on the FDJ mission",
        missions: [
          "Redesign and evolution of Resocom and Pjeux applications",
          "Design of new features and evolution of the application core",
          "Planning and handling User Stories in Agile SAFe methodology",
          "Contributing to software quality, release management and QA feedback tracking",
          "Contributions to the Drupal CMS and continuous integration with GitLab CI/CD, Rancher",
          "Writing technical documentation to ensure maintainability",
        ],
        highlights: ["Prestigious client project (FDJ)", "Agile SAFe methodology", "Production CI/CD"],
      },
    ],
    technologies: ["Java", "Spring Boot", "React.js", "Agile SAFe", "GitLab CI/CD", "Bootstrap", "Drupal"],
    highlights: ["Apprenticeship → Permanent", "FDJ mission continuity", "Multi-team", "1+ year experience"],
  },
  {
    id: "micropole",
    title: "Full‑Stack Developer",
    company: "MICROPOLE",
    type: "Internship",
    location: "Aix‑en‑Provence",
    period: "April 2024 — August 2024",
    duration: "5 months",
    description: "End-of-studies internship in full‑stack development",
    missions: [
      "Development and unit testing on complex web applications",
      "Design and implementation of CI/CD pipelines to automate deployment processes",
      "Collaboration with development and operations teams to improve DevOps processes",
      "Requirements analysis and contribution to the technical analysis phase",
      "Writing comprehensive technical documentation",
    ],
    technologies: ["Java", "Spring Boot", "Angular", "GitLab CI", "Bash", "Docker"],
    highlights: ["CI/CD automation", "DevOps collaboration", "Unit testing"],
  },
  {
    id: "osic",
    title: "Python Developer",
    company: "OSIC",
    type: "Apprenticeship",
    location: "Marseille",
    period: "August 2022 — August 2023",
    duration: "1 year",
    description: "First professional experience in Python development",
    missions: [
      "Development of an automation application for automatic cutout of scanned images",
      "Advanced use of Python for CSV file processing and data manipulation",
      "GED document management using Novaxel and SQL",
      "Network infrastructure management and technical documentation writing",
    ],
    technologies: ["Python", "SQL Server", "SQLAlchemy", "Novaxel", "Edocs", "CSV Processing"],
    highlights: ["Image automation", "Data processing", "System management"],
  },
];
