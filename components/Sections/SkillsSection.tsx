"use client";

import { motion } from "motion/react";
import type { IconType } from "react-icons";

import { translations } from "@/data/translations";
import { useLanguage } from "@/app/context/LanguageContext";

import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiMysql,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiNodedotjs,
  SiExpress,
  SiPandas,
  SiGit,
  SiSap,
  SiJira,
  SiSqlite,
} from "react-icons/si";

import {
  FaJava,
  FaCode,
  FaDatabase,
  FaMicrosoft,
  FaMobileScreen,
  FaChartLine,
  FaUserCheck,
  FaArrowsRotate,
  FaDiagramProject,
} from "react-icons/fa6";

import {
  TbBrandCSharp,
  TbApi,
  TbDatabaseCog,
} from "react-icons/tb";

type ProgrammingSkill = {
  name: string;
  level: string;
  progress: number;
  icon: IconType;
};

type Skill = {
  name: string;
  icon: IconType;
};

type SkillGroup = {
  number: string;
  title: string;
  description: string;
  skills: Skill[];
};

export default function SkillsSection() {
  const { language } = useLanguage();
  const t = translations[language].skills;

  const programmingSkills: ProgrammingSkill[] = [
    {
      name: "TypeScript / JavaScript",
      level: t.levels.advanced,
      progress: 88,
      icon: SiTypescript,
    },
    {
      name: "Python",
      level: t.levels.advanced,
      progress: 82,
      icon: SiPython,
    },
    {
      name: "Java",
      level: t.levels.goodKnowledge,
      progress: 70,
      icon: FaJava,
    },
    {
      name: "SQL",
      level: t.levels.advanced,
      progress: 84,
      icon: FaDatabase,
    },
  ];

  const skillGroups: SkillGroup[] = [
    {
      number: "",
      title: t.frontend.title,
      description: t.frontend.description,
      skills: [
        {
          name: "React",
          icon: SiReact,
        },
        {
          name: "Next.js",
          icon: SiNextdotjs,
        },
        {
          name: "TypeScript",
          icon: SiTypescript,
        },
        {
          name: "JavaScript",
          icon: SiJavascript,
        },
        {
          name: "Tailwind CSS",
          icon: SiTailwindcss,
        },
        {
          name: "HTML",
          icon: SiHtml5,
        },
        {
          name: "Responsive Design",
          icon: FaMobileScreen,
        },
      ],
    },
    {
      number: "",
      title: t.backend.title,
      description: t.backend.description,
      skills: [
        {
          name: "Python",
          icon: SiPython,
        },
        {
          name: "Java",
          icon: FaJava,
        },
        {
          name: "C#",
          icon: TbBrandCSharp,
        },
        {
          name: "Node.js",
          icon: SiNodedotjs,
        },
        {
          name: "Express.js",
          icon: SiExpress,
        },
        {
          name: "ABAP",
          icon: FaCode,
        },
        {
          name: "REST APIs",
          icon: TbApi,
        },
      ],
    },
    {
      number: "",
      title: t.data.title,
      description: t.data.description,
      skills: [
        {
          name: "SQL",
          icon: FaDatabase,
        },
        {
          name: "Oracle SQL",
          icon: SiMysql,
        },
        {
          name: "Pandas",
          icon: SiPandas,
        },
        {
          name: "SQLite",
          icon: SiSqlite,
        },
        {
          name: "SAS Enterprise Guide",
          icon: FaChartLine,
        },
        {
          name: "SAS Data Integration Studio",
          icon: TbDatabaseCog,
        },
        {
          name: "ETL",
          icon: FaArrowsRotate,
        },
      ],
    },
    {
      number: "",
      title: t.tools.title,
      description: t.tools.description,
      skills: [
        {
          name: "Git",
          icon: SiGit,
        },
        {
          name: "SAP S/4HANA",
          icon: SiSap,
        },
        {
          name: "OpenProject",
          icon: FaDiagramProject,
        },
        {
          name: "Usability Testing",
          icon: FaUserCheck,
        },
        {
          name: "SUS",
          icon: FaChartLine,
        },
        {
          name: "Jira",
          icon: SiJira,
        },
        {
          name: "Microsoft Office",
          icon: FaMicrosoft,
        },
      ],
    },
  ];

  return (
    <section
      id="kenntnisse"
      className="relative overflow-hidden bg-transparent px-6 py-24 text-[#0f172a] sm:py-28 lg:px-8"
    >
      <div className="relative mx-auto max-w-7xl">
        {/* Überschrift */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-4xl"
        >
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#2563eb]">
            {t.eyebrow}
          </p>

          <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-[#0f172a] sm:text-5xl lg:text-6xl">
            {t.titleFirst}

            <span className="block text-[#64748b]">
              {t.titleSecond}
            </span>
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#64748b]">
            {t.description}
          </p>
        </motion.div>

        {/* Programmiersprachen */}
        <div className="mt-16 rounded-[2rem] border border-[#64748b]/15 bg-white/75 p-6 shadow-xl shadow-[#0f172a]/5 backdrop-blur-xl sm:p-8 lg:p-10">
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.65,
            }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#06b6d4]">
              {t.programming}
            </p>
          </motion.div>

          <div className="mt-10 space-y-9">
            {programmingSkills.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <motion.div
                  key={skill.name}
                  initial={{
                    opacity: 0,
                    y: 22,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
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
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#2563eb]/15 bg-white text-[#2563eb] shadow-sm"
                      >
                        <Icon className="text-2xl" />
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
                      initial={{
                        width: 0,
                      }}
                      whileInView={{
                        width: `${skill.progress}%`,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 1,
                        delay: 0.15 + index * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Kompetenzbereiche */}
        <div className="mt-16 border-t border-[#64748b]/20">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.title}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
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
                  {group.number && (
                    <span className="mt-1 text-sm font-bold text-[#2563eb]">
                      {group.number}
                    </span>
                  )}

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
                {group.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon;

                  return (
                    <motion.div
                      key={skill.name}
                      initial={{
                        opacity: 0,
                        scale: 0.92,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.4,
                        delay:
                          index * 0.06 +
                          skillIndex * 0.035,
                      }}
                      whileHover={{
                        y: -4,
                        scale: 1.03,
                      }}
                      className="group/skill flex items-center gap-2.5 rounded-full border border-[#64748b]/15 bg-white px-5 py-3 text-sm font-semibold text-[#0f172a] shadow-sm transition-colors duration-300 hover:border-[#2563eb]/40 hover:bg-[#dbeafe] hover:text-[#2563eb]"
                    >
                      <Icon className="text-lg text-[#2563eb] transition-transform duration-300 group-hover/skill:scale-110" />

                      <span>{skill.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}