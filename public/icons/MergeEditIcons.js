export const RotatePdfIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="rotateGradient" x1="0" y1="0" x2="24" y2="24">
        <stop offset="0%" stopColor="#4CAF50" />
        <stop offset="100%" stopColor="#2E7D32" />
      </linearGradient>
    </defs>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
      stroke="url(#rotateGradient)"
    />
  </svg>
);

export const ReorderPdfIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="reorderGradient" x1="0" y1="0" x2="24" y2="24">
        <stop offset="0%" stopColor="#2196F3" />
        <stop offset="100%" stopColor="#1976D2" />
      </linearGradient>
    </defs>
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="2"
      stroke="url(#reorderGradient)"
      strokeWidth={2}
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 8h10M7 12h10M7 16h10"
      stroke="url(#reorderGradient)"
    />
  </svg>
);

export const DeletePdfIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="deleteGradient" x1="0" y1="0" x2="24" y2="24">
        <stop offset="0%" stopColor="#F44336" />
        <stop offset="100%" stopColor="#D32F2F" />
      </linearGradient>
    </defs>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
      stroke="url(#deleteGradient)"
    />
  </svg>
);

export const MergePdfIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="mergeGradient" x1="0" y1="0" x2="24" y2="24">
        <stop offset="0%" stopColor="#9C27B0" />
        <stop offset="100%" stopColor="#7B1FA2" />
      </linearGradient>
    </defs>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
      stroke="url(#mergeGradient)"
    />
  </svg>
);
