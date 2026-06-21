import { useCursorFollower } from "../../hooks/useCursorFollower";

export default function CursorFollower() {
  const { enabled, hovering, visible, dotRef, ringRef } =
    useCursorFollower();

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className={`pointer-events-none fixed left-0 top-0 z-[10001] h-2 w-2 rounded-full bg-accent will-change-transform transition-opacity duration-300 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          boxShadow: "0 0 12px rgb(var(--color-accent-rgb) / 0.55)",
        }}
        aria-hidden
      />

      <div
        ref={ringRef}
        className={`pointer-events-none fixed left-0 top-0 z-[10001] rounded-full border-2 border-accent/70 will-change-transform transition-[width,height,opacity,border-color,background-color,box-shadow] duration-300 ease-out ${
          visible ? "opacity-100" : "opacity-0"
        } ${
          hovering
            ? "h-14 w-14 border-accent bg-accent/10"
            : "h-9 w-9 bg-transparent"
        }`}
        style={{
          boxShadow: hovering
            ? "0 0 28px rgb(var(--color-accent-rgb) / 0.35)"
            : "0 0 16px rgb(var(--color-accent-rgb) / 0.15)",
        }}
        aria-hidden
      />
    </>
  );
}
