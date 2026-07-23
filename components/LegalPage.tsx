import { LegalNav } from "./LegalNav";

export function LegalPage({
  title,
  effective,
  pill = "Legal",
  children,
}: {
  title: string;
  effective?: string;
  pill?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="legal-wrap">
      <LegalNav />
      <article className="legal-card">
        <span className="pill">{pill}</span>
        <h1>{title}</h1>
        {effective && <div className="eff">{effective}</div>}
        {children}
      </article>
    </div>
  );
}
