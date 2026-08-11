"use client";

import { useEffect, useState } from "react";

// Auto-rotating carousel of real 3D-rendered technology footage (licensed,
// royalty-free, no attribution required — see /public/tech/SOURCES.md),
// crossfading between domains beneath the hero title.
const scenes = [
  { id: "ai", label: "AI-powered recommendations", color: "#34d17b", video: "/tech/ai.mp4" },
  { id: "physical", label: "Physical AI in motion", color: "#5aa2ff", video: "/tech/physical.mp4" },
  { id: "iot", label: "Connected IoT devices", color: "#2fd6c6", video: "/tech/iot.mp4" },
  { id: "robotics", label: "Autonomous robotics", color: "#ff8a4a", video: "/tech/robotics.mp4" },
  { id: "nano", label: "Nano-scale intelligence", color: "#b98cff", video: "/tech/nano.mp4" },
];

export function HeroShowcase() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setActive((a) => (a + 1) % scenes.length), 1200);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <div
      className="hero-showcase"
      style={{ ["--accent" as string]: scenes[active].color }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="hero-showcase-frame">
        {scenes.map(({ id, video }, i) => (
          <div
            key={id}
            className="hero-scene"
            aria-hidden={i !== active}
            style={{
              opacity: i === active ? 1 : 0,
              transform: `scale(${i === active ? 1 : 1.04})`,
              filter: i === active ? "blur(0px)" : "blur(8px)",
            }}
          >
            <video className="hero-scene-video" src={video} autoPlay muted loop playsInline preload="auto" />
          </div>
        ))}
        <div className="hero-showcase-vignette" />
      </div>

      <div className="hero-showcase-meta">
        <span className="hero-scene-label">{scenes[active].label}</span>
        <div className="hero-scene-dots">
          {scenes.map((s, i) => (
            <button
              key={s.id}
              type="button"
              className={`hero-scene-dot ${i === active ? "on" : ""}`}
              aria-label={`Show ${s.label}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
