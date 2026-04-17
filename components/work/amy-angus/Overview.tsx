'use client'

import { motion } from 'framer-motion'

export default function Overview() {
  return (
    <section style={{ padding: '100px 0', background: 'var(--cream)' }}>
      <div className="max-w-container mx-auto px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">

          {/* Left — brief */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-terra mb-3">
              The brief
            </p>
            <h2
              className="font-display font-normal text-ink mb-4"
              style={{ fontSize: 'clamp(32px, 3.5vw, 48px)', lineHeight: 1.12 }}
            >
              A website as good as <em className="italic text-sage-dark">the work</em>
            </h2>
            <p style={{ fontSize: 15, color: 'var(--ink-mid)', fontWeight: 300, lineHeight: 1.8, marginBottom: 16 }}>
              Amy is a degree-qualified clinical naturopath in Brisbane specialising in women&apos;s hormonal health: endometriosis, PCOS, PMDD, adenomyosis, and gut healing. She serves clients Australia-wide.
            </p>
            <p style={{ fontSize: 15, color: 'var(--ink-mid)', fontWeight: 300, lineHeight: 1.8, marginBottom: 16 }}>
              She needed a bespoke website that positioned her as a <strong style={{ fontWeight: 500, color: 'var(--ink)' }}>premium, evidence-based practitioner</strong>. Editorial in feel, warm in voice, and engineered to convert browsers into booked consultations. And she needed someone who understood the naturopathic world well enough to write the copy without her having to explain it.
            </p>
            <p style={{ fontSize: 15, color: 'var(--ink-mid)', fontWeight: 300, lineHeight: 1.8 }}>
              That&apos;s where Make It Media came in.
            </p>
          </motion.div>

          {/* Right — challenge + solution cards */}
          <div className="flex flex-col gap-5 mt-4">
            {[
              {
                icon: '⚡',
                title: 'The problem',
                desc: 'Outdated template site on an old platform. Slow load times, no booking integration, generic copy that didn\'t reflect her clinical specialisation in hormonal health, and no SEO foundations.',
                delay: 0.1,
              },
              {
                icon: '✦',
                title: 'The solution',
                desc: 'A custom-coded 5-page site with full blog system, editorial design, Simple Clinic booking integration, Google Reviews carousel, GA4 + Microsoft Clarity analytics, and copy written in an evidence-based tone by a naturopath. Built to look like a boutique clinic, not a one-person business.',
                delay: 0.2,
              },
            ].map((card) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: card.delay }}
                className="bg-white rounded-2xl"
                style={{ border: '1px solid var(--border)', padding: 28 }}
              >
                <div
                  className="flex items-center justify-center text-[18px] mb-4"
                  style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: 'var(--sage-pale)', border: '1px solid var(--border)',
                  }}
                >
                  {card.icon}
                </div>
                <div className="font-display text-[18px] font-medium text-ink mb-2">
                  {card.title}
                </div>
                <div style={{ fontSize: 13, color: 'var(--ink-light)', fontWeight: 300, lineHeight: 1.65 }}>
                  {card.desc}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
