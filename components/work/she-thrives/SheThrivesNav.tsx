'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const BASE = '/work/concept-womens-coach'

const navLinks = [
  { label: 'The Experience', href: `${BASE}/work-with-me`, active: true },
  { label: 'About', href: `${BASE}/about`, active: false },
  { label: 'Retreats', href: `${BASE}/retreats`, active: false },
  { label: 'Journal', href: `${BASE}/about`, active: false },
]

function LotusIcon({ size = 60, opacity = 0.08 }: { size?: number; opacity?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" aria-hidden="true" style={{ opacity }}>
      <path d="M30 45c0 0-8-10-8-20s8-15 8-15 8 5 8 15-8 20-8 20z" fill="#56695a" />
      <path d="M30 45c0 0-14-6-18-16s2-18 2-18 10 8 14 16 2 18 2 18z" fill="#56695a" opacity="0.6" />
      <path d="M30 45c0 0 14-6 18-16s-2-18-2-18-10 8-14 16-2 18-2 18z" fill="#56695a" opacity="0.6" />
    </svg>
  )
}

export default function SheThrivesNav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: 72,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 clamp(24px, 5vw, 48px)',
          maxWidth: '100%',
          margin: '0 auto',
          background: scrolled
            ? 'rgba(255, 252, 246, 0.85)'
            : 'rgba(255, 252, 246, 0.8)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          boxShadow: scrolled
            ? '0 1px 0 rgba(56, 57, 47, 0.06)'
            : 'none',
          transition: 'background 0.3s ease, box-shadow 0.3s ease',
        }}
      >
        {/* Logo — serif italic */}
        <Link
          href={BASE}
          style={{
            fontFamily: "var(--font-display), 'Lora', Georgia, serif",
            fontSize: 22,
            fontWeight: 400,
            fontStyle: 'italic',
            color: '#1a3a2a',
            textDecoration: 'none',
            letterSpacing: '0.02em',
          }}
        >
          She Thrives Co.
        </Link>

        {/* Center nav links — serif italic */}
        <div className="hidden md:flex" style={{ alignItems: 'center', gap: 'clamp(24px, 3vw, 40px)' }}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={{
                fontFamily: "var(--font-display), 'Lora', Georgia, serif",
                fontSize: 15,
                fontWeight: 400,
                fontStyle: 'italic',
                letterSpacing: '0.02em',
                color: link.active ? '#1a3a2a' : '#65655a',
                textDecoration: 'none',
                borderBottom: link.active ? '1px solid #1a3a2a' : '1px solid transparent',
                paddingBottom: 2,
                transition: 'all 0.5s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#1a3a2a'
                e.currentTarget.style.opacity = '0.8'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = link.active ? '#1a3a2a' : '#65655a'
                e.currentTarget.style.opacity = '1'
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA button — pill, primary bg */}
        <Link
          href={`${BASE}/contact`}
          className="hidden md:inline-flex"
          style={{
            fontFamily: "var(--font-display), 'Lora', Georgia, serif",
            fontSize: 14,
            fontWeight: 400,
            fontStyle: 'italic',
            letterSpacing: '0.02em',
            color: '#fff',
            background: '#56695a',
            padding: '12px 28px',
            borderRadius: 9999,
            textDecoration: 'none',
            transition: 'all 0.5s ease',
            transform: 'scale(1)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '0.85'
            e.currentTarget.style.transform = 'scale(1.03)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '1'
            e.currentTarget.style.transform = 'scale(1)'
          }}
        >
          Book a Retreat
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            width: 36,
            height: 36,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 5,
          }}
        >
          <motion.span
            animate={open ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            style={{ display: 'block', width: 18, height: 1.5, background: '#38392f', borderRadius: 2 }}
          />
          <motion.span
            animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2 }}
            style={{ display: 'block', width: 18, height: 1.5, background: '#38392f', borderRadius: 2 }}
          />
          <motion.span
            animate={open ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            style={{ display: 'block', width: 18, height: 1.5, background: '#38392f', borderRadius: 2 }}
          />
        </button>

        {/* Back to portfolio — desktop only */}
        <Link
          href="/work"
          className="hidden lg:block"
          style={{
            position: 'absolute',
            bottom: -20,
            left: '50%',
            transform: 'translateX(-50%)',
            fontFamily: "var(--font-body), 'Raleway', sans-serif",
            fontSize: 10,
            color: 'rgba(56, 57, 47, 0.2)',
            textDecoration: 'none',
            letterSpacing: '0.06em',
            whiteSpace: 'nowrap',
          }}
        >
          Concept by Make It Media
        </Link>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 99,
              background: '#fffcf6',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
            }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  style={{
                    fontFamily: "var(--font-display), 'Lora', Georgia, serif",
                    fontSize: 32,
                    fontWeight: 400,
                    fontStyle: 'italic',
                    color: '#56695a',
                    textDecoration: 'none',
                    display: 'block',
                    padding: '12px 0',
                    textAlign: 'center',
                  }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              style={{ marginTop: 24 }}
            >
              <Link
                href={`${BASE}/contact`}
                onClick={() => setOpen(false)}
                style={{
                  fontFamily: "var(--font-display), 'Lora', Georgia, serif",
                  fontSize: 16,
                  fontWeight: 400,
                  fontStyle: 'italic',
                  color: '#fff',
                  background: '#56695a',
                  padding: '16px 40px',
                  borderRadius: 9999,
                  textDecoration: 'none',
                  display: 'inline-block',
                }}
              >
                Book a Retreat
              </Link>
            </motion.div>

            {/* Decorative lotus */}
            <div style={{ position: 'absolute', bottom: 40, right: 40 }}>
              <LotusIcon size={80} opacity={0.06} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
