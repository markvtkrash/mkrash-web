import { LegalNav } from "./LegalNav";

export function LegalPage({
  title,
  effective,
  pill = "Legal",
  bare = false,
  children,
}: {
  title: string;
  effective?: string;
  pill?: string;
  bare?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={`legal-wrap${bare ? " legal-wrap-bare" : ""}`}>
      {!bare && <LegalNav />}
      <article className="legal-card">
        <span className="pill">{pill}</span>
        <h1>{title}</h1>
        {effective && <div className="eff">{effective}</div>}
        {children}
      </article>
    </div>
  );
}
