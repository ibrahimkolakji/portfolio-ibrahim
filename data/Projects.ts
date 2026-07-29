export type LocalizedText = {
  de: string;
  en: string;
};

export type Project = {
  title: string;
  category: LocalizedText;
  description: LocalizedText;
  technologies: string[];
  highlights: LocalizedText[];
  image?: string;
  github?: string;
  live?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    title: "BRIGHT UX Redesign",
    category: {
      de: "Bachelorarbeit · UX & Webentwicklung",
      en: "Bachelor’s Thesis · UX & Web Development",
    },
    description: {
      de: "Nutzerzentrierte Analyse und Neugestaltung einer Unternehmenswebsite mit Fokus auf Informationsarchitektur, Navigation und Usability.",
      en: "User-centered analysis and redesign of a corporate website with a focus on information architecture, navigation, and usability.",
    },
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    highlights: [
      {
        de: "Heuristische Evaluation und Usability-Tests",
        en: "Heuristic evaluation and usability testing",
      },
      {
        de: "Auswertung mit der System Usability Scale",
        en: "Evaluation using the System Usability Scale",
      },
      {
        de: "Entwicklung eines responsiven Web-Prototyps",
        en: "Development of a responsive web prototype",
      },
    ],
    image: "/projekte/brightredesign.png",
    live: "",
    github: "",
    featured: true,
  },
  {
    title: "TrainTogether",
    category: {
      de: "Full-Stack-Webanwendung",
      en: "Full-Stack Web Application",
    },
    description: {
      de: "Social-Media-Sport-App zur Vernetzung von Sportinteressierten mit Benutzerverwaltung, REST-API und responsivem Frontend.",
      en: "Social sports application connecting people with shared fitness interests, featuring user management, a REST API, and a responsive frontend.",
    },
    technologies: [
      "React",
      "Express.js",
      "Node.js",
      "SQLite",
    ],
    highlights: [
      {
        de: "Session-basierte Authentifizierung",
        en: "Session-based authentication",
      },
      {
        de: "Passwortschutz mit bcrypt",
        en: "Password protection using bcrypt",
      },
      {
        de: "REST-API mit Express und SQLite",
        en: "REST API using Express and SQLite",
      },
    ],
    image: "/projekte/traintogether.webp",
    live: "",
    github: "",
    featured: true,
  },
  {
    title: "Money Pulse Dashboard",
    category: {
      de: "Datenanalyse",
      en: "Data Analytics",
    },
    description: {
      de: "Interaktives Dashboard zur Analyse von mehr als 13 Millionen Finanztransaktionen mit optimierter Datenverarbeitung.",
      en: "Interactive dashboard for analyzing more than 13 million financial transactions with optimized data processing.",
    },
    technologies: [
      "Python",
      "Dash",
      "Plotly",
      "Pandas",
    ],
    highlights: [
      {
        de: "Interaktive KPIs und Visualisierungen",
        en: "Interactive KPIs and visualizations",
      },
      {
        de: "ETL- und Caching-Strategien",
        en: "ETL and caching strategies",
      },
      {
        de: "Verarbeitung großer Datenmengen",
        en: "Processing of large datasets",
      },
    ],
    image: "/projekte/dashboard.webp",
    live: "",
    github: "",
    featured: false,
  },
  {
    title: "Smart Traffic Agent",
    category: {
      de: "Künstliche Intelligenz",
      en: "Artificial Intelligence",
    },
    description: {
      de: "Reinforcement-Learning-Agent zur Optimierung von Ampelsteuerungen und zur Reduzierung durchschnittlicher Wartezeiten.",
      en: "Reinforcement learning agent for optimizing traffic-light control and reducing average waiting times.",
    },
    technologies: [
      "Python",
      "Q-Learning",
      "Reinforcement Learning",
    ],
    highlights: [
      {
        de: "Simulation verschiedener Verkehrssituationen",
        en: "Simulation of different traffic scenarios",
      },
      {
        de: "Vergleich mit klassischen Strategien",
        en: "Comparison with traditional strategies",
      },
      {
        de: "Optimierung der Ampelsteuerung",
        en: "Optimization of traffic-light control",
      },
    ],
    image: "/projekte/smarttraffic.png",
    live: "",
    github: "",
    featured: false,
  },
  {
    title: "Diabetes Prediction",
    category: {
      de: "Maschinelles Lernen",
      en: "Machine Learning",
    },
    description: {
      de: "Machine-Learning-Pipeline zur Diabetesvorhersage mit Clustering und Klassifikation.",
      en: "Machine learning pipeline for diabetes prediction using clustering and classification.",
    },
    technologies: [
      "Python",
      "Scikit-learn",
      "K-Means",
      "k-NN",
    ],
    highlights: [
      {
        de: "Datenaufbereitung und Merkmalsauswahl",
        en: "Data preprocessing and feature selection",
      },
      {
        de: "Kombination aus Clustering und Klassifikation",
        en: "Combination of clustering and classification",
      },
      {
        de: "Verbesserung der Genauigkeit auf 75,3 %",
        en: "Improvement of accuracy to 75.3%",
      },
    ],
    image: "/projekte/daibetes.webp",
    live: "",
    github: "",
    featured: false,
  },
];