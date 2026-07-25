import Link from "next/link";
import { PikMeIcon } from "@/components/PikMeIcon";
import { PanelGraphic, type PanelKind } from "@/components/PanelGraphic";
import { ParticleField } from "@/components/ParticleField";
import { TechCarousel } from "@/components/TechCarousel";

type Panel = {
  id: string;
  kind: PanelKind;
  color: string;
  eyebrow?: string;
  title: string;
  subtitle: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
  logo?: "pikme";
  bg?: "particles";
  // Real media drop-ins (take priority over the generated graphics):
  //   image — a photo, e.g. "/tech/pikme.jpg"
  //   video — looping footage, e.g. "/tech/hero.mp4"  (put files in /public/tech)
  image?: string;
  video?: string;
};

const hero: Panel = {
  id: "top",
  kind: "iot",
  color: "#34d17b",
  bg: "particles",
  eyebrow: "Frontier Technology Company",
  title: "Markvt Krash",
  subtitle: "Building the intelligent systems of the future.",
  primary: { label: "Explore", href: "#tech" },
  secondary: { label: "Meet PikMe", href: "#pikme" },
};

const pikme: Panel = {
  id: "pikme",
  kind: "ai",
  color: "#34d17b",
  logo: "pikme",
  eyebrow: "Flagship Product · Live on iOS",
  title: "PikMe",
  subtitle:
    "Nearby restaurants and the exact dishes worth ordering — matched to your diet, goals, and allergens, powered by AI.",
  primary: { label: "Download on iOS", href: "#" },
  secondary: { label: "Learn More", href: "#contact" },
};

const contact: Panel = {
  id: "contact",
  kind: "iot",
  color: "#34d17b",
  bg: "particles",
  eyebrow: "Contact",
  title: "Let's build something.",
  subtitle: "Have an idea, a partnership, or just want to say hi? We read every message.",
  primary: { label: "support@markvtkrash.com", href: "mailto:support@markvtkrash.com" },
  secondary: { label: "About the Company", href: "/about" },
};

function Slide({ p }: { p: Panel }) {
  return (
    <section id={p.id} className="panel" style={{ ["--accent" as string]: p.color }}>
      <div className="panel-bg">
        {p.video ? (
          <video className="panel-video" autoPlay muted loop playsInline preload="auto">
            <source src={p.video} />
          </video>
        ) : p.image ? (
          <div className="panel-photo" style={{ backgroundImage: `url(${p.image})` }} />
        ) : p.bg === "particles" ? (
          <ParticleField color={p.color} className="particle-field" />
        ) : (
          <PanelGraphic kind={p.kind} color={p.color} />
        )}
        {p.logo === "pikme" && (
          <div className="panel-logo">
            <PikMeIcon className="panel-app-icon" id={`panel-${p.id}`} />
          </div>
        )}
      </div>
      <div className="panel-scrim" />

      <div className="panel-content container">
        <div className="panel-top">
          {p.eyebrow && <div className="panel-eyebrow">{p.eyebrow}</div>}
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
      <Slide p={hero} />
      <TechCarousel />
      <Slide p={pikme} />
      <Slide p={contact} />
    </main>
  );
}
