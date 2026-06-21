import { company, serviceAccordion } from "../../data/siteContent";
import { Accordion } from "../ui/Accordion";
import { MotionSection } from "../ui/MotionSection";

const items = serviceAccordion.map((s) => ({
  id: s.num,
  subtitle: s.num,
  title: s.title,
  children: <p>{s.body}</p>,
}));

export function ServicesSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-start">
        
        <MotionSection className="space-y-6 lg:sticky lg:top-28">
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.12em] text-accent">
            Services
          </p>

          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
            Depth across every stage of delivery
          </h2>

          <p className="text-base leading-relaxed text-muted">
            Design, supply, installation, integration,
            training, and AMC — with clear ownership
            from site survey to lifecycle support.
          </p>

          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="font-mono text-[0.72rem] uppercase tracking-wider text-accent">
              Head office
            </div>

            <p className="mt-3 text-sm leading-relaxed text-muted">
              {company.address}
            </p>

            <div className="mt-4 space-y-1 text-sm">
              <a
                className="block font-medium text-foreground hover:text-accent"
                href={`tel:${company.phonePrimary.replace(/-/g, "")}`}
              >
                {company.phonePrimary}
              </a>

              <a
                className="block text-muted hover:text-accent"
                href={`mailto:${company.email}`}
              >
                {company.email}
              </a>
            </div>

            <p className="mt-4 text-xs text-muted">
              {company.hours}
            </p>
          </div>
        </MotionSection>

        <MotionSection delay={0.08}>
          <Accordion items={items} />
        </MotionSection>

      </div>
    </section>
  );
}
