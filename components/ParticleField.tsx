"use client";

import { useEffect, useRef } from "react";

// A genuinely animated "general technology" background: particles drift and
// connect in real time on a canvas. Distinct from the structured AI neural net.
// Respects prefers-reduced-motion (renders a single static frame, no loop).
export function ParticleField({
  color = "#34d17b",
  className,
}: {
  color?: string;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !parent || !ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rgb = hexToRgb(color);
    const LINK = 140;

    let w = 0;
    let h = 0;
    let raf = 0;
    let particles: { x: number; y: number; vx: number; vy: number }[] = [];

    const resize = () => {
      w = parent.clientWidth;
      h = parent.clientHeight;
      if (w === 0 || h === 0) return;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(Math.max(Math.round((w * h) / 15000), 30), 150);
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
      }));
    };

    const render = () => {
      ctx.clearRect(0, 0, w, h);

      if (!reduce) {
        for (const p of particles) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > w) p.vx *= -1;
          if (p.y < 0 || p.y > h) p.vy *= -1;
        }
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < LINK) {
            ctx.strokeStyle = `rgba(${rgb},${(1 - dist / LINK) * 0.45})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      ctx.fillStyle = `rgba(${rgb},0.9)`;
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.8, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = () => {
      render();
      raf = requestAnimationFrame(loop);
    };

    resize();
    if (reduce) render();
    else loop();

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [color]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}

function hexToRgb(hex: string): string {
  const n = parseInt(hex.replace("#", ""), 16);
  return `${(n >> 16) & 255},${(n >> 8) & 255},${n & 255}`;
}
