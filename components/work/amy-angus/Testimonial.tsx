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

          <div
            className="font-display italic text-left"
            style={{
              fontSize: 'clamp(17px, 1.6vw, 20px)',
              color: 'var(--sage-dark)',
              lineHeight: 1.6,
              marginBottom: 36,
            }}
          >
            <p style={{ marginBottom: 16 }}>
              I am absolutely thrilled with the work Kate has done on my website. From start to finish, the entire experience was simple, easy and genuinely enjoyable.
            </p>
            <p style={{ marginBottom: 16 }}>
              The design is stunning, it perfectly captures what I was looking for and exceeded my expectations in every way. The final result looks polished, modern, and exactly on brand.
            </p>
            <p style={{ marginBottom: 16 }}>
              Communication throughout the process was fantastic. I always felt heard, and any feedback I gave was acted on quickly and creatively. It was clear that real care and skill went into every aspect of the project.
            </p>
            <p style={{ marginBottom: 0 }}>
              I could not recommend Kate more highly. Thank you so much Kate, I am beyond happy with the result.
            </p>
          </div>

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
