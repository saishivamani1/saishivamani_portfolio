'use client';
import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { FaCode, FaRobot, FaDatabase, FaBrain } from 'react-icons/fa';
import { SiReact } from 'react-icons/si';

const skills = [
  { name: 'Programming Languages', level: 90, icon: <FaCode     size={24} className="text-white" />, desc: 'Python, C++, Java, JavaScript, TypeScript, C' },
  { name: 'Frameworks & Tech',      level: 85, icon: <SiReact    size={24} className="text-white" />, desc: 'React.js, Next.js, Flask, Streamlit, Firebase, Gradio, Spring Boot' },
  { name: 'Machine Learning & AI',  level: 88, icon: <FaRobot    size={24} className="text-white" />, desc: 'Machine Learning, NLP, Transformers, LLMs, Data Analysis' },
  { name: 'Databases',              level: 80, icon: <FaDatabase size={24} className="text-white" />, desc: 'MySQL, MongoDB, Firestore' },
  { name: 'Core Concepts',          level: 95, icon: <FaBrain    size={24} className="text-white" />, desc: 'DSA, Problem Solving, System Design Fundamentals' },
];

function PowerBar({ skill, index }: { skill: typeof skills[0]; index: number }) {
  const barRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!inView || !barRef.current) return;
    gsap.fromTo(
      barRef.current,
      { width: '0%' },
      {
        width: `${skill.level}%`,
        duration: 1.4,
        delay: index * 0.15,
        ease: 'power3.out',
      }
    );
  }, [inView, skill.level, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-8">{skill.icon}</span>
          <div>
            <p className="font-manga text-lg text-white tracking-widest">{skill.name}</p>
            <p className="font-mono text-xs text-[#5a5a5a]">{skill.desc}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-manga text-3xl text-white">{skill.level}</span>
          <span className="font-mono text-xs text-[#5a5a5a]">/ 100</span>
        </div>
      </div>

      {/* Power bar container */}
      <div className="relative h-4 bg-[#1a1a1a] border border-[#2e2e2e] overflow-hidden">
        {/* Tick marks */}
        {[25, 50, 75].map((tick) => (
          <div
            key={tick}
            className="absolute top-0 bottom-0 w-[1px] bg-[#2e2e2e]"
            style={{ left: `${tick}%` }}
          />
        ))}
        {/* Filled bar */}
        <div
          ref={barRef}
          className="absolute top-0 left-0 h-full bg-white"
          style={{ width: '0%' }}
        />
        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
      </div>

      {/* Level label */}
      <div className="flex justify-between mt-1">
        <span className="font-mono text-[10px] text-[#5a5a5a]">POWER LEVEL</span>
        {skill.level >= 90 && (
          <span className="font-mono text-[10px] text-white tracking-widest animate-pulse">★ MASTERED</span>
        )}
        {skill.level >= 80 && skill.level < 90 && (
          <span className="font-mono text-[10px] text-[#bfbfbf] tracking-widest">◆ ADVANCED</span>
        )}
        {skill.level < 80 && (
          <span className="font-mono text-[10px] text-[#5a5a5a] tracking-widest">◇ PROFICIENT</span>
        )}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 bg-black overflow-hidden">
      {/* Background speed lines subtle */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, white 0px, white 1px, transparent 1px, transparent 20px)',
        }}
      />

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
            <p className="font-mono text-xs tracking-widest text-[#5a5a5a] mb-2">— CHAPTER 03</p>
            <h2 className="font-manga text-6xl md:text-8xl text-white tracking-wide">POWER<br />LEVELS</h2>
          </div>
          <div className="flex-1 h-[2px] bg-gradient-to-r from-white to-transparent mb-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Skills list */}
          <div className="border border-[#2e2e2e] bg-[#1a1a1a] p-8 relative">
            {/* Corner decorations */}
            <div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-white" />
            <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-white" />
            <div className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-white" />
            <div className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-white" />

            <div className="mb-6 flex items-center gap-3">
              <span className="font-mono text-xs tracking-widest text-[#5a5a5a] border border-[#2e2e2e] px-2 py-0.5">COMBAT STATS</span>
            </div>

            <div className="flex flex-col gap-8">
              {skills.map((skill, i) => (
                <PowerBar key={skill.name} skill={skill} index={i} />
              ))}
            </div>
          </div>

          {/* Right panel — character card style */}
          <div className="flex flex-col gap-4">
            {/* Character card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border-2 border-white bg-[#1a1a1a] p-6 relative"
            >
              <span className="panel-number">05</span>
              <div className="mt-4">
                <div className="font-manga text-4xl text-white mb-1">SAI SHIVAMANI</div>
                <div className="font-mono text-xs text-[#5a5a5a] mb-4 tracking-widest">CLASS: FULL STACK / AI ENGINEER</div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { stat: 'STR', label: 'Algorithms', val: 'S+' },
                    { stat: 'AGI', label: 'Full Stack', val: 'A+' },
                    { stat: 'INT', label: 'System Design', val: 'S' },
                    { stat: 'DEF', label: 'Optimization', val: 'A+' },
                    { stat: 'MAG', label: 'AI/ML Models', val: 'S' },
                    { stat: 'LUK', label: 'Scalability', val: 'S' },
                  ].map((s) => (
                    <div key={s.stat} className="border border-[#2e2e2e] px-3 py-2 flex justify-between items-center">
                      <div>
                        <div className="font-manga text-sm text-[#5a5a5a]">{s.stat}</div>
                        <div className="font-mono text-[10px] text-[#5a5a5a]">{s.label}</div>
                      </div>
                      <div className="font-manga text-2xl text-white">{s.val}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Tools bubbles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="border border-[#2e2e2e] bg-[#1a1a1a] p-5"
            >
              <p className="font-mono text-xs text-[#5a5a5a] mb-3 tracking-widest">EQUIPMENT / TOOLS</p>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'Next.js', 'Firebase', 'Python', 'C++', 'Transformers', 'MySQL', 'MongoDB', 'Gradio', 'Flask'].map((tool) => (
                  <motion.span
                    key={tool}
                    whileHover={{ scale: 1.05, backgroundColor: '#ffffff', color: '#000000' }}
                    className="font-mono text-xs px-3 py-1 border border-[#2e2e2e] text-[#bfbfbf] bg-[#0d0d0d] cursor-default transition-colors"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
