export function PikMeIcon({ className, id = "pm" }: { className?: string; id?: string }) {
  return (
    <svg className={className} viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" aria-label="PikMe">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2e7d32" />
          <stop offset="100%" stopColor="#1b4d1b" />
        </linearGradient>
      </defs>
      <rect width="192" height="192" rx="48" fill={`url(#${id})`} />
      <g transform="translate(50,45)">
        <rect x="44" y="65" width="8" height="70" fill="#fff" rx="4" />
        <rect x="18" y="0" width="6" height="65" fill="#fff" rx="3" />
        <rect x="44" y="0" width="6" height="65" fill="#fff" rx="3" />
        <rect x="70" y="0" width="6" height="65" fill="#fff" rx="3" />
      </g>
      <path
        transform="translate(115,110)"
        d="M0,-12 C-9,-20 -20,-20 -20,-8 C-20,2 -12,14 0,22 C12,14 20,2 20,-8 C20,-20 9,-20 0,-12 Z"
        fill="#FF6B6B"
        opacity=".95"
      />
      <path
        transform="translate(130,70)"
        d="M0,10 L8,18 L24,4"
        stroke="#4CAF50"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
