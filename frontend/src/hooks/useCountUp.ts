import { useEffect, useRef, useState } from 'react';

interface Options {
  end: number;
  duration?: number;
  startWhen?: boolean;
}

/**
 * Animates a number from 0 to `end` once `startWhen` becomes true
 * (used together with an in-view observer on the stats section).
 */
export function useCountUp({ end, duration = 1600, startWhen = true }: Options) {
  const [value, setValue] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!startWhen || hasRun.current) return;
    hasRun.current = true;

    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
      setValue(Math.round(eased * end));
      if (progress < 1) requestAnimationFrame(tick);
    };

    const frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [end, duration, startWhen]);

  return value;
}
