"use client";

import { motion } from "motion/react";

const programmingSkills = [
  {
    name: "TypeScript / JavaScript",
    level: "Fortgeschritten",
    progress: 88,
    short: "TS",
  },
  {
    name: "Python",
    level: "Fortgeschritten",
    progress: 82,
    short: "PY",
  },
  {
    name: "Java",
    level: "Gute Kenntnisse",
    progress: 70,
    short: "JV",
  },
  {
    name: "SQL",
    level: "Fortgeschritten",
    progress: 84,
    short: "SQL",
  },
];

const skillGroups = [
  {
    number: "01",
    title: "Frontend & Web",
    description:
      "Entwicklung moderner und responsiver Benutzeroberflächen mit Fokus auf Struktur, Performance und User Experience.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "Responsive Design",
    ],
  },
  {
    number: "02",
    title: "Backend & Entwicklung",
    description:
      "Entwicklung technischer Anwendungen, Schnittstellen und serverseitiger Funktionen.",
    skills: [
      "Python",
      "Java",
      "C#",
      "Node.js",
      "Express.js",
      "ABAP",
      "REST APIs",
    ],
  },
  {
    number: "03",
    title: "Daten & ETL",
    description:
      "Verarbeitung, Analyse und strukturierte Aufbereitung von Daten in unterschiedlichen Systemlandschaften.",
    skills: [
      "SQL",
      "Oracle SQL",
      "Pandas",
      "SQLite",
      "SAS Enterprise Guide",
      "SAS Data Integration Studio",
      "ETL",
    ],
  },
  {
    number: "04",
    title: "Tools & Methoden",
    description:
      "Werkzeuge und Methoden für moderne Entwicklungs-, Analyse- und Projektprozesse.",
    skills: [
      "Git",
      "SAP S/4HANA",
      "OpenProject",
      "Usability Testing",
      "SUS",
      "Jira",
      "Microsoft Office",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="kenntnisse"
      className="relative overflow-hidden bg-[#ffffff] px-6 py-24 text-[#0f172a] sm:py-28 lg:px-8"
    >
  

      {/* Dezente Hintergrundflächen */}
      <motion.div
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#dbeafe]/70 blur-[140px]"
        animate={{
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#06b6d4]/10 blur-[140px]"
        animate={{
          x: [0, -25, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Überschrift */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-4xl"
        >
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#2563eb]">
            Kenntnisse
          </p>

          <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-[#0f172a] sm:text-5xl lg:text-6xl">
            Technologien und Methoden,
            <span className="block text-[#64748b]">
              mit denen ich arbeite.
            </span>
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#64748b]">
            Mein technisches Profil verbindet Webentwicklung,
            Datenverarbeitung, Backend-Technologien und nutzerzentrierte
            Methoden.
          </p>
        </motion.div>

        {/* Programmiersprachen */}
        <div className="mt-16 rounded-[2rem] border border-[#64748b]/15 bg-[#f8fafc]/90 p-6 shadow-xl shadow-[#0f172a]/5 backdrop-blur-xl sm:p-8 lg:p-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.65,
            }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#06b6d4]">
              Programmiersprachen
            </p>
          </motion.div>

          <div className="mt-10 space-y-9">
            {programmingSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="flex items-center justify-between gap-5">
                  <div className="flex min-w-0 items-center gap-4">
                    <motion.div
                      whileHover={{
                        rotate: -5,
                        scale: 1.06,
                      }}
                      className="flex h-11 min-w-11 items-center justify-center rounded-xl border border-[#2563eb]/15 bg-[#ffffff] px-2 text-xs font-bold text-[#2563eb] shadow-sm"
                    >
                      {skill.short}
                    </motion.div>

                    <p className="truncate text-base font-bold text-[#0f172a] sm:text-lg">
                      {skill.name}
                    </p>
                  </div>

                  <span className="shrink-0 text-sm font-medium text-[#64748b]">
                    {skill.level}
                  </span>
                </div>

                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-[#dbeafe]">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-[#2563eb] to-[#06b6d4]"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.progress}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: 0.15 + index * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Kompetenzbereiche */}
        <div className="mt-16 border-t border-[#64748b]/20">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group grid gap-8 border-b border-[#64748b]/20 py-12 md:grid-cols-[0.85fr_1.15fr] md:gap-14 lg:py-14"
            >
              {/* Überschrift links */}
              <div>
                <div className="flex items-start gap-5">
                  <span className="mt-1 text-sm font-bold text-[#2563eb]">
                    {group.number}
                  </span>

                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-[#0f172a] sm:text-3xl">
                      {group.title}
                    </h3>

                    <p className="mt-4 max-w-lg leading-7 text-[#64748b]">
                      {group.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Skills rechts */}
              <div className="flex flex-wrap content-start gap-3 md:pt-1">
                {group.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.06 + skillIndex * 0.035,
                    }}
                    whileHover={{
                      y: -4,
                      scale: 1.03,
                    }}
                    className="rounded-full border border-[#64748b]/15 bg-[#ffffff] px-5 py-3 text-sm font-semibold text-[#0f172a] shadow-sm transition-colors duration-300 hover:border-[#2563eb]/40 hover:bg-[#dbeafe] hover:text-[#2563eb]"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}