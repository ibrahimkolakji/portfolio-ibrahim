"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const navigation = [
  { name: "Über mich", href: "#ueber-mich", id: "ueber-mich" },
  { name: "Kenntnisse", href: "#kenntnisse", id: "kenntnisse" },
  { name: "Projekte", href: "#projekte", id: "projekte" },
  { name: "Erfahrung", href: "#erfahrung", id: "erfahrung" },
  { name: "Kontakt", href: "#kontakt", id: "kontakt" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("start");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      const sections = navigation
        .map((item) => document.getElementById(item.id))
        .filter((section): section is HTMLElement => Boolean(section));

      const currentSection = sections
        .filter((section) => section.offsetTop <= window.scrollY + 180)
        .at(-1);

      if (currentSection) {
        setActiveSection(currentSection.id);
      } else {
        setActiveSection("start");
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavigationClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "pt-3" : "pt-4 sm:pt-5"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`mx-auto flex max-w-7xl items-center justify-between border px-3 transition-all duration-500 sm:px-4 ${
            scrolled
              ? "h-16 w-[calc(100%-1.5rem)] rounded-2xl border-white/70 bg-white/80 shadow-xl shadow-slate-900/10 backdrop-blur-2xl sm:w-[calc(100%-3rem)]"
              : "h-18 w-[calc(100%-1.5rem)] rounded-[1.4rem] border-white/60 bg-white/65 shadow-lg shadow-slate-900/5 backdrop-blur-xl sm:h-20 sm:w-[calc(100%-3rem)]"
          }`}
        >
          {/* Logo */}
          <a
            href="#start"
            onClick={handleNavigationClick}
            className="group flex items-center gap-3 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label="Zur Startseite"
          >
            <motion.span
              whileHover={{
                rotate: -5,
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-slate-950 text-sm font-bold text-white shadow-lg shadow-slate-950/20"
            >
              <span className="relative z-10">IK</span>

              <span className="absolute -bottom-4 -right-4 h-8 w-8 rounded-full bg-blue-600 blur-md transition-transform duration-500 group-hover:scale-150" />
            </motion.span>

            <span className="hidden sm:block">
              <span className="block text-sm font-bold tracking-tight text-slate-950">
                Ibrahim Kolakji
              </span>

              <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                Wirtschaftsinformatik
              </span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center rounded-full border border-slate-200/80 bg-slate-50/80 p-1.5 md:flex"
            aria-label="Hauptnavigation"
          >
            {navigation.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
                    isActive
                      ? "text-slate-950"
                      : "text-slate-500 hover:text-slate-950"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-navigation"
                      className="absolute inset-0 rounded-full border border-slate-200 bg-white shadow-sm"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}

                  <span className="relative z-10">{item.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Kontaktbutton */}
          <motion.a
            href="#kontakt"
            whileHover={{
              y: -2,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="group relative hidden overflow-hidden rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-950/15 md:inline-flex"
          >
            <span className="absolute inset-0 translate-y-full bg-gradient-to-r from-blue-600 to-cyan-500 transition-transform duration-300 group-hover:translate-y-0" />

            <span className="relative z-10 flex items-center gap-2">
              Kontakt
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white/80 text-slate-950 shadow-sm transition hover:border-blue-300 hover:bg-blue-50 md:hidden"
            aria-label={
              menuOpen ? "Navigation schließen" : "Navigation öffnen"
            }
            aria-expanded={menuOpen}
          >
            <span className="sr-only">
              {menuOpen ? "Navigation schließen" : "Navigation öffnen"}
            </span>

            <span className="relative block h-5 w-5">
              <motion.span
                className="absolute left-0 top-1 block h-0.5 w-5 rounded-full bg-current"
                animate={
                  menuOpen
                    ? {
                        y: 6,
                        rotate: 45,
                      }
                    : {
                        y: 0,
                        rotate: 0,
                      }
                }
                transition={{
                  duration: 0.25,
                }}
              />

              <motion.span
                className="absolute left-0 top-[9px] block h-0.5 w-5 rounded-full bg-current"
                animate={{
                  opacity: menuOpen ? 0 : 1,
                  x: menuOpen ? 8 : 0,
                }}
                transition={{
                  duration: 0.2,
                }}
              />

              <motion.span
                className="absolute bottom-1 left-0 block h-0.5 w-5 rounded-full bg-current"
                animate={
                  menuOpen
                    ? {
                        y: -6,
                        rotate: -45,
                      }
                    : {
                        y: 0,
                        rotate: 0,
                      }
                }
                transition={{
                  duration: 0.25,
                }}
              />
            </span>
          </button>
        </motion.div>
      </header>

      {/* Mobiles Menü */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              aria-label="Mobiles Menü schließen"
              onClick={() => setMenuOpen(false)}
              className="absolute inset-0 bg-slate-950/35 backdrop-blur-md"
            />

            <motion.div
              initial={{
                opacity: 0,
                y: -25,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -20,
                scale: 0.97,
              }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute left-3 right-3 top-24 overflow-hidden rounded-[2rem] border border-white/70 bg-white/95 p-4 shadow-2xl shadow-slate-950/20 backdrop-blur-2xl"
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-100 blur-3xl" />

              <nav
                className="relative flex flex-col gap-2"
                aria-label="Mobile Navigation"
              >
                {navigation.map((item, index) => {
                  const isActive = activeSection === item.id;

                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={handleNavigationClick}
                      initial={{
                        opacity: 0,
                        x: -15,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.05,
                        duration: 0.3,
                      }}
                      className={`group flex items-center justify-between rounded-2xl px-5 py-4 text-base font-semibold transition ${
                        isActive
                          ? "bg-slate-950 text-white"
                          : "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
                      }`}
                    >
                      <span>{item.name}</span>

                      <span
                        className={`transition-transform duration-300 group-hover:translate-x-1 ${
                          isActive ? "text-blue-300" : "text-slate-400"
                        }`}
                      >
                        →
                      </span>
                    </motion.a>
                  );
                })}
              </nav>

              <div className="relative mt-4 border-t border-slate-200 pt-4">
                <a
                  href="#kontakt"
                  onClick={handleNavigationClick}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-4 font-semibold text-white shadow-lg shadow-blue-600/20"
                >
                  Kontakt aufnehmen
                  <span>→</span>
                </a>

                <div className="mt-4 flex items-center justify-between px-2 text-xs font-medium text-slate-400">
                  <span>Stuttgart</span>
                  <span>Web · Data · IT</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}