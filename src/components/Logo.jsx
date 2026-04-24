import React from 'react';

const Logo = ({ className = 'h-16 w-16' }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Academic AI Solutions Logo"
    >
      <g>
        {/* Outer Black Circle */}
        <circle cx="50" cy="50" r="48" fill="white" stroke="black" strokeWidth="4" />
        {/* Inner Gray Ring */}
        <circle cx="50" cy="50" r="42" fill="none" stroke="lightgray" strokeWidth="3" />

        {/* Pen Nib */}
        <g transform="translate(0, -5)">
          {/* Top Structure */}
          <rect x="42" y="25" width="16" height="3" fill="black" />
          <rect x="44" y="29" width="3" height="7" fill="black" />
          <rect x="48.5" y="29" width="3" height="7" fill="black" />
          <rect x="53" y="29" width="3" height="7" fill="black" />
          <rect x="42" y="37" width="16" height="2" fill="black" />
          
          {/* Main Nib Shape */}
          <path d="M 50 40 L 45 55 L 50 52 L 55 55 Z" fill="black" />
          {/* White dot/slit in the middle */}
          <circle cx="50" cy="48" r="1.5" fill="white" />

          {/* Large V-shape */}
          <path d="M 38 60 L 50 85 L 62 60 L 50 75 Z" fill="black" />
        </g>
      </g>
    </svg>
  );
};

export default Logo;