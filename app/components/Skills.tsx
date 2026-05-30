'use client';
import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { FaCode, FaRobot, FaDatabase, FaCloud, FaServer } from 'react-icons/fa';
import { SiReact } from 'react-icons/si';

const skillCategories = [
  {
    id: '01',
    name: 'Languages',
    icon: <FaCode size={20} className="text-white" />,
    items: ['Python', 'C++', 'JavaScript', 'SQL'],
    level: 90,
  },
  {
    id: '02',
    name: 'AI & Machine Learning',
    icon: <FaRobot size={20} className="text-white" />,
    items: ['NLP', 'Hugging Face', 'Transformers', 'FAISS'],
    level: 88,
  },
  {
    id: '03',
    name: 'Backend',
    icon: <FaServer size={20} className="text-white" />,
    items: ['FastAPI', 'Flask', 'REST APIs'],
    level: 85,
  },
  {
    id: '04',
    name: 'Frontend',
    icon: <SiReact size={20} className="text-white" />,
    items: ['React', 'Tailwind CSS', 'HTML', 'CSS'],
    level: 82,
  },
  {
    id: '05',
    name: 'Database',
    icon: <FaDatabase size={20} className="text-white" />,
    items: ['MySQL', 'SQLite'],
    level: 80,
  },
  {
    id: '06',
    name: 'Cloud & DevOps',
    icon: <FaCloud size={20} className="text-white" />,
    items: ['AWS', 'Docker', 'Linux', 'Git', 'GitHub Actions'],
    level: 78,
  },
];

function PowerBar({ skill, index }: { skill: typeof skillCategories[0]; index: number }) {
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
        delay: index * 0.12,
        ease: 'power3.out',
      }
    );
  }, [inView, skill.level, index]);

  const levelLabel =
    skill.level >= 90 ? '★ MASTERED' :
    skill.level >= 82 ? '◆ ADVANCED' :
    '◇ PROFICIENT';

  const levelColor =
    skill.level >= 90 ? 'text-white animate-pulse' :
    skill.level >= 82 ? 'text-[#bfbfbf]' :
    'text-[#5a5a5a]';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-7">{skill.icon}</span>
          <div>
            <p className="font-manga text-base text-white tracking-widest">{skill.name}</p>
            <p className="font-mono text-[10px] text-[#5a5a5a]">{skill.items.join(' · ')}</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="font-manga text-2xl text-white">{skill.level}</span>
          <span className="font-mono text-[10px] text-[#5a5a5a]">/ 100</span>
        </div>
      </div>

      {/* Power bar */}
      <div className="relative h-3 bg-[#1a1a1a] border border-[#2e2e2e] overflow-hidden">
        {[25, 50, 75].map((tick) => (
          <div
            key={tick}
            className="absolute top-0 bottom-0 w-[1px] bg-[#2e2e2e]"
            style={{ left: `${tick}%` }}
          />
        ))}
        <div
          ref={barRef}
          className="absolute top-0 left-0 h-full bg-white"
          style={{ width: '0%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
      </div>

      <div className="flex justify-between mt-1">
        <span className="font-mono text-[10px] text-[#5a5a5a]">POWER LEVEL</span>
        <span className={`font-mono text-[10px] tracking-widest ${levelColor}`}>{levelLabel}</span>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 bg-black overflow-hidden">
      {/* Background subtle lines */}
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

            <div className="flex flex-col gap-6">
              {skillCategories.map((skill, i) => (
                <PowerBar key={skill.name} skill={skill} index={i} />
              ))}
            </div>
          </div>

          {/* Right panel — character card */}
          <div className="flex flex-col gap-4">
            {/* Character card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border-2 border-white bg-[#1a1a1a] p-6 relative"
            >
              <span className="panel-number">03</span>
              <div className="mt-4">
                <div className="font-manga text-4xl text-white mb-1">SAI SHIVAMANI</div>
                <div className="font-mono text-xs text-[#5a5a5a] mb-4 tracking-widest">CLASS: SOFTWARE ENGINEER / AI SYSTEMS</div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { stat: 'STR', label: 'Algorithms', val: 'S+' },
                    { stat: 'AGI', label: 'Full-Stack', val: 'A+' },
                    { stat: 'INT', label: 'AI / NLP', val: 'S' },
                    { stat: 'DEF', label: 'Cloud / DevOps', val: 'A' },
                    { stat: 'MAG', label: 'LLMs & NLP', val: 'S' },
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
                {[
                  'Python', 'C++', 'React', 'FastAPI', 'Flask',
                  'Hugging Face', 'Transformers', 'FAISS',
                  'AWS', 'Docker', 'MySQL', 'Git', 'GitHub Actions',
                ].map((tool) => (
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
