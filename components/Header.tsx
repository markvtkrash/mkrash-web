"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type NavItem =
  | { href: string; label: string }
  | { label: string; children: { href: string; label: string }[] };

const links: NavItem[] = [
  { href: "/", label: "Home" },
  {
    label: "About",
    children: [
      { href: "/about", label: "Company" },
      { href: "/founder", label: "Founder" },
    ],
  },
  { href: "/#products", label: "Products" },
  { href: "/#coming-soon", label: "Coming Soon" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const overlay = usePathname() === "/";

  return (
    <header className={overlay ? "overlay" : undefined}>
      <div className="container nav">
        <Link href="/" className="logo" onClick={close}>
          <span className="dot" /> Markvt Krash
        </Link>

        <nav className="nav-links">
          {links.map((l) =>
            "children" in l ? (
              <div key={l.label} className="nav-dropdown">
                <button type="button" className="nav-dropdown-trigger">
                  {l.label}
                  <span className="caret" aria-hidden>
                    ▾
                  </span>
                </button>
                <div className="nav-dropdown-menu">
                  {l.children.map((c) => (
                    <Link key={c.href} href={c.href}>
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            )
          )}
        </nav>

        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`nav-toggle-bar ${open ? "open" : ""}`} />
        </button>
      </div>

      <nav className={`mobile-menu ${open ? "open" : ""}`}>
        <div className="container">
          {links.map((l) =>
            "children" in l ? (
              <div key={l.label} className="mobile-group">
                <span className="mobile-group-label">{l.label}</span>
                {l.children.map((c) => (
                  <Link key={c.href} href={c.href} className="mobile-sub" onClick={close}>
                    {c.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link key={l.href} href={l.href} onClick={close}>
                {l.label}
              </Link>
            )
          )}
        </div>
      </nav>
    </header>
  );
}
