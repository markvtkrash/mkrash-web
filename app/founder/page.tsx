import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Founder",
  description: "Meet the founder of Markvt Krash LLC.",
};

const FOUNDER = {
  name: "Vikram Vallurupalli",
  role: "Founder & CEO",
  initials: "VV", // shown until you add a photo
  // To use a photo instead of initials: add /public/founder.jpg and set photo: "/founder.jpg"
  photo: "" as string,
  bio: [
    "Vikram Vallurupalli is the Founder and Chief Executive Officer of Markvt Krash, a frontier technology company building intelligent systems across AI, physical AI, IoT, robotics, and nano AI. He founded the company at 16 to put advanced intelligence into everyday products — starting with PikMe, an AI app that answers a question everyone faces every day: what should I eat?",
    "As CEO, Vikram sets the company's technical vision and leads its products from concept to launch, drawing on research-based methodology. As a  researcher focusing on hands-on machine learning research—spanning neuromuscular kinematic modeling to  drug optimization—medalist in the Science Olympiad National Tournament, state-winning DECA competitor, customer service expert, and active youth advocate in his local community through the Overland Park Teen Council, he pairs technical depth with the instincts to turn ambitious ideas into products people rely on.",
  ],
  email: "support@markvtkrash.com",
  // Optional — remove any you don't want to show:
  links: [
    { label: "Email", href: "mailto:support@markvtkrash.com" },
    // { label: "GitHub", href: "https://github.com/..." },
    // { label: "LinkedIn", href: "https://linkedin.com/in/..." },
  ],
};

export default function Founder() {
  return (
    <main className="pagewrap">
      <div className="eyebrow">Founder</div>
      <h1>{FOUNDER.name}</h1>
      <p className="lead">{FOUNDER.role}, Markvt Krash LLC</p>

      <div className="profile">
        {FOUNDER.photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={FOUNDER.photo}
            alt={FOUNDER.name}
            className="avatar lg"
            style={{ objectFit: "cover" }}
          />
        ) : (
          <div className="avatar lg">{FOUNDER.initials}</div>
        )}
        <div className="bio prose" style={{ marginTop: 0 }}>
          {FOUNDER.bio.map((para, i) => (
            <p key={i} style={i === 0 ? { marginTop: 0 } : undefined}>
              {para}
            </p>
          ))}
          <div className="socials">
            {FOUNDER.links.map((l) => (
              <a key={l.label} href={l.href}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
