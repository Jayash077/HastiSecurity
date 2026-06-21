import { Suspense, lazy, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import CursorFollower from "../ui/CursorFollower";
import ScrollProgress from "./ScrollProgress";
import NavBar from "./NavBar";
import Footer from "./Footer";

function PageFallback() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-accent border-t-transparent" />
    </div>
  );
}

function AppLayout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-dvh bg-bg">
      <CursorFollower />

      <ScrollProgress />

      <NavBar />

      <div className="pt-nav">
        <Suspense fallback={<PageFallback />}>
          <Outlet />
        </Suspense>
      </div>

      <Footer />
    </div>
  );
}

export default AppLayout;

/* Lazy Loaded Map Component */
export const LazyIndiaCoverageMap = lazy(() =>
  import("../maps/IndiaCoverageMap").then(m => {
    console.log("IndiaCoverageMap module:", m);
    console.log("Default export:", m.default);
    console.log("Type of default:", typeof m.default);
    return m;
  })
);
