"use client";

import { motion } from "motion/react";
import type { Project } from "@/data/Projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -8 }}
      className={`group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-lg shadow-slate-900/5 ${
        project.featured ? "lg:col-span-1" : ""
      }`}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-slate-950 via-slate-800 to-blue-700">
        {project.image ? (
          <img
            src={project.image}
            alt={`Vorschau des Projekts ${project.title}`}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center p-8 text-center text-white">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
                Projekt
              </p>
              <p className="mt-4 text-3xl font-bold">{project.title}</p>
            </div>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />

        <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-slate-950/40 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
          {project.category}
        </span>
      </div>

      <div className="p-7 sm:p-8">
        <h3 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
          {project.title}
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          {project.description}
        </p>

        <ul className="mt-6 space-y-3">
          {project.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex gap-3 text-sm leading-6 text-slate-600"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
              {highlight}
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-semibold text-slate-600"
            >
              {technology}
            </span>
          ))}
        </div>

        {(project.github || project.live) && (
          <div className="mt-8 flex flex-wrap gap-4 border-t border-slate-100 pt-6">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 transition hover:text-blue-700"
              >
                Live ansehen ↗
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-slate-700 transition hover:text-blue-600"
              >
                GitHub ↗
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}