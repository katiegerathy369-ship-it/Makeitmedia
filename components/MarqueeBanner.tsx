'use client'

const items = [
  'Custom Website Design', 'Professional Copywriting', 'Brand Messaging',
  'SEO Foundations', 'Booking Integration', 'Built for Small Business',
  'Conversion-Focused', '2–3 Week Delivery', 'Email Marketing',
  'Mobile Optimised', 'Instagram Content', 'Analytics Setup',
  'Canva-First Design Process', '100% Custom Design', 'Lead Magnet Design',
  'All Industries Welcome'
]

const doubled = [...items, ...items]

export default function MarqueeBanner() {
  return (
    <div style={{ width: '100%', overflow: 'hidden', background: '#141414', height: '52px', display: 'flex', alignItems: 'center', marginTop: '40px' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        animation: 'marquee 90s linear infinite',
        whiteSpace: 'nowrap',
        willChange: 'transform',
      }}>
        {doubled.map((item, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center' }}>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: '17px',
              fontWeight: 400,
              letterSpacing: '0.08em',
              color: 'rgba(255,255,255,0.9)',
              textTransform: 'uppercase',
            }}>{item}</span>
            <span style={{
              color: '#c9a84c',
              fontSize: '9px',
              margin: '0 28px',
              opacity: 0.8,
            }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
