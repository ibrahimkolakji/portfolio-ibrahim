"use client";

import { motion } from "motion/react";
import { experiences } from "@/data/experience";

export default function ExperienceSection() {
  return (
    <section
      id="erfahrung"
  className="relative flex min-h-screen items-center overflow-hidden bg-transparent px-6 pb-20 pt-32 lg:px-8"
>


      {/* Hintergrund-Glows */}
      <motion.div
        className="pointer-events-none absolute -left-48 top-0 h-[30rem] w-[30rem] rounded-full bg-[#dbeafe]/70 blur-[150px]"
        animate={{
          x: [0, 35, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="pointer-events-none absolute -right-48 bottom-0 h-[30rem] w-[30rem] rounded-full bg-[#06b6d4]/10 blur-[150px]"
        animate={{
          x: [0, -30, 0],
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
  <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
    Berufserfahrung
  </p>

  <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-[#0f172a] sm:text-5xl lg:text-6xl">
    Erfahrung aus
    <span className="block bg-gradient-to-r from-[#64748b] via-[#475569] to-[#0f172a] bg-clip-text text-transparent">
      Studium und Praxis.
    </span>
  </h2>

  <p className="mt-6 max-w-3xl text-lg leading-8 text-[#64748b]">
    Während meines Studiums und meiner beruflichen Stationen konnte ich
    Erfahrungen in den Bereichen Webentwicklung, Datenverarbeitung,
    Projektmanagement und User Experience sammeln und diese in
    unterschiedlichen Projekten praktisch anwenden.
  </p>
</motion.div>

        {/* Erfahrungsliste */}
        <div className="mt-16 border-t border-[#64748b]/20">
          {experiences.map((experience, index) => (
            <motion.article
              key={`${experience.company}-${experience.period}`}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group grid gap-10 border-b border-[#64748b]/20 py-14 md:grid-cols-[230px_1fr] lg:grid-cols-[270px_1fr] lg:gap-16"
            >
              {/* Linke Spalte */}
              <div>
                <p className="text-sm font-semibold text-[#64748b] sm:text-base">
                  {experience.period}
                </p>

                <motion.div
                  whileHover={{
                    rotate: -4,
                    scale: 1.06,
                  }}
                  className="mt-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#2563eb]/20 bg-[#ffffff] text-xl font-bold text-[#2563eb] shadow-lg shadow-[#0f172a]/5"
                >
                  {experience.company
                    .split(" ")
                    .filter((word) => word.length > 1)
                    .map((word) => word.charAt(0))
                    .join("")
                    .slice(0, 2)}
                </motion.div>

                <p className="mt-5 text-sm font-medium text-[#64748b]">
                  {experience.location}
                </p>

                <span className="mt-3 inline-flex rounded-full border border-[#2563eb]/20 bg-[#dbeafe] px-3.5 py-2 text-xs font-semibold text-[#2563eb]">
                  {experience.employmentType}
                </span>
              </div>

              {/* Rechte Spalte */}
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#06b6d4]">
                  {experience.company}
                </p>

                <h3 className="mt-3 text-2xl font-bold tracking-tight text-[#0f172a] sm:text-3xl">
                  {experience.role}
                </h3>

                <p className="mt-6 max-w-4xl text-base leading-8 text-[#64748b] sm:text-lg">
                  {experience.description}
                </p>

                <ul className="mt-7 space-y-4">
                  {experience.tasks.map((task) => (
                    <li
                      key={task}
                      className="flex gap-4 text-sm leading-7 text-[#64748b] sm:text-base"
                    >
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2563eb]" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-2.5">
                  {experience.technologies.map((technology) => (
                    <motion.span
                      key={technology}
                      whileHover={{
                        y: -3,
                        scale: 1.03,
                      }}
                      className="rounded-full border border-[#2563eb]/20 bg-[#ffffff] px-4 py-2 text-xs font-semibold text-[#0f172a] shadow-sm transition-colors duration-300 hover:border-[#06b6d4] hover:bg-[#dbeafe] hover:text-[#2563eb]"
                    >
                      {technology}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}