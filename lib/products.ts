// Add future products here (e.g. an entertainment app) and they'll appear
// automatically in the "What we're building" grid on the homepage.

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: "live" | "coming-soon";
  platform?: string;
  appStoreUrl?: string;
};

export const products: Product[] = [
  {
    slug: "pikme",
    name: "PikMe",
    tagline: "Find meals made for you",
    description:
      "Personalized food & restaurant recommendations, powered by AI. Available on iOS.",
    status: "live",
    platform: "iOS",
    appStoreUrl: "#", // TODO: replace with the real App Store URL once live
  },
  // Example of a future vertical — flip status to "live" when ready:
  {
    slug: "entertainment",
    name: "Entertainment (in the works)",
    tagline: "Coming soon",
    description: "A new entertainment product from the Markvt Krash studio.",
    status: "coming-soon",
  },
];
