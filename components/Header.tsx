import Link from "next/link";

export function Header() {
  return (
    <header>
      <div className="container nav">
        <Link href="/" className="logo">
          <span className="dot" /> Markvt Krash
        </Link>
        <nav className="nav-links">
          <Link href="/#product">Product</Link>
          <Link href="/#work">Work</Link>
          <Link href="/about">About</Link>
          <Link href="/founder">Founder</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
