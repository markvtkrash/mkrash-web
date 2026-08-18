"use client";

import { usePathname } from "next/navigation";
import { Header } from "./Header";
import { Footer } from "./Footer";

const BARE_PATHS = ["/legal/privacy", "/legal/terms", "/legal/food-disclaimer"];

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (BARE_PATHS.includes(pathname)) {
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
