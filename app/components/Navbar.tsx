'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'TERMINAL', href: '#terminal' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setActive(href);
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-md border-b border-[#2e2e2e]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.button
          onClick={() => handleNav('#home')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="font-manga text-2xl tracking-widest text-white relative group"
        >
          {/* Comic burst behind logo */}
          <span className="relative z-10">SAI_SHIVAMANI</span>
          <motion.span
            className="absolute inset-0 bg-white/10 rounded-sm -z-10"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.2 }}
          />
        </motion.button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="relative group text-xs font-mono font-bold tracking-widest text-[#bfbfbf] hover:text-white transition-colors duration-200"
              >
                {link.label}
                <motion.span
                  className="absolute -bottom-1 left-0 h-[2px] bg-white"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  style={{ originX: 0 }}
                />
                {active === link.href && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute -bottom-1 left-0 h-[2px] w-full bg-white"
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-1 group"
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="block h-[2px] bg-white origin-left"
              animate={{
                width: menuOpen ? (i === 1 ? '60%' : '100%') : '100%',
                rotate: menuOpen && i === 0 ? 45 : menuOpen && i === 2 ? -45 : 0,
                y: menuOpen && i === 1 ? -8 : 0,
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
              style={{ width: '24px' }}
              transition={{ duration: 0.2 }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-black border-t border-[#2e2e2e]"
          >
            <ul className="flex flex-col py-4 px-6 gap-4">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <button
                    onClick={() => handleNav(link.href)}
                    className="font-mono text-sm font-bold tracking-widest text-[#bfbfbf] hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
