'use client'

import { motion } from 'framer-motion'

const startupPrices = [
  { tier: 'Presence', desc: 'Custom 6-page practice website', was: '$2,200', now: '$1,760' },
  { tier: 'Visibility', desc: 'Website + 30-day launch', was: '$3,200', now: '$2,560' },
  { tier: 'Growth retainer', desc: 'Ongoing monthly marketing', was: '$997/mo', now: '$798/mo' },
]

const cardVariants = {
  rest: {
    y: 0,
    scale: 1,
    boxShadow: '0 12px 40px rgba(20,20,20,0.06)',
    borderColor: 'rgba(122,158,135,0.25)',
  },
  hover: {
    y: -8,
    scale: 1,
    boxShadow: '0 20px 40px rgba(20,20,20,0.1)',
    borderColor: 'rgba(122,158,135,0.5)',
  },
}

const springTransition = { type: 'spring', stiffness: 300, damping: 20 } as const

export default function PractitionersNewBusiness() {
  return (
    <section id="new-practice" className="py-20" style={{ background: '#f5f2ec' }}>
      <div className="max-w-container mx-auto px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="flex items-center gap-2.5 mb-5">
              <span
                className="inline-flex items-center gap-[7px] text-night text-[11px] font-medium tracking-[0.08em] uppercase px-3 py-[5px] rounded-full"
                style={{ background: '#edf4ef', border: '1px solid #b8d4c0' }}
              >
                ✦ Special offer
              </span>
            </div>

            <h2
              className="font-display font-normal leading-[1.15] text-ink mb-4"
              style={{ fontSize: 'clamp(30px, 3.5vw, 44px)' }}
            >
              New to practice?<br />
              <em className="italic" style={{ color: '#4a6e57' }}>Get your clinic online for less.</em>
            </h2>

            <p className="text-[15px] text-ink-mid font-light leading-[1.75] mb-7">
              Starting a practice is expensive enough without overpaying for a website that doesn't bring in patients. As a fellow health professional, I want to make it easier for new practitioners to launch with a site that works from day one.
            </p>

            <ul className="flex flex-col gap-2.5 mb-8">
              {[
                'Recently graduated or completing clinical hours',
                'New practice (opened within last 12 months)',
                'Solo practitioner or small clinic (1–3 practitioners)',
                'First-time practice website',
              ].map((item) => (
                <li
                  key={item}
                  className="practitioner-qualify-check flex items-center gap-2.5 text-[14px] text-ink-mid font-normal"
                >
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-[13px] text-ink-light font-light leading-[1.6] mt-2">
              Applications are reviewed individually. Not everyone will qualify, and that's intentional. I only take on new practices I can genuinely help.
            </p>
          </motion.div>

          {/* Right: card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            <motion.div
              className="bg-white rounded-[20px] p-9 relative overflow-hidden"
              style={{
                borderWidth: '1px',
                borderStyle: 'solid',
                borderTopWidth: '3px',
                borderTopColor: '#7a9e87',
              }}
              initial="rest"
              animate="rest"
              whileHover="hover"
              variants={cardVariants}
              transition={springTransition}
            >
              <div className="text-[11px] font-medium tracking-[0.1em] uppercase text-ink-light mb-5">
                New practice pricing
              </div>

              {/* Header row */}
              <div
                className="flex items-center gap-3 rounded-lg px-[18px] py-4 mb-4"
                style={{ background: '#edf4ef', border: '1px solid #b8d4c0' }}
              >
                <span className="text-[20px] flex-shrink-0">🌿</span>
                <div>
                  <div className="text-[14px] font-medium text-ink leading-[1.3]">
                    New practice pricing
                  </div>
                  <div className="text-[12px] text-ink-light font-light mt-0.5">
                    20% off all services
                  </div>
                </div>
              </div>

              {/* Pricing rows */}
              <div className="text-[11px] text-ink-light font-medium tracking-[0.12em] uppercase mb-3">
                Prices shown in AUD
              </div>
              <div className="flex flex-col gap-3 mb-5">
                {startupPrices.map((row) => (
                  <div
                    key={row.tier}
                    className="flex items-center justify-between px-4 py-[14px] rounded-lg"
                    style={{ background: '#faf8f4', border: '1px solid var(--border)' }}
                  >
                    <div>
                      <div className="text-[13px] font-medium text-ink">{row.tier}</div>
                      <div className="text-[11px] font-light text-ink-light mt-0.5">{row.desc}</div>
                    </div>
                    <div className="flex items-baseline gap-2 text-right">
                      <span
                        className="text-[13px] text-ink-light font-display"
                        style={{ textDecoration: 'line-through', textDecorationColor: '#b8d4c0' }}
                      >
                        {row.was}
                      </span>
                      <span className="font-display text-[20px] font-medium" style={{ color: '#4a6e57' }}>
                        {row.now}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="text-[12px] text-ink-light font-light leading-[1.6] mb-6 px-[14px] py-3 rounded-lg"
                style={{ background: '#edf4ef', borderLeft: '3px solid #7a9e87' }}
              >
                <strong style={{ color: '#4a6e57' }} className="font-medium">How it works:</strong>{' '}
                Submit an enquiry and mention you're a new practice. I'll ask for brief verification before confirming your discount.
              </div>

              <a
                href="#contact"
                className="w-full flex items-center justify-center gap-2 text-white px-8 py-[15px] rounded-full font-body text-[15px] font-medium tracking-[0.01em] no-underline hover:-translate-y-0.5 transition-all duration-200"
                style={{
                  background: '#2a2520',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#4a6e57' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#2a2520' }}
              >
                Apply for new practice pricing
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
