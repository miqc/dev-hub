"use client";

import { useEffect } from "react";
import { useReducedMotion } from "framer-motion";

export type NavSection = { id: string; label: string };

const NEXT_KEYS: Record<string, true> = {
  arrowdown: true,
  arrowright: true,
  pagedown: true,
  j: true,
};

const PREVIOUS_KEYS: Record<string, true> = {
  arrowup: true,
  arrowleft: true,
  pageup: true,
  k: true,
};

export function useSectionKeyboardNav(sections: NavSection[]) {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    let current = 0;
    let lockedUntil = 0;

    const measure = () => {
      const marker = window.scrollY + 140;
      let index = 0;
      sections.forEach((section, position) => {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= marker) index = position;
      });
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      return atBottom ? sections.length - 1 : index;
    };

    const sync = () => {
      if (performance.now() < lockedUntil) return;
      current = measure();
    };

    const goTo = (index: number) => {
      const target = sections[index];
      const element = target && document.getElementById(target.id);
      if (!element) return false;
      current = index;
      lockedUntil = performance.now() + 900;
      element.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
      return true;
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.altKey) return;
      const target = event.target as HTMLElement | null;
      if (target?.isContentEditable || target?.closest("input, textarea, select")) return;

      const key = event.key.toLowerCase();
      if (performance.now() >= lockedUntil) current = measure();

      if (key === "home") {
        event.preventDefault();
        goTo(0);
        return;
      }

      if (key === "end") {
        event.preventDefault();
        goTo(sections.length - 1);
        return;
      }

      if (NEXT_KEYS[key] && goTo(current + 1)) {
        event.preventDefault();
        return;
      }

      if (PREVIOUS_KEYS[key] && goTo(current - 1)) {
        event.preventDefault();
      }
    };

    current = measure();
    window.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [reduceMotion, sections]);
}
