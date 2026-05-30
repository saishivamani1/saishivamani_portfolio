'use client';
import { motion } from 'framer-motion';

const USERNAME = 'saishivamani1';

const statsCards = [
  {
    id: '01',
    label: 'GitHub Stats',
    src: `https://github-readme-stats.vercel.app/api?username=${USERNAME}&show_icons=true&theme=dark&hide_border=true&bg_color=1a1a1a&text_color=bfbfbf&title_color=ffffff&icon_color=ffffff&count_private=true`,
    alt: 'Sai Shivamani GitHub Stats',
  },
  {
    id: '02',
    label: 'Most Used Languages',
    src: `https://github-readme-stats.vercel.app/api/top-langs/?username=${USERNAME}&theme=dark&hide_border=true&bg_color=1a1a1a&text_color=bfbfbf&title_color=ffffff&layout=compact&langs_count=8`,
    alt: 'Sai Shivamani Top Languages',
  },
  {
    id: '03',
    label: 'Contribution Streak',
    src: `https://github-readme-streak-stats.herokuapp.com/?user=${USERNAME}&theme=dark&hide_border=true&background=1a1a1a&stroke=2e2e2e&ring=ffffff&fire=bfbfbf&currStreakLabel=ffffff&sideLabels=5a5a5a&dates=5a5a5a`,
    alt: 'Sai Shivamani GitHub Streak',
  },
];

export default function GitHubStats() {
  return (
    <section id="github" className="relative py-28 bg-[#0a0a0a] overflow-hidden">
      {/* Halftone bg */}
      <div className="absolute inset-0 halftone opacity-[0.06] pointer-events-none" />

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
            <p className="font-mono text-xs tracking-widest text-[#5a5a5a] mb-2">— CHAPTER 06</p>
            <h2 className="font-manga text-6xl md:text-8xl text-white tracking-wide">GITHUB<br />STATS</h2>
          </div>
          <div className="flex-1 h-[2px] bg-gradient-to-r from-white to-transparent mb-4" />
        </motion.div>

        {/* Stats cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {statsCards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-[#1a1a1a] border border-[#2e2e2e] p-5 group hover:border-white transition-colors duration-300"
            >
              {/* Corner decorations */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[#3e3e3e] group-hover:border-white transition-colors duration-300" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-[#3e3e3e] group-hover:border-white transition-colors duration-300" />

              {/* Panel number */}
              <span className="font-manga text-3xl text-[#2e2e2e] absolute top-3 right-4 select-none">{card.id}</span>

              {/* Label */}
              <p className="font-mono text-[10px] text-[#5a5a5a] tracking-widest mb-3">{card.label.toUpperCase()}</p>

              {/* Stats image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={card.src}
                alt={card.alt}
                className="w-full h-auto"
                loading="lazy"
              />

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Contribution graph */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative bg-[#1a1a1a] border border-[#2e2e2e] p-6 group hover:border-white transition-colors duration-300"
        >
          {/* Corner decorations */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#3e3e3e] group-hover:border-white transition-colors duration-300" />
          <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#3e3e3e] group-hover:border-white transition-colors duration-300" />
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#3e3e3e] group-hover:border-white transition-colors duration-300" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#3e3e3e] group-hover:border-white transition-colors duration-300" />

          <p className="font-mono text-[10px] text-[#5a5a5a] tracking-widest mb-4">CONTRIBUTION GRAPH</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://ghchart.rshah.org/${USERNAME}`}
            alt="Sai Shivamani GitHub Contribution Graph"
            className="w-full h-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
            style={{ filter: 'invert(1) brightness(0.6)' }}
            loading="lazy"
          />
        </motion.div>

        {/* CTA to GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex justify-center"
        >
          <motion.a
            href={`https://github.com/${USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="font-mono text-sm font-bold px-8 py-3 border-2 border-white text-white tracking-widest hover:bg-white hover:text-black transition-colors"
          >
            VIEW GITHUB PROFILE →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
