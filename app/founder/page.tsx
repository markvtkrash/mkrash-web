import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Founder",
  description: "Meet the founder of Markvt Krash LLC.",
};

// TODO: replace the placeholders below with real details.
const FOUNDER = {
  name: "[Vik]",
  role: "Founder & Developer",
  initials: "MK", // shown until you add a photo
  // To use a photo instead of initials: add /public/founder.jpg and set photo: "/founder.jpg"
  photo: "" as string,
  bio: [
    "[Founder Name] founded Markvt Krash to build mobile apps that are personal, fast, and genuinely useful. The studio's first product, PikMe, grew out of a simple question everyone faces every day: what should I eat?",
    "From design to code to launch, every part of Markvt Krash's products is built with care and a focus on the details that make software feel effortless.",
  ],
  email: "hello@markvtkrash.com",
  // Optional — remove any you don't want to show:
  links: [
    { label: "Email", href: "mailto:hello@markvtkrash.com" },
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
