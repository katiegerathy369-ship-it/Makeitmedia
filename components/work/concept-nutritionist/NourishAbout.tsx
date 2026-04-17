'use client'

import { motion } from 'framer-motion'

const INK = '#1a1a0e'
const PERIWINKLE = '#a7b5fc'
const PERIWINKLE_DARK = '#4a4fad'
const LEMON = '#ffebae'

const creds = [
  { dot: '🎓', text: 'Bachelor of Health Science (Nutrition)' },
  { dot: '🩺', text: 'ANTA Certified Clinical Nutritionist' },
  { dot: '💛', text: 'Holistic & functional nutrition approach' },
  { dot: '💰', text: 'Private health fund rebates available (ANTA)' },
]

const specialisations = [
  'Weight Management',
  'PCOS',
  'Sports & Performance Nutrition',
  'Meal Planning',
  'Diabetes, Hypertension & Heart Disease',
  'Healthy Lifestyle Changes',
  'Personal Training',
]

export default function NourishAbout() {
  return (
    <section id="about" style={{ background: '#fdeee4', padding: '100px 0', borderTop: `3px solid ${INK}`, borderBottom: `3px solid ${INK}`, position: 'relative', overflow: 'hidden' }}>
      {/* Large retro circle decoration */}
      <div style={{ position: 'absolute', right: '-120px', bottom: '-120px', width: '400px', height: '400px', borderRadius: '50%', background: '#f5cdb4', border: '3px solid rgba(26,26,14,0.08)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 52px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center', position: 'relative', zIndex: 1 }}>

        {/* Left — photo frame */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: 'easeOut' }} style={{ position: 'relative' }}>
          <div style={{ border: `3px solid ${INK}`, borderRadius: '8px', aspectRatio: '3/4', boxShadow: `8px 8px 0 ${INK}`, overflow: 'hidden', background: '#fde8ee', backgroundImage: 'radial-gradient(circle, #f4a8bc 2.5px, transparent 2.5px)', backgroundSize: '20px 20px', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
            <img src="/images/portfolio/concept-nutritionist/clara-hero.png" alt="Clara Bennett" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }} />
          </div>

          {/* Floating credential card */}
          <div style={{ position: 'absolute', bottom: '-20px', right: '-24px', background: LEMON, border: `2.5px solid ${INK}`, borderRadius: '8px', padding: '16px 20px', boxShadow: `4px 4px 0 ${INK}`, minWidth: '160px' }}>
            <div style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: '36px', fontWeight: 700, color: PERIWINKLE_DARK, lineHeight: 1 }}>5 yrs</div>
            <div style={{ fontFamily: 'var(--font-dm-sans-nourish), system-ui, sans-serif', fontSize: '11px', color: '#4a4a30', fontWeight: 300, marginTop: '2px' }}>clinical experience</div>
          </div>
        </motion.div>

        {/* Right — copy */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}>
          <div style={{ fontFamily: 'var(--font-dm-sans-nourish), system-ui, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: PERIWINKLE_DARK, background: LEMON, border: `2px solid ${INK}`, padding: '4px 12px', borderRadius: '4px', display: 'inline-block', marginBottom: '20px', boxShadow: `2px 2px 0 ${INK}` }}>
            ✦ Hi, I&apos;m Clara
          </div>

          <h2 style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: 'clamp(38px, 4.5vw, 56px)', fontWeight: 700, lineHeight: 1.0, color: INK, letterSpacing: '-0.02em', marginBottom: '20px' }}>
            Let&apos;s make food
            <br /><em style={{ fontStyle: 'italic', color: PERIWINKLE_DARK, fontWeight: 300 }}>simple again.</em>
          </h2>

          <p style={{ fontFamily: 'var(--font-dm-sans-nourish), system-ui, sans-serif', fontSize: '15px', color: '#4a4a30', fontWeight: 300, lineHeight: 1.85, marginBottom: '14px' }}>
            I&apos;m Clara, a holistic Clinical Nutritionist passionate about helping people implement realistic nutrition strategies that are sustainable and results-driven. I believe in a personalised nutrition approach when working with my clients to support them wherever they are in their journey.
          </p>
          <p style={{ fontFamily: 'var(--font-dm-sans-nourish), system-ui, sans-serif', fontSize: '15px', color: '#4a4a30', fontWeight: 300, lineHeight: 1.85, marginBottom: '20px' }}>
            As a tertiary-qualified Clinical Nutritionist (BHSc), I take detailed health histories, interpret pathology results, and design personalised nutritional medicine programs, combining evidence-based dietary protocols with targeted supplementation.{' '}
            <strong style={{ fontWeight: 700, color: INK }}>I offer 1-on-1 nutrition counselling and group coaching programs.</strong>
          </p>

          {/* Specialisations */}
          <div style={{ fontFamily: 'var(--font-dm-sans-nourish), system-ui, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: PERIWINKLE_DARK, marginBottom: '10px' }}>
            Specialising in
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
            {specialisations.map((s) => (
              <span key={s} style={{ fontFamily: 'var(--font-dm-sans-nourish), system-ui, sans-serif', fontSize: '12px', fontWeight: 500, color: INK, background: LEMON, border: `1.5px solid ${INK}`, borderRadius: '4px', padding: '4px 10px', boxShadow: `1.5px 1.5px 0 ${INK}` }}>
                {s}
              </span>
            ))}
          </div>

          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {creds.map((cred) => (
              <li key={cred.text} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'var(--font-dm-sans-nourish), system-ui, sans-serif', fontSize: '14px', color: '#4a4a30', fontWeight: 300 }}>
                <div style={{ width: '30px', height: '30px', flexShrink: 0, background: PERIWINKLE, border: `2px solid ${INK}`, borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', boxShadow: `1px 1px 0 ${INK}` }}>
                  {cred.dot}
                </div>
                {cred.text}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
