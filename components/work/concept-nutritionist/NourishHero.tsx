'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useSpring } from 'framer-motion'

const INK = '#1a1a0e'
const PERIWINKLE = '#a7b5fc'
const PERIWINKLE_DARK = '#4a4fad'
const LEMON = '#ffebae'
const LEMON_DARK = '#e0c47a'
const PEACH = '#e8a882'

export default function NourishHero() {
  const WORD = 'actually'
  const [typed, setTyped] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let i = 0
    const type = setInterval(() => {
      i++
      setTyped(WORD.slice(0, i))
      if (i === WORD.length) clearInterval(type)
    }, 120)
    // Blink cursor
    const blink = setInterval(() => setShowCursor(c => !c), 530)
    return () => { clearInterval(type); clearInterval(blink) }
  }, [])

  const cardRef = useRef<HTMLDivElement>(null)
  const rotateX = useSpring(0, { stiffness: 150, damping: 20 })
  const rotateY = useSpring(0, { stiffness: 150, damping: 20 })

  function handleMouseMove(e: React.MouseEvent) {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    rotateX.set(-y * 18)
    rotateY.set(x * 18)
  }

  function handleMouseLeave() {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <section id="home" style={{ background: '#f5f0e8', position: 'relative', overflow: 'hidden', minHeight: '92vh', display: 'flex', alignItems: 'center', borderBottom: `3px solid ${INK}` }}>
      {/* Diagonal stripe bg */}
      <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(-45deg, transparent, transparent 24px, rgba(167,181,252,0.12) 24px, rgba(167,181,252,0.12) 48px)', pointerEvents: 'none' }} />

      {/* Lemon illustration decoration */}
      <svg style={{ position: 'absolute', right: -40, top: -40, width: 360, opacity: 0.18, pointerEvents: 'none' }} viewBox="0 0 300 320" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="150" cy="170" rx="110" ry="140" fill="#ffebae" transform="rotate(-15 150 170)" />
        <ellipse cx="150" cy="170" rx="80" ry="110" fill="#fff5d6" transform="rotate(-15 150 170)" />
        <path d="M150 30 C130 10 100 20 90 50" stroke="#a7b5fc" strokeWidth="8" fill="none" strokeLinecap="round" />
        <ellipse cx="75" cy="65" rx="30" ry="18" fill="#8b95e0" transform="rotate(-30 75 65)" />
        <ellipse cx="105" cy="40" rx="22" ry="13" fill="#a7b5fc" transform="rotate(-10 105 40)" />
      </svg>

      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1140, margin: '0 auto', padding: '80px 52px', width: '100%', display: 'grid', gridTemplateColumns: '6fr 5fr', gap: '64px', alignItems: 'center' }}>

        {/* Left */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
          {/* Kicker */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: PERIWINKLE_DARK, background: LEMON, border: `2px solid ${INK}`, padding: '5px 14px', borderRadius: '4px', marginBottom: '24px', boxShadow: `2px 2px 0 ${INK}`, fontFamily: 'var(--font-dm-sans-nourish), system-ui, sans-serif' }}>
            ✦ Clinical Nutritionist · Brisbane + Telehealth
          </div>

          {/* Headline */}
          <h1 style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: 'clamp(56px, 7vw, 88px)', fontWeight: 700, lineHeight: 0.92, color: INK, letterSpacing: '-0.03em', marginBottom: '20px' }}>
            Food that
            <br />
            <span style={{ position: 'relative', display: 'inline-block', color: PERIWINKLE_DARK, fontStyle: 'italic', fontWeight: 700, fontSize: '1.1em' }}>
              {typed}<span style={{ opacity: showCursor ? 1 : 0, color: PERIWINKLE_DARK }}>|</span>
              <span style={{ position: 'absolute', bottom: -2, left: 0, right: 0, height: '8px', background: PERIWINKLE, borderRadius: '2px', zIndex: -1, opacity: 0.4 }} />
            </span>
            <br />
            <em style={{ fontStyle: 'italic', fontWeight: 300, color: PERIWINKLE_DARK, display: 'block' }}>works for you</em>
          </h1>

          <p style={{ fontFamily: 'var(--font-dm-sans-nourish), system-ui, sans-serif', fontSize: '16px', color: '#4a4a30', fontWeight: 300, lineHeight: 1.8, marginBottom: '40px', maxWidth: '420px' }}>
            Personalised nutrition coaching for people who are tired of conflicting advice and want to feel good in their body. For real life. For real you.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <motion.a
              href="#contact"
              style={{ background: PERIWINKLE_DARK, color: '#fff', padding: '16px 32px', border: `2.5px solid ${INK}`, borderRadius: '4px', fontFamily: 'var(--font-dm-sans-nourish), system-ui, sans-serif', fontSize: '14px', fontWeight: 700, textDecoration: 'none', letterSpacing: '0.04em', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: '8px', boxShadow: `4px 4px 0 ${INK}` }}
              whileHover={{ scale: 1.04, rotate: [0, -2, 2, -1, 1, 0], transition: { scale: { type: 'spring', stiffness: 400 }, rotate: { duration: 0.4, ease: 'easeInOut' } } }}
              whileTap={{ scale: 0.96 }}
            >
              Book a free call
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </motion.a>
            <a href="#services" style={{ color: PERIWINKLE_DARK, fontFamily: 'var(--font-dm-sans-nourish), system-ui, sans-serif', fontSize: '13px', fontWeight: 500, textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase', borderBottom: `2px solid ${PERIWINKLE}`, paddingBottom: '1px' }}>
              See services →
            </a>
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', gap: '36px', marginTop: '40px', paddingTop: '32px', borderTop: '2px solid rgba(167,181,252,0.35)' }}>
            {[{ num: '200+', label: 'clients supported' }, { num: '5 yrs', label: 'in practice' }, { num: '98%', label: 'client satisfaction' }].map((stat) => (
              <div key={stat.label}>
                <div style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: '36px', fontWeight: 700, color: PERIWINKLE_DARK, lineHeight: 1, marginBottom: '3px' }}>{stat.num}</div>
                <div style={{ fontFamily: 'var(--font-dm-sans-nourish), system-ui, sans-serif', fontSize: '11px', color: '#8a8a6a', fontWeight: 300, letterSpacing: '0.04em' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — postcard */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }} style={{ position: 'relative', perspective: 800 }}>
          {/* Ribbon badge */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            style={{ position: 'absolute', top: '-16px', right: '16px', background: PEACH, border: `2.5px solid ${INK}`, borderRadius: '50%', width: '72px', height: '72px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', fontFamily: 'var(--font-dm-sans-nourish), system-ui, sans-serif', fontSize: '9px', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: INK, boxShadow: `3px 3px 0 ${INK}`, padding: '8px', zIndex: 2 }}
          >
            Now accepting ✦
          </motion.div>

          {/* Tilt wrapper */}
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
          >
            {/* Postcard */}
            <div style={{ background: '#fffef8', border: `3px solid ${INK}`, borderRadius: '8px', boxShadow: `8px 8px 0 ${INK}`, overflow: 'hidden', transform: 'rotate(-1deg)' }}>
              {/* Photo */}
              <div style={{ aspectRatio: '4/3', borderBottom: `3px solid ${INK}`, overflow: 'hidden', background: '#fde8ee', backgroundImage: 'radial-gradient(circle, #f4a8bc 2.5px, transparent 2.5px)', backgroundSize: '20px 20px', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                <img src="/images/portfolio/concept-nutritionist/clara-about.png" alt="Clara Bennett" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }} />
              </div>
              {/* Bottom row */}
              <div style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: '18px', fontWeight: 700, color: INK }}>Clara Bennett</div>
                  <div style={{ fontFamily: 'var(--font-dm-sans-nourish), system-ui, sans-serif', fontSize: '11px', color: '#8a8a6a', fontWeight: 300, letterSpacing: '0.05em', marginTop: '2px' }}>BHSc · Clinical Nutritionist · ANTA</div>
                </div>
                <div style={{ width: '48px', height: '56px', background: LEMON, border: `2px solid ${INK}`, borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', boxShadow: `2px 2px 0 ${INK}` }}>
                  🌿
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
