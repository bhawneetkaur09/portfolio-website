import React from "react";

const TabBuddyBanner: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="1600" height="900" role="img" aria-label="TabBuddy — Chrome Extension" {...props}>
    <defs>
      <linearGradient id="tb-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#0d0d0d"/>
        <stop offset="100%" stopColor="#0f141a"/>
      </linearGradient>
      <linearGradient id="tb-accent" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#7CC4FF"/>
        <stop offset="100%" stopColor="#4285F4"/>
      </linearGradient>
      <radialGradient id="tb-glow" cx="50%" cy="50%" r="60%">
        <stop offset="0%" stopColor="#7CC4FF" stopOpacity="0.10"/>
        <stop offset="100%" stopColor="#7CC4FF" stopOpacity="0"/>
      </radialGradient>
    </defs>

    <rect width="1600" height="900" fill="url(#tb-bg)"/>
    <rect width="1600" height="900" fill="url(#tb-glow)"/>

    <g transform="translate(800, 420)" textAnchor="middle">
      <g>
        <rect x="-120" y="-140" width="240" height="160" rx="18" fill="#101723" stroke="url(#tb-accent)" strokeWidth="4"/>
        <rect x="-90" y="-110" width="180" height="28" rx="8" fill="#142032"/>
        <rect x="-90" y="-70" width="180" height="16" rx="8" fill="#142032"/>
        <rect x="-90" y="-40" width="120" height="16" rx="8" fill="#142032"/>
      </g>
      <g transform="translate(0, 150)">
        <text x="0" y="0" fill="#FFFFFF" fontFamily="Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto" fontWeight={800} fontSize={84} letterSpacing={-1}>TabBuddy</text>
        <rect x="-90" y="16" width="180" height="6" rx="3" fill="url(#tb-accent)"/>
      </g>
      <g transform="translate(0, 210)">
        <text x="0" y="0" fill="#DAE9FF" fontFamily="Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto" fontWeight={600} fontSize={30}>Chrome extension with smooth Canvas animations</text>
      </g>
      <g transform="translate(0, 270)">
        <rect x="-330" y="-34" width="660" height="48" rx="14" fill="rgba(124,196,255,0.08)" stroke="rgba(124,196,255,0.35)"/>
        <text x="0" y="0" fill="#A9D7FF" fontFamily="Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto" fontWeight={700} fontSize={22}>Canvas • Chrome APIs • 60fps</text>
      </g>
    </g>
  </svg>
);

export default TabBuddyBanner;


