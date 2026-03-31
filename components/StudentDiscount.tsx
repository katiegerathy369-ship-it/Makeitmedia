'use client'

import { motion } from 'framer-motion'

const studentPrices = [
  { tier: 'Presence', desc: 'Custom 6-page website', was: '$2,200', now: '$1,760' },
  { tier: 'Visibility', desc: 'Website + 30-day launch', was: '$3,200', now: '$2,560' },
  { tier: 'Growth retainer', desc: 'Ongoing monthly marketing', was: '$997/mo', now: '$798/mo' },
]

const cardVariants = {
  rest: {
    y: 0,
    scale: 1,
    boxShadow: '0 12px 40px rgba(42,37,32,0.06)',
    borderColor: 'rgba(122,158,135,0.2)',
  },
  hover: {
    y: -8,
    scale: 1,
    boxShadow: '0 20px 40px rgba(74,110,87,0.12)',
    borderColor: 'rgba(122,158,135,0.4)',
  },
}

const springTransition = { type: 'spring', stiffness: 300, damping: 20 } as const

export default function StudentDiscount() {
  return (
    <section id="student" className="py-20" style={{ background: 'var(--warm-white)' }}>
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
              <span className="inline-flex items-center gap-[7px] bg-sage-pale border border-sage-light text-sage-dark text-[11px] font-medium tracking-[0.08em] uppercase px-3 py-[5px] rounded-full">
                ✦ Special offer
              </span>
            </div>

            <h2
              className="font-display font-normal leading-[1.15] text-ink mb-4"
              style={{ fontSize: 'clamp(30px, 3.5vw, 44px)' }}
            >
              Just starting out?<br />
              <em className="italic text-sage-dark">You deserve a head start.</em>
            </h2>

            <p className="text-[15px] text-ink-mid font-light leading-[1.75] mb-7">
              Building a practice from scratch is hard enough without worrying about whether your website and marketing are doing their job. I've been there — and I want to make it easier for the next generation of practitioners to start strong.
            </p>

            <ul className="flex flex-col gap-2.5 mb-8">
              {[
                'Currently enrolled in a health science degree',
                'Graduated within the last 12 months',
                'Newly registered practitioner (0–12 months)',
                'Health coaches in their first year of practice',
              ].map((item) => (
                <li
                  key={item}
                  className="qualify-check flex items-center gap-2.5 text-[14px] text-ink-mid font-normal"
                >
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-[13px] text-ink-light font-light leading-[1.6] mt-2">
              Applications are reviewed individually — not everyone will qualify, and that's intentional. I only take on students and new grads I can genuinely help.
            </p>
          </motion.div>

          {/* Right — card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            <motion.div
              className="student-card-accent bg-white rounded-[20px] p-9 relative overflow-hidden"
              style={{ borderWidth: '1px', borderStyle: 'solid' }}
              initial="rest"
              animate="rest"
              whileHover="hover"
              variants={cardVariants}
              transition={springTransition}
            >
              <div className="text-[11px] font-medium tracking-[0.1em] uppercase text-ink-light mb-5">
                Student &amp; new grad pricing
              </div>

              {/* Header row */}
              <div
                className="flex items-center gap-3 rounded-lg px-[18px] py-4 mb-4"
                style={{ background: 'var(--sage-pale)', border: '1px solid var(--sage)' }}
              >
                <span className="text-[20px] flex-shrink-0">🎓</span>
                <div>
                  <div className="text-[14px] font-medium text-ink leading-[1.3]">
                    Student &amp; new grad pricing
                  </div>
                  <div className="text-[12px] text-ink-light font-light mt-0.5">
                    20% off all services
                  </div>
                </div>
              </div>

              {/* Pricing rows */}
              <div className="flex flex-col gap-3 mb-5">
                {studentPrices.map((row) => (
                  <div
                    key={row.tier}
                    className="flex items-center justify-between px-4 py-[14px] bg-warm-white rounded-lg"
                    style={{ border: '1px solid var(--border)' }}
                  >
                    <div>
                      <div className="text-[13px] font-medium text-ink">{row.tier}</div>
                      <div className="text-[11px] font-light text-ink-light mt-0.5">{row.desc}</div>
                    </div>
                    <div className="flex items-baseline gap-2 text-right">
                      <span
                        className="text-[13px] text-ink-light font-display"
                        style={{ textDecoration: 'line-through', textDecorationColor: 'var(--terra-light)' }}
                      >
                        {row.was}
                      </span>
                      <span className="font-display text-[20px] font-medium text-sage-dark">
                        {row.now}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="text-[12px] text-ink-light font-light leading-[1.6] mb-6 px-[14px] py-3 rounded-lg"
                style={{ background: 'var(--sage-pale)', borderLeft: '3px solid var(--sage)' }}
              >
                <strong className="text-sage-dark font-medium">How it works:</strong>{' '}
                Submit an enquiry and mention you're a student or new grad. I'll ask for brief verification before confirming your discount.
              </div>

              <a
                href="#contact"
                className="w-full flex items-center justify-center gap-2 bg-sage-dark text-white px-8 py-[15px] rounded-full font-body text-[15px] font-medium tracking-[0.01em] no-underline hover:bg-ink hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(42,37,32,0.15)] transition-all duration-200"
              >
                Apply for student pricing
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
