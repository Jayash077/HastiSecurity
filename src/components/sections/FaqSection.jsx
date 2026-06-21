import { faqItems } from "../../data/siteContent";
import { Accordion } from "../ui/Accordion";
import { MotionSection } from "../ui/MotionSection";

const left = faqItems.slice(0, 3).map((f, i) => ({
  id: `faq-l-${i}`,
  title: f.q,
  children: <p>{f.a}</p>,
}));

const right = faqItems.slice(3).map((f, i) => ({
  id: `faq-r-${i}`,
  title: f.q,
  children: <p>{f.a}</p>,
}));

export function FaqSection() {
  return (
    <section
      id="faq"
      className="scroll-mt-nav border-y border-border bg-bg2 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <MotionSection className="mb-12 max-w-2xl space-y-3">
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.12em] text-accent">
            FAQ
          </p>

          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
            Answers before you pick up the phone
          </h2>
        </MotionSection>

        <div className="grid gap-8 lg:grid-cols-2">
          <MotionSection>
            <Accordion items={left} />
          </MotionSection>

          <MotionSection delay={0.06}>
            <Accordion items={right} />
          </MotionSection>
        </div>
      </div>
    </section>
  );
}