// Basic action icons with vibrant gradients and fills
export const MergeIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="mergeMainGradient" x1="0" y1="0" x2="24" y2="24">
        <stop offset="0%" stopColor="#4F46E5" />
        <stop offset="100%" stopColor="#6366F1" />
      </linearGradient>
    </defs>
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="2"
      fill="currentColor"
      fillOpacity="0.1"
      stroke="currentColor"
      className="text-[#4F46E5] dark:text-[#6366F1]"
      strokeWidth={2}
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M12 3v18M7 8l5 5 5-5"
      stroke="currentColor"
      className="text-[#4F46E5] dark:text-[#6366F1]"
    />
  </svg>
);

export const SplitIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="splitGradient" x1="0" y1="0" x2="24" y2="24">
        <stop offset="0%" stopColor="#EC4899" />
        <stop offset="100%" stopColor="#DB2777" />
      </linearGradient>
      <linearGradient id="splitFillGradient" x1="0" y1="0" x2="24" y2="24">
        <stop offset="0%" stopColor="#F472B6" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#EC4899" stopOpacity="0.1" />
      </linearGradient>
    </defs>
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="2"
      fill="url(#splitFillGradient)"
      stroke="url(#splitGradient)"
      strokeWidth={2}
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M12 3v18M7 16l5-5 5 5"
      stroke="url(#splitGradient)"
    />
  </svg>
);

export const CompressIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="compressMainGradient" x1="0" y1="0" x2="24" y2="24">
        <stop offset="0%" stopColor="#10B981" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
      <linearGradient id="compressFillGradient" x1="0" y1="0" x2="24" y2="24">
        <stop offset="0%" stopColor="#34D399" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#10B981" stopOpacity="0.1" />
      </linearGradient>
    </defs>
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="2"
      fill="url(#compressFillGradient)"
      stroke="url(#compressMainGradient)"
      strokeWidth={2}
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M8 8h8M8 12h8M8 16h8"
      stroke="url(#compressMainGradient)"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M4 12h2M18 12h2"
      stroke="url(#compressMainGradient)"
    />
  </svg>
);

export const ConvertIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="convertGradient" x1="0" y1="0" x2="24" y2="24">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#D97706" />
      </linearGradient>
      <linearGradient id="convertFillGradient" x1="0" y1="0" x2="24" y2="24">
        <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.1" />
      </linearGradient>
    </defs>
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="2"
      fill="url(#convertFillGradient)"
      stroke="url(#convertGradient)"
      strokeWidth={2}
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M7 8l5 5-5 5M12 8l5 5-5 5"
      stroke="url(#convertGradient)"
    />
  </svg>
);
