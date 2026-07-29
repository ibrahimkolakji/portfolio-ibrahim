export type LocalizedText = {
  de: string;
  en: string;
};

export type Experience = {
  period: string;
  role: LocalizedText;
  company: string;
  employmentType: LocalizedText;
  location: string;
  description: LocalizedText;
  tasks: LocalizedText[];
  technologies: string[];
  logo: string;
  logoAlt: string;
};

export const experiences: Experience[] = [
  {
    period: "03/2026 – aktuell",
    role: {
      de: "Bachelorarbeit – UX & Webentwicklung",
      en: "Bachelor’s Thesis – UX & Web Development",
    },
    company: "BRIGHT Consulting",
    employmentType: {
      de: "Vollzeit",
      en: "Full-time",
    },
    location: "Stuttgart",
    logo: "/logos/brightlogo.jpg",
    logoAlt: "Logo von BRIGHT Consulting",
    description: {
      de: "Nutzerzentrierte Analyse und Neugestaltung einer Unternehmenswebsite mit Fokus auf Informationsarchitektur, Usability und moderne Webentwicklung.",
      en: "User-centered analysis and redesign of a corporate website with a focus on information architecture, usability, and modern web development.",
    },
    tasks: [
      {
        de: "Analyse und Bewertung der User Experience einer Unternehmenswebsite",
        en: "Analyzed and evaluated the user experience of a corporate website",
      },
      {
        de: "Durchführung von Usability-Tests inklusive Task-Analyse und SUS-Auswertung",
        en: "Conducted usability tests including task analysis and SUS evaluation",
      },
      {
        de: "Identifikation von Usability-Problemen auf Basis qualitativer und quantitativer Daten",
        en: "Identified usability issues based on qualitative and quantitative data",
      },
      {
        de: "Konzeption und Entwicklung einer neuen Lösung mit Next.js, React und Tailwind CSS",
        en: "Designed and developed a new solution using Next.js, React, and Tailwind CSS",
      },
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Usability Testing",
      "SUS",
    ],
  },
  {
    period: "03/2025 – 02/2026",
    role: {
      de: "Werkstudent, Competence Center IT-P Smart Grids",
      en: "Working Student, Competence Center IT-P Smart Grids",
    },
    company: "Fichtner IT Consulting GmbH",
    employmentType: {
      de: "12 Std./Woche",
      en: "12 hrs/week",
    },
    location: "Stuttgart",
    logo: "/logos/fichtnerlogo.png",
    logoAlt: "Logo von Fichtner IT Consulting",
    description: {
      de: "Unterstützung der Projektkoordination im Bereich Smart Grids sowie Aufbereitung relevanter Projektinformationen für interne Stakeholder.",
      en: "Supported project coordination in the Smart Grids area and prepared relevant project information for internal stakeholders.",
    },
    tasks: [
      {
        de: "Unterstützung der Projektkoordination durch Pflege von Projektplänen und Meilensteinen in OpenProject",
        en: "Supported project coordination by maintaining project plans and milestones in OpenProject",
      },
      {
        de: "Erstellung von Statusreports und Präsentationen für interne Stakeholder",
        en: "Created status reports and presentations for internal stakeholders",
      },
    ],
    technologies: [
      "OpenProject",
      "Projektkoordination",
      "Statusreporting",
      "Microsoft Office",
    ],
  },
  {
    period: "09/2024 – 03/2025",
    role: {
      de: "Praktikant, Aufsichtsrechtliches Meldewesen",
      en: "Intern, Regulatory Reporting",
    },
    company: "W&W Informatik GmbH",
    employmentType: {
      de: "Vollzeit",
      en: "Full-time",
    },
    location: "Kornwestheim",
    logo: "/logos/ww-gruppe-informatik-logo.png",
    logoAlt: "Logo von W&W Informatik",
    description: {
      de: "Mitarbeit in einem großen Umstellungsprojekt zur Verarbeitung aufsichtsrechtlicher Meldedaten innerhalb der W&W-Gruppe.",
      en: "Contributed to a large migration project for processing regulatory reporting data within the W&W Group.",
    },
    tasks: [
      {
        de: "Entwicklung eines SAS-basierten Vergleichswerkzeugs im Rahmen eines großen Umstellungsprojekts",
        en: "Developed a SAS-based comparison tool as part of a large migration project",
      },
      {
        de: "Entwicklung in der ETL-Umgebung SAS Enterprise Guide",
        en: "Developed solutions in the SAS Enterprise Guide ETL environment",
      },
      {
        de: "Unterstützung der Qualitätssicherung im aufsichtsrechtlichen Meldewesen",
        en: "Supported quality assurance in regulatory reporting",
      },
    ],
    technologies: [
      "SAS Enterprise Guide",
      "ETL",
      "Qualitätssicherung",
      "Meldewesen",
    ],
  },
  {
    period: "08/2023 – 08/2024",
    role: {
      de: "Werkstudent, Finanz- und Performance-Management",
      en: "Working Student, Finance and Performance Management",
    },
    company: "W&W Informatik GmbH",
    employmentType: {
      de: "20 Std./Woche",
      en: "20 hrs/week",
    },
    location: "Kornwestheim",
    logo: "/logos/ww-gruppe-informatik-logo.png",
    logoAlt: "Logo von W&W Informatik",
    description: {
      de: "Unterstützung im Bereich Rating durch SAS-Entwicklung, Datenverarbeitung und Analyse relevanter Rating-Daten.",
      en: "Supported rating-related processes through SAS development, data processing, and analysis of relevant rating data.",
    },
    tasks: [
      {
        de: "SAS-Entwicklung mit SAS Enterprise Guide",
        en: "Developed solutions using SAS Enterprise Guide",
      },
      {
        de: "Entwicklung und Pflege von ETL-Prozessen mit SAS Data Integration Studio",
        en: "Developed and maintained ETL processes using SAS Data Integration Studio",
      },
      {
        de: "Auswertung und Analyse von Rating-Daten einer Bausparkasse",
        en: "Evaluated and analyzed rating data for a building society",
      },
    ],
    technologies: [
      "SAS Enterprise Guide",
      "SAS Data Integration Studio",
      "ETL",
      "Datenanalyse",
    ],
  },
  {
    period: "09/2023 – 02/2024",
    role: {
      de: "SAP S/4HANA – Praxisprojekt im Studium",
      en: "SAP S/4HANA – University Practice Project",
    },
    company: "Hochschule für Technik Stuttgart",
    employmentType: {
      de: "Praxisprojekt",
      en: "Practice project",
    },
    location: "Stuttgart",
    logo: "/logos/hft.png",
    logoAlt: "Logo der Hochschule für Technik Stuttgart",
    description: {
      de: "Praxisorientierte Bearbeitung zentraler ERP-Geschäftsprozesse im Rahmen eines Hochschulprojekts mit SAP S/4HANA.",
      en: "Practical implementation of key ERP business processes as part of a university project using SAP S/4HANA.",
    },
    tasks: [
      {
        de: "Bearbeitung von Beschaffungs-, Vertriebs- und Inventurprozessen",
        en: "Worked on procurement, sales, and inventory processes",
      },
      {
        de: "Durchführung von Aufgaben im Debitorenmanagement",
        en: "Completed tasks in accounts receivable management",
      },
      {
        de: "Aufbau von Grundkenntnissen in ERP-Geschäftsprozessen mit SAP S/4HANA",
        en: "Built foundational knowledge of ERP business processes using SAP S/4HANA",
      },
    ],
    technologies: [
      "SAP S/4HANA",
      "ERP",
      "Beschaffung",
      "Vertrieb",
      "Debitorenmanagement",
    ],
  },
];