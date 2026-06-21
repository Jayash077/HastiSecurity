import { Link } from "react-router-dom";
import { usePageSeo } from "../hooks/usePageSeo";
import { ClientsSection } from "../components/sections/ClientsSection";
import { company } from "../data/siteContent";

export default function ClientsPage() {
  usePageSeo({
    title: "Clients",
    description: `${company.name} is trusted by institutions across India for CCTV, solar, and security systems.`,
    path: "/clients",
  });

  return (
    <main>
      {/* HERO SECTION */}
      <section className="border-b border-border bg-bg2 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-accent">
            Clients
          </p>

          <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            Trusted where uptime matters
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-muted">
            Healthcare, education, manufacturing, infrastructure, and public
            institutions rely on our surveillance, solar, and security systems
            every day.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex rounded-pill bg-accent px-6 py-3 font-display text-sm font-bold text-cta-text transition hover:bg-accent2"
          >
            Become a client
          </Link>
        </div>
      </section>

      {/* CLIENTS LIST */}
      <ClientsSection showIntro={false} />
    </main>
  );
}