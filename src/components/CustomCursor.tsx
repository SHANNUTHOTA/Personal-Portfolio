import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    const handleMouseLeaveWindow = () => setIsVisible(false);
    const handleMouseEnterWindow = () => setIsVisible(true);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseleave', handleMouseLeaveWindow);
    window.addEventListener('mouseenter', handleMouseEnterWindow);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select, .cursor-pointer, .modern-card'
    );
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseleave', handleMouseLeaveWindow);
      window.removeEventListener('mouseenter', handleMouseEnterWindow);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer ring - subtle glow */}
      <motion.div
        className="fixed pointer-events-none z-[49]"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 300,
          mass: 0.6,
        }}
      >
        <motion.div
          className={`w-8 h-8 rounded-full border transition-all duration-200 ${
            isHovering 
              ? 'border-primary/60 bg-primary/5' 
              : 'border-primary/30 bg-primary/0'
          }`}
          animate={{
            scale: isClicking ? 0.8 : isHovering ? 1.4 : 1,
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed pointer-events-none z-[50]"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
        }}
        transition={{
          type: "spring",
          damping: 15,
          stiffness: 500,
          mass: 0.3,
        }}
      >
        <motion.div
          className={`rounded-full transition-colors duration-200 ${
            isHovering ? 'bg-primary' : 'bg-primary/80'
          }`}
          animate={{
            width: isClicking ? 4 : isHovering ? 6 : 6,
            height: isClicking ? 4 : isHovering ? 6 : 6,
          }}
          transition={{ duration: 0.15 }}
        />
      </motion.div>

      {/* Click ripple */}
      {isClicking && (
        <motion.div
          className="fixed pointer-events-none z-[48]"
          style={{
            left: mousePosition.x - 12,
            top: mousePosition.y - 12,
          }}
          initial={{ scale: 0.5, opacity: 0.6 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="w-6 h-6 rounded-full border-2 border-primary" />
        </motion.div>
      )}
    </>
  );
};
