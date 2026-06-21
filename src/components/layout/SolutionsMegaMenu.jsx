import { Link } from "react-router-dom";

import {
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  solutionCategories,
  solutionChildPath,
  solutionPath,
} from "../../data/navigation";

import { menuFeaturedSrc } from "../../data/menuFeaturedImages";

function SolutionsMegaMenu({
  selectedSlug,
  onSelectSlug,
  onNavigate,
}) {
  const selected =
    solutionCategories.find(
      (c) => c.slug === selectedSlug
    ) || solutionCategories[0];

  const featuredImage = menuFeaturedSrc(
    selected.slug
  );

  const childCount =
    selected.children?.length || 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 4 }}
      transition={{
        duration: 0.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="w-full overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/10 dark:shadow-black/40"
    >
      <div className="grid lg:grid-cols-12 lg:items-start lg:divide-x lg:divide-border">

        {/* LEFT SIDEBAR */}
        <div className="lg:col-span-3">
          <div className="p-3">
            {solutionCategories.map((cat) => {
              const isSelected =
                cat.slug === selectedSlug;

              return (
                <Link
                  key={cat.slug}
                  to={solutionPath(cat.slug)}
                  data-cursor="hover"
                  onMouseEnter={() =>
                    onSelectSlug(cat.slug)
                  }
                  onFocus={() =>
                    onSelectSlug(cat.slug)
                  }
                  onClick={onNavigate}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3.5 text-left transition ${
                    isSelected
                      ? "bg-accent/12 text-foreground"
                      : "text-muted hover:bg-bg2 hover:text-foreground"
                  }`}
                >
                  <div className="min-w-0 flex-1">
                    <div className="font-display text-[0.95rem] font-bold leading-snug">
                      {cat.title}
                    </div>

                    <p className="mt-1 line-clamp-2 text-[0.72rem] leading-relaxed text-muted">
                      {cat.description}
                    </p>
                  </div>

                  <ArrowRight
                    className={`h-4 w-4 shrink-0 transition ${
                      isSelected
                        ? "translate-x-0.5 text-accent"
                        : "opacity-40"
                    }`}
                  />
                </Link>
              );
            })}
          </div>
        </div>

        {/* CENTER */}
        <div className="border-t border-border px-5 py-5 lg:col-span-4 lg:border-t-0 lg:px-6 lg:py-6">

          <p className="mb-3 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-accent">
            Capabilities
          </p>

          <ul
            className={`grid gap-1 ${
              childCount > 5
                ? "grid-cols-1 sm:grid-cols-2"
                : "grid-cols-1"
            }`}
          >
            {selected.children?.map((item) => (
              <li key={item.anchor}>
                <Link
                  to={solutionChildPath(
                    selected.slug,
                    item.anchor
                  )}
                  data-cursor="hover"
                  onClick={onNavigate}
                  className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-muted transition hover:bg-accent/10 hover:text-foreground"
                >
                  <span className="h-1 w-1 shrink-0 rounded-full bg-accent/80" />

                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            to={solutionPath(selected.slug)}
            data-cursor="hover"
            onClick={onNavigate}
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-accent transition hover:gap-2"
          >
            View {selected.title}

            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* RIGHT FEATURE */}
        <div className="border-t border-border bg-bg2/40 p-4 lg:col-span-5 lg:border-t-0 lg:p-5">

          <div className="grid overflow-hidden rounded-xl border border-border bg-card lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">

            {/* IMAGE */}
            <div className="relative min-h-[9rem] overflow-hidden bg-bg3 sm:min-h-[12rem] lg:min-h-[14rem]">

              <AnimatePresence mode="wait">
                <motion.img
                  key={selected.slug}
                  src={featuredImage}
                  alt={selected.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>

              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent to-card/30 lg:bg-gradient-to-t lg:from-card/50 lg:to-transparent"
                aria-hidden
              />
            </div>

            {/* CONTENT */}
            <div className="flex flex-col justify-between gap-4 p-5 sm:p-6">

              <div>
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-accent">
                  Featured
                </p>

                <h3 className="mt-2 font-display text-base font-extrabold leading-snug text-foreground sm:text-lg">
                  {selected.featuredTitle}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {selected.featuredBody}
                </p>
              </div>

              <Link
                to={solutionPath(selected.slug)}
                data-cursor="hover"
                onClick={onNavigate}
                className="group inline-flex h-10 w-10 shrink-0 items-center justify-center self-end rounded-full bg-accent text-cta-text shadow-md transition hover:scale-105 hover:bg-accent2 sm:h-11 sm:w-11"
                aria-label={`Open ${selected.title}`}
              >
                <ArrowUpRight className="h-5 w-5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>

            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default SolutionsMegaMenu;
