export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="logo">
            <span className="dot" /> Markvt Krash
          </div>
        </div>
        <div className="copyright">
          © {new Date().getFullYear()} Markvt Krash LLC. Vectra Vibe is a product of Markvt Krash LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
