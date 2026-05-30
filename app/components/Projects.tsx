'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const veroFeatures = [
  'Intelligent Technician Assignment',
  'Workforce Optimization Engine',
  'AI-Assisted Negotiation Workflow',
  'Real-Time Task Coordination',
  'Dashboard-Based Management',
  'Scalable Microservice Architecture',
];

const adobeFeatures = [
  'Automatic Heading Detection',
  'Hierarchical Structure Extraction',
  'Font Normalization Pipeline',
  'Layout Analysis Engine',
  'NLP-Based Classification',
  'Structured JSON/XML Output',
];

const technicalFlow = [
  'PDF Input',
  'Text Extraction',
  'Layout Analysis',
  'Heading Classification',
  'Structured Output',
];

function FeatureList({ features }: { features: string[] }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
      {features.map((f) => (
        <li key={f} className="flex items-start gap-2">
          <span className="font-mono text-[10px] text-white mt-0.5">▸</span>
          <span className="font-mono text-xs text-[#bfbfbf]">{f}</span>
        </li>
      ))}
    </ul>
  );
}

function DetailRow({ label, content }: { label: string; content: string }) {
  return (
    <div className="border-t border-[#2e2e2e] pt-3">
      <p className="font-mono text-[10px] text-[#5a5a5a] tracking-widest mb-1">{label}</p>
      <p className="font-sans text-sm text-[#bfbfbf] leading-relaxed">{content}</p>
    </div>
  );
}

const projects = [
  {
    id: '03',
    title: 'PRODUCT SHOWCASE WEBSITE',
    subtitle: 'Full Stack Development',
    description:
      'Developed and deployed a responsive product showcase platform covering aerospace, defense, mechanical, electro-mechanical, and agriculture sectors. Integrated Firebase and EmailJS for seamless backend communication.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Firebase', 'EmailJS'],
    status: 'DEPLOYED',
    github: 'https://github.com/saishivamani1',
    live: 'https://sridattadmvengineering.com',
    lines: '10K+',
    problem: 'Engineering firm lacked a professional digital presence to showcase multi-sector product lines to global clients.',
    solution: 'Built a fully responsive multi-sector showcase with Firebase backend and EmailJS contact integration.',
    impact: 'Live platform serving real business needs across aerospace, defense, and agricultural engineering sectors.',
  },
  {
    id: '04',
    title: 'AI NUTRITION PREDICTION',
    subtitle: 'Health Analysis System',
    description:
      'Built an intelligent health analysis system using Python and Google Fit API. Processes user data to generate personalized nutrition insights and provides real-time health recommendations.',
    tech: ['Python', 'Flask', 'AI/ML', 'Google Fit API'],
    status: 'ACTIVE',
    github: 'https://github.com/saishivamani1',
    live: 'https://github.com/saishivamani1',
    lines: '5K+',
    problem: 'Generic nutrition apps fail to account for individual health data and real-time fitness metrics.',
    solution: 'Integrated Google Fit API with ML models to generate personalized, data-driven nutrition recommendations.',
    impact: 'Demonstrates applied AI in healthcare with real-time data ingestion and actionable nutritional insights.',
  },
  {
    id: '05',
    title: 'IT INCIDENT SUMMARIZATION',
    subtitle: 'Autonomous AI Agent',
    description:
      'Developed an AI system using NLP and LLMs to summarize IT incidents. Combines logs, alerts, and historical ticket data to predict root causes with ~83% accuracy.',
    tech: ['Python', 'Transformers', 'Hugging Face', 'Firebase', 'Gradio', 'React'],
    status: 'ACTIVE',
    github: 'https://github.com/saishivamani1',
    live: 'https://github.com/saishivamani1',
    lines: '8K+',
    problem: 'IT teams waste hours manually reading through logs and incident tickets to identify root causes.',
    solution: 'Built an NLP pipeline using Transformers and LLMs to automatically summarize incidents and predict root causes.',
    impact: '~83% root cause prediction accuracy, reducing MTTR and improving on-call engineer efficiency.',
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
        className="relative bg-[#1a1a1a] border-2 border-white overflow-hidden h-full flex flex-col"
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

        <div className="p-6 pt-12 flex flex-col flex-1">
          {/* Subtitle */}
          <p className="font-mono text-xs text-[#5a5a5a] tracking-widest mb-1">{project.subtitle}</p>

          {/* Title */}
          <h3 className="font-manga text-2xl text-white tracking-widest mb-4 leading-tight">
            {project.title}
          </h3>

          {/* Description */}
          <p className="font-sans text-sm text-[#bfbfbf] leading-relaxed mb-5">{project.description}</p>

          {/* Problem / Solution / Impact */}
          <div className="flex flex-col gap-3 mb-5">
            <div className="border-t border-[#2e2e2e] pt-3">
              <p className="font-mono text-[10px] text-[#5a5a5a] tracking-widest mb-1">PROBLEM</p>
              <p className="font-sans text-xs text-[#bfbfbf] leading-relaxed">{project.problem}</p>
            </div>
            <div className="border-t border-[#2e2e2e] pt-3">
              <p className="font-mono text-[10px] text-[#5a5a5a] tracking-widest mb-1">SOLUTION</p>
              <p className="font-sans text-xs text-[#bfbfbf] leading-relaxed">{project.solution}</p>
            </div>
            <div className="border-t border-[#2e2e2e] pt-3">
              <p className="font-mono text-[10px] text-[#5a5a5a] tracking-widest mb-1">IMPACT</p>
              <p className="font-sans text-xs text-[#bfbfbf] leading-relaxed">{project.impact}</p>
            </div>
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tech.map((t) => (
              <span key={t} className="font-mono text-[10px] px-2 py-0.5 bg-[#2e2e2e] text-[#bfbfbf] border border-[#3e3e3e]">
                {t}
              </span>
            ))}
          </div>

          {/* Stats & links */}
          <div className="flex items-center justify-between border-t border-[#2e2e2e] pt-4 mt-auto">
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

        {/* --- SUB-SECTION 1: FEATURED WORK --- */}
        <div className="mb-20">
          <p className="font-mono text-xs tracking-widest text-[#5a5a5a] mb-8 border-b border-[#2e2e2e] pb-2 uppercase">
            [ MISSION LOGS: FEATURED WORK ]
          </p>

          <div className="flex flex-col gap-10">
            {/* ── PROJECT 1: VERO ── */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-[#1a1a1a] border-2 border-white overflow-hidden"
              style={{ boxShadow: '6px 6px 0 rgba(255,255,255,0.25)' }}
            >
              {/* Top stripe */}
              <div className="h-2 bg-white" />

              {/* Panel number + Status */}
              <div className="absolute top-6 left-6 font-manga text-5xl text-[#2e2e2e] select-none">01</div>
              <div className="absolute top-6 right-6 flex flex-col items-end gap-2">
                <span className="font-mono text-[10px] tracking-widest border border-white px-2 py-0.5 text-white">● DEPLOYED</span>
              </div>

              <div className="p-8 pt-14 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left — main info */}
                <div className="lg:col-span-2 flex flex-col gap-5">
                  {/* Subtitle */}
                  <p className="font-mono text-xs text-[#5a5a5a] tracking-widest">AI-Powered Workforce Optimization</p>

                  {/* Title */}
                  <h3 className="font-manga text-3xl md:text-4xl text-white tracking-widest leading-tight">
                    VERO — AI TECHNICIAN NEGOTIATION<br className="hidden md:block" /> & WORKFORCE ALLOCATION
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-sm text-[#bfbfbf] leading-relaxed">
                    Developed an AI-powered workforce allocation and technician negotiation platform designed to optimize task assignment and technician coordination.
                    The platform improves workforce efficiency through intelligent decision support, task management, and negotiation workflows.
                  </p>

                  {/* Highlight callout */}
                  <div className="border-l-2 border-white bg-[#0d0d0d] px-4 py-3">
                    <p className="font-mono text-xs text-[#bfbfbf] leading-relaxed">
                      Built to solve workforce allocation inefficiencies through AI-powered technician-task matching and intelligent negotiation workflows.
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <p className="font-mono text-[10px] text-[#5a5a5a] tracking-widest mb-3">KEY FEATURES</p>
                    <FeatureList features={veroFeatures} />
                  </div>

                  {/* Detail rows */}
                  <div className="flex flex-col gap-3">
                    <DetailRow
                      label="PROBLEM"
                      content="Workforce coordinators struggled with manual task assignment causing delays, mismatches, and negotiation inefficiencies across field technicians."
                    />
                    <DetailRow
                      label="SOLUTION"
                      content="Built an AI-driven platform that automatically matches technicians to tasks based on skills, availability, and proximity — with an intelligent negotiation layer."
                    />
                    <DetailRow
                      label="IMPACT"
                      content="Reduces task assignment time and improves technician utilization through data-driven workforce intelligence and real-time coordination."
                    />
                  </div>
                </div>

                {/* Right — tech + buttons */}
                <div className="flex flex-col gap-5">
                  {/* Tech stack */}
                  <div>
                    <p className="font-mono text-[10px] text-[#5a5a5a] tracking-widest mb-3">TECHNOLOGIES</p>
                    <div className="flex flex-wrap gap-1.5">
                      {['React', 'FastAPI', 'Python', 'AI/ML', 'REST APIs', 'Vercel', 'Docker'].map((t) => (
                        <span key={t} className="font-mono text-[10px] px-2 py-0.5 bg-[#0d0d0d] text-[#bfbfbf] border border-[#3e3e3e]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col gap-3 mt-auto">
                    <motion.a
                      href="https://vero-frontend-mu.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="font-mono text-sm font-bold px-4 py-3 bg-white text-black tracking-widest text-center hover:bg-[#f5f5f5] transition-colors"
                    >
                      LIVE DEMO →
                    </motion.a>
                    <motion.a
                      href="https://github.com/saishivamani1/Vero-AI-Technician-Negotiation-System-"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02, backgroundColor: '#ffffff', color: '#000000' }}
                      whileTap={{ scale: 0.98 }}
                      className="font-mono text-sm font-bold px-4 py-3 border border-[#5a5a5a] text-[#bfbfbf] tracking-widest text-center transition-colors"
                    >
                      GITHUB
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ── PROJECT 2: ADOBE HACKATHON ── */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-[#1a1a1a] border-2 border-white overflow-hidden"
              style={{ boxShadow: '6px 6px 0 rgba(255,255,255,0.25)' }}
            >
              {/* Top stripe */}
              <div className="h-2 bg-white" />

              {/* Panel number + Badges */}
              <div className="absolute top-6 left-6 font-manga text-5xl text-[#2e2e2e] select-none">02</div>
              <div className="absolute top-6 right-6 flex flex-col items-end gap-2">
                <span className="font-mono text-[10px] tracking-widest border border-white px-2 py-0.5 text-white">● HACKATHON</span>
                <span className="font-mono text-[10px] tracking-widest bg-white text-black px-2 py-0.5 font-bold">
                  🏆 ADOBE INDIA HACKATHON
                </span>
              </div>

              <div className="p-8 pt-14 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left — main info */}
                <div className="lg:col-span-2 flex flex-col gap-5">
                  {/* Subtitle */}
                  <p className="font-mono text-xs text-[#5a5a5a] tracking-widest">Document AI & NLP Processing</p>

                  {/* Title */}
                  <h3 className="font-manga text-3xl md:text-4xl text-white tracking-widest leading-tight">
                    ADOBE INDIA HACKATHON —<br className="hidden md:block" /> INTELLIGENT PDF HEADING EXTRACTION
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-sm text-[#bfbfbf] leading-relaxed">
                    Developed an intelligent PDF Heading Extraction System for automated document understanding and content structuring.
                    The system identifies and extracts hierarchical headings using layout analysis, font normalization, and NLP-based processing techniques.
                  </p>

                  {/* Highlight callout */}
                  <div className="border-l-2 border-white bg-[#0d0d0d] px-4 py-3">
                    <p className="font-mono text-xs text-[#bfbfbf] leading-relaxed">
                      Built as part of Adobe India Hackathon to improve document understanding and automated content structuring.
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <p className="font-mono text-[10px] text-[#5a5a5a] tracking-widest mb-3">KEY FEATURES</p>
                    <FeatureList features={adobeFeatures} />
                  </div>

                  {/* Detail rows */}
                  <div className="flex flex-col gap-3">
                    <DetailRow
                      label="PROBLEM"
                      content="PDFs lack structural metadata, making it difficult to programmatically extract document hierarchy and headings for downstream processing."
                    />
                    <DetailRow
                      label="SOLUTION"
                      content="Built a multi-stage NLP pipeline combining layout analysis, font normalization, and heading classification to extract hierarchical document structure."
                    />
                    <DetailRow
                      label="IMPACT"
                      content="Enables automated document indexing, content summarization, and intelligent search — critical for enterprise document management at scale."
                    />
                  </div>
                </div>

                {/* Right — flow + tech + buttons */}
                <div className="flex flex-col gap-5">
                  {/* Technical Flow */}
                  <div>
                    <p className="font-mono text-[10px] text-[#5a5a5a] tracking-widest mb-3">TECHNICAL FLOW</p>
                    <div className="flex flex-col gap-0 border border-[#2e2e2e] bg-[#0d0d0d]">
                      {technicalFlow.map((step, idx) => (
                        <div key={step}>
                          <div className="px-4 py-2.5 flex items-center gap-3">
                            <span className="font-manga text-sm text-[#5a5a5a]">{String(idx + 1).padStart(2, '0')}</span>
                            <span className="font-mono text-xs text-[#bfbfbf]">{step}</span>
                          </div>
                          {idx < technicalFlow.length - 1 && (
                            <div className="flex justify-center py-0.5">
                              <span className="font-mono text-xs text-[#5a5a5a]">↓</span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div>
                    <p className="font-mono text-[10px] text-[#5a5a5a] tracking-widest mb-3">TECHNOLOGIES</p>
                    <div className="flex flex-wrap gap-1.5">
                      {['Python', 'NLP', 'PyMuPDF', 'Transformers', 'Layout Analysis', 'JSON'].map((t) => (
                        <span key={t} className="font-mono text-[10px] px-2 py-0.5 bg-[#0d0d0d] text-[#bfbfbf] border border-[#3e3e3e]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col gap-3 mt-auto">
                    <motion.a
                      href="https://github.com/saishivamani1/Adobe_India_Hackathon"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="font-mono text-sm font-bold px-4 py-3 bg-white text-black tracking-widest text-center hover:bg-[#f5f5f5] transition-colors"
                    >
                      GITHUB →
                    </motion.a>
                    <motion.a
                      href="https://github.com/saishivamani1/Adobe_India_Hackathon"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02, backgroundColor: '#ffffff', color: '#000000' }}
                      whileTap={{ scale: 0.98 }}
                      className="font-mono text-sm font-bold px-4 py-3 border border-[#5a5a5a] text-[#bfbfbf] tracking-widest text-center transition-colors"
                    >
                      LEARN MORE
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* --- SUB-SECTION 2: SIDE PROJECTS --- */}
        <div>
          <p className="font-mono text-xs tracking-widest text-[#5a5a5a] mb-8 border-b border-[#2e2e2e] pb-2 uppercase">
            [ MISSION LOGS: OTHER WORK ]
          </p>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
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
