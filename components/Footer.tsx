import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="logo">
            <span className="dot" /> Markvt Krash
          </div>
          <div className="footer-links">
            <Link href="/legal/privacy">Privacy</Link>
            <Link href="/legal/terms">Terms</Link>
            <Link href="/legal/food-disclaimer">Food Disclaimer</Link>
            <Link href="/legal/support">Support</Link>
            <Link href="/legal/delete-account">Delete Account</Link>
          </div>
        </div>
        <div className="copyright">
          © {new Date().getFullYear()} Markvt Krash LLC. PikMe is a product of Markvt Krash LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
