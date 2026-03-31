'use client'

import { motion } from 'framer-motion'

export default function Testimonial() {
  return (
    <section style={{ padding: '100px 0', background: 'var(--warm-white)' }}>
      <div className="max-w-container mx-auto px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="bg-white rounded-[24px] text-center mx-auto"
          style={{
            border: '1px solid var(--border)',
            padding: '56px 64px',
            maxWidth: 800,
          }}
        >
          <span
            className="font-display block"
            style={{
              fontSize: 120, fontWeight: 300,
              color: 'var(--sage-light)', lineHeight: 0.5,
              marginBottom: 24, opacity: 0.5,
            }}
          >
            &ldquo;
          </span>

          {/* TODO: Replace with Amy's testimonial once received */}
          <p
            className="font-display italic"
            style={{
              fontSize: 'clamp(18px, 2vw, 24px)',
              color: 'var(--sage)',
              lineHeight: 1.5,
              marginBottom: 36,
              opacity: 0.6,
            }}
          >
            Amy&apos;s testimonial will appear here — check your messages!
          </p>

          <div
            style={{ width: 48, height: 1, background: 'var(--sage-light)', margin: '0 auto 20px' }}
          />

          <div className="flex items-center justify-center gap-3.5">
            <div
              className="font-display flex items-center justify-center"
              style={{
                width: 44, height: 44, borderRadius: '50%',
                background: 'var(--sage-light)',
                fontSize: 20, fontWeight: 500, color: 'var(--sage-dark)',
              }}
            >
              A
            </div>
            <div className="text-left">
              <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--ink)' }}>Amy Angus</div>
              <div style={{ fontSize: 12, color: 'var(--ink-light)', fontWeight: 300 }}>Naturopath · Brisbane, QLD</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
