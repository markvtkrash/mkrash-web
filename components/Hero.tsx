import Link from "next/link";

const capabilities = [
  "Applied AI & machine learning",
  "Hardware-aware, physical systems",
  "Full-stack product engineering",
  "Rapid prototyping to production",
];

export function Hero() {
  return (
    <section id="top" className="panel hero-panel">
      <div className="panel-content container hero-content">
        <div className="hero-split">
          <div className="hero-col hero-col-left">
            <div className="panel-eyebrow">Frontier Technology Company</div>
            <h1 className="hero-title">Markvt Krash</h1>
            <p className="hero-desc">Building the intelligent systems of the future.</p>
            <div className="hero-cta">
              <Link className="btn btn-white" href="#products">
                Explore
              </Link>
              <Link className="btn btn-glass" href="#products">
                Meet PikMe
              </Link>
            </div>
          </div>

          <div className="hero-divider" aria-hidden="true" />

          <div className="hero-col hero-col-right">
            <div className="panel-eyebrow">What We Do</div>
            <h2 className="hero-subhead">We engineer intelligence — from software to the physical world.</h2>
            <p className="hero-desc">
              Markvt Krash is a frontier technology company. We build applied AI systems, connect
              them to real hardware and sensors, and ship them as products people use every day —
              not research demos.
            </p>
            <p className="hero-desc">
              Our team works across the full stack — machine learning, embedded systems, cloud
              infrastructure, and mobile — moving fast from prototype to production.
            </p>
            <ul className="hero-list">
              {capabilities.map((c) => (
                <li key={c}>
                  <span className="about-tick">✓</span> {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
