'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
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

function PracticeIcon({ type }: { type: string }) {
  const c = 'var(--st-primary)'
  const s = 28
  switch (type) {
    case 'herb':
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 22V8" stroke={c} strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
          <path d="M12 8c0 0-6-1-8-6 4 0 7 2 8 6z" fill={c} opacity="0.6" />
          <path d="M12 8c0 0 6-1 8-6-4 0-7 2-8 6z" fill={c} opacity="0.6" />
          <path d="M12 14c0 0-5-1-7-5 3.5 0 6 1.5 7 5z" fill={c} opacity="0.45" />
          <path d="M12 14c0 0 5-1 7-5-3.5 0-6 1.5-7 5z" fill={c} opacity="0.45" />
        </svg>
      )
    case 'bowl':
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M3 11c0 5 4 9 9 9s9-4 9-9H3z" fill={c} opacity="0.6" />
          <path d="M2 11h20" stroke={c} strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
          <path d="M8 7c0.5-1.5 0-3 0-3" stroke={c} strokeWidth="1" strokeLinecap="round" opacity="0.35" />
          <path d="M12 6c0.5-1.5 0-3 0-3" stroke={c} strokeWidth="1" strokeLinecap="round" opacity="0.35" />
          <path d="M16 7c0.5-1.5 0-3 0-3" stroke={c} strokeWidth="1" strokeLinecap="round" opacity="0.35" />
        </svg>
      )
    case 'yoga':
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="4" r="2.5" fill={c} opacity="0.6" />
          <path d="M12 8v6" stroke={c} strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
          <path d="M12 10l-5 4" stroke={c} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
          <path d="M12 10l5 4" stroke={c} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
          <path d="M8 22l4-8 4 8" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
        </svg>
      )
    case 'meditation':
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="6" r="2.5" fill={c} opacity="0.6" />
          <path d="M12 9c0 0-1 2-1 4s1 3 1 3 1-1 1-3-1-4-1-4z" fill={c} opacity="0.5" />
          <path d="M12 16c-3 0-6 1.5-6 3v1h12v-1c0-1.5-3-3-6-3z" fill={c} opacity="0.5" />
          <path d="M6 5c-1-2-3-2.5-4-2" stroke={c} strokeWidth="1" strokeLinecap="round" opacity="0.3" />
          <path d="M18 5c1-2 3-2.5 4-2" stroke={c} strokeWidth="1" strokeLinecap="round" opacity="0.3" />
          <path d="M7 3c-1-1.5-2.5-1.5-3.5-1" stroke={c} strokeWidth="1" strokeLinecap="round" opacity="0.25" />
          <path d="M17 3c1-1.5 2.5-1.5 3.5-1" stroke={c} strokeWidth="1" strokeLinecap="round" opacity="0.25" />
        </svg>
      )
    case 'soundwave':
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 10v4" stroke={c} strokeWidth="2" strokeLinecap="round" opacity="0.4" />
          <path d="M8 7v10" stroke={c} strokeWidth="2" strokeLinecap="round" opacity="0.55" />
          <path d="M12 4v16" stroke={c} strokeWidth="2" strokeLinecap="round" opacity="0.7" />
          <path d="M16 7v10" stroke={c} strokeWidth="2" strokeLinecap="round" opacity="0.55" />
          <path d="M20 10v4" stroke={c} strokeWidth="2" strokeLinecap="round" opacity="0.4" />
        </svg>
      )
    case 'water':
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M2 15c2-2 4-2 6 0s4 2 6 0 4-2 6 0" stroke={c} strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
          <path d="M2 19c2-2 4-2 6 0s4 2 6 0 4-2 6 0" stroke={c} strokeWidth="1.5" strokeLinecap="round" opacity="0.45" />
          <path d="M12 3C12 3 7 9 7 13a5 5 0 0010 0c0-4-5-10-5-10z" fill={c} opacity="0.5" />
        </svg>
      )
    case 'journal':
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="5" y="2" width="14" height="20" rx="2" fill={c} opacity="0.15" stroke={c} strokeWidth="1.2" />
          <path d="M5 2h2v20H5a2 2 0 01-2-2V4a2 2 0 012-2z" fill={c} opacity="0.5" />
          <path d="M10 7h6" stroke={c} strokeWidth="1" strokeLinecap="round" opacity="0.4" />
          <path d="M10 10h6" stroke={c} strokeWidth="1" strokeLinecap="round" opacity="0.4" />
          <path d="M10 13h4" stroke={c} strokeWidth="1" strokeLinecap="round" opacity="0.4" />
        </svg>
      )
    case 'tree':
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 22v-8" stroke={c} strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
          <path d="M12 2l-7 10h4l-3 6h12l-3-6h4L12 2z" fill={c} opacity="0.55" />
        </svg>
      )
    default:
      return <LeafIcon size={24} color={c} />
  }
}

const ROTATING_WORDS = ['remember', 'restore', 'reconnect', 'breathe', 'return']
const WORD_DISPLAY_DURATION = 3000

function RotatingWord() {
  const [mounted, setMounted] = useState(false)
  const [index, setIndex] = useState(0)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    if (!mounted) return
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % ROTATING_WORDS.length)
    }, WORD_DISPLAY_DURATION)
    return () => clearInterval(interval)
  }, [mounted])

  if (!mounted) {
    return <em style={{ fontStyle: 'italic' }}>{ROTATING_WORDS[0]}</em>
  }

  return (
    <span style={{ display: 'inline-block', position: 'relative', minWidth: '4ch' }}>
      {ROTATING_WORDS.map((word, i) => (
        <em
          key={word}
          style={{
            fontStyle: 'italic',
            position: i === index ? 'relative' : 'absolute',
            left: 0,
            opacity: i === index ? 1 : 0,
            transition: 'opacity 0.8s ease-in-out',
            visibility: i === index ? 'visible' : 'hidden',
          }}
        >
          {word}
        </em>
      ))}
    </span>
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

/* ── Retreat Data ─────────────────────────────────────────────────────────── */

const retreats = [
  {
    location: 'Bali, Indonesia',
    dates: '7 – 11 April 2026',
    duration: '5 Days',
    tagline: 'Where the jungle breathes with you.',
    description:
      'Nestled among rice terraces and sacred temples, our Bali retreat draws on the island\u2019s ancient healing traditions. Wake to the sound of tropical birdsong, move through morning yoga overlooking emerald valleys, and surrender into afternoon sound healing ceremonies beneath open-air pavilions.',
    landscape: 'Lush tropical gardens, volcanic hot springs, sacred water temples, and sunrise meditations overlooking Mount Agung.',
    video: '/images/portfolio/concept-womens-health-coach-shethrivesco/yoga-bali.mp4',
    image: '',
    imageAlt: 'Bali wellness retreat surrounded by lush tropical greenery',
    accent: 'rgba(211, 232, 213, 0.25)',
    accentDot: 'var(--st-primary-fixed-dim)',
  },
  {
    location: 'Swiss Alps',
    dates: '16 – 20 August 2026',
    duration: '5 Days',
    tagline: 'Stillness at the roof of the world.',
    description:
      'High above the treeline, where the air is thin and the silence is absolute, our Alpine retreat offers a rare kind of clarity. Practice breathwork beside glacial lakes, hike through wildflower meadows, and restore your nervous system with hydrotherapy in natural mountain springs.',
    landscape: 'Alpine meadows, glacial lakes, mountain wildflowers, and panoramic summit views that stretch beyond horizon.',
    video: '/images/portfolio/concept-womens-health-coach-shethrivesco/swiss-alphs-yoga-video.mp4',
    image: '',
    imageAlt: 'Women enjoying golden hour at the Swiss Alps retreat',
    accent: 'rgba(202, 180, 243, 0.15)',
    accentDot: 'var(--st-tertiary-fixed-dim)',
  },
  {
    location: 'Byron Bay, Australia',
    dates: '18 – 22 October 2026',
    duration: '5 Days',
    tagline: 'Where the land meets the sea meets the self.',
    description:
      'On Australia\u2019s most easterly point, where hinterland rainforest meets golden coastline, our Byron Bay retreat holds space for deep restoration. Ocean swims at dawn, naturopathy consultations in sunlit studios, and evening journaling beneath the Southern Cross.',
    landscape: 'Coastal headlands, subtropical rainforest, lighthouse walks at sunrise, and firelit evenings under canopied stars.',
    video: '/images/portfolio/concept-womens-health-coach-shethrivesco/byron-retreat-video.mp4',
    image: '',
    imageAlt: 'Naturopathy and holistic wellness in a natural setting',
    accent: 'rgba(255, 218, 217, 0.2)',
    accentDot: 'var(--st-secondary-fixed-dim)',
  },
]

const practices = [
  {
    name: 'Naturopathy & Herbal Medicine',
    description: 'One-on-one naturopathic consultations and personalised herbal protocols designed around your unique constitution. Botanical workshops where you\u2019ll learn to blend your own tinctures and teas.',
    icon: 'herb',
  },
  {
    name: 'Nutritional Wellness',
    description: 'Every meal is a ceremony. Whole-food, plant-forward menus crafted by our in-house nutritionist — designed to nourish your gut, balance your hormones, and awaken your palate to the medicine of real food.',
    icon: 'bowl',
  },
  {
    name: 'Restorative Yoga & Movement',
    description: 'Daily morning flows and evening yin sessions tailored to all levels. Gentle vinyasa to wake the body, deep restorative holds to quiet the mind. Movement as meditation, breath as anchor.',
    icon: 'yoga',
  },
  {
    name: 'Guided Meditation & Breathwork',
    description: 'From silent seated practice to guided visualisations and conscious connected breathwork — each session is designed to peel back layers of tension and return you to the stillness beneath the noise.',
    icon: 'meditation',
  },
  {
    name: 'Sound Healing',
    description: 'Crystal singing bowls, Tibetan gongs, and harmonic overtone chanting. These vibrational ceremonies wash through your nervous system, releasing what words cannot reach and inviting a peace that settles into your bones.',
    icon: 'soundwave',
  },
  {
    name: 'Hydrotherapy',
    description: 'Hot springs, cold plunges, ocean swims, and mineral soaks. Water as healer, as reset, as ritual. Each session calibrated to stimulate circulation, reduce inflammation, and restore your body\u2019s natural rhythm.',
    icon: 'water',
  },
  {
    name: 'Daily Journaling & Reflection',
    description: 'Guided morning pages and evening reflection prompts to help you process, integrate, and honour what surfaces during your retreat. A practice you\u2019ll carry home long after the retreat ends.',
    icon: 'journal',
  },
  {
    name: 'Nature Immersion',
    description: 'Forest bathing, sunrise walks, barefoot grounding, and landscape meditation. Each retreat location is chosen for its capacity to hold you — to remind your body what it means to be held by the earth.',
    icon: 'tree',
  },
]

const inclusions = [
  '5 nights premium eco-lodge accommodation',
  'All meals — nutritionist-designed, whole-food, plant-forward',
  'Daily yoga, meditation & breathwork sessions',
  'One-on-one naturopathic consultation',
  'Personalised herbal medicine protocol to take home',
  'Sound healing & hydrotherapy ceremonies',
  'Guided nature immersion & forest bathing',
  'Daily journaling kit & guided prompts',
  'Herbal tea & elixir bar — available all day',
  'Pre-retreat wellness questionnaire & intention-setting call',
  'Post-retreat integration guide & 30-day journaling practice',
  'Airport transfers on arrival & departure days',
]

/* ── 1. HERO ──────────────────────────────────────────────────────────────── */

function RetreatsHero() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 50])

  return (
    <section ref={heroRef} className={styles.hero}>
      <video
        className={styles.heroVideo}
        src="/images/portfolio/concept-womens-health-coach-shethrivesco/retreats video.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label="She Thrives wellness retreat experience"
      />
      <div className={styles.heroOverlay} />

      <motion.div className={styles.heroContent} style={{ y: contentY }}>
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            fontFamily: "var(--font-body), 'Raleway', sans-serif",
            fontSize: 12, fontWeight: 500,
            letterSpacing: '0.4em', textTransform: 'uppercase',
            color: 'var(--st-secondary)',
            display: 'block', marginBottom: 24,
          }}
        >
          2026 Retreat Collection
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            fontFamily: "var(--font-display), 'Lora', Georgia, serif",
            fontSize: 'clamp(42px, 7vw, 100px)',
            fontWeight: 400,
            lineHeight: 1.05,
            color: 'var(--st-primary)',
            marginBottom: 0,
          }}
        >
          Five days to<br />
          <RotatingWord />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          style={{
            fontFamily: "var(--font-body), 'Raleway', sans-serif",
            fontSize: 'clamp(16px, 2.2vw, 21px)',
            fontWeight: 300, lineHeight: 1.7,
            color: 'var(--st-on-surface-variant)',
            maxWidth: 580, margin: '28px auto 0',
          }}
        >
          Naturopathy-led wellness retreats in three of the world&apos;s most
          healing landscapes. Limited to 12 women per gathering.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.85 }}
          style={{ marginTop: 48, display: 'flex', justifyContent: 'center' }}
        >
          <Link href="#inquiry" className={styles.btnGlow}>
            Enquire Now
          </Link>
        </motion.div>
      </motion.div>

    </section>
  )
}

/* ── 2. PHILOSOPHY INTRO ─────────────────────────────────────────────────── */

function PhilosophyIntro() {
  return (
    <section className={styles.section} style={{ background: 'var(--st-surface)', paddingTop: 100, paddingBottom: 100 }}>
      <div className={styles.container} style={{ maxWidth: 800, textAlign: 'center' }}>
        <motion.div {...fadeUp}>
          <LotusIcon size={40} color="var(--st-primary)" />
        </motion.div>

        <motion.h2
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.08 }}
          style={{
            fontFamily: "var(--font-display), 'Lora', serif",
            fontSize: 'clamp(24px, 3vw, 34px)',
            fontWeight: 400, lineHeight: 1.3,
            color: 'var(--st-primary)',
            marginTop: 32, marginBottom: 28,
          }}
        >
          These retreats are not about escaping your life.<br />
          They are about <em style={{ fontStyle: 'italic' }}>returning to it</em> — whole.
        </motion.h2>

        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.16 }}
          style={{
            fontFamily: "var(--font-body), 'Raleway', sans-serif",
            fontSize: 17, fontWeight: 300, lineHeight: 1.8,
            color: 'var(--st-on-surface-variant)',
            maxWidth: 640, margin: '0 auto',
          }}
        >
          Each gathering weaves together clinical naturopathy, movement, stillness,
          and the quiet intelligence of the natural world. We hold space for 12 women
          at a time — intimate enough to be seen, spacious enough to breathe. No
          rigid schedules, no performance. Just the steady, gentle work of coming
          home to yourself.
        </motion.p>
      </div>
    </section>
  )
}

/* ── 3. RETREAT LOCATIONS ─────────────────────────────────────────────────── */

function RetreatLocations() {
  return (
    <>
      <WaveDivider from="var(--st-surface)" to="var(--st-surface-container-low)" />
      <section
        className={`${styles.section} ${styles.botanicalBg}`}
        style={{ background: 'var(--st-surface-container-low)', paddingTop: 80, paddingBottom: 100 }}
      >
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 24px' }}>
          <motion.div {...fadeUp} style={{ textAlign: 'center', marginBottom: 96 }}>
            <span style={{
              fontFamily: "var(--font-body), 'Raleway', sans-serif",
              fontSize: 12, fontWeight: 500,
              letterSpacing: '0.4em', textTransform: 'uppercase',
              color: 'var(--st-secondary)',
              display: 'block', marginBottom: 16,
            }}>Three Landscapes</span>
            <h2 style={{
              fontFamily: "var(--font-display), 'Lora', serif",
              fontSize: 'clamp(36px, 5vw, 60px)',
              fontWeight: 400,
              color: 'var(--st-primary)',
            }}>
              Choose Your Sanctuary
            </h2>
          </motion.div>

          <div className="flex flex-col" style={{ gap: 'clamp(80px, 10vw, 120px)' }}>
            {retreats.map((retreat, i) => {
              const isReversed = i % 2 !== 0
              return (
                <motion.div
                  key={retreat.location}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                  className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-20`}
                >
                  {/* Image */}
                  <div className="w-full md:w-1/2" style={{ position: 'relative' }}>
                    <div style={{
                      aspectRatio: retreat.video ? '3/4' : '4/3',
                      borderRadius: isReversed ? '120px 24px 24px 120px' : '24px 120px 120px 24px',
                      overflow: 'hidden',
                      boxShadow: '0 24px 64px rgba(56,57,47,0.12)',
                    }}>
                      {retreat.video ? (
                        <video
                          src={retreat.video}
                          autoPlay
                          muted
                          loop
                          playsInline
                          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                        />
                      ) : (
                        <Image
                          src={retreat.image}
                          alt={retreat.imageAlt}
                          width={700}
                          height={525}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      )}
                    </div>

                    {/* Floating date badge */}
                    <motion.div
                      className={styles.floatSlow}
                      style={{
                        position: 'absolute',
                        ...(retreat.video ? { top: -24 } : { bottom: -24 }),
                        [isReversed ? 'right' : 'left']: -16,
                        background: 'rgba(255, 255, 255, 0.85)',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        padding: '20px 28px',
                        borderRadius: 20,
                        border: '1px solid rgba(255,255,255,0.4)',
                        boxShadow: '0 12px 40px rgba(56,57,47,0.1)',
                        zIndex: 2,
                      }}
                    >
                      <span style={{
                        fontFamily: "var(--font-body), 'Raleway', sans-serif",
                        fontSize: 11, fontWeight: 600,
                        letterSpacing: '0.12em', textTransform: 'uppercase',
                        color: 'var(--st-secondary)',
                        display: 'block',
                      }}>{retreat.duration}</span>
                      <span style={{
                        fontFamily: "var(--font-display), 'Lora', serif",
                        fontSize: 16, fontWeight: 400, fontStyle: 'italic',
                        color: 'var(--st-primary)',
                        display: 'block', marginTop: 4,
                      }}>{retreat.dates}</span>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="w-full md:w-1/2">
                    <div className={styles.serviceCard}>
                      <span style={{
                        fontFamily: "var(--font-body), 'Raleway', sans-serif",
                        fontSize: 11, fontWeight: 500,
                        letterSpacing: '0.2em', textTransform: 'uppercase',
                        color: 'var(--st-secondary)',
                        display: 'block', marginBottom: 12,
                      }}>
                        {retreat.duration} &middot; {retreat.dates}
                      </span>

                      <h3 style={{
                        fontFamily: "var(--font-display), 'Lora', serif",
                        fontSize: 'clamp(28px, 3.5vw, 40px)',
                        fontWeight: 400, color: 'var(--st-primary)',
                        marginBottom: 8,
                      }}>{retreat.location}</h3>

                      <p style={{
                        fontFamily: "var(--font-display), 'Lora', serif",
                        fontSize: 18, fontWeight: 400, fontStyle: 'italic',
                        color: 'var(--st-primary)', opacity: 0.7,
                        marginBottom: 20,
                      }}>{retreat.tagline}</p>

                      <p style={{
                        fontFamily: "var(--font-body), 'Raleway', sans-serif",
                        fontSize: 15, fontWeight: 300, lineHeight: 1.7,
                        color: 'var(--st-on-surface-variant)', marginBottom: 20,
                      }}>{retreat.description}</p>

                      <div style={{
                        padding: '16px 0', borderTop: '1px solid rgba(86,105,90,0.1)',
                        marginBottom: 24,
                      }}>
                        <span style={{
                          fontFamily: "var(--font-body), 'Raleway', sans-serif",
                          fontSize: 11, fontWeight: 600,
                          letterSpacing: '0.12em', textTransform: 'uppercase',
                          color: 'var(--st-primary)', display: 'block', marginBottom: 8,
                        }}>The Landscape</span>
                        <p style={{
                          fontFamily: "var(--font-body), 'Raleway', sans-serif",
                          fontSize: 14, fontWeight: 300, lineHeight: 1.7,
                          color: 'var(--st-on-surface-variant)', fontStyle: 'italic', margin: 0,
                        }}>{retreat.landscape}</p>
                      </div>

                      <Link href="#inquiry" style={{
                        fontFamily: "var(--font-body), 'Raleway', sans-serif",
                        fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase',
                        color: 'var(--st-secondary)', textDecoration: 'none',
                        display: 'inline-flex', alignItems: 'center', gap: 6,
                      }}>Enquire About This Retreat &rarr;</Link>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

/* ── 4. THE SACRED PRACTICES ─────────────────────────────────────────────── */

function SacredPractices() {
  return (
    <>
      <WaveDivider from="var(--st-surface-container-low)" to="var(--st-surface)" />
      <section className={styles.section} style={{ background: 'var(--st-surface)', paddingTop: 80, paddingBottom: 100 }}>
        <div className={styles.container}>
          <motion.div {...fadeUp} style={{ textAlign: 'center', marginBottom: 80 }}>
            <span style={{
              fontFamily: "var(--font-body), 'Raleway', sans-serif",
              fontSize: 12, fontWeight: 500,
              letterSpacing: '0.4em', textTransform: 'uppercase',
              color: 'var(--st-secondary)',
              display: 'block', marginBottom: 16,
            }}>The Sacred Practices</span>
            <h2 style={{
              fontFamily: "var(--font-display), 'Lora', serif",
              fontSize: 'clamp(32px, 4.5vw, 52px)',
              fontWeight: 400,
              color: 'var(--st-primary)',
              marginBottom: 20,
            }}>
              Woven through every <em style={{ fontStyle: 'italic' }}>gathering</em>
            </h2>
            <p style={{
              fontFamily: "var(--font-body), 'Raleway', sans-serif",
              fontSize: 16, fontWeight: 300, lineHeight: 1.7,
              color: 'var(--st-on-surface-variant)',
              maxWidth: 560, margin: '0 auto',
            }}>
              Each retreat draws from the same foundation of healing modalities,
              shaped by the landscape and season of each location.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {practices.map((practice, i) => (
              <motion.div
                key={practice.name}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.06 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.55)',
                  backdropFilter: 'blur(16px) saturate(1.4)',
                  WebkitBackdropFilter: 'blur(16px) saturate(1.4)',
                  padding: 'clamp(28px, 3vw, 40px)',
                  borderRadius: 'var(--st-radius-lg)',
                  border: '1px solid rgba(255, 255, 255, 0.6)',
                  boxShadow: '0 8px 32px rgba(56, 57, 47, 0.08), 0 1px 2px rgba(56, 57, 47, 0.04), inset 0 1px 0 rgba(255,255,255,0.7)',
                  transition: 'box-shadow 0.5s ease, transform 0.4s ease',
                }}
                whileHover={{ boxShadow: '0 20px 56px rgba(56, 57, 47, 0.14), 0 2px 4px rgba(56, 57, 47, 0.06), inset 0 1px 0 rgba(255,255,255,0.8)', y: -3 }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20 }}>
                  <div style={{ flexShrink: 0, marginTop: 4 }}>
                    <PracticeIcon type={practice.icon} />
                  </div>
                  <div>
                    <h3 style={{
                      fontFamily: "var(--font-display), 'Lora', serif",
                      fontSize: 'clamp(20px, 2.5vw, 24px)',
                      fontWeight: 400, color: 'var(--st-primary)',
                      marginBottom: 10,
                    }}>{practice.name}</h3>
                    <p style={{
                      fontFamily: "var(--font-body), 'Raleway', sans-serif",
                      fontSize: 14, fontWeight: 300, lineHeight: 1.7,
                      color: 'var(--st-on-surface-variant)', margin: 0,
                    }}>{practice.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

/* ── 5. A DAY IN YOUR RETREAT ────────────────────────────────────────────── */

const dailyRhythm = [
  { time: '6:00 am', label: 'Sunrise', activity: 'Guided meditation or ocean swim — greet the day in stillness or movement, your choice.' },
  { time: '7:30 am', label: 'Morning Practice', activity: 'Restorative yoga flow followed by breathwork. Gentle enough to welcome the body awake.' },
  { time: '9:00 am', label: 'Nourish', activity: 'Breakfast — seasonal, whole-food, prepared with intention. Herbal elixirs and fresh-pressed juices.' },
  { time: '10:30 am', label: 'Healing Session', activity: 'Naturopathy consultations, herbal medicine workshops, or hydrotherapy — rotating each day.' },
  { time: '1:00 pm', label: 'Midday Feast', activity: 'Lunch — a shared table, unhurried. Nutritionist-designed, always nourishing, always beautiful.' },
  { time: '2:30 pm', label: 'Sacred Pause', activity: 'Free time for journaling, nature walks, reading, or simply being. Rest is not optional — it is essential.' },
  { time: '4:30 pm', label: 'Afternoon Ritual', activity: 'Sound healing ceremony, nature immersion, or gentle movement. The body softens, the mind quietens.' },
  { time: '6:30 pm', label: 'Evening Nourishment', activity: 'Dinner — gathered around candlelight. Warming, grounding, designed to ease you into the evening.' },
  { time: '8:00 pm', label: 'Evening Reflection', activity: 'Guided journaling, stargazing, or fireside sharing circle. Close the day with intention.' },
]

function DailyRhythm() {
  return (
    <>
      <WaveDivider from="var(--st-surface)" to="var(--st-surface-container-low)" />
      <section
        className={`${styles.section} ${styles.botanicalBg}`}
        style={{ background: 'var(--st-surface-container-low)', paddingTop: 80, paddingBottom: 100 }}
      >
        <div className={styles.container} style={{ maxWidth: 800 }}>
          <motion.div {...fadeUp} style={{ textAlign: 'center', marginBottom: 80 }}>
            <span style={{
              fontFamily: "var(--font-body), 'Raleway', sans-serif",
              fontSize: 12, fontWeight: 500,
              letterSpacing: '0.4em', textTransform: 'uppercase',
              color: 'var(--st-secondary)',
              display: 'block', marginBottom: 16,
            }}>The Rhythm</span>
            <h2 style={{
              fontFamily: "var(--font-display), 'Lora', serif",
              fontSize: 'clamp(32px, 4.5vw, 52px)',
              fontWeight: 400,
              color: 'var(--st-primary)',
              marginBottom: 20,
            }}>
              A day in your <em style={{ fontStyle: 'italic' }}>retreat</em>
            </h2>
            <p style={{
              fontFamily: "var(--font-body), 'Raleway', sans-serif",
              fontSize: 16, fontWeight: 300, lineHeight: 1.7,
              color: 'var(--st-on-surface-variant)',
              maxWidth: 520, margin: '0 auto',
            }}>
              No rigid timetable. A gentle rhythm that invites you to participate
              as deeply — or as softly — as you need.
            </p>
          </motion.div>

          <div style={{ position: 'relative' }}>
            {/* Vertical line */}
            <div aria-hidden="true" style={{
              position: 'absolute', left: 'clamp(20px, 4vw, 40px)', top: 0, bottom: 0,
              width: 1, background: 'rgba(86, 105, 90, 0.15)',
            }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {dailyRhythm.map((item, i) => (
                <motion.div
                  key={item.time}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: i * 0.04 }}
                  style={{
                    display: 'flex', alignItems: 'flex-start', gap: 'clamp(20px, 3vw, 32px)',
                    padding: '24px 0',
                    paddingLeft: 'clamp(48px, 7vw, 72px)',
                    position: 'relative',
                  }}
                >
                  {/* Timeline dot */}
                  <div aria-hidden="true" style={{
                    position: 'absolute',
                    left: 'calc(clamp(20px, 4vw, 40px) - 4px)',
                    top: 32,
                    width: 9, height: 9, borderRadius: '50%',
                    background: 'var(--st-primary-fixed-dim)',
                    border: '2px solid var(--st-primary)',
                  }} />

                  <div style={{ minWidth: 72 }}>
                    <span style={{
                      fontFamily: "var(--font-body), 'Raleway', sans-serif",
                      fontSize: 11, fontWeight: 500,
                      letterSpacing: '0.08em',
                      color: 'var(--st-secondary)',
                      whiteSpace: 'nowrap',
                    }}>{item.time}</span>
                  </div>

                  <div>
                    <h4 style={{
                      fontFamily: "var(--font-display), 'Lora', serif",
                      fontSize: 18, fontWeight: 400,
                      color: 'var(--st-primary)',
                      marginBottom: 6,
                    }}>{item.label}</h4>
                    <p style={{
                      fontFamily: "var(--font-body), 'Raleway', sans-serif",
                      fontSize: 14, fontWeight: 300, lineHeight: 1.7,
                      color: 'var(--st-on-surface-variant)', margin: 0,
                    }}>{item.activity}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

/* ── 6. THE TRANSFORMATION ───────────────────────────────────────────────── */

function Transformation() {
  return (
    <>
      <WaveDivider from="var(--st-surface-container-low)" to="var(--st-surface)" />
      <section className={styles.section} style={{ background: 'var(--st-surface)', paddingTop: 80, paddingBottom: 100 }}>
        <div className={styles.container}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
            {/* Left — image */}
            <motion.div {...fadeUp} style={{ position: 'relative' }}>
              <div style={{
                aspectRatio: '4/5',
                borderRadius: '999px 999px 0 0',
                overflow: 'hidden',
                boxShadow: '0 24px 64px rgba(56,57,47,0.12)',
              }}>
                <Image
                  src="/images/portfolio/concept-womens-health-coach-shethrivesco/c76c3cf12af8cf2a5f431b9b088658c8.jpg"
                  alt="A woman at peace after a healing retreat experience"
                  width={600}
                  height={750}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                />
              </div>

              <motion.div
                className={`${styles.floatSlow} hidden md:block`}
                style={{
                  position: 'absolute', bottom: -32, right: -24,
                  background: 'rgba(255, 255, 255, 0.5)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  padding: 28, borderRadius: 20,
                  maxWidth: 260,
                  border: '1px solid rgba(255,255,255,0.3)',
                  boxShadow: '0 16px 48px rgba(56,57,47,0.1)',
                  zIndex: 2,
                }}
              >
                <p style={{
                  fontFamily: "var(--font-display), 'Lora', serif",
                  fontSize: 17, fontStyle: 'italic',
                  lineHeight: 1.5,
                  color: 'var(--st-primary-dim)',
                  margin: 0,
                }}>
                  &ldquo;I left carrying a quietness I didn&apos;t know I was missing.&rdquo;
                </p>
              </motion.div>
            </motion.div>

            {/* Right — content */}
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.12 }}>
              <span style={{
                fontFamily: "var(--font-body), 'Raleway', sans-serif",
                fontSize: 12, fontWeight: 500,
                letterSpacing: '0.2em', textTransform: 'uppercase',
                color: 'var(--st-secondary)',
                display: 'block', marginBottom: 16,
              }}>After the retreat</span>

              <h2 style={{
                fontFamily: "var(--font-display), 'Lora', serif",
                fontSize: 'clamp(32px, 4.5vw, 48px)',
                fontWeight: 400, lineHeight: 1.15,
                color: 'var(--st-primary)',
                marginBottom: 28,
              }}>
                What you&apos;ll carry <em style={{ fontStyle: 'italic' }}>home</em>
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 32 }}>
                {[
                  'A nervous system that remembers what rest feels like — not the shallow, guilty kind, but the deep, cellular reset that changes how you move through every day after.',
                  'Clarity about what your body actually needs. Not from a textbook, but from five days of listening to it in an environment designed to let it speak.',
                  'A personalised herbal protocol and nutritional framework you can continue at home — rooted in clinical naturopathy, not trends.',
                  'The quiet confidence that comes from knowing you chose yourself. That you gave yourself permission to stop, to soften, to return to the version of you that exists beneath the exhaustion.',
                  'A community of 12 women who held space with you. Not a networking event — a gathering of souls who understand what it means to need this.',
                ].map((text, i) => (
                  <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <div style={{
                      width: 6, height: 6, borderRadius: '50%',
                      background: 'var(--st-primary)', opacity: 0.5,
                      flexShrink: 0, marginTop: 10,
                    }} />
                    <p style={{
                      fontFamily: "var(--font-body), 'Raleway', sans-serif",
                      fontSize: 15, fontWeight: 300, lineHeight: 1.7,
                      color: 'var(--st-on-surface-variant)', margin: 0,
                    }}>{text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

/* ── 7. WHAT'S INCLUDED ──────────────────────────────────────────────────── */

function WhatsIncluded() {
  return (
    <>
      <WaveDivider from="var(--st-surface)" to="var(--st-surface-container-low)" />
      <section
        className={`${styles.section} ${styles.botanicalBg}`}
        style={{ background: 'var(--st-surface-container-low)', paddingTop: 80, paddingBottom: 100 }}
      >
        <div className={styles.container} style={{ maxWidth: 900 }}>
          <motion.div {...fadeUp} style={{ textAlign: 'center', marginBottom: 64 }}>
            <span style={{
              fontFamily: "var(--font-body), 'Raleway', sans-serif",
              fontSize: 12, fontWeight: 500,
              letterSpacing: '0.4em', textTransform: 'uppercase',
              color: 'var(--st-secondary)',
              display: 'block', marginBottom: 16,
            }}>Everything You Need</span>
            <h2 style={{
              fontFamily: "var(--font-display), 'Lora', serif",
              fontSize: 'clamp(32px, 4.5vw, 52px)',
              fontWeight: 400,
              color: 'var(--st-primary)',
            }}>
              What&apos;s <em style={{ fontStyle: 'italic' }}>included</em>
            </h2>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            style={{
              background: 'rgba(255, 255, 255, 0.6)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              padding: 'clamp(32px, 5vw, 56px)',
              borderRadius: 'var(--st-radius-xl)',
              border: '1px solid rgba(255, 255, 255, 0.4)',
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
              {inclusions.map((item, i) => (
                <motion.div
                  key={i}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: 0.08 + i * 0.03 }}
                  style={{
                    display: 'flex', alignItems: 'flex-start', gap: 14,
                    padding: '12px 0',
                    borderBottom: '1px solid rgba(86, 105, 90, 0.06)',
                  }}
                >
                  <div style={{ flexShrink: 0, marginTop: 4 }}>
                    <LeafIcon size={14} color="var(--st-primary)" />
                  </div>
                  <span style={{
                    fontFamily: "var(--font-body), 'Raleway', sans-serif",
                    fontSize: 15, fontWeight: 300, lineHeight: 1.6,
                    color: 'var(--st-on-surface)',
                  }}>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.3 }}
            style={{
              fontFamily: "var(--font-display), 'Lora', serif",
              fontSize: 16, fontWeight: 400, fontStyle: 'italic',
              color: 'var(--st-on-surface-variant)',
              textAlign: 'center', marginTop: 40, opacity: 0.7,
            }}
          >
            Flights are not included. Dietary requirements are accommodated with advance notice.
          </motion.p>
        </div>
      </section>
    </>
  )
}

/* ── 8. INQUIRY CTA ──────────────────────────────────────────────────────── */

function InquiryCta() {
  return (
    <section
      id="inquiry"
      style={{
        position: 'relative',
        minHeight: 'min(100vh, 920px)',
        display: 'flex',
        alignItems: 'center',
        padding: 'clamp(60px, 8vw, 96px) 24px',
        overflow: 'hidden',
      }}
    >
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
          background: 'rgba(30, 35, 30, 0.5)',
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
            <span style={{
              fontFamily: "var(--font-body), 'Raleway', sans-serif",
              fontSize: 11, fontWeight: 500,
              letterSpacing: '0.3em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.6)',
              display: 'block', marginBottom: 20,
            }}>Limited to 12 Women Per Retreat</span>

            <h2 style={{
              fontFamily: "var(--font-display), 'Lora', serif",
              fontSize: 'clamp(36px, 5vw, 60px)',
              fontWeight: 400, lineHeight: 1.1,
              marginBottom: 24,
            }}>
              Your place is{' '}
              <em style={{ fontStyle: 'italic', fontWeight: 300 }}>waiting</em>
            </h2>

            <p style={{
              fontFamily: "var(--font-body), 'Raleway', sans-serif",
              fontSize: 17, fontWeight: 300, lineHeight: 1.7,
              color: 'rgba(255,255,255,0.8)',
              maxWidth: 440, marginBottom: 32,
            }}>
              Spots fill quietly. If something in you stirred while reading this page,
              that&apos;s worth listening to. Reach out and we&apos;ll share everything
              you need to know — including pricing, travel details, and how to prepare.
            </p>

            {/* Upcoming dates */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 8 }}>
              {retreats.map((r) => (
                <div key={r.location} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 8, height: 8, borderRadius: '50%',
                    background: 'rgba(211, 232, 213, 0.6)',
                  }} />
                  <span style={{
                    fontFamily: "var(--font-body), 'Raleway', sans-serif",
                    fontSize: 13, fontWeight: 400, letterSpacing: '0.04em',
                    color: 'rgba(255,255,255,0.7)',
                  }}>
                    {r.dates} — {r.location}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — inquiry form */}
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.15 }}
          >
            <div style={{
              background: 'rgba(255, 252, 246, 0.95)',
              backdropFilter: 'blur(20px)',
              padding: 'clamp(32px, 4vw, 48px)',
              borderRadius: 'var(--st-radius-xl)',
              boxShadow: '0 32px 80px rgba(0,0,0,0.15)',
            }}>
              <h3 style={{
                fontFamily: "var(--font-display), 'Lora', serif",
                fontSize: 24, fontWeight: 400, fontStyle: 'italic',
                color: 'var(--st-primary)',
                marginBottom: 8,
              }}>Enquire about a retreat</h3>
              <p style={{
                fontFamily: "var(--font-body), 'Raleway', sans-serif",
                fontSize: 13, fontWeight: 300, lineHeight: 1.6,
                color: 'var(--st-on-surface-variant)',
                marginBottom: 28,
              }}>
                We&apos;ll respond within 48 hours with a detailed retreat guide.
              </p>

              <form
                name="retreat-inquiry"
                method="POST"
                data-netlify="true"
                style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
              >
                <input type="hidden" name="form-name" value="retreat-inquiry" />

                {[
                  { name: 'name', placeholder: 'Your name', type: 'text' },
                  { name: 'email', placeholder: 'Email address', type: 'email' },
                  { name: 'phone', placeholder: 'Phone (optional)', type: 'tel' },
                ].map((field) => (
                  <input
                    key={field.name}
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    required={field.name !== 'phone'}
                    style={{
                      fontFamily: "var(--font-body), 'Raleway', sans-serif",
                      fontSize: 14, fontWeight: 300,
                      color: 'var(--st-on-surface)',
                      background: 'var(--st-surface-container-low)',
                      border: '1px solid var(--st-outline-variant)',
                      borderRadius: 12, padding: '14px 18px',
                      outline: 'none', transition: 'border-color 0.3s',
                    }}
                  />
                ))}

                {/* Retreat selection */}
                <select
                  name="retreat"
                  required
                  defaultValue=""
                  style={{
                    fontFamily: "var(--font-body), 'Raleway', sans-serif",
                    fontSize: 14, fontWeight: 300,
                    color: 'var(--st-on-surface)',
                    background: 'var(--st-surface-container-low)',
                    border: '1px solid var(--st-outline-variant)',
                    borderRadius: 12, padding: '14px 18px',
                    outline: 'none', appearance: 'none',
                    WebkitAppearance: 'none',
                  }}
                >
                  <option value="" disabled>Which retreat interests you?</option>
                  <option value="bali-april-2026">Bali — 7–11 April 2026</option>
                  <option value="swiss-alps-august-2026">Swiss Alps — 16–20 August 2026</option>
                  <option value="byron-bay-october-2026">Byron Bay — 18–22 October 2026</option>
                  <option value="undecided">I&apos;m not sure yet</option>
                </select>

                <textarea
                  name="message"
                  placeholder="Anything you'd like us to know? (dietary needs, questions, intentions…)"
                  rows={4}
                  style={{
                    fontFamily: "var(--font-body), 'Raleway', sans-serif",
                    fontSize: 14, fontWeight: 300,
                    color: 'var(--st-on-surface)',
                    background: 'var(--st-surface-container-low)',
                    border: '1px solid var(--st-outline-variant)',
                    borderRadius: 12, padding: '14px 18px',
                    outline: 'none', resize: 'vertical',
                  }}
                />

                <button
                  type="submit"
                  id="cta-retreat-inquiry"
                  className={styles.btnPrimary}
                  style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}
                >
                  Send Enquiry
                </button>

                <p style={{
                  fontFamily: "var(--font-body), 'Raleway', sans-serif",
                  fontSize: 11, fontWeight: 300,
                  color: 'var(--st-on-surface-variant)', opacity: 0.6,
                  textAlign: 'center', margin: 0,
                }}>
                  No obligation. No pressure. Just information.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ── PAGE ASSEMBLY ────────────────────────────────────────────────────────── */

export default function RetreatsPage() {
  return (
    <>
      <SheThrivesNav />
      <main>
        <RetreatsHero />
        <PhilosophyIntro />
        <RetreatLocations />
        <SacredPractices />
        <DailyRhythm />
        <Transformation />
        <WhatsIncluded />
        <InquiryCta />
      </main>
      <SheThrivesFooter />
    </>
  )
}
