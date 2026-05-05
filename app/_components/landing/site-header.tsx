"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Tentang Kami", href: "#tentang-kami" },
  { label: "Recovery", href: "#pendekatan-recovery" },
  { label: "Dampak", href: "#dampak-serangan" },
  { label: "Kenapa Kami", href: "#kenapa-kami" },
  { label: "Tahapan", href: "#tahapan-recovery" },
  { label: "Portofolio", href: "#portofolio" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#kontak" },
];

function ConsultationButton({ className = "" }: { className?: string }) {
  return (
    <a
      href="#kontak"
      className={`group inline-flex items-center justify-center gap-3 rounded-full bg-red-600 py-2 pl-5 pr-2 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-500 ${className}`}
    >
      <span>Konsultasi</span>
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
        <ArrowUpRight aria-hidden="true" className="h-4 w-4 text-black transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2} />
      </span>
    </a>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 w-full border-b border-white/10 bg-[#080808]/95">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <div className="flex items-center gap-10">
          <a href="#home" className="text-xl font-bold tracking-tight text-white">
            Fortamira
          </a>
          <nav aria-label="Primary navigation" className="hidden items-center gap-5 xl:gap-7 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-zinc-400 transition-colors hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <button className="text-sm font-medium text-zinc-300 transition-colors hover:text-white" type="button">
            ID / EN
          </button>
          <ConsultationButton />
        </div>

        <div className="relative lg:hidden">
          <button
            type="button"
            className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] transition-colors hover:bg-white/[0.06]"
            aria-label="Buka menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span className="sr-only">Buka menu</span>
            <span className="flex flex-col gap-1.5">
              <span className={`h-0.5 w-5 rounded-full bg-white transition-transform duration-200 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`h-0.5 w-5 rounded-full bg-white transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-5 rounded-full bg-white transition-transform duration-200 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </span>
          </button>
          <div
            className={`absolute right-0 top-14 z-50 w-72 origin-top-right rounded-xl border border-white/10 bg-[#0d0d0d] p-3 shadow-2xl shadow-black/50 transition duration-200 ${menuOpen ? "pointer-events-auto translate-y-0 scale-100 opacity-100" : "pointer-events-none -translate-y-2 scale-[0.98] opacity-0"
              }`}
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block rounded-lg px-4 py-3 text-sm text-zinc-300 hover:bg-white/[0.05] hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-3 flex items-center gap-3 border-t border-white/10 pt-3">
              <button className="rounded-lg border border-white/10 px-4 py-3 text-sm font-medium text-zinc-300" type="button">
                ID / EN
              </button>
              <ConsultationButton className="flex-1 pl-4" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
