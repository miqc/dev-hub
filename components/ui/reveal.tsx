"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useAnimationControls,
  useInView,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

export function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const elementRef = useRef<HTMLDivElement>(null);
  const direction = useRef<1 | -1>(1);
  const controls = useAnimationControls();
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ["start end", "end start"],
  });
  const parallaxOffset = useTransform(scrollYProgress, [0, 0.5, 1], [14, 0, -14]);
  const smoothParallaxOffset = useSpring(parallaxOffset, {
    stiffness: 120,
    damping: 30,
    mass: 0.25,
  });
  const isInView = useInView(elementRef, {
    amount: 0.12,
    margin: "-10% 0px -10% 0px",
  });

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious();

    if (previous === undefined || Math.abs(current - previous) < 1) return;
    direction.current = current > previous ? 1 : -1;
  });

  useEffect(() => {
    if (reduceMotion) {
      controls.set({ opacity: 1, y: 0, scale: 1, rotateX: 0, filter: "blur(0px)" });
      return;
    }

    if (isInView) {
      void controls.start({
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        filter: "blur(0px)",
        transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] },
      });
      return;
    }

    void controls.start({
      opacity: 0,
      y: direction.current * 42,
      scale: 0.975,
      rotateX: direction.current * -2.5,
      filter: "blur(5px)",
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
    });
  }, [controls, delay, isInView, reduceMotion]);

  return (
    <motion.div
      ref={elementRef}
      className={className}
      style={{ y: reduceMotion ? 0 : smoothParallaxOffset }}
    >
      <motion.div
        className="h-full"
        initial={{ opacity: 0, y: 42, scale: 0.975, rotateX: -2.5, filter: "blur(5px)" }}
        animate={controls}
        style={{ transformPerspective: 900, willChange: "transform, opacity, filter" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
