'use client'

import { motion } from 'framer-motion'

const INK = '#1a1a0e'
const PERIWINKLE = '#a7b5fc'
const PERIWINKLE_DARK = '#4a4fad'
const LEMON = '#ffebae'

const painPoints = [
  { icon: '😩', text: 'Dieting on and off without lasting results' },
  { icon: '😵', text: 'Confused by conflicting advice online' },
  { icon: '🤯', text: "Bloating, fatigue, or hormonal symptoms that won't budge" },
  { icon: '📱', text: 'Getting your health advice from Instagram (no judgement)' },
]

export default function NourishPainStrip() {
  return (
    <section style={{
      position: 'relative',
      overflow: 'hidden',
      padding: '72px 0',
      borderBottom: `3px solid ${INK}`,
      // Sky blue base matching hero postcard
      background: '#b8d8e8',
    }}>
      {/* Vertical white stripes — same as hero postcard */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.45) 0px, rgba(255,255,255,0.45) 20px, transparent 20px, transparent 40px)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1140, margin: '0 auto', padding: '0 52px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>

        {/* Left — lopsided green frame */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: 'easeOut' }}>
          <div style={{
            background: PERIWINKLE_DARK,
            border: `3px solid ${INK}`,
            borderRadius: '8px',
            padding: '40px 44px',
            boxShadow: `10px 10px 0 ${INK}`,
            transform: 'rotate(-2deg)',
          }}>
            <h2 style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: 'clamp(42px, 5vw, 64px)', fontWeight: 700, color: '#fff', lineHeight: 1.05, letterSpacing: '-0.02em' }}>
              You know food matters.
              <br />You just can&apos;t figure out
              <br /><em style={{ fontStyle: 'italic', color: LEMON, fontWeight: 300 }}>what works for you.</em>
            </h2>
            <p style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: '20px', fontWeight: 400, fontStyle: 'italic', color: LEMON, marginTop: '24px' }}>
              That&apos;s exactly what I&apos;m here for. 🍋
            </p>
          </div>
        </motion.div>

        {/* Right — pain cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {painPoints.map((point, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
              style={{
                background: 'rgba(255,255,255,0.88)',
                border: `2px solid ${INK}`,
                borderRadius: '8px',
                padding: '18px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                boxShadow: `4px 4px 0 ${INK}`,
                fontFamily: 'var(--font-dm-sans-nourish), system-ui, sans-serif',
                fontSize: '15px',
                color: INK,
                fontWeight: 400,
              }}
            >
              {/* Bigger emoji box */}
              <div style={{
                width: '52px', height: '52px', flexShrink: 0,
                background: '#f4c5d0',
                border: `2.5px solid ${INK}`,
                borderRadius: '6px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '26px',
                boxShadow: `3px 3px 0 ${INK}`,
              }}>
                {point.icon}
              </div>
              {point.text}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
