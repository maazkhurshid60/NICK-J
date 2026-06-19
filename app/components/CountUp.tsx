"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/**
 * Animates a numeric value, counting up from 0 to the target when scrolled
 * into view. Preserves any non-digit prefix/suffix (e.g. "+", "%", commas)
 * found in the original string, so "1,598+" rolls up and lands on "1,598+".
 */
export default function CountUp({
  value,
  duration = 1.6,
  className,
  style,
}: {
  value: string;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(value);

  // Pull the number out of the string and remember what wraps it.
  const match = value.match(/[\d,]+/);
  const target = match ? parseInt(match[0].replace(/,/g, ""), 10) : 0;
  const hasGrouping = match ? match[0].includes(",") : false;
  const prefix = match ? value.slice(0, match.index) : "";
  const suffix = match ? value.slice((match.index ?? 0) + match[0].length) : value;

  useEffect(() => {
    if (!match) return;
    if (!inView) {
      setDisplay(prefix + "0" + suffix);
      return;
    }

    let frame = 0;
    const start = performance.now();
    const ms = duration * 1000;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / ms, 1);
      // easeOutExpo for a snappy settle
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.round(eased * target);
      const formatted = hasGrouping ? current.toLocaleString("en-US") : String(current);
      setDisplay(prefix + formatted + suffix);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <span ref={ref} className={className} style={style}>
      {display}
    </span>
  );
}
