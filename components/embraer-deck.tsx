"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Globe, Github, Linkedin, Mail, Maximize, Minimize, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { CodeField, CodeFieldStatic } from "@/components/ui/code-field";
import { EmbraerLogo } from "@/components/ui/embraer-logo";
import { HeroPortrait } from "@/components/ui/hero-portrait";
import { deckSlides, formatClock, type DeckSlide, type LanguageSkill } from "@/lib/embraer-deck";
import { culturePillars } from "@/lib/culture-pillars";
import { EMAIL, GITHUB_URL, LINKEDIN_URL, PORTFOLIO_URL } from "@/lib/profile";

/** Escala oficial do documento: básico, intermediário, avançado, fluente. */
const LEVEL_SCALE: LanguageSkill["level"][] = ["Básico", "Intermediário", "Avançado", "Fluente"];

const targetSeconds = (slide: DeckSlide) => slide.seconds;

function SlideFrame({ slide, live }: { slide: DeckSlide; live: boolean }) {
  return (
    <div className="relative isolate flex flex-1 flex-col justify-between px-6 py-8 sm:px-12 sm:py-12 lg:px-20 lg:py-16">
      {slide.kind === "identity" || slide.kind === "closing" ? (
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
        <EmbraerLogo className="h-2.5 w-auto shrink-0 text-slate-500 sm:h-3.5" />
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

        {slide.kind === "system" && slide.system ? (
          <div className="flex flex-1 flex-col">
            <div>
              <p className="text-[13px] text-slate-500">{slide.system.support}</p>
              <h1 className="mt-2 font-display text-[clamp(1.9rem,4.4vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-white">
                {slide.headline}
              </h1>
            </div>

            <div className="mt-10 flex flex-1 flex-col divide-y divide-white/[0.09] border-y border-white/[0.09]">
              {slide.system.blocks.map((block, position) => (
                <div key={block.label} className="grid flex-1 items-center gap-1 py-0 sm:grid-cols-[2rem_1.15fr_1fr] sm:gap-8">
                  <span className="font-display text-xs tabular-nums text-slate-600">
                    {String(position + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-display text-[clamp(1.05rem,1.75vw,1.4rem)] font-medium leading-snug tracking-tight text-white">
                    {block.label}
                  </h2>
                  <p className="text-[clamp(.85rem,1.15vw,.98rem)] leading-relaxed text-slate-400">
                    {block.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {slide.kind === "axis" ? (
          <div className="flex flex-1 flex-col">
            <h1 className="font-display text-[clamp(1.9rem,5.2vw,4.25rem)] font-semibold leading-[1] tracking-[-0.05em] text-white">
              {slide.headline}
            </h1>
            <p className="mt-3 hidden max-w-4xl text-[clamp(.72rem,1.1vw,.88rem)] leading-relaxed text-slate-500 sm:block">
              {slide.prompt}
            </p>

            {slide.languages?.length ? (
              <div className="mt-5 flex flex-1 flex-col gap-6 sm:mt-7 sm:gap-9">
                {slide.languages.map((lang, position) => (
                  <section
                    key={lang.name}
                    className={`flex flex-1 flex-col ${position > 0 ? "border-t border-white/[0.06] pt-5 sm:pt-7" : ""}`}
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                      <h2 className="font-display text-[clamp(1.1rem,1.8vw,1.4rem)] font-medium text-white">
                        {lang.name}
                      </h2>
                      {lang.summary ? (
                        <p className="text-[clamp(.75rem,1.05vw,.88rem)] leading-snug text-slate-500">
                          {lang.summary}
                        </p>
                      ) : null}
                    </div>

                    <div className="language-skills mt-4 flex-1 border-t border-white/[0.09]">
                      {lang.skills.map((skill) => {
                        const step = LEVEL_SCALE.indexOf(skill.level);
                        return (
                          <div key={skill.label} className="lang-skill py-3 sm:py-4">
                            <p className="lang-skill-label text-[12px] text-slate-500">{skill.label}</p>

                            <p className="lang-skill-level mt-2 font-display text-[clamp(1rem,2.3vw,1.75rem)] font-medium leading-none tracking-[-0.03em] text-white sm:mt-3">
                              {skill.level}
                            </p>

                            <div className="lang-skill-meter mt-2 sm:mt-3">
                              <div className="flex gap-1.5" aria-hidden="true">
                                {LEVEL_SCALE.map((level, position) => (
                                  <span
                                    key={level}
                                    className={`h-0.5 flex-1 ${
                                      position <= step ? "bg-white/70" : "bg-white/[0.12]"
                                    }`}
                                  />
                                ))}
                              </div>
                              <p className="mt-1.5 text-[10px] text-slate-600 sm:mt-2">
                                {step + 1} de {LEVEL_SCALE.length}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </section>
                ))}
              </div>
            ) : slide.projects?.length ? (
              <div className="project-list mt-6 grid content-center gap-3 sm:grid-cols-3">
                {slide.projects.map((repo) => {
                  const Card = repo.href ? "a" : "article";
                  return (
                    <Card
                      key={repo.name}
                      {...(repo.href
                        ? { href: repo.href, target: "_blank", rel: "noreferrer", "aria-label": `${repo.name} no GitHub` }
                        : {})}
                      className={`deck-project flex overflow-hidden rounded-xl border border-white/[0.09] bg-white/[0.02] ${
                        repo.href ? "transition hover:border-blue-400/30 hover:bg-blue-500/[0.05]" : ""
                      }`}
                    >
                      <div className="project-shot relative w-full shrink-0 bg-[#0b1220]">
                        {repo.image ? (
                          <Image
                            src={repo.image}
                            alt={`Captura de tela de ${repo.name}`}
                            fill
                            sizes="(max-width: 700px) 92vw, (max-width: 1024px) 45vw, 30vw"
                            unoptimized
                            className="object-cover object-top"
                          />
                        ) : (
                          <span className="absolute inset-0 grid place-items-center text-[10px] uppercase tracking-[.18em] text-slate-700">
                            Imagem do projeto
                          </span>
                        )}
                      </div>

                      <div className="flex flex-1 flex-col border-t border-white/[0.08] p-4 sm:p-5">
                        <p className="text-[9px] font-bold uppercase tracking-[.2em] text-blue-300">{repo.kind}</p>
                        <h2 className="mt-1.5 font-display text-[clamp(.9rem,1.6vw,1.25rem)] font-semibold leading-snug text-white">
                          {repo.name}
                        </h2>
                        <p className="mt-2 text-[clamp(.75rem,1.05vw,.88rem)] leading-relaxed text-slate-400">
                          {repo.what}
                        </p>

                        <dl className="mt-4 space-y-1 border-t border-white/[0.06] pt-3">
                          {repo.stack.map((item) => (
                            <div key={item.layer} className="flex items-baseline justify-between gap-3">
                              <dt className="text-[9px] uppercase tracking-[.14em] text-slate-600">{item.layer}</dt>
                              <dd className="text-right font-mono text-[10px] text-slate-400">{item.tech}</dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                    </Card>
                  );
                })}
              </div>
            ) : slide.pillarChoice ? (
              <div className="mt-7 flex flex-1 flex-col justify-center">
                <ul className="pillar-grid">
                  {culturePillars.map((pillar) => {
                    const chosen = pillar.id === slide.pillarChoice?.chosenId;
                    return (
                      <li
                        key={pillar.id}
                        className={`flex aspect-square flex-col justify-between rounded-xl border p-5 ${
                          chosen ? "border-blue-400/60 bg-blue-500/[0.08]" : "border-white/[0.08] bg-white/[0.02]"
                        }`}
                      >
                        <span
                          className={`font-display text-[11px] tabular-nums ${
                            chosen ? "text-blue-300" : "text-slate-600"
                          }`}
                        >
                          {String(pillar.index).padStart(2, "0")}
                        </span>
                        <span
                          className={`font-display text-[clamp(.9rem,1.45vw,1.3rem)] font-medium leading-snug ${
                            chosen ? "text-white" : "text-slate-500"
                          }`}
                        >
                          {pillar.label}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : slide.competences?.length ? (
              <div className="competence-block flex flex-1 flex-col justify-center">
                <div className="deck-cols-2 border-y border-white/[0.09]">
                  {slide.competences.map((item, position) => (
                    <article key={item.name} className="flex flex-col justify-center gap-3 py-10">
                      <span className="font-display text-[11px] tabular-nums tracking-[.24em] text-slate-600">
                        {String(position + 1).padStart(2, "0")}
                      </span>
                      <h2 className="font-display text-[clamp(1.5rem,3.4vw,2.8rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-white">
                        {item.name}
                      </h2>
                      <p className="max-w-sm text-[clamp(.88rem,1.25vw,1.05rem)] leading-relaxed text-slate-400">
                        {item.detail}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            ) : slide.tech?.length ? (
              <div className="deck-cols-3 mt-9 flex-1 border-t border-white/[0.09]">
                {slide.tech.map((group) => (
                  <section key={group.area} className="flex flex-col py-7">
                    <p className="text-[13px] text-slate-500">{group.area}</p>

                    <ul className="mt-5 flex flex-1 flex-col">
                      {group.items.map((item) => (
                        <li
                          key={item.name}
                          className="flex flex-1 items-center justify-between gap-3 border-b border-white/[0.05] last:border-b-0"
                        >
                          <span className="font-display text-[clamp(1.05rem,1.75vw,1.4rem)] font-medium text-white">
                            {item.name}
                          </span>
                          <span className="whitespace-nowrap text-[clamp(.7rem,.95vw,.82rem)] text-slate-500">
                            {item.level}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
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
            <div className="slide-closing grid items-center gap-8">
              <div>
                <h1 className="font-display text-[clamp(2.5rem,8vw,6.5rem)] font-semibold leading-[.95] tracking-[-0.055em] text-white">
                  {slide.headline}
                </h1>
                <p className="mt-6 font-display text-[clamp(1rem,2vw,1.6rem)] font-medium text-blue-200">
                  {slide.support}
                </p>
                <ul className="mt-9 flex flex-wrap gap-x-5 gap-y-2.5 text-[clamp(.7rem,1vw,.88rem)] text-slate-400">
                  <li>
                    <a
                      href={PORTFOLIO_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 transition hover:text-white"
                    >
                      <Globe size={15} className="shrink-0 text-slate-500" aria-hidden="true" />
                      miuc.dev
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="inline-flex items-center gap-2 transition hover:text-white"
                    >
                      <Mail size={15} className="shrink-0 text-slate-500" aria-hidden="true" />
                      {EMAIL}
                    </a>
                  </li>
                  <li>
                    <a
                      href={GITHUB_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 transition hover:text-white"
                    >
                      <Github size={15} className="shrink-0 text-slate-500" aria-hidden="true" />
                      github.com/miqc
                    </a>
                  </li>
                  <li>
                    <a
                      href={LINKEDIN_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 transition hover:text-white"
                    >
                      <Linkedin size={15} className="shrink-0 text-slate-500" aria-hidden="true" />
                      linkedin.com/in/micaeldev
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mx-auto w-full max-w-[13rem] sm:max-w-[17rem] lg:max-w-[21rem]">
                <HeroPortrait sizes="(max-width: 1024px) 45vw, 21rem" />
              </div>
            </div>
          </div>
        ) : null}
      </div>
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

      <div className="deck-live relative flex flex-1 flex-col">
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
            <SlideFrame slide={slide} live />
          </motion.section>
        </AnimatePresence>
      </div>

      <div className="deck-live relative border-t border-white/[0.07]">
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
              href="/"
              aria-label="Voltar ao portfólio"
              className="grid size-9 place-items-center rounded-full text-slate-400 transition hover:bg-white/5 hover:text-white"
            >
              <X size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Exportação: Ctrl+P gera um PDF com um slide por página, para levar de backup. */}
      <div className="deck-print">
        {deckSlides.map((item) => (
          <section
            key={item.id}
            className="deck-page"
            aria-hidden="true"
          >
            <SlideFrame slide={item} live={false} />
          </section>
        ))}
      </div>
    </div>
  );
}
