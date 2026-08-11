import type { Metadata } from "next";
import { ProductPage } from "@/components/ProductPage";

export const metadata: Metadata = {
  title: "ZingerFi",
  description: "ZingerFi — secure AI encryption that protects sensitive data in real time.",
};

export default function ZingerFi() {
  return (
    <ProductPage
      eyebrow="Live Product · Web"
      name="ZingerFi"
      lead="Secure AI encryption platform that protects sensitive data that cannot be decrypted by third parties."
      tagline="ZingerFi — Secure AI Encryption System"
      headline="Encryption that thinks as fast as your data moves."
      description="ZingerFi applies AI-driven encryption to keep sensitive data protected in real timethat cannot be decrypted by third parties."
      features={[
        "Real-time, AI-driven encryption",
        "Built for fast-moving systems",
        "Impossible to decrypt",
        "Continuous protection for sensitive data",
      ]}
      ctaLabel="Visit ZingerFi"
      ctaHref="https://zingerfi.com"
      kind="ai"
      color="#22d3ee"
      image="/screenshots/zingerfi.png"
    />
  );
}
