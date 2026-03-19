'use client';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-[#1a1a1a] py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo / Name */}
        <div className="flex items-center gap-3">
          <span className="font-manga text-xl tracking-widest text-white">SAI_SHIVAMANI</span>
          <span className="w-1 h-1 bg-[#5a5a5a] rounded-full" />
          <span className="font-mono text-xs text-[#5a5a5a]">Sai Shivamani</span>
        </div>

        {/* Center text */}
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
          <span className="font-mono text-xs text-[#5a5a5a] tracking-widest">
            BUILT WITH NEXT.JS • FRAMER MOTION • MANGA
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-4">
          {[
            { label: 'GH', href: 'https://github.com/saishivamani1' },
            { label: 'LI', href: 'https://www.linkedin.com/in/saishivamani1/' },
            { label: 'LC', href: 'https://leetcode.com/u/sai_shivamani1/' },
          ].map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="font-mono text-xs text-[#5a5a5a] hover:text-white transition-colors border border-[#2e2e2e] px-2 py-1 hover:border-white"
            >
              {link.label}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Bottom manga credits */}
      <div className="max-w-7xl mx-auto mt-6 pt-6 border-t border-[#1a1a1a] flex justify-center">
        <p className="font-mono text-[10px] text-[#2e2e2e] tracking-widest">
          © 2026 SAI SHIVAMANI • ALL PANELS RESERVED • VOL. 1 CHAPTER 7 — END
        </p>
      </div>
    </footer>
  );
}
