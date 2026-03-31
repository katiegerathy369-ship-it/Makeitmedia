'use client'

import { motion } from 'framer-motion'

const INK = '#1a1a0e'
const PERIWINKLE = '#a7b5fc'
const PERIWINKLE_DARK = '#4a4fad'
const LEMON = '#ffebae'

const testimonials = [
  { quote: '"I finally understand what my body needs. Clara explained everything so clearly and the plan actually fits my life. I\'m not hungry, I\'m not miserable, and I\'ve lost 8kg."', name: 'Sarah K.', role: '8-Week Program', bg: LEMON },
  { quote: '"My PCOS symptoms have improved dramatically since working with Clara. The food changes felt manageable and the results have been incredible."', name: 'Mia T.', role: 'Hormone Reset Program', bg: '#fdeee4' },
  { quote: '"I\'d tried everything for my bloating. Clara figured out the cause in our first session. Three months later and my digestion is completely transformed."', name: 'Jess R.', role: 'Gut Health client', bg: '#dceef7' },
]

export default function NourishTestimonial() {
  return (
    <section id="testimonials" style={{ background: '#faf6ed', padding: '100px 0', borderBottom: `3px solid ${INK}` }}>
      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 52px' }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: 'easeOut' }}>
          <div style={{ fontFamily: 'var(--font-dm-sans-nourish), system-ui, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: PERIWINKLE_DARK, background: LEMON, border: `2px solid ${INK}`, padding: '4px 12px', borderRadius: '4px', display: 'inline-block', marginBottom: '16px', boxShadow: `2px 2px 0 ${INK}` }}>
            ✦ Real results
          </div>
          <h2 style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: 'clamp(36px, 4vw, 52px)', fontWeight: 700, lineHeight: 1.05, color: INK, letterSpacing: '-0.02em' }}>
            Real results.{' '}
            <em style={{ fontStyle: 'italic', color: PERIWINKLE_DARK, fontWeight: 300 }}>Real people.</em>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '48px' }}>
          {testimonials.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.08 }}
              whileHover={{ scale: 1.03, y: -6, transition: { type: 'spring', stiffness: 300, damping: 18 } }}
              style={{ background: t.bg, border: `2.5px solid ${INK}`, borderRadius: '8px', padding: '28px 24px', boxShadow: `4px 4px 0 ${INK}` }}
            >
              <div style={{ color: PERIWINKLE_DARK, fontSize: '14px', marginBottom: '12px', letterSpacing: '2px' }}>★★★★★</div>
              <p style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: '16px', fontWeight: 400, fontStyle: 'italic', color: INK, lineHeight: 1.55, marginBottom: '20px' }}>
                {t.quote}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: PERIWINKLE_DARK, border: `2px solid ${INK}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: '14px', fontWeight: 700, color: '#fff' }}>
                  {t.name[0]}
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-dm-sans-nourish), system-ui, sans-serif', fontSize: '13px', fontWeight: 500, color: INK }}>{t.name}</div>
                  <div style={{ fontFamily: 'var(--font-dm-sans-nourish), system-ui, sans-serif', fontSize: '11px', color: '#8a8a6a', fontWeight: 300 }}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
