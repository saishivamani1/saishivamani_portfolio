'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SpeedLines from './SpeedLines';

const roles = ['Full Stack Developer', 'Problem Solver', 'AI Engineer'];

function TypingText({ texts }: { texts: string[] }) {
  const [displayed, setDisplayed] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const [phase, setPhase] = useState<'typing' | 'pausing' | 'erasing'>('typing');

  useEffect(() => {
    const current = texts[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === 'typing') {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70);
      } else {
        timeout = setTimeout(() => setPhase('pausing'), 1800);
      }
    } else if (phase === 'pausing') {
      timeout = setTimeout(() => setPhase('erasing'), 400);
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIdx((i) => (i + 1) % texts.length);
        setPhase('typing');
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, phase, roleIdx, texts]);

  return (
    <span className="text-[#bfbfbf]">
      {displayed}
      <span className="cursor-blink text-white">|</span>
    </span>
  );
}

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-black"
    >
      {/* Speed lines bg */}
      <SpeedLines opacity={0.06} />

      {/* Halftone overlay bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-48 halftone opacity-20 pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-24 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT — Intro text */}
        <div className="flex flex-col gap-6">
          {/* Chapter badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 border border-[#2e2e2e] px-4 py-1.5 w-fit"
          >
            <span className="w-2 h-2 bg-white rounded-full" />
            <span className="font-mono text-xs tracking-widest text-[#bfbfbf] uppercase">Chapter 01 — Introduction</span>
          </motion.div>

          {/* Speech bubble */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="speech-bubble px-5 py-4 max-w-xs"
          >
            <p className="font-mono text-sm font-bold text-black leading-relaxed">
              &quot;Ready to ship scalable software systems faster than a <span className="underline">Kamehameha</span>.&quot;
            </p>
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            <p className="font-mono text-sm text-[#5a5a5a] tracking-widest mb-2">Hi, I&apos;m —</p>
            <h1 className="font-manga text-5xl md:text-7xl text-white leading-none tracking-wide mb-4">
              SAI<br />
              <span className="text-[#f5f5f5]">SHIVAMANI</span>
            </h1>

            {/* Divider lines */}
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-16 bg-white" />
              <div className="h-[1px] w-8 bg-[#5a5a5a]" />
            </div>

            <div className="font-mono text-lg text-white font-bold h-8">
              <TypingText texts={roles} />
            </div>
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-2"
          >
            {['Full Stack 💻', 'C++ DSA ⚔️', 'AI 🤖'].map((tag) => (
              <span key={tag} className="font-mono text-xs px-3 py-1.5 border border-[#2e2e2e] text-[#bfbfbf] bg-[#1a1a1a]">
                {tag}
              </span>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 mt-2"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="manga-border bg-white text-black font-mono text-sm font-bold px-6 py-3 tracking-widest hover:bg-[#f5f5f5] transition-colors cursor-pointer"
            >
              VIEW WORK →
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="border border-[#5a5a5a] text-white font-mono text-sm font-bold px-6 py-3 tracking-widest hover:border-white transition-colors cursor-pointer"
            >
              CONTACT ME
            </motion.a>
          </motion.div>
        </div>

        {/* RIGHT — Anime portrait */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex justify-center items-center"
        >
          {/* Outer panel */}
          <div className="relative manga-border-thick bg-[#1a1a1a] p-3 max-w-sm w-full">
            {/* Panel number */}
            <span className="panel-number">01</span>
            {/* Corner bracket decorations */}
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-white" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-white" />

            <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#2e2e2e]">
              <Image
                src="/portrait.png"
                alt="Sai Shivamani — Anime Portrait"
                fill
                className="object-cover object-top grayscale"
                priority
              />
              {/* Scan-lines overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.08) 3px, rgba(0,0,0,0.08) 4px)',
                }}
              />
              {/* Bottom gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#1a1a1a] to-transparent" />
              {/* Name overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <p className="font-manga text-lg text-white tracking-widest">SAI SHIVAMANI</p>
                <p className="font-mono text-xs text-[#bfbfbf]">Full Stack • C++ DSA • AI</p>
              </div>
            </div>

            {/* Stats bar */}
            <div className="mt-3 flex justify-between px-2">
              {['LVL 99', 'FULL STACK', 'C++ DSA', 'AI'].map((stat) => (
                <span key={stat} className="font-mono text-[10px] text-[#5a5a5a] tracking-wider">{stat}</span>
              ))}
            </div>
          </div>

          {/* Floating badge */}
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            className="absolute -top-4 -right-4 bg-white text-black font-manga text-xl px-3 py-1 rotate-12 shadow-lg"
          >
            AVAILABLE!
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] tracking-widest text-[#5a5a5a]">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-[1px] h-8 bg-gradient-to-b from-[#5a5a5a] to-transparent"
        />
      </motion.div>
    </section>
  );
}
