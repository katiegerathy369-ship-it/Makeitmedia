'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const INK = '#1a1a0e'

function Blueberry({ size = 44 }: { size?: number }) {
  return (
    <svg width={size} height={size * 1.2} viewBox="0 0 44 53" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 2 C20 8 21 12 22 14" stroke="#5a6e3a" strokeWidth="2.5" strokeLinecap="round" />
      <ellipse cx="25" cy="6" rx="5" ry="2.5" fill="#7a9a52" transform="rotate(-25 25 6)" />
      <circle cx="22" cy="32" r="18" fill="#4a4fad" stroke={INK} strokeWidth="2.5" />
      <ellipse cx="22" cy="38" rx="14" ry="10" fill="rgba(30,30,80,0.2)" />
      <ellipse cx="16" cy="26" rx="5" ry="4" fill="rgba(255,255,255,0.25)" transform="rotate(-20 16 26)" />
      <path d="M16 16 L18 19 M22 14 L22 18 M28 16 L26 19" stroke="#3a3f7a" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

const berries = [
  { startX: '10%', size: 46 },
  { startX: '82%', size: 36 },
  { startX: '48%', size: 40 },
]

export default function FallingBlueberries() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Berry 1 — starts left, drifts right then left then right (wide lazy S-curve)
  const y0 = useTransform(scrollYProgress, [0, 0.12, 1], [0, 0, 4500])
  const x0 = useTransform(scrollYProgress,
    [0.12, 0.25, 0.4, 0.55, 0.7, 0.85, 1],
    [0,    80,   -40,  120,  -20,  90,   140]
  )
  const r0 = useTransform(scrollYProgress,
    [0.12, 0.3, 0.5, 0.7, 0.9, 1],
    [0,    35,  -20, 45,  -10, 25]
  )
  const o0 = useTransform(scrollYProgress, [0.08, 0.16, 0.88, 0.96], [0, 1, 1, 0])

  // Berry 2 — starts right, drifts left then right (opposite sway)
  const y1 = useTransform(scrollYProgress, [0, 0.2, 1], [0, 0, 5200])
  const x1 = useTransform(scrollYProgress,
    [0.2, 0.35, 0.5, 0.65, 0.8, 0.95, 1],
    [0,   -100, 50,  -120, 30,  -70,  -110]
  )
  const r1 = useTransform(scrollYProgress,
    [0.2, 0.4, 0.6, 0.8, 1],
    [0,   -40, 30,  -50, -20]
  )
  const o1 = useTransform(scrollYProgress, [0.15, 0.25, 0.9, 0.98], [0, 1, 1, 0])

  // Berry 3 — center, gentle wobble
  const y2 = useTransform(scrollYProgress, [0, 0.16, 1], [0, 0, 4800])
  const x2 = useTransform(scrollYProgress,
    [0.16, 0.3, 0.45, 0.6, 0.75, 0.9, 1],
    [0,    60,  -70,  90,  -50,  70,  30]
  )
  const r2 = useTransform(scrollYProgress,
    [0.16, 0.35, 0.55, 0.75, 0.95, 1],
    [0,    25,   -35,  40,   -15,  20]
  )
  const o2 = useTransform(scrollYProgress, [0.1, 0.2, 0.85, 0.94], [0, 1, 1, 0])

  const transforms = [
    { y: y0, x: x0, rotate: r0, opacity: o0 },
    { y: y1, x: x1, rotate: r1, opacity: o1 },
    { y: y2, x: x2, rotate: r2, opacity: o2 },
  ]

  return (
    <div ref={ref} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 50 }}>
      {berries.map((berry, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            top: 0,
            left: berry.startX,
            y: transforms[i].y,
            x: transforms[i].x,
            rotate: transforms[i].rotate,
            opacity: transforms[i].opacity,
            filter: `drop-shadow(3px 3px 0 ${INK})`,
          }}
        >
          <Blueberry size={berry.size} />
        </motion.div>
      ))}
    </div>
  )
}
