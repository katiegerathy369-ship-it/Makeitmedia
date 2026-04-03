'use client'

import Link from 'next/link'

const BASE = '/work/concept-womens-coach'

const navLinks = [
  { label: 'Home', href: BASE },
  { label: 'About', href: `${BASE}/about` },
  { label: 'Work with me', href: `${BASE}/work-with-me` },
  { label: 'Contact', href: `${BASE}/contact` },
]

export default function SheThrivesFooter() {
  return (
    <footer
      style={{
        background: 'var(--ink)',
        color: 'var(--blush)',
        padding: '72px clamp(20px, 4vw, 48px) 40px',
      }}
    >
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        {/* Top row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: 48,
          }}
        >
          {/* Logo */}
          <Link
            href={BASE}
            style={{
              fontFamily: 'var(--font-display), Georgia, serif',
              fontSize: 24,
              color: 'var(--blush)',
              textDecoration: 'none',
            }}
          >
            She Thrives Co.
          </Link>

          {/* Nav */}
          <div style={{ display: 'flex', gap: 32 }}>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  fontFamily: 'var(--font-body), system-ui, sans-serif',
                  fontSize: 13,
                  color: 'rgba(242,212,204,0.6)',
                  textDecoration: 'none',
                  letterSpacing: '0.03em',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background: 'rgba(242,212,204,0.12)',
            marginBottom: 24,
          }}
        />

        {/* Bottom row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-body), system-ui, sans-serif',
              fontSize: 12,
              color: 'rgba(242,212,204,0.4)',
              fontWeight: 300,
            }}
          >
            © 2026 She Thrives Co. All rights reserved.
          </span>

          <span
            style={{
              fontFamily: 'var(--font-body), system-ui, sans-serif',
              fontSize: 11,
              color: 'rgba(242,212,204,0.35)',
              fontWeight: 300,
              letterSpacing: '0.04em',
            }}
          >
            Site by{' '}
            <Link
              href="/"
              style={{
                color: 'rgba(242,212,204,0.5)',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(242,212,204,0.15)',
              }}
            >
              Make It Media
            </Link>
          </span>
        </div>
      </div>
    </footer>
  )
}
