"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  Copy,
  Github,
  Linkedin,
  Mail,
  Plane,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { Navbar } from "@/components/navbar";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { useSectionKeyboardNav } from "@/lib/use-section-keyboard-nav";
import { technologies } from "@/lib/technologies";
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/lib/profile";
import { copyText } from "@/lib/clipboard";

const whyIcons = [ShieldCheck, Workflow, BookOpen];

export function EmbraerPresentation() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    if (!(await copyText(EMAIL))) return;
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  const sections = useMemo(
    () => [
      { id: "apresentacao", label: t.embraer.nav.intro },
      { id: "resumo", label: t.embraer.nav.summary },
      { id: "trajetoria", label: t.embraer.nav.trajectory },
      { id: "stack", label: t.embraer.nav.stack },
      { id: "projetos", label: t.embraer.nav.projects },
      { id: "abordagem", label: t.embraer.nav.approach },
      { id: "contribuicao", label: t.embraer.nav.contribution },
      { id: "contato", label: t.embraer.nav.contact },
    ],
    [t],
  );

  const heroLinks = sections.slice(1);

  useSectionKeyboardNav(sections);

  return (
    <main className="overflow-hidden bg-[#080c14] text-slate-100">
      <Navbar />

      <section id="apresentacao" className="relative flex min-h-[92vh] items-center overflow-hidden pt-24">
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

        <div className="container-shell relative grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_.95fr] lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-500/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[.22em] text-blue-300">
              <Plane size={13} aria-hidden="true" />
              {t.embraer.badge}
            </span>

            <h1 className="mt-6 font-display text-5xl font-semibold leading-[.95] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
              {t.embraer.title}
            </h1>
            <p className="mt-4 font-display text-xl font-medium tracking-tight text-slate-200 sm:text-2xl">
              {t.embraer.role}
            </p>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">{t.embraer.pitch}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#resumo" className="button-primary group">
                {t.embraer.summaryCta}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#contato" className="button-secondary">
                {t.embraer.contactCta}
              </a>
            </div>

            <nav aria-label={t.embraer.sectionsLabel} className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
              {heroLinks.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="text-[10px] font-bold uppercase tracking-[.2em] text-slate-500 transition hover:text-blue-300"
                >
                  {section.label}
                </a>
              ))}
            </nav>
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

      <section id="resumo" className="section-space relative border-t border-white/[0.06]">
        <div className="container-shell grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
          <Reveal>
            <SectionHeading eyebrow={t.embraer.summary.eyebrow} title={t.embraer.summary.title} />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-5 text-base leading-8 text-slate-400 sm:text-lg">
              {t.embraer.summary.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {t.about.stats.map((stat) => (
                <div
                  key={stat.value}
                  className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 transition hover:-translate-y-1 hover:border-blue-400/25"
                >
                  <p className="font-display text-lg font-semibold text-white">{stat.value}</p>
                  <p className="mt-1 text-xs text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="trajetoria" className="section-space border-y border-white/[0.06] bg-[#0a0f19]">
        <div className="container-shell grid gap-14 lg:grid-cols-[.75fr_1.25fr] lg:gap-24">
          <Reveal>
            <SectionHeading
              eyebrow={t.embraer.trajectory.eyebrow}
              title={t.embraer.trajectory.title}
              description={t.embraer.trajectory.description}
            />
          </Reveal>
          <div className="relative ml-2 border-l border-white/10 pl-8 sm:pl-10">
            {t.experience.items.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08} className="relative pb-10 last:pb-0">
                <span className="absolute -left-[2.48rem] top-1.5 size-3 rounded-full border-[3px] border-[#0a0f19] bg-blue-400 ring-1 ring-blue-400/40 sm:-left-[2.98rem]" />
                <p className="text-[11px] font-bold uppercase tracking-[.2em] text-blue-400">{item.period}</p>
                <h3 className="mt-2 font-display text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-1 text-sm font-medium text-slate-500">{item.company}</p>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="stack" className="section-space">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow={t.embraer.stack.eyebrow}
              title={t.embraer.stack.title}
              description={t.embraer.stack.description}
              align="center"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="technology-grid mt-14" aria-label={t.embraer.stack.eyebrow}>
              {technologies.map(({ name, icon: Icon, color }) => (
                <li key={name} className="technology-item" style={{ "--technology-color": color } as React.CSSProperties}>
                  <Icon className="technology-icon" aria-hidden="true" />
                  <span>{name}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section id="projetos" className="section-space border-y border-white/[0.06] bg-[#0a0f19]">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow={t.embraer.projects.eyebrow}
              title={t.embraer.projects.title}
              description={t.embraer.projects.description}
            />
          </Reveal>

          <div className="mt-12 divide-y divide-white/[0.06] border-y border-white/[0.06]">
            {t.projects.items.map((project, index) => (
              <Reveal key={project.title} delay={index * 0.06}>
                <article className="group grid gap-4 py-8 sm:grid-cols-[3.5rem_1fr] sm:gap-6">
                  <span className="font-display text-sm font-semibold tracking-[.2em] text-blue-400/60">
                    0{index + 1}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                      <h3 className="font-display text-xl font-semibold text-white">{project.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-white/[0.07] bg-white/[0.03] px-2 py-0.5 text-[10px] font-semibold text-slate-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">{project.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition hover:text-blue-300"
            >
              <Github size={16} />
              {t.embraer.projects.codeCta}
              <ArrowUpRight size={14} />
            </a>
          </Reveal>
        </div>
      </section>

      <section id="abordagem" className="section-space">
        <div className="container-shell">
          <Reveal>
            <SectionHeading eyebrow={t.embraer.approach.eyebrow} title={t.embraer.approach.title} />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.embraer.approach.steps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.06}>
                <article className="flex h-full flex-col rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 transition hover:-translate-y-1 hover:border-blue-400/25">
                  <span className="font-display text-[11px] font-bold tracking-[.24em] text-blue-400/70">
                    0{index + 1}
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{step.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contribuicao" className="section-space border-t border-white/[0.06]">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow={t.embraer.why.eyebrow}
              title={t.embraer.why.title}
              description={t.embraer.why.description}
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {t.embraer.why.items.map((item, index) => {
              const Icon = whyIcons[index];
              return (
                <Reveal key={item.title} delay={index * 0.08}>
                  <article className="flex h-full flex-col rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 transition hover:-translate-y-1 hover:border-blue-400/25">
                    <span className="grid size-11 place-items-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-blue-400">
                      <Icon size={20} strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">{item.description}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contato" className="section-space relative">
        <div className="container-shell relative">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d1420] p-8 sm:p-12">
              <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
                <div className="absolute -right-20 -top-20 size-64 rounded-full bg-blue-500/10 blur-3xl" />
              </div>
              <div className="relative grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
                <div>
                  <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-blue-400">
                    <span className="inline-block h-px w-7 bg-blue-400" aria-hidden="true" />
                    {t.embraer.contact.eyebrow}
                  </p>
                  <h2 className="text-balance font-display text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                    {t.embraer.contact.title}
                  </h2>
                  <p className="mt-5 max-w-xl text-base leading-8 text-slate-400">{t.embraer.contact.description}</p>
                </div>

                <div className="flex flex-col gap-3">
                  <a href={`mailto:${EMAIL}`} className="button-primary justify-center">
                    {t.embraer.contact.emailCta}
                    <Mail size={16} />
                  </a>
                  <button type="button" onClick={copyEmail} className="button-secondary justify-center">
                    {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                    {copied ? t.embraer.contact.copied : t.embraer.contact.copyCta}
                  </button>
                  <div className="mt-2 flex gap-2">
                    <a
                      className="social-button"
                      href={GITHUB_URL}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      className="social-button"
                      href={LINKEDIN_URL}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={18} />
                    </a>
                  </div>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="mt-1 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
                  >
                    <Mail size={15} />
                    {EMAIL}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

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
