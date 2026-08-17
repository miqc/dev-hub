"use client";

import { useEffect, useRef, useState } from "react";

type TypewriterProps = {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
};

export function Typewriter({ text, delay = 0, speed = 70, className = "" }: TypewriterProps) {
  const [value, setValue] = useState("");
  const completed = useRef(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (completed.current) {
      setValue(text);
      setIsComplete(true);
      return;
    }

    let index = 0;
    let interval: ReturnType<typeof setInterval> | undefined;
    setValue("");
    setIsComplete(false);
    const timeout = window.setTimeout(() => {
      interval = window.setInterval(() => {
        index += 1;
        setValue(text.slice(0, index));
        if (index >= text.length) {
          if (interval) window.clearInterval(interval);
          completed.current = true;
          setIsComplete(true);
        }
      }, speed);
    }, delay);

    return () => {
      window.clearTimeout(timeout);
      if (interval) window.clearInterval(interval);
    };
  }, [delay, speed, text]);

  return (
    <span className={className}>
      {value}
      {!isComplete && <span className="typewriter-cursor" aria-hidden="true">|</span>}
    </span>
  );
}
