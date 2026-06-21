import { Link } from "react-router-dom";
import { ArrowUpRight, Target } from "lucide-react";
import { company } from "../../data/siteContent";
import { MotionItem, MotionStagger } from "../ui/MotionSection";

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-nav border-y border-border bg-bg2 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <MotionStagger className="grid gap-4 lg:grid-cols-12 lg:auto-rows-[minmax(140px,auto)]">
          <MotionItem className="lg:col-span-7 lg:row-span-2">
            <div className="h-full rounded-2xl border border-border bg-card p-8 transition hover:border-accent/30 lg:p-10">
              <h2 className="mb-6 font-display text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">
                Nationwide reach with{" "}
                <span className="text-accent">{company.stats.states} States</span>{" "}
                of execution discipline.
              </h2>
              <p className="mb-4 text-base leading-relaxed text-muted">
                Since {company.founded}, we have grown from a regional security
                integrator into a multi-vertical technology partner for
                enterprises, institutions, and infrastructure operators.
              </p>
              <p className="mb-8 text-base leading-relaxed text-muted">
                Incorporated in {company.incorporated}, we continue to invest in
                training, process, and after-sales so systems stay reliable long
                after commissioning.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-pill bg-accent px-5 py-2.5 font-display text-sm font-bold text-cta-text transition hover:bg-accent2"
              >
                Talk to our team
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </MotionItem>

          <MotionItem className="lg:col-span-5">
            <div className="flex h-full min-h-[200px] flex-col justify-center rounded-2xl border border-border bg-card p-8 transition hover:border-accent/30">
              <div className="font-display text-5xl font-extrabold leading-none tracking-[-0.04em] text-accent md:text-6xl">
                15+
              </div>
              <div className="mt-3 font-display text-lg font-bold">
                Years of experience
              </div>
              <p className="mt-2 text-sm text-muted">
                Founded {company.founded} · Incorporated {company.incorporated}
              </p>
            </div>
          </MotionItem>

          <MotionItem className="lg:col-span-5">
            <div className="flex h-full min-h-[180px] flex-col justify-center rounded-2xl border border-border bg-card p-8 transition hover:border-accent/30">
              <div className="font-display text-5xl font-extrabold leading-none tracking-[-0.04em] text-accent md:text-6xl">
                200+
              </div>
              <div className="mt-3 font-display text-lg font-bold">
                Trained staff
              </div>
              <p className="mt-2 text-sm text-muted">
                Field engineers, installers, and support specialists across
                regions.
              </p>
            </div>
          </MotionItem>

          <MotionItem className="lg:col-span-4">
            <div className="flex h-full flex-col justify-between gap-4 rounded-2xl border border-border bg-card p-7 transition hover:border-accent/30">
              <Target className="h-8 w-8 text-accent" strokeWidth={1.5} />
              <p className="font-display text-lg font-semibold leading-snug tracking-tight">
                Mission: deploy technology that is observable, maintainable, and
                aligned to operational risk — not shelf-ware.
              </p>
            </div>
          </MotionItem>

          <MotionItem className="lg:col-span-4">
            <div className="h-full rounded-2xl border border-border bg-card p-7 transition hover:border-accent/30">
              <div className="font-mono text-[0.72rem] uppercase tracking-wider text-muted">
                Location
              </div>
              <div className="mt-2 font-display text-2xl font-extrabold text-accent">
                Indore
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {company.address}
              </p>
            </div>
          </MotionItem>

          <MotionItem className="lg:col-span-4">
            <div className="h-full rounded-2xl border border-border bg-card p-7 transition hover:border-accent/30">
              <div className="font-mono text-[0.72rem] uppercase tracking-wider text-muted">
                Coverage
              </div>
              <div className="mt-2 font-display text-2xl font-extrabold text-accent">
                {company.stats.cities}+
              </div>
              <p className="mt-2 text-sm text-muted">Cities served pan-India.</p>
            </div>
          </MotionItem>
        </MotionStagger>
      </div>
    </section>
  );
}