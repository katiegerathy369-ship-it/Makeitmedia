'use client'

import { motion } from 'framer-motion'
import { useParallax } from '@/hooks/useParallax'

const credentials = [
  { icon: '🎨', text: 'Graphic design, UX & UI — built for how people actually browse' },
  { icon: '🌿', text: 'Bachelor of Health Science — I know what it\u2019s like to run a business' },
  { icon: '📱', text: '80K+ content creator (TikTok) — I understand what gets attention' },
  { icon: '✦', text: 'Canva-first design process — you approve the design before anything gets built' },
  { icon: '⚡', text: 'AI development tools — faster builds, lower cost, no shortcuts' },
]

export default function About() {
  const { ref: bgRef, y: bgY } = useParallax(0.12)

  return (
    <section
      ref={bgRef as React.RefObject<HTMLElement>}
      id="about"
      className="py-[120px] relative overflow-hidden"
      style={{ background: 'var(--warm-white)' }}
    >
      <motion.div
        style={{
          y: bgY,
          willChange: 'transform',
          position: 'absolute',
          inset: '-20%',
          background: 'radial-gradient(ellipse at 60% 40%, rgba(201,168,76,0.08) 0%, transparent 60%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Botanical decoration */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: -60,
          top: '50%',
          transform: 'translateY(-50%)',
          width: 280,
          height: 360,
          opacity: 0.06,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <svg width="280" height="360" viewBox="0 0 280 360" fill="none">
          <path d="M140 360 C140 360 140 40 140 10" stroke="#c9a84c" strokeWidth="3" strokeLinecap="round"/>
          <path d="M140 280 C100 260 60 240 50 200 C90 195 130 220 140 280Z" fill="#c9a84c"/>
          <path d="M140 210 C180 185 220 170 230 130 C190 128 148 155 140 210Z" fill="#c9a84c"/>
          <path d="M140 140 C110 115 95 80 105 50 C130 60 148 95 140 140Z" fill="#c9a84c"/>
        </svg>
      </div>
      <div className="max-w-container mx-auto px-12 relative" style={{ zIndex: 1 }}>
        <div className="max-w-[720px] mx-auto">

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-gold mb-4">
              About
            </p>
            <h2
              className="font-display font-normal leading-[1.1] text-ink mb-0"
              style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}
            >
              Built by someone who <em className="italic" style={{ color: '#c9a84c' }}>gets it</em>
            </h2>

            <div className="mt-6 space-y-5">
              <p className="text-[16px] text-ink-mid font-light leading-[1.8]">
                Make It Media is an Australian web design agency that builds websites and marketing systems for small businesses. I started my career in health — studying naturopathy for six years and running my own practice. I know what it's like to be great at what you do but have no idea how to market it.
              </p>
              <p className="text-[16px] text-ink-mid font-light leading-[1.8]">
                I already had a background in graphic design and a sharp eye for UX. I knew what small business owners needed because I'd needed it myself. So I built it.{' '}
                <strong className="font-medium text-ink">
                  I design everything in Canva first — you see exactly what your site will look like before a single line of code is written.
                </strong>
                {' '}Once you're happy, I build it. No surprises.
              </p>
              <p className="text-[16px] text-ink-mid font-light leading-[1.8]">
                I use AI tools to write cleaner code faster and research what your ideal clients are actually searching for.{' '}
                <strong className="font-medium text-ink">
                  Nothing goes live without your sign-off.
                </strong>
                {' '}You get the final say on every word and every design decision.
              </p>
            </div>

            <ul className="flex flex-col gap-[14px] mt-9">
              {credentials.map((cred) => (
                <li key={cred.text} className="flex items-center gap-3 text-[14px] text-ink-mid">
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-[15px] flex-shrink-0"
                    style={{
                      background: 'var(--gold-pale)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    {cred.icon}
                  </span>
                  {cred.text}
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <a
                href="/health-practitioners"
                className="inline-flex items-center gap-2 text-[14px] font-medium text-gold border-b border-gold-light pb-px hover:text-ink hover:border-ink transition-colors duration-200 no-underline"
              >
                Health practitioner? See our dedicated service
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
