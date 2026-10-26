"use client";

import { AlertTriangle, ArrowUpRight, Check, Clock, MonitorPlay, Plane, Video, X } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { deckSlides } from "@/lib/embraer-deck";
import {
  CHOSEN_PILLAR_ID,
  TOTAL_SECONDS,
  TARGET_SECONDS,
  WORDS_PER_SECOND,
  culturePillars,
  formatClock,
  visualRules,
  evaluationAxes,
  hardRules,
  scriptAxes,
  scriptBlocks,
} from "@/lib/embraer-script";

export function EmbraerBriefing() {
  return (
    <div className="pb-24">
      <section className="section-space border-t border-white/[0.06]">
        <div className="container-shell grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="Briefing"
              title="O que a Embraer avalia em 3 minutos."
              description="Extraído do documento oficial da Etapa Dinâmica 2027. O que está aqui é requisito, não opinião."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid gap-3 sm:grid-cols-2">
              {evaluationAxes.map((axis) => (
                <article
                  key={axis.title}
                  className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 transition hover:-translate-y-1 hover:border-blue-400/25"
                >
                  <h3 className="font-display text-base font-semibold text-white">{axis.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{axis.detail}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space border-y border-white/[0.06] bg-[#0a0f19]">
        <div className="container-shell">
          <Reveal>
            <SectionHeading eyebrow="Regras" title="O que não é negociável." />
          </Reveal>
          <Reveal delay={0.08}>
            <ul className="mt-10 divide-y divide-white/[0.06] border-y border-white/[0.06]">
              {hardRules.map((rule, index) => (
                <li key={rule} className="flex items-start gap-4 py-5">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border border-blue-400/25 bg-blue-500/10 font-display text-[10px] font-bold text-blue-300">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-7 text-slate-300">{rule}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">
                <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.18em] text-slate-500">
                  <Clock size={13} /> Teto oficial
                </p>
                <p className="mt-2 font-display text-2xl font-semibold text-white">{formatClock(TOTAL_SECONDS)}</p>
              </div>
              <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">
                <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.18em] text-slate-500">
                  <Plane size={13} /> Alvo de ensaio
                </p>
                <p className="mt-2 font-display text-2xl font-semibold text-white">{formatClock(TARGET_SECONDS)}</p>
              </div>
              <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">
                <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.18em] text-slate-500">
                  <Video size={13} /> Fala escrita
                </p>
                <p className="mt-2 font-display text-2xl font-semibold text-white">
                  ~{Math.round(TARGET_SECONDS * WORDS_PER_SECOND)} palavras
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Pilares de cultura"
              title="Cinco pilares, um escolhido."
              description="Texto oficial do documento. O pilar 4 ancora a apresentação porque é o que a engenharia de software prova com fatos, não com adjetivos."
            />
          </Reveal>

          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {culturePillars.map((pillar, index) => {
              const chosen = pillar.id === CHOSEN_PILLAR_ID;
              return (
                <Reveal key={pillar.id} delay={index * 0.06}>
                  <article
                    className={`flex h-full flex-col rounded-2xl border p-6 transition ${
                      chosen
                        ? "border-blue-400/40 bg-blue-500/[0.07]"
                        : "border-white/[0.07] bg-white/[0.02] hover:border-white/15"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span
                        className={`font-display text-[11px] font-bold tracking-[.24em] ${
                          chosen ? "text-blue-300" : "text-slate-600"
                        }`}
                      >
                        PILAR {pillar.index}
                      </span>
                      {chosen ? (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-400/30 bg-blue-500/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[.14em] text-blue-200">
                          <Check size={11} /> Escolhido
                        </span>
                      ) : null}
                    </div>
                    <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-white">{pillar.label}</h3>
                    <ul className="mt-4 space-y-2">
                      {pillar.lines.map((line) => (
                        <li key={line} className="text-sm leading-6 text-slate-400">
                          {line}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-space border-y border-white/[0.06] bg-[#0a0f19]">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Arquitetura"
              title="Onde cada segundo vai."
              description="Sete eixos sugeridos pelo documento não cabem em 180 segundos. Quatro entram, três ficam de fora — por decisão, não por esquecimento."
            />
          </Reveal>

          <Reveal delay={0.08}>
            <ol className="mt-12 divide-y divide-white/[0.06] border-y border-white/[0.06]">
              {scriptBlocks.map((block) => (
                <li key={block.id} className="grid gap-3 py-6 sm:grid-cols-[7rem_1fr] sm:gap-8">
                  <div>
                    <p className="font-display text-lg font-semibold tabular-nums text-blue-300">
                      {formatClock(block.start)}
                      <span className="text-slate-600"> → </span>
                      {formatClock(block.end)}
                    </p>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[.18em] text-slate-500">
                      {block.end - block.start}s
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-white">{block.title}</h3>
                    <p className="mt-1.5 max-w-2xl text-sm leading-7 text-slate-400">{block.goal}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-10 overflow-hidden rounded-2xl border border-white/[0.07]">
              <div className="flex h-3">
                {scriptBlocks.map((block, index) => (
                  <div
                    key={block.id}
                    className="h-full border-r border-[#0a0f19] last:border-r-0"
                    style={{
                      width: `${((block.end - block.start) / TOTAL_SECONDS) * 100}%`,
                      background: `rgb(59 130 246 / ${0.85 - index * 0.11})`,
                    }}
                  />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Suporte visual"
              title="O deck não repete a fala."
              description="A apresentação é falada e projetada ao mesmo tempo. Cada slide carrega a prova visual de um bloco; a história fica na sua voz."
            />
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-10 grid gap-3 md:grid-cols-2">
              {visualRules.map((rule, index) => (
                <article
                  key={rule.title}
                  className="flex h-full flex-col rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5"
                >
                  <span className="font-display text-[11px] font-bold tracking-[.24em] text-blue-400/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-base font-semibold text-white">{rule.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{rule.detail}</p>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-6 flex flex-wrap items-center gap-4 rounded-2xl border border-blue-400/25 bg-blue-500/[0.07] p-5">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl border border-blue-400/25 bg-blue-500/10 text-blue-300">
                  <MonitorPlay size={18} aria-hidden="true" />
                </span>
                <div>
                  <p className="font-display text-sm font-semibold text-white">
                    Deck pronto: {deckSlides.length} slides, um por eixo
                  </p>
                  <p className="text-xs text-slate-400">Tela cheia com setas, F para expandir, Ctrl+P gera o PDF de backup.</p>
                </div>
              </div>
              <Link
                href="/embraer/slides"
                className="ml-auto inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/15 px-4 py-2 text-xs font-bold text-blue-200 transition hover:bg-blue-500/25"
              >
                Abrir o deck
                <ArrowUpRight size={13} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space border-t border-white/[0.06]">
        <div className="container-shell">
          <Reveal>
            <SectionHeading eyebrow="Cobertura" title="Os eixos, auditados." />
          </Reveal>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {scriptAxes.map((axis, index) => (
              <Reveal key={axis.name} delay={index * 0.04}>
                <article className="flex h-full items-start gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">
                  <span
                    className={`mt-0.5 grid size-6 shrink-0 place-items-center rounded-full ${
                      axis.covered
                        ? "bg-emerald-400/15 text-emerald-300"
                        : "bg-slate-500/10 text-slate-500"
                    }`}
                  >
                    {axis.covered ? <Check size={13} /> : <X size={13} />}
                  </span>
                  <div>
                    <h3 className={`font-display text-sm font-semibold ${axis.covered ? "text-white" : "text-slate-400"}`}>
                      {axis.name}
                    </h3>
                    <p className="mt-1 text-xs leading-6 text-slate-500">{axis.note}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <p className="mt-8 flex items-start gap-3 rounded-2xl border border-amber-400/20 bg-amber-400/[0.06] p-5 text-sm leading-7 text-amber-200/90">
              <AlertTriangle size={16} className="mt-1 shrink-0" />
              Cortar é parte do escopo. Um eixo sem prova real é pior que um eixo ausente: a banca pergunta e não há resposta. Seis eixos com fato valem mais que sete com intenção.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
