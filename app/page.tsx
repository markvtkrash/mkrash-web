import Link from "next/link";
import { Hero } from "@/components/Hero";
import { PanelGraphic, type PanelKind } from "@/components/PanelGraphic";
import { ParticleField } from "@/components/ParticleField";
import { ProductsDashboard } from "@/components/ProductsDashboard";

type Panel = {
  id: string;
  kind: PanelKind;
  color: string;
  eyebrow?: string;
  title: string;
  subtitle: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
  bg?: "particles" | "none";
  // Real media drop-ins (take priority over the generated graphics):
  //   image — a photo, e.g. "/tech/pikme.jpg"
  //   video — looping footage, e.g. "/tech/hero.mp4"  (put files in /public/tech)
  image?: string;
  video?: string;
};

const contact: Panel = {
  id: "contact",
  kind: "iot",
  color: "#ffffff",
  bg: "none",
  eyebrow: "Contact",
  title: "Let's build something.",
  subtitle: "Have an idea, a partnership, or just want to say hi? We read every message.",
  primary: { label: "support@markvtkrash.com", href: "mailto:support@markvtkrash.com" },
  secondary: { label: "About the Company", href: "/about" },
};

function Slide({ p }: { p: Panel }) {
  return (
    <section id={p.id} className="panel" style={{ ["--accent" as string]: p.color }}>
      <div className={`panel-bg${p.bg === "particles" ? " neon-shift" : ""}${p.bg === "none" ? " flat" : ""}`}>
        {p.video ? (
          <video className="panel-video" autoPlay muted loop playsInline preload="auto">
            <source src={p.video} />
          </video>
        ) : p.image ? (
          <div className="panel-photo" style={{ backgroundImage: `url(${p.image})` }} />
        ) : p.bg === "particles" ? (
          <ParticleField color={p.color} className="particle-field" />
        ) : p.bg === "none" ? null : (
          <PanelGraphic kind={p.kind} color={p.color} />
        )}
      </div>
      <div className="panel-scrim" />

      <div className="panel-content container">
        <div className="panel-top">
          {p.eyebrow && (
            <div className={`panel-eyebrow${p.bg === "particles" ? " neon-shift" : ""}`}>{p.eyebrow}</div>
          )}
          <h2 className="panel-title">{p.title}</h2>
          <p className="panel-sub">{p.subtitle}</p>
        </div>
        <div className="panel-cta">
          <Link className="btn btn-white" href={p.primary.href}>
            {p.primary.label}
          </Link>
          <Link className="btn btn-glass" href={p.secondary.href}>
            {p.secondary.label}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="panels">
      <Hero />
      <ProductsDashboard />
      <Slide p={contact} />
    </main>
  );
}
