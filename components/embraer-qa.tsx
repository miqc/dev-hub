"use client";

import { useState } from "react";
import { AlertTriangle, ChevronDown, Target } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { interviewQuestions } from "@/lib/embraer-script";

const categories = Array.from(new Set(interviewQuestions.map((item) => item.category)));

export function EmbraerQa() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="pb-24">
      <section className="section-space border-t border-white/[0.06]">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Perguntas"
            title="O que vem depois dos 3 minutos."
            description="A dinâmica é em grupo: a sua fala abre espaço para perguntas. Cada item traz a forma de uma resposta forte e a armadilha mais comum — não a resposta pronta."
          />

          {categories.map((category) => (
            <div key={category} className="mt-12">
              <p className="mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.22em] text-blue-400">
                <span className="inline-block h-px w-6 bg-blue-400" aria-hidden="true" />
                {category}
              </p>
              <ul className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
                {interviewQuestions
                  .filter((item) => item.category === category)
                  .map((item) => {
                    const expanded = open === item.question;
                    return (
                      <li key={item.question}>
                        <button
                          type="button"
                          onClick={() => setOpen(expanded ? null : item.question)}
                          aria-expanded={expanded}
                          className="flex w-full items-start justify-between gap-6 py-5 text-left transition hover:text-white"
                        >
                          <span className="font-display text-base font-medium text-slate-200">{item.question}</span>
                          <ChevronDown
                            size={16}
                            className={`mt-1 shrink-0 text-slate-500 transition-transform ${expanded ? "rotate-180" : ""}`}
                            aria-hidden="true"
                          />
                        </button>
                        {expanded ? (
                          <div className="grid gap-3 pb-6 sm:grid-cols-2">
                            <div className="rounded-xl border border-emerald-400/15 bg-emerald-400/[0.05] p-4">
                              <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.16em] text-emerald-300">
                                <Target size={12} /> Forma da resposta
                              </p>
                              <p className="mt-2 text-sm leading-6 text-slate-300">{item.shape}</p>
                            </div>
                            <div className="rounded-xl border border-rose-400/15 bg-rose-400/[0.05] p-4">
                              <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.16em] text-rose-300">
                                <AlertTriangle size={12} /> Armadilha
                              </p>
                              <p className="mt-2 text-sm leading-6 text-slate-300">{item.trap}</p>
                            </div>
                          </div>
                        ) : null}
                      </li>
                    );
                  })}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
