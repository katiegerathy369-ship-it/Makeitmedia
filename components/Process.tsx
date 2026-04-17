'use client'

import { motion } from 'framer-motion'

const stepIcons = [
  <svg key="01" width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path d="M6 6h20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H10l-5 4v-4H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="11" cy="13" r="1" fill="#c9a84c"/>
    <circle cx="16" cy="13" r="1" fill="#c9a84c"/>
    <circle cx="21" cy="13" r="1" fill="#c9a84c"/>
  </svg>,
  <svg key="02" width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path d="M4 28l4-1 16-16-3-3L5 24l-1 4z" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 7l3 3" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M24 4l1 2M27 5l-2 1M26 8l-1-2" stroke="#e8d5a3" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>,
  <svg key="03" width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect x="3" y="5" width="26" height="22" rx="3" stroke="#c9a84c" strokeWidth="1.5"/>
    <line x1="3" y1="12" x2="29" y2="12" stroke="#c9a84c" strokeWidth="1.5"/>
    <circle cx="7.5" cy="8.5" r="1" fill="#e8d5a3"/>
    <circle cx="11.5" cy="8.5" r="1" fill="#e8d5a3"/>
    <path d="M13 20a5 5 0 1 0 5-5" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M18 15l-2 2 2 2" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  <svg key="04" width="32" height="32" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="18" r="9" stroke="#c9a84c" strokeWidth="1.5"/>
    <path d="M16 22v-8M13 17l3-3 3 3" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 9V4M14 6l2-2 2 2" stroke="#e8d5a3" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
]

const steps = [
  {
    num: '01',
    title: 'Discovery call',
    desc: '30 minutes to understand your business, your clients, and your goals. No jargon, no templates. Just real conversation.',
  },
  {
    num: '02',
    title: 'Strategy & copy',
    desc: 'I research what your ideal clients are actually searching for, then write SEO-optimised copy that speaks their language. You review and approve every word.',
  },
  {
    num: '03',
    title: 'Build & refine',
    desc: "You approve the full design in Canva first. Then I build it. Custom code, fast-loading, and mobile-perfect. Two rounds of revisions until it's exactly right.",
  },
  {
    num: '04',
    title: 'Launch & grow',
    desc: 'Go live with full analytics, booking systems, and optional ongoing marketing support to keep the momentum going.',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-[100px]" style={{ background: 'var(--cream)' }}>
      <div className="max-w-container mx-auto px-12">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-gold mb-4">
            How it works
          </p>
          <h2
            className="font-display font-normal leading-[1.1] text-ink"
            style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}
          >
            From conversation to <em className="italic" style={{ color: '#c9a84c' }}>live</em> in weeks
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
              className={`relative ${i < steps.length - 1 ? 'step-connector' : ''}`}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  background: 'var(--gold-pale)',
                  border: '1px solid var(--border)',
                  borderRadius: 10,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 16,
                }}
              >
                {stepIcons[i]}
              </div>
              <div className="font-display text-[48px] font-light text-gold-light leading-none mb-4">
                {step.num}
              </div>
              <div className="font-display text-[20px] font-medium text-ink mb-2.5">
                {step.title}
              </div>
              <p className="text-[13px] text-ink-light font-light leading-[1.65]">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
