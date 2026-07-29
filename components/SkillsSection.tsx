const skillGroups = [
  {
    title: "Frontend & Web",
    description:
      "Moderne, responsive und nutzerfreundliche Webanwendungen.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
    ],
  },
  {
    title: "Programmierung & Backend",
    description:
      "Entwicklung von Anwendungen, APIs und technischen Lösungen.",
    skills: [
      "Python",
      "Java",
      "C#",
      "Node.js",
      "Express.js",
      "ABAP",
    ],
  },
  {
    title: "Daten & ETL",
    description:
      "Verarbeitung, Analyse und strukturierte Aufbereitung von Daten.",
    skills: [
      "SQL",
      "Oracle SQL",
      "SAS Enterprise Guide",
      "SAS Data Integration Studio",
      "Pandas",
      "SQLite",
    ],
  },
  {
    title: "Tools & Methoden",
    description:
      "Unterstützung moderner Entwicklungs- und Projektprozesse.",
    skills: [
      "Git",
      "SAP S/4HANA",
      "OpenProject",
      "Usability Testing",
      "SUS",
      "Microsoft Office",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="kenntnisse"
      className="bg-slate-950 px-6 py-24 text-white sm:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
            Kenntnisse
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Technologien und Methoden,
            <span className="block text-slate-400">
              mit denen ich arbeite.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Mein Profil verbindet Webentwicklung, Datenverarbeitung,
            IT-Prozesse und nutzerzentrierte Entwicklung.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-7 transition hover:border-blue-400/50 hover:bg-white/[0.08]"
            >
              <h3 className="text-2xl font-bold">{group.title}</h3>

              <p className="mt-3 leading-7 text-slate-400">
                {group.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-slate-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}