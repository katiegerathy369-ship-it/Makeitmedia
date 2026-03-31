'use client'

import { motion } from 'framer-motion'
import { useParallax } from '@/hooks/useParallax'

const credentials = [
  { icon: '🌿', text: 'Bachelor of Health Science (Naturopathy) — 6 years' },
  { icon: '🎨', text: 'Graphic design, UX & UI — built for how people actually browse' },
  { icon: '📱', text: '80K+ wellness content creator (TikTok)' },
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
          background: 'radial-gradient(ellipse at 60% 40%, rgba(184,212,192,0.12) 0%, transparent 60%)',
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
          <path d="M140 360 C140 360 140 40 140 10" stroke="#4a6e57" strokeWidth="3" strokeLinecap="round"/>
          <path d="M140 280 C100 260 60 240 50 200 C90 195 130 220 140 280Z" fill="#4a6e57"/>
          <path d="M140 210 C180 185 220 170 230 130 C190 128 148 155 140 210Z" fill="#4a6e57"/>
          <path d="M140 140 C110 115 95 80 105 50 C130 60 148 95 140 140Z" fill="#4a6e57"/>
        </svg>
      </div>
      <div className="max-w-container mx-auto px-12 relative" style={{ zIndex: 1 }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[100px] items-center">

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative"
          >
            <div
              className="about-img-pattern w-full rounded-[24px] relative overflow-hidden flex flex-col items-center justify-center gap-3"
              style={{
                aspectRatio: '4/5',
                background: 'linear-gradient(145deg, var(--sage-light) 0%, var(--sage-pale) 60%, var(--terra-pale) 100%)',
                border: '1px solid var(--border)',
                fontFamily: 'var(--font-display)',
                fontSize: 22,
                fontStyle: 'italic',
                color: 'var(--sage-dark)',
              }}
            >
              <div style={{ fontSize: 40, opacity: 0.4 }}>✦</div>
              <span>Your photo here</span>
              <span
                className="font-body text-[13px] not-italic font-normal text-ink-light tracking-[0.05em]"
              >
                Kate · Founder, Make It Media
              </span>
            </div>

            {/* Badge */}
            <div
              className="absolute bottom-6 right-[-20px] bg-white rounded-[14px] p-4 max-w-[200px]"
              style={{
                border: '1px solid var(--border)',
                boxShadow: '0 12px 32px rgba(42,37,32,0.08)',
              }}
            >
              <div className="text-[14px] font-medium text-ink mb-1">BHSc (Naturopathy)</div>
              <div className="text-[12px] text-ink-light font-light leading-[1.4]">
                Qualified practitioner turned web designer and marketing specialist
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-terra mb-4">
              About
            </p>
            <h2
              className="font-display font-normal leading-[1.1] text-ink mb-0"
              style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}
            >
              I'm one of <em className="italic text-sage-dark">you</em>
            </h2>

            <div className="mt-6 space-y-5">
              <p className="text-[16px] text-ink-mid font-light leading-[1.8]">
                Make It Media is an Australian web design agency that works exclusively with health practitioners — naturopaths, nutritionists, health coaches, and integrative professionals.
              </p>
              <p className="text-[16px] text-ink-mid font-light leading-[1.8]">
                I spent six years studying naturopathy at university, graduated, and went straight into clinical practice. After a year and a half, I burned out. I loved the work. I didn't love the reality of running a practice with no support, no marketing, and a website I'd been putting off because every time I opened Wix or Squarespace I felt overstimulated and closed the laptop.
              </p>
              <p className="text-[16px] text-ink-mid font-light leading-[1.8]">
                Sound familiar? That's exactly why I started Make It Media. I already had a background in graphic design and a sharp eye for what actually works in UX and UI. I knew what practitioners needed because I'd needed it myself. So I built it.
              </p>
              <p className="text-[16px] text-ink-mid font-light leading-[1.8]">
                Here's how it works: we start with a conversation about your practice, your patients, and what you want your website to do.{' '}
                <strong className="font-medium text-ink">
                  I design everything in Canva first — so you can see exactly what your site will look like before a single line of code is written.
                </strong>
                {' '}Once you're 100% happy with the design, then I build it. No back and forth. No wasted time. No surprises on your invoice.
              </p>
              <p className="text-[16px] text-ink-mid font-light leading-[1.8]">
                I also use AI tools throughout the build — to write cleaner code faster, to research what your ideal patients are actually typing into Google, and to draft copy that's structured to rank. But here's the thing:{' '}
                <strong className="font-medium text-ink">
                  nothing goes live without your sign-off.
                </strong>
                {' '}I use AI to do the heavy lifting. You still get the final say on every word and every design decision.
              </p>
              <p className="text-[16px] text-ink-mid font-light leading-[1.8]">
                I also know exactly what works on today's social media — what stops the scroll, what gets saved, what actually drives bookings. That's why the Visibility and Growth packages exist.
              </p>
            </div>

            <ul className="flex flex-col gap-[14px] mt-9">
              {credentials.map((cred) => (
                <li key={cred.text} className="flex items-center gap-3 text-[14px] text-ink-mid">
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-[15px] flex-shrink-0"
                    style={{
                      background: 'var(--sage-pale)',
                      border: '1px solid var(--border)',
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
