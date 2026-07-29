export type Project = {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  highlights: string[];
  image?: string;
  github?: string;
  live?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    title: "BRIGHT UX Redesign",
    category: "Bachelorarbeit · UX & Webentwicklung",
    description:
      "Nutzerzentrierte Analyse und Neugestaltung einer Unternehmenswebsite mit Fokus auf Informationsarchitektur, Navigation und Usability.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    highlights: [
      "Heuristic Evaluation und Usability-Tests",
      "Auswertung mit System Usability Scale",
      "Entwicklung eines responsiven Web-Prototyps",
    ],
    image: "/images/projects/bright.webp",
    live: "",
    github: "",
    featured: true,
  },
  {
    title: "TrainTogether",
    category: "Full-Stack-Webanwendung",
    description:
      "Social-Media-Sport-App zur Vernetzung von Sportinteressierten mit Benutzerverwaltung, REST-API und responsivem Frontend.",
    technologies: ["React", "Express.js", "Node.js", "SQLite"],
    highlights: [
      "Session-basierte Authentifizierung",
      "Passwortschutz mit bcrypt",
      "REST-API mit Express und SQLite",
    ],
    image: "/images/projects/traintogether.webp",
    live: "",
    github: "",
    featured: true,
  },
  {
    title: "Money Pulse Dashboard",
    category: "Data Analytics",
    description:
      "Interaktives Dashboard zur Analyse von mehr als 13 Millionen Finanztransaktionen mit optimierter Datenverarbeitung.",
    technologies: ["Python", "Dash", "Plotly", "Pandas"],
    highlights: [
      "Interaktive KPIs und Visualisierungen",
      "ETL- und Caching-Strategien",
      "Verarbeitung großer Datenmengen",
    ],
    image: "/images/projects/money-pulse.webp",
    live: "",
    github: "",
    featured: false,
  },
  {
    title: "Smart Traffic Agent",
    category: "Artificial Intelligence",
    description:
      "Reinforcement-Learning-Agent zur Optimierung von Ampelsteuerungen und zur Reduzierung durchschnittlicher Wartezeiten.",
    technologies: ["Python", "Q-Learning", "Reinforcement Learning"],
    highlights: [
      "Simulation verschiedener Verkehrssituationen",
      "Vergleich mit klassischen Strategien",
      "Optimierung der Ampelsteuerung",
    ],
    image: "/images/projects/smart-traffic.webp",
    live: "",
    github: "",
    featured: false,
  },
  {
    title: "Diabetes Prediction",
    category: "Machine Learning",
    description:
      "Machine-Learning-Pipeline zur Diabetesvorhersage mit Clustering und Klassifikation.",
    technologies: ["Python", "Scikit-learn", "K-Means", "k-NN"],
    highlights: [
      "Datenaufbereitung und Feature-Auswahl",
      "Kombination aus Clustering und Klassifikation",
      "Verbesserung der Genauigkeit auf 75,3 %",
    ],
    image: "/images/projects/diabetes.webp",
    live: "",
    github: "",
    featured: false,
  },
];