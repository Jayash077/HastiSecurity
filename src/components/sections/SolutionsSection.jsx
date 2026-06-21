import { Link } from "react-router-dom";
import {
  Award,
  Camera,
  Eye,
  HeartHandshake,
  Leaf,
  LockKeyhole,
  Shield,
  SunMedium,
  Users,
  Zap,
} from "lucide-react";

import { solutionCards, valueCards } from "../../data/siteContent";
import { MotionItem, MotionStagger } from "../ui/MotionSection";

const solutionIcons = [Camera, SunMedium, LockKeyhole, Zap];

const valueIcons = [
  Leaf,
  Shield,
  HeartHandshake,
  Eye,
  Users,
  Award,
];

export function SolutionsSection() {
  return (
    <section
      id="solutions"
      className="scroll-mt-nav px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          
          <div className="max-w-3xl space-y-4">
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.12em] text-accent">
              Our Solutions
            </p>

            <h2 className="font-display text-[clamp(1.75rem,3vw,2.75rem)] font-extrabold leading-tight tracking-[-0.03em] text-balance">
              Technology That{" "}
              <span className="text-accent">Protects</span> and{" "}
              <span className="text-accent">Powers</span> Your World
            </h2>

            <p className="max-w-2xl text-base leading-relaxed text-muted">
              From resilient surveillance to renewable energy and smart
              automation, we engineer systems that stay dependable at scale.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center justify-center self-start rounded-pill border border-accent/40 px-5 py-2.5 font-display text-sm font-bold text-accent transition hover:bg-accent/10"
          >
            Request consultation
          </Link>
        </div>

        <MotionStagger className="mb-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          
          {solutionCards.map((card, idx) => {
            const Icon = solutionIcons[idx] || Camera;

            return (
              <MotionItem key={card.title}>
                <article className="group relative h-full bg-card p-6 transition-colors hover:bg-[color:var(--card-hover)] sm:p-7">
                  
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100"
                    aria-hidden
                  />

                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>

                  <h3 className="mb-3 font-display text-lg font-bold tracking-tight">
                    {card.title}
                  </h3>

                  <p className="mb-5 text-sm leading-relaxed text-muted">
                    {card.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-accent/25 bg-accent/5 px-2 py-0.5 font-mono text-[0.65rem] text-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </article>
              </MotionItem>
            );
          })}
        </MotionStagger>

        <div className="mb-8 font-display text-2xl font-extrabold tracking-tight md:text-3xl">
          Built on Trust, Driven by Values
        </div>

        <MotionStagger
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.06}
        >
          
          {valueCards.map((value, i) => {
            const Icon = valueIcons[i] || Shield;

            return (
              <MotionItem key={value.title}>
                <article className="h-full rounded-2xl border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/30">
                  
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </div>

                  <h4 className="mb-2 font-display text-base font-bold">
                    {value.title}
                  </h4>

                  <p className="text-sm leading-relaxed text-muted">
                    {value.description}
                  </p>

                </article>
              </MotionItem>
            );
          })}
        </MotionStagger>

      </div>
    </section>
  );
}