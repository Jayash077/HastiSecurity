import { Star } from "lucide-react";

import { testimonials } from "../../data/siteContent";
import { MotionItem, MotionStagger } from "../ui/MotionSection";

function Stars({ n }) {
  return (
    <div
      className="flex gap-0.5 text-accent"
      aria-label={`${n} out of 5 stars`}
    >
      {Array.from({ length: n }).map((_, i) => (
        <Star
          key={i}
          className="h-4 w-4 fill-accent text-accent"
          strokeWidth={1.25}
        />
      ))}
    </div>
  );
}

export function TestimonialsSection({
  eyebrow = "Testimonials",
  title = "Proof in production environments",
}) {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        <div className="mb-12 max-w-2xl space-y-3">
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.12em] text-accent">
            {eyebrow}
          </p>

          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
            {title}
          </h2>
        </div>

        <MotionStagger
          className="grid gap-6 lg:grid-cols-3"
          stagger={0.1}
        >
          {testimonials.map((t) => (
            <MotionItem key={t.org}>
              
              <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-8">
                
                <div className="mb-6 flex items-start justify-between gap-4">
                  
                  <div className="flex items-center gap-3">
                    
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 font-display text-[0.8rem] font-bold text-accent">
                      {t.initials}
                    </div>

                    <div>
                      <div className="font-display text-sm font-bold">
                        {t.org}
                      </div>

                      <div className="text-xs text-muted">
                        {t.category}
                      </div>
                    </div>

                  </div>

                  <Stars n={t.stars} />
                </div>

                <p className="text-sm leading-relaxed text-muted">
                  {t.text}
                </p>

              </article>

            </MotionItem>
          ))}
        </MotionStagger>

      </div>
    </section>
  );
}
