'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function CaseStudyHero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ padding: '140px 0 80px', background: 'var(--ink)' }}
    >
      {/* Blobs */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          top: -200, right: -200, width: 700, height: 700,
          background: 'radial-gradient(circle, rgba(122,158,135,0.08) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          bottom: -100, left: -100, width: 400, height: 400,
          background: 'radial-gradient(circle, rgba(196,113,74,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-container mx-auto px-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Link
              href="/work"
              className="flex items-center gap-1.5 no-underline mb-5 transition-colors duration-200 w-fit"
              style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.02em' }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M12 7H2M6 3L2 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              All work
            </Link>

            <div
              className="inline-flex items-center gap-2 rounded-full mb-5"
              style={{
                background: 'rgba(184,212,192,0.1)',
                border: '1px solid rgba(184,212,192,0.2)',
                color: 'var(--sage-light)',
                fontSize: 11, fontWeight: 500,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                padding: '5px 14px',
              }}
            >
              Case study
            </div>

            <h1
              className="font-display font-normal text-white"
              style={{ fontSize: 'clamp(44px, 5.5vw, 68px)', lineHeight: 1.08, marginBottom: 20 }}
            >
              Amy Angus<br />
              <em className="italic" style={{ color: 'var(--sage-light)' }}>Naturopathy</em>
            </h1>

            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', fontWeight: 300, lineHeight: 1.75, marginBottom: 36 }}>
              A bespoke website for a Brisbane naturopath specialising in women&apos;s hormonal health. Custom-coded, editorial in feel, warm in voice, and engineered to convert browsers into booked consultations. Fully owned, no platform lock-in.
            </p>

            <div className="flex flex-wrap gap-2.5">
              {['Naturopath', 'Brisbane, QLD', 'Custom arrangement', '2025'].map((label) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 100, padding: '7px 14px',
                    fontSize: 12, color: 'rgba(255,255,255,0.6)',
                  }}
                >
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--sage)', flexShrink: 0, display: 'inline-block' }} />
                  {label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — browser mockup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          >
            <a
              href="https://amyangusnaturopathy.com.au/"
              target="_blank"
              rel="noopener noreferrer"
              className="block no-underline group"
              style={{
                background: '#e8e5e0', borderRadius: 16,
                padding: '14px 14px 0',
                boxShadow: '0 32px 80px rgba(0,0,0,0.4)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 40px 90px rgba(0,0,0,0.5)' }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 32px 80px rgba(0,0,0,0.4)' }}
            >
              <div className="flex items-center gap-1.5 mb-2.5">
                <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#ff6058' }} />
                <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#ffbd2e' }} />
                <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#28c840' }} />
                <div
                  className="flex-1 flex items-center px-2.5"
                  style={{ background: 'rgba(255,255,255,0.5)', borderRadius: 4, height: 18, marginLeft: 6 }}
                >
                  <span style={{ fontSize: 9, color: 'var(--ink-light)', fontFamily: 'var(--font-body)' }}>
                    amyangusnaturopathy.com.au
                  </span>
                </div>
              </div>
              <div
                style={{
                  borderRadius: '8px 8px 0 0', overflow: 'hidden',
                  aspectRatio: '16/10',
                  position: 'relative',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/portfolio/amy-angus-naturopathy/desktop-after/preview-screenshot.png"
                  alt="Amy Angus Naturopathy website homepage"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
                />
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'rgba(42,37,32,0.5)' }}
                >
                  <span
                    className="inline-flex items-center gap-2"
                    style={{
                      background: 'rgba(255,255,255,0.95)',
                      borderRadius: 100,
                      padding: '10px 20px',
                      fontSize: 13,
                      fontWeight: 500,
                      color: 'var(--ink)',
                      fontFamily: 'var(--font-body)',
                      letterSpacing: '0.02em',
                    }}
                  >
                    Explore the live site
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3 11L11 3M11 3H5M11 3v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
