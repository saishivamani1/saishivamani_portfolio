'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface SpeedLinesProps {
  className?: string;
  opacity?: number;
  animated?: boolean;
}

interface LineData {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

/** Round to 4 decimal places to avoid floating-point serialization drift */
function round(n: number): number {
  return Math.round(n * 10_000) / 10_000;
}

function generateLines(): LineData[] {
  const cx = 50;
  const cy = 50;
  const numLines = 72;
  const r1 = 15;
  const r2 = 100;

  return Array.from({ length: numLines }, (_, i) => {
    const angle = (i / numLines) * 360;
    const rad = (angle * Math.PI) / 180;
    return {
      x1: round(cx + r1 * Math.cos(rad)),
      y1: round(cy + r1 * Math.sin(rad)),
      x2: round(cx + r2 * Math.cos(rad)),
      y2: round(cy + r2 * Math.sin(rad)),
    };
  });
}

export default function SpeedLines({
  className = '',
  opacity = 0.07,
  animated = false,
}: SpeedLinesProps) {
  // Null on the server / first render; populated only after mount on the client.
  // This prevents any SSR ↔ client attribute mismatch.
  const [lines, setLines] = useState<LineData[] | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  // Generate line data client-side only
  useEffect(() => {
    setLines(generateLines());
  }, []);

  // Run GSAP animation once lines are available
  useEffect(() => {
    if (!animated || !lines || !svgRef.current) return;
    const lineEls = svgRef.current.querySelectorAll('line');
    gsap.fromTo(
      lineEls,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.8,
        stagger: { each: 0.01, from: 'random' },
        ease: 'power2.out',
      }
    );
  }, [animated, lines]); // re-run when lines are ready

  // Render nothing until client has mounted — avoids hydration mismatch
  if (!lines) return null;

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ opacity }}
      preserveAspectRatio="xMidYMid slice"
    >
      {lines.map((line, i) => (
        <line
          key={i}
          x1={line.x1}
          y1={line.y1}
          x2={line.x2}
          y2={line.y2}
          stroke="white"
          strokeWidth={i % 6 === 0 ? '0.5' : '0.2'}
        />
      ))}
    </svg>
  );
}
