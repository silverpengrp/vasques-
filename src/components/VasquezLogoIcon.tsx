import React, { useState, useEffect } from 'react';
import wolfLogoImg from '../assets/images/vasquez_wolf_logo.png';

interface VasquezLogoIconProps {
  className?: string;
  size?: number;
  alt?: string;
}

export const VasquezLogoIcon: React.FC<VasquezLogoIconProps> = ({ 
  className = "w-14 h-14",
  size,
  alt = "Vasquez Home Improvement Contractor LLC - Wolf Badge"
}) => {
  const [imgError, setImgError] = useState(false);

  // Clear any outdated localStorage override that might be pointing to another icon
  useEffect(() => {
    try {
      const custom = localStorage.getItem('vasquez_custom_logo_icon');
      if (custom && !custom.includes('wolf')) {
        localStorage.removeItem('vasquez_custom_logo_icon');
      }
    } catch {}
  }, []);

  const logoSrc = wolfLogoImg || `${import.meta.env.BASE_URL}vasquez_wolf_logo.png`;

  // Render official howling wolf under full moon emblem with vibrant illuminated styling
  if (!imgError) {
    return (
      <div 
        className={`relative rounded-full overflow-hidden flex items-center justify-center shrink-0 select-none ${className}`}
        style={size ? { width: size, height: size } : undefined}
      >
        <img
          src={logoSrc}
          alt={alt}
          className="w-full h-full object-cover object-center rounded-full transform hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            const target = e.currentTarget;
            if (target.src !== `${import.meta.env.BASE_URL}vasquez_wolf_logo.png`) {
              target.src = `${import.meta.env.BASE_URL}vasquez_wolf_logo.png`;
            } else if (target.src !== `${import.meta.env.BASE_URL}wolf_badge_logo_clean.png`) {
              target.src = `${import.meta.env.BASE_URL}wolf_badge_logo_clean.png`;
            } else {
              setImgError(true);
            }
          }}
          loading="eager"
        />
        {/* Subtle illuminated inner rim highlight */}
        <div className="absolute inset-0 rounded-full border border-cyan-400/40 pointer-events-none" />
      </div>
    );
  }

  // High-fidelity Wolf & Moon SVG Fallback if image fails to load
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
        <radialGradient id="vWolfMoonGlow" cx="50%" cy="45%" r="65%">
          <stop offset="0%" stopColor="#67e8f9" />
          <stop offset="35%" stopColor="#06b6d4" />
          <stop offset="70%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#0c1e3d" />
        </radialGradient>
        <radialGradient id="vWolfSkyBg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="85%" stopColor="#020617" />
          <stop offset="100%" stopColor="#000000" />
        </radialGradient>
        <linearGradient id="vWolfRim" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="50%" stopColor="#00f0ff" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
      </defs>
      
      {/* Outer Rim */}
      <circle cx="100" cy="100" r="96" fill="#020617" stroke="url(#vWolfRim)" strokeWidth="4" />
      
      {/* Deep Sky Base */}
      <circle cx="100" cy="100" r="92" fill="url(#vWolfSkyBg)" />
      
      {/* Glowing Moon */}
      <circle cx="100" cy="94" r="54" fill="url(#vWolfMoonGlow)" />
      
      {/* Mountain Rock Peak Base */}
      <path 
        d="M 30 170 L 80 142 L 105 132 L 135 146 L 170 170 Z" 
        fill="#0b172a" 
        stroke="#1e3a8a" 
        strokeWidth="2" 
      />
      
      {/* Wolf Silhouette Howling to the Moon */}
      <path 
        d="M 75 148 C 76 138, 80 125, 84 116 C 88 107, 85 96, 80 88 C 77 82, 73 72, 72 63 C 71 58, 75 52, 80 50 C 83 49, 87 53, 90 58 C 94 64, 98 67, 103 66 C 107 65, 110 59, 112 55 C 114 51, 118 52, 119 56 C 120 62, 118 70, 116 76 C 122 84, 132 94, 142 104 C 150 112, 154 118, 160 126 C 163 130, 159 135, 154 133 C 148 131, 142 126, 137 122 C 134 126, 133 134, 131 142 L 126 150 L 118 150 L 119 135 C 117 131, 113 128, 110 128 C 107 128, 105 132, 104 138 L 100 150 L 90 150 L 92 136 C 89 138, 86 142, 84 148 Z" 
        fill="#050d1a" 
        stroke="#38bdf8" 
        strokeWidth="1.5" 
      />
    </svg>
  );
};
