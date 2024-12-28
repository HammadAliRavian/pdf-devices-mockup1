// PasswordIcon
export const PasswordIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="passwordGradient" x1="2" y1="2" x2="22" y2="22">
        <stop offset="0%" stopColor="#9C27B0" />
        <stop offset="100%" stopColor="#7B1FA2" />
      </linearGradient>
    </defs>
    <rect
      x="5"
      y="11"
      width="14"
      height="10"
      rx="2"
      stroke="url(#passwordGradient)"
      strokeWidth="2"
    />
    <path
      d="M8 11V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V11"
      stroke="url(#passwordGradient)"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="12" cy="16" r="2" fill="url(#passwordGradient)" />
  </svg>
);

// SignIcon
export const SignIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="signGradient" x1="2" y1="2" x2="22" y2="22">
        <stop offset="0%" stopColor="#00BCD4" />
        <stop offset="100%" stopColor="#0097A7" />
      </linearGradient>
    </defs>
    <path
      d="M3 17L7 21L21 7"
      stroke="url(#signGradient)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 12C12 12 15 9 17 7C19 5 21.5 3 21.5 3"
      stroke="url(#signGradient)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="17" cy="7" r="2" fill="url(#signGradient)" />
  </svg>
);

// WatermarkIcon
export const WatermarkIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="watermarkGradient" x1="2" y1="2" x2="22" y2="22">
        <stop offset="0%" stopColor="#FF5722" />
        <stop offset="100%" stopColor="#E64A19" />
      </linearGradient>
    </defs>
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="2"
      stroke="url(#watermarkGradient)"
      strokeWidth="2"
    />
    <path
      d="M12 8L12 16"
      stroke="url(#watermarkGradient)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="2 2"
    />
    <path
      d="M8 12L16 12"
      stroke="url(#watermarkGradient)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="2 2"
    />
    <path
      d="M7 7L17 17"
      stroke="url(#watermarkGradient)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeOpacity="0.5"
    />
  </svg>
);

// EncryptIcon
export const EncryptIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="encryptGradient" x1="2" y1="2" x2="22" y2="22">
        <stop offset="0%" stopColor="#673AB7" />
        <stop offset="100%" stopColor="#512DA8" />
      </linearGradient>
    </defs>
    <path
      d="M12 10V14M12 14L10 12M12 14L14 12"
      stroke="url(#encryptGradient)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 16V8C4 6.89543 4.89543 6 6 6H18C19.1046 6 20 6.89543 20 8V16C20 17.1046 19.1046 18 18 18H6C4.89543 18 4 17.1046 4 16Z"
      stroke="url(#encryptGradient)"
      strokeWidth="2"
    />
    <circle
      cx="12"
      cy="12"
      r="6"
      fill="url(#encryptGradient)"
      fillOpacity="0.1"
    />
  </svg>
);
