// Add future products here and they'll appear automatically in the
// homepage dashboard — "live" products get their own page at
// /products/{slug}; "coming-soon" ones show in the Coming Soon section.

import type { PanelKind } from "@/components/PanelGraphic";

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: "live" | "coming-soon";
  kind: PanelKind;
  color: string;
  platform?: string;
  url?: string; // primary external link — App Store URL, or the product's website
  logo?: string; // path to a real logo image in /public, e.g. "/logos/zingerfi.png"
  image?: string; // real screenshot/photo to use as the card banner instead of the generated graphic
};

export const products: Product[] = [
  {
    slug: "pikme",
    name: "PikMe",
    tagline: "Find meals made for you",
    description:
      "Personalized food & restaurant recommendations, powered by AI. Available on iOS.",
    status: "live",
    kind: "ai",
    color: "#34d17b",
    platform: "iOS",
    url: "#", // TODO: replace with the real App Store URL once live
    image: "/screenshots/pikme.png",
  },
  {
    slug: "zingerfi",
    name: "ZingerFi",
    tagline: "Secure AI encryption",
    description:
      "ZingerFi applies AI-driven encryption to keep sensitive data protected in real time, without slowing your team down.",
    status: "live",
    kind: "ai",
    color: "#22d3ee",
    platform: "Web",
    url: "https://zingerfi.com",
    logo: "/logos/zingerfi.png",
    image: "/screenshots/zingerfi.png",
  },
  {
    slug: "snitchon",
    name: "SnitchOn",
    tagline: "Advanced algorithmic AI",
    description:
      "SnitchOn uses advanced algorithmic AI to detect and flag misinformation as it spreads, helping people separate fact from fake news.",
    status: "live",
    kind: "ai",
    color: "#818cf8",
    platform: "Web",
    url: "https://www.snitchon.org",
    image: "/screenshots/snitchon.png",
  },
  {
    slug: "physical-ai",
    name: "Physical AI",
    tagline: "Coming soon",
    description: "Intelligence that perceives and acts in the real world — where software meets hardware.",
    status: "coming-soon",
    kind: "physical",
    color: "#5aa2ff",
  },
  {
    slug: "iot",
    name: "IoT Platform",
    tagline: "Coming soon",
    description: "Connected devices and sensor networks that bring the physical world online.",
    status: "coming-soon",
    kind: "iot",
    color: "#2fd6c6",
  },
  {
    slug: "robotics",
    name: "Robotics",
    tagline: "Coming soon",
    description: "Autonomous systems that move, sense, and interact with their environment.",
    status: "coming-soon",
    kind: "robotics",
    color: "#ff8a4a",
  },
  {
    slug: "nano-ai",
    name: "Nano AI",
    tagline: "Coming soon",
    description: "Intelligence at the smallest scale — compact, efficient models and nano-scale systems.",
    status: "coming-soon",
    kind: "nano",
    color: "#b98cff",
  },
];
