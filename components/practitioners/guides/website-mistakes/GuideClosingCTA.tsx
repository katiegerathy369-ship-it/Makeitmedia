'use client'

import { motion } from 'framer-motion'

export default function GuideClosingCTA() {
  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <section
      className="py-[120px] relative overflow-hidden"
      style={{ background: 'var(--sage-dark)', color: '#fff' }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: -80,
          bottom: -40,
          width: 280,
          height: 360,
          opacity: 0.05,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <svg width="280" height="360" viewBox="0 0 280 360" fill="none">
          <path d="M140 360 C140 360 140 40 140 10" stroke="rgba(184,212,192,1)" strokeWidth="3" strokeLinecap="round" />
          <path d="M140 280 C100 260 60 240 50 200 C90 195 130 220 140 280Z" fill="rgba(184,212,192,1)" />
          <path d="M140 210 C180 185 220 170 230 130 C190 128 148 155 140 210Z" fill="rgba(184,212,192,1)" />
          <path d="M140 140 C110 115 95 80 105 50 C130 60 148 95 140 140Z" fill="rgba(184,212,192,1)" />
        </svg>
      </div>

      <div className="max-w-container mx-auto px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-[640px] mx-auto text-center"
        >
          <p className="text-[11px] font-medium tracking-[0.12em] uppercase mb-5" style={{ color: 'var(--sage-light)' }}>
            One last thing
          </p>
          <h2
            className="font-display font-normal leading-[1.1] text-white mb-6"
            style={{ fontSize: 'clamp(34px, 4vw, 52px)' }}
          >
            Send the guide to your inbox{' '}
            <em className="italic" style={{ color: 'var(--sage-light)' }}>now</em>
          </h2>
          <p className="text-[16px] font-light leading-[1.7] mb-10" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Five mistakes, five fixes, one weekend of work. Free, no spam, unsubscribe anytime.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            id="cta-guide-closing"
            className="inline-flex items-center gap-2 bg-white text-sage-dark px-8 py-[15px] rounded-full font-body text-[15px] font-medium tracking-[0.01em] no-underline border-none cursor-pointer hover:bg-sage-light hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-all duration-200"
          >
            Send me the guide
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
