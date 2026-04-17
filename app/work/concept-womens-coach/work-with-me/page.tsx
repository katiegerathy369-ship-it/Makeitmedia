'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import SheThrivesNav from '@/components/work/she-thrives/SheThrivesNav'
import SheThrivesFooter from '@/components/work/she-thrives/SheThrivesFooter'

const BASE = '/work/concept-womens-coach'

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
  transition: { duration: 0.6, ease: 'easeOut' as const },
}

/* ── 1. Page Hero ─────────────────────────────────────────────────────────── */

function PageHero() {
  return (
    <section
      style={{
        background: 'var(--rose)',
        minHeight: '52vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative watermark */}
      <span
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontFamily: 'var(--font-display), Georgia, serif',
          fontSize: 'clamp(120px, 16vw, 200px)',
          fontWeight: 400,
          color: 'rgba(255,255,255,0.08)',
          lineHeight: 1,
          pointerEvents: 'none',
          zIndex: 0,
          whiteSpace: 'nowrap',
        }}
      >
        Thrive
      </span>

      <div style={{ maxWidth: 700, margin: '0 auto', padding: '160px clamp(20px, 4vw, 48px) 100px', position: 'relative', zIndex: 1 }}>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            fontFamily: 'var(--font-display), Georgia, serif',
            fontSize: 'clamp(36px, 4.5vw, 56px)',
            fontWeight: 400,
            lineHeight: 1.12,
            color: '#fff',
            marginBottom: 20,
          }}
        >
          Find the program that
          <br />
          fits your <em style={{ fontStyle: 'italic' }}>life.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          style={{
            fontFamily: 'var(--font-body), system-ui, sans-serif',
            fontSize: 16,
            fontWeight: 300,
            lineHeight: 1.8,
            color: 'rgba(255,255,255,0.7)',
            maxWidth: 500,
            margin: '0 auto 48px',
          }}
        >
          Every program is personalised. Pick a starting point and we&apos;ll
          shape it around you.
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            style={{
              display: 'inline-block',
              fontSize: 20,
              color: 'rgba(255,255,255,0.4)',
            }}
          >
            ↓
          </motion.span>
        </motion.div>
      </div>
    </section>
  )
}

/* ── 2. Program Cards ─────────────────────────────────────────────────────── */

interface Program {
  title: string
  duration: string
  bg: string
  whoFor: string
  includes: string[]
  investment: string
  placeholder: {
    gradient: string
    icon: string
    decorativeNumber: string
    label: string
  }
  testimonial: {
    quote: string
    name: string
    initial: string
  }
}

const programs: Program[] = [
  {
    title: 'The Thrive Method',
    duration: '12 Weeks',
    bg: 'var(--blush-pale)',
    whoFor:
      'Women who are ready for a full reset. You want to rebuild your energy, balance your hormones, and create sustainable habits that actually stick.',
    includes: [
      'Weekly 1:1 coaching sessions',
      'Personalised wellness protocol',
      'Unlimited messaging support',
      'Habit tracking & accountability',
      'Supplement review & guidance',
      'Meal guidance & cycle syncing plan',
    ],
    investment: 'From $1,800',
    placeholder: {
      gradient: 'linear-gradient(135deg, #f2d4cc 0%, #e8b4a8 50%, #fdf4f0 100%)',
      icon: '✦',
      decorativeNumber: '12',
      label: '12 weeks · 1:1 coaching',
    },
    testimonial: {
      quote: 'I finally feel like myself again.',
      name: 'Lauren H.',
      initial: 'L',
    },
  },
  {
    title: 'Hormone Reset',
    duration: '6 Weeks',
    bg: 'var(--warm)',
    whoFor:
      'Women dealing with PCOS, irregular cycles, perimenopause, or hormonal symptoms that are disrupting daily life. You want targeted support without a long-term commitment.',
    includes: [
      'Fortnightly 1:1 coaching sessions',
      'Hormone health protocol',
      'Cycle tracking guide & tools',
      'Supplement support plan',
    ],
    investment: 'From $890',
    placeholder: {
      gradient: 'linear-gradient(135deg, #fae8e4 0%, #f2d4cc 100%)',
      icon: '🌸',
      decorativeNumber: '6',
      label: '6 weeks · hormone focus',
    },
    testimonial: {
      quote: 'My PCOS symptoms improved more in 6 weeks than in 3 years.',
      name: 'Mia T.',
      initial: 'M',
    },
  },
  {
    title: 'Energy & Burnout Recovery',
    duration: '6 Weeks',
    bg: 'var(--rose-pale)',
    whoFor:
      'Women experiencing chronic fatigue, burnout, or exhaustion despite getting rest. You need a plan that addresses the root cause, not just the symptoms.',
    includes: [
      'Sleep audit & optimisation plan',
      'Stress & nervous system protocol',
      'Energy-focused nutrition plan',
      'Nervous system support toolkit',
    ],
    investment: 'From $790',
    placeholder: {
      gradient: 'linear-gradient(135deg, #f8f2e8 0%, #e8dcc8 100%)',
      icon: '⚡',
      decorativeNumber: '6',
      label: '6 weeks · energy reset',
    },
    testimonial: {
      quote: 'I stopped waking up exhausted. Worth every cent.',
      name: 'Sophie R.',
      initial: 'S',
    },
  },
  {
    title: 'Single Deep-Dive Session',
    duration: '90 Minutes',
    bg: 'var(--cream)',
    whoFor:
      'You don\'t need an ongoing program. Just a focused session with clear direction. Walk away with a personalised action plan and no commitment required.',
    includes: [
      '90-minute intensive coaching session',
      'Personalised action plan',
      'Resource & supplement recommendations',
      'No ongoing commitment needed',
    ],
    investment: 'From $220',
    placeholder: {
      gradient: 'linear-gradient(135deg, #fdfaf6 0%, #f8f2e8 100%)',
      icon: '💬',
      decorativeNumber: '90',
      label: '90 min · single session',
    },
    testimonial: {
      quote: 'One session gave me more clarity than a year of Googling.',
      name: 'Jess M.',
      initial: 'J',
    },
  },
]

function ProgramCard({ program, index }: { program: Program; index: number }) {
  const flipped = index % 2 !== 0

  return (
    <section style={{ padding: '88px clamp(20px, 4vw, 48px)', background: program.bg }}>
      <div
        className="grid grid-cols-1 md:grid-cols-2"
        style={{
          maxWidth: 1120,
          margin: '0 auto',
          display: 'grid',
          gap: 72,
          alignItems: 'center',
        }}
      >
        {/* Details */}
        <motion.div
          {...fadeUp}
          style={{ order: flipped ? 2 : 1 }}
        >
          <span
            style={{
              fontFamily: 'var(--font-body), system-ui, sans-serif',
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--rose)',
              background: 'rgba(196,112,106,0.1)',
              padding: '5px 14px',
              borderRadius: 100,
              display: 'inline-block',
              marginBottom: 20,
            }}
          >
            {program.duration}
          </span>

          <h2
            style={{
              fontFamily: 'var(--font-display), Georgia, serif',
              fontSize: 'clamp(28px, 3vw, 40px)',
              fontWeight: 400,
              lineHeight: 1.15,
              color: 'var(--ink)',
              marginBottom: 20,
            }}
          >
            {program.title}
          </h2>

          {/* Who it's for */}
          <div style={{ marginBottom: 28 }}>
            <span
              style={{
                fontFamily: 'var(--font-body), system-ui, sans-serif',
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--ink)',
                display: 'block',
                marginBottom: 10,
              }}
            >
              Who it&apos;s for
            </span>
            <p
              style={{
                fontFamily: 'var(--font-body), system-ui, sans-serif',
                fontSize: 14,
                fontWeight: 300,
                lineHeight: 1.8,
                color: 'var(--ink-mid)',
              }}
            >
              {program.whoFor}
            </p>
          </div>

          {/* What's included */}
          <div style={{ marginBottom: 32 }}>
            <span
              style={{
                fontFamily: 'var(--font-body), system-ui, sans-serif',
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--ink)',
                display: 'block',
                marginBottom: 14,
              }}
            >
              What&apos;s included
            </span>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {program.includes.map((item) => (
                <li
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    fontFamily: 'var(--font-body), system-ui, sans-serif',
                    fontSize: '14px',
                    fontWeight: 300,
                    color: '#5a4a44',
                    lineHeight: 1.6,
                    padding: '4px 0',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
                    <path d="M2.5 7l3 3 6-6" stroke="var(--rose)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Investment + CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <span
              style={{
                fontFamily: 'var(--font-body), system-ui, sans-serif',
                fontSize: 18,
                fontWeight: 700,
                color: 'var(--ink)',
                letterSpacing: '0.01em',
              }}
            >
              {program.investment}
            </span>
            <Link
              href={`${BASE}/contact`}
              style={{
                fontFamily: 'var(--font-body), system-ui, sans-serif',
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#fff',
                background: 'var(--rose)',
                padding: '12px 28px',
                borderRadius: 100,
                textDecoration: 'none',
              }}
            >
              Apply now
            </Link>
          </div>

          {/* Mini testimonial */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '10px',
            marginTop: '16px', paddingTop: '16px',
            borderTop: '1px solid #f2d4cc',
          }}>
            <div style={{
              width: '28px', height: '28px', borderRadius: '50%',
              background: '#f2d4cc', border: '1px solid #e8b4a8',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-display)', fontSize: '12px',
              color: '#9a4a44', flexShrink: 0,
            }}>{program.testimonial.initial}</div>
            <p style={{ fontSize: '12px', color: '#9a8a84', fontStyle: 'italic', lineHeight: 1.5, margin: 0 }}>
              &ldquo;{program.testimonial.quote}&rdquo; - {program.testimonial.name}
            </p>
          </div>
        </motion.div>

        {/* Visual placeholder */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          style={{
            order: flipped ? 1 : 2,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: '100%',
              maxWidth: 400,
              aspectRatio: '4/3',
              borderRadius: '16px',
              background: program.placeholder.gradient,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid #e8dcc8',
              boxShadow: '0 20px 48px rgba(30,20,18,0.08)',
            }}
          >
            {/* Large decorative number */}
            <span style={{
              position: 'absolute', bottom: '-20px', right: '16px',
              fontFamily: 'var(--font-display)', fontSize: '140px',
              color: 'rgba(196,112,106,0.12)', lineHeight: 1,
              pointerEvents: 'none',
            }}>{program.placeholder.decorativeNumber}</span>
            <span style={{ fontSize: '48px' }}>{program.placeholder.icon}</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontStyle: 'italic', color: '#9a4a44', opacity: 0.6 }}>{program.title}</span>
            <span style={{ fontSize: '12px', color: '#9a8a84', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{program.placeholder.label}</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ── 3. Free Discovery Call ────────────────────────────────────────────── */

function FreeDiscoveryCall() {
  return (
    <section style={{ background: '#fdf4f0', padding: '72px 0', borderTop: '1px solid #e8dcc8' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto', padding: '0 clamp(20px, 4vw, 56px)', textAlign: 'center' }}>
        <span style={{ fontSize: '36px' }}>☎️</span>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '36px', color: '#1e1412', margin: '16px 0 12px' }}>
          Not sure where to start?
        </h2>
        <p style={{ fontSize: '15px', color: '#5a4a44', fontWeight: 300, lineHeight: 1.8, marginBottom: '28px' }}>
          Book a free 20-minute discovery call. We&apos;ll talk through what&apos;s going on and figure out the right program together. No pressure, no commitment.
        </p>
        <Link
          href={`${BASE}/contact`}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: '#c4706a', color: '#fff',
            padding: '16px 36px', borderRadius: '100px',
            fontSize: '13px', fontWeight: 700,
            letterSpacing: '0.08em', textTransform: 'uppercase',
            textDecoration: 'none',
          }}
        >
          Book my free call →
        </Link>
        <p style={{ fontSize: '12px', color: '#9a8a84', marginTop: '12px', fontWeight: 300 }}>Free · 20 minutes · no obligation</p>
      </div>
    </section>
  )
}

/* ── 4. FAQ Accordion ─────────────────────────────────────────────────────── */

const faqs = [
  {
    q: 'Do I need a referral or diagnosis to work with you?',
    a: 'Not at all. You don\'t need a referral, diagnosis, or any prior health history to get started. If you\'re experiencing symptoms or simply want to feel better in your body, that\'s enough. We\'ll do a thorough intake together and build your plan from there.',
  },
  {
    q: 'Are sessions in-person or online?',
    a: 'All sessions are held online via Zoom, so you can join from anywhere in Australia (or the world). This keeps things flexible and means you can show up from your couch in trackies. No judgement here.',
  },
  {
    q: 'How is this different from seeing a doctor or naturopath?',
    a: 'Doctors and naturopaths are brilliant at diagnosis and treatment. What I offer sits alongside that: ongoing coaching, accountability, and lifestyle support that helps you actually implement changes. Think of it as the missing piece between knowing what to do and consistently doing it.',
  },
  {
    q: 'What if I\'ve already tried everything?',
    a: 'I hear this a lot, and it usually means you\'ve tried a lot of things in isolation without the right support or personalisation. My approach is different because we look at the whole picture (hormones, stress, sleep, nutrition, mindset) and we build a plan that\'s truly yours. Not a template.',
  },
  {
    q: 'Do you offer payment plans?',
    a: 'Yes! All multi-week programs can be split into fortnightly payments at no extra cost. I want cost to be the last reason you don\'t get the support you need. We can chat about options on your discovery call.',
  },
  {
    q: 'How do I know which program is right for me?',
    a: 'That\'s exactly what the free discovery call is for. We\'ll have a relaxed 20-minute chat about where you\'re at, what you\'re dealing with, and I\'ll recommend the best fit, or let you know if I\'m not the right person. Zero pressure, zero obligation.',
  },
]

function FaqItem({ faq, isOpen, onToggle }: { faq: typeof faqs[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      style={{
        borderBottom: '1px solid var(--sand)',
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
          padding: '24px 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-display), Georgia, serif',
            fontSize: 18,
            fontWeight: 400,
            color: 'var(--ink)',
            lineHeight: 1.35,
          }}
        >
          {faq.q}
        </span>
        <motion.svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          style={{ flexShrink: 0 }}
        >
          <path d="M9 3v12M3 9h12" stroke="var(--rose)" strokeWidth="1.5" strokeLinecap="round" />
        </motion.svg>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <p
              style={{
                fontFamily: 'var(--font-body), system-ui, sans-serif',
                fontSize: 14,
                fontWeight: 300,
                lineHeight: 1.85,
                color: 'var(--ink-mid)',
                paddingBottom: 24,
                maxWidth: 640,
              }}
            >
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section style={{ padding: '100px clamp(20px, 4vw, 48px)', background: 'var(--cream)' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <motion.div {...fadeUp} style={{ textAlign: 'center', marginBottom: 56 }}>
          <span
            style={{
              fontFamily: 'var(--font-body), system-ui, sans-serif',
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--rose)',
              display: 'block',
              marginBottom: 16,
            }}
          >
            FAQ
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-display), Georgia, serif',
              fontSize: 'clamp(28px, 3vw, 40px)',
              fontWeight: 400,
              lineHeight: 1.15,
              color: 'var(--ink)',
            }}
          >
            Common <em style={{ fontStyle: 'italic', color: 'var(--rose)' }}>questions.</em>
          </h2>
        </motion.div>

        <motion.div {...fadeUp} transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}>
          <div style={{ borderTop: '1px solid var(--sand)' }}>
            {faqs.map((faq, i) => (
              <FaqItem
                key={i}
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ── 4. CTA ───────────────────────────────────────────────────────────────── */

function CtaBanner() {
  return (
    <section
      style={{
        padding: '88px clamp(20px, 4vw, 48px)',
        background: 'var(--rose)',
        textAlign: 'center',
      }}
    >
      <motion.div {...fadeUp} style={{ maxWidth: 600, margin: '0 auto' }}>
        <h2
          style={{
            fontFamily: 'var(--font-display), Georgia, serif',
            fontSize: 'clamp(28px, 3.5vw, 42px)',
            fontWeight: 400,
            lineHeight: 1.2,
            color: '#fff',
            marginBottom: 16,
          }}
        >
          Not sure where to <em style={{ fontStyle: 'italic' }}>start?</em>
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-body), system-ui, sans-serif',
            fontSize: 15,
            fontWeight: 300,
            lineHeight: 1.7,
            color: 'rgba(255,255,255,0.7)',
            marginBottom: 32,
            maxWidth: 460,
            margin: '0 auto 32px',
          }}
        >
          Book a free 20-minute discovery call. We&apos;ll figure it out together.
        </p>
        <Link
          href={`${BASE}/contact`}
          style={{
            fontFamily: 'var(--font-body), system-ui, sans-serif',
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--rose)',
            background: '#fff',
            padding: '16px 40px',
            borderRadius: 100,
            textDecoration: 'none',
            display: 'inline-block',
          }}
        >
          Book your free call
        </Link>
      </motion.div>
    </section>
  )
}

/* ── Page ──────────────────────────────────────────────────────────────────── */

export default function WorkWithMePage() {
  return (
    <>
      <SheThrivesNav />
      <main>
        <PageHero />
        {programs.map((program, i) => (
          <ProgramCard key={program.title} program={program} index={i} />
        ))}
        <FreeDiscoveryCall />
        <FaqSection />
        <CtaBanner />
      </main>
      <SheThrivesFooter />
    </>
  )
}
