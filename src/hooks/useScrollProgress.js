import { useEffect, useState } from "react";

export function useScrollProgress() {
  const [p, setP] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max =
        document.documentElement.scrollHeight - window.innerHeight;

      const next = max > 0 ? window.scrollY / max : 0;

      setP(Math.min(1, Math.max(0, next)));
    };

    const onResize = () => {
      onScroll();
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return p;
}