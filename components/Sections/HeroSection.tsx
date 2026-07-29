"use client";

import { motion } from "motion/react";
import { translations } from "@/data/translations";
import { useLanguage } from "@/app/context/LanguageContext";

export default function HeroSection() {
  const { language } = useLanguage();
  const t = translations[language].hero;

  const technologies = [
    {
      title: "React",
      subtitle: t.technologyFrontend,
    },
    {
      title: "Next.js",
      subtitle: t.technologyWeb,
    },
    {
      title: "Python",
      subtitle: t.technologyData,
    },
  ];

  return (
    <section
      id="start"
      className="relative flex min-h-screen items-center overflow-hidden bg-transparent px-6 pb-20 pt-32 lg:px-8"
    >
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Linker Textbereich */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* Verfügbarkeit */}
          <motion.div
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm backdrop-blur"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.15,
            }}
          >
            <motion.span
              className="h-2 w-2 rounded-full bg-blue-600"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {t.availability}
          </motion.div>

          {/* Tätigkeitsbereiche */}
          <motion.p
            className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-blue-600"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
          >
            {t.focus}
          </motion.p>

          {/* Hauptüberschrift */}
          <motion.h1
            className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {t.greeting}

            <span className="block bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Ibrahim Kolakji.
            </span>
          </motion.h1>

          {/* Beschreibung */}
          <motion.p
            className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.35,
            }}
          >
            {t.description}
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.45,
            }}
          >
            <motion.a
              href="#projekte"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-3.5 font-semibold text-white shadow-lg shadow-slate-950/15 transition-colors hover:bg-blue-600"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              {t.projectsButton}

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </motion.a>

            <motion.a
              href="/CV_Kolakji_KPMG.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/80 px-7 py-3.5 font-semibold text-slate-900 shadow-sm backdrop-blur transition-colors hover:border-blue-600 hover:text-blue-600"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              {t.resumeButton}
              <span aria-hidden="true">↗</span>
            </motion.a>
          </motion.div>

          {/* Standort und Sprachen */}
          <motion.div
            className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-slate-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.55,
            }}
          >
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              {t.location}
            </span>

            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
              {t.languages}
            </span>
          </motion.div>
        </motion.div>

        {/* Rechte Profilkarte */}
        <motion.div
          className="relative mx-auto w-full max-w-md"
          initial={{
            opacity: 0,
            scale: 0.92,
            rotate: 3,
            y: 30,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.div
            className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-blue-600 to-cyan-500"
            animate={{
              rotate: [6, 4, 6],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="relative rounded-[2.5rem] border border-white/60 bg-white/80 p-8 shadow-2xl shadow-slate-900/15 backdrop-blur-xl"
            whileHover={{
              y: -8,
              transition: {
                duration: 0.3,
              },
            }}
          >
            <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-800 to-blue-700">
              <motion.div
                className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-400/20 blur-2xl"
                animate={{
                  x: [0, -20, 0],
                  y: [0, 20, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-cyan-400/20 blur-2xl"
                animate={{
                  x: [0, 25, 0],
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <div className="relative z-10 text-center text-white">
                <motion.div
                  className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full border border-white/20 bg-white/10 text-4xl font-bold shadow-xl backdrop-blur"
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  IK
                </motion.div>

                <p className="text-2xl font-bold">Ibrahim Kolakji</p>

                <p className="mt-2 text-blue-100">
                  {t.profession}
                </p>

                <div className="mx-auto mt-6 h-px w-20 bg-white/20" />

                <p className="mt-5 text-sm font-medium text-slate-300">
                  Web · UX · Data · IT
                </p>
              </div>
            </div>

            {/* Technologien */}
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {technologies.map((technology, index) => (
                <motion.div
                  key={technology.title}
                  className="rounded-2xl border border-slate-100 bg-slate-50 p-3"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.65 + index * 0.08,
                  }}
                  whileHover={{
                    y: -4,
                    backgroundColor: "#eff6ff",
                  }}
                >
                  <p className="text-base font-bold text-slate-950 sm:text-lg">
                    {technology.title}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    {technology.subtitle}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll-Hinweis */}
      <motion.a
        href="#ueber-mich"
        aria-label={t.scrollAriaLabel}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 lg:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.7,
          delay: 1.1,
        }}
      >
        {t.scroll}

        <motion.span
          className="text-lg"
          animate={{
            y: [0, 7, 0],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ↓
        </motion.span>
      </motion.a>
    </section>
  );
}