'use client';
import { motion } from 'framer-motion';
import MangaPanel from './MangaPanel';
import { BsLightningChargeFill } from 'react-icons/bs';
import { FaBullseye } from 'react-icons/fa';
import { GiFlowerStar } from 'react-icons/gi';

const panels = [
  {
    number: '02',
    title: 'WHO AM I',
    icon: <BsLightningChargeFill size={36} className="text-white" />,
    content:
      "I'm Sai Shivamani, a dynamic problem solver and AI Engineer focused on building scalable computing systems. I excel at translating complex algorithmic challenges into efficient, production-ready full-stack applications.",
  },
  {
    number: '03',
    title: 'MY PHILOSOPHY',
    icon: <FaBullseye size={36} className="text-white" />,
    content:
      "Logically sound, algorithmically robust. I believe in writing code that scales elegantly. Systems should be designed not just to function, but to adapt, optimize, and withstand the tests of growth and time.",
  },
  {
    number: '04',
    title: 'FUN FACT',
    icon: <GiFlowerStar size={36} className="text-white" />,
    content:
      "When I'm not tackling C++ DSA problems or fine-tuning AI models, I'm watching anime and mentally reverse-engineering fictional magic systems. Both require deep optimization and flawless state management.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 bg-[#0a0a0a] overflow-hidden">
      {/* Background halftone */}
      <div className="absolute inset-0 halftone opacity-10 pointer-events-none" />

      {/* Vertical chapter label */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden lg:block">
        <p className="font-manga text-5xl text-[#1a1a1a] rotate-90 tracking-widest select-none">CHAPTER II</p>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-end gap-6"
        >
          <div>
            <p className="font-mono text-xs tracking-widest text-[#5a5a5a] mb-2">— CHAPTER 02</p>
            <h2 className="font-manga text-6xl md:text-8xl text-white tracking-wide">ABOUT</h2>
          </div>
          <div className="flex-1 h-[2px] bg-gradient-to-r from-white to-transparent mb-4" />
        </motion.div>

        {/* Main panel grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-white">
          {panels.map((panel, i) => (
            <motion.div
              key={panel.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative bg-[#1a1a1a] p-8 group cursor-default
                ${i < panels.length - 1 ? 'lg:border-r border-b lg:border-b-0 border-white' : ''}
              `}
            >
              {/* Corner decoration */}
              <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-[#5a5a5a]" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-[#5a5a5a]" />

              {/* Panel number */}
              <span className="font-manga text-6xl text-[#2e2e2e] absolute top-4 right-6 select-none group-hover:text-[#3e3e3e] transition-colors">
                {panel.number}
              </span>

              {/* Icon */}
              <div className="mb-4">{panel.icon}</div>

              {/* Title */}
              <h3 className="font-manga text-2xl text-white mb-4 tracking-widest">{panel.title}</h3>

              {/* Divider */}
              <div className="w-8 h-[2px] bg-white mb-4 group-hover:w-16 transition-all duration-300" />

              {/* Content */}
              <p className="font-sans text-sm text-[#bfbfbf] leading-relaxed">{panel.content}</p>

              {/* Hover overlay */}
              <motion.div
                className="absolute inset-0 bg-white/[0.02] pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom stats bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-0 border border-t-0 border-white bg-[#0d0d0d] px-8 py-4 flex flex-wrap gap-8 justify-between"
        >
          {[
            { label: 'YEARS EXP ', value: '1+' },
            { label: 'PROJECTS', value: '10+' },
            { label: 'STACK', value: 'MERN / AI' },
            { label: 'UPTIME', value: '99.9%' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-0.5">
              <span className="font-mono text-[10px] text-[#5a5a5a] tracking-widest">{stat.label}</span>
              <span className="font-manga text-2xl text-white">{stat.value}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
