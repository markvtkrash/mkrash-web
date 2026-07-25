import Link from "next/link";
import { PikMeIcon } from "@/components/PikMeIcon";
import { products } from "@/lib/products";

const domains = ["AI", "Physical AI", "IoT", "Robotics", "Nano AI"];

const dishes = [
  { name: "Grilled Salmon Bowl", place: "Sweetgreen", match: 98, color: "#2e7d32" },
  { name: "Margherita Pizza", place: "Tony's", match: 94, color: "#e5793a" },
  { name: "Thai Green Curry", place: "Basil", match: 91, color: "#3a7de5" },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <span className="badge">
              <span className="badge-dot" /> Now live — PikMe on iOS
            </span>
            <h1>
              Building the intelligent systems <span className="thin">of the future.</span>
            </h1>
            <p>
              Markvt Krash builds intelligent products across AI, physical AI, IoT, robotics, and
              nano AI. PikMe, our first app, is live today.
            </p>
            <div className="cta-row">
              <Link className="btn btn-primary" href="#product">
                Meet PikMe →
              </Link>
              <Link className="btn btn-ghost" href="#contact">
                Get in touch
              </Link>
            </div>
            <div className="chips">
              {domains.map((d) => (
                <span className="chip" key={d}>
                  {d}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="glow" aria-hidden />
            <div className="phone">
              <PikMeIcon className="app-icon" id="hero-pm" />
            </div>
          </div>
        </div>
      </section>

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
              <div className="app-mock">
                <div className="app-mock-bar">
                  <PikMeIcon className="app-mock-icon" id="mock-pm" />
                  <div className="app-mock-title">
                    <strong>PikMe</strong>
                    <span>Near you · matched to you</span>
                  </div>
                </div>
                <div className="app-mock-list">
                  {dishes.map((d) => (
                    <div className="dish" key={d.name}>
                      <span className="dish-thumb" style={{ background: d.color }} />
                      <div className="dish-meta">
                        <strong>{d.name}</strong>
                        <span>{d.place}</span>
                      </div>
                      <span className="dish-match">{d.match}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work / products */}
      <section className="block" id="work">
        <div className="container">
          <div className="sec-head">What we&apos;re building</div>
          <div className="work-grid">
            {products.map((p) =>
              p.status === "coming-soon" ? (
                <div key={p.slug} className="work-card soon">
                  <span className="soon-pill">In the works</span>
                  <h3>{p.name.replace(" (in the works)", "")}</h3>
                  <p>{p.description}</p>
                </div>
              ) : (
                <article key={p.slug} className="work-card feature">
                  <div className="feature-top">
                    <PikMeIcon className="feature-icon" id={`grid-${p.slug}`} />
                    <span className="live-pill">
                      <span className="badge-dot" /> Live on {p.platform ?? "iOS"}
                    </span>
                  </div>
                  <h3>{p.name}</h3>
                  <p className="feature-tag">{p.tagline}</p>
                  <p>{p.description}</p>
                  <Link className="feature-link" href="#product">
                    Learn more →
                  </Link>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact-band" id="contact">
        <div className="container">
          <div className="contact-inner">
            <div>
              <div className="sec-head light">Contact</div>
              <h2>Have an idea, or just want to say hi?</h2>
            </div>
            <div className="contact-cta">
              <a className="btn btn-light" href="mailto:support@markvtkrash.com">
                support@markvtkrash.com
              </a>
              <p>We read every message.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
