import React from "react";

const ImportCostEnforcerBanner: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="1600" height="900" role="img" aria-label="import-cost-enforcer — Enforce bundle-size budgets in CI/CD" {...props}>
    <defs>
      <linearGradient id="ice-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#0d0d0f"/>
        <stop offset="100%" stopColor="#0e1320"/>
      </linearGradient>
      <linearGradient id="ice-accent" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#5AB3FF"/>
        <stop offset="100%" stopColor="#2E8BFF"/>
      </linearGradient>
      <radialGradient id="ice-glow" cx="50%" cy="50%" r="60%">
        <stop offset="0%" stopColor="#5AB3FF" stopOpacity="0.10"/>
        <stop offset="100%" stopColor="#5AB3FF" stopOpacity="0"/>
      </radialGradient>
      <filter id="ice-shadow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="12" stdDeviation="24" floodColor="#2E8BFF" floodOpacity="0.25"/>
      </filter>
    </defs>

    <rect width="1600" height="900" fill="url(#ice-bg)"/>
    <rect width="1600" height="900" fill="url(#ice-glow)"/>

    <g opacity="0.07" stroke="#5AB3FF">
      <path d="M-100 150 L400 0"/>
      <path d="M1200 900 L1800 650"/>
      <path d="M0 850 L450 650"/>
      <path d="M1150 200 L1650 0"/>
    </g>

    <g transform="translate(800, 420)" textAnchor="middle">
      <g filter="url(#ice-shadow)" transform="translate(0,-48)">
        <path d="M0,-120 L104,-60 L104,60 L0,120 L-104,60 L-104,-60 Z" fill="#0f1624" stroke="url(#ice-accent)" strokeWidth="4"/>
        <path d="M-40,10 L-5,45 L55,-25" fill="none" stroke="url(#ice-accent)" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="-70" y="-70" width="140" height="12" rx="6" fill="#142032"/>
        <rect x="-70" y="-70" width="92" height="12" rx="6" fill="url(#ice-accent)"/>
        <rect x="-70" y="-48" width="140" height="12" rx="6" fill="#142032"/>
        <rect x="-70" y="-48" width="66" height="12" rx="6" fill="url(#ice-accent)"/>
      </g>

      <g transform="translate(0, 150)">
        <text x="0" y="0" fill="#FFFFFF" fontFamily="Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto" fontWeight={800} fontSize={84} letterSpacing={-1}>
          import-cost-enforcer
        </text>
        <rect x="-160" y="16" width="320" height="6" rx="3" fill="url(#ice-accent)"/>
      </g>

      <g transform="translate(0, 210)">
        <text x="0" y="0" fill="#CFE4FF" fontFamily="Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto" fontWeight={600} fontSize={30}>
          Enforce bundle-size budgets in CI/CD
        </text>
      </g>

      <g transform="translate(0, 270)">
        <rect x="-330" y="-34" width="660" height="48" rx="14" fill="rgba(90,179,255,0.08)" stroke="rgba(90,179,255,0.35)"/>
        <text x="0" y="0" fill="#7CC4FF" fontFamily="Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto" fontWeight={700} fontSize={22}>
          Node.js • NPM • CI/CD • Bundle Analysis
        </text>
      </g>
    </g>

    <rect width="1600" height="900" fill="black" opacity="0.15"/>
  </svg>
);

export default ImportCostEnforcerBanner;


