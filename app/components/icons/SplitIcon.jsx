export const SplitIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="splitGradient1" x1="2" y1="2" x2="22" y2="22">
        <stop offset="0%" stopColor="#FFA726" />
        <stop offset="100%" stopColor="#FB8C00" />
      </linearGradient>
      <linearGradient id="splitGradient2" x1="12" y1="2" x2="12" y2="22">
        <stop offset="0%" stopColor="#FFD54F" />
        <stop offset="100%" stopColor="#FFA726" />
      </linearGradient>
      <filter id="glow2" x="-2" y="-2" width="28" height="28">
        <feGaussianBlur stdDeviation="1" result="blur" />
        <feFlood floodColor="#FFA726" floodOpacity="0.2" />
        <feComposite in2="blur" operator="in" />
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#glow2)">
      <rect
        x="8"
        y="4"
        width="8"
        height="16"
        rx="2"
        fill="url(#splitGradient1)"
        fillOpacity="0.15"
        stroke="url(#splitGradient1)"
        strokeWidth="2"
      />
      <path
        d="M16 7L20 7M20 7L17 4M20 7L17 10"
        stroke="url(#splitGradient2)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 17L4 17M4 17L7 14M4 17L7 20"
        stroke="url(#splitGradient2)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="1.5" fill="url(#splitGradient2)" />
    </g>
  </svg>
);
