'use client';

import { useEffect, useRef } from 'react';
import { getSmoothScroll } from './LenisScroll';

const LenisScroll: React.FC = () => {
  const scrollRef = useRef(getSmoothScroll());

  useEffect(() => {
    const smoothScroll = scrollRef.current;

    if (smoothScroll) {
      smoothScroll.start();

      return () => {
        smoothScroll.destroy();
      };
    }
  }, []);

  return null;
};

export default LenisScroll;