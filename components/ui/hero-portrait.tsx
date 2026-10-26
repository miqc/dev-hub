"use client";

import Image from "next/image";

/**
 * Avatar do herói: órbita, brilho, piso e faíscas animados.
 * Fonte única das animações — usada na home e no primeiro slide do deck da Embraer.
 */
export function HeroPortrait({
  className = "",
  sizes = "(max-width: 1024px) 90vw, 43vw",
  priority = false,
  alt = "Avatar 3D de Micael Leal",
}: {
  className?: string;
  sizes?: string;
  priority?: boolean;
  alt?: string;
}) {
  return (
    <div className={`hero-portrait-stage relative ${className}`}>
      <div className="hero-person-glow absolute inset-[18%_10%_14%] rounded-full bg-blue-500/20 blur-[90px]" aria-hidden="true" />
      <div className="hero-floor absolute bottom-[7%] left-1/2 h-16 w-[70%] -translate-x-1/2 rounded-[50%] bg-blue-500/20 blur-2xl" aria-hidden="true" />
      <div className="hero-floor-line absolute bottom-[10%] left-1/2 h-px w-[72%] -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-300/45 to-transparent" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
      <span className="hero-spark hero-spark-one" aria-hidden="true" />
      <span className="hero-spark hero-spark-two" aria-hidden="true" />
      <span className="hero-spark hero-spark-three" aria-hidden="true" />
      <div className="hero-portrait-float relative">
        <Image
          src="/heroPNG.png"
          alt={alt}
          width={1280}
          height={1280}
          priority={priority}
          sizes={sizes}
          className="relative z-10 aspect-square w-full object-contain drop-shadow-[0_28px_35px_rgba(2,6,23,0.55)]"
        />
      </div>
    </div>
  );
}
