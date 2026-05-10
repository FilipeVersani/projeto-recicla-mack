import { animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

/**
 * Contagem animada de 0 até `value`. `suffix` aparece após o número (ex.: "+").
 */
export function AnimatedStat({ value, suffix = '', label, delay = 0 }) {
  const [n, setN] = useState(0);
  const controlsRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    const timer = window.setTimeout(() => {
      controlsRef.current?.stop?.();
      controlsRef.current = animate(0, value, {
        duration: 1.85,
        ease: [0.22, 1, 0.36, 1],
        onUpdate: (latest) => {
          if (!cancelled) setN(Math.round(latest));
        },
      });
    }, delay);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      controlsRef.current?.stop?.();
      controlsRef.current = null;
    };
  }, [value, delay]);

  return (
    <div className="hero__stat-row">
      <strong className="hero__stat-num">
        {n}
        {suffix}
      </strong>
      <span className="hero__stat-label">{label}</span>
    </div>
  );
}
