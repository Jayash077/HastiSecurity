import { motion, useReducedMotion } from "framer-motion";

export function ParallaxQuote() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative overflow-hidden border-y border-border bg-bg2 py-16 sm:py-20"
      aria-label="Statement"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/8 via-transparent to-accent2/6"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--color-border) 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
        aria-hidden
      />

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8"
      >
        <blockquote className="font-display text-[clamp(1.35rem,3.2vw,2.75rem)] font-extrabold leading-[1.15] tracking-[-0.03em] text-balance text-foreground">
          &ldquo;Have you ever seen your{" "}
          <span className="text-accent">
            security spend shrink
          </span>{" "}
          while your protection becomes stronger?&rdquo;
        </blockquote>

        <footer className="mt-6 font-mono text-[0.75rem] uppercase tracking-[0.12em] text-muted">
          — Hasti Security Solutions
        </footer>
      </motion.div>
    </section>
  );
}
