'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const INK = '#1a1a0e'
const PERIWINKLE = '#a7b5fc'
const PERIWINKLE_DARK = '#4a4fad'
const LEMON = '#ffebae'

const steps = [
  {
    num: '01', title: 'Free discovery call',
    desc: '20 minutes to chat about what\'s going on and whether working together is the right fit. Zero commitment.',
    bg: '#ffebae', rotate: '-2.5deg',
    pattern: 'repeating-linear-gradient(-45deg, transparent, transparent 8px, rgba(26,26,14,0.06) 8px, rgba(26,26,14,0.06) 16px)',
  },
  {
    num: '02', title: 'Complete your intake',
    desc: 'A detailed health questionnaire so I understand your full history before we even meet. No time wasted in session.',
    bg: '#fdeee4', rotate: '2deg',
    pattern: 'radial-gradient(circle, rgba(244,168,188,0.5) 2.5px, transparent 2.5px)',
    size: '18px 18px',
  },
  {
    num: '03', title: 'Initial consultation',
    desc: '75 minutes, a personalised nutrition plan, and finally some real answers about what\'s going on with your body.',
    bg: '#b8d8e8', rotate: '-1.5deg',
    pattern: 'repeating-linear-gradient(90deg, rgba(26,26,14,0.05) 0px, rgba(26,26,14,0.05) 2px, transparent 2px, transparent 20px)',
  },
  {
    num: '04', title: 'Ongoing support',
    desc: 'Regular check-ins to track progress and adjust as life happens. Because life always happens — and that\'s fine.',
    bg: '#d4e2fe', rotate: '2.5deg',
    pattern: 'repeating-linear-gradient(45deg, transparent, transparent 8px, rgba(26,26,14,0.06) 8px, rgba(26,26,14,0.06) 16px)',
  },
]

export default function NourishProcess() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const tilt = useTransform(scrollYProgress, [0, 1], [-8, 8])

  return (
    <section ref={sectionRef} id="process" style={{ background: PERIWINKLE_DARK, padding: '120px 0 140px', borderBottom: `3px solid ${INK}`, position: 'relative', overflow: 'hidden' }}>

      {/* Diagonal stripe overlay */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(-45deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 28px)', pointerEvents: 'none' }} />

      {/* Large decorative circle — top left */}
      <div style={{ position: 'absolute', top: '-80px', left: '-80px', width: '360px', height: '360px', borderRadius: '50%', border: '3px solid rgba(255,235,174,0.35)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '-40px', left: '-40px', width: '280px', height: '280px', borderRadius: '50%', border: '2px solid rgba(255,235,174,0.25)', pointerEvents: 'none' }} />

      {/* Large decorative circle — bottom right */}
      <div style={{ position: 'absolute', bottom: '-100px', right: '-100px', width: '420px', height: '420px', borderRadius: '50%', border: '3px solid rgba(255,235,174,0.35)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-60px', right: '-60px', width: '320px', height: '320px', borderRadius: '50%', border: '2px solid rgba(255,235,174,0.25)', pointerEvents: 'none' }} />

      {/* Scattered ✦ stars */}
      {[
        { top: '12%', left: '6%', fontSize: '36px', opacity: 0.4 },
        { top: '72%', left: '3%', fontSize: '22px', opacity: 0.3 },
        { top: '20%', right: '5%', fontSize: '28px', opacity: 0.35 },
        { top: '60%', right: '7%', fontSize: '42px', opacity: 0.4 },
        { top: '45%', left: '8%', fontSize: '18px', opacity: 0.25 },
        { top: '85%', right: '12%', fontSize: '20px', opacity: 0.28 },
      ].map((s, i) => (
        <div key={i} style={{ position: 'absolute', ...s, fontFamily: 'serif', color: LEMON, pointerEvents: 'none', lineHeight: 1 }}>✦</div>
      ))}

      {/* Yellow squiggle accent — top right area */}
      <svg style={{ position: 'absolute', top: '40px', right: '80px', opacity: 0.35, pointerEvents: 'none' }} width="160" height="50" viewBox="0 0 160 50">
        <path d="M 0,25 C 20,5 35,45 55,25 C 75,5 90,45 110,25 C 130,5 145,45 160,25" stroke={LEMON} strokeWidth="3.5" fill="none" strokeLinecap="round" />
      </svg>

      {/* Yellow squiggle accent — bottom left */}
      <svg style={{ position: 'absolute', bottom: '50px', left: '60px', opacity: 0.35, pointerEvents: 'none' }} width="160" height="50" viewBox="0 0 160 50">
        <path d="M 0,25 C 20,5 35,45 55,25 C 75,5 90,45 110,25 C 130,5 145,45 160,25" stroke={LEMON} strokeWidth="3.5" fill="none" strokeLinecap="round" />
      </svg>

      {/* Dotted yellow row — top strip */}
      <div style={{ position: 'absolute', top: '18px', left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: '12px', pointerEvents: 'none' }}>
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} style={{ width: '5px', height: '5px', borderRadius: '50%', background: LEMON, opacity: 0.25 }} />
        ))}
      </div>

      {/* Dotted yellow row — bottom strip */}
      <div style={{ position: 'absolute', bottom: '18px', left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: '12px', pointerEvents: 'none' }}>
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} style={{ width: '5px', height: '5px', borderRadius: '50%', background: LEMON, opacity: 0.25 }} />
        ))}
      </div>

      {/* Outer frame wrapping everything */}
      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 52px' }}>
        <motion.div style={{
          padding: '60px 52px',
          background: '#f5f0e8',
          border: `3px solid ${INK}`,
          borderRadius: '8px',
          boxShadow: `10px 10px 0 ${INK}`,
          rotate: tilt,
        }}>

          {/* Section header */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: 'easeOut' }} style={{ marginBottom: '40px' }}>
            <div style={{ fontFamily: 'var(--font-dm-sans-nourish), system-ui, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: PERIWINKLE_DARK, background: LEMON, border: `2px solid ${INK}`, padding: '4px 12px', borderRadius: '4px', display: 'inline-block', marginBottom: '16px', boxShadow: `2px 2px 0 ${INK}` }}>
              ✦ The process
            </div>
            <h2 style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: 'clamp(36px, 4vw, 52px)', fontWeight: 700, lineHeight: 1.05, color: INK, letterSpacing: '-0.02em' }}>
              From first call to{' '}
              <em style={{ fontStyle: 'italic', color: PERIWINKLE_DARK, fontWeight: 300 }}>lasting change</em>
            </h2>
          </motion.div>

          {/* 4-col grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {steps.map((step, i) => (
              <motion.div key={step.num} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.08 }}
                style={{ transform: `rotate(${step.rotate})`, background: step.bg, backgroundImage: step.pattern, backgroundSize: (step as any).size ?? 'auto', border: `2.5px solid ${INK}`, borderRadius: '8px', padding: '24px 20px', boxShadow: `5px 5px 0 ${INK}` }}
              >
                <div style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: '52px', fontWeight: 700, color: PERIWINKLE_DARK, lineHeight: 1, marginBottom: '12px' }}>
                  {step.num}
                </div>
                <div style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: '18px', fontWeight: 700, color: INK, marginBottom: '8px' }}>
                  {step.title}
                </div>
                <div style={{ fontFamily: 'var(--font-dm-sans-nourish), system-ui, sans-serif', fontSize: '13px', color: '#4a4a30', fontWeight: 300, lineHeight: 1.7 }}>
                  {step.desc}
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  )
}
