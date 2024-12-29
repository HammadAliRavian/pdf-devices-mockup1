export const ProtectPdfIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="protectGradient" x1="0" y1="0" x2="24" y2="24">
        <stop offset="0%" stopColor="#4CAF50" />
        <stop offset="100%" stopColor="#2E7D32" />
      </linearGradient>
      <filter id="glowProtect" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
      </filter>
    </defs>
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="2"
      stroke="url(#protectGradient)"
      strokeWidth={2}
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 7v4M8 11h8v5a4 4 0 01-8 0v-5z"
      stroke="url(#protectGradient)"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 7a2 2 0 100-4 2 2 0 000 4z"
      stroke="url(#protectGradient)"
    />
    <circle
      cx="12"
      cy="14"
      r="1"
      fill="url(#protectGradient)"
      filter="url(#glowProtect)"
    />
  </svg>
);

export const UnlockPdfIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="unlockGradient" x1="0" y1="0" x2="24" y2="24">
        <stop offset="0%" stopColor="#FF9800" />
        <stop offset="100%" stopColor="#F57C00" />
      </linearGradient>
      <filter id="glowUnlock" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
      </filter>
    </defs>
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="2"
      stroke="url(#unlockGradient)"
      strokeWidth={2}
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 11h8v5a4 4 0 01-8 0v-5z"
      stroke="url(#unlockGradient)"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 7a5 5 0 0110 0"
      stroke="url(#unlockGradient)"
      strokeDasharray="4 2"
    />
    <circle
      cx="12"
      cy="14"
      r="1"
      fill="url(#unlockGradient)"
      filter="url(#glowUnlock)"
    />
  </svg>
);
