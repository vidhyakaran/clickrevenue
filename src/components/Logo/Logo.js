'use client';

import React from 'react';

export default function Logo({ height = 32, className = '' }) {
  // We can calculate width automatically based on aspect ratio (roughly 4.2 : 1)
  const width = Math.round(height * 4.2);

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 350 85"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle', overflow: 'visible' }}
    >
      {/* Neon gradient definition */}
      <defs>
        <linearGradient id="neonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00F5D4" />
          <stop offset="100%" stopColor="#7B2FFF" />
        </linearGradient>
        <linearGradient id="neonGradVert" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00F5D4" />
          <stop offset="100%" stopColor="#7B2FFF" />
        </linearGradient>
      </defs>

      {/* 6 Neon Click Rays around the C */}
      <g stroke="url(#neonGradVert)" strokeWidth="3.5" strokeLinecap="round">
        {/* Ray 1: Top-Left (approx 110deg) */}
        <line x1="20" y1="20" x2="11" y2="6" />
        {/* Ray 2: Angle ~130deg */}
        <line x1="10" y1="30" x2="-2" y2="18" />
        {/* Ray 3: Angle ~150deg */}
        <line x1="5" y1="42" x2="-8" y2="38" />
        {/* Ray 4: Angle ~175deg */}
        <line x1="5" y1="54" x2="-9" y2="57" />
        {/* Ray 5: Angle ~200deg */}
        <line x1="10" y1="66" x2="-1" y2="76" />
        {/* Ray 6: Angle ~225deg */}
        <line x1="21" y1="74" x2="16" y2="88" />
      </g>

      {/* The letter 'C' in white, thick bold display styling */}
      <text
        x="12"
        y="62"
        fontFamily="var(--font-display)"
        fontSize="64"
        fontWeight="800"
        fill="#FFFFFF"
        letterSpacing="-1.5"
      >
        C
      </text>

      {/* The computer mouse tilted slightly under the 'C' */}
      <g transform="translate(18, 54)">
        {/* Mouse outline */}
        <rect
          x="12"
          y="10"
          width="18"
          height="28"
          rx="9"
          fill="#FFFFFF"
          stroke="#000000"
          strokeWidth="2"
          transform="rotate(20, 21, 24)"
        />
        {/* Mouse center split line */}
        <line
          x1="21"
          y1="10"
          x2="21"
          y2="21"
          stroke="#000000"
          strokeWidth="1.8"
          transform="rotate(20, 21, 24)"
        />
        {/* Neon scroll wheel */}
        <rect
          x="19.5"
          y="13"
          width="3"
          height="7"
          rx="1.5"
          fill="url(#neonGrad)"
          transform="rotate(20, 21, 24)"
        />
        {/* Neon looping wire connecting to the C */}
        <path
          d="M 12 14 C -6 8, -4 -16, 2 -8"
          stroke="url(#neonGrad)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          transform="rotate(20, 21, 24)"
        />
      </g>

      {/* The 'lick' portion of 'Click' in white */}
      <text
        x="64"
        y="62"
        fontFamily="var(--font-display)"
        fontSize="56"
        fontWeight="800"
        fill="#FFFFFF"
        letterSpacing="-1"
      >
        lick
      </text>

      {/* The 'Revenue' portion — neon gradient ★ */}
      <text
        x="152"
        y="62"
        fontFamily="var(--font-display)"
        fontSize="56"
        fontWeight="800"
        fill="url(#neonGrad)"
        letterSpacing="-1"
      >
        Revenue
      </text>
    </svg>
  );
}
