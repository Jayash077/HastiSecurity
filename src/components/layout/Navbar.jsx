import {
  ChevronDown,
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import {
  Link,
  NavLink,
  useLocation,
} from "react-router-dom";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import { company } from "../../data/siteContent";

import { useTheme } from "../../context/ThemeContext";

import {
  solutionCategories,
  solutionPath,
} from "../../data/navigation";

import SolutionsMegaMenu from "./SolutionsMegaMenu";

const navLinkClass = ({ isActive }) =>
  `rounded-lg px-3 py-2 text-[0.85rem] font-semibold tracking-wide transition ${
    isActive
      ? "text-accent"
      : "text-muted hover:bg-bg2/80 hover:text-foreground"
  }`;

function NavBar() {
  const { theme, toggleTheme } = useTheme();

  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);

  const [mobileOpen, setMobileOpen] = useState(false);

  const [megaOpen, setMegaOpen] = useState(false);

  const [megaSlug, setMegaSlug] = useState(
    solutionCategories[0].slug
  );

  const [mobileSolOpen, setMobileSolOpen] =
    useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    onScroll();

    window.addEventListener(
      "scroll",
      onScroll,
      { passive: true }
    );

    return () =>
      window.removeEventListener(
        "scroll",
        onScroll
      );
  }, []);

  useEffect(() => {
    document.body.style.overflow =
      mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMegaOpen(false);
    setMobileOpen(false);
    setMobileSolOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[1000] border-b transition-colors ${
        scrolled
          ? "border-border bg-[color:var(--nav-bg)] shadow-sm backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >

      {/* Backdrop */}
      <AnimatePresence>
        {megaOpen ? (
          <motion.button
            type="button"
            key="mega-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[998] cursor-default border-0 bg-black/25 backdrop-blur-[2px]"
            aria-label="Close menu"
            onClick={() => setMegaOpen(false)}
          />
        ) : null}
      </AnimatePresence>

      {/* Navbar */}
      <div className="relative z-[1000] mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-[4.25rem] sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          to="/"
          data-cursor="hover"
          className="group relative z-10 flex shrink-0 items-center gap-2"
        >
          <img
            src="/hastiIconLogo.png"
            alt="Hasti Security Solutions Logo"
            className="h-8 w-auto sm:h-10"
          />

          <span className="hidden font-display text-xl font-extrabold tracking-tight text-foreground sm:inline sm:text-2xl">
            {company.shortName}

            <span
              className="translate-y-px text-accent transition group-hover:text-accent2"
              aria-hidden
            >
              .
            </span>
          </span>

          <span className="sr-only">
            {company.name}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-0.5 md:flex"
          aria-label="Primary"
        >

          <NavLink
            to="/"
            className={navLinkClass}
            end
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={navLinkClass}
          >
            About Us
          </NavLink>

          {/* Mega Menu */}
          <div
            onMouseEnter={() => setMegaOpen(true)}
            onFocus={() => setMegaOpen(true)}
          >
            <button
              type="button"
              data-cursor="hover"
              aria-expanded={megaOpen}
              aria-haspopup="true"
              className={`flex items-center gap-1 rounded-lg px-3 py-2 text-[0.85rem] font-semibold tracking-wide transition ${
                megaOpen ||
                location.pathname.startsWith(
                  "/solutions"
                )
                  ? "text-accent"
                  : "text-muted hover:text-foreground"
              }`}
            >
              Our Solutions

              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${
                  megaOpen ? "rotate-180" : ""
                }`}
                strokeWidth={2}
              />
            </button>
          </div>

          <NavLink
            to="/clients"
            className={navLinkClass}
          >
            Clients
          </NavLink>

          <NavLink
            to="/contact"
            className={navLinkClass}
          >
            Contact Us
          </NavLink>

        </nav>

        {/* Mega Menu Dropdown */}
        <AnimatePresence>
          {megaOpen && (
            <motion.div
              key="mega-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 right-0 top-full z-[999] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
            >
              <SolutionsMegaMenu
                selectedSlug={megaSlug}
                onSelectSlug={setMegaSlug}
                onNavigate={() => setMegaOpen(false)}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Right Actions */}
        <div className="relative z-10 flex shrink-0 items-center gap-1 sm:gap-2">

          {/* Theme Toggle */}
          <button
            type="button"
            data-cursor="hover"
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition hover:border-accent/40 hover:bg-bg3/50"
            aria-label={
              theme === "dark"
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
          >
            {theme === "dark" ? (
              <Sun
                className="h-[1.15rem] w-[1.15rem]"
                strokeWidth={1.75}
              />
            ) : (
              <Moon
                className="h-[1.15rem] w-[1.15rem]"
                strokeWidth={1.75}
              />
            )}
          </button>

          {/* Demo Button */}
          <Link
            to="/contact"
            data-cursor="hover"
            className="hidden rounded-full border border-cta-text/20 bg-transparent px-4 py-2 font-display text-[0.8rem] font-bold text-foreground transition hover:border-foreground/40 hover:bg-foreground/5 sm:inline-flex"
          >
            Request a demo
          </Link>

          {/* Mobile CTA */}
          <Link
            to="/contact"
            data-cursor="hover"
            className="hidden rounded-pill bg-accent px-4 py-2 font-display text-[0.8rem] font-bold uppercase tracking-wide text-cta-text shadow-sm transition hover:bg-accent2 sm:inline-flex md:hidden"
          >
            Get in Touch
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card md:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() =>
              setMobileOpen((v) => !v)
            }
            aria-label={
              mobileOpen
                ? "Close menu"
                : "Open menu"
            }
          >
            {mobileOpen ? (
              <X
                className="h-5 w-5"
                strokeWidth={1.75}
              />
            ) : (
              <Menu
                className="h-5 w-5"
                strokeWidth={1.75}
              />
            )}
          </button>

        </div>
      </div>
    </header>
  );
}

export default NavBar;