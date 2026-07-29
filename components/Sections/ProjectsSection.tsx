"use client";

import { motion } from "motion/react";
import { projects } from "@/data/Projects";
import ProjectCard from "@/components/UI/ProjectsCard";

export default function ProjectsSection() {
  const featuredProjects = projects.filter(
    (project) => project.featured,
  );

  const additionalProjects = projects.filter(
    (project) => !project.featured,
  );

  return (
    <section
      id="projekte"
      className="relative overflow-hidden bg-slate-50 px-6 py-24 sm:py-28 lg:px-8"
    >
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
            Ausgewählte Projekte
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Von der Idee
            <span className="block text-slate-400">
              zur funktionierenden Lösung.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Eine Auswahl meiner Projekte aus Webentwicklung, User
            Experience, Datenanalyse und künstlicher Intelligenz.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {additionalProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}