import { Link } from "react-router-dom";

import { company } from "../../data/siteContent";
import {
  solutionCategories,
  solutionPath,
} from "../../data/navigation";

const footerCols = [
  {
    title: "Company",
    links: [
      {
        label: "About Us",
        to: "/about",
      },
      {
        label: "Our Solutions",
        to: solutionPath(solutionCategories[0].slug),
      },
      {
        label: "Clients",
        to: "/clients",
      },
      {
        label: "Contact",
        to: "/contact",
      },
    ],
  },

  {
    title: "Solutions",
    links: solutionCategories.map((category) => ({
      label: category.title,
      to: solutionPath(category.slug),
    })),
  },

  {
    title: "Contact",
    links: [
      {
        label: company.phonePrimary,
        to: `tel:${company.phonePrimary.replace(/-/g, "")}`,
        external: true,
      },

      {
        label: company.mobile[0],
        to: `tel:${company.mobile[0]}`,
        external: true,
      },

      {
        label: company.email,
        to: `mailto:${company.email}`,
        external: true,
      },

      {
        label: company.domain,
        to: `https://${company.domain}`,
        external: true,
      },
    ],
  },
];

function Footer() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Company Info */}
          <div className="max-w-sm space-y-4">

            <Link
              to="/"
              className="inline-block"
            >
              <div className="flex items-center gap-2">

                <img
                  src="/hastiIconLogo.png"
                  alt="Hasti Security Solutions Logo"
                  className="h-10 w-auto"
                />

                <div>
                  <div className="font-display text-xl font-extrabold tracking-tight">
                    {company.shortName}
                    <span className="text-accent">.</span>
                  </div>

                  <div className="text-sm font-semibold text-muted">
                    Security Solutions
                  </div>
                </div>
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-muted">
              India&apos;s benchmark in CCTV surveillance,
              solar energy, electronic security,
              and industrial automation since {company.founded}.
            </p>

            <ul className="space-y-2 text-sm text-muted">

              <li>
                <a
                  href={`tel:${company.phonePrimary.replace(/-/g, "")}`}
                  className="transition hover:text-accent"
                >
                  {company.phonePrimary}
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="transition hover:text-accent"
                >
                  {company.email}
                </a>
              </li>

              <li className="leading-relaxed">
                {company.address}
              </li>

            </ul>
          </div>

          {/* Footer Columns */}
          {footerCols.map((col) => (
            <div key={col.title}>

              <div className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-foreground">
                {col.title}
              </div>

              <ul className="space-y-2.5 text-sm text-muted">

                {col.links.map((link) => (
                  <li key={link.label}>

                    {link.external ? (
                      <a
                        href={link.to}
                        className="transition hover:text-accent"
                        {...(link.to.startsWith("http")
                          ? {
                              target: "_blank",
                              rel: "noreferrer",
                            }
                          : {})}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.to}
                        className="transition hover:text-accent"
                      >
                        {link.label}
                      </Link>
                    )}

                  </li>
                ))}

              </ul>
            </div>
          ))}

        </div>

        {/* Bottom Footer */}
        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-8 text-[0.78rem] text-muted sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} {company.name}.
            All rights reserved.
          </p>

          <div className="flex flex-wrap gap-x-4 gap-y-2">

            <Link
              to="/about"
              className="hover:text-accent"
            >
              About
            </Link>

            <Link
              to="/clients"
              className="hover:text-accent"
            >
              Clients
            </Link>

            <Link
              to="/contact"
              className="hover:text-accent"
            >
              Contact
            </Link>

            <span
              className="hidden sm:inline"
              aria-hidden
            >
              |
            </span>

            <Link
              to="/"
              className="hover:text-accent"
            >
              Privacy Policy
            </Link>

            <Link
              to="/"
              className="hover:text-accent"
            >
              Terms
            </Link>

            <Link
              to="/"
              className="hover:text-accent"
            >
              Sitemap
            </Link>

          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
