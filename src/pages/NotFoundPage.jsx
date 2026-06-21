import { Link } from "react-router-dom";
import { usePageSeo } from "../hooks/usePageSeo";

const NotFoundPage = () => {
  usePageSeo({
    title: "Page Not Found",
    description: "The page you requested does not exist.",
    path: "/404",
  });

  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-12 text-center">
      <p className="font-mono text-sm uppercase tracking-widest text-accent">
        404
      </p>

      <h1 className="mt-4 font-display text-3xl font-extrabold text-foreground">
        Page not found
      </h1>

      <p className="mt-3 max-w-md text-muted">
        The page you requested does not exist or has moved.
      </p>

      <Link
        to="/"
        className="mt-8 rounded-pill bg-accent px-6 py-3 font-display text-sm font-bold text-cta-text transition hover:bg-accent2"
      >
        Back to home
      </Link>
    </main>
  );
};

export default NotFoundPage;