"use client";

import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white/70 px-6 py-5 backdrop-blur-xl lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-sm text-slate-500 sm:flex-row">
        <p>© 2026 Ibrahim Kolakji</p>

        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/dein-profil"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-[#2563eb]"
          >
            <FaLinkedinIn className="text-base" />
          </a>

          <a
            href="https://github.com/dein-profil"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-[#2563eb]"
          >
            <FaGithub className="text-base" />
          </a>

          <a
            href="#start"
            className="font-medium transition-colors hover:text-[#2563eb]"
          >
            Nach oben
          </a>
        </div>
      </div>
    </footer>
  );
}