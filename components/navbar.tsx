"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Plane, X } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { BrazilFlag, UnitedStatesFlag } from "@/components/ui/flags";

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const onHome = pathname === "/";
  const onEmbraer = pathname.startsWith("/embraer");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = onEmbraer
    ? [
        ["resumo", t.embraer.nav.summary],
        ["trajetoria", t.embraer.nav.trajectory],
        ["stack", t.embraer.nav.stack],
        ["projetos", t.embraer.nav.projects],
        ["contato", t.embraer.nav.contact],
      ]
    : [
        ["about", t.nav.about],
        ["skills", t.nav.skills],
        ["projects", t.nav.projects],
        ["experience", t.nav.experience],
        ["contact", t.nav.contact],
      ];

  const sectionPrefix = onHome || onEmbraer ? "" : "/";

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-white/8 bg-[#090d16]/80 shadow-2xl shadow-black/10 backdrop-blur-xl" : "bg-transparent"}`}>
      <nav className="container-shell flex h-20 items-center justify-between" aria-label="Main navigation">
        <a href={onHome ? "#home" : "/"} className="group flex items-center gap-3 font-display text-base font-semibold tracking-tight text-white">
          <span className="grid size-9 place-items-center rounded-xl border border-blue-400/30 bg-blue-500/10 text-sm font-bold text-blue-400 transition group-hover:bg-blue-500/20">ML</span>
          <span>Micael Leal<span className="text-blue-400"></span></span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map(([id, label]) => (
            <a key={id} href={`${sectionPrefix}#${id}`} className="text-sm font-medium text-slate-400 transition hover:text-white">{label}</a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/embraer"
            aria-current={onEmbraer ? "page" : undefined}
            aria-label={t.nav.embraer}
            className={`group inline-flex items-center gap-1.5 rounded-full border px-2.5 py-2 text-[10px] font-bold uppercase tracking-[.16em] transition sm:px-3.5 ${onEmbraer ? "border-blue-400/40 bg-blue-500/15 text-blue-300" : "border-white/10 bg-white/[0.04] text-slate-300 hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-white"}`}
          >
            <Plane size={13} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            <span className="hidden sm:inline">{t.nav.embraer}</span>
          </Link>
          <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1" role="group" aria-label="Language selector">
            {[
              { value: "pt" as const, name: "Português", Flag: BrazilFlag },
              { value: "en" as const, name: "English", Flag: UnitedStatesFlag },
            ].map(({ value, name, Flag }) => (
              <button
                key={value}
                onClick={() => setLanguage(value)}
                title={name}
                aria-label={name}
                aria-pressed={language === value}
                className={`grid place-items-center rounded-full p-1.5 transition ${language === value ? "bg-white/12 ring-1 ring-blue-400/50" : "opacity-55 hover:bg-white/5 hover:opacity-100"}`}
              >
                <Flag className="h-3.5 w-5 rounded-[2px] shadow-sm shadow-black/40" />
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
                <a key={id} href={`${sectionPrefix}#${id}`} onClick={() => setOpen(false)} className="border-b border-white/5 py-4 text-sm font-medium text-slate-300 last:border-0">{label}</a>
              ))}
              {onEmbraer ? (
                <Link href="/" onClick={() => setOpen(false)} className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold text-slate-200">
                  {t.embraer.contact.back}
                </Link>
              ) : (
                <Link href="/embraer" onClick={() => setOpen(false)} className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl border border-blue-400/30 bg-blue-500/15 px-4 py-3 text-sm font-bold text-blue-300">
                  <Plane size={16} aria-hidden="true" />
                  {t.nav.embraer}
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
