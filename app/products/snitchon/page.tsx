import type { Metadata } from "next";
import { ProductPage } from "@/components/ProductPage";

export const metadata: Metadata = {
  title: "SnitchOn",
  description: "SnitchOn — community-based database to advance media misinformation detection",
};

export default function SnitchOn() {
  return (
    <ProductPage
      eyebrow="Live Product · Web"
      name="SnitchOn"
      lead="Advanced community database that flags misinformation as it spreads."
      tagline="SnitchOn — Advanced Algorithmic AI"
      headline="Catch fake news before it catches on."
      description="SnitchOn is an online community database that leverages AI to detect and flag misinformation as it spreads, helping people separate fact from fake news."
      features={[
        "Real-time misinformation detection",
        "Advanced algorithmic AI analysis",
        "Helps communities verify what's true",
        "Flags fake news as it spreads",
      ]}
      ctaLabel="Visit SnitchOn"
      ctaHref="https://www.snitchon.org"
      kind="ai"
      color="#818cf8"
      image="/screenshots/snitchon.png"
    />
  );
}
