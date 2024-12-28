// Icons for Optimize & Extract section
export const GrayscaleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="grayscaleGradient" x1="2" y1="2" x2="22" y2="22">
        <stop offset="0%" stopColor="#607D8B" />
        <stop offset="100%" stopColor="#455A64" />
      </linearGradient>
    </defs>
    <rect
      x="4"
      y="4"
      width="16"
      height="16"
      rx="2"
      stroke="url(#grayscaleGradient)"
      strokeWidth="2"
      fill="url(#grayscaleGradient)"
      fillOpacity="0.1"
    />
    <path
      d="M12 7V17"
      stroke="url(#grayscaleGradient)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="2 2"
    />
    <path
      d="M7 12H17"
      stroke="url(#grayscaleGradient)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="2 2"
    />
  </svg>
);

export const RepairIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="repairGradient" x1="2" y1="2" x2="22" y2="22">
        <stop offset="0%" stopColor="#FFC107" />
        <stop offset="100%" stopColor="#FFA000" />
      </linearGradient>
    </defs>
    <path
      d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
      stroke="url(#repairGradient)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
