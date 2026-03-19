'use client';
import { useState, useRef, useEffect, KeyboardEvent } from 'react';
import { motion } from 'framer-motion';

const COMMANDS: Record<string, string[]> = {
  help: [
    '╔════════════════════════════════════════╗',
    '║         AVAILABLE COMMANDS             ║',
    '╠════════════════════════════════════════╣',
    '║  whoami         — show identity info   ║',
    '║  skills         — list all skills      ║',
    '║  projects       — list projects        ║',
    '║  current_focus  — what I am building   ║',
    '║  contact        — contact info         ║',
    '║  clear          — clear terminal       ║',
    '║  help           — show this menu       ║',
    '╚════════════════════════════════════════╝',
  ],
  whoami: [
    '> NAME      : Sai Shivamani',
    '> ROLE      : Full Stack Developer | C++ DSA Problem Solver | AI Engineer',
    '> LOCATION  : Remote / India',
    '> STATUS    : Available for opportunities',
    '> MISSION   : Build scalable systems & solve complex problems.',
    '> CLASS     : S-RANK FULL STACK DEVELOPER',
    '',
    '  ⚡ Power Level: OVER 9000',
  ],
  skills: [
    '> Loading skill matrix...',
    '',
    '  ████████████░░░░  C++ / DSA      [95/100]',
    '  ████████████░░░░  React / Next.js[92/100]',
    '  ███████████░░░░░  AI / ML / NLP  [88/100]',
    '  ██████████░░░░░░  System Design  [85/100]',
    '  ██████████░░░░░░  Node / Express [82/100]',
    '',
    '> Stack: C++, DSA, React, Next.js, AI/ML, NLP',
    '> Tools: System Design | REST APIs | PostgreSQL',
  ],
  projects: [
    '> Fetching project logs...',
    '',
    '  [01] AI SYSTEMS',
    '       → NLP pipelines & intelligent automation',
    '       → Status: ACTIVE ✓',
    '',
    '  [02] FULL STACK APPS',
    '       → React + Next.js + Node scalable apps',
    '       → Status: DEPLOYED ✓',
    '',
    '  [03] DSA PROBLEM SOLVING',
    '       → 500+ C++ competitive programming solutions',
    '       → Status: ONGOING ✓',
    '',
    '> github.com/saishivamani for full list',
  ],
  current_focus: [
    '> Scanning active objectives...',
    '',
    '  🎯 Building scalable full-stack applications',
    '  🧠 Solving complex DSA problems in C++',
    '  🤖 Developing AI/ML & NLP systems',
    '  📐 Mastering System Design patterns',
    '',
    '> Status: IN PROGRESS — shipping daily.',
  ],
  contact: [
    '> Opening comms channel...',
    '',
    '  📱 PHONE    : +91 9704151539',
    '  📧 EMAIL    : saishivamani@outlook.com',
    '  💼 LINKEDIN : linkedin.com/in/saishivamani1',
    '  🐙 GITHUB   : github.com/saishivamani1',
    '  🧩 LEETCODE : leetcode.com/u/sai_shivamani1',
    '  📍 LOCATION : Hyderabad, 500070 / Remote',
    '',
    '> Ready to collaborate. Send a signal.',
  ],
};

const INTRO_LINES = [
  '╔══════════════════════════════════════════════╗',
  '║   SAI SHIVAMANI TERMINAL  v1.0.0             ║',
  '║   Full Stack Dev | C++ DSA | AI Engineer     ║',
  '╚══════════════════════════════════════════════╝',
  '',
  '> System initialized. Type "help" to begin.',
  '',
];

interface HistoryEntry {
  type: 'input' | 'output';
  content: string;
}

export default function Terminal() {
  const [history, setHistory] = useState<HistoryEntry[]>(
    INTRO_LINES.map((l) => ({ type: 'output', content: l }))
  );
  const [input, setInput] = useState('');
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newHistory: HistoryEntry[] = [
      ...history,
      { type: 'input', content: `visitor@saishivamani:~$ ${cmd}` },
    ];

    if (trimmed === 'clear') {
      setHistory(INTRO_LINES.map((l) => ({ type: 'output', content: l })));
    } else if (trimmed === '') {
      setHistory(newHistory);
    } else if (COMMANDS[trimmed]) {
      COMMANDS[trimmed].forEach((line) =>
        newHistory.push({ type: 'output', content: line })
      );
      newHistory.push({ type: 'output', content: '' });
      setHistory(newHistory);
    } else {
      newHistory.push({
        type: 'output',
        content: `bash: ${trimmed}: command not found. Try "help".`,
      });
      newHistory.push({ type: 'output', content: '' });
      setHistory(newHistory);
    }

    setCmdHistory((prev) => [cmd, ...prev]);
    setHistoryIdx(-1);
    setInput('');
  };

  const handleKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const idx = historyIdx + 1;
      if (idx < cmdHistory.length) {
        setHistoryIdx(idx);
        setInput(cmdHistory[idx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const idx = historyIdx - 1;
      if (idx < 0) {
        setHistoryIdx(-1);
        setInput('');
      } else {
        setHistoryIdx(idx);
        setInput(cmdHistory[idx]);
      }
    }
  };

  return (
    <section id="terminal" className="relative py-28 bg-[#050505] overflow-hidden">
      {/* Scanline overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-end gap-6"
        >
          <div>
            <p className="font-mono text-xs tracking-widest text-[#5a5a5a] mb-2">— CHAPTER 05</p>
            <h2 className="font-manga text-6xl md:text-8xl text-white tracking-wide">TERMINAL</h2>
          </div>
          <div className="flex-1 h-[2px] bg-gradient-to-r from-white to-transparent mb-4" />
        </motion.div>

        {/* Terminal window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-2 border-white bg-black overflow-hidden"
          style={{ boxShadow: '6px 6px 0 white' }}
        >
          {/* Terminal titlebar */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-[#2e2e2e] bg-[#1a1a1a]">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#5a5a5a] border border-[#3e3e3e]" />
              <div className="w-3 h-3 rounded-full bg-[#5a5a5a] border border-[#3e3e3e]" />
              <div className="w-3 h-3 rounded-full bg-white border border-[#bfbfbf]" />
            </div>
            <span className="font-mono text-xs text-[#5a5a5a] flex-1 text-center">
              sai@full-stack-dev — bash
            </span>
            <div className="flex gap-2">
              {['whoami', 'skills', 'projects', 'current_focus'].map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => handleCommand(cmd)}
                  style={{ position: 'relative', zIndex: 10 }}
                  className="font-mono text-[10px] px-2 py-0.5 border border-[#2e2e2e] text-[#5a5a5a] hover:text-white hover:border-white transition-colors"
                >
                  {cmd}
                </button>
              ))}
            </div>
          </div>

          {/* Terminal body */}
          <div
            className="h-80 overflow-y-auto p-4 font-mono text-sm leading-6 cursor-text"
            onClick={() => inputRef.current?.focus()}
          >
            {history.map((entry, i) => (
              <div
                key={i}
                className={entry.type === 'input' ? 'text-white' : 'text-[#bfbfbf]'}
              >
                {entry.content}
              </div>
            ))}
            {/* Input line */}
            <div className="flex items-center text-white mt-1">
              <span className="text-[#bfbfbf] mr-2">visitor@saishivamani:~$</span>
              <div className="flex items-center flex-1">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  className="bg-transparent outline-none text-white font-mono text-sm caret-transparent"
                  style={{ width: `${input.length || 1}ch` }}
                  spellCheck={false}
                  autoComplete="off"
                />
                <span className="cursor-blink text-white -ml-0.5">█</span>
              </div>
            </div>
            <div ref={bottomRef} />
          </div>
        </motion.div>

        {/* Quick commands hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-4 flex flex-wrap gap-x-3 gap-y-2 items-center justify-center px-4"
          style={{ position: 'relative', zIndex: 10 }}
        >
          <span className="font-mono text-xs text-[#5a5a5a] w-full text-center mb-1">Quick commands:</span>
          {Object.keys(COMMANDS).map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              style={{ position: 'relative', zIndex: 10 }}
              className="font-mono text-xs text-[#bfbfbf] hover:text-white underline underline-offset-2 transition-colors px-1 py-0.5"
            >
              {cmd}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
