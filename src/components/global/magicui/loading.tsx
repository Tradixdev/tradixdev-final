"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface ProgressBarProps {
  progress: number;
}

export function GlowyLoadingBar({ progress }: ProgressBarProps) {
  const barRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    const progressEl = progressRef.current;

    if (!bar || !progressEl) return;

    // Animate progress width based on prop
    gsap.to(progressEl, {
      width: `${progress}%`,
      duration: 0.5,
      ease: 'power2.out'
    });

    // Glowy effect
    if (progress > 0) {
      gsap.to(bar, {
        boxShadow: '0 0 15px 5px rgba(181, 254, 0, 0.6)',
        repeat: -1,
        yoyo: true,
        duration: 1
      });
    }

    return () => {
      gsap.killTweensOf(bar);
      gsap.killTweensOf(progressEl);
    };
  }, [progress]);

  return (
    <div
      ref={barRef}
      className="w-full h-2 bg-black rounded-full overflow-hidden relative"
    >
      <div
        ref={progressRef}
        className="absolute top-0 left-0 h-full bg-[#B5FE00] transition-all duration-500"
        style={{ width: '0%' }}
      />
    </div>
  );
}