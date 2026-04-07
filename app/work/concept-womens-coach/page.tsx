'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import SheThrivesNav from '@/components/work/she-thrives/SheThrivesNav'
import SheThrivesFooter from '@/components/work/she-thrives/SheThrivesFooter'
import styles from '@/components/work/she-thrives/she-thrives.module.css'

const BASE = '/work/concept-womens-coach'

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
}

/* ── SVG Components ───────────────────────────────────────────────────────── */

function LotusIcon({ size = 32, color = '#56695a' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M16 28c0 0-5-7-5-14s5-10 5-10 5 3 5 10-5 14-5 14z" fill={color} opacity="0.8" />
      <path d="M16 28c0 0-9-4-12-11s1-12 1-12 7 5 9 11 2 12 2 12z" fill={color} opacity="0.45" />
      <path d="M16 28c0 0 9-4 12-11s-1-12-1-12-7 5-9 11-2 12-2 12z" fill={color} opacity="0.45" />
    </svg>
  )
}

function LeafIcon({ size = 18, color = '#56695a' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M9 16c0 0 7-5 7-11C16 2 9 1 9 1S2 2 2 5c0 6 7 11 7 11z" fill={color} opacity="0.7" />
      <path d="M9 16V4" stroke={color} strokeWidth="1" opacity="0.4" />
    </svg>
  )
}

function WaveDivider({ from = '#fffcf6', to = '#fcf9f1' }: { from?: string; to?: string }) {
  return (
    <div style={{ position: 'relative', height: 80, marginTop: -1 }}>
      <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" style={{ width: '100%', height: '100%', display: 'block', position: 'absolute', top: 0 }}>
        <rect width="1440" height="80" fill={from} />
        <path d="M0,32 C240,64 480,8 720,40 C960,72 1200,16 1440,48 V80 H0 Z" fill={to} />
      </svg>
    </div>
  )
}

/* ── 1. HERO ──────────────────────────────────────────────────────────────── */

function Hero() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 50])

  return (
    <section ref={heroRef} className={styles.hero}>
      {/* Video background */}
      <video
        className={styles.heroVideo}
        src="/images/portfolio/concept-womens-health-coach-shethrivesco/flowers-hero-video.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label="Flowers blooming in nature"
      />

      {/* Gradient overlay — transparent to warm cream */}
      <div className={styles.heroOverlay} />

      {/* Content */}
      <motion.div className={styles.heroContent} style={{ y: contentY }}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            fontFamily: "var(--font-display), 'Lora', Georgia, serif",
            fontSize: 'clamp(48px, 8vw, 110px)',
            fontWeight: 400,
            lineHeight: 1.05,
            color: 'var(--st-primary)',
            marginBottom: 0,
          }}
        >
          Return to <em style={{ fontStyle: 'italic' }}>yourself</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          style={{
            fontFamily: "var(--font-body), 'Raleway', sans-serif",
            fontSize: 'clamp(16px, 2.2vw, 22px)',
            fontWeight: 300, lineHeight: 1.7,
            color: 'var(--st-on-surface-variant)',
            maxWidth: 560, margin: '28px auto 0',
          }}
        >
          A sacred invitation to step away from the noise and
          rediscover the quiet magic that lives within your own breath.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.85 }}
          style={{ marginTop: 48, display: 'flex', justifyContent: 'center' }}
        >
          <Link href={`${BASE}/work-with-me`} className={styles.btnGlow}>
            Begin Your Journey
          </Link>
        </motion.div>
      </motion.div>

    </section>
  )
}

/* ── 1b. WAVY KEYWORD MARQUEE ────────────────────────────────────────────── */

const marqueeKeywords = [
  'Naturopathy',
  'Women\u2019s Wellness Retreats',
  'Herbal Medicine',
  'Energy Healing',
  'Breathwork',
  'Hormone Health',
  'Nature Immersion',
  'Nutritional Therapy',
  'Nervous System Restoration',
  'Guided Meditation',
]

function WavyMarquee() {
  const items = marqueeKeywords.join(' \u2727 ')
  const repeated = `${items} \u2727 ${items} \u2727 ${items} \u2727 `

  return (
    <section
      aria-label="Retreat offerings"
      className={styles.wavyMarquee}
    >
      <svg
        className={styles.wavyMarqueeSvg}
        viewBox="0 0 3600 280"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <defs>
          <path
            id="wavyPath"
            d="M0,150 C300,110 600,190 900,150 C1200,110 1500,190 1800,150 C2100,110 2400,190 2700,150 C3000,110 3300,190 3600,150"
            fill="none"
          />
        </defs>
        <text className={styles.wavyMarqueeText}>
          <textPath href="#wavyPath" startOffset="0%">
            <animate
              attributeName="startOffset"
              from="0%"
              to="-100%"
              dur="60s"
              repeatCount="indefinite"
            />
            {repeated}
          </textPath>
        </text>
      </svg>
    </section>
  )
}

/* ── 2. THE JOURNEY OF WHOLENESS — Winding Path Layout ───────────────────── */

function SacredServices() {
  return (
    <section className={styles.section} style={{ background: 'var(--st-surface-container-low)', paddingTop: 80, paddingBottom: 80 }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 24px' }}>
        {/* Section heading */}
        <motion.div {...fadeUp} style={{ textAlign: 'center', marginBottom: 96 }}>
          <span style={{
            fontFamily: "var(--font-body), 'Raleway', sans-serif",
            fontSize: 12, fontWeight: 500,
            letterSpacing: '0.4em', textTransform: 'uppercase',
            color: 'var(--st-secondary)',
            display: 'block', marginBottom: 16,
          }}>Pathways</span>
          <h2 style={{
            fontFamily: "var(--font-display), 'Lora', serif",
            fontSize: 'clamp(36px, 5vw, 60px)',
            fontWeight: 400,
            color: 'var(--st-primary)',
          }}>
            The Journey of Wholeness
          </h2>
        </motion.div>

        {/* Winding Path Layout */}
        <div style={{ position: 'relative' }}>
          {/* Botanical Vine SVG — center line */}
          <svg
            aria-hidden="true"
            className="hidden md:block"
            style={{
              position: 'absolute', left: '50%', transform: 'translateX(-50%)',
              top: 0, height: '100%', width: '100%',
              pointerEvents: 'none', opacity: 0.2,
            }}
            viewBox="0 0 100 800"
            preserveAspectRatio="none"
          >
            <path d="M50,0 Q80,200 20,400 T50,800" fill="none" stroke="#56695a" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="1" fill="#56695a" />
            <circle cx="20" cy="400" r="1" fill="#56695a" />
            <circle cx="50" cy="750" r="1" fill="#56695a" />
          </svg>

          <div className="flex flex-col" style={{ gap: 'clamp(48px, 8vw, 0px)' }}>
            {/* Service 1: Naturopathy — Left */}
            <motion.div
              {...fadeUp}
              className="flex flex-col md:flex-row items-center md:justify-start group"
            >
              <div className="w-full md:w-1/2 md:pr-20" style={{ position: 'relative', zIndex: 10 }}>
                <div className={styles.serviceCard}>
                  <LotusIcon size={36} color="var(--st-primary)" />
                  <h3 style={{
                    fontFamily: "var(--font-display), 'Lora', serif",
                    fontSize: 'clamp(24px, 3vw, 30px)',
                    fontWeight: 400, color: 'var(--st-primary)',
                    marginBottom: 12, marginTop: 24,
                  }}>Naturopathy</h3>
                  <p style={{
                    fontFamily: "var(--font-body), 'Raleway', sans-serif",
                    fontSize: 15, fontWeight: 300, lineHeight: 1.7,
                    color: 'var(--st-on-surface-variant)', marginBottom: 20,
                  }}>
                    Aligning your body&apos;s internal seasons with botanical wisdom and
                    nutritional alchemy tailored to your unique lineage.
                  </p>
                  <Link href={`${BASE}/work-with-me`} style={{
                    fontFamily: "var(--font-body), 'Raleway', sans-serif",
                    fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: 'var(--st-secondary)', textDecoration: 'none',
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                  }}>Learn More &rarr;</Link>
                </div>
              </div>
              <div className="hidden md:block" style={{
                width: '33%', aspectRatio: '1', borderRadius: '50%', overflow: 'hidden',
                marginLeft: -40, opacity: 0.8, transition: 'opacity 0.5s',
              }}>
                <Image
                  src="/images/portfolio/concept-womens-health-coach-shethrivesco/naturoapthy-service.jpg"
                  alt="Naturopathy consultation — herbal medicine and botanical wellness"
                  width={400} height={400}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </motion.div>

            {/* Service 2: Restorative Yoga — Right */}
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.12 }}
              className="flex flex-col md:flex-row-reverse items-center md:justify-start group"
            >
              <div className="w-full md:w-1/2 md:pl-20" style={{ position: 'relative', zIndex: 10 }}>
                <div className={styles.serviceCard}>
                  <LeafIcon size={32} color="var(--st-primary)" />
                  <h3 style={{
                    fontFamily: "var(--font-display), 'Lora', serif",
                    fontSize: 'clamp(24px, 3vw, 30px)',
                    fontWeight: 400, color: 'var(--st-primary)',
                    marginBottom: 12, marginTop: 24,
                  }}>Restorative Yoga</h3>
                  <p style={{
                    fontFamily: "var(--font-body), 'Raleway', sans-serif",
                    fontSize: 15, fontWeight: 300, lineHeight: 1.7,
                    color: 'var(--st-on-surface-variant)', marginBottom: 20,
                  }}>
                    Embodied prayer through movement. Flow like water, stand like mountains.
                    A practice for every stage of your unfolding.
                  </p>
                  <Link href={`${BASE}/work-with-me`} style={{
                    fontFamily: "var(--font-body), 'Raleway', sans-serif",
                    fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: 'var(--st-secondary)', textDecoration: 'none',
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                  }}>Explore Practice &rarr;</Link>
                </div>
              </div>
              <div className="hidden md:block" style={{
                width: '33%', aspectRatio: '1', borderRadius: '50%', overflow: 'hidden',
                marginRight: -40, opacity: 0.8, transition: 'opacity 0.5s',
              }}>
                <Image
                  src="/images/portfolio/concept-womens-health-coach-shethrivesco/yoga-service.jpg"
                  alt="Yoga and movement practice in nature"
                  width={400} height={400}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </motion.div>

            {/* Service 3: Mindfulness — Left */}
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.24 }}
              className="flex flex-col md:flex-row items-center md:justify-start group"
            >
              <div className="w-full md:w-1/2 md:pr-20" style={{ position: 'relative', zIndex: 10 }}>
                <div className={styles.serviceCard}>
                  <svg width="28" height="34" viewBox="0 0 22 28" fill="none" aria-hidden="true">
                    <path d="M11 2C11 2 2 12 2 18a9 9 0 0018 0C20 12 11 2 11 2z" fill="var(--st-primary)" opacity="0.6" />
                  </svg>
                  <h3 style={{
                    fontFamily: "var(--font-display), 'Lora', serif",
                    fontSize: 'clamp(24px, 3vw, 30px)',
                    fontWeight: 400, color: 'var(--st-primary)',
                    marginBottom: 12, marginTop: 24,
                  }}>Mindfulness</h3>
                  <p style={{
                    fontFamily: "var(--font-body), 'Raleway', sans-serif",
                    fontSize: 15, fontWeight: 300, lineHeight: 1.7,
                    color: 'var(--st-on-surface-variant)', marginBottom: 20,
                  }}>
                    Guided explorations into the quietude of the mind. Cultivating a presence
                    that remains steady amidst the world&apos;s chaos.
                  </p>
                  <Link href={`${BASE}/work-with-me`} style={{
                    fontFamily: "var(--font-body), 'Raleway', sans-serif",
                    fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: 'var(--st-secondary)', textDecoration: 'none',
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                  }}>View Sessions &rarr;</Link>
                </div>
              </div>
              <div className="hidden md:block" style={{
                width: '33%', aspectRatio: '1', borderRadius: '50%', overflow: 'hidden',
                marginLeft: -40, opacity: 0.8, transition: 'opacity 0.5s',
              }}>
                <Image
                  src="/images/portfolio/concept-womens-health-coach-shethrivesco/mindfulness-service.jpg"
                  alt="Mindfulness and meditation in a peaceful setting"
                  width={400} height={400}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── 3. RETREAT PREVIEW ───────────────────────────────────────────────────── */

const retreatInclusions = [
  'Naturopathy consultations',
  'Guided meditation & breathwork',
  'Herbal medicine workshop',
  'Nourishing whole-food meals',
  'Nature immersion walks',
]

function RetreatPreview() {
  return (
    <section className={styles.section} style={{ background: 'var(--st-surface)', paddingTop: 80, paddingBottom: 80 }}>
      {/* Decorative botanical SVG — top right */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: 0, right: 0, opacity: 0.08, pointerEvents: 'none',
      }}>
        <svg width="400" height="400" viewBox="0 0 200 200" fill="var(--st-primary)">
          <path d="M100,20 C120,60 180,80 180,120 C180,160 140,180 100,180 C60,180 20,160 20,120 C20,80 80,60 100,20" />
        </svg>
      </div>

      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 24px' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          {/* Left — text content */}
          <motion.div {...fadeUp} style={{ maxWidth: 540 }}>
            <h2 style={{
              fontFamily: "var(--font-display), 'Lora', serif",
              fontSize: 'clamp(32px, 4.5vw, 52px)',
              fontWeight: 400, lineHeight: 1.15,
              color: 'var(--st-primary)',
              marginBottom: 28,
            }}>
              The Restoration <em style={{ fontStyle: 'italic' }}>Retreat.</em>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 32 }}>
              <p style={{
                fontFamily: "var(--font-body), 'Raleway', sans-serif",
                fontSize: 17, fontWeight: 300, lineHeight: 1.7,
                color: 'var(--st-on-surface-variant)',
              }}>
                Five days of guided naturopathy, movement, and stillness — designed to bring
                your nervous system back to baseline and your body back to balance.
              </p>
              <p style={{
                fontFamily: "var(--font-body), 'Raleway', sans-serif",
                fontSize: 17, fontWeight: 300, lineHeight: 1.7,
                color: 'var(--st-on-surface-variant)',
              }}>
                We believe healing is not a destination, but a remembrance. It is the rhythmic
                sound of wind through trees and the soft scent of rain on earth. Here, we offer
                a bridge back to the wild wisdom that resides within you.
              </p>
            </div>

            {/* Philosophy link */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, paddingTop: 8 }}>
              <div style={{ width: 48, height: 1, background: 'var(--st-secondary)', opacity: 0.4 }} />
              <span style={{
                fontFamily: "var(--font-display), 'Lora', serif",
                fontSize: 20, fontStyle: 'italic',
                color: 'var(--st-secondary)',
              }}>Our Philosophy</span>
            </div>
          </motion.div>

          {/* Right — arch image with floating glassmorphism quote */}
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }} style={{ position: 'relative' }}>
            <div style={{
              aspectRatio: '4/5',
              borderRadius: '999px 999px 0 0',
              overflow: 'hidden',
              boxShadow: '0 24px 64px rgba(56,57,47,0.12)',
            }}>
              <video
                src="/images/portfolio/concept-womens-health-coach-shethrivesco/The-Restoration-Retreat.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-label="The Restoration Retreat experience"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
              />
            </div>

            {/* Floating glassmorphism quote card */}
            <motion.div
              className={`${styles.floatSlow} hidden md:block`}
              style={{
                position: 'absolute', bottom: -40, left: -40,
                background: 'rgba(255, 255, 255, 0.4)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                padding: 32, borderRadius: 16,
                maxWidth: 280,
                border: '1px solid rgba(255,255,255,0.2)',
                boxShadow: '0 20px 60px rgba(56,57,47,0.12)',
                zIndex: 2,
              }}
            >
              <p style={{
                fontFamily: "var(--font-display), 'Lora', serif",
                fontSize: 19, fontStyle: 'italic',
                lineHeight: 1.5,
                color: 'var(--st-primary-dim)',
                margin: 0,
              }}>
                &ldquo;The stillness here is not an absence of sound, but a presence of peace.&rdquo;
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ── 4. ABOUT GRACE — Offset Editorial Layout ────────────────────────────── */

function MeetGrace() {
  return (
    <>
      <WaveDivider from="var(--st-surface)" to="var(--st-surface-container-low)" />
      <section className={`${styles.section} ${styles.botanicalBg}`} style={{ background: 'var(--st-surface-container-low)', paddingTop: 64 }}>
        <div className={styles.container}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Arch photo */}
            <motion.div {...fadeUp} style={{ position: 'relative', maxWidth: 380, margin: '0 auto' }}>
              <div className={styles.archPhoto} style={{ aspectRatio: '3/4' }}>
                <Image
                  src="/images/portfolio/concept-womens-health-coach-shethrivesco/grace-she-thrives-co-guide.png"
                  alt="Grace Mitchell — founder of She Thrives Co."
                  width={380}
                  height={507}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className={styles.archPhotoBorder} />

              {/* Botanical overlap */}
              <div aria-hidden="true" style={{ position: 'absolute', bottom: -24, left: -32, opacity: 0.08, pointerEvents: 'none' }}>
                <LotusIcon size={100} color="var(--st-primary)" />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.12 }}>
              <span style={{
                fontFamily: "var(--font-body), 'Raleway', sans-serif",
                fontSize: 12, fontWeight: 500,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'var(--st-secondary)',
                display: 'block', marginBottom: 16,
              }}>Meet your guide</span>

              <h2 style={{
                fontFamily: "var(--font-display), 'Lora', Georgia, serif",
                fontSize: 'clamp(36px, 5vw, 52px)',
                fontWeight: 400,
                color: 'var(--st-primary)',
                marginBottom: 24, lineHeight: 1.1,
              }}>
                Grace <em style={{ fontStyle: 'italic' }}>Mitchell</em>
              </h2>

              <p style={{
                fontFamily: "var(--font-body), 'Raleway', sans-serif",
                fontSize: 17, fontWeight: 300, lineHeight: 1.7,
                color: 'var(--st-on-surface-variant)', marginBottom: 20, maxWidth: 460,
              }}>
                With roots in clinical naturopathy and a heart shaped by a decade of healing practice,
                Grace created She Thrives to be the space she once needed — a soft place to land
                when the world feels too heavy.
              </p>

              <p style={{
                fontFamily: "var(--font-body), 'Raleway', sans-serif",
                fontSize: 17, fontWeight: 300, lineHeight: 1.7, fontStyle: 'italic',
                color: 'var(--st-on-surface-variant)', opacity: 0.8,
                marginBottom: 32, maxWidth: 460,
              }}>
                &ldquo;Healing is not a destination, but a return to the natural state of your being.&rdquo;
              </p>

              <Link href={`${BASE}/about`} className={styles.btnTertiary}>
                Read Her Story
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

/* ── 5. WHISPERS FROM THE MEADOW — Asymmetric Testimonials ───────────────── */

const testimonials = [
  {
    quote: 'I arrived feeling like a shattered mirror. The silence and the tender care of the practitioners helped me put the pieces back together into something more beautiful.',
    name: 'SARAH M.',
    detail: 'Solace Seeker',
    accentBg: 'rgba(255, 218, 217, 0.3)',
    accentCircle: 'var(--st-primary-fixed-dim)',
    quoteColor: 'var(--st-secondary)',
    radius: '60px 10px 60px 10px',
    offset: 0,
  },
  {
    quote: 'The blend of nature and science here is magical. One moment you\u2019re in a herbal workshop, the next you\u2019re walking through forests that feel like heaven.',
    name: 'EMMA L.',
    detail: 'Artist & Nomad',
    accentBg: 'rgba(211, 232, 213, 0.2)',
    accentCircle: 'var(--st-secondary-fixed-dim)',
    quoteColor: 'var(--st-primary)',
    radius: '10px 60px 10px 60px',
    offset: 48,
  },
  {
    quote: 'Finally, a place that respects the medical science of nature without losing the poetry of it. I found clarity I hadn\u2019t felt in a decade.',
    name: 'PRIYA K.',
    detail: 'Writer',
    accentBg: 'var(--st-surface-container-highest)',
    accentCircle: 'var(--st-tertiary-fixed-dim)',
    quoteColor: 'var(--st-on-surface-variant)',
    radius: '40px 40px 10px 10px',
    offset: 0,
  },
]

function Testimonials() {
  return (
    <section className={styles.section} style={{ background: 'var(--st-surface)', paddingTop: 80, paddingBottom: 80 }}>
      <div className={styles.container}>
        <motion.div {...fadeUp} style={{ textAlign: 'center', marginBottom: 80 }}>
          <h2 style={{
            fontFamily: "var(--font-display), 'Lora', serif",
            fontSize: 'clamp(32px, 4vw, 52px)',
            fontWeight: 400,
            color: 'var(--st-primary)',
          }}>
            Whispers from the Meadow
          </h2>
          <p style={{
            fontFamily: "var(--font-body), 'Raleway', sans-serif",
            fontSize: 15, fontWeight: 300, fontStyle: 'italic',
            color: 'var(--st-on-surface-variant)',
            marginTop: 16,
          }}>
            Kind words from our recent guests
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.1 }}
              style={{
                position: 'relative',
                padding: 48,
                background: t.accentBg,
                borderRadius: t.radius,
                transition: 'transform 0.5s ease',
                cursor: 'default',
                marginTop: i === 1 ? t.offset : 0,
              }}
              className={styles.testimonialCard}
            >
              {/* Large floating quote mark */}
              <div aria-hidden="true" style={{
                position: 'absolute', top: -20, left: -20,
                fontFamily: 'Georgia, serif',
                fontSize: 72, lineHeight: 1,
                color: t.quoteColor, opacity: 0.2,
              }}>&ldquo;</div>

              <p style={{
                fontFamily: "var(--font-body), 'Raleway', sans-serif",
                fontSize: 15, fontWeight: 300, lineHeight: 1.7,
                color: 'var(--st-on-surface)',
                fontStyle: 'italic', margin: '0 0 32px',
                position: 'relative', zIndex: 1,
              }}>
                &ldquo;{t.quote}&rdquo;
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '50%',
                  background: t.accentCircle,
                }} />
                <div>
                  <div style={{
                    fontFamily: "var(--font-body), 'Raleway', sans-serif",
                    fontSize: 12, fontWeight: 700,
                    letterSpacing: '0.08em',
                    color: 'var(--st-primary)',
                  }}>{t.name}</div>
                  <div style={{
                    fontFamily: "var(--font-body), 'Raleway', sans-serif",
                    fontSize: 11,
                    color: 'var(--st-on-surface-variant)',
                  }}>{t.detail}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── 6. CTA — Full-bleed Image + Form ────────────────────────────────────── */

function CtaBanner() {
  return (
    <section style={{
      position: 'relative',
      minHeight: 'min(100vh, 920px)',
      display: 'flex',
      alignItems: 'center',
      padding: 'clamp(60px, 8vw, 96px) 24px',
      overflow: 'hidden',
    }}>
      {/* Full-bleed background video */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <video
          src="/images/portfolio/concept-womens-health-coach-shethrivesco/footer-contact-form-background.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(30, 35, 30, 0.4)',
          backdropFilter: 'blur(2px)',
        }} />
      </div>

      <div style={{
        position: 'relative', zIndex: 10,
        maxWidth: '80rem', margin: '0 auto', width: '100%',
      }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left — headline + copy */}
          <motion.div {...fadeUp} style={{ color: '#fff' }}>
            <h2 style={{
              fontFamily: "var(--font-display), 'Lora', serif",
              fontSize: 'clamp(36px, 5vw, 60px)',
              fontWeight: 400, lineHeight: 1.1,
              marginBottom: 24,
            }}>
              Ready to begin your{' '}
              <em style={{ fontStyle: 'italic', fontWeight: 300 }}>healing story</em>?
            </h2>
            <p style={{
              fontFamily: "var(--font-body), 'Raleway', sans-serif",
              fontSize: 18, fontWeight: 300, lineHeight: 1.7,
              color: 'rgba(255,255,255,0.8)',
              maxWidth: 440, marginBottom: 32,
            }}>
              Every journey starts with a single, intentional breath.
              Reach out to discuss how we can tailor your retreat to your personal path.
            </p>

            {/* Action links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }}>
                <div style={{
                  width: 44, height: 44, borderRadius: '50%',
                  background: 'rgba(255,255,255,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all 0.3s ease',
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <span style={{
                  fontFamily: "var(--font-body), 'Raleway', sans-serif",
                  fontSize: 12, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: '#fff',
                }}>Select your dates</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }}>
                <div style={{
                  width: 44, height: 44, borderRadius: '50%',
                  background: 'rgba(255,255,255,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <span style={{
                  fontFamily: "var(--font-body), 'Raleway', sans-serif",
                  fontSize: 12, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: '#fff',
                }}>Personal Inquiry</span>
              </div>
            </div>
          </motion.div>

          {/* Right — form card */}
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.15 }}
          >
            <div style={{
              background: 'rgba(255, 252, 246, 0.95)',
              backdropFilter: 'blur(20px)',
              padding: 'clamp(32px, 4vw, 48px)',
              borderRadius: 32,
              boxShadow: '0 24px 64px rgba(0,0,0,0.2)',
            }}>
              <form style={{ display: 'flex', flexDirection: 'column', gap: 24 }} onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label style={{
                    fontFamily: "var(--font-body), 'Raleway', sans-serif",
                    fontSize: 10, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: 'rgba(86,105,90,0.7)', display: 'block', marginBottom: 8, marginLeft: 8,
                  }}>Your Name</label>
                  <input
                    type="text"
                    placeholder="How should we address you?"
                    style={{
                      width: '100%', background: 'var(--st-surface-container, #f6f4ea)',
                      border: 'none', borderRadius: 12, padding: '16px 24px',
                      fontFamily: "var(--font-body), 'Raleway', sans-serif",
                      fontSize: 15, fontWeight: 300, color: 'var(--st-on-surface)',
                      outline: 'none',
                    }}
                  />
                </div>
                <div>
                  <label style={{
                    fontFamily: "var(--font-body), 'Raleway', sans-serif",
                    fontSize: 10, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: 'rgba(86,105,90,0.7)', display: 'block', marginBottom: 8, marginLeft: 8,
                  }}>Email Address</label>
                  <input
                    type="email"
                    placeholder="Where can we reach you?"
                    style={{
                      width: '100%', background: 'var(--st-surface-container, #f6f4ea)',
                      border: 'none', borderRadius: 12, padding: '16px 24px',
                      fontFamily: "var(--font-body), 'Raleway', sans-serif",
                      fontSize: 15, fontWeight: 300, color: 'var(--st-on-surface)',
                      outline: 'none',
                    }}
                  />
                </div>
                <div>
                  <label style={{
                    fontFamily: "var(--font-body), 'Raleway', sans-serif",
                    fontSize: 10, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: 'rgba(86,105,90,0.7)', display: 'block', marginBottom: 8, marginLeft: 8,
                  }}>What are you seeking?</label>
                  <textarea
                    placeholder="Briefly share your intention for this retreat..."
                    rows={4}
                    style={{
                      width: '100%', background: 'var(--st-surface-container, #f6f4ea)',
                      border: 'none', borderRadius: 12, padding: '16px 24px',
                      fontFamily: "var(--font-body), 'Raleway', sans-serif",
                      fontSize: 15, fontWeight: 300, color: 'var(--st-on-surface)',
                      outline: 'none', resize: 'none',
                    }}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    width: '100%',
                    background: 'var(--st-primary, #56695a)',
                    color: '#fff',
                    padding: '20px 32px',
                    borderRadius: 12,
                    border: 'none',
                    fontFamily: "var(--font-body), 'Raleway', sans-serif",
                    fontSize: 12, fontWeight: 500,
                    letterSpacing: '0.2em', textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                >
                  Begin the Conversation
                </button>
                <p style={{
                  textAlign: 'center',
                  fontFamily: "var(--font-body), 'Raleway', sans-serif",
                  fontSize: 10, fontWeight: 500,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: 'var(--st-on-surface-variant)',
                  opacity: 0.6, margin: 0,
                }}>
                  No pressure. Just a gentle first step.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ── PAGE ──────────────────────────────────────────────────────────────────── */

export default function SheThrivesHome() {
  return (
    <>
      <SheThrivesNav />
      <main>
        <Hero />
        <WavyMarquee />
        <SacredServices />
        <RetreatPreview />
        <MeetGrace />
        <Testimonials />
        <CtaBanner />
      </main>
      <SheThrivesFooter />
    </>
  )
}
