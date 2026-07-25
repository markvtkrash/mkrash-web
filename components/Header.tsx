"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/#product", label: "Product" },
  { href: "/#work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/founder", label: "Founder" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="container nav">
        <Link href="/" className="logo" onClick={() => setOpen(false)}>
          <span className="dot" /> Markvt Krash
        </Link>

        <nav className="nav-links">
          {links.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
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
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
