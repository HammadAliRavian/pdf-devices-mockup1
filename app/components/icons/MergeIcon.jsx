export const MergeIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="mergeGradient1" x1="2" y1="2" x2="22" y2="22">
        <stop offset="0%" stopColor="#00E676" />
        <stop offset="100%" stopColor="#00C853" />
      </linearGradient>
      <linearGradient id="mergeGradient2" x1="12" y1="2" x2="12" y2="22">
        <stop offset="0%" stopColor="#69F0AE" />
        <stop offset="100%" stopColor="#00E676" />
      </linearGradient>
      <filter id="glow1" x="-2" y="-2" width="28" height="28">
        <feGaussianBlur stdDeviation="1" result="blur" />
        <feFlood floodColor="#00E676" floodOpacity="0.2" />
        <feComposite in2="blur" operator="in" />
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#glow1)">
      <path
        d="M4 16V6C4 4.89543 4.89543 4 6 4H9L11 6H15C16.1046 6 17 6.89543 17 8"
        stroke="url(#mergeGradient1)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M20 16V6C20 4.89543 19.1046 4 18 4H15L13 6"
        stroke="url(#mergeGradient1)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 10V20M12 20L8 16M12 20L16 16"
        stroke="url(#mergeGradient2)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="20" r="2" fill="url(#mergeGradient2)" />
    </g>
  </svg>
);
