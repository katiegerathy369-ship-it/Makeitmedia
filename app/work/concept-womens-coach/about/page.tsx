'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
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
        background: 'var(--blush-pale)',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: '0 auto',
          padding: '140px 48px 100px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 72,
          alignItems: 'center',
          width: '100%',
          position: 'relative',
        }}
      >
        {/* Left — copy */}
        <div style={{ position: 'relative' }}>
          <motion.span
            {...fadeUp}
            style={{
              fontFamily: 'var(--font-body), system-ui, sans-serif',
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--rose)',
              display: 'block',
              marginBottom: 20,
            }}
          >
            Our story
          </motion.span>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            style={{
              fontFamily: 'var(--font-display), Georgia, serif',
              fontSize: 'clamp(40px, 4.5vw, 60px)',
              fontWeight: 400,
              lineHeight: 1.1,
              color: 'var(--ink)',
              marginBottom: 16,
            }}
          >
            I&apos;ve been where
            <br />
            you <em style={{ fontStyle: 'italic', color: 'var(--rose)' }}>are.</em>
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
            style={{
              fontFamily: 'var(--font-body), system-ui, sans-serif',
              fontSize: 15,
              fontWeight: 400,
              lineHeight: 1.7,
              color: 'var(--rose)',
              marginBottom: 16,
            }}
          >
            Health coach, hormone nerd, and recovering perfectionist.
          </motion.p>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            style={{
              fontFamily: 'var(--font-body), system-ui, sans-serif',
              fontSize: 15,
              fontWeight: 300,
              lineHeight: 1.85,
              color: 'var(--ink-mid)',
              maxWidth: 440,
            }}
          >
            She Thrives Co. was born from my own journey — years of exhaustion,
            hormone chaos, and feeling like my body was working against me.
            I created this practice so no woman has to figure it out alone.
          </motion.p>
        </div>

        {/* Right — arch photo placeholder */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <div
            style={{
              width: 340,
              aspectRatio: '3/4',
              borderRadius: '200px 200px 20px 20px',
              boxShadow: '0 32px 80px rgba(30,20,18,0.1)',
              border: '1px solid #e8dcc8',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Image
              src="/images/portfolio/concept-womens-health-coach-shethrivesco/shethrives-headshot-about.jpg"
              alt="Grace — She Thrives Co. founder"
              fill
              style={{ objectFit: 'cover' }}
              sizes="340px"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ── 2. Grace's Story ─────────────────────────────────────────────────────── */

const storyBeats = [
  {
    label: 'How it started',
    pullQuote: 'I kept pushing through until my body made me stop.',
    bg: '#fdfaf6',
    paragraphs: [
      'For years, I was the woman who did it all — high-pressure career, early morning workouts, packed weekends, always saying yes. On paper, everything looked great. Behind the scenes, I was running on caffeine and adrenaline, my periods had disappeared, and I couldn\'t remember the last time I woke up feeling rested.',
      'The breaking point came when I collapsed at work. My doctor told me my cortisol was through the roof, my thyroid was struggling, and my body was in survival mode. I\'d spent so long ignoring the signals that I\'d completely burned out.',
    ],
  },
  {
    label: 'What I learned',
    pullQuote: 'Health isn\'t about perfection — it\'s about listening.',
    bg: '#f8f2e8',
    paragraphs: [
      'Recovery forced me to slow down and ask better questions. I started studying integrative health, completed my certification through the Institute for Integrative Nutrition, and trained in hormone health and NLP. I learned that women\'s bodies have unique rhythms — and that most mainstream health advice completely ignores them.',
      'I discovered cycle syncing, nervous system regulation, and the power of building a life that works with your biology instead of against it. The transformation wasn\'t overnight, but it was real. And I knew I had to share it.',
    ],
  },
  {
    label: 'Why I do this',
    pullQuote: 'Every woman deserves to feel at home in her body.',
    bg: '#fdf4f0',
    paragraphs: [
      'I created She Thrives Co. because I know what it feels like to be dismissed, to be told "it\'s just stress" or "that\'s normal." It\'s not normal to feel exhausted all the time. It\'s not normal to dread your period. And you shouldn\'t have to accept it.',
      'I work with women who are done with quick fixes and ready for real, lasting change. Whether you\'re dealing with hormone imbalances, chronic fatigue, or you just feel disconnected from your body — I\'m here to help you build a foundation that actually holds.',
    ],
  },
]

function GracesStory() {
  return (
    <>
      {/* Section heading */}
      <section style={{ padding: '72px 48px 0', background: '#fdfaf6' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <motion.div {...fadeUp} style={{ textAlign: 'center', marginBottom: 0 }}>
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
              Meet Grace
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-display), Georgia, serif',
                fontSize: 'clamp(32px, 3.5vw, 44px)',
                fontWeight: 400,
                lineHeight: 1.15,
                color: 'var(--ink)',
              }}
            >
              The story behind <em style={{ fontStyle: 'italic', color: 'var(--rose)' }}>She Thrives.</em>
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Story beats with alternating backgrounds */}
      {storyBeats.map((beat, i) => {
        const flipped = i % 2 !== 0
        return (
          <section
            key={beat.label}
            style={{
              padding: '72px 48px',
              background: beat.bg,
              borderTop: '1px solid rgba(232,220,200,0.5)',
            }}
          >
            <div
              style={{
                maxWidth: 1120,
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 64,
                alignItems: 'center',
              }}
            >
              {/* Text side */}
              <motion.div
                {...fadeUp}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
                style={{ order: flipped ? 2 : 1 }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-body), system-ui, sans-serif',
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--rose)',
                    display: 'block',
                    marginBottom: 20,
                  }}
                >
                  {beat.label}
                </span>
                {beat.paragraphs.map((p, j) => (
                  <p
                    key={j}
                    style={{
                      fontFamily: 'var(--font-body), system-ui, sans-serif',
                      fontSize: 15,
                      fontWeight: 300,
                      lineHeight: 1.85,
                      color: 'var(--ink-mid)',
                      marginBottom: j < beat.paragraphs.length - 1 ? 16 : 0,
                    }}
                  >
                    {p}
                  </p>
                ))}
              </motion.div>

              {/* Decorative side — pull quote with quotation mark */}
              <motion.div
                {...fadeUp}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
                style={{
                  order: flipped ? 1 : 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  minHeight: 280,
                }}
              >
                <div style={{ position: 'relative', padding: 24 }}>
                  {/* Decorative quotation mark */}
                  <span
                    style={{
                      position: 'absolute',
                      top: -40,
                      left: -20,
                      fontFamily: 'var(--font-display), Georgia, serif',
                      fontSize: 180,
                      color: '#f2d4cc',
                      lineHeight: 1,
                      pointerEvents: 'none',
                      zIndex: 0,
                      opacity: 0.6,
                    }}
                  >
                    &ldquo;
                  </span>
                  <span
                    style={{
                      position: 'relative',
                      zIndex: 1,
                      fontFamily: 'var(--font-display), Georgia, serif',
                      fontSize: 'clamp(28px, 3vw, 40px)',
                      fontWeight: 400,
                      fontStyle: 'italic',
                      lineHeight: 1.25,
                      color: 'var(--blush-deep)',
                      display: 'block',
                      textAlign: flipped ? 'right' : 'left',
                    }}
                  >
                    {beat.pullQuote}
                  </span>
                </div>
              </motion.div>
            </div>
          </section>
        )
      })}
    </>
  )
}

/* ── 3. Credentials Bar ───────────────────────────────────────────────────── */

const credentials = [
  { name: 'Certified Women\'s Health Coach (IIN)', descriptor: 'Institute for Integrative Nutrition' },
  { name: 'Hormone Health Specialist', descriptor: 'NWHC Certified' },
  { name: 'Mindset & NLP Practitioner', descriptor: 'Neuro-Linguistic Programming' },
  { name: '300+ women supported', descriptor: 'Since 2020' },
]

function CredentialsBar() {
  return (
    <section style={{ padding: '64px 48px', background: 'var(--warm)', borderTop: '1px solid rgba(232,220,200,0.5)' }}>
      <motion.div
        {...fadeUp}
        style={{
          maxWidth: 1120,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 20,
        }}
      >
        {credentials.map((cred) => (
          <div
            key={cred.name}
            style={{
              background: '#fff',
              border: '1px solid #e8dcc8',
              borderRadius: 16,
              padding: '28px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
              boxShadow: '0 4px 16px rgba(30,20,18,0.05)',
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                background: 'var(--rose)',
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-display), Georgia, serif',
                fontSize: 18,
                color: 'var(--ink)',
                lineHeight: 1.3,
              }}
            >
              {cred.name}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-body), system-ui, sans-serif',
                fontSize: 12,
                fontWeight: 300,
                color: 'var(--ink-light)',
              }}
            >
              {cred.descriptor}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  )
}

/* ── 4. Values ────────────────────────────────────────────────────────────── */

const values = [
  {
    num: '01',
    title: 'Whole-person health',
    body: 'We don\'t treat symptoms in isolation. Your energy, mood, hormones, sleep, and stress are all connected — and we look at the full picture. Real results come from understanding how your body works as a whole, not just patching the loudest problem.',
  },
  {
    num: '02',
    title: 'Your pace, your path',
    body: 'There\'s no one-size-fits-all program here. Your plan is built around your life, your body, and your goals. Whether you\'re a shift worker, a new mum, or mid-career and burning out — we meet you where you are and move at a pace that sticks.',
  },
  {
    num: '03',
    title: 'Evidence meets intuition',
    body: 'Everything we do is grounded in research and clinical training. But we also believe in the wisdom of lived experience — yours and mine. Science gives us the framework. Your body gives us the feedback. Together, they build something that actually works.',
  },
]

function Values() {
  return (
    <section style={{ padding: '100px 48px', background: 'var(--cream)' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
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
            What we stand for
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-display), Georgia, serif',
              fontSize: 'clamp(32px, 3.5vw, 44px)',
              fontWeight: 400,
              lineHeight: 1.15,
              color: 'var(--ink)',
            }}
          >
            Our <em style={{ fontStyle: 'italic', color: 'var(--rose)' }}>values.</em>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
          {values.map((val, i) => (
            <motion.div
              key={val.num}
              {...fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.1 }}
              style={{
                background: '#fff',
                borderRadius: 20,
                padding: 36,
                border: '1px solid var(--sand)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display), Georgia, serif',
                  fontSize: 80,
                  color: '#f2d4cc',
                  lineHeight: 1,
                  display: 'block',
                  marginBottom: 8,
                  letterSpacing: '-0.03em',
                }}
              >
                {val.num}
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-display), Georgia, serif',
                  fontSize: 22,
                  fontWeight: 400,
                  color: 'var(--ink)',
                  marginBottom: 14,
                }}
              >
                {val.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body), system-ui, sans-serif',
                  fontSize: 14,
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: 'var(--ink-mid)',
                }}
              >
                {val.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── 5. CTA ───────────────────────────────────────────────────────────────── */

function CtaClose() {
  return (
    <section style={{ padding: '100px 48px', background: 'var(--blush-pale)' }}>
      <motion.div
        {...fadeUp}
        style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center' }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-display), Georgia, serif',
            fontSize: 'clamp(30px, 3.5vw, 42px)',
            fontWeight: 400,
            lineHeight: 1.2,
            color: 'var(--ink)',
            marginBottom: 32,
          }}
        >
          Ready to work <em style={{ fontStyle: 'italic', color: 'var(--rose)' }}>together?</em>
        </h2>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 16 }}>
          <Link
            href={`${BASE}/work-with-me`}
            style={{
              fontFamily: 'var(--font-body), system-ui, sans-serif',
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: '#fff',
              background: 'var(--rose)',
              padding: '15px 32px',
              borderRadius: 100,
              textDecoration: 'none',
            }}
          >
            See programs
          </Link>
          <Link
            href={`${BASE}/contact`}
            style={{
              fontFamily: 'var(--font-body), system-ui, sans-serif',
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'var(--rose)',
              background: 'transparent',
              padding: '15px 32px',
              borderRadius: 100,
              textDecoration: 'none',
              border: '1.5px solid var(--rose)',
            }}
          >
            Book a free call
          </Link>
        </div>
      </motion.div>
    </section>
  )
}

/* ── Page ──────────────────────────────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <>
      <SheThrivesNav />
      <main>
        <PageHero />
        <GracesStory />
        <CredentialsBar />
        <Values />
        <CtaClose />
      </main>
      <SheThrivesFooter />
    </>
  )
}
