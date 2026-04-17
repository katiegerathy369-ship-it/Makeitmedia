'use client'

import { motion } from 'framer-motion'

export default function GuideAuthor() {
  return (
    <section
      className="py-[120px] relative overflow-hidden"
      style={{ background: 'var(--cream)' }}
    >
      {/* Botanical decoration */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: -60,
          top: '50%',
          transform: 'translateY(-50%)',
          width: 280,
          height: 360,
          opacity: 0.06,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <svg width="280" height="360" viewBox="0 0 280 360" fill="none">
          <path d="M140 360 C140 360 140 40 140 10" stroke="#4a6e57" strokeWidth="3" strokeLinecap="round" />
          <path d="M140 280 C100 260 60 240 50 200 C90 195 130 220 140 280Z" fill="#4a6e57" />
          <path d="M140 210 C180 185 220 170 230 130 C190 128 148 155 140 210Z" fill="#4a6e57" />
          <path d="M140 140 C110 115 95 80 105 50 C130 60 148 95 140 140Z" fill="#4a6e57" />
        </svg>
      </div>

      <div className="max-w-container mx-auto px-12 relative" style={{ zIndex: 1 }}>
        <div className="max-w-[720px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-terra mb-4">
              Who wrote this
            </p>
            <h2
              className="font-display font-normal leading-[1.1] text-ink mb-6"
              style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
            >
              Written by a <em className="italic text-sage-dark">naturopath</em> who builds practice sites
            </h2>

            <div className="space-y-5">
              <p className="text-[16px] text-ink-mid font-light leading-[1.85]">
                I'm Kate. I hold a Bachelor of Health Science in Naturopathy and I run Make It Media — an Australian web design studio for health practitioners.
              </p>
              <p className="text-[16px] text-ink-mid font-light leading-[1.85]">
                Every mistake in this guide is one I've seen on dozens of practitioner sites I've audited.{' '}
                <strong className="font-medium text-ink">
                  None of it is theory.
                </strong>{' '}
                It's the same patterns, over and over, costing practitioners patients they should be booking.
              </p>
              <p className="text-[16px] text-ink-mid font-light leading-[1.85]">
                Read it. Fix what you can. If you want me to look at your site directly, the strategy call is free.
              </p>
            </div>

            <div
              className="mt-10 rounded-[20px] p-8 grid grid-cols-1 md:grid-cols-3 gap-6"
              style={{
                background: 'var(--sage-pale)',
                border: '1px solid var(--border-sage)',
              }}
            >
              {[
                { stat: '6 yrs', label: 'Naturopathy degree' },
                { stat: '80K+', label: 'Wellness audience (TikTok)' },
                { stat: '2–3 wks', label: 'Average build time' },
              ].map((s) => (
                <div key={s.label} className="text-center md:text-left">
                  <div className="font-display text-[36px] text-sage-dark leading-none mb-2">
                    {s.stat}
                  </div>
                  <div className="text-[12px] text-ink-mid uppercase tracking-[0.08em] font-medium">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
