"use client";

import { useEffect, useRef } from "react";

const TOKENS = [
  "{ }", "</>", "=>", "const", "async", "{...}", "useState", "API", "01", "&&", "<div>", "map()", "git", "CSS", "npm",
];

type Particle = { x: number; y: number; vx: number; vy: number; text: string; size: number; opacity: number };

export function CodeField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    // Em telas pequenas o canvas vira estático: o rAF redesenhando texto a cada
    // frame custa caro e não muda a leitura da página.
    const reduceMotion =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(max-width: 700px)").matches;
    const pointer = { x: -1000, y: -1000 };
    let width = 0;
    let height = 0;
    let frame = 0;
    let particles: Particle[] = [];

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const count = Math.max(22, Math.min(48, Math.floor((width * height) / 24000)));
      particles = Array.from({ length: count }, (_, index) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (reduceMotion ? 0 : 0.12),
        vy: (Math.random() - 0.5) * (reduceMotion ? 0 : 0.12),
        text: TOKENS[index % TOKENS.length],
        size: 12 + Math.random() * 6,
        opacity: 0.18 + Math.random() * 0.14,
      }));
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      particles.forEach((particle) => {
        const dx = particle.x - pointer.x;
        const dy = particle.y - pointer.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (!reduceMotion && distance < 135 && distance > 0) {
          const force = (135 - distance) / 135;
          particle.x += (dx / distance) * force * 4.5;
          particle.y += (dy / distance) * force * 4.5;
        }
        if (!reduceMotion) {
          particle.x += particle.vx;
          particle.y += particle.vy;
          if (particle.x < -50) particle.x = width + 50;
          if (particle.x > width + 50) particle.x = -50;
          if (particle.y < -30) particle.y = height + 30;
          if (particle.y > height + 30) particle.y = -30;
        }
        const glow = distance < 190 ? Math.min(0.3, (190 - distance) / 190 * 0.3) : 0;
        context.fillStyle = `rgba(125, 180, 255, ${particle.opacity + glow})`;
        context.font = `500 ${particle.size}px ui-monospace, SFMono-Regular, Menlo, monospace`;
        context.fillText(particle.text, particle.x, particle.y);
      });
      if (!reduceMotion) frame = window.requestAnimationFrame(draw);
    };

    const onPointerMove = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect();
      pointer.x = event.clientX - bounds.left;
      pointer.y = event.clientY - bounds.top;
    };
    const onPointerLeave = () => { pointer.x = -1000; pointer.y = -1000; };

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="code-field pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true" />;
}

/**
 * Versão determinística do CodeField, em HTML.
 * O canvas não é desenhado quando a página é impressa (fica em display:none até o print),
 * então o PDF usaria esta camada para manter a mesma textura do slide ao vivo.
 */
export function CodeFieldStatic() {
  return (
    <div className="code-field pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {Array.from({ length: 34 }, (_, index) => (
        <span
          key={index}
          className="absolute font-mono font-medium text-[#7db4ff]"
          style={{
            left: `${(index * 29.7 + 3.5) % 97}%`,
            top: `${(index * 47.3 + 6) % 92}%`,
            fontSize: `${12 + ((index * 7) % 6)}px`,
            opacity: 0.18 + ((index * 13) % 14) / 100,
          }}
        >
          {TOKENS[index % TOKENS.length]}
        </span>
      ))}
    </div>
  );
}
