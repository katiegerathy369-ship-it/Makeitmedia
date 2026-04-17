'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: 'Who is this guide for?',
    a: ['Australian naturopaths, nutritionists, herbalists, health coaches, integrative GPs and any practitioner whose website is the front door to their practice. If patients find you online, this guide applies.'],
  },
  {
    q: 'How long does it take to read?',
    a: ['About 12 minutes. Each mistake is 1–2 pages with a clear "what it looks like / why it costs you / how to fix it" structure. No padding.'],
  },
  {
    q: 'Will I be added to a mailing list?',
    a: ['Yes, you\'ll get the guide plus a short follow-up sequence with extra tips for practitioners. <strong>One-click unsubscribe at the bottom of every email.</strong> No spam, no daily emails, no nonsense.'],
  },
  {
    q: 'Is there a cost?',
    a: ['No. The guide is free. The follow-up emails are free. You can read it, apply the fixes yourself, and never speak to me — that\'s a perfectly good outcome.'],
  },
  {
    q: 'What if I want help applying the fixes?',
    a: ['Book a free 30-minute strategy call. I\'ll audit your site against the 5 mistakes (and a few more I didn\'t include in the guide) and tell you what would move the needle. No pitch, no pressure.'],
  },
]

function FaqItem({ q, a }: { q: string; a: string[] }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className="rounded-lg overflow-hidden bg-white transition-colors duration-200"
      style={{ border: open ? '1px solid var(--sage)' : '1px solid var(--border-sage)' }}
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 font-body text-left cursor-pointer border-none transition-colors duration-200"
        style={{ background: open ? 'var(--sage-pale)' : 'transparent' }}
      >
        <span className="text-[15px] font-medium text-ink leading-[1.4] flex-1">{q}</span>
        <span
          className="text-sage-dark flex-shrink-0 flex items-center transition-transform duration-300"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M4 6l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="faq-answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div className="px-6 pb-5 flex flex-col gap-2.5 text-[14px] text-ink-mid font-light leading-[1.8]">
              {a.map((para, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function GuideFAQ() {
  return (
    <section className="py-[100px]" style={{ background: 'var(--warm-white)' }}>
      <div className="max-w-container mx-auto px-12">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="md:sticky md:top-[100px]"
          >
            <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-terra mb-4">
              Quick questions
            </p>
            <h2
              className="font-display font-normal leading-[1.1] text-ink"
              style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
            >
              Before you<br />
              <em className="italic text-sage-dark">download</em>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="flex flex-col gap-2"
          >
            {faqs.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
