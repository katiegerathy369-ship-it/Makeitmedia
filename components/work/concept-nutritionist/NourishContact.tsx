'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

// TODO: wire up form submission

const INK = '#1a1a0e'
const PERIWINKLE = '#a7b5fc'
const PERIWINKLE_DARK = '#4a4fad'
const LEMON = '#ffebae'
const PEACH = '#e8a882'

type FormState = {
  firstName: string
  lastName: string
  email: string
  concern: string
  message: string
}

export default function NourishContact() {
  const [form, setForm] = useState<FormState>({ firstName: '', lastName: '', email: '', concern: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: wire up form submission
    setSubmitted(true)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: '#f5f0e8',
    border: `2px solid ${INK}`,
    borderRadius: '6px',
    padding: '12px 14px',
    fontFamily: 'var(--font-dm-sans-nourish), system-ui, sans-serif',
    fontSize: '14px',
    color: INK,
    outline: 'none',
    fontWeight: 300,
  }

  return (
    <section id="contact" style={{ background: '#f5f0e8', padding: '100px 0' }}>
      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 52px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>

        {/* Left */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: 'easeOut' }}>
          <div style={{ fontFamily: 'var(--font-dm-sans-nourish), system-ui, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: PERIWINKLE_DARK, background: LEMON, border: `2px solid ${INK}`, padding: '4px 12px', borderRadius: '4px', display: 'inline-block', marginBottom: '16px', boxShadow: `2px 2px 0 ${INK}` }}>
            ✦ Let&apos;s chat
          </div>
          <h2 style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: 'clamp(40px, 5vw, 60px)', fontWeight: 700, lineHeight: 1.0, color: INK, letterSpacing: '-0.02em', marginBottom: '16px' }}>
            Ready to feel<br />good in your<br /><em style={{ fontStyle: 'italic', color: PERIWINKLE_DARK, fontWeight: 300 }}>body again?</em>
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-sans-nourish), system-ui, sans-serif', fontSize: '15px', color: '#4a4a30', fontWeight: 300, lineHeight: 1.8, marginBottom: '28px' }}>
            Book a free 20-minute discovery call. No awkward sales pitch — just an honest chat about what&apos;s going on and whether I can help.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
            {[
              { icon: '📍', label: 'Brisbane CBD + telehealth nationally' },
              { icon: '⏰', label: 'Responses within 24 hours' },
              { icon: '💌', label: 'hello@nourishandco.com.au' },
            ].map((item) => (
              <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'var(--font-dm-sans-nourish), system-ui, sans-serif', fontSize: '14px', color: '#4a4a30', fontWeight: 300 }}>
                <div style={{ background: PERIWINKLE_DARK, color: '#fff', border: `1.5px solid ${INK}`, borderRadius: '4px', width: '30px', height: '30px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', boxShadow: `1.5px 1.5px 0 ${INK}` }}>
                  {item.icon}
                </div>
                {item.label}
              </div>
            ))}
          </div>

        </motion.div>

        {/* Right — form */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}>
          <div style={{ background: '#fffef8', border: `3px solid ${INK}`, borderRadius: '8px', padding: '36px', boxShadow: `8px 8px 0 ${INK}` }}>
            <form onSubmit={handleSubmit}>
              {/* Name row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-dm-sans-nourish), system-ui, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: PERIWINKLE_DARK, marginBottom: '7px' }}>First name</label>
                  <input name="firstName" type="text" placeholder="Jessica" required value={form.firstName} onChange={handleChange} style={inputStyle} />
                </div>
                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-dm-sans-nourish), system-ui, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: PERIWINKLE_DARK, marginBottom: '7px' }}>Last name</label>
                  <input name="lastName" type="text" placeholder="Taylor" required value={form.lastName} onChange={handleChange} style={inputStyle} />
                </div>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontFamily: 'var(--font-dm-sans-nourish), system-ui, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: PERIWINKLE_DARK, marginBottom: '7px' }}>Email</label>
                <input name="email" type="email" placeholder="jessica@email.com" required value={form.email} onChange={handleChange} style={inputStyle} />
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontFamily: 'var(--font-dm-sans-nourish), system-ui, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: PERIWINKLE_DARK, marginBottom: '7px' }}>What brings you here?</label>
                <select name="concern" required value={form.concern} onChange={handleChange} style={{ ...inputStyle, cursor: 'pointer', appearance: 'none' }}>
                  <option value="" disabled>Select your main concern</option>
                  <option>Gut health & digestion</option>
                  <option>Hormonal health & PCOS</option>
                  <option>Weight management</option>
                  <option>Energy & fatigue</option>
                  <option>Sports nutrition</option>
                  <option>General healthy eating</option>
                  <option>Something else</option>
                </select>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontFamily: 'var(--font-dm-sans-nourish), system-ui, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: PERIWINKLE_DARK, marginBottom: '7px' }}>Anything else?</label>
                <textarea name="message" placeholder="Tell me what's been going on..." value={form.message} onChange={handleChange} style={{ ...inputStyle, resize: 'vertical', minHeight: '96px' }} />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.04, rotate: [0, -2, 2, -1, 1, 0], transition: { scale: { type: 'spring', stiffness: 400 }, rotate: { duration: 0.4, ease: 'easeInOut' } } }}
                whileTap={{ scale: 0.96 }}
                style={{
                  width: '100%',
                  background: submitted ? PEACH : PERIWINKLE_DARK,
                  color: '#fff',
                  padding: '15px',
                  borderRadius: '6px',
                  fontFamily: 'var(--font-dm-sans-nourish), system-ui, sans-serif',
                  fontSize: '14px',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  border: `2.5px solid ${INK}`,
                  cursor: submitted ? 'default' : 'pointer',
                  marginTop: '8px',
                  boxShadow: `4px 4px 0 ${INK}`,
                }}
                disabled={submitted}
              >
                {submitted ? 'Sent! Talk soon 🍋' : 'Book my free discovery call →'}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
