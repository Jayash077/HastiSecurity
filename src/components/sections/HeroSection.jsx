import {
  ArrowUpRight,
  Camera,
  Cpu,
  MapPin,
  Shield,
  SunMedium,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { company } from "../../data/siteContent";
import { AnimatedCounter } from "../ui/AnimatedCounter";

const services = [
  { icon: Camera, label: "CCTV" },
  { icon: SunMedium, label: "Solar" },
  { icon: Shield, label: "Security" },
  { icon: Cpu, label: "Automation" },
];

export function HeroSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative min-h-[min(88vh,820px)] overflow-hidden pb-16 sm:pb-20"
    >
      <div
        className="pointer-events-none absolute -left-32 top-16 h-72 w-72 rounded-full bg-accent/20 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 top-1/3 h-96 w-96 rounded-full bg-accent2/15 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,var(--hero-glow),transparent_50%)]"
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute inset-0 bg-grid-faint bg-[length:60px_60px] opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
        animate={reduce ? undefined : { opacity: [0.45, 0.65, 0.45] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-8 sm:px-6 sm:py-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8 lg:py-12">
        <div className="space-y-8">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2.5 rounded-pill border border-accent/30 bg-accent/10 px-4 py-2 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-accent backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Indore&apos;s trusted security and energy partner
          </motion.div>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(2.75rem,5.5vw,5.5rem)] font-extrabold leading-[0.92] tracking-[-0.045em] text-balance text-foreground"
          >
            Securing{" "}
            <span className="bg-gradient-to-r from-accent via-accent2 to-accent bg-clip-text text-transparent">
              Smarter.
            </span>
            <br />
            Powering{" "}
            <span className="bg-gradient-to-r from-accent2 via-accent to-accent-muted bg-clip-text text-transparent">
              Greener.
            </span>
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl text-lg leading-relaxed text-muted"
          >
            {company.name} delivers CCTV surveillance, solar energy, electronic
            security, and industrial automation across India since{" "}
            {company.founded}.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-3"
          >
            <Link
              to="/#solutions"
              data-cursor="hover"
              className="group inline-flex items-center gap-2 rounded-pill bg-accent px-6 py-3.5 font-display text-sm font-bold text-cta-text shadow-lg shadow-accent/25 transition hover:-translate-y-0.5 hover:bg-accent2 hover:shadow-accent/35"
            >
              Explore Solutions
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              to="/contact"
              data-cursor="hover"
              className="inline-flex items-center gap-2 rounded-pill border border-border bg-card/80 px-6 py-3.5 font-display text-sm font-bold text-foreground backdrop-blur-sm transition hover:border-accent/50 hover:text-accent"
            >
              Get Free Quote
            </Link>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-3 overflow-hidden rounded-2xl border border-border/80 bg-card/60 shadow-lg backdrop-blur-md"
          >
            {[
              { target: company.stats.states, label: "States" },
              { target: company.stats.cities, label: "Cities" },
              {
                target: company.stats.customers,
                label: "Customers",
                customers: true,
              },
            ].map((s, i) => (
              <div
                key={s.label}
                className={`px-3 py-5 text-center transition hover:bg-accent/5 sm:px-5 ${
                  i > 0 ? "border-l border-border/80" : ""
                }`}
              >
                <div className="font-display text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                  <AnimatedCounter
                    target={s.target}
                    suffix="+"
                    isCustomers={"customers" in s && s.customers}
                  />
                </div>
                <div className="mt-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-muted">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, x: 40, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border/80 bg-card shadow-2xl shadow-accent/10">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(145deg, var(--hero-panel-from), var(--hero-panel-via) 45%, var(--hero-panel-to))",
              }}
              aria-hidden
            />
            <motion.div
              className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-accent/30 blur-3xl"
              animate={reduce ? undefined : { scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden
            />
            <div
              className="absolute inset-0 opacity-35"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, var(--color-accent) 1.2px, transparent 0)",
                backgroundSize: "28px 28px",
              }}
              aria-hidden
            />

            <div className="relative flex h-full flex-col justify-between p-6 sm:p-8">
              <motion.div
                className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border/50 bg-card/80 text-accent backdrop-blur-md"
                animate={reduce ? undefined : { y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Shield className="h-8 w-8" strokeWidth={1.25} />
              </motion.div>

              <div>
                <p className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                  Integrated protection
                </p>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
                  Surveillance, access, energy, and automation under one
                  disciplined delivery model.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {services.map(({ icon: Icon, label }, i) => (
                  <motion.div
                    key={label}
                    initial={reduce ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.08, duration: 0.5 }}
                    className="flex items-center gap-2.5 rounded-xl border border-border/50 bg-card/60 px-3 py-2.5 backdrop-blur-sm"
                  >
                    <Icon className="h-4 w-4 shrink-0 text-accent" strokeWidth={1.75} />
                    <span className="font-mono text-[0.65rem] font-medium uppercase tracking-wider text-foreground">
                      {label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-border/80 bg-card/90 p-4 shadow-xl backdrop-blur-md lg:block"
            animate={reduce ? undefined : { y: [0, -5, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <MapPin className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <div>
                <div className="font-mono text-[0.65rem] uppercase tracking-wider text-muted">
                  Headquarters
                </div>
                <div className="text-sm font-bold text-foreground">Indore, MP</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}