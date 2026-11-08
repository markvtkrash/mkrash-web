import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VektraVibe",
  description: "VektraVibe — find restaurants near you, see estimated nutrition on their menus, and save your favorites. Available on iOS.",
};

export default function VectraVibeProduct() {
  return (
    <main>
      <div className="pagewrap">
        <div className="eyebrow">Flagship Product · iOS</div>
        <h1>VektraVibe</h1>
        <p className="lead">
          Find restaurants near you and see what is on their menus, with estimated nutrition
          for the dishes.
        </p>
      </div>

      <section className="block">
        <div className="container">
          <div className="product">
            <div className="product-copy">
              <div className="tagline">VektraVibe — Menus and nutrition, near you</div>
              <h2>Restaurant menus and nutrition, in one place.</h2>
              <p>
                VektraVibe shows you nearby restaurants and the dishes on their menus, with estimated
                nutrition such as calories and macros, so you can decide what to eat.
              </p>
              <ul className="feature-list">
                <li><span className="tick">✓</span> Browse restaurants near you, filtered by distance</li>
                <li><span className="tick">✓</span> See estimated nutrition on menus</li>
                <li><span className="tick">✓</span> Quick Find for a fast answer</li>
                <li><span className="tick">✓</span> Save the places and dishes you love, and share them</li>
              </ul>
              <div className="cta-row">
                <a className="btn btn-primary" href="#">
                  Download on the App Store
                </a>
              </div>
            </div>

            <div className="product-visual">
              <div className="product-screenshot-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/screenshots/vectra-vibe.png" alt="VektraVibe screenshot" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
