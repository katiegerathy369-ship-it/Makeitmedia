'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import SheThrivesNav from '@/components/work/she-thrives/SheThrivesNav'
import SheThrivesFooter from '@/components/work/she-thrives/SheThrivesFooter'

const BASE = '/work/concept-womens-coach'

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut' },
}

/* ── Hero ─────────────────────────────────────────────────────────────────── */

const microStats = [
  { number: '300+', label: 'women' },
  { number: '5', label: 'years' },
  { number: '4.9★', label: 'rating' },
]

function Hero() {
  return (
    <section
      style={{
        height: '100vh',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        position: 'relative',
      }}
    >
      {/* LEFT — cream editorial panel */}
      <div
        style={{
          background: 'var(--blush-pale)',
          padding: '0 64px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Label with rose line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}
        >
          <div style={{ width: 28, height: 1.5, background: 'var(--rose)' }} />
          <span
            style={{
              fontFamily: 'var(--font-body), system-ui, sans-serif',
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--rose)',
            }}
          >
            Women&apos;s Health Coaching
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          style={{
            fontFamily: 'var(--font-display), Georgia, serif',
            fontSize: 'clamp(64px, 6.5vw, 96px)',
            fontWeight: 400,
            lineHeight: 0.9,
            letterSpacing: '-0.02em',
            color: 'var(--ink)',
            marginBottom: 0,
          }}
        >
          You were
          <br />
          made to
          <br />
          <span style={{ color: 'var(--rose)' }}>thrive.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            fontFamily: 'var(--font-body), system-ui, sans-serif',
            fontSize: 17,
            fontWeight: 300,
            lineHeight: 1.8,
            color: 'var(--ink-mid)',
            maxWidth: 380,
            marginTop: 28,
          }}
        >
          Holistic coaching for women ready to reclaim their energy,
          balance their hormones, and feel like themselves again.
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          style={{ display: 'flex', alignItems: 'center', gap: 20, marginTop: 40 }}
        >
          <Link
            href={`${BASE}/work-with-me`}
            style={{
              fontFamily: 'var(--font-body), system-ui, sans-serif',
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#fff',
              background: 'var(--rose)',
              padding: '16px 36px',
              borderRadius: 100,
              textDecoration: 'none',
            }}
          >
            Work with me
          </Link>
          <Link
            href={`${BASE}/about`}
            style={{
              fontFamily: 'var(--font-body), system-ui, sans-serif',
              fontSize: 13,
              fontWeight: 400,
              letterSpacing: '0.04em',
              color: 'var(--ink-mid)',
              textDecoration: 'none',
              borderBottom: '1px solid var(--sand)',
              paddingBottom: 2,
            }}
          >
            Our story →
          </Link>
        </motion.div>

        {/* Micro stats — bottom left */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{
            position: 'absolute',
            bottom: 32,
            left: 64,
            display: 'flex',
            gap: 36,
          }}
        >
          {microStats.map((stat) => (
            <div key={stat.label} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <span
                style={{
                  fontFamily: 'var(--font-display), Georgia, serif',
                  fontSize: 28,
                  color: 'var(--rose)',
                  lineHeight: 1,
                }}
              >
                {stat.number}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-body), system-ui, sans-serif',
                  fontSize: 11,
                  color: 'var(--ink-light)',
                  fontWeight: 300,
                  letterSpacing: '0.04em',
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* RIGHT — photo full bleed */}
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          height: '100%',
        }}
      >
        <img
          src="/images/portfolio/concept-womens-health-coach-shethrivesco/shethrivesco-hero-headshot2.jpg"
          alt="Grace Mitchell — She Thrives Co."
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
            display: 'block',
          }}
        />

        {/* Floating name card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{
            position: 'absolute',
            bottom: 40,
            left: '50%',
            transform: 'translateX(-50%)',
            background: '#fff',
            borderRadius: 16,
            padding: '18px 28px',
            boxShadow: '0 16px 48px rgba(30,20,18,0.14)',
            border: '1px solid #e8dcc8',
            minWidth: 220,
            zIndex: 10,
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-display), Georgia, serif',
              fontSize: 20,
              color: 'var(--ink)',
            }}
          >
            Grace Mitchell
          </div>
          <div
            style={{
              fontFamily: 'var(--font-body), system-ui, sans-serif',
              fontSize: 12,
              color: 'var(--ink-light)',
              fontWeight: 300,
              marginTop: 4,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}
          >
            Women&apos;s Health Coach
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 10 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--rose)' }} />
            <span
              style={{
                fontFamily: 'var(--font-body), system-ui, sans-serif',
                fontSize: 11,
                color: 'var(--rose)',
                fontWeight: 500,
                letterSpacing: '0.06em',
              }}
            >
              NOW ACCEPTING CLIENTS
            </span>
          </div>
        </motion.div>
      </div>

      {/* Divider line between panels */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: 80,
          bottom: 80,
          width: 1,
          background: 'rgba(196,112,106,0.2)',
          zIndex: 3,
        }}
      />
    </section>
  )
}

/* ── Mission strip ────────────────────────────────────────────────────────── */

const values = [
  {
    title: 'Holistic approach',
    body: 'We look at the whole picture — mind, body, and lifestyle. True wellness isn\'t just one piece of the puzzle.',
  },
  {
    title: 'Evidence-informed',
    body: 'Every recommendation is grounded in research and clinical practice. No fads, no guesswork.',
  },
  {
    title: 'Built around you',
    body: 'Your body is unique, so your plan should be too. Everything is personalised to where you are right now.',
  },
]

function MissionStrip() {
  return (
    <section style={{ padding: '100px 48px', background: 'var(--cream)' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <motion.div {...fadeUp}>
          <span
            style={{
              fontFamily: 'var(--font-body), system-ui, sans-serif',
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--rose)',
              display: 'block',
              textAlign: 'center',
              marginBottom: 16,
            }}
          >
            Why She Thrives
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-display), Georgia, serif',
              fontSize: 'clamp(32px, 3.5vw, 44px)',
              fontWeight: 400,
              lineHeight: 1.15,
              textAlign: 'center',
              color: 'var(--ink)',
              marginBottom: 64,
            }}
          >
            A different kind of <em style={{ fontStyle: 'italic', color: 'var(--rose)' }}>coaching.</em>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40 }}>
          {values.map((val, i) => (
            <motion.div
              key={val.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.1 }}
              style={{ textAlign: 'center' }}
            >
              {/* Rose circle icon */}
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: '50%',
                  background: 'var(--rose-pale)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M10 4c1.5-2 4-3 6-2s2 4 0 6c-1.5 1.5-4 3-6 5-2-2-4.5-3.5-6-5s-2-5 0-6 4.5 0 6 2z"
                    fill="var(--rose)"
                    opacity={0.7}
                  />
                </svg>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display), Georgia, serif',
                  fontSize: 22,
                  fontWeight: 400,
                  color: 'var(--ink)',
                  marginBottom: 12,
                }}
              >
                {val.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body), system-ui, sans-serif',
                  fontSize: 14,
                  fontWeight: 300,
                  lineHeight: 1.75,
                  color: 'var(--ink-mid)',
                  maxWidth: 300,
                  margin: '0 auto',
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

/* ── Services preview ─────────────────────────────────────────────────────── */

function ServicesPreview() {
  return (
    <section style={{ padding: '100px 48px', background: 'var(--warm)' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <motion.div {...fadeUp}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <div style={{ width: 28, height: 1.5, background: 'var(--rose)' }} />
            <span
              style={{
                fontFamily: 'var(--font-body), system-ui, sans-serif',
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--rose)',
              }}
            >
              Programs
            </span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display), Georgia, serif',
              fontSize: 'clamp(32px, 3.5vw, 44px)',
              fontWeight: 400,
              lineHeight: 1.15,
              color: 'var(--ink)',
              marginBottom: 12,
            }}
          >
            How we can work
            <br />
            <em style={{ fontStyle: 'italic', color: 'var(--rose)' }}>together.</em>
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body), system-ui, sans-serif',
              fontSize: 15,
              fontWeight: 300,
              lineHeight: 1.75,
              color: 'var(--ink-mid)',
              marginBottom: 48,
              maxWidth: 520,
            }}
          >
            Whether you&apos;re burned out, hormonally chaotic, or simply ready for
            more — there&apos;s a path forward.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {/* Card 1 — The Thrive Method */}
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0 }}
            whileHover={{ y: -6, boxShadow: '0 20px 48px rgba(30,20,18,0.1)' }}
          >
            <div
              style={{
                background: 'linear-gradient(135deg, #f2d4cc 0%, #e8b4a8 50%, #fdf4f0 100%)',
                borderRadius: '20px',
                padding: '36px 32px',
                border: '1px solid #e8dcc8',
                boxShadow: '0 12px 40px rgba(30,20,18,0.07)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.25s, box-shadow 0.25s',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <span style={{
                position: 'absolute', bottom: '-16px', right: '16px',
                fontFamily: 'var(--font-display)', fontSize: '120px',
                color: 'rgba(196,112,106,0.1)', lineHeight: 1,
                pointerEvents: 'none',
              }}>12</span>
              <span style={{
                display: 'inline-block',
                background: 'rgba(196,112,106,0.15)',
                color: '#9a4a44',
                fontSize: '11px', fontWeight: 600,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                padding: '4px 12px', borderRadius: '100px',
                marginBottom: '16px', alignSelf: 'flex-start',
              }}>12 weeks</span>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '24px', color: '#1e1412',
                marginBottom: '10px', position: 'relative', zIndex: 1,
              }}>The Thrive Method</h3>
              <p style={{
                fontSize: '14px', color: '#5a4a44',
                fontWeight: 300, lineHeight: 1.7,
                marginBottom: '20px', position: 'relative', zIndex: 1,
                flex: 1,
              }}>
                A signature 12-week program combining nutrition, movement, and mindset coaching to help you rebuild from the ground up.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', zIndex: 1 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: '#c4706a', fontWeight: 500 }}>From $1,800</span>
                <Link href={`${BASE}/work-with-me`} style={{
                  fontSize: '12px', color: '#9a4a44', fontWeight: 500,
                  letterSpacing: '0.06em', textTransform: 'uppercase',
                  textDecoration: 'none', borderBottom: '1px solid #e8b4a8',
                  paddingBottom: '2px',
                }}>Learn more →</Link>
              </div>
            </div>
          </motion.div>

          {/* Card 2 — Hormone Reset */}
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            whileHover={{ y: -6, boxShadow: '0 20px 48px rgba(30,20,18,0.1)' }}
          >
            <div
              style={{
                background: 'linear-gradient(135deg, #fae8e4 0%, #f2d4cc 100%)',
                borderRadius: '20px',
                padding: '36px 32px',
                border: '1px solid #e8dcc8',
                boxShadow: '0 12px 40px rgba(30,20,18,0.07)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.25s, box-shadow 0.25s',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <span style={{
                position: 'absolute', bottom: '-16px', right: '16px',
                fontFamily: 'var(--font-display)', fontSize: '120px',
                color: 'rgba(196,112,106,0.1)', lineHeight: 1,
                pointerEvents: 'none',
              }}>6</span>
              <span style={{
                display: 'inline-block',
                background: 'rgba(196,112,106,0.15)',
                color: '#9a4a44',
                fontSize: '11px', fontWeight: 600,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                padding: '4px 12px', borderRadius: '100px',
                marginBottom: '16px', alignSelf: 'flex-start',
              }}>6 weeks</span>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '24px', color: '#1e1412',
                marginBottom: '10px', position: 'relative', zIndex: 1,
              }}>Hormone Reset</h3>
              <p style={{
                fontSize: '14px', color: '#5a4a44',
                fontWeight: 300, lineHeight: 1.7,
                marginBottom: '20px', position: 'relative', zIndex: 1,
                flex: 1,
              }}>
                Targeted support for hormonal balance — cycle syncing, stress management, and evidence-based supplementation.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', zIndex: 1 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: '#c4706a', fontWeight: 500 }}>From $890</span>
                <Link href={`${BASE}/work-with-me`} style={{
                  fontSize: '12px', color: '#9a4a44', fontWeight: 500,
                  letterSpacing: '0.06em', textTransform: 'uppercase',
                  textDecoration: 'none', borderBottom: '1px solid #e8b4a8',
                  paddingBottom: '2px',
                }}>Learn more →</Link>
              </div>
            </div>
          </motion.div>

          {/* Card 3 — Free Discovery Call */}
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            whileHover={{ y: -6, boxShadow: '0 20px 48px rgba(30,20,18,0.1)' }}
          >
            <div
              style={{
                background: '#fff',
                borderRadius: '20px',
                padding: '36px 32px',
                border: '2px solid #f2d4cc',
                boxShadow: '0 12px 40px rgba(30,20,18,0.07)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.25s, box-shadow 0.25s',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <span style={{ fontSize: '32px', marginBottom: '12px' }}>☎️</span>
              <span style={{
                display: 'inline-block',
                background: 'rgba(196,112,106,0.15)',
                color: '#9a4a44',
                fontSize: '11px', fontWeight: 600,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                padding: '4px 12px', borderRadius: '100px',
                marginBottom: '16px', alignSelf: 'flex-start',
              }}>No obligation</span>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '24px', color: '#1e1412',
                marginBottom: '10px', position: 'relative', zIndex: 1,
              }}>Free Discovery Call</h3>
              <p style={{
                fontSize: '14px', color: '#5a4a44',
                fontWeight: 300, lineHeight: 1.7,
                marginBottom: '20px', position: 'relative', zIndex: 1,
                flex: 1,
              }}>
                A free 20-minute call to talk through where you are and whether we&apos;re the right fit.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', zIndex: 1 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: '#c4706a', fontWeight: 500 }}>Complimentary</span>
                <Link href={`${BASE}/contact`} style={{
                  fontSize: '12px', color: '#9a4a44', fontWeight: 500,
                  letterSpacing: '0.06em', textTransform: 'uppercase',
                  textDecoration: 'none', borderBottom: '1px solid #e8b4a8',
                  paddingBottom: '2px',
                }}>Book now →</Link>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.3 }}
          style={{ textAlign: 'center', marginTop: 40 }}
        >
          <Link
            href={`${BASE}/work-with-me`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'transparent',
              border: '1.5px solid #c4706a',
              color: '#c4706a',
              padding: '13px 32px',
              borderRadius: '100px',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'background 0.2s, color 0.2s',
              marginTop: '40px',
            }}
          >
            See all programs →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

/* ── Testimonial ──────────────────────────────────────────────────────────── */

function Testimonial() {
  return (
    <section style={{ padding: '100px 48px', background: 'var(--blush-pale)' }}>
      <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
        <motion.div {...fadeUp}>
          <span
            style={{
              fontFamily: 'var(--font-body), system-ui, sans-serif',
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--rose)',
              display: 'block',
              marginBottom: 28,
            }}
          >
            Kind words
          </span>

          <blockquote
            style={{
              fontFamily: 'var(--font-display), Georgia, serif',
              fontSize: 'clamp(24px, 3vw, 36px)',
              fontWeight: 400,
              lineHeight: 1.4,
              color: 'var(--ink)',
              fontStyle: 'italic',
              marginBottom: 32,
            }}
          >
            &ldquo;Working with She Thrives completely changed the way I think about
            my health. For the first time, I feel like someone actually
            <span style={{ color: 'var(--rose)' }}> listened</span> — and gave me
            a plan that fits my real life.&rdquo;
          </blockquote>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 4,
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-body), system-ui, sans-serif',
                fontSize: 14,
                fontWeight: 700,
                color: 'var(--ink)',
              }}
            >
              Sarah M.
            </span>
            <span
              style={{
                fontFamily: 'var(--font-body), system-ui, sans-serif',
                fontSize: 12,
                fontWeight: 300,
                color: 'var(--ink-light)',
              }}
            >
              The Thrive Method — 12-week program
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ── CTA Banner ───────────────────────────────────────────────────────────── */

function CtaBanner() {
  return (
    <section
      style={{
        padding: '88px 48px',
        background: 'var(--rose)',
        textAlign: 'center',
      }}
    >
      <motion.div {...fadeUp} style={{ maxWidth: 600, margin: '0 auto' }}>
        <h2
          style={{
            fontFamily: 'var(--font-display), Georgia, serif',
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 400,
            lineHeight: 1.15,
            color: '#fff',
            marginBottom: 28,
          }}
        >
          Ready to start <em style={{ fontStyle: 'italic' }}>thriving?</em>
        </h2>
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

export default function SheThrivesHome() {
  return (
    <>
      <SheThrivesNav />
      <main>
        <Hero />
        <MissionStrip />
        <ServicesPreview />
        <Testimonial />
        <CtaBanner />
      </main>
      <SheThrivesFooter />
    </>
  )
}
