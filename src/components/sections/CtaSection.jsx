import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Cpu,
  LockKeyhole,
  SunMedium,
  Video,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { ctaBadges, company } from "../../data/siteContent";

const badgeIcons = [Video, SunMedium, LockKeyhole, Cpu];

export function CtaSection() {
  const reduce = useReducedMotion();

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section
      id="contact"
      className="scroll-mt-nav px-4 pb-16 pt-6 sm:px-6 sm:pb-20 lg:px-8"
    >
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl border border-accent/20 shadow-xl shadow-accent/15 sm:rounded-3xl"
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-accent via-accent to-accent-muted"
          aria-hidden
        />

        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.18),transparent_42%),radial-gradient(circle_at_85%_80%,rgba(0,0,0,0.12),transparent_45%)]"
          aria-hidden
        />

        <div className="relative grid gap-8 px-5 py-10 text-cta-text sm:px-8 sm:py-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10 lg:px-10 lg:py-12">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-pill border border-cta-text/20 bg-cta-text/10 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-cta-text/85">
              Free consultation
            </div>

            <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-extrabold leading-[1.05] tracking-[-0.04em]">
              Ready to secure your future?
            </h2>

            <p className="max-w-md text-sm leading-relaxed text-cta-text/80 sm:text-base">
              Share your site context and priorities. We respond with a
              practical scope, timeline, and options aligned to your budget.
            </p>

            <form
              onSubmit={onSubmit}
              className="flex flex-col gap-2.5 sm:flex-row sm:items-stretch"
            >
              <label className="sr-only" htmlFor="quote-email">
                Work email
              </label>

              <input
                id="quote-email"
                name="email"
                type="email"
                required
                placeholder="Work email"
                data-cursor="hover"
                className="min-w-0 flex-1 rounded-pill border border-cta-text/15 bg-white px-4 py-3 text-sm text-cta-text outline-none transition placeholder:text-cta-text/40 focus:ring-2 focus:ring-white/40"
              />

              <Link
                to="/contact"
                data-cursor="hover"
                className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-pill bg-cta-text px-6 py-3 font-display text-sm font-bold text-accent transition hover:bg-cta-text/90"
              >
                Get free quote

                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </form>

            <p className="text-xs text-cta-text/70 sm:text-sm">
              Prefer phone?{" "}
              <a
                className="font-semibold text-cta-text underline-offset-4 hover:underline"
                href={`tel:${company.phonePrimary.replace(/-/g, "")}`}
                data-cursor="hover"
              >
                {company.phonePrimary}
              </a>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
            {ctaBadges.map((b, i) => {
              const Icon = badgeIcons[i] || Cpu;

              return (
                <div
                  key={b.title}
                  className="flex gap-3 rounded-xl border border-white/20 bg-white/10 p-3.5 backdrop-blur-sm transition hover:border-white/35 hover:bg-white/15 sm:p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/25 bg-white/10">
                    <Icon
                      className="h-4 w-4 text-cta-text"
                      strokeWidth={1.6}
                    />
                  </div>

                  <div className="min-w-0">
                    <div className="font-display text-xs font-bold text-cta-text sm:text-sm">
                      {b.title}
                    </div>

                    <p className="mt-0.5 text-[0.65rem] leading-snug text-cta-text/70 sm:text-xs">
                      {b.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
