'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      // Update cursor position
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Show cursor if it's not visible
      if (!isVisible) {
        setIsVisible(true);
      }

      // Set to moving state
      setIsMoving(true);

      // Clear any existing timeout
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      // Set timeout to stop "moving" state after 100ms of no movement
      timeoutId = setTimeout(() => {
        setIsMoving(false);
      }, 100);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      setIsMoving(false);
    };

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Try to initialize cursor position based on last known mouse position
    const initialTimeout = setTimeout(() => {
      if (!isVisible) {
        // Use window.innerWidth/Height as fallback if no mouse position
        const initialX = mousePosition.x || window.innerWidth / 2;
        const initialY = mousePosition.y || window.innerHeight / 2;
        setMousePosition({ x: initialX, y: initialY });
        setIsVisible(true);
      }
    }, 500);

    // Clean up
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      clearTimeout(initialTimeout);
    };
  }, [isVisible, mousePosition.x, mousePosition.y]);

  return (
    <motion.div
      className="pointer-events-none fixed z-[9999999] rounded-full glow bg-[#B5FE00]"
      animate={{
        scale: isMoving ? 1 : 0.5,
        x: mousePosition.x,
        y: mousePosition.y,
        opacity: isVisible ? 1 : 0
      }}
      initial={{
        opacity: 0,
        scale: 0.5,
        x: mousePosition.x,
        y: mousePosition.y
      }}
      transition={{
        type: "",
        stiffness: 100,
        damping: 25,
        opacity: { duration: 0.1 },
        scale: { duration: 0.1, ease:'easeIn' }
      }}
      style={{
        width: '30px',
        height: '30px',
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
};

export default Cursor;