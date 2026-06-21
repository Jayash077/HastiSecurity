import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

function formatVal(n, suffix, isCustomers = false) {
  if (isCustomers && n >= 1000) {
    const k = n / 1000;

    const rounded =
      k >= 10
        ? Math.floor(k)
        : Math.round(k * 10) / 10;

    const text = Number.isInteger(rounded)
      ? String(rounded)
      : String(rounded);

    return `${text}K+`;
  }

  return `${Math.round(n)}${suffix}`;
}

export function AnimatedCounter({
  target,
  suffix = "+",
  duration = 2.2,
  className = "",
  isCustomers = false,
}) {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-10% 0px",
  });

  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const start = performance.now();

    let raf = 0;

    const tick = (now) => {
      const t = Math.min(
        1,
        (now - start) / (duration * 1000)
      );

      const eased = 1 - (1 - t) * (1 - t);

      setVal(target * eased);

      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setVal(target);
      }
    };

    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);

  return (
    <span ref={ref} className={className}>
      {formatVal(val, suffix, isCustomers)}
    </span>
  );
}
