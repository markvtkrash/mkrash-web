"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/legal/privacy", label: "Privacy Policy" },
  { href: "/legal/terms", label: "Terms of Service" },
  { href: "/legal/food-disclaimer", label: "Food Disclaimer" },
  { href: "/legal/support", label: "Support" },
  { href: "/legal/delete-account", label: "Delete Account" },
];

export function LegalNav() {
  const pathname = usePathname();
  return (
    <nav className="legal-nav">
      {links.map((l) => (
        <Link key={l.href} href={l.href} className={pathname === l.href ? "active" : ""}>
          {l.label}
        </Link>
      ))}
    </nav>
  );
}
