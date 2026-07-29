"use client";

import { useState } from "react";

const navigation = [
  { name: "Über mich", href: "#ueber-mich" },
  { name: "Kenntnisse", href: "#kenntnisse" },
  { name: "Projekte", href: "#projekte" },
  { name: "Erfahrung", href: "#erfahrung" },
  { name: "Kontakt", href: "#kontakt" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200/70 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <a
          href="#start"
          className="text-xl font-bold tracking-tight text-slate-950"
        >
          Ibrahim<span className="text-blue-600">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <a
          href="#kontakt"
          className="hidden rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600 md:inline-flex"
        >
          Kontakt aufnehmen
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-900 md:hidden"
          aria-label="Navigation öffnen"
          aria-expanded={menuOpen}
        >
          <span className="text-2xl">{menuOpen ? "×" : "☰"}</span>
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-slate-200 bg-white px-6 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium text-slate-700 hover:text-blue-600"
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}