import React, { useState } from 'react';

interface VasquezLogoIconProps {
  className?: string;
  size?: number;
  alt?: string;
}

export const VasquezLogoIcon: React.FC<VasquezLogoIconProps> = ({ 
  className = "w-14 h-14",
  size,
  alt = "Vasquez Home Improvement Contractor Master Wolf Emblem"
}) => {
  const [imgError, setImgError] = useState(false);

  // If the user's wolf badge image loads cleanly, render it with vibrant illuminated contractor styling
  if (!imgError) {
    return (
      <div 
        className={`relative rounded-full overflow-hidden flex items-center justify-center shrink-0 select-none ${className}`}
        style={size ? { width: size, height: size } : undefined}
      >
        <img
          src="/vasquez_wolf_logo.png"
          alt={alt}
          className="w-full h-full object-cover object-center rounded-full transform hover:scale-105 transition-transform duration-300"
          onError={() => setImgError(true)}
          loading="eager"
        />
        {/* Subtle illuminated inner rim highlight */}
        <div className="absolute inset-0 rounded-full border border-cyan-400/30 pointer-events-none" />
      </div>
    );
  }

  // High-fidelity SVG Fallback if image fails to load
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      fill="none"
      aria-label={alt}
    >
      <defs>
        <radialGradient id="vLogoCircleBgFallback" cx="50%" cy="40%" r="65%">
          <stop offset="0%" stopColor="#1e3a8a" />
          <stop offset="45%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#020617" />
        </radialGradient>
        <linearGradient id="vLogoRimFallback" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="50%" stopColor="#00f0ff" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
        <linearGradient id="vLogoYellowHelmetFallback" x1="66" y1="48" x2="134" y2="86" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="25%" stopColor="#facc15" />
          <stop offset="70%" stopColor="#eab308" />
          <stop offset="100%" stopColor="#ca8a04" />
        </linearGradient>
      </defs>
      <circle cx="100" cy="100" r="94" fill="url(#vLogoCircleBgFallback)" stroke="url(#vLogoRimFallback)" strokeWidth="4" />
      <path d="M 64 68 L 48 34 L 78 50 Z" fill="#334155" stroke="#38bdf8" strokeWidth="1.5" />
      <path d="M 136 68 L 152 34 L 122 50 Z" fill="#334155" stroke="#38bdf8" strokeWidth="1.5" />
      <path d="M 58 76 C 60 44, 140 44, 142 76 C 142 80, 58 80, 58 76 Z" fill="url(#vLogoYellowHelmetFallback)" stroke="#fef08a" strokeWidth="2" />
      <polygon points="100,104 88,126 112,126" fill="#0284c7" />
    </svg>
  );
};
