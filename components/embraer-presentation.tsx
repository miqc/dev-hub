"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, ClipboardList, ListOrdered, MessageCircleQuestion, Mic, Plane, Play, Table2 } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { Navbar } from "@/components/navbar";
import { EmbraerBriefing } from "@/components/embraer-briefing";
import { EmbraerFicha } from "@/components/embraer-ficha";
import { EmbraerQa } from "@/components/embraer-qa";
import { EmbraerRehearsal } from "@/components/embraer-rehearsal";
import { EmbraerRoteiro } from "@/components/embraer-roteiro";
import {
  TOTAL_SECONDS,
  TARGET_SECONDS,
  formatClock,
  presentationTabs,
  type PresentationTabId,
} from "@/lib/embraer-script";

const tabIcons: Record<PresentationTabId, typeof ClipboardList> = {
  briefing: ClipboardList,
  roteiro: ListOrdered,
  ensaio: Mic,
  perguntas: MessageCircleQuestion,
  ficha: Table2,
};

export function EmbraerPresentation() {
  const { t } = useLanguage();
  const [hash, setHash] = useState("");

  useEffect(() => {
    const sync = () => setHash(window.location.hash.replace("#", ""));
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const tab: PresentationTabId =
    hash === "roteiro" || hash === "ensaio" || hash === "perguntas" || hash === "ficha" ? hash : "briefing";

  useEffect(() => {
    if (!hash) return;
    const frame = requestAnimationFrame(() => {
      const target = document.getElementById(hash) ?? document.getElementById("painel");
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    return () => cancelAnimationFrame(frame);
  }, [hash]);

  return (
    <main className="overflow-x-clip bg-[#080c14] text-slate-100">
      <Navbar />

      <section className="relative flex items-center overflow-hidden pt-28 pb-14">
        <div className="hero-grid absolute inset-0 opacity-25" aria-hidden="true" />
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full text-blue-400/20"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            className="flight-path"
            d="M -80 640 C 200 560 280 220 600 300 S 1000 640 1280 180"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -left-24 top-1/3 size-80 rounded-full bg-blue-600/10 blur-[140px]" />
          <div className="absolute -right-20 bottom-10 size-96 rounded-full bg-cyan-500/[0.07] blur-[150px]" />
        </div>

        <div className="container-shell relative grid items-center gap-12 py-10 lg:grid-cols-[1.05fr_.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-500/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[.22em] text-blue-300">
              <Plane size={13} aria-hidden="true" />
              {t.embraer.badge}
            </span>

            <h1 className="mt-6 font-display text-4xl font-semibold leading-[.95] tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
              {t.embraer.title}
            </h1>
            <p className="mt-4 font-display text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
              Etapa Dinâmica 2027 · roteiro de {formatClock(TOTAL_SECONDS)}
            </p>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-400">
              Briefing, cronômetro de ensaio e ficha rápida no mesmo lugar. O roteiro falado é escrito bloco por
              bloco, com alvo de {formatClock(TARGET_SECONDS)}.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#briefing" className="button-primary group">
                Abrir o briefing
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a href="/embraer/slides" className="button-secondary">
                <Play size={15} />
                Apresentar os slides
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute inset-6 rounded-full bg-blue-500/10 blur-[80px]" aria-hidden="true" />
            <div className="relative rounded-[1.75rem] border border-white/10 bg-[#0b1220]/85 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <p className="text-[11px] font-bold uppercase tracking-[.24em] text-blue-400">{t.embraer.cardTitle}</p>
                <span className="grid size-9 place-items-center rounded-xl border border-blue-400/25 bg-blue-500/10 text-blue-400">
                  <Plane size={17} aria-hidden="true" />
                </span>
              </div>

              <div className="mt-6 flex items-center gap-2.5 rounded-xl border border-emerald-400/15 bg-emerald-400/[0.06] px-3.5 py-2.5">
                <span className="relative flex size-2" aria-hidden="true">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
                </span>
                <p className="text-xs font-medium text-emerald-300">{t.embraer.availability}</p>
              </div>

              <dl className="mt-6 divide-y divide-white/[0.06]">
                {t.embraer.facts.map((fact) => (
                  <div key={fact.label} className="grid gap-1 py-3.5 sm:grid-cols-[7.5rem_1fr] sm:items-baseline sm:gap-4">
                    <dt className="text-[10px] font-bold uppercase tracking-[.18em] text-slate-500">{fact.label}</dt>
                    <dd className="text-sm font-medium leading-6 text-slate-200">{fact.value}</dd>
                  </div>
                ))}
              </dl>

              <Link
                href="/"
                className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-slate-400 transition hover:text-white"
              >
                {t.embraer.cardFooter}
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <div id="painel" aria-hidden="true" className="h-px" />
      <div className="sticky top-20 z-40 border-y border-white/[0.06] bg-[#080c14]/90 backdrop-blur-xl">
        <div className="container-shell flex flex-wrap items-center gap-1 py-3">
          {presentationTabs.map(({ id, label }) => {
            const Icon = tabIcons[id];
            const active = tab === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                aria-current={active ? "page" : undefined}
                className={`inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition ${
                  active
                    ? "bg-blue-500/15 text-blue-200 ring-1 ring-blue-400/30"
                    : "text-slate-500 hover:bg-white/[0.04] hover:text-slate-200"
                }`}
              >
                <Icon size={14} aria-hidden="true" />
                {label}
              </a>
            );
          })}
          <Link
            href="/embraer/slides"
            className="ml-auto hidden shrink-0 items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-xs font-semibold text-blue-200 transition hover:bg-blue-500/20 sm:inline-flex"
          >
            <Play size={13} aria-hidden="true" />
            Apresentar
          </Link>
        </div>
      </div>

      {tab === "briefing" ? <EmbraerBriefing /> : null}
      {tab === "roteiro" ? <EmbraerRoteiro /> : null}
      {tab === "ensaio" ? <EmbraerRehearsal /> : null}
      {tab === "perguntas" ? <EmbraerQa /> : null}
      {tab === "ficha" ? <EmbraerFicha /> : null}

      <footer className="border-t border-white/[0.06] py-8">
        <div className="container-shell flex flex-col items-center justify-between gap-4 text-center text-xs text-slate-600 sm:flex-row sm:text-left">
          <p>{t.embraer.footer}</p>
          <Link href="/" className="inline-flex items-center gap-2 text-slate-400 transition hover:text-white">
            <ArrowLeft size={14} />
            {t.embraer.contact.back}
          </Link>
        </div>
      </footer>
    </main>
  );
}
