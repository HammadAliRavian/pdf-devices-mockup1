export const ConvertIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="convertGradient1" x1="2" y1="2" x2="22" y2="22">
        <stop offset="0%" stopColor="#AB47BC" />
        <stop offset="100%" stopColor="#8E24AA" />
      </linearGradient>
      <linearGradient id="convertGradient2" x1="12" y1="2" x2="12" y2="22">
        <stop offset="0%" stopColor="#CE93D8" />
        <stop offset="100%" stopColor="#AB47BC" />
      </linearGradient>
      <filter id="glow4" x="-2" y="-2" width="28" height="28">
        <feGaussianBlur stdDeviation="1" result="blur" />
        <feFlood floodColor="#AB47BC" floodOpacity="0.2" />
        <feComposite in2="blur" operator="in" />
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#glow4)">
      <rect
        x="7"
        y="7"
        width="10"
        height="10"
        rx="2"
        fill="url(#convertGradient1)"
        fillOpacity="0.15"
        stroke="url(#convertGradient1)"
        strokeWidth="2"
      />
      <path
        d="M17 3L21 7M21 7L17 11M21 7H13"
        stroke="url(#convertGradient2)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 21L3 17M3 17L7 13M3 17H11"
        stroke="url(#convertGradient2)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="1.5" fill="url(#convertGradient2)" />
    </g>
  </svg>
);
