'use client'

import { motion } from 'framer-motion'
import CalInline from './CalInline'

interface CalSectionProps {
  variant?: 'general' | 'practitioner'
}

export default function CalSection({ variant = 'general' }: CalSectionProps) {
  const isPractitioner = variant === 'practitioner'

  const bg = isPractitioner ? 'var(--sage-pale)' : 'var(--cream)'
  const eyebrowColour = isPractitioner ? 'var(--sage-dark)' : 'var(--gold-dark)'
  const headingColour = isPractitioner ? 'var(--sage-dark)' : 'var(--ink)'
  const emColour = isPractitioner ? 'var(--sage)' : 'var(--gold)'
  const bodyColour = isPractitioner ? 'var(--sage-dark)' : 'var(--ink-mid)'

  return (
    <section
      id="book-call"
      className="py-[120px] relative"
      style={{ background: bg }}
    >
      <div className="max-w-container mx-auto px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12 max-w-[680px] mx-auto"
        >
          <p
            className="text-[11px] font-medium tracking-[0.12em] uppercase mb-4"
            style={{ color: eyebrowColour }}
          >
            Book a call
          </p>
          <h2
            className="font-display font-normal leading-[1.1] mb-5"
            style={{ fontSize: 'clamp(36px, 4vw, 52px)', color: headingColour }}
          >
            Pick a time that{' '}
            <em className="italic" style={{ color: emColour }}>
              works for you.
            </em>
          </h2>
          <p
            className="text-[15px] font-light leading-[1.7]"
            style={{ color: bodyColour }}
          >
            30 minutes. No sales pressure. We'll review what you have, flag what's costing you enquiries, and tell you what to change.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="max-w-[1000px] mx-auto"
        >
          <CalInline />
        </motion.div>
      </div>
    </section>
  )
}
