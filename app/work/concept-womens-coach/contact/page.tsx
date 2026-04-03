'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SheThrivesNav from '@/components/work/she-thrives/SheThrivesNav'
import SheThrivesFooter from '@/components/work/she-thrives/SheThrivesFooter'

const BASE = '/work/concept-womens-coach'

const contactDetails = [
  { icon: '📍', text: 'Brisbane + telehealth available nationally' },
  { icon: '⏰', text: 'Responses within 24 hours' },
  { icon: '💌', text: 'grace@shethrives.com.au' },
]

const testimonials = [
  {
    quote: 'Grace changed my life in 12 weeks. I finally feel like myself again.',
    name: 'Lauren H.',
    program: 'The Thrive Method',
  },
  {
    quote: "I wish I'd found her years ago. My hormones are finally balanced.",
    name: 'Mia T.',
    program: 'Hormone Reset',
  },
  {
    quote: 'I stopped waking up exhausted. Worth every cent.',
    name: 'Sophie R.',
    program: 'Energy Recovery',
  },
]

const concernOptions = [
  'Hormonal health & PCOS',
  'Burnout & exhaustion',
  'Cycle irregularities',
  'Perimenopause support',
  'Anxiety & stress',
  'Weight & body image',
  'General wellness coaching',
  'Something else',
]

const sourceOptions = [
  'Instagram',
  'TikTok',
  'Google',
  'Friend or family referral',
  'Another practitioner',
  'Other',
]

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: '#fdf4f0',
  border: '1px solid #e8dcc8',
  borderRadius: '10px',
  padding: '13px 16px',
  fontFamily: 'var(--font-body)',
  fontSize: '14px',
  color: '#1e1412',
  outline: 'none',
  fontWeight: 300,
  transition: 'border-color 0.2s, box-shadow 0.2s',
}

function useFocusStyle() {
  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = '#c4706a'
    e.target.style.boxShadow = '0 0 0 3px rgba(196,112,106,0.1)'
  }
  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = '#e8dcc8'
    e.target.style.boxShadow = 'none'
  }
  return { onFocus, onBlur }
}

/* ── Left Panel ──────────────────────────────────────────────────────────── */

function LeftPanel() {
  return (
    <div
      style={{
        background: '#fdf4f0',
        padding: '120px clamp(20px, 4vw, 64px) 64px',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Wordmark */}
      <span
        style={{
          fontFamily: 'var(--font-display), Georgia, serif',
          fontSize: 22,
          color: '#c4706a',
        }}
      >
        She Thrives Co.
      </span>

      {/* Divider */}
      <div style={{ height: 1, background: '#e8dcc8', margin: '24px 0' }} />

      {/* Headline */}
      <h1
        style={{
          fontFamily: 'var(--font-display), Georgia, serif',
          fontSize: 'clamp(48px, 5vw, 68px)',
          fontWeight: 400,
          lineHeight: 0.95,
          color: 'var(--ink)',
        }}
      >
        Let&apos;s
        <br />
        talk.
      </h1>

      {/* Subheadline */}
      <p
        style={{
          fontFamily: 'var(--font-body), system-ui, sans-serif',
          fontSize: 16,
          fontWeight: 300,
          lineHeight: 1.8,
          color: 'var(--ink-mid)',
          marginTop: 20,
          maxWidth: 340,
        }}
      >
        Book a free 20-minute discovery call — no pitch, no pressure. Just an
        honest conversation about where you are and where you want to be.
      </p>

      {/* Contact details */}
      <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 14 }}>
        {contactDetails.map((d) => (
          <div key={d.icon} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: '#f2d4cc',
                border: '1px solid #e8b4a8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                flexShrink: 0,
              }}
            >
              {d.icon}
            </div>
            <span style={{ fontSize: '14px', color: '#5a4a44', fontWeight: 300 }}>
              {d.text}
            </span>
          </div>
        ))}
      </div>

      {/* Pull quotes */}
      <div style={{ marginTop: 48 }}>
        {testimonials.map((t, i) => (
          <blockquote
            key={i}
            className={i > 0 ? 'contact-quote-hide-mobile' : undefined}
            style={{
              padding: '20px 0',
              borderTop: '1px solid #f2d4cc',
              margin: 0,
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '15px',
                fontStyle: 'italic',
                color: '#1e1412',
                lineHeight: 1.55,
                marginBottom: '8px',
              }}
            >
              &ldquo;{t.quote}&rdquo;
            </p>
            <span
              style={{
                fontSize: '11px',
                color: '#9a8a84',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              — {t.name} · {t.program}
            </span>
          </blockquote>
        ))}
      </div>

      {/* Botanical decoration */}
      <div
        className="contact-botanical"
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: 180,
          opacity: 0.12,
          pointerEvents: 'none',
        }}
      >
        <Image
          src="/images/portfolio/concept-womens-health-coach-shethrivesco/hero-flowers.png"
          alt=""
          width={180}
          height={240}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>

      {/* Site credit */}
      <div
        style={{
          position: 'absolute',
          bottom: 32,
          left: 'clamp(20px, 4vw, 64px)',
          fontSize: '11px',
          color: '#9a8a84',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}
      >
        <div
          style={{
            width: '5px',
            height: '5px',
            borderRadius: '50%',
            background: '#c4706a',
            opacity: 0.5,
          }}
        />
        Site by Make It Media
      </div>
    </div>
  )
}

/* ── Right Panel (Form) ──────────────────────────────────────────────────── */

function RightPanel() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    concern: '',
    message: '',
    source: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [firstName, setFirstName] = useState('')
  const focus = useFocusStyle()

  function update(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setFirstName(form.firstName)
    setSubmitted(true)
  }

  return (
    <div style={{ background: '#fff', padding: '120px clamp(20px, 4vw, 64px) 64px' }}>
      {submitted ? (
        <div
          style={{
            background: '#fdf4f0',
            borderRadius: '20px',
            padding: '56px clamp(20px, 4vw, 48px)',
            textAlign: 'center',
            border: '1px solid #e8dcc8',
          }}
        >
          <div style={{ fontSize: '40px', marginBottom: '20px' }}>✦</div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '32px',
              color: '#1e1412',
              marginBottom: '12px',
            }}
          >
            Thank you, {firstName}.
          </h2>
          <p
            style={{
              fontSize: '15px',
              color: '#5a4a44',
              fontWeight: 300,
              lineHeight: 1.75,
            }}
          >
            Grace will be in touch within 24 hours. In the meantime, feel free
            to browse the site or follow along on Instagram.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {/* Form label */}
          <span
            style={{
              fontFamily: 'var(--font-body), system-ui, sans-serif',
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#c4706a',
              display: 'block',
              marginBottom: 32,
            }}
          >
            Send an enquiry
          </span>

          {/* First + Last name */}
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ display: 'grid', gap: 16, marginBottom: 16 }}>
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: 12,
                  fontWeight: 400,
                  color: '#5a4a44',
                  marginBottom: 6,
                  fontFamily: 'var(--font-body)',
                }}
              >
                First name
              </label>
              <input
                type="text"
                required
                value={form.firstName}
                onChange={(e) => update('firstName', e.target.value)}
                style={inputStyle}
                {...focus}
              />
            </div>
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: 12,
                  fontWeight: 400,
                  color: '#5a4a44',
                  marginBottom: 6,
                  fontFamily: 'var(--font-body)',
                }}
              >
                Last name
              </label>
              <input
                type="text"
                required
                value={form.lastName}
                onChange={(e) => update('lastName', e.target.value)}
                style={inputStyle}
                {...focus}
              />
            </div>
          </div>

          {/* Email */}
          <div style={{ marginBottom: 16 }}>
            <label
              style={{
                display: 'block',
                fontSize: 12,
                fontWeight: 400,
                color: '#5a4a44',
                marginBottom: 6,
                fontFamily: 'var(--font-body)',
              }}
            >
              Email address
            </label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => update('email', e.target.value)}
              style={inputStyle}
              {...focus}
            />
          </div>

          {/* Phone */}
          <div style={{ marginBottom: 16 }}>
            <label
              style={{
                display: 'block',
                fontSize: 12,
                fontWeight: 400,
                color: '#5a4a44',
                marginBottom: 6,
                fontFamily: 'var(--font-body)',
              }}
            >
              Phone number <span style={{ color: '#9a8a84', fontWeight: 300 }}>(optional)</span>
            </label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => update('phone', e.target.value)}
              style={inputStyle}
              {...focus}
            />
          </div>

          {/* Concern select */}
          <div style={{ marginBottom: 16 }}>
            <label
              style={{
                display: 'block',
                fontSize: 12,
                fontWeight: 400,
                color: '#5a4a44',
                marginBottom: 6,
                fontFamily: 'var(--font-body)',
              }}
            >
              What are you hoping to work on?
            </label>
            <select
              required
              value={form.concern}
              onChange={(e) => update('concern', e.target.value)}
              style={{ ...inputStyle, appearance: 'none', WebkitAppearance: 'none' }}
              {...focus}
            >
              <option value="" disabled>
                Select an option
              </option>
              {concernOptions.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div style={{ marginBottom: 16 }}>
            <label
              style={{
                display: 'block',
                fontSize: 12,
                fontWeight: 400,
                color: '#5a4a44',
                marginBottom: 6,
                fontFamily: 'var(--font-body)',
              }}
            >
              Tell me what&apos;s been going on
            </label>
            <textarea
              value={form.message}
              onChange={(e) => update('message', e.target.value)}
              placeholder="Share as much or as little as you'd like — the more I know, the better I can help."
              style={{ ...inputStyle, minHeight: 120, resize: 'vertical' }}
              {...focus}
            />
          </div>

          {/* Source select */}
          <div style={{ marginBottom: 16 }}>
            <label
              style={{
                display: 'block',
                fontSize: 12,
                fontWeight: 400,
                color: '#5a4a44',
                marginBottom: 6,
                fontFamily: 'var(--font-body)',
              }}
            >
              How did you hear about Grace?
            </label>
            <select
              value={form.source}
              onChange={(e) => update('source', e.target.value)}
              style={{ ...inputStyle, appearance: 'none', WebkitAppearance: 'none' }}
              {...focus}
            >
              <option value="" disabled>
                Select an option
              </option>
              {sourceOptions.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            style={{
              width: '100%',
              background: '#c4706a',
              color: '#fff',
              padding: '16px',
              borderRadius: '100px',
              fontFamily: 'var(--font-body)',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              border: 'none',
              cursor: 'pointer',
              transition: 'background 0.2s, transform 0.15s',
              marginTop: 8,
            }}
          >
            Send my enquiry →
          </button>
        </form>
      )}
    </div>
  )
}

/* ── Page ──────────────────────────────────────────────────────────────── */

export default function ContactPage() {
  return (
    <>
      <SheThrivesNav />
      <main>
        <div className="contact-grid">
          <LeftPanel />
          <RightPanel />
        </div>
      </main>
      <SheThrivesFooter />

      <style jsx global>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 100vh;
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
          .contact-grid > div:first-child {
            min-height: auto !important;
            padding: 100px 24px 48px !important;
            position: static !important;
          }
          .contact-grid > div:last-child {
            padding: 48px 24px !important;
          }
          .contact-botanical {
            display: none !important;
          }
          .contact-quote-hide-mobile {
            display: none !important;
          }
        }
      `}</style>
    </>
  )
}
