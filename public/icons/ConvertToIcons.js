// Image Format Icons
export const JpgToPdfIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="jpgGradient" x1="0" y1="0" x2="24" y2="24">
        <stop offset="0%" stopColor="#FF4081" />
        <stop offset="100%" stopColor="#C51162" />
      </linearGradient>
    </defs>
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="2"
      stroke="url(#jpgGradient)"
      strokeWidth={2}
    />
    <circle
      cx="8.5"
      cy="8.5"
      r="1.5"
      stroke="url(#jpgGradient)"
      strokeWidth={2}
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 15l-5-5L5 21"
      stroke="url(#jpgGradient)"
    />
  </svg>
);

export const PngToPdfIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="pngGradient" x1="0" y1="0" x2="24" y2="24">
        <stop offset="0%" stopColor="#4CAF50" />
        <stop offset="100%" stopColor="#2E7D32" />
      </linearGradient>
    </defs>
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="2"
      stroke="url(#pngGradient)"
      strokeWidth={2}
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 16l5-5 4 4 6-6 3 3"
      stroke="url(#pngGradient)"
    />
  </svg>
);

// Office Format Icons
export const WordToPdfIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="wordGradient" x1="0" y1="0" x2="24" y2="24">
        <stop offset="0%" stopColor="#2B579A" />
        <stop offset="100%" stopColor="#1E3F7A" />
      </linearGradient>
    </defs>
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="2"
      stroke="url(#wordGradient)"
      strokeWidth={2}
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 5v14M17 5v14M7 12h10"
      stroke="url(#wordGradient)"
    />
  </svg>
);

export const ExcelToPdfIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="excelGradient" x1="0" y1="0" x2="24" y2="24">
        <stop offset="0%" stopColor="#217346" />
        <stop offset="100%" stopColor="#1C5E3A" />
      </linearGradient>
    </defs>
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="2"
      stroke="url(#excelGradient)"
      strokeWidth={2}
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 8h10M7 12h10M7 16h10"
      stroke="url(#excelGradient)"
    />
  </svg>
);

export const PptToPdfIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="pptGradient" x1="0" y1="0" x2="24" y2="24">
        <stop offset="0%" stopColor="#FF5722" />
        <stop offset="100%" stopColor="#D84315" />
      </linearGradient>
      <filter id="glowPpt" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
      </filter>
    </defs>
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="2"
      stroke="url(#pptGradient)"
      strokeWidth={2}
    />
    {/* Slide Icon */}
    <rect
      x="7"
      y="7"
      width="10"
      height="10"
      rx="1"
      stroke="url(#pptGradient)"
      strokeWidth={1.5}
    />
    {/* Presentation Circle */}
    <circle
      cx="12"
      cy="12"
      r="3"
      stroke="url(#pptGradient)"
      strokeWidth={1.5}
    />
    {/* Arrow Indicator */}
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 8v8M9 12h6"
      stroke="url(#pptGradient)"
      filter="url(#glowPpt)"
    />
  </svg>
);

// Other Format Icons
export const TxtToPdfIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="txtGradient" x1="0" y1="0" x2="24" y2="24">
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
      stroke="url(#txtGradient)"
      strokeWidth={2}
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 8h10M7 12h10M7 16h6"
      stroke="url(#txtGradient)"
    />
  </svg>
);

export const BmpToPdfIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="bmpGradient" x1="0" y1="0" x2="24" y2="24">
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
      stroke="url(#bmpGradient)"
      strokeWidth={2}
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 7h4v4H7zM13 7h4v4h-4zM7 13h4v4H7zM13 13h4v4h-4z"
      stroke="url(#bmpGradient)"
    />
  </svg>
);

export const TiffToPdfIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="tiffGradient" x1="0" y1="0" x2="24" y2="24">
        <stop offset="0%" stopColor="#9C27B0" />
        <stop offset="100%" stopColor="#7B1FA2" />
      </linearGradient>
    </defs>
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="2"
      stroke="url(#tiffGradient)"
      strokeWidth={2}
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 7v10M12 7v10M17 7v10"
      stroke="url(#tiffGradient)"
    />
  </svg>
);
