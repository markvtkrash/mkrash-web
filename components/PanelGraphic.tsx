// Abstract, dark-scheme vector backgrounds — one distinct motif per technology.
// Rendered full-bleed behind each homepage panel. Decorative only.
// Drop a real photo at /public/tech/<id>.jpg to override (see page.tsx).

export type PanelKind = "ai" | "physical" | "iot" | "robotics" | "nano";

const W = 1440;
const H = 900;

export function PanelGraphic({ kind, color }: { kind: PanelKind; color: string }) {
  return (
    <svg
      className={`panel-graphic pg-${kind}`}
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {kind === "ai" && <NeuralNet color={color} />}
      {kind === "physical" && <PerspectiveGrid color={color} />}
      {kind === "iot" && <MeshNetwork color={color} />}
      {kind === "robotics" && <Radar color={color} />}
      {kind === "nano" && <HexLattice color={color} />}
    </svg>
  );
}

/* ---- Artificial Intelligence: layered neural network ---- */
function NeuralNet({ color }: { color: string }) {
  const cols = [
    { x: 380, ys: [300, 450, 600] },
    { x: 640, ys: [220, 380, 540, 700] },
    { x: 900, ys: [220, 380, 540, 700] },
    { x: 1160, ys: [300, 450, 600] },
  ];
  const edges: [number, number, number, number][] = [];
  for (let i = 0; i < cols.length - 1; i++) {
    for (const a of cols[i].ys) for (const b of cols[i + 1].ys) edges.push([cols[i].x, a, cols[i + 1].x, b]);
  }
  return (
    <g fill="none" stroke={color}>
      <g className="pg-edges" strokeWidth="1.4" opacity="0.32">
        {edges.map((e, i) => (
          <line key={i} x1={e[0]} y1={e[1]} x2={e[2]} y2={e[3]} />
        ))}
      </g>
      {cols.map((c) =>
        c.ys.map((y) => (
          <circle className="pg-node" key={`${c.x}-${y}`} cx={c.x} cy={y} r="9" fill={color} stroke="none" opacity="0.9" />
        ))
      )}
    </g>
  );
}

/* ---- Physical AI: perspective floor grid ---- */
function PerspectiveGrid({ color }: { color: string }) {
  const vpX = W / 2;
  const vpY = 340;
  const verticals = Array.from({ length: 21 }, (_, i) => (i / 20) * W);
  const horizons = Array.from({ length: 14 }, (_, i) => vpY + Math.pow(i / 13, 2.2) * (H - vpY));
  return (
    <g stroke={color} fill="none" strokeWidth="1.2">
      <g opacity="0.35">
        {verticals.map((x, i) => (
          <line key={i} x1={vpX} y1={vpY} x2={x} y2={H} />
        ))}
      </g>
      <g className="pg-forward" opacity="0.3">
        {horizons.map((y, i) => (
          <line key={i} x1="0" y1={y} x2={W} y2={y} />
        ))}
      </g>
    </g>
  );
}

/* ---- IoT: connected device mesh ---- */
function MeshNetwork({ color }: { color: string }) {
  const nodes = [
    [180, 250], [360, 480], [520, 220], [700, 400], [640, 660],
    [900, 300], [880, 560], [1080, 460], [1240, 260], [1180, 680], [1320, 500],
  ];
  const links = [
    [0, 1], [0, 2], [1, 2], [1, 3], [1, 4], [2, 3], [3, 4], [3, 5],
    [4, 6], [5, 6], [5, 7], [6, 7], [5, 8], [7, 10], [8, 10], [9, 10], [7, 9],
  ];
  return (
    <g stroke={color}>
      <g strokeWidth="1.2" opacity="0.3">
        {links.map(([a, b], i) => (
          <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} />
        ))}
      </g>
      {nodes.map(([x, y], i) => (
        <g key={i}>
          <circle className="pg-ring" cx={x} cy={y} r="26" fill="none" strokeWidth="1" opacity="0.25" style={{ animationDelay: `${(i % 5) * 0.6}s` }} />
          <circle cx={x} cy={y} r="8" fill={color} stroke="none" opacity="0.9" />
        </g>
      ))}
    </g>
  );
}

/* ---- Robotics: radar / sensor sweep ---- */
function Radar({ color }: { color: string }) {
  const cx = W / 2;
  const cy = H / 2;
  const rings = [120, 220, 320, 420, 520];
  const spokes = Array.from({ length: 16 }, (_, i) => (i / 16) * Math.PI * 2);
  return (
    <g stroke={color} fill="none">
      <g strokeWidth="1.2" opacity="0.28">
        {rings.map((r, i) => (
          <circle key={i} cx={cx} cy={cy} r={r} />
        ))}
      </g>
      <g className="pg-rotate" strokeWidth="1" opacity="0.2">
        {spokes.map((a, i) => (
          <line key={i} x1={cx} y1={cy} x2={cx + Math.cos(a) * 560} y2={cy + Math.sin(a) * 560} />
        ))}
      </g>
      <g className="pg-sweep">
        <path d={`M ${cx} ${cy} L ${cx + 560} ${cy} A 560 560 0 0 1 ${cx + 560 * Math.cos(0.5)} ${cy + 560 * Math.sin(0.5)} Z`} fill={color} opacity="0.12" stroke="none" />
      </g>
      <circle cx={cx} cy={cy} r="10" fill={color} stroke="none" opacity="0.9" />
    </g>
  );
}

/* ---- Nano AI: hexagonal lattice ---- */
function HexLattice({ color }: { color: string }) {
  const r = 46;
  const hw = Math.sqrt(3) * r; // horizontal spacing
  const vh = 1.5 * r; // vertical spacing
  const hexes: string[] = [];
  for (let row = -1; row * vh < H + r; row++) {
    for (let col = -1; col * hw < W + hw; col++) {
      const cx = col * hw + (row % 2 ? hw / 2 : 0);
      const cy = row * vh;
      const pts = Array.from({ length: 6 }, (_, i) => {
        const a = (Math.PI / 180) * (60 * i - 30);
        return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`;
      }).join(" ");
      hexes.push(pts);
    }
  }
  return (
    <g className="pg-hexes" stroke={color} fill="none" strokeWidth="1" opacity="0.22">
      {hexes.map((pts, i) => (
        <polygon className="pg-hex" key={i} points={pts} style={{ animationDelay: `${(i % 7) * 0.35}s` }} />
      ))}
    </g>
  );
}
