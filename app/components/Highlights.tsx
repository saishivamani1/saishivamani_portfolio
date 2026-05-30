'use client';
import { motion } from 'framer-motion';
import { SiLeetcode } from 'react-icons/si';
import { FaRobot, FaCloud, FaTrophy } from 'react-icons/fa';

const highlights = [
  {
    id: '01',
    value: '700+',
    label: 'LeetCode Problems Solved',
    icon: <SiLeetcode className="text-white" size={24} />,
    sub: 'DSA & Algorithms',
  },
  {
    id: '02',
    value: '6+',
    label: 'AI & NLP Projects',
    icon: <FaRobot className="text-white" size={24} />,
    sub: 'ML · Transformers · LLMs',
  },
  {
    id: '03',
    value: 'Cloud',
    label: '& DevOps Enthusiast',
    icon: <FaCloud className="text-white" size={24} />,
    sub: 'AWS · Docker · Linux',
  },
  {
    id: '04',
    value: '10+',
    label: 'Hackathons',
    icon: <FaTrophy className="text-white" size={24} />,
    sub: 'Adobe & Industry Challenges',
  },
];

export default function Highlights() {
  return (
    <section className="relative py-12 bg-black border-t border-[#1a1a1a]">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((h, i) => (
            <motion.div
              key={h.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-[#1a1a1a] border border-[#2e2e2e] p-5 group hover:border-white transition-colors duration-300"
            >
              {/* Corner decorations */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[#3e3e3e] group-hover:border-white transition-colors duration-300" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-[#3e3e3e] group-hover:border-white transition-colors duration-300" />

              {/* Panel number */}
              <span className="font-manga text-3xl text-[#2e2e2e] absolute top-3 right-4 select-none">{h.id}</span>

              {/* Icon */}
              <div className="mb-3 flex items-center h-8">{h.icon}</div>

              {/* Value */}
              <p className="font-manga text-3xl text-white tracking-widest mb-0.5">{h.value}</p>

              {/* Label */}
              <p className="font-mono text-xs text-[#bfbfbf] leading-snug">{h.label}</p>

              {/* Sub label */}
              <p className="font-mono text-[10px] text-[#5a5a5a] mt-1 tracking-widest">{h.sub}</p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
