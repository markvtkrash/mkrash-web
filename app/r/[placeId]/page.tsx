import type { Metadata } from "next";
import Link from "next/link";

// A restaurant/dish share link opens here (user/src/utils/shareText.ts). Reads get_place_share_info
// (migration 154) server-side with a plain fetch -- no Supabase SDK, no NEXT_PUBLIC_ env vars, since this
// is server-only and this repo has no client-side Supabase use at all. Never a dead end: an unknown or
// unreachable place falls back to a short message instead of an error page.
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
    description: info ? `${info.name} on Vectra Vibe.` : "Find this restaurant's menu on Vectra Vibe.",
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
      <main className="pagewrap">
        <div className="eyebrow">Vectra Vibe</div>
        <h1>This link isn&apos;t available right now</h1>
        <p className="lead">
          The restaurant you&apos;re looking for couldn&apos;t be found. It may have moved, or the link may be out of date.
        </p>
        <div className="cta-row">
          <Link className="btn btn-primary" href="/products/vectra-vibe">
            Get Vectra Vibe
          </Link>
        </div>
      </main>
    );
  }

  const cuisine = (info.cuisine_types ?? []).filter(Boolean).join(", ");
  const details = [info.address, cuisine].filter(Boolean).join(" · ");

  return (
    <main className="pagewrap">
      <div className="eyebrow">On Vectra Vibe</div>
      <h1>{info.name}</h1>
      <p className="lead">{details || "See this restaurant's menu, matched to your diet and health goals."}</p>
      <div className="cta-row">
        <Link className="btn btn-primary" href="/products/vectra-vibe">
          Get Vectra Vibe
        </Link>
      </div>
    </main>
  );
}
