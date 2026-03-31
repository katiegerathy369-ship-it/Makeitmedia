'use client'

import Link from 'next/link'

const BASE = '/work/concept-womens-coach'

export default function SheThrivesNav() {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '0 48px',
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

      {/* Nav links + CTA */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
        {[
          { label: 'About', href: `${BASE}/about` },
          { label: 'Work with me', href: `${BASE}/work-with-me` },
          { label: 'Contact', href: `${BASE}/contact` },
        ].map((link) => (
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
            textTransform: 'uppercase' as const,
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

      {/* Back to portfolio — subtle */}
      <Link
        href="/work"
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
          whiteSpace: 'nowrap' as const,
        }}
      >
        ← Concept by Make It Media
      </Link>
    </nav>
  )
}
