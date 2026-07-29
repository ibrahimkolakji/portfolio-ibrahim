"use client";

import { motion } from "motion/react";
import { translations } from "@/data/translations";
import { useLanguage } from "@/app/context/LanguageContext";

export default function AboutSection() {
  const { language } = useLanguage();
  const t = translations[language].about;

  const facts = [
    {
      value: "2026",
      label: t.facts.graduation,
    },
    {
      value: "3+",
      label: t.facts.experience,
    },
    {
      value: "5",
      label: t.facts.projects,
    },
    {
      value: "3",
      label: t.facts.languages,
    },
  ];

  return (
    <section
      id="ueber-mich"
      className="relative overflow-hidden bg-transparent px-6 py-24 sm:py-28 lg:px-8"
    >
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          {/* Linke Seite */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:sticky lg:top-32"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-4 py-2 text-sm font-semibold text-blue-700 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              {t.eyebrow}
            </div>

            <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              {t.titleFirst}

              <span className="mt-2 block bg-gradient-to-r from-slate-400 via-slate-500 to-slate-700 bg-clip-text text-transparent">
                {t.titleSecond}
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
              {t.intro}
            </p>

            <div className="mt-10 hidden h-px w-32 bg-gradient-to-r from-blue-600 to-transparent lg:block" />
          </motion.div>

          {/* Rechte Seite */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="rounded-[2rem] border border-slate-200/80 bg-white/80 p-7 shadow-xl shadow-slate-900/5 backdrop-blur-xl sm:p-9">
              <p className="text-lg leading-8 text-slate-600 sm:text-xl">
                {t.descriptionFirst}
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-600 sm:text-xl">
                {t.descriptionSecond}
              </p>

              <div className="mt-8 space-y-4">
                {t.strengths.map((strength, index) => (
                  <motion.div
                    key={strength}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.2 + index * 0.08,
                    }}
                    className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50/80 p-4"
                  >
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
                      ✓
                    </div>

                    <p className="font-medium leading-7 text-slate-700">
                      {strength}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Fakten-Karten */}
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {facts.map((fact, index) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay: 0.15 + index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    y: -6,
                    transition: {
                      duration: 0.25,
                    },
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-900/5"
                >
                  <div className="absolute inset-x-0 top-0 h-1 scale-x-0 bg-gradient-to-r from-blue-600 to-cyan-500 transition-transform duration-300 group-hover:scale-x-100" />

                  <p className="text-3xl font-bold tracking-tight text-slate-950">
                    {fact.value}
                  </p>

                  <p className="mt-2 text-sm leading-5 text-slate-500">
                    {fact.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}