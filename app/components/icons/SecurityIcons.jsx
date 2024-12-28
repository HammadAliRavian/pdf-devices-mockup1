export const ProtectIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="protectGradient" x1="2" y1="2" x2="22" y2="22">
        <stop offset="0%" stopColor="#4CAF50" />
        <stop offset="100%" stopColor="#388E3C" />
      </linearGradient>
    </defs>
    <path
      d="M12 3L20 7V11C20 15.4183 16.4183 19 12 19C7.58172 19 4 15.4183 4 11V7L12 3Z"
      stroke="url(#protectGradient)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="url(#protectGradient)"
      fillOpacity="0.1"
    />
    <path
      d="M9 11L11 13L15 9"
      stroke="url(#protectGradient)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const UnlockIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="unlockGradient" x1="2" y1="2" x2="22" y2="22">
        <stop offset="0%" stopColor="#FF9800" />
        <stop offset="100%" stopColor="#F57C00" />
      </linearGradient>
    </defs>
    <rect
      x="4"
      y="11"
      width="16"
      height="10"
      rx="2"
      stroke="url(#unlockGradient)"
      strokeWidth="2"
      fill="url(#unlockGradient)"
      fillOpacity="0.1"
    />
    <path
      d="M7 11V7C7 4.79086 8.79086 3 11 3H12C14.2091 3 16 4.79086 16 7"
      stroke="url(#unlockGradient)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="2 2"
    />
    <circle
      cx="12"
      cy="16"
      r="2"
      stroke="url(#unlockGradient)"
      strokeWidth="2"
    />
  </svg>
);
