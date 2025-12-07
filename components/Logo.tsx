import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-12 w-12" }) => {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Gold Circle Background */}
      <circle cx="50" cy="50" r="45" stroke="#D4AF37" strokeWidth="2" fill="none" />
      <circle cx="50" cy="50" r="38" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.5" fill="none" />
      
      {/* Classical House Structure */}
      {/* Pediment */}
      <path d="M20 40 L50 15 L80 40" stroke="#1A2A44" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M25 40 L75 40" stroke="#1A2A44" strokeWidth="2"/>
      
      {/* Columns */}
      <rect x="28" y="40" width="8" height="35" rx="1" stroke="#1A2A44" strokeWidth="2" fill="none"/>
      <rect x="46" y="40" width="8" height="35" rx="1" stroke="#1A2A44" strokeWidth="2" fill="none"/>
      <rect x="64" y="40" width="8" height="35" rx="1" stroke="#1A2A44" strokeWidth="2" fill="none"/>
      
      {/* Base */}
      <rect x="22" y="75" width="56" height="5" stroke="#1A2A44" strokeWidth="2" fill="#1A2A44"/>
      
      {/* Subtle Gold Accent in Pediment */}
      <circle cx="50" cy="32" r="3" fill="#D4AF37"/>
    </svg>
  );
};