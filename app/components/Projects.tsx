'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: '01',
    title: 'PRODUCT SHOWCASE WEBSITE',
    subtitle: 'Full Stack Development',
    description:
      'Developed and deployed a responsive product showcase platform covering aerospace, defense, mechanical, electro-mechanical, and agriculture sectors. Integrated Firebase and EmailJS for seamless backend communication.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Firebase', 'EmailJS'],
    status: 'DEPLOYED',
    github: 'https://github.com/saishivamani1',
    live: 'https://sridattadmvengineering.com',
    lines: '10K+',
  },
  {
    id: '02',
    title: 'AI NUTRITION PREDICTION',
    subtitle: 'Health Analysis System',
    description:
      'Built an intelligent health analysis system using Python and Google Fit API. Processes user data to generate personalized nutrition insights and provides real-time health recommendations.',
    tech: ['Python', 'Flask', 'AI/ML', 'Google Fit API'],
    status: 'ACTIVE',
    github: 'https://github.com/saishivamani1',
    live: 'https://github.com',
    lines: '5K+',
  },
  {
    id: '03',
    title: 'IT INCIDENT SUMMARIZATION',
    subtitle: 'Autonomous AI Agent',
    description:
      'Developed an AI system using NLP and LLMs to summarize IT incidents. Combines logs, alerts, and historical ticket data to predict root causes with ~83% accuracy.',
    tech: ['Python', 'Transformers', 'Hugging Face', 'Firebase', 'Gradio', 'React'],
    status: 'ACTIVE',
    github: 'https://github.com/saishivamani1',
    live: 'https://github.com',
    lines: '8K+',
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative group cursor-default"
    >
      {/* Comic burst on hover */}
      {hovered && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className="absolute -top-4 -right-4 z-20 bg-white text-black font-manga text-sm px-2 py-1"
          style={{ transform: 'rotate(8deg)' }}
        >
          VIEW!
        </motion.div>
      )}

      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-[#1a1a1a] border-2 border-white overflow-hidden h-full"
        style={{
          boxShadow: hovered ? '8px 8px 0 white' : '4px 4px 0 rgba(255,255,255,0.3)',
          transition: 'box-shadow 0.3s ease',
        }}
      >
        {/* Panel number */}
        <div className="absolute top-3 left-4 font-manga text-4xl text-[#2e2e2e] select-none group-hover:text-[#3a3a3a] transition-colors">
          {project.id}
        </div>

        {/* Status badge */}
        <div className="absolute top-4 right-4">
          <span className="font-mono text-[10px] tracking-widest border border-white px-2 py-0.5 text-white">
            ● {project.status}
          </span>
        </div>

        {/* Halftone top stripe */}
        <div className="h-2 bg-white" />

        <div className="p-6 pt-12">
          {/* Subtitle */}
          <p className="font-mono text-xs text-[#5a5a5a] tracking-widest mb-1">{project.subtitle}</p>

          {/* Title */}
          <h3 className="font-manga text-2xl text-white tracking-widest mb-4 leading-tight">
            {project.title}
          </h3>

          {/* Description */}
          <p className="font-sans text-sm text-[#bfbfbf] leading-relaxed mb-6">{project.description}</p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tech.map((t) => (
              <span key={t} className="font-mono text-[10px] px-2 py-0.5 bg-[#2e2e2e] text-[#bfbfbf] border border-[#3e3e3e]">
                {t}
              </span>
            ))}
          </div>

          {/* Stats & links */}
          <div className="flex items-center justify-between border-t border-[#2e2e2e] pt-4">
            <div>
              <p className="font-mono text-[10px] text-[#5a5a5a]">LINES OF CODE</p>
              <p className="font-manga text-xl text-white">{project.lines}</p>
            </div>
            <div className="flex gap-3">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, backgroundColor: '#ffffff', color: '#000000' }}
                className="font-mono text-xs px-3 py-1.5 border border-[#5a5a5a] text-[#bfbfbf] transition-colors"
              >
                GITHUB
              </motion.a>
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="font-mono text-xs px-3 py-1.5 bg-white text-black font-bold"
              >
                LIVE →
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 bg-[#0a0a0a] overflow-hidden">
      {/* Diagonal stripes bg */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(-45deg, white 0, white 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-end gap-6"
        >
          <div>
            <p className="font-mono text-xs tracking-widest text-[#5a5a5a] mb-2">— CHAPTER 04</p>
            <h2 className="font-manga text-6xl md:text-8xl text-white tracking-wide">BATTLE<br />LOGS</h2>
          </div>
          <div className="flex-1 h-[2px] bg-gradient-to-r from-white to-transparent mb-4" />
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        {/* More work CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex justify-center"
        >
          <motion.a
            href="https://github.com/saishivamani1"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="font-mono text-sm font-bold px-8 py-3 border-2 border-white text-white tracking-widest hover:bg-white hover:text-black transition-colors"
          >
            VIEW ALL ON GITHUB →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
