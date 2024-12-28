// RotateIcon
export const RotateIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="rotateGradient" x1="2" y1="2" x2="22" y2="22">
        <stop offset="0%" stopColor="#FF9800" />
        <stop offset="100%" stopColor="#F57C00" />
      </linearGradient>
    </defs>
    <path
      d="M4 12C4 7.58172 7.58172 4 12 4C14.5171 4 16.8037 5.15456 18.3126 7"
      stroke="url(#rotateGradient)"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M20 12C20 16.4183 16.4183 20 12 20C9.48293 20 7.19631 18.8454 5.68738 17"
      stroke="url(#rotateGradient)"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M19 7H18.3126H15"
      stroke="url(#rotateGradient)"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M5 17H5.68738H9"
      stroke="url(#rotateGradient)"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

// ReorderIcon
export const ReorderIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="reorderGradient" x1="2" y1="2" x2="22" y2="22">
        <stop offset="0%" stopColor="#4CAF50" />
        <stop offset="100%" stopColor="#388E3C" />
      </linearGradient>
    </defs>
    <rect
      x="4"
      y="4"
      width="6"
      height="8"
      rx="1"
      stroke="url(#reorderGradient)"
      strokeWidth="2"
    />
    <rect
      x="14"
      y="12"
      width="6"
      height="8"
      rx="1"
      stroke="url(#reorderGradient)"
      strokeWidth="2"
    />
    <path
      d="M7 16L7 20M7 20L5 18M7 20L9 18"
      stroke="url(#reorderGradient)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 4L17 8M17 8L15 6M17 8L19 6"
      stroke="url(#reorderGradient)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// DeleteIcon
export const DeleteIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="deleteGradient" x1="2" y1="2" x2="22" y2="22">
        <stop offset="0%" stopColor="#F44336" />
        <stop offset="100%" stopColor="#D32F2F" />
      </linearGradient>
    </defs>
    <path
      d="M4 7H20"
      stroke="url(#deleteGradient)"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M10 11V17"
      stroke="url(#deleteGradient)"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M14 11V17"
      stroke="url(#deleteGradient)"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M5 7L6 19C6 20.1046 6.89543 21 8 21H16C17.1046 21 18 20.1046 18 19L19 7"
      stroke="url(#deleteGradient)"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M9 7V4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V7"
      stroke="url(#deleteGradient)"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

// ExtractIcon
export const ExtractIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="extractGradient" x1="2" y1="2" x2="22" y2="22">
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
      stroke="url(#extractGradient)"
      strokeWidth="2"
    />
    <path
      d="M8 12H16"
      stroke="url(#extractGradient)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="2 2"
    />
    <path
      d="M12 15L12 9M12 9L9 12M12 9L15 12"
      stroke="url(#extractGradient)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
