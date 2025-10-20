import React from "react";

const StackDecisionBanner: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="1600" height="900" role="img" aria-label="StackDecision — Tech Stack Recommendation Platform" {...props}>
    <defs>
      <linearGradient id="sd-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#0d0d0d"/>
        <stop offset="100%" stopColor="#101018"/>
      </linearGradient>
      <linearGradient id="sd-accent" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#5AB3FF"/>
        <stop offset="100%" stopColor="#2E8BFF"/>
      </linearGradient>
      <radialGradient id="sd-glow" cx="50%" cy="50%" r="60%">
        <stop offset="0%" stopColor="#5AB3FF" stopOpacity="0.10"/>
        <stop offset="100%" stopColor="#5AB3FF" stopOpacity="0"/>
      </radialGradient>
    </defs>

    <rect width="1600" height="900" fill="url(#sd-bg)"/>
    <rect width="1600" height="900" fill="url(#sd-glow)"/>

    <g transform="translate(800, 420)" textAnchor="middle">
      <g>
        <circle cx="0" cy="-80" r="110" fill="#0f1624" stroke="url(#sd-accent)" strokeWidth="4"/>
        <path d="M-60 -90 L0 -40 L60 -120" fill="none" stroke="url(#sd-accent)" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <g transform="translate(0, 150)">
        <text x="0" y="0" fill="#FFFFFF" fontFamily="Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto" fontWeight={800} fontSize={84} letterSpacing={-1}>StackDecision</text>
        <rect x="-120" y="16" width="240" height="6" rx="3" fill="url(#sd-accent)"/>
      </g>
      <g transform="translate(0, 210)">
        <text x="0" y="0" fill="#CFE4FF" fontFamily="Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto" fontWeight={600} fontSize={30}>Tech stack recommendations powered by data</text>
      </g>
      <g transform="translate(0, 270)">
        <rect x="-330" y="-34" width="660" height="48" rx="14" fill="rgba(90,179,255,0.08)" stroke="rgba(90,179,255,0.35)"/>
        <text x="0" y="0" fill="#7CC4FF" fontFamily="Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto" fontWeight={700} fontSize={22}>React • PostgreSQL • Node.js</text>
      </g>
    </g>
  </svg>
);

export default StackDecisionBanner;


