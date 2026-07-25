import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Markvt Krash is a frontier technology company building intelligent systems across AI, physical AI, IoT, robotics, and nano AI.",
};

const domains = [
  {
    idx: "01",
    name: "Artificial Intelligence",
    desc: "Applied and foundation models that personalize decisions and automate the everyday.",
  },
  {
    idx: "02",
    name: "Physical AI",
    desc: "Intelligence that perceives and acts in the real world — where software meets hardware.",
  },
  {
    idx: "03",
    name: "Internet of Things",
    desc: "Connected devices and sensor networks that bring the physical world online.",
  },
  {
    idx: "04",
    name: "Robotics",
    desc: "Autonomous systems that move, sense, and interact with their environment.",
  },
  {
    idx: "05",
    name: "Nano AI",
    desc: "Intelligence at the smallest scale — compact, efficient models and nano-scale systems.",
  },
];

export default function About() {
  return (
    <main className="pagewrap">
      <div className="eyebrow">Frontier Technology Company</div>
      <h1>Engineering intelligence — from software to the physical world.</h1>
      <p className="lead">
        Markvt Krash is a technology company building intelligent systems across artificial
        intelligence, physical AI, IoT, robotics, and nano-scale AI. PikMe, our first consumer
        product, is only the beginning of what we&apos;re building.
      </p>

      <div className="prose">
        <h2>Our vision</h2>
        <p>
          We&apos;re working toward a future where intelligence is woven into everything — from the
          apps in your pocket, to the machines around you, to systems too small to see. We build at
          the intersection of these fields, where the most meaningful breakthroughs happen when
          software, hardware, and the physical world converge.
        </p>

        <h2>Where we work</h2>
        <p>Our research and products span five converging domains:</p>
        <div className="domains">
          {domains.map((d) => (
            <div className="domain" key={d.idx}>
              <div className="idx">{d.idx}</div>
              <h3>{d.name}</h3>
              <p>{d.desc}</p>
            </div>
          ))}
        </div>

        <h2>In the pipeline</h2>
        <p>
          PikMe is live today, and a portfolio of products spanning these technologies is in active
          development — each designed to bring advanced intelligence out of the lab and into
          everyday life.
        </p>

        <h2>How we build</h2>
        <div className="values">
          <div className="value">
            <h3>Frontier thinking</h3>
            <p>We pursue hard problems at the edge of what&apos;s possible, not incremental ones.</p>
          </div>
          <div className="value">
            <h3>Convergence</h3>
            <p>The breakthroughs are where AI, hardware, and the physical world meet.</p>
          </div>
          <div className="value">
            <h3>Real-world impact</h3>
            <p>Research only matters when it ships and improves real people&apos;s lives.</p>
          </div>
        </div>

        <h2>Leadership</h2>
        <p>Markvt Krash was founded and is led by its founder.</p>
        <Link href="/founder" className="founder-card" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="avatar sm">MK</div>
          <div className="meta">
            <h3>Meet the founder</h3>
            <p>The person behind Markvt Krash.</p>
          </div>
          <div className="arrow">→</div>
        </Link>

        <h2>Get in touch</h2>
        <p>
          Partnerships, press, or ideas? Email{" "}
          <a href="mailto:support@markvtkrash.com">support@markvtkrash.com</a>.
        </p>
      </div>
    </main>
  );
}
