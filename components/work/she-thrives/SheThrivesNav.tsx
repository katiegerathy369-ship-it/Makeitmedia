'use client'

import { useState } from 'react'
import Link from 'next/link'

const BASE = '/work/concept-womens-coach'

const navLinks = [
  { label: 'About', href: `${BASE}/about` },
  { label: 'Work with me', href: `${BASE}/work-with-me` },
  { label: 'Contact', href: `${BASE}/contact` },
]

export default function SheThrivesNav() {
  const [open, setOpen] = useState(false)

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '0 clamp(16px, 4vw, 48px)',
        height: 72,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'rgba(253,250,246,0.95)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        boxShadow: '0 1px 0 rgba(30,20,18,0.06)',
      }}
    >
      {/* Logo */}
      <Link
        href={BASE}
        style={{
          fontFamily: 'var(--font-display), Georgia, serif',
          fontSize: 22,
          color: '#c4706a',
          textDecoration: 'none',
        }}
      >
        She Thrives Co.
      </Link>

      {/* Desktop nav */}
      <div className="hidden md:flex" style={{ alignItems: 'center', gap: 36 }}>
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            style={{
              fontFamily: 'var(--font-body), system-ui, sans-serif',
              fontSize: 13,
              fontWeight: 400,
              letterSpacing: '0.04em',
              color: 'var(--ink-mid)',
              textDecoration: 'none',
            }}
          >
            {link.label}
          </Link>
        ))}
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
            padding: '10px 24px',
            borderRadius: 100,
            textDecoration: 'none',
          }}
        >
          Book a call
        </Link>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 5,
          width: 40,
          height: 40,
        }}
      >
        <span style={{
          display: 'block', width: 20, height: 2, background: '#1e1412',
          transition: 'all 0.3s',
          ...(open ? { transform: 'rotate(45deg) translate(2.5px, 2.5px)' } : {}),
        }} />
        <span style={{
          display: 'block', width: 20, height: 2, background: '#1e1412',
          transition: 'all 0.3s',
          ...(open ? { opacity: 0 } : {}),
        }} />
        <span style={{
          display: 'block', width: 20, height: 2, background: '#1e1412',
          transition: 'all 0.3s',
          ...(open ? { transform: 'rotate(-45deg) translate(2.5px, -2.5px)' } : {}),
        }} />
      </button>

      {/* Mobile drawer */}
      {open && (
        <div
          className="md:hidden"
          style={{
            position: 'fixed',
            top: 72,
            left: 0,
            right: 0,
            background: 'rgba(253,250,246,0.98)',
            backdropFilter: 'blur(12px)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: 'var(--font-body), system-ui, sans-serif',
                fontSize: 16,
                fontWeight: 400,
                color: 'var(--ink-mid)',
                textDecoration: 'none',
                padding: '12px 0',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={`${BASE}/contact`}
            onClick={() => setOpen(false)}
            style={{
              fontFamily: 'var(--font-body), system-ui, sans-serif',
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#fff',
              background: 'var(--rose)',
              padding: '14px 24px',
              borderRadius: 100,
              textDecoration: 'none',
              textAlign: 'center',
              marginTop: 8,
            }}
          >
            Book a call
          </Link>
        </div>
      )}

      {/* Back to portfolio — hidden on mobile */}
      <Link
        href="/work"
        className="hidden lg:block"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontFamily: 'var(--font-body), system-ui, sans-serif',
          fontSize: 11,
          color: 'rgba(30,20,18,0.25)',
          textDecoration: 'none',
          letterSpacing: '0.06em',
          whiteSpace: 'nowrap',
        }}
      >
        ← Concept by Make It Media
      </Link>
    </nav>
  )
}
