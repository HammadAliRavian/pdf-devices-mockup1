// WordIcon
export const WordIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="wordGradient" x1="2" y1="2" x2="22" y2="22">
        <stop offset="0%" stopColor="#2196F3" />
        <stop offset="100%" stopColor="#1976D2" />
      </linearGradient>
    </defs>
    <rect
      x="4"
      y="4"
      width="16"
      height="16"
      rx="2"
      stroke="url(#wordGradient)"
      strokeWidth="2"
    />
    <path
      d="M7 8L7 16"
      stroke="url(#wordGradient)"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M12 8L12 16"
      stroke="url(#wordGradient)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="2 2"
    />
    <path
      d="M17 8L17 16"
      stroke="url(#wordGradient)"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

// ExcelIcon
export const ExcelIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="excelGradient" x1="2" y1="2" x2="22" y2="22">
        <stop offset="0%" stopColor="#4CAF50" />
        <stop offset="100%" stopColor="#388E3C" />
      </linearGradient>
    </defs>
    <rect
      x="4"
      y="4"
      width="16"
      height="16"
      rx="2"
      stroke="url(#excelGradient)"
      strokeWidth="2"
    />
    <path
      d="M8 8L16 16"
      stroke="url(#excelGradient)"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M16 8L8 16"
      stroke="url(#excelGradient)"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

// PowerPointIcon
export const PowerPointIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="pptGradient" x1="2" y1="2" x2="22" y2="22">
        <stop offset="0%" stopColor="#FF5722" />
        <stop offset="100%" stopColor="#E64A19" />
      </linearGradient>
    </defs>
    <rect
      x="4"
      y="4"
      width="16"
      height="16"
      rx="2"
      stroke="url(#pptGradient)"
      strokeWidth="2"
    />
    <circle cx="12" cy="12" r="4" stroke="url(#pptGradient)" strokeWidth="2" />
    <path
      d="M12 8V16"
      stroke="url(#pptGradient)"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

// ImageIcon
export const ImageIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="imageGradient" x1="2" y1="2" x2="22" y2="22">
        <stop offset="0%" stopColor="#9C27B0" />
        <stop offset="100%" stopColor="#7B1FA2" />
      </linearGradient>
    </defs>
    <rect
      x="4"
      y="4"
      width="16"
      height="16"
      rx="2"
      stroke="url(#imageGradient)"
      strokeWidth="2"
    />
    <circle cx="8.5" cy="8.5" r="1.5" fill="url(#imageGradient)" />
    <path
      d="M4 19L8 15L12 19"
      stroke="url(#imageGradient)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 17L14 13L20 19"
      stroke="url(#imageGradient)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
