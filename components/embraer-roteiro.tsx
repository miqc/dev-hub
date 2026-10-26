"use client";

import { useState } from "react";
import { Check, Copy, ExternalLink, Scissors, Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { copyText } from "@/lib/clipboard";
import { deckSlides } from "@/lib/embraer-deck";
import {
  TARGET_SECONDS,
  WORDS_PER_SECOND,
  culturePillars,
  formatClock,
  scriptBlocks,
} from "@/lib/embraer-script";

const chosenPillar = culturePillars.find((pillar) => pillar.id === "simplicidade");

const writingRules = [
  "Uma prova por história: um artefato que a banca pode abrir — repositório, sistema em uso, entrega. Sem artefato, é opinião sobre você.",
  "Nenhum adjetivo sobre si mesmo: proativo, dedicado, apaixonado, resiliente.",
  "Frases de até 15 palavras. Se você precisar respirar no meio, a frase está longa.",
  "Voz ativa e primeira pessoa: eu decidi, não foi decidido.",
  "Erro admitido vale mais que acerto narrado — a banca já ouviu os acertos.",
  "Nunca inventar métrica. Se não há número, diga o que existe e o que mudou na prática.",
  "Slide com seis palavras no máximo. O que está escrito, você não fala.",
];

function roteiroAsText() {
  return scriptBlocks
    .map((block) => {
      const head = `[${formatClock(block.start)}–${formatClock(block.end)}] ${block.title}`;
      const bullets = block.mustSay.map((item) => `  · ${item}`).join("\n");
      const onDeck = deckSlides.filter((slide) => slide.blockIds.includes(block.id));
      const onScreen = onDeck.length
        ? onDeck.map((slide) => `${slide.kicker} / ${slide.headline}`).join(" + ")
        : block.slide;
      return `${head}\n  slide: ${onScreen}\n${bullets}\n  corte: ${block.cut}`;
    })
    .join("\n\n");
}

export function EmbraerRoteiro() {
  const [copied, setCopied] = useState(false);

  async function copyRoteiro() {
    if (!(await copyText(roteiroAsText()))) return;
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className="pb-24">
      <section className="section-space border-t border-white/[0.06]">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Roteiro"
            title="Cada bloco, com o que precisa aparecer."
            description="Os 180 segundos divididos em seis blocos. Cada um traz o conteúdo obrigatório, o texto do slide, o corte de emergência e o orçamento de palavras."
          />

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button type="button" onClick={copyRoteiro} className="button-secondary">
              {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
              {copied ? "Roteiro copiado!" : "Copiar roteiro em texto"}
            </button>
            <p className="text-xs text-slate-500">
              Alvo: {formatClock(TARGET_SECONDS)} · ~{Math.round(TARGET_SECONDS * WORDS_PER_SECOND)} palavras faladas
            </p>
          </div>

          <ol className="mt-12 space-y-4">
            {scriptBlocks.map((block, index) => {
              const seconds = block.end - block.start;
              const words = Math.round(seconds * WORDS_PER_SECOND);
              const slidesOnDeck = deckSlides.filter((slide) => slide.blockIds.includes(block.id));
              return (
                <Reveal key={block.id} delay={index * 0.05}>
                  <article className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 sm:p-7">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                      <div className="flex items-baseline gap-4">
                        <span className="font-display text-[11px] font-bold tracking-[.24em] text-blue-400/70">
                          0{index + 1}
                        </span>
                        <h3 className="font-display text-xl font-semibold text-white">{block.title}</h3>
                      </div>
                      <p className="font-display text-sm tabular-nums text-slate-400">
                        {formatClock(block.start)}–{formatClock(block.end)}
                        <span className="ml-2 text-slate-600">
                          {seconds}s · ~{words} palavras
                        </span>
                      </p>
                    </div>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">{block.goal}</p>

                    <div className="mt-5 grid gap-4 lg:grid-cols-[1.35fr_.65fr]">
                      <ul className="space-y-2.5">
                        {block.mustSay.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-sm leading-6 text-slate-300">
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-blue-400/70" aria-hidden="true" />
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="space-y-3">
                        <div className="rounded-xl border border-blue-400/20 bg-blue-500/[0.07] p-4">
                          <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.16em] text-blue-300">
                            <Sparkles size={12} /> Slide na tela
                          </p>
                          <p className="mt-1.5 font-display text-sm font-medium text-white">
                            {slidesOnDeck.length
                              ? slidesOnDeck.map((slide) => slide.headline).join(" · ")
                              : block.slide}
                          </p>
                          {slidesOnDeck.map((slide) => (
                            <a
                              key={slide.id}
                              href={`/embraer/slides#${slide.id}`}
                              className="mt-2 mr-3 inline-flex items-center gap-1.5 text-[11px] font-semibold text-blue-300 transition hover:text-white"
                            >
                              {slide.kicker}
                              <ExternalLink size={11} />
                            </a>
                          ))}
                        </div>
                        <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
                          <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.16em] text-slate-500">
                            <Scissors size={12} /> Corte de emergência
                          </p>
                          <p className="mt-1.5 text-xs leading-6 text-slate-400">{block.cut}</p>
                        </div>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="section-space border-y border-white/[0.06] bg-[#0a0f19]">
        <div className="container-shell grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="Escrita"
              title="Regras de redação da fala."
              description="Aplicadas a cada frase do roteiro. Se uma frase violar uma regra, ela é reescrita, não justificada."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
              {writingRules.map((rule, index) => (
                <li key={rule} className="flex items-start gap-4 py-4">
                  <span className="font-display text-xs font-bold tabular-nums text-blue-400/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-7 text-slate-300">{rule}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {chosenPillar ? (
        <section className="section-space">
          <div className="container-shell">
            <Reveal>
              <SectionHeading
                eyebrow="Pilar em cena"
                title="Como o pilar 4 aparece na fala."
                description="O texto oficial é a âncora; a tradução para o trabalho vem depois dele, nunca no lugar dele."
              />
            </Reveal>
            <Reveal delay={0.08}>
              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {chosenPillar.lines.map((line, index) => (
                  <article
                    key={line}
                    className="flex h-full flex-col rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6"
                  >
                    <span className="font-display text-[11px] font-bold tracking-[.24em] text-blue-400/70">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-4 font-display text-base font-medium leading-7 text-white">{line}</p>
                    <p className="mt-4 text-sm leading-6 text-slate-400">
                      {index === 0
                        ? "Aplicado: o que não muda o resultado sai do escopo, mesmo que seja bonito."
                        : index === 1
                          ? "Aplicado: a pergunta por quê vem antes da primeira linha de código."
                          : "Aplicado: excelência no que é crítico, e não no que só dá trabalho."}
                    </p>
                  </article>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      ) : null}
    </div>
  );
}
