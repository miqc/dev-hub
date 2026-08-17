"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["about", t.nav.about],
    ["skills", t.nav.skills],
    ["projects", t.nav.projects],
    ["experience", t.nav.experience],
    ["contact", t.nav.contact],
  ];

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-white/8 bg-[#090d16]/80 shadow-2xl shadow-black/10 backdrop-blur-xl" : "bg-transparent"}`}>
      <nav className="container-shell flex h-20 items-center justify-between" aria-label="Main navigation">
        <a href="#home" className="group flex items-center gap-3 font-display text-base font-semibold tracking-tight text-white">
          <span className="grid size-9 place-items-center rounded-xl border border-blue-400/30 bg-blue-500/10 text-sm font-bold text-blue-400 transition group-hover:bg-blue-500/20">ML</span>
          <span>Micael Leal<span className="text-blue-400">.</span></span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} className="text-sm font-medium text-slate-400 transition hover:text-white">{label}</a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="flex rounded-full border border-white/10 bg-white/[0.04] p-1" aria-label="Language selector">
            {(["pt", "en"] as const).map((item) => (
              <button
                key={item}
                onClick={() => setLanguage(item)}
                className={`rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider transition ${language === item ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20" : "text-slate-500 hover:text-white"}`}
                aria-pressed={language === item}
              >
                {item}
              </button>
            ))}
          </div>
          <button className="grid size-10 place-items-center rounded-full border border-white/10 text-slate-300 lg:hidden" onClick={() => setOpen(!open)} aria-label={t.nav.menu} aria-expanded={open}>
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden border-t border-white/8 bg-[#090d16]/95 backdrop-blur-xl lg:hidden">
            <div className="container-shell flex flex-col py-4">
              {links.map(([id, label]) => (
                <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="border-b border-white/5 py-4 text-sm font-medium text-slate-300 last:border-0">{label}</a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
