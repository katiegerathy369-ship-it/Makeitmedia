'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function CaseStudyCTA() {
  return (
    <section className="relative overflow-hidden" style={{ padding: '100px 0', background: 'var(--ink)' }}>
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          top: -200, right: -200, width: 600, height: 600,
          background: 'radial-gradient(circle, rgba(122,158,135,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-container mx-auto px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex items-center justify-between gap-16 flex-wrap"
        >
          <div style={{ maxWidth: 560 }}>
            <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--sage-light)', marginBottom: 14 }}>
              Ready to be next?
            </p>
            <h2
              className="font-display font-normal text-white"
              style={{ fontSize: 'clamp(36px, 4vw, 52px)', lineHeight: 1.12, marginBottom: 14 }}
            >
              Your practice could look<br />
              <em className="italic" style={{ color: 'var(--sage-light)' }}>this good too.</em>
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', fontWeight: 300, lineHeight: 1.7 }}>
              3 founding client spots remaining at current rates. Book a free 30-minute strategy call. No pressure, just an honest conversation about what you need.
            </p>
          </div>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 no-underline flex-shrink-0 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
            style={{
              background: '#fff', color: 'var(--sage-dark)',
              padding: '15px 32px', borderRadius: 100,
              fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 500,
            }}
          >
            Book a free strategy call
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </motion.div>

        {/* Work nav */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-between mt-16 pt-10"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <Link
            href="/work"
            className="flex flex-col gap-1 no-underline opacity-50 hover:opacity-100 transition-opacity duration-200"
          >
            <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>
              ← Back to
            </span>
            <span className="font-display italic" style={{ fontSize: 18, fontWeight: 400, color: 'rgba(255,255,255,0.8)' }}>
              All work
            </span>
          </Link>

          <Link
            href="/work/concept-nutritionist"
            className="flex flex-col items-end gap-1 no-underline opacity-50 hover:opacity-100 transition-opacity duration-200"
          >
            <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>
              Next project →
            </span>
            <span className="font-display italic" style={{ fontSize: 18, fontWeight: 400, color: 'rgba(255,255,255,0.8)' }}>
              Nourish &amp; Co.
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
