export const CompressPdfIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="compressGradient" x1="0" y1="0" x2="24" y2="24">
        <stop offset="0%" stopColor="#00BCD4" />
        <stop offset="100%" stopColor="#0097A7" />
      </linearGradient>
    </defs>
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="2"
      stroke="url(#compressGradient)"
      strokeWidth={2}
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 3v18M7 8l5 5 5-5M7 16l5-5 5 5"
      stroke="url(#compressGradient)"
    />
  </svg>
);

export const GrayscalePdfIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="grayscaleGradient" x1="0" y1="0" x2="24" y2="24">
        <stop offset="0%" stopColor="#607D8B" />
        <stop offset="100%" stopColor="#455A64" />
      </linearGradient>
    </defs>
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="2"
      stroke="url(#grayscaleGradient)"
      strokeWidth={2}
    />
    <circle
      cx="12"
      cy="12"
      r="5"
      stroke="url(#grayscaleGradient)"
      strokeWidth={2}
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 7v10M7 12h10"
      stroke="url(#grayscaleGradient)"
    />
  </svg>
);

export const ExtractPdfIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="extractGradient" x1="0" y1="0" x2="24" y2="24">
        <stop offset="0%" stopColor="#FF9800" />
        <stop offset="100%" stopColor="#F57C00" />
      </linearGradient>
    </defs>
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="2"
      stroke="url(#extractGradient)"
      strokeWidth={2}
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 3v18M16 3v18M3 12h18"
      stroke="url(#extractGradient)"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8l4 4-4 4"
      stroke="url(#extractGradient)"
    />
  </svg>
);

export const RepairPdfIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="repairGradient" x1="0" y1="0" x2="24" y2="24">
        <stop offset="0%" stopColor="#8E24AA" />
        <stop offset="100%" stopColor="#6A1B9A" />
      </linearGradient>
    </defs>
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="2"
      stroke="url(#repairGradient)"
      strokeWidth={2}
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.77 3.77z"
      stroke="url(#repairGradient)"
    />
  </svg>
);
