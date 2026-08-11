import { EngineeringGraphic } from "./EngineeringGraphic";

const capabilities = [
  "Applied AI & machine learning",
  "Hardware-aware, physical systems",
  "Full-stack product engineering",
  "Rapid prototyping to production",
];

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="about-work" style={{ ["--accent" as string]: "#34d17b" }}>
      <div className="container about-work-inner">
        <div className="about-copy">
          <div className="panel-eyebrow about-eyebrow">What We Do</div>
          <h2 className="about-title">We engineer intelligence — from software to the physical world.</h2>
          <p className="about-text">
            Markvt Krash is a frontier technology company. We build applied AI systems, connect
            them to real hardware and sensors, and ship them as products people use every day —
            not research demos.
          </p>
          <p className="about-text">
            Our team works across the full stack — machine learning, embedded systems, cloud
            infrastructure, and mobile — moving fast from prototype to production.
          </p>
          <ul className="about-list">
            {capabilities.map((c) => (
              <li key={c}>
                <span className="about-tick">✓</span> {c}
              </li>
            ))}
          </ul>
        </div>

        <div className="about-graphic">
          <EngineeringGraphic color="#34d17b" />
        </div>
      </div>
    </section>
  );
}
