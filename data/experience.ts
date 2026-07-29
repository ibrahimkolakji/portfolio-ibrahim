export type Experience = {
  period: string;
  role: string;
  company: string;
  employmentType: string;
  location: string;
  description: string;
  tasks: string[];
  technologies: string[];
};

export const experiences: Experience[] = [
  {
    period: "03/2026 – aktuell",
    role: "Bachelorarbeit – UX & Webentwicklung",
    company: "BRIGHT Consulting",
    employmentType: "Vollzeit",
    location: "Stuttgart",
    description:
      "Nutzerzentrierte Analyse und Neugestaltung einer Unternehmenswebsite mit Fokus auf Informationsarchitektur, Usability und moderne Webentwicklung.",
    tasks: [
      "Analyse und Bewertung der User Experience einer Unternehmenswebsite",
      "Durchführung von Usability-Tests inklusive Task-Analyse und SUS-Auswertung",
      "Identifikation von Usability-Problemen auf Basis qualitativer und quantitativer Daten",
      "Konzeption und Entwicklung einer neuen Lösung mit Next.js, React und Tailwind CSS",
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
    role: "Werkstudent, Competence Center IT-P Smart Grids",
    company: "Fichtner IT Consulting GmbH",
    employmentType: "12 Std./Woche",
    location: "Stuttgart",
    description:
      "Unterstützung der Projektkoordination im Bereich Smart Grids sowie Aufbereitung relevanter Projektinformationen für interne Stakeholder.",
    tasks: [
      "Unterstützung der Projektkoordination durch Pflege von Projektplänen und Meilensteinen in OpenProject",
      "Erstellung von Statusreports und Präsentationen für interne Stakeholder",
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
    role: "Praktikant, Aufsichtsrechtliches Meldewesen",
    company: "W&W Informatik GmbH",
    employmentType: "Vollzeit",
    location: "Kornwestheim",
    description:
      "Mitarbeit in einem großen Umstellungsprojekt zur Verarbeitung aufsichtsrechtlicher Meldedaten innerhalb der W&W-Gruppe.",
    tasks: [
      "Entwicklung eines SAS-basierten Vergleichswerkzeugs im Rahmen eines großen Umstellungsprojekts",
      "Entwicklung in der ETL-Umgebung SAS Enterprise Guide",
      "Unterstützung der Qualitätssicherung im aufsichtsrechtlichen Meldewesen",
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
    role: "Werkstudent, Finanz- und Performance-Management",
    company: "W&W Informatik GmbH",
    employmentType: "20 Std./Woche",
    location: "Kornwestheim",
    description:
      "Unterstützung im Bereich Rating durch SAS-Entwicklung, Datenverarbeitung und Analyse relevanter Rating-Daten.",
    tasks: [
      "SAS-Entwicklung mit SAS Enterprise Guide",
      "Entwicklung und Pflege von ETL-Prozessen mit SAS Data Integration Studio",
      "Auswertung und Analyse von Rating-Daten einer Bausparkasse",
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
    role: "SAP S/4HANA – Praxisprojekt im Studium",
    company: "Hochschule für Technik Stuttgart",
    employmentType: "Praxisprojekt",
    location: "Stuttgart",
    description:
      "Praxisorientierte Bearbeitung zentraler ERP-Geschäftsprozesse im Rahmen eines Hochschulprojekts mit SAP S/4HANA.",
    tasks: [
      "Bearbeitung von Beschaffungs-, Vertriebs- und Inventurprozessen",
      "Durchführung von Aufgaben im Debitorenmanagement",
      "Aufbau von Grundkenntnissen in ERP-Geschäftsprozessen mit SAP S/4HANA",
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