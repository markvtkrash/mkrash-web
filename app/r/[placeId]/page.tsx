import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

// A restaurant/dish share link opens here (user/src/utils/shareText.ts). Reads get_place_share_info
// (migration 154) server-side with a plain fetch -- no Supabase SDK, no NEXT_PUBLIC_ env vars, since this
// is server-only and this repo has no client-side Supabase use at all. Never a dead end: an unknown or
// unreachable place falls back to a short message instead of an error page.
//
// Themed to match the VektraVibe consumer app (page.module.css, self-contained to this folder), not the
// dark marketing site -- SiteChrome treats /r/ as a bare prefix so this page skips the site's own
// Header/Footer too.
interface PlaceShareInfo {
  name: string;
  address: string | null;
  cuisine_types: string[] | null;
}

async function fetchPlaceShareInfo(placeId: string): Promise<PlaceShareInfo | null> {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_ANON_KEY;
  if (!url || !key || !placeId) return null;
  try {
    const res = await fetch(`${url}/rest/v1/rpc/get_place_share_info`, {
      method: "POST",
      headers: { "Content-Type": "application/json", apikey: key, Authorization: `Bearer ${key}` },
      body: JSON.stringify({ p_place_id: placeId }),
      cache: "no-store",
    });
    if (!res.ok) return null;
    const rows = (await res.json()) as PlaceShareInfo[];
    return Array.isArray(rows) && rows.length > 0 ? rows[0] : null;
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ placeId: string }>;
}): Promise<Metadata> {
  const { placeId } = await params;
  const info = await fetchPlaceShareInfo(placeId);
  return {
    title: info?.name ?? "Restaurant",
    description: info ? `${info.name} on VektraVibe.` : "Find this restaurant's menu on VektraVibe.",
  };
}

export default async function PlaceSharePage({
  params,
}: {
  params: Promise<{ placeId: string }>;
}) {
  const { placeId } = await params;
  const info = await fetchPlaceShareInfo(placeId);

  if (!info) {
    return (
      <main className={styles.page}>
        <div className={styles.card}>
          <div className={styles.icon}>🔍</div>
          <h1 className={styles.fallbackTitle}>This link isn&apos;t available right now</h1>
          <p className={styles.fallbackText}>
            The restaurant you&apos;re looking for couldn&apos;t be found. It may have moved, or the link may be out of date.
          </p>
          <Link className={styles.cta} href="/products/vectra-vibe">
            Get VektraVibe
          </Link>
        </div>
      </main>
    );
  }

  const cuisines = (info.cuisine_types ?? []).filter(Boolean);

  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <div className={styles.badge}>On VektraVibe</div>
        <h1 className={styles.name}>{info.name}</h1>
        {!!info.address && <p className={styles.address}>{info.address}</p>}
        {cuisines.length > 0 && (
          <div className={styles.cuisineRow}>
            {cuisines.map((c) => (
              <span key={c} className={styles.cuisinePill}>
                {c}
              </span>
            ))}
          </div>
        )}
        <Link className={styles.cta} href="/products/vectra-vibe">
          Get VektraVibe
        </Link>
      </div>
    </main>
  );
}
