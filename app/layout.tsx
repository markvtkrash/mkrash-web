import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://markvtkrash.com"),
  title: {
    default: "Markvt Krash — Frontier Technology Company",
    template: "%s — Markvt Krash",
  },
  description:
    "Markvt Krash is a frontier technology company building intelligent systems across AI, physical AI, IoT, robotics, and nano AI. Maker of PikMe.",
  openGraph: {
    title: "Markvt Krash — Frontier Technology Company",
    description:
      "Building intelligent systems across AI, physical AI, IoT, robotics, and nano AI. Maker of PikMe.",
    type: "website",
  },
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
