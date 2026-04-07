'use client'

import { motion } from 'framer-motion'

export default function WorkCtaStrip() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="mt-20 rounded-[24px] px-16 py-14 flex items-center justify-between gap-10 flex-wrap relative overflow-hidden"
      style={{ background: 'var(--night)' }}
    >
      {/* Glow */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          top: -100, right: -100,
          width: 400, height: 400,
          background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[540px] relative">
        <p className="text-[11px] font-medium tracking-[0.1em] uppercase mb-3" style={{ color: '#c9a84c' }}>
          Ready to be next?
        </p>
        <h2
          className="font-display font-normal text-white leading-[1.15] mb-3"
          style={{ fontSize: 'clamp(28px, 3vw, 40px)' }}
        >
          Your business could be<br />
          <em className="italic" style={{ color: '#e8d5a3' }}>on this page.</em>
        </h2>
        <p className="text-[15px] font-light leading-[1.7]" style={{ color: 'rgba(255,255,255,0.6)' }}>
          Founding client spots remaining at current rates. Book a free 30-minute strategy call — no pressure, just an honest conversation.
        </p>
      </div>

      <a
        href="/#contact"
        className="inline-flex items-center gap-2 bg-gold text-night px-8 py-[15px] rounded-full font-body text-[15px] font-medium tracking-[0.01em] no-underline flex-shrink-0 hover:bg-cream hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-200"
      >
        Book a free strategy call
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </motion.div>
  )
}
