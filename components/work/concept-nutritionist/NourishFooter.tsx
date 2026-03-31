const INK = '#1a1a0e'
const PERIWINKLE_DARK = '#4a4fad'
const LEMON = '#ffebae'

export default function NourishFooter() {
  return (
    <footer style={{ background: LEMON }}>
      {/* Footer content */}
      <div style={{ padding: '28px 52px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' }}>
        <a href="#home" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: '42px', fontWeight: 700, fontStyle: 'italic', color: PERIWINKLE_DARK, textDecoration: 'none', letterSpacing: '-0.02em', lineHeight: 1 }}>
          Nourish & Co.
        </a>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
          <p style={{ fontFamily: 'var(--font-dm-sans-nourish), system-ui, sans-serif', fontSize: '12px', color: PERIWINKLE_DARK, fontWeight: 300, opacity: 0.6, margin: 0 }}>
            © 2026 Nourish & Co. All rights reserved.
          </p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-dm-sans-nourish), system-ui, sans-serif', fontSize: '11px', color: PERIWINKLE_DARK, fontWeight: 300, opacity: 0.5, letterSpacing: '0.04em' }}>
            <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: PERIWINKLE_DARK }} />
            Site by Make It Media
          </div>
        </div>
        <div style={{ display: 'flex', gap: '24px' }}>
          {['Privacy', 'Instagram', 'TikTok'].map((link) => (
            <a key={link} href="#" style={{ fontFamily: 'var(--font-dm-sans-nourish), system-ui, sans-serif', color: PERIWINKLE_DARK, textDecoration: 'none', fontSize: '12px', fontWeight: 500 }}>
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
