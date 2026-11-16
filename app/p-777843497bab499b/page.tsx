import type { Metadata } from "next";

// An unlisted page: not linked from anywhere, not in a sitemap, and asks search engines not to index it or follow its links.
export const metadata: Metadata = {
  title: "Vikram Vallurupalli",
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false, noimageindex: true } },
};

export default function Page() {
  return (
    <main className="pagewrap">
      <h1>Vikram Vallurupalli</h1>
    </main>
  );
}
