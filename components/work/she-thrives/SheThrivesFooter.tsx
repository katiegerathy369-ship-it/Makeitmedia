'use client'

import Link from 'next/link'

const BASE = '/work/concept-womens-coach'

export default function SheThrivesFooter() {
  return (
    <footer style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{
        background: '#2a2f28',
        padding: 'clamp(48px, 6vw, 72px) clamp(20px, 5vw, 48px) clamp(32px, 4vw, 48px)',
      }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          {/* Logo */}
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <span style={{
              fontFamily: "var(--font-display), 'Lora', Georgia, serif",
              fontSize: 20, fontWeight: 400, fontStyle: 'italic',
              color: 'rgba(255, 252, 246, 0.85)',
            }}>
              She Thrives Co.
            </span>
          </div>

          {/* Nav links */}
          <div style={{
            display: 'flex', flexWrap: 'wrap', justifyContent: 'center',
            gap: 'clamp(20px, 3vw, 40px)', marginBottom: 40,
          }}>
            {[
              { label: 'Privacy Policy', href: `${BASE}` },
              { label: 'Terms', href: `${BASE}` },
              { label: 'Contact Us', href: `${BASE}/contact` },
              { label: 'Instagram', href: `${BASE}` },
              { label: 'Pinterest', href: `${BASE}` },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  fontFamily: "var(--font-body), 'Raleway', sans-serif",
                  fontSize: 12, fontWeight: 400,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: 'rgba(255, 252, 246, 0.35)',
                  textDecoration: 'none',
                  transition: 'letter-spacing 0.3s ease',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Bottom line */}
          <div style={{ textAlign: 'center' }}>
            <span style={{
              fontFamily: "var(--font-body), 'Raleway', sans-serif",
              fontSize: 11, fontWeight: 400,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: 'rgba(255, 252, 246, 0.2)',
            }}>
              &copy; {new Date().getFullYear()} She Thrives Co. Return to yourself.
            </span>
          </div>

          {/* Make It Media credit */}
          <div style={{ textAlign: 'center', marginTop: 16 }}>
            <Link
              href="/work"
              style={{
                fontFamily: "var(--font-body), 'Raleway', sans-serif",
                fontSize: 10, color: 'rgba(255, 252, 246, 0.12)',
                textDecoration: 'none', letterSpacing: '0.06em',
              }}
            >
              Site by Make It Media
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
