"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Pause, Play, RotateCcw } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { TOTAL_SECONDS, TARGET_SECONDS, formatClock, scriptBlocks } from "@/lib/embraer-script";

export function EmbraerRehearsal() {
  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(false);
  const baseRef = useRef(0);

  const toggle = useCallback(() => {
    setRunning((current) => {
      if (!current) baseRef.current = performance.now() - elapsed * 1000;
      return !current;
    });
  }, [elapsed]);

  const reset = useCallback(() => {
    setRunning(false);
    setElapsed(0);
  }, []);

  useEffect(() => {
    if (!running) return;
    let frame = 0;
    const tick = () => {
      setElapsed((performance.now() - baseRef.current) / 1000);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [running]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.isContentEditable || target?.closest("input, textarea, select")) return;
      if (event.code === "Space") {
        event.preventDefault();
        toggle();
      }
      if (event.key.toLowerCase() === "r") reset();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [toggle, reset]);

  const overrun = elapsed > TOTAL_SECONDS;
  const remaining = TOTAL_SECONDS - elapsed;
  const found = scriptBlocks.findIndex((block) => elapsed < block.end);
  const currentIndex = found === -1 ? scriptBlocks.length - 1 : found;
  const currentBlock = scriptBlocks[currentIndex];
  const blockRemaining = currentBlock.end - elapsed;
  const pace = elapsed - TARGET_SECONDS;

  const remainingTone = overrun
    ? "text-rose-400"
    : remaining < 10
      ? "text-amber-300"
      : "text-emerald-300";

  return (
    <div className="pb-24">
      <section className="section-space border-t border-white/[0.06]">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Ensaio"
            title="Cronômetro de 3 minutos."
            description="Espaço pausa e retoma, R reinicia. O marcador compara seu tempo com o alvo de 2min45, não com o teto de 3min."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_.85fr]">
            <div className="rounded-[1.75rem] border border-white/10 bg-[#0b1220]/85 p-6 sm:p-8">
              <div className="flex items-baseline justify-between gap-4">
                <p className="font-display text-[6rem] font-semibold leading-none tabular-nums tracking-[-0.06em] text-white sm:text-[7.5rem]">
                  {formatClock(elapsed)}
                </p>
                <div className="text-right">
                  <p className="text-[10px] font-bold uppercase tracking-[.2em] text-slate-500">Restante</p>
                  <p className={`font-display text-2xl font-semibold tabular-nums ${remainingTone}`}>
                    {overrun ? `+${formatClock(-remaining)}` : formatClock(remaining)}
                  </p>
                </div>
              </div>

              <div className="relative mt-8">
                <div className="flex h-4 overflow-hidden rounded-full border border-white/[0.08] bg-white/[0.04]">
                  {scriptBlocks.map((block, index) => {
                    const width = ((block.end - block.start) / TOTAL_SECONDS) * 100;
                    const done = elapsed >= block.end;
                    const active = index === currentIndex && !overrun;
                    return (
                      <div
                        key={block.id}
                        className={`h-full border-r border-[#0b1220] last:border-r-0 transition-colors ${
                          done
                            ? "bg-blue-500/45"
                            : active
                              ? "bg-blue-400/85"
                              : "bg-white/[0.04]"
                        }`}
                        style={{ width: `${width}%` }}
                        title={`${block.title} · ${block.end - block.start}s`}
                      />
                    );
                  })}
                </div>
                <div
                  className="absolute -top-1 h-6 w-px bg-white/70"
                  style={{ left: `${Math.min(100, (elapsed / TOTAL_SECONDS) * 100)}%` }}
                  aria-hidden="true"
                />
                <div
                  className="absolute -bottom-6 -translate-x-1/2 text-[10px] font-bold uppercase tracking-[.16em] text-slate-500"
                  style={{ left: `${(TARGET_SECONDS / TOTAL_SECONDS) * 100}%` }}
                >
                  alvo
                </div>
              </div>

              <div className="mt-12 flex flex-wrap gap-3">
                <button type="button" onClick={toggle} className="button-primary">
                  {running ? <Pause size={16} /> : <Play size={16} />}
                  {running ? "Pausar" : elapsed > 0 ? "Retomar" : "Iniciar"}
                </button>
                <button type="button" onClick={reset} className="button-secondary">
                  <RotateCcw size={16} />
                  Reiniciar
                </button>
              </div>

              <p className={`mt-6 text-sm ${elapsed < 15 ? "text-slate-500" : pace > 5 ? "text-amber-300" : "text-slate-400"}`}>
                {elapsed < 15
                  ? "O marcador de ritmo liga depois dos primeiros 15 segundos."
                  : pace > 5
                    ? `${formatClock(pace)} acima do alvo de ${formatClock(TARGET_SECONDS)}.`
                    : pace < -5
                      ? `${formatClock(-pace)} abaixo do alvo. Sobra margem — use para respirar, não para acelerar.`
                      : "No alvo."}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="rounded-2xl border border-blue-400/25 bg-blue-500/[0.07] p-6">
                <p className="text-[10px] font-bold uppercase tracking-[.2em] text-blue-300">
                  Bloco {currentIndex + 1} de {scriptBlocks.length}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold text-white">{currentBlock.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{currentBlock.goal}</p>
                <p className="mt-4 text-xs font-semibold tabular-nums text-blue-200">
                  {blockRemaining > 0
                    ? `${Math.ceil(blockRemaining)}s restantes neste bloco`
                    : `${Math.ceil(-blockRemaining)}s além do bloco`}
                </p>
              </div>

              <ol className="divide-y divide-white/[0.06] rounded-2xl border border-white/[0.07] bg-white/[0.02]">
                {scriptBlocks.map((block, index) => {
                  const done = elapsed >= block.end;
                  const active = index === currentIndex && !overrun;
                  return (
                    <li key={block.id} className="flex items-center justify-between gap-3 px-5 py-3">
                      <span
                        className={`text-sm ${
                          active ? "font-semibold text-white" : done ? "text-slate-500" : "text-slate-400"
                        }`}
                      >
                        {block.title}
                      </span>
                      <span
                        className={`font-display text-xs tabular-nums ${
                          active ? "text-blue-300" : done ? "text-emerald-400/70" : "text-slate-600"
                        }`}
                      >
                        {formatClock(block.end)}
                      </span>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
