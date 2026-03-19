'use client';
import { useState, FormEvent, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { SiLeetcode } from 'react-icons/si';

interface FormState {
  name: string;
  email: string;
  message: string;
}

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<Status>('idle');
  const [shaking, setShaking] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const validate = () => {
    const errs: Partial<FormState> = {};
    if (!form.name.trim()) errs.name = 'NAME REQUIRED';
    if (!form.email.trim() || !form.email.includes('@')) errs.email = 'VALID EMAIL REQUIRED';
    if (!form.message.trim() || form.message.length < 10) errs.message = 'MESSAGE TOO SHORT';
    return errs;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      setShaking(true);
      setTimeout(() => setShaking(false), 600);
      return;
    }
    setErrors({});
    setStatus('sending');

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative py-28 bg-[#0a0a0a] overflow-hidden">
      {/* Halftone bg */}
      <div className="absolute inset-0 halftone opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-end gap-6"
        >
          <div>
            <p className="font-mono text-xs tracking-widest text-[#5a5a5a] mb-2">— CHAPTER 07</p>
            <h2 className="font-manga text-6xl md:text-8xl text-white tracking-wide">SEND<br />SIGNAL</h2>
          </div>
          <div className="flex-1 h-[2px] bg-gradient-to-r from-white to-transparent mb-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left - info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            {/* Speech bubble intro */}
            <div className="thought-bubble px-6 py-5">
              <p className="font-mono text-sm font-bold text-black leading-relaxed">
                &quot;Whether you need scalable software systems, complex algorithms optimized, or just want to talk anime — I&apos;m all ears.&quot;
              </p>
            </div>

            {/* Contact links */}
            <div className="flex flex-col gap-4 mt-4">
              {[
                { icon: <FaPhone    size={18} className="text-[#5a5a5a] group-hover:text-white transition-colors" />, label: 'PHONE',    value: '+91 9704151539',              href: 'tel:+919704151539' },
                { icon: <MdEmail    size={18} className="text-[#5a5a5a] group-hover:text-white transition-colors" />, label: 'EMAIL',    value: 'saishivamani@outlook.com',    href: 'mailto:saishivamani@outlook.com' },
                { icon: <FaLinkedin size={18} className="text-[#5a5a5a] group-hover:text-white transition-colors" />, label: 'LINKEDIN', value: 'linkedin.com/in/saishivamani1', href: 'https://www.linkedin.com/in/saishivamani1/' },
                { icon: <FaGithub   size={18} className="text-[#5a5a5a] group-hover:text-white transition-colors" />, label: 'GITHUB',   value: 'github.com/saishivamani1',   href: 'https://github.com/saishivamani1' },
                { icon: <SiLeetcode size={18} className="text-[#5a5a5a] group-hover:text-white transition-colors" />, label: 'LEETCODE', value: 'leetcode.com/u/sai_shivamani1', href: 'https://leetcode.com/u/sai_shivamani1/' },
                { icon: <FaMapMarkerAlt size={18} className="text-[#5a5a5a] group-hover:text-white transition-colors" />, label: 'LOCATION', value: 'Hyderabad, 500070 / Remote', href: null },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 border-b border-[#2e2e2e] pb-3 group"
                >
                  <span className="w-8 flex items-center justify-center">{item.icon}</span>
                  <div>
                    <p className="font-mono text-[10px] text-[#5a5a5a] tracking-widest">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="font-mono text-sm text-[#bfbfbf] group-hover:text-white transition-colors hover:underline"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-mono text-sm text-[#bfbfbf] group-hover:text-white transition-colors">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="border-2 border-white bg-[#1a1a1a] px-5 py-4 flex items-center gap-3"
            >
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-3 h-3 rounded-full bg-white"
              />
              <div>
                <p className="font-manga text-lg text-white tracking-widest">AVAILABLE FOR HIRE</p>
                <p className="font-mono text-xs text-[#5a5a5a]">Open to full-time &amp; freelance</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AnimatePresence mode="wait">

              {/* ✅ SUCCESS */}
              {status === 'sent' && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="border-2 border-white bg-[#1a1a1a] p-10 flex flex-col items-center justify-center min-h-[480px] text-center gap-4"
                  style={{ boxShadow: '6px 6px 0 white' }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                    className="font-manga text-7xl text-white mb-2"
                  >
                    ✓
                  </motion.div>
                  <h3 className="font-manga text-3xl text-white tracking-widest">SIGNAL SENT!</h3>
                  <p className="font-mono text-sm text-[#bfbfbf] max-w-xs">
                    Message received loud and clear. I&apos;ll respond within 24 hours.
                  </p>
                  <motion.div
                    animate={{ width: ['0%', '100%'] }}
                    transition={{ duration: 2.5, ease: 'linear' }}
                    className="h-[2px] bg-white mt-4 w-full"
                    style={{ originX: 0 }}
                  />
                  <motion.button
                    onClick={() => setStatus('idle')}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="mt-2 font-mono text-xs px-6 py-2 border border-[#5a5a5a] text-[#bfbfbf] hover:text-white hover:border-white transition-colors"
                  >
                    SEND ANOTHER →
                  </motion.button>
                </motion.div>
              )}

              {/* ❌ ERROR */}
              {status === 'error' && (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="border-2 border-white bg-[#1a1a1a] p-10 flex flex-col items-center justify-center min-h-[480px] text-center gap-4"
                  style={{ boxShadow: '6px 6px 0 white' }}
                >
                  <div className="font-manga text-7xl text-white mb-2">✕</div>
                  <h3 className="font-manga text-3xl text-white tracking-widest">TRANSMISSION FAILED</h3>
                  <p className="font-mono text-sm text-[#bfbfbf] max-w-xs">
                    Signal lost in the void. Try again or reach out directly at saishivamani@outlook.com
                  </p>
                  <motion.button
                    onClick={() => setStatus('idle')}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="mt-4 font-mono text-xs px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition-colors"
                  >
                    RETRY →
                  </motion.button>
                </motion.div>
              )}

              {/* 📡 FORM (idle + sending) */}
              {(status === 'idle' || status === 'sending') && (
                <motion.form
                  key="form"
                  ref={formRef}
                  onSubmit={handleSubmit}
                  animate={shaking ? { x: [-8, 8, -6, 6, -4, 4, 0] } : { x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="border-2 border-white bg-[#1a1a1a] p-8 relative"
                  style={{ boxShadow: '6px 6px 0 white' }}
                >
                  {/* Corner decorations */}
                  <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#5a5a5a]" />
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#5a5a5a]" />

                  <p className="font-manga text-xl text-white tracking-widest mb-6">TRANSMISSION FORM</p>

                  {/* Name */}
                  <div className="mb-5">
                    <label className="font-mono text-[10px] text-[#5a5a5a] tracking-widest block mb-1.5">
                      IDENTIFIER (NAME)
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name..."
                      disabled={status === 'sending'}
                      className={`w-full bg-[#0d0d0d] border ${errors.name ? 'border-white' : 'border-[#2e2e2e]'} px-4 py-3 font-mono text-sm text-white placeholder-[#5a5a5a] outline-none focus:border-white transition-colors disabled:opacity-50`}
                    />
                    {errors.name && (
                      <p className="font-mono text-[10px] text-white mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="mb-5">
                    <label className="font-mono text-[10px] text-[#5a5a5a] tracking-widest block mb-1.5">
                      COMMS CHANNEL (EMAIL)
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      disabled={status === 'sending'}
                      className={`w-full bg-[#0d0d0d] border ${errors.email ? 'border-white' : 'border-[#2e2e2e]'} px-4 py-3 font-mono text-sm text-white placeholder-[#5a5a5a] outline-none focus:border-white transition-colors disabled:opacity-50`}
                    />
                    {errors.email && (
                      <p className="font-mono text-[10px] text-white mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <label className="font-mono text-[10px] text-[#5a5a5a] tracking-widest block mb-1.5">
                      TRANSMISSION CONTENT
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Your message..."
                      rows={4}
                      disabled={status === 'sending'}
                      className={`w-full bg-[#0d0d0d] border ${errors.message ? 'border-white' : 'border-[#2e2e2e]'} px-4 py-3 font-mono text-sm text-white placeholder-[#5a5a5a] outline-none focus:border-white transition-colors resize-none disabled:opacity-50`}
                    />
                    {errors.message && (
                      <p className="font-mono text-[10px] text-white mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={status === 'sending'}
                    whileHover={status !== 'sending' ? { scale: 1.02 } : {}}
                    whileTap={status !== 'sending' ? { scale: 0.97 } : {}}
                    className="w-full bg-white text-black font-manga text-xl tracking-widest py-3.5 hover:bg-[#f5f5f5] transition-colors disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden"
                  >
                    <AnimatePresence mode="wait">
                      {status === 'sending' ? (
                        <motion.span
                          key="sending"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex items-center justify-center gap-2"
                        >
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
                            className="inline-block w-4 h-4 border-2 border-black border-t-transparent rounded-full"
                          />
                          TRANSMITTING...
                        </motion.span>
                      ) : (
                        <motion.span
                          key="idle"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                        >
                          TRANSMIT MESSAGE →
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </motion.form>
              )}

            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
