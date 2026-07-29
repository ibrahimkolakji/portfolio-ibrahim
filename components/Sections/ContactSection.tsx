"use client";

import { motion } from "motion/react";
import type { IconType } from "react-icons";
import { translations } from "@/data/translations";
import { useLanguage } from "@/app/context/LanguageContext";

import {
  FaEnvelope,
  FaLinkedinIn,
  FaGithub,
  FaArrowRight,
  FaArrowUp,
} from "react-icons/fa6";

type ContactLink = {
  label: string;
  value: string;
  href: string;
  icon: IconType;
};

export default function ContactSection() {
  const { language } = useLanguage();
  const t = translations[language].contact;

  const contactLinks: ContactLink[] = [
    {
      label: t.emailLabel,
      value: "Ibrahimkolakji22@gmail.com",
      href: "mailto:ibrahimkolakji22@gmail.com",
      icon: FaEnvelope,
    },
    {
      label: "LinkedIn",
      value: t.viewProfile,
      href: "https://www.linkedin.com/in/ibrahim-kolakji-6533b538b/",
      icon: FaLinkedinIn,
    },
    {
      label: "GitHub",
      value: t.viewProjects,
      href: "https://github.com/ibrahimkolakji",
      icon: FaGithub,
    },
  ];

  return (
    <section
      id="kontakt"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white sm:py-28 lg:px-8 lg:py-32"
    >
      {/* Weicher Übergang vom hellen Bereich */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/10 to-transparent" />

      {/* Hintergrundeffekte */}
      <motion.div
        className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[150px]"
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="pointer-events-none absolute -right-40 bottom-0 h-[520px] w-[520px] rounded-full bg-cyan-500/15 blur-[160px]"
        animate={{
          x: [0, -35, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          {/* Linker Bereich */}
          <motion.div
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
              amount: 0.3,
            }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm font-semibold text-blue-200 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              {t.eyebrow}
            </div>

            <h2 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {t.titleFirst}

              <span className="block bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
                {t.titleSecond}
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              {t.description}
            </p>

            <motion.a
              href="mailto:ibrahimkolakji22@gmail.com"
              className="group mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 font-semibold text-slate-950 shadow-xl shadow-black/20 transition-colors hover:bg-blue-500 hover:text-white"
              whileHover={{
                y: -4,
              }}
              whileTap={{
                scale: 0.97,
              }}
            >
              <FaEnvelope className="text-lg" />

              {t.writeMessage}

              <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
          </motion.div>

          {/* Rechte Kontaktkarte */}
          <motion.div
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
              amount: 0.3,
            }}
            transition={{
              duration: 0.75,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8"
          >
            <div className="mb-7">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                {t.availabilityLabel}
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                {t.directContact}
              </h3>
            </div>

            <div className="space-y-3">
              {contactLinks.map((link, index) => {
                const Icon = link.icon;

                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={
                      link.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-colors hover:border-blue-400/30 hover:bg-blue-400/10 sm:p-5"
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.25 + index * 0.08,
                    }}
                    whileHover={{
                      x: 4,
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-xl text-blue-200 transition-colors duration-300 group-hover:bg-blue-400/15 group-hover:text-white">
                        <Icon />
                      </div>

                      <div>
                        <p className="text-sm text-slate-400">
                          {link.label}
                        </p>

                        <p className="mt-0.5 font-semibold text-white">
                          {link.value}
                        </p>
                      </div>
                    </div>

                    <FaArrowRight className="text-sm text-slate-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-300" />
                  </motion.a>
                );
              })}
            </div>

            <div className="mt-7 flex items-center gap-3 border-t border-white/10 pt-6 text-sm text-slate-400">
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />

                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
              </span>

              {t.openFromSeptember}
            </div>
          </motion.div>
        </div>

        {/* Unterer Abschluss */}
        <motion.div
          className="mt-20 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
        >
          <p>
            © 2026 Ibrahim Kolakji. {t.rightsReserved}
          </p>

          <a
            href="#start"
            className="group inline-flex items-center gap-2 font-semibold text-slate-400 transition-colors hover:text-white"
          >
            {t.backToTop}

            <FaArrowUp className="text-sm transition-transform duration-300 group-hover:-translate-y-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}