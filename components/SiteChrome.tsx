"use client";

import { usePathname } from "next/navigation";
import { Header } from "./Header";
import { Footer } from "./Footer";

const BARE_PATHS = ["/legal/privacy", "/legal/terms", "/legal/food-disclaimer"];
// Prefix, not exact match: /r/[placeId] is a dynamic route (one per restaurant), so it can never be
// listed in BARE_PATHS by value. It's themed to match the consumer app, not the marketing site, so it
// skips this site's own Header/Footer the same way the legal pages above do.
const BARE_PREFIXES = ["/r/"];

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (BARE_PATHS.includes(pathname) || BARE_PREFIXES.some((prefix) => pathname.startsWith(prefix))) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
