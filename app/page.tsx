import Link from "next/link";
import { PikMeIcon } from "@/components/PikMeIcon";
import { products } from "@/lib/products";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <div className="container hero">
        <div className="eyebrow">Frontier Technology Company</div>
        <h1>
          Building the intelligent systems <span className="thin">of the future.</span>
        </h1>
        <p>
          Markvt Krash builds intelligent products across AI, physical AI, IoT, robotics, and nano
          AI. PikMe, our first app, is live today.
        </p>
        <div className="cta-row">
          <Link className="btn btn-primary" href="#product">
            Meet PikMe →
          </Link>
          <Link className="btn btn-ghost" href="#contact">
            Get in touch
          </Link>
        </div>
      </div>

      {/* Flagship product */}
      <section className="block" id="product">
        <div className="container">
          <div className="sec-head">Flagship product</div>
          <div className="product">
            <div className="product-copy">
              <div className="tagline">PikMe — Find meals made for you</div>
              <h2>Your personal menu guide.</h2>
              <p>
                PikMe surfaces nearby restaurants and the exact dishes worth ordering — matched to
                your diet, health goals, and allergens, powered by AI.
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
              <div className="phone">
                <PikMeIcon className="app-icon" id="hero-pm" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work / products grid */}
      <section className="block" id="work">
        <div className="container">
          <div className="sec-head">What we&apos;re building</div>
          <div className="grid">
            {products.map((p) =>
              p.status === "coming-soon" ? (
                <div key={p.slug} className="card soon">
                  {p.name}
                </div>
              ) : (
                <div key={p.slug} className="card">
                  <PikMeIcon className="mini-icon" id={`grid-${p.slug}`} />
                  <h3>{p.name}</h3>
                  <p>{p.description}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="block contact" id="contact">
        <div className="container">
          <div className="sec-head">Contact</div>
          <h2>Have an idea, or just want to say hi?</h2>
          <a className="mail" href="mailto:support@markvtkrash.com">
            support@markvtkrash.com
          </a>
        </div>
      </section>
    </main>
  );
}
