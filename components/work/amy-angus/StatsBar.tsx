'use client'

import { motion } from 'framer-motion'

const stats = [
  { num: '2–3', label: 'weeks to launch' },
  { num: '5', label: 'custom pages built' },
  { num: '100%', label: 'copy written by Make It Media' },
  { num: '100%', label: 'custom built' },
]

export default function StatsBar() {
  return (
    <section style={{ background: 'var(--sage-dark)', padding: '48px 0' }}>
      <div className="max-w-container mx-auto px-12">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.08 }}
              className="text-center"
              style={{
                padding: '0 24px',
                borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.1)' : undefined,
              }}
            >
              <div
                className="font-display text-white"
                style={{ fontSize: 52, fontWeight: 400, lineHeight: 1, marginBottom: 6 }}
              >
                {stat.num}
              </div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', fontWeight: 300, letterSpacing: '0.03em' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
