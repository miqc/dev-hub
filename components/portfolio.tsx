"use client";

import Image from "next/image";
import { FormEvent, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Copy,
  Github,
  Linkedin,
  Mail,
  Send,
} from "lucide-react";
import { HeroPortrait } from "@/components/ui/hero-portrait";
import { useLanguage } from "@/context/language-context";
import { Navbar } from "@/components/navbar";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Typewriter } from "@/components/ui/typewriter";
import { CodeField } from "@/components/ui/code-field";
import { siteProjects } from "@/lib/projects";
import { technologies } from "@/lib/technologies";
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/lib/profile";
import { copyText } from "@/lib/clipboard";

export function Portfolio() {
  const { t, language } = useLanguage();
  const [copied, setCopied] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacityTarget = useTransform(heroScrollProgress, [0, 0.5, 0.95], [1, 1, 0]);
  const heroYTarget = useTransform(heroScrollProgress, [0, 0.5, 1], [0, 0, -72]);
  const heroScaleTarget = useTransform(heroScrollProgress, [0, 0.5, 1], [1, 1, 0.96]);
  const heroOpacity = useSpring(heroOpacityTarget, { stiffness: 140, damping: 30, mass: 0.25 });
  const heroY = useSpring(heroYTarget, { stiffness: 120, damping: 28, mass: 0.3 });
  const heroScale = useSpring(heroScaleTarget, { stiffness: 120, damping: 28, mass: 0.3 });

  function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio — ${String(data.get("name"))}`);
    const body = encodeURIComponent(`${String(data.get("message"))}\n\n${String(data.get("name"))}\n${String(data.get("email"))}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  async function copyEmail() {
    if (!(await copyText(EMAIL))) return;
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <main className="overflow-hidden bg-[#080c14] text-slate-100">
      <Navbar />

      <motion.section
        ref={heroRef}
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden pt-24"
        style={{
          opacity: reduceMotion ? 1 : heroOpacity,
          y: reduceMotion ? 0 : heroY,
          scale: reduceMotion ? 1 : heroScale,
          transformOrigin: "center top",
        }}
      >
        <CodeField />
        <div className="hero-grid absolute inset-0 opacity-30" aria-hidden="true" />
        <div className="absolute left-[12%] top-[18%] size-72 rounded-full bg-blue-600/10 blur-[120px]" aria-hidden="true" />
        <div className="absolute bottom-[5%] right-[5%] size-96 rounded-full bg-violet-600/10 blur-[140px]" aria-hidden="true" />

        <div className="container-shell relative grid items-center gap-10 py-14 lg:grid-cols-[1.04fr_.96fr] lg:py-20">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-80px" }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="relative z-10">


            <p className="mb-3 text-sm font-medium uppercase tracking-[0.24em] text-slate-400">{t.hero.eyebrow}</p>
            <h1 className="font-display text-5xl font-semibold leading-[.95] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl xl:text-[5.35rem]">
              <Typewriter text="Micael Leal" speed={75} className="text-white" />
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

          <motion.div initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false, margin: "-80px" }} transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }} className="mx-auto w-full max-w-[540px] lg:mx-0 lg:ml-auto">
            <HeroPortrait alt={t.hero.imageAlt} priority />
          </motion.div>
        </div>

        <a href="#about" className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[10px] font-semibold uppercase tracking-[.22em] text-slate-600 transition hover:text-slate-300 lg:flex">
          {t.hero.scroll}<ArrowDown size={14} className="animate-bounce" />
        </a>
      </motion.section>

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
            {siteProjects.map((project, index) => (
              <Reveal key={project.id} delay={index * 0.08}>
                <article className="project-card group flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0d1420]">
                  <div className="relative aspect-[16/9] overflow-hidden border-b border-white/[0.06] bg-[#0a101b]">
                    <Image
                      src={project.image}
                      alt={`Captura de tela de ${project.name}`}
                      fill
                      unoptimized
                      sizes="(max-width: 1024px) 92vw, 30vw"
                      className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-[10px] font-bold uppercase tracking-[.2em] text-blue-400/80">
                      {project.kind[language]}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-semibold text-white">{project.name}</h3>
                    <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">{project.summary[language]}</p>

                    <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1.5">
                      {project.stack
                        .flatMap((item) => item.tech.split("·").map((tech) => tech.trim()))
                        .map((tech) => (
                          <span key={tech} className="text-[11px] font-semibold text-blue-400">
                            #{tech.replaceAll(" ", "")}
                          </span>
                        ))}
                    </div>

                    <div className="mt-6 flex items-center gap-5 border-t border-white/[0.06] pt-5">
                      <a
                        href={project.href ?? GITHUB_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-xs font-semibold text-slate-300 transition hover:text-white"
                      >
                        <Github size={15} />
                        {t.projects.source}
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="section-space border-y border-white/[0.06] bg-[#0a0f19]">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow={t.experience.eyebrow}
              title={t.experience.title}
              description={t.experience.description}
            />
          </Reveal>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {t.experience.groups.map((group, index) => (
              <Reveal key={group.label} delay={index * 0.08}>
                <article className="flex h-full flex-col rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 transition hover:-translate-y-1 hover:border-blue-400/25">
                  <p className="text-[10px] font-bold uppercase tracking-[.22em] text-blue-400/80">
                    {group.label}
                  </p>
                  <h3 className="mt-3 font-display text-lg font-semibold text-white">{group.title}</h3>
                  <p className="mt-1 text-xs font-medium text-slate-500">{group.org}</p>
                  <p className="mt-4 flex-1 text-sm leading-7 text-slate-400">{group.detail}</p>
                </article>
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
          <p>© {new Date().getFullYear()} Micael Leal {t.footer.rights}</p>
          <p>{t.footer.made}</p>
        </div>
      </footer>
    </main>
  );
}
