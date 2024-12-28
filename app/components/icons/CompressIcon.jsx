export const CompressIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="compressGradient1" x1="2" y1="2" x2="22" y2="22">
        <stop offset="0%" stopColor="#42A5F5" />
        <stop offset="100%" stopColor="#1E88E5" />
      </linearGradient>
      <linearGradient id="compressGradient2" x1="12" y1="2" x2="12" y2="22">
        <stop offset="0%" stopColor="#90CAF9" />
        <stop offset="100%" stopColor="#42A5F5" />
      </linearGradient>
      <filter id="glow3" x="-2" y="-2" width="28" height="28">
        <feGaussianBlur stdDeviation="1" result="blur" />
        <feFlood floodColor="#42A5F5" floodOpacity="0.2" />
        <feComposite in2="blur" operator="in" />
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#glow3)">
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="3"
        fill="url(#compressGradient1)"
        fillOpacity="0.15"
        stroke="url(#compressGradient1)"
        strokeWidth="2"
      />
      <path
        d="M8 8L16 8M8 12L16 12M8 16L16 16"
        stroke="url(#compressGradient2)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 4L12 20"
        stroke="url(#compressGradient2)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="2 2"
      />
      <circle cx="12" cy="12" r="1.5" fill="url(#compressGradient2)" />
    </g>
  </svg>
);
