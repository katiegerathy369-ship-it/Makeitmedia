'use client'

import { motion } from 'framer-motion'

const credentials = [
  { icon: '🌿', text: 'Bachelor of Health Science (Naturopathy) — 6 years' },
  { icon: '🎨', text: 'Graphic design, UX & UI — built for how patients actually browse' },
  { icon: '📱', text: '80K+ wellness content creator (TikTok)' },
  { icon: '✦', text: 'Canva-first design process — you approve the design before anything gets built' },
  { icon: '⚡', text: 'AI development tools — faster builds, lower cost, no shortcuts' },
]

export default function PractitionersAbout() {
  return (
    <section className="py-[120px] relative overflow-hidden" style={{ background: 'var(--cream)' }}>
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
          <path d="M140 360 C140 360 140 40 140 10" stroke="#4a6e57" strokeWidth="3" strokeLinecap="round"/>
          <path d="M140 280 C100 260 60 240 50 200 C90 195 130 220 140 280Z" fill="#4a6e57"/>
          <path d="M140 210 C180 185 220 170 230 130 C190 128 148 155 140 210Z" fill="#4a6e57"/>
          <path d="M140 140 C110 115 95 80 105 50 C130 60 148 95 140 140Z" fill="#4a6e57"/>
        </svg>
      </div>

      <div className="max-w-container mx-auto px-12 relative" style={{ zIndex: 1 }}>
        <div className="max-w-[720px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-terra mb-4">
              Why me
            </p>
            <h2
              className="font-display font-normal leading-[1.1] text-ink mb-0"
              style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}
            >
              I'm one of <em className="italic text-sage-dark">you</em>
            </h2>

            <div className="mt-6 space-y-5">
              <p className="text-[16px] text-ink-mid font-light leading-[1.8]">
                I spent six years studying naturopathy, graduated, and went straight into clinical practice. I loved the work. I didn't love running a practice with no marketing support and a website I kept putting off. Sound familiar?
              </p>
              <p className="text-[16px] text-ink-mid font-light leading-[1.8]">
                I already had a background in graphic design and a sharp eye for UX. I knew what practitioners needed because I'd needed it myself. So I built it.{' '}
                <strong className="font-medium text-ink">
                  I design everything in Canva first — you see exactly what your site will look like before a single line of code is written.
                </strong>
                {' '}Once you're happy, I build it. No surprises.
              </p>
              <p className="text-[16px] text-ink-mid font-light leading-[1.8]">
                I use AI tools to write cleaner code faster and research what your ideal patients are actually searching for.{' '}
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
                      background: 'var(--sage-pale)',
                      border: '1px solid var(--border-sage)',
                    }}
                  >
                    {cred.icon}
                  </span>
                  {cred.text}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
