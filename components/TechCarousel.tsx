"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { PanelGraphic, type PanelKind } from "./PanelGraphic";

type Stage = {
  id: string;
  kind: PanelKind;
  color: string;
  eyebrow: string;
  title: string;
  subtitle: string;
};

const stages: Stage[] = [
  {
    id: "ai",
    kind: "ai",
    color: "#34d17b",
    eyebrow: "01 — Artificial Intelligence",
    title: "Artificial Intelligence",
    subtitle: "Foundation and applied models that personalize decisions and automate the everyday.",
  },
  {
    id: "physical",
    kind: "physical",
    color: "#5aa2ff",
    eyebrow: "02 — Physical AI",
    title: "Physical AI",
    subtitle: "Intelligence that perceives and acts in the real world — where software meets hardware.",
  },
  {
    id: "iot",
    kind: "iot",
    color: "#2fd6c6",
    eyebrow: "03 — Internet of Things",
    title: "Internet of Things",
    subtitle: "Connected devices and sensor networks that bring the physical world online.",
  },
  {
    id: "robotics",
    kind: "robotics",
    color: "#ff8a4a",
    eyebrow: "04 — Robotics",
    title: "Robotics",
    subtitle: "Autonomous systems that move, sense, and interact with their environment.",
  },
  {
    id: "nano",
    kind: "nano",
    color: "#b98cff",
    eyebrow: "05 — Nano AI",
    title: "Nano AI",
    subtitle: "Intelligence at the smallest scale — compact, efficient models and nano-scale systems.",
  },
];

export function TechCarousel() {
  const wrapRef = useRef<HTMLElement>(null);
  // progress runs 0 .. stages.length-1 as the user scrolls through the section
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = Math.max(el.offsetHeight - window.innerHeight, 1);
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      setProgress((scrolled / total) * (stages.length - 1));
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const active = Math.round(progress);

  return (
    <section
      id="tech"
      className="tech-carousel"
      ref={wrapRef}
      style={{ height: `${stages.length * 100}vh` }}
    >
      <div className="tech-sticky" style={{ ["--accent" as string]: stages[active].color }}>
        {/* Morphing graphics — each layer fades/scales/rotates by its distance from active */}
        <div className="tech-graphics">
          {stages.map((s, i) => {
            const d = i - progress;
            const style: React.CSSProperties = {
              opacity: Math.max(0, 1 - Math.abs(d)),
              transform: `scale(${1 + d * 0.14}) rotate(${d * 10}deg)`,
              filter: `blur(${Math.min(Math.abs(d) * 7, 14)}px)`,
            };
            return (
              <div className="tech-graphic-layer" style={style} key={s.id}>
                <PanelGraphic kind={s.kind} color={s.color} />
              </div>
            );
          })}
          <div className="tech-glow" />
        </div>
        <div className="tech-scrim" />

        <div className="tech-content container">
          <div className="tech-top">
            {stages.map((s, i) => {
              const style: React.CSSProperties = {
                opacity: Math.max(0, 1 - Math.abs(i - progress) * 1.7),
                ["--accent" as string]: s.color,
              };
              return (
                <div className="tech-text" style={style} key={s.id} aria-hidden={active !== i}>
                  <div className="panel-eyebrow">{s.eyebrow}</div>
                  <h2 className="panel-title">{s.title}</h2>
                  <p className="panel-sub">{s.subtitle}</p>
                </div>
              );
            })}
          </div>

          <div className="tech-bottom">
            <div className="tech-progress" role="presentation">
              {stages.map((s, i) => (
                <span className={`tech-dot ${active === i ? "on" : ""}`} key={s.id} />
              ))}
            </div>
            <div className="panel-cta">
              <Link className="btn btn-white" href="/about">
                Learn More
              </Link>
              <Link className="btn btn-glass" href="#contact">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
