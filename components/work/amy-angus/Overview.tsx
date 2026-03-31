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
              An outdated site that didn&apos;t reflect her <em className="italic text-sage-dark">expertise</em>
            </h2>
            <p style={{ fontSize: 15, color: 'var(--ink-mid)', fontWeight: 300, lineHeight: 1.8, marginBottom: 16 }}>
              Amy had been practising naturopathy for years but her online presence didn&apos;t match the quality of her work. Her existing site was built on an outdated platform — slow, generic, and not converting visitors into bookings.
            </p>
            <p style={{ fontSize: 15, color: 'var(--ink-mid)', fontWeight: 300, lineHeight: 1.8, marginBottom: 16 }}>
              She needed something that felt <strong style={{ fontWeight: 500, color: 'var(--ink)' }}>premium, personal, and professional</strong> — a site that immediately communicated her expertise and made it easy for patients to book. And she needed someone who understood the naturopathic world well enough to write the copy without her having to explain it.
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
                desc: 'Outdated site on an old platform. Slow load times, no booking integration, copy that didn\'t reflect her clinical expertise, and no SEO foundations in place.',
                delay: 0.1,
              },
              {
                icon: '✦',
                title: 'The solution',
                desc: 'A fully custom website with professional copywriting, Simple Clinic integration for online bookings, on-page SEO, GA4 analytics, and a brand identity that finally matched her level of practice.',
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
