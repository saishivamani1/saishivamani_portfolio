"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useSpring } from "framer-motion";

export default function MangaCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  // Track raw position
  const mouse = useRef({ x: 0, y: 0 });

  // Spring configuration for sharp but smooth easing (lag effect)
  const pointerSpringConfig = { damping: 25, stiffness: 450, mass: 0.15 };
  
  const pointerX = useSpring(0, pointerSpringConfig);
  const pointerY = useSpring(0, pointerSpringConfig);

  useEffect(() => {
    // Only run on client
    if (typeof window === "undefined") return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      
      mouse.current = { x: e.clientX, y: e.clientY };
      pointerX.set(e.clientX);
      pointerY.set(e.clientY);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        window.getComputedStyle(target).cursor === "pointer"
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [pointerX, pointerY, isVisible]);

  // Prevent server-side hydration errors
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <>
      {/* Hide generic cursor globally */}
      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>
      
      <div 
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]" 
        style={{ opacity: isVisible ? 1 : 0, display: "block", transition: "opacity 0.3s ease" }}
      >
        {/* Pointer Position Tracker */}
        <motion.div
          className="absolute top-0 left-0"
          style={{ x: pointerX, y: pointerY, translateX: '-2px', translateY: '-2px' }}
        >
          {/* Main Pointer Triangle container. Subtle scale/tilt on hover.*/}
          <motion.div 
            className="origin-[5%_5%] drop-shadow-[1px_2px_0_rgba(0,0,0,0.8)] relative"
            animate={{
              scale: isHovering ? 1.2 : 1,
              rotate: isHovering ? -8 : 0,
            }}
            transition={{ type: "spring", stiffness: 450, damping: 20 }}
          >
            {/* Default Arrow Pointer — 20×20 (close to native cursor size) */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ pointerEvents: 'none' }}
            >
              {/* Thick ink stroke body */}
              <path
                d="M5 4L15 35L21 21L36 26L5 4Z"
                fill="#ffffff"
                stroke="#000000"
                strokeWidth="3.5"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              {/* Hand-drawn manga shading / hash lines inside */}
              <path
                d="M9 13L16 11M9 18L18 15M10 23L17 21M12 28L16 26"
                stroke="#1a1a1a"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M6 8L10 6"
                stroke="#1a1a1a"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
