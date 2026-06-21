import { useMemo } from "react";
import { Navigate, useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

import { solutionCategories, solutionPath } from "../data/navigation";
import { getCatalogBySlug } from "../data/solutionsCatalog";
import { usePageSeo } from "../hooks/usePageSeo";

export default function SolutionsCategoryPage() {
  const { slug } = useParams();

  /* ---------------- DATA LOOKUP (OPTIMIZED) ---------------- */
  const cat = useMemo(
    () => solutionCategories.find((c) => c.slug === slug),
    [slug]
  );

  const catalog = useMemo(
    () => (slug ? getCatalogBySlug(slug) : null),
    [slug]
  );

  /* ---------------- SEO ---------------- */
  usePageSeo({
    title: cat?.title || "Solutions",
    description:
      cat?.description ||
      "Security, solar, and surveillance solutions by Hasti Security Solutions.",
    path: slug ? `/solutions/${slug}` : "/solutions",
  });

  /* ---------------- INVALID SLUG HANDLING ---------------- */
  if (!cat || !catalog) {
    return <Navigate to="/" replace />;
  }

  return (
    <main>
      {/* HERO */}
      <section className="border-b border-border bg-bg2 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-accent">
            Our Solutions
          </p>

          <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            {cat.title}
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            {cat.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex rounded-pill bg-accent px-5 py-2.5 font-display text-sm font-bold text-cta-text transition hover:bg-accent2"
            >
              Request a quote
            </Link>

            <Link
              to="/"
              className="inline-flex rounded-pill border border-border bg-card px-5 py-2.5 font-display text-sm font-bold text-foreground transition hover:border-accent/40"
            >
              Back to home
            </Link>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-border bg-card p-8"
        >
          <h2 className="font-display text-xl font-bold text-foreground">
            Overview
          </h2>

          <p className="mt-4 leading-relaxed text-muted">
            {cat.featuredBody} We scope each engagement with site walks, risk
            mapping, and a clear bill of materials before installation begins.
          </p>
        </motion.div>

        {/* SECTIONS */}
        <div className="mt-12 space-y-12">
          {catalog.sections?.map((section, i) => (
            <motion.article
              key={section.anchor}
              id={section.anchor}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.05 }}
              className="scroll-mt-nav rounded-2xl border border-border bg-card p-8"
            >
              <h2 className="font-display text-xl font-bold text-foreground">
                {section.title}
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-muted">
                Hasti Security Solutions provides {section.title.toLowerCase()} solutions
                across India with installation, support, and AMC services.
              </p>

              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 rounded-xl border border-border bg-bg2 px-4 py-2.5 text-sm font-medium text-foreground"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className="mt-6 inline-block text-sm font-bold text-accent hover:underline"
              >
                Discuss {section.title}
              </Link>
            </motion.article>
          ))}

          {/* PRODUCTS */}
          {catalog.items?.length ? (
            <motion.article
              id="products"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="scroll-mt-nav rounded-2xl border border-border bg-card p-8"
            >
              <h2 className="font-display text-xl font-bold text-foreground">
                Products & offerings
              </h2>

              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {catalog.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 rounded-xl border border-border bg-bg2 px-4 py-2.5 text-sm font-medium text-foreground"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className="mt-6 inline-block text-sm font-bold text-accent hover:underline"
              >
                Request pricing for {cat.title}
              </Link>
            </motion.article>
          ) : null}

          {/* FOOTER NAV */}
          <div className="rounded-2xl border border-dashed border-border bg-bg2/50 p-8 text-center">
            <p className="text-sm text-muted">
              Explore more solutions or go back to{" "}
              <Link to="/" className="font-bold text-accent hover:underline">
                home
              </Link>
              .
            </p>

            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {solutionCategories
                .filter((c) => c.slug !== cat.slug)
                .map((c) => (
                  <Link
                    key={c.slug}
                    to={solutionPath(c.slug)}
                    className="rounded-pill border border-border bg-card px-3 py-1.5 text-xs font-semibold text-muted transition hover:border-accent/40 hover:text-accent"
                  >
                    {c.title}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

