import { Suspense } from "react";
import { Link } from "react-router-dom";
import { company } from "../../data/siteContent";
import { clientLogoFiles } from "../../data/clientLogoFiles";
import { AnimatedCounter } from "../ui/AnimatedCounter";
import { LazyIndiaCoverageMap } from "../layout/AppLayout";
import { ClientLogoCell } from "../clients/ClientLogoCell";

function MapSkeleton() {
  return (
    <div className="h-[280px] animate-pulse rounded-2xl border border-border bg-bg3 sm:h-[320px] lg:h-[360px]" />
  );
}

export function ClientsSection({
  showIntro = true,
  showMap = true,
  logoLimit,
  showViewAllLink = false,
}) {
  const logos = logoLimit
    ? clientLogoFiles.slice(0, logoLimit)
    : clientLogoFiles;

  return (
    <section
      id="clients"
      className="scroll-mt-nav border-y border-border bg-bg2 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {showIntro ? (
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl space-y-3">
              <p className="font-mono text-[0.72rem] uppercase tracking-[0.12em] text-accent">
                Clients
              </p>

              <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
                Institutions that run on uptime
              </h2>

              <p className="text-muted">
                Organizations across healthcare, education, manufacturing,
                and infrastructure trust Hasti for surveillance, solar,
                and security.
              </p>
            </div>

            {showViewAllLink ? (
              <Link
                to="/clients"
                className="inline-flex shrink-0 rounded-pill border border-accent/40 px-5 py-2.5 font-display text-sm font-bold text-accent transition hover:bg-accent/10"
              >
                View all clients
              </Link>
            ) : null}
          </div>
        ) : null}

        <div
          className={`grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ${
            showMap || !showIntro ? "mb-12" : ""
          }`}
        >
          {logos.map((entry) => (
            <ClientLogoCell
              key={entry.file}
              label={entry.label}
              src={`/clientsLogo/${entry.file}`}
            />
          ))}
        </div>

        {showViewAllLink &&
        logoLimit &&
        clientLogoFiles.length > logoLimit ? (
          <p className="mb-10 text-center text-sm text-muted">
            Showing {logoLimit} of {clientLogoFiles.length} partners.{" "}
            <Link
              to="/clients"
              className="font-semibold text-accent hover:underline"
            >
              See full client list
            </Link>
          </p>
        ) : null}

        <div
          className={`grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-5 ${
            showMap ? "mb-10" : ""
          }`}
        >
          {[
            { target: company.stats.states, suffix: "+", label: "States" },
            { target: company.stats.cities, suffix: "+", label: "Cities" },
            { target: company.stats.years, suffix: "", label: "Years active" },
            { target: company.stats.staff, suffix: "+", label: "Staff trained" },
            {
              target: company.stats.customers,
              suffix: "+",
              label: "Customers",
              customers: true,
            },
          ].map((s, i) => (
            <div
              key={s.label}
              className={`bg-card px-4 py-6 text-center sm:py-8 ${
                i > 0 ? "sm:border-l sm:border-border" : ""
              }`}
            >
              <div className="font-display text-3xl font-extrabold text-foreground md:text-4xl">
                <AnimatedCounter
                  target={s.target}
                  suffix={s.suffix}
                  isCustomers={s.customers}
                />
              </div>

              <div className="mt-2 text-[0.72rem] font-medium uppercase tracking-wider text-muted">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {showMap ? (
          <Suspense fallback={<MapSkeleton />}>
            <LazyIndiaCoverageMap />
          </Suspense>
        ) : null}
      </div>
    </section>
  );
}