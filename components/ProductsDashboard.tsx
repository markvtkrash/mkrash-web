import Link from "next/link";
import { PanelGraphic } from "./PanelGraphic";
import { PikMeIcon } from "./PikMeIcon";
import { products, type Product } from "@/lib/products";

function CardGraphic({ p }: { p: Product }) {
  return (
    <div className="dash-banner">
      {p.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={p.image} alt={`${p.name} preview`} className="dash-banner-image" />
      ) : (
        <PanelGraphic kind={p.kind} color={p.color} />
      )}
      <div className="dash-banner-scrim" />
      <div className="dash-logo">
        {p.slug === "pikme" ? (
          <PikMeIcon className="dash-logo-icon" id={`dash-${p.slug}`} />
        ) : p.logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={p.logo} alt={`${p.name} logo`} className="dash-logo-image" />
        ) : (
          <span className="dash-logo-mono" style={{ background: p.color }}>
            {p.name.charAt(0)}
          </span>
        )}
      </div>
    </div>
  );
}

function LiveCard({ p }: { p: Product }) {
  return (
    <Link href={`/products/${p.slug}`} className="dash-card live" style={{ ["--accent" as string]: p.color }}>
      <CardGraphic p={p} />
      <div className="dash-body">
        <span className="live-pill">
          <span className="badge-dot" /> Live on {p.platform ?? "iOS"}
        </span>
        <h3>{p.name}</h3>
        <p className="dash-tagline">{p.tagline}</p>
        <p>{p.description}</p>
        <span className="dash-link">View product →</span>
      </div>
    </Link>
  );
}

function SoonCard({ p }: { p: Product }) {
  return (
    <div className="dash-card soon" style={{ ["--accent" as string]: p.color }}>
      <CardGraphic p={p} />
      <div className="dash-body">
        <span className="coming-soon-badge">
          <span className="coming-soon-dot" /> Coming Soon
        </span>
        <h3>{p.name}</h3>
        <p>{p.description}</p>
      </div>
    </div>
  );
}

export function ProductsDashboard() {
  const live = products.filter((p) => p.status === "live");
  const soon = products.filter((p) => p.status === "coming-soon");

  return (
    <>
      <section id="products" className="dash-section">
        <div className="container">
          <div className="dash-head">
            <div className="panel-eyebrow">Products</div>
            <h2 className="about-title">What&apos;s live today.</h2>
          </div>
          <div className="dash-grid">
            {live.map((p) => (
              <LiveCard p={p} key={p.slug} />
            ))}
          </div>
        </div>
      </section>

      <section id="coming-soon" className="dash-section dash-section-soon">
        <div className="container">
          <div className="dash-head">
            <div className="panel-eyebrow" style={{ ["--accent" as string]: "#ffb545" }}>
              Coming Soon
            </div>
            <h2 className="about-title">What we&apos;re building next.</h2>
          </div>
          <div className="dash-grid">
            {soon.map((p) => (
              <SoonCard p={p} key={p.slug} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
