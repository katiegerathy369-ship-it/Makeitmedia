'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const INK = '#1a1a0e'
const PERIWINKLE = '#a7b5fc'
const PERIWINKLE_DARK = '#4a4fad'
const LEMON = '#ffebae'

export default function NourishNav() {
  return (
    <nav style={{
      background: PERIWINKLE_DARK,
      padding: '0 52px', height: '58px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      position: 'sticky', top: 0, zIndex: 100,
      borderBottom: `3px solid ${INK}`,
    }}>
      <motion.a
        href="#home"
        style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: '20px', fontWeight: 700, fontStyle: 'italic', color: LEMON, textDecoration: 'none', letterSpacing: '-0.01em' }}
        whileHover={{ y: -3, transition: { type: 'spring', stiffness: 500, damping: 15 } }}
      >
        Nourish & Co.
      </motion.a>

      <ul style={{ display: 'flex', alignItems: 'center', gap: '32px', listStyle: 'none', margin: 0, padding: 0 }}>
        {[
          { label: 'About', href: '#about' },
          { label: 'Services', href: '#services' },
          { label: 'How it works', href: '#process' },
        ].map((item) => (
          <li key={item.label}>
            <a href={item.href} style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontFamily: 'var(--font-dm-sans-nourish), system-ui, sans-serif' }}>
              {item.label}
            </a>
          </li>
        ))}
        <li>
          <a href="#contact" style={{ background: LEMON, color: INK, padding: '8px 22px', borderRadius: '4px', fontFamily: 'var(--font-dm-sans-nourish), system-ui, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', border: `2px solid ${INK}`, boxShadow: `3px 3px 0 ${INK}`, display: 'inline-block' }}>
            Book now
          </a>
        </li>
      </ul>

      {/* Back to portfolio */}
      <Link href="/work" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontFamily: 'var(--font-dm-sans-nourish), system-ui, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.45)', textDecoration: 'none', letterSpacing: '0.06em', whiteSpace: 'nowrap' }}>
        ← Concept by Make It Media
      </Link>
    </nav>
  )
}
