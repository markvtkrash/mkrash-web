import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vectra Vibe",
  description: "Vectra Vibe — personalized food & restaurant recommendations tailored to YOUR needs, powered by AI. Available on iOS.",
};

export default function VectraVibeProduct() {
  return (
    <main>
      <div className="pagewrap">
        <div className="eyebrow">Flagship Product · Live on iOS</div>
        <h1>Vectra Vibe</h1>
        <p className="lead">
          Your personal menu guide — nearby restaurants and the exact dishes worth ordering,
          matched to your diet, health goals, and allergens.
        </p>
      </div>

      <section className="block">
        <div className="container">
          <div className="product">
            <div className="product-copy">
              <div className="tagline">Vectra Vibe — Find meals made for you</div>
              <h2>Personalized recommendations, powered by AI.</h2>
              <p>
                Vectra Vibe surfaces nearby restaurants and the exact dishes worth ordering — matched to
                your diet, health goals, and personal preferences.
              </p>
              <ul className="feature-list">
                <li><span className="tick">✓</span> Discover restaurants near you</li>
                <li><span className="tick">✓</span> AI recommendations for specific menu items</li>
                <li><span className="tick">✓</span> Personalized to your dietary needs &amp; allergens</li>
                <li><span className="tick">✓</span> Save the places and dishes you love</li>
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
                <img src="/screenshots/vectra-vibe.png" alt="Vectra Vibe screenshot" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
