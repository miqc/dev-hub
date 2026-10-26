"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Maximize, Minimize, X } from "lucide-react";
import Link from "next/link";
import { CodeField, CodeFieldStatic } from "@/components/ui/code-field";
import { EmbraerLogo } from "@/components/ui/embraer-logo";
import { HeroPortrait } from "@/components/ui/hero-portrait";
import { deckSlides, type DeckSlide, type LanguageSkill } from "@/lib/embraer-deck";
import { formatClock } from "@/lib/embraer-script";
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/lib/profile";

/** Escala oficial do documento: básico, intermediário, avançado, fluente. */
const LEVEL_SCALE: LanguageSkill["level"][] = ["Básico", "Intermediário", "Avançado", "Fluente"];

const targetSeconds = (slide: DeckSlide) => slide.seconds;

function SlideFrame({ slide, index, live }: { slide: DeckSlide; index: number; live: boolean }) {
  return (
    <div className="relative isolate flex flex-1 flex-col justify-between px-6 py-8 sm:px-12 sm:py-12 lg:px-20 lg:py-16">
      {slide.kind === "identity" ? (
        <>
          {live ? <CodeField /> : <CodeFieldStatic />}
          <div className="hero-grid pointer-events-none absolute inset-0 -z-10 opacity-30" aria-hidden="true" />
          <div
            className="pointer-events-none absolute -left-[6%] -top-[10%] -z-10 size-72 rounded-full bg-blue-600/10 blur-[120px]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-[14%] right-[4%] -z-10 size-96 rounded-full bg-violet-600/10 blur-[140px]"
            aria-hidden="true"
          />
        </>
      ) : null}
      <header className="flex items-center justify-between gap-4">
        <p className="flex min-w-0 items-center gap-2.5 text-[9px] font-bold uppercase tracking-[.2em] text-blue-400 sm:gap-3 sm:text-xs sm:tracking-[.28em]">
          <span className="hidden h-px w-8 shrink-0 bg-blue-400/70 sm:inline-block" aria-hidden="true" />
          <span className="truncate">{slide.kicker}</span>
        </p>
        <div className="flex shrink-0 items-center gap-3 sm:gap-5">
          <EmbraerLogo className="h-2.5 w-auto shrink-0 text-slate-500 sm:h-3.5" />
          <p className="whitespace-nowrap font-display text-[9px] tabular-nums tracking-[.14em] text-slate-600 sm:text-xs sm:tracking-[.2em]">
            {String(index + 1).padStart(2, "0")} / {String(deckSlides.length).padStart(2, "0")}
          </p>
        </div>
      </header>

      <div className="flex flex-1 flex-col justify-center py-8">
        {slide.kind === "identity" ? (
          <div>
            <div className="slide-identity grid items-center gap-8">
              <div className="relative z-10">
                {slide.eyebrow ? (
                  <p className="text-[clamp(.7rem,1.1vw,.9rem)] font-medium uppercase tracking-[0.24em] text-slate-400">
                    {slide.eyebrow}
                  </p>
                ) : null}
                <h1 className="mt-3 font-display text-[clamp(2.5rem,8.4vw,7rem)] font-semibold leading-[.92] tracking-[-0.06em] text-white">
                  {slide.headline}
                </h1>
                <h2 className="mt-6 font-display text-[clamp(1.1rem,2.4vw,2.1rem)] font-medium tracking-tight text-slate-200">
                  {slide.support}
                </h2>

                {slide.education?.length || slide.internship ? (
                  <ul className="mt-7 space-y-3 border-l-2 border-blue-400/40 pl-4">
                    {slide.education?.map((item) => (
                      <li key={`${item.institution}-${item.course}`}>
                        <p className="font-display text-[clamp(.9rem,1.55vw,1.2rem)] font-medium leading-snug text-white">
                          {item.course}
                        </p>
                        <p className="mt-0.5 flex flex-wrap items-center gap-x-2 text-[clamp(.7rem,1.05vw,.88rem)] font-medium text-slate-400">
                          <span>{item.institution}</span>
                          <span className="text-slate-600" aria-hidden="true">·</span>
                          <span>{item.term}</span>
                        </p>
                      </li>
                    ))}

                    {slide.internship ? (
                      <li>
                        <p className="font-display text-[clamp(.9rem,1.55vw,1.2rem)] font-medium leading-snug text-white">
                          {slide.internship.role}
                        </p>
                        <p className="mt-0.5 flex flex-wrap items-center gap-x-2 text-[clamp(.7rem,1.05vw,.88rem)] font-medium text-slate-400">
                          <span>{slide.internship.organization}</span>
                          <span className="text-slate-600" aria-hidden="true">·</span>
                          <span>{slide.internship.duration}</span>
                        </p>
                      </li>
                    ) : null}
                  </ul>
                ) : null}
              </div>

              <div className="relative z-10 mx-auto w-full max-w-[15rem] sm:max-w-[19rem] lg:max-w-[23rem]">
                <HeroPortrait sizes="(max-width: 1024px) 50vw, 23rem" priority />
              </div>
            </div>
          </div>
        ) : null}

        {slide.kind === "axis" ? (
          <div className="flex flex-1 flex-col">
            <h1 className="font-display text-[clamp(1.9rem,5.2vw,4.25rem)] font-semibold leading-[1] tracking-[-0.05em] text-white">
              {slide.headline}
            </h1>
            <p className="mt-3 max-w-4xl text-[clamp(.72rem,1.1vw,.88rem)] leading-relaxed text-slate-500">
              {slide.prompt}
            </p>

            {slide.language ? (
              <div className="mt-6 flex flex-1 flex-col">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 px-1">
                  <h2 className="font-display text-[clamp(1.25rem,2.6vw,2rem)] font-semibold text-white">
                    {slide.language.name}
                  </h2>
                  <p className="text-[clamp(.78rem,1.25vw,.95rem)] font-medium text-slate-500">
                    {slide.language.summary}
                  </p>
                </div>

                <div className="language-skills mt-4 grid flex-1 gap-4">
                  {slide.language.skills.map((skill) => {
                    const step = LEVEL_SCALE.indexOf(skill.level);
                    const tone =
                      skill.level === "Básico"
                        ? { text: "text-amber-300", bar: "bg-amber-400/70" }
                        : skill.level === "Intermediário"
                          ? { text: "text-blue-300", bar: "bg-blue-400/70" }
                          : { text: "text-emerald-300", bar: "bg-emerald-400/70" };

                    return (
                      <div
                        key={skill.label}
                        className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
                      >
                        <p className="text-[10px] font-bold uppercase tracking-[.22em] text-slate-500">
                          {skill.label}
                        </p>

                        <p
                          className={`font-display text-[clamp(1.6rem,4.4vw,3.5rem)] font-semibold leading-[.95] tracking-[-0.04em] ${tone.text}`}
                        >
                          {skill.level}
                        </p>

                        <div>
                          <div className="flex gap-2" aria-hidden="true">
                            {LEVEL_SCALE.map((level, position) => (
                              <span
                                key={level}
                                className={`h-1.5 flex-1 rounded-full ${position <= step ? tone.bar : "bg-white/10"}`}
                              />
                            ))}
                          </div>
                          <p className="mt-3 text-[10px] font-medium uppercase tracking-[.14em] text-slate-600">
                            {step + 1} de {LEVEL_SCALE.length}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : slide.internship ? (
              <div className="mt-6 flex flex-1 flex-col gap-4">
                <p className="flex flex-wrap items-center gap-x-2 px-1 text-[clamp(.72rem,1.1vw,.9rem)] font-medium text-slate-500">
                  <span className="font-display text-slate-300">{slide.internship.role}</span>
                  <span className="text-slate-700" aria-hidden="true">·</span>
                  <span>{slide.internship.organization}</span>
                  <span className="text-slate-700" aria-hidden="true">·</span>
                  <span>{slide.internship.duration}</span>
                </p>

                <div className="flex flex-1 flex-col items-center justify-center rounded-2xl border border-dashed border-white/20 bg-white/[0.02] p-6 text-center">
                  <p className="text-[10px] font-bold uppercase tracking-[.24em] text-slate-600">A preencher</p>
                  <p className="mt-2 max-w-2xl font-display text-[clamp(.85rem,1.4vw,1.1rem)] font-medium leading-snug text-slate-500">
                    {slide.empty}
                  </p>
                </div>
              </div>
            ) : slide.place ? (
              <div className="residence-split mt-6 flex flex-1 flex-col justify-center gap-10">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[.24em] text-blue-300">
                    Onde eu moro hoje
                  </p>
                  <p className="mt-4 font-display text-[clamp(2.1rem,6.6vw,5.2rem)] font-semibold leading-[.9] tracking-[-0.055em] text-white">
                    {slide.place.city}
                  </p>
                  <p className="mt-4 font-display text-[clamp(.9rem,1.5vw,1.15rem)] font-medium text-slate-400">
                    {slide.place.region}
                  </p>
                </div>

                <div className="border-t border-white/10 pt-8">
                  <p className="max-w-xl font-display text-[clamp(1.6rem,4vw,3.4rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-white">
                    {slide.place.bond}
                  </p>
                  <p className="mt-5 max-w-md font-display text-[clamp(.95rem,1.6vw,1.25rem)] font-medium leading-snug text-slate-400">
                    {slide.place.consequence}
                  </p>
                </div>
              </div>
            ) : (
              <div className="mt-8 flex flex-1 flex-col items-center justify-center rounded-2xl border border-dashed border-white/20 bg-white/[0.02] p-8 text-center">
                <p className="text-[10px] font-bold uppercase tracking-[.24em] text-slate-600">A preencher</p>
                <p className="mt-3 max-w-2xl font-display text-[clamp(.95rem,1.7vw,1.35rem)] font-medium leading-snug text-slate-500">
                  {slide.empty}
                </p>
              </div>
            )}
          </div>
        ) : null}

        {slide.kind === "closing" ? (
          <div>
            <h1 className="max-w-4xl font-display text-[clamp(1.75rem,4.6vw,3.9rem)] font-semibold leading-[1.03] tracking-[-0.045em] text-white">
              {slide.headline}
            </h1>
            <p className="mt-6 font-display text-[clamp(.95rem,1.7vw,1.3rem)] text-slate-400">{slide.support}</p>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2 text-sm text-slate-400">
              <a href={`mailto:${EMAIL}`} className="transition hover:text-white">
                {EMAIL}
              </a>
              <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="transition hover:text-white">
                github.com/miqc
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="transition hover:text-white">
                linkedin.com/in/micaelleal
              </a>
            </div>
          </div>
        ) : null}
      </div>

      <footer className="flex items-center justify-between gap-6 text-[10px] font-bold uppercase tracking-[.2em] text-slate-600">
        <span>{targetSeconds(slide)}s neste slide</span>
        <span className="hidden sm:inline print:hidden">← → para navegar · F tela cheia</span>
      </footer>
    </div>
  );
}

export function EmbraerDeck() {
  const [index, setIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const reduceMotion = useReducedMotion();

  // Deep link: /embraer/slides#s4 abre no slide 4, inclusive em navegação client-side.
  useEffect(() => {
    const apply = () => {
      const found = deckSlides.findIndex((slide) => slide.id === window.location.hash.replace("#", ""));
      if (found >= 0) setIndex(found);
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, []);

  const go = useCallback((next: number) => {
    setIndex((current) => Math.min(deckSlides.length - 1, Math.max(0, next)));
  }, []);

  const toggleFullscreen = useCallback(() => {
    const root = document.documentElement;
    if (document.fullscreenElement) void document.exitFullscreen();
    else void root.requestFullscreen?.().catch(() => undefined);
  }, []);

  useEffect(() => {
    const onChange = () => setFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      if (key === "arrowright" || key === "pagedown" || event.code === "Space") {
        event.preventDefault();
        setIndex((current) => Math.min(deckSlides.length - 1, current + 1));
      }
      if (key === "arrowleft" || key === "pageup") {
        event.preventDefault();
        setIndex((current) => Math.max(0, current - 1));
      }
      if (key === "home") {
        event.preventDefault();
        setIndex(0);
      }
      if (key === "end") {
        event.preventDefault();
        setIndex(deckSlides.length - 1);
      }
      if (key === "f") toggleFullscreen();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [toggleFullscreen]);

  const slide = deckSlides[index];

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#080c14] text-slate-100 print:min-h-0 print:overflow-visible">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-20" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-40 top-1/4 size-[28rem] rounded-full bg-blue-600/[0.09] blur-[160px]"
        aria-hidden="true"
      />

      <div className="relative flex flex-1 flex-col print:hidden">
        <AnimatePresence mode="wait">
          <motion.section
            key={slide.id}
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-1 flex-col"
            aria-live="polite"
          >
            <SlideFrame slide={slide} index={index} live />
          </motion.section>
        </AnimatePresence>
      </div>

      <div className="relative border-t border-white/[0.07] print:hidden">
        <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between gap-4 px-6 py-3 sm:px-12 lg:px-20">
          <div className="flex items-center gap-1.5" role="tablist" aria-label="Slides">
            {deckSlides.map((item, position) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={position === index}
                aria-label={`Slide ${position + 1}: ${item.headline}`}
                onClick={() => go(position)}
                className={`h-1.5 rounded-full transition-all ${
                  position === index ? "w-8 bg-blue-400" : "w-3 bg-white/15 hover:bg-white/30"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => go(index - 1)}
              disabled={index === 0}
              aria-label="Slide anterior"
              className="grid size-9 place-items-center rounded-full text-slate-400 transition hover:bg-white/5 hover:text-white disabled:opacity-30"
            >
              <ArrowLeft size={16} />
            </button>
            <span className="min-w-16 text-center font-display text-xs tabular-nums text-slate-500">
              {formatClock(targetSeconds(slide))}
            </span>
            <button
              type="button"
              onClick={() => go(index + 1)}
              disabled={index === deckSlides.length - 1}
              aria-label="Próximo slide"
              className="grid size-9 place-items-center rounded-full text-slate-400 transition hover:bg-white/5 hover:text-white disabled:opacity-30"
            >
              <ArrowRight size={16} />
            </button>
            <button
              type="button"
              onClick={toggleFullscreen}
              aria-label={fullscreen ? "Sair da tela cheia" : "Tela cheia"}
              className="grid size-9 place-items-center rounded-full text-slate-400 transition hover:bg-white/5 hover:text-white"
            >
              {fullscreen ? <Minimize size={15} /> : <Maximize size={15} />}
            </button>
            <Link
              href="/embraer#roteiro"
              aria-label="Voltar ao roteiro"
              className="grid size-9 place-items-center rounded-full text-slate-400 transition hover:bg-white/5 hover:text-white"
            >
              <X size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Exportação: Ctrl+P gera um PDF com um slide por página, para levar de backup. */}
      <div className="hidden print:block">
        {deckSlides.map((item, position) => (
          <section
            key={item.id}
            className="deck-page break-after-page bg-[#080c14] text-slate-100"
            aria-hidden="true"
          >
            <SlideFrame slide={item} index={position} live={false} />
          </section>
        ))}
      </div>
    </div>
  );
}
