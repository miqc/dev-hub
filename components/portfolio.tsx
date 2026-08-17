"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Braces,
  Check,
  Code2,
  Copy,
  Github,
  Linkedin,
  Mail,
  Send,
  Sparkles,
  TerminalSquare,
} from "lucide-react";
import {
  SiDjango,
  SiDocker,
  SiGit,
  SiJavascript,
  SiN8N,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { useLanguage } from "@/context/language-context";
import { Navbar } from "@/components/navbar";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Typewriter } from "@/components/ui/typewriter";
import { CodeField } from "@/components/ui/code-field";

const GITHUB_URL = "https://github.com/miqc";
const LINKEDIN_URL = "https://www.linkedin.com/in/micaelleal";
const EMAIL = "micael.leal.dev@gmail.com";

const projectIcons = [TerminalSquare, Braces, Sparkles];
const technologies = [
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
  { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
  { name: "Python", icon: SiPython, color: "#3776ab" },
  { name: "React", icon: SiReact, color: "#61dafb" },
  { name: "Django", icon: SiDjango, color: "#44b78b" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "n8n", icon: SiN8N, color: "#ea4b71" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169e1" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06b6d4" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5fa04e" },
  { name: "Docker", icon: SiDocker, color: "#2496ed" },
  { name: "Git", icon: SiGit, color: "#f05032" },
];

export function Portfolio() {
  const { t, language } = useLanguage();
  const [copied, setCopied] = useState(false);

  function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio — ${String(data.get("name"))}`);
    const body = encodeURIComponent(`${String(data.get("message"))}\n\n${String(data.get("name"))}\n${String(data.get("email"))}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  async function copyEmail() {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <main className="overflow-hidden bg-[#080c14] text-slate-100">
      <Navbar />

      <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24">
        <CodeField />
        <div className="hero-grid absolute inset-0 opacity-30" aria-hidden="true" />
        <div className="absolute left-[12%] top-[18%] size-72 rounded-full bg-blue-600/10 blur-[120px]" aria-hidden="true" />
        <div className="absolute bottom-[5%] right-[5%] size-96 rounded-full bg-violet-600/10 blur-[140px]" aria-hidden="true" />

        <div className="container-shell relative grid items-center gap-10 py-14 lg:grid-cols-[1.04fr_.96fr] lg:py-20">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="relative z-10">


            <p className="mb-3 text-sm font-medium uppercase tracking-[0.24em] text-slate-400">{t.hero.eyebrow}</p>
            <h1 className="font-display text-5xl font-semibold leading-[.95] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl xl:text-[5.35rem]">
              <Typewriter text="Micael Leal." speed={75} className="text-white" />
            </h1>
            <h2 className="mt-5 min-h-9 font-display text-xl font-medium tracking-tight text-slate-200 sm:text-2xl lg:text-3xl"><Typewriter text={t.hero.role} delay={1100} speed={58} /></h2>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              {t.hero.specialties.map((specialty) => <span key={specialty} className="rounded-md border border-white/8 bg-white/[0.035] px-3 py-1 text-xs font-medium text-slate-400">{specialty}</span>)}
            </div>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">{t.hero.description}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#projects" className="button-primary group">{t.hero.projectsCta}<ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></a>
              <a href="#contact" className="button-secondary">{t.hero.contactCta}</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }} className="hero-portrait-stage relative mx-auto w-full max-w-[540px] lg:mx-0 lg:ml-auto">
            <div className="hero-person-glow absolute inset-[18%_10%_14%] rounded-full bg-blue-500/20 blur-[90px]" aria-hidden="true" />
            <div className="hero-floor absolute bottom-[7%] left-1/2 h-16 w-[70%] -translate-x-1/2 rounded-[50%] bg-blue-500/20 blur-2xl" aria-hidden="true" />
            <div className="hero-floor-line absolute bottom-[10%] left-1/2 h-px w-[72%] -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-300/45 to-transparent" aria-hidden="true" />
            <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
            <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
            <span className="hero-spark hero-spark-one" aria-hidden="true" />
            <span className="hero-spark hero-spark-two" aria-hidden="true" />
            <span className="hero-spark hero-spark-three" aria-hidden="true" />
            <div className="hero-portrait-float relative">
              <Image src="/heroPNG.png" alt={t.hero.imageAlt} width={1280} height={1280} priority sizes="(max-width: 1024px) 90vw, 43vw" className="relative z-10 aspect-square w-full object-contain drop-shadow-[0_28px_35px_rgba(2,6,23,0.55)]" />
            </div>
            <div className="absolute -bottom-4 -left-4 hidden items-center gap-3 rounded-2xl border border-white/10 bg-[#101722]/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:flex">
              <span className="grid size-9 place-items-center rounded-xl bg-blue-500/15 text-blue-400"><Code2 size={18} /></span>
              <div><p className="font-display text-sm font-semibold text-white">{language === "pt" ? "Código com intenção" : "Code with intent"}</p><p className="text-[11px] text-slate-500">&lt;build /&gt; · ship · improve</p></div>
            </div>
          </motion.div>
        </div>

        <a href="#about" className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[10px] font-semibold uppercase tracking-[.22em] text-slate-600 transition hover:text-slate-300 lg:flex">
          {t.hero.scroll}<ArrowDown size={14} className="animate-bounce" />
        </a>
      </section>

      <section id="about" className="section-space relative border-t border-white/[0.06]">
        <div className="container-shell grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
          <Reveal><SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} /></Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-5 text-base leading-8 text-slate-400 sm:text-lg">{t.about.text.map((text) => <p key={text}>{text}</p>)}</div>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {t.about.stats.map((stat) => (
                <div key={stat.value} className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 transition hover:-translate-y-1 hover:border-blue-400/25">
                  <p className="font-display text-lg font-semibold text-white">{stat.value}</p><p className="mt-1 text-xs text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="skills" className="section-space bg-[#0a0f19]">
        <div className="container-shell">
          <Reveal><SectionHeading eyebrow={t.skills.eyebrow} title={t.skills.title} description={t.skills.description} align="center" /></Reveal>
          <Reveal delay={0.1}>
            <ul className="technology-grid mt-14" aria-label={t.skills.eyebrow}>
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

      <section id="projects" className="section-space">
        <div className="container-shell">
          <Reveal><SectionHeading eyebrow={t.projects.eyebrow} title={t.projects.title} description={t.projects.description} /></Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {t.projects.items.map((project, index) => {
              const Icon = projectIcons[index];
              return (
                <Reveal key={project.title} delay={index * 0.08}>
                  <article className="project-card group flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0d1420]">
                    <div className={`project-visual accent-${project.accent} relative grid h-52 place-items-center overflow-hidden`}>
                      <div className="project-grid absolute inset-0 opacity-30" />
                      <div className="absolute size-36 rounded-full bg-current opacity-10 blur-3xl" />
                      <span className="relative grid size-16 place-items-center rounded-2xl border border-white/15 bg-[#0a101b]/70 text-white shadow-2xl backdrop-blur"><Icon size={28} strokeWidth={1.6} /></span>
                      <span className="absolute right-4 top-4 grid size-9 place-items-center rounded-full border border-white/10 bg-black/20 text-white/60 opacity-0 transition group-hover:opacity-100"><ArrowUpRight size={16} /></span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-display text-xl font-semibold text-white">{project.title}</h3>
                      <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">{project.description}</p>
                      <div className="mt-5 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="text-[11px] font-semibold text-blue-400">#{tag.replaceAll(" ", "")}</span>)}</div>
                      <div className="mt-6 flex items-center gap-5 border-t border-white/[0.06] pt-5">
                        <a href={index === 0 ? "https://github.com/miqc/dev-hub" : GITHUB_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs font-semibold text-slate-300 transition hover:text-white"><Github size={15} />{t.projects.source}</a>
                        <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs font-semibold text-slate-300 transition hover:text-white"><ArrowUpRight size={15} />{t.projects.live}</a>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="experience" className="section-space border-y border-white/[0.06] bg-[#0a0f19]">
        <div className="container-shell grid gap-14 lg:grid-cols-[.75fr_1.25fr] lg:gap-24">
          <Reveal><SectionHeading eyebrow={t.experience.eyebrow} title={t.experience.title} /></Reveal>
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

      <section id="contact" className="section-space relative">
        <div className="absolute left-1/2 top-1/2 size-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.06] blur-[150px]" aria-hidden="true" />
        <div className="container-shell relative grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <SectionHeading eyebrow={t.contact.eyebrow} title={t.contact.title} description={t.contact.description} />
            <div className="mt-9">
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-600">{t.contact.socialTitle}</p>
              <div className="flex gap-2">
                <a className="social-button" href={GITHUB_URL} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
                <a className="social-button" href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
                <button className="social-button relative" onClick={copyEmail} aria-label="Copy email">{copied ? <Check size={18} className="text-emerald-400" /> : <Copy size={18} />}</button>
              </div>
              <a href={`mailto:${EMAIL}`} className="mt-5 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"><Mail size={15} />{copied ? t.contact.copied : EMAIL}</a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={submitContact} className="rounded-3xl border border-white/[0.08] bg-[#0d1420]/80 p-6 shadow-2xl shadow-black/20 backdrop-blur sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="form-label">{t.contact.name}<input className="form-input" name="name" required placeholder={t.contact.namePlaceholder} /></label>
                <label className="form-label">{t.contact.email}<input className="form-input" name="email" type="email" required placeholder={t.contact.emailPlaceholder} /></label>
              </div>
              <label className="form-label mt-5">{t.contact.message}<textarea className="form-input min-h-36 resize-y" name="message" required placeholder={t.contact.messagePlaceholder} /></label>
              <button type="submit" className="button-primary mt-6 w-full justify-center sm:w-auto">{t.contact.submit}<Send size={15} /></button>
            </form>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-white/[0.06] py-8">
        <div className="container-shell flex flex-col items-center justify-between gap-4 text-center text-xs text-slate-600 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} Micael Leal. {t.footer.rights}</p>
          <p>{t.footer.made}</p>
        </div>
      </footer>
    </main>
  );
}
