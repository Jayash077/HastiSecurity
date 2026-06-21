import { useScrollProgress } from "../../hooks/useScrollProgress";

function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      className="pointer-events-none fixed left-0 right-0 top-0 z-[10000] h-0.5 origin-left bg-accent"
      style={{
        transform: `scaleX(${progress})`,
      }}
      aria-hidden
    />
  );
}

export default ScrollProgress;
