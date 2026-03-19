'use client';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface MangaPanelProps {
  children: ReactNode;
  number?: number | string;
  className?: string;
  thick?: boolean;
  delay?: number;
  halftone?: boolean;
}

export default function MangaPanel({
  children,
  number,
  className = '',
  thick = false,
  delay = 0,
  halftone = false,
}: MangaPanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`relative bg-[#1a1a1a] ${thick ? 'manga-border-thick' : 'manga-border'} overflow-hidden ${className}`}
    >
      {halftone && (
        <div className="absolute inset-0 halftone opacity-30 pointer-events-none" />
      )}
      {number !== undefined && (
        <span className="panel-number">{number}</span>
      )}
      {children}
    </motion.div>
  );
}
