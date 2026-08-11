import { PanelGraphic, type PanelKind } from "./PanelGraphic";

export function ProductPage({
  eyebrow,
  name,
  lead,
  tagline,
  headline,
  description,
  features,
  ctaLabel,
  ctaHref,
  kind,
  color,
  image,
}: {
  eyebrow: string;
  name: string;
  lead: string;
  tagline: string;
  headline: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  kind: PanelKind;
  color: string;
  image?: string;
}) {
  return (
    <main>
      <div className="pagewrap">
        <div className="eyebrow">{eyebrow}</div>
        <h1>{name}</h1>
        <p className="lead">{lead}</p>
      </div>

      <section className="block">
        <div className="container">
          <div className="product">
            <div className="product-copy">
              <div className="tagline">{tagline}</div>
              <h2>{headline}</h2>
              <p>{description}</p>
              <ul className="feature-list">
                {features.map((f) => (
                  <li key={f}>
                    <span className="tick">✓</span> {f}
                  </li>
                ))}
              </ul>
              <div className="cta-row">
                <a className="btn btn-primary" href={ctaHref} target="_blank" rel="noopener noreferrer">
                  {ctaLabel}
                </a>
              </div>
            </div>

            <div className="product-visual">
              {image ? (
                <div className="product-screenshot-card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={image} alt={`${name} screenshot`} />
                </div>
              ) : (
                <div className="product-graphic-card" style={{ ["--accent" as string]: color }}>
                  <PanelGraphic kind={kind} color={color} />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
