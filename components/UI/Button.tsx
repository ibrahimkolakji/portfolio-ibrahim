"use client";

import { motion } from "motion/react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function LanguageButton() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.button
      type="button"
      onClick={toggleLanguage}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.96 }}
      aria-label={
        language === "de"
          ? "Sprache auf Englisch ändern"
          : "Change language to German"
      }
      className="inline-flex h-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 px-4 text-sm font-bold text-slate-700 shadow-sm backdrop-blur transition-colors hover:border-blue-500 hover:text-blue-600"
    >
      {language === "de" ? "EN" : "DE"}
    </motion.button>
  );
}