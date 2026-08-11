// Animated engineering/circuit motif for the "What We Do" section: a central
// chip with radial pins, a subset extending into longer pulsing traces, and
// two slowly counter-rotating orbit rings. Distinct from the PanelGraphic
// set (which represent specific tech domains) — this one reads as general
// "engineering" rather than any single domain.
export function EngineeringGraphic({ color = "#34d17b" }: { color?: string }) {
  const CX = 400;
  const CY = 400;
  const N = 16;
  const angles = Array.from({ length: N }, (_, i) => (i / N) * Math.PI * 2);
  const innerR = 78;
  const padR = 118;
  const outerR = 250;

  return (
    <svg className="eg-graphic" viewBox="0 0 800 800" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <g stroke={color} fill="none" strokeWidth="1" opacity="0.08">
        {[170, 260, 340].map((r) => (
          <circle key={r} cx={CX} cy={CY} r={r} />
        ))}
      </g>

      <g className="eg-orbit eg-orbit-a" stroke={color} fill="none" strokeWidth="1.2" strokeDasharray="2 10" opacity="0.4">
        <circle cx={CX} cy={CY} r="300" />
        <circle cx={CX + 300} cy={CY} r="5" fill={color} stroke="none" />
      </g>
      <g className="eg-orbit eg-orbit-b" stroke={color} fill="none" strokeWidth="1" strokeDasharray="1 8" opacity="0.32">
        <circle cx={CX} cy={CY} r="355" />
        <circle cx={CX - 355} cy={CY} r="4" fill={color} stroke="none" />
      </g>

      <g stroke={color} fill="none">
        {angles.map((a, i) => {
          const x1 = CX + Math.cos(a) * innerR;
          const y1 = CY + Math.sin(a) * innerR;
          const x2 = CX + Math.cos(a) * padR;
          const y2 = CY + Math.sin(a) * padR;
          const extended = i % 3 === 0;
          const x3 = CX + Math.cos(a) * outerR;
          const y3 = CY + Math.sin(a) * outerR;
          return (
            <g key={i}>
              <line x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="1.4" opacity="0.5" />
              <circle cx={x2} cy={y2} r="3.5" fill={color} stroke="none" opacity="0.8" />
              {extended && (
                <>
                  <line
                    className="eg-trace"
                    x1={x2}
                    y1={y2}
                    x2={x3}
                    y2={y3}
                    strokeWidth="1.2"
                    strokeDasharray="4 8"
                    opacity="0.45"
                  />
                  <circle
                    className="eg-node"
                    cx={x3}
                    cy={y3}
                    r="6"
                    fill={color}
                    stroke="none"
                    opacity="0.9"
                    style={{ animationDelay: `${i * 0.25}s` }}
                  />
                </>
              )}
            </g>
          );
        })}
      </g>

      <g>
        <rect x={CX - 46} y={CY - 46} width="92" height="92" rx="16" fill="none" stroke={color} strokeWidth="1.6" opacity="0.85" />
        <rect className="eg-core" x={CX - 20} y={CY - 20} width="40" height="40" rx="8" fill={color} opacity="0.22" />
      </g>
    </svg>
  );
}
