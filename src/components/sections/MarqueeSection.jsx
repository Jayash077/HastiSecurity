import { marqueeItems } from "../../data/siteContent";

function Row({ reverse = false }) {
  const doubled = [...marqueeItems, ...marqueeItems];

  return (
    <div
      className={`flex w-max gap-10 whitespace-nowrap py-4 ${
        reverse
          ? "animate-marqueeReverse hover:[animation-play-state:paused]"
          : "animate-marquee hover:[animation-play-state:paused]"
      }`}
    >
      {doubled.map((item, i) => (
        <span
          key={`${item}-${i}`}
          className="inline-flex items-center gap-2 font-display text-[0.82rem] font-bold uppercase tracking-[0.08em] text-muted"
        >
          <span
            className="h-1.5 w-1.5 rounded-full bg-accent"
            aria-hidden
          />
          {item}
        </span>
      ))}
    </div>
  );
}

export function MarqueeSection({ reverse = false }) {
  return (
    <section
      className="border-y border-border bg-bg2"
      aria-label="Service highlights"
    >
      <div className="relative overflow-hidden">
        <Row reverse={reverse} />
      </div>
    </section>
  );
}
