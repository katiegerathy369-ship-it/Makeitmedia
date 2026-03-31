interface LogoProps {
  width?: number
}

export default function Logo({ width = 200 }: LogoProps) {
  const scale = width / 200

  // Mark occupies left ~36px (of 200), divider + gaps ~26px, text fills the rest
  const markW = Math.round(36 * scale)
  const markH = Math.round(48 * scale)
  const dividerH = Math.round(30 * scale)
  const fontSize = Math.round(17 * scale)
  const gap = Math.round(11 * scale)

  return (
    <div
      className="flex items-center flex-shrink-0"
      style={{ gap, height: markH, lineHeight: 1 }}
    >
      {/* ── Botanical mark ── */}
      <svg
        width={markW}
        height={markH}
        viewBox="0 0 36 48"
        fill="none"
        aria-hidden="true"
      >
        {/* Circle */}
        <circle cx="18" cy="21" r="13" stroke="#7a9e87" strokeWidth="1.3" />
        {/* Stem — extends above and below the circle */}
        <line x1="18" y1="1" x2="18" y2="47" stroke="#4a6e57" strokeWidth="1.2" />
        {/* Left leaf — grows from stem center, curves upper-left */}
        <path
          d="M18,24 C13,21 8,15 11,10 C13,7 18,12 18,19 Z"
          fill="#7a9e87"
        />
        {/* Right leaf — mirror */}
        <path
          d="M18,24 C23,21 28,15 25,10 C23,7 18,12 18,19 Z"
          fill="#7a9e87"
        />
      </svg>

      {/* ── Vertical divider ── */}
      <div
        aria-hidden="true"
        style={{
          width: 1,
          height: dividerH,
          background: 'rgba(42,37,32,0.18)',
          flexShrink: 0,
        }}
      />

      {/* ── Wordmark ── */}
      <div className="flex flex-col" style={{ gap: Math.round(3 * scale) }}>
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize,
            fontWeight: 400,
            color: '#2a2520',
            letterSpacing: '0.01em',
            lineHeight: 1,
          }}
        >
          make it
        </span>
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize,
            fontWeight: 400,
            fontStyle: 'italic',
            color: '#4a6e57',
            letterSpacing: '0.01em',
            lineHeight: 1,
          }}
        >
          media
        </span>
      </div>
    </div>
  )
}
