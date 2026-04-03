'use client'

import { motion } from 'framer-motion'

export default function WorkHero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ padding: '160px 0 80px', background: 'var(--cream)' }}
    >
      {/* Blobs */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 500, height: 500,
          background: 'radial-gradient(circle, rgba(184,212,192,0.3) 0%, transparent 70%)',
          filter: 'blur(80px)',
          top: -100, right: -80,
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 300, height: 300,
          background: 'radial-gradient(circle, rgba(232,180,154,0.18) 0%, transparent 70%)',
          filter: 'blur(80px)',
          bottom: -60, left: 100,
        }}
      />

      <div className="max-w-container mx-auto px-5 md:px-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-end">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="page-eyebrow-dot inline-flex items-center bg-sage-pale border border-sage-light text-sage-dark text-[12px] font-medium tracking-[0.08em] uppercase px-[14px] py-[6px] rounded-full mb-6">
              Portfolio
            </div>
            <h1
              className="font-display font-normal leading-[1.05] text-ink"
              style={{ fontSize: 'clamp(48px, 6vw, 80px)' }}
            >
              Built for practitioners.<br />
              <em className="italic text-sage-dark">See the proof.</em>
            </h1>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="pb-3"
          >
            <p className="text-[17px] text-ink-mid font-light leading-[1.75] mb-7">
              Every site in this naturopath website portfolio is built custom — no templates, no drag-and-drop, no shortcuts. One live client, three concept designs showing the range of what's possible across different practice types.
            </p>
            <div className="flex gap-8">
              {[
                { num: '1', label: 'live client site' },
                { num: '3', label: 'concept designs' },
                { num: '2–3', label: 'week delivery' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-0.5">
                  <span className="font-display text-[32px] font-medium text-ink leading-none">
                    {stat.num}
                  </span>
                  <span className="text-[12px] text-ink-light font-light">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
