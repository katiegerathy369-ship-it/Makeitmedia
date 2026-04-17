'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const INK = '#1a1a0e'
const PERIWINKLE = '#a7b5fc'
const PERIWINKLE_DARK = '#4a4fad'
const LEMON = '#ffebae'

const services = [
  { icon: '🌿', name: 'Nourish Kickstart', desc: "A 4-week jumpstart: initial consult, personalised plan, two follow-ups, and unlimited messaging support to get you moving.", price: 'From $195', bg: '#fdeee4' },
  { icon: '⭐', name: 'Nourish 8-Week Program', desc: 'The full transformation. Eight weeks of structured nutrition coaching, weekly check-ins, meal planning, and full lab review support.', price: 'From $680', bg: LEMON, featured: true },
  { icon: '🔄', name: 'Single Consultation', desc: 'A one-off 60-minute session for a specific concern: gut health, hormones, sports nutrition, or a second opinion on your current plan.', price: 'From $145', bg: '#dceef7' },
  { icon: '⚡', name: 'Hormone Reset', desc: 'Targeted nutrition for PCOS, thyroid, perimenopause and cycle irregularities. Works alongside your GP or specialist.', price: 'From $520', bg: '#fffef8' },
  { icon: '📋', name: 'Meal Plan Add-on', desc: 'A 4-week plan built for your actual life: your preferences, your schedule, your budget. Not a generic PDF.', price: 'From $95', bg: '#d4e2fe' },
  { icon: '☎️', name: 'Free Discovery Call', desc: '20 minutes to chat about what\'s going on and figure out the right starting point. No pressure, no obligation.', price: 'Free 🎉', bg: '#fff8e0' },
]

export default function NourishServices() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])

  return (
    <section ref={sectionRef} id="services" style={{ background: '#fffef8', padding: '100px 0', borderBottom: `3px solid ${INK}`, position: 'relative', overflow: 'hidden' }}>
      {/* Scroll-rotating lemon wedge */}
      <motion.img
        src="/images/portfolio/concept-nutritionist/lemon-wedge.png"
        alt=""
        style={{ rotate, position: 'absolute', top: '80px', right: '60px', width: '260px', pointerEvents: 'none', zIndex: 0 }}
      />

      {/* Section header */}
      <div style={{ maxWidth: 1140, margin: '0 auto 56px', padding: '0 52px' }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: 'easeOut' }}>
          <div style={{ fontFamily: 'var(--font-dm-sans-nourish), system-ui, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: PERIWINKLE_DARK, background: LEMON, border: `2px solid ${INK}`, padding: '4px 12px', borderRadius: '4px', display: 'inline-block', marginBottom: '16px', boxShadow: `2px 2px 0 ${INK}` }}>
            ✦ Ways to work together
          </div>
          <h2 style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: 'clamp(36px, 4vw, 52px)', fontWeight: 700, lineHeight: 1.05, color: INK, letterSpacing: '-0.02em' }}>
            Find the program<br />that fits{' '}
            <em style={{ fontStyle: 'italic', color: PERIWINKLE_DARK, fontWeight: 300 }}>your life</em>
          </h2>
        </motion.div>
      </div>

      {/* 3×2 grid */}
      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 52px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        {services.map((svc, i) => (
          <motion.div key={svc.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.06 }}
            whileHover={{ y: -8, rotate: i % 2 === 0 ? 1.5 : -1.5, boxShadow: '8px 8px 0px #1a1a0e', transition: { type: 'spring', stiffness: 400, damping: 20 } }}
            whileTap={{ scale: 0.97 }}
            style={{ background: svc.bg, border: `2.5px solid ${INK}`, borderRadius: '8px', padding: '28px 24px', boxShadow: `5px 5px 0 ${INK}`, position: 'relative' }}
          >
            <span style={{ fontSize: '32px', marginBottom: '14px', display: 'block' }}>{svc.icon}</span>
            <div style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: '20px', fontWeight: 700, color: INK, marginBottom: '8px', letterSpacing: '-0.01em', lineHeight: 1.1 }}>{svc.name}</div>
            <div style={{ fontFamily: 'var(--font-dm-sans-nourish), system-ui, sans-serif', fontSize: '13px', color: '#4a4a30', fontWeight: 300, lineHeight: 1.7, marginBottom: '16px' }}>{svc.desc}</div>
            <span style={{ display: 'inline-flex', alignItems: 'center', background: svc.featured ? PERIWINKLE_DARK : INK, color: '#fff', fontSize: '12px', fontWeight: 700, letterSpacing: '0.04em', padding: '4px 12px', borderRadius: '4px', fontFamily: 'var(--font-dm-sans-nourish), system-ui, sans-serif' }}>
              {svc.price}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
