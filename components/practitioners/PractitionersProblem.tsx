'use client'

import { motion } from 'framer-motion'

const problems = [
  {
    title: "They don't speak your language",
    desc: "Generic agencies write copy about 'services' and 'solutions.' Your patients search for 'naturopath near me' and 'help with hormonal acne.' There's a gap — and it costs you bookings.",
  },
  {
    title: "They don't understand your patients",
    desc: "Your patients are doing their own research. They want evidence, credentials, and a sense of who you are before they book. A generic template doesn't give them any of that.",
  },
  {
    title: "They build for themselves, not for you",
    desc: "Most agencies optimise for what looks good in their portfolio. I optimise for what gets your phone ringing — because I know what it's like to sit in clinic and wait for bookings.",
  },
]

export default function PractitionersProblem() {
  return (
    <section className="py-[100px]" style={{ background: 'var(--sage-pale)' }}>
      <div className="max-w-container mx-auto px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-[600px] mb-16"
        >
          <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-terra mb-4">
            The problem
          </p>
          <h2
            className="font-display font-normal leading-[1.1] text-ink"
            style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}
          >
            Generic agencies don&rsquo;t <em className="italic text-sage-dark">get it</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
              className="bg-white rounded-[20px] p-8"
              style={{ border: '1px solid var(--border-sage)' }}
            >
              <div className="font-display text-[48px] font-light text-sage-light leading-none mb-4">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="font-display text-[20px] font-medium text-ink mb-3 leading-[1.2]">
                {problem.title}
              </h3>
              <p className="text-[14px] text-ink-mid font-light leading-[1.7]">
                {problem.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
