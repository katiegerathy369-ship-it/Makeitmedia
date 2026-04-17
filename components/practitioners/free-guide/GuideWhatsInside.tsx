'use client'

import { motion } from 'framer-motion'

const mistakes = [
  {
    number: '01',
    title: 'Your homepage doesn\'t tell patients who you help in 5 seconds',
    body: 'Generic openers, soft-focus stock photos, and "holistic" headlines that say nothing. Why patients close the tab in under 3 seconds — and the exact swap to make.',
  },
  {
    number: '02',
    title: 'Your site is a wall of text. The eye has nowhere to land',
    body: 'How visual hierarchy decides whether a fatigued, overwhelmed patient stays on your site or bounces — and the 5 layout rules that make any page scannable.',
  },
  {
    number: '03',
    title: 'Your services page is vague. No one knows what things cost',
    body: 'Why "book a consult to discuss pricing" is the #1 reason patients abandon practitioner sites — and what to display next to every service to convert.',
  },
  {
    number: '04',
    title: 'You have no clear next step. No booking button, no lead magnet',
    body: 'Why 95% of website visitors aren\'t ready to book today — and how a single lead magnet captures the other 75% you\'re currently losing forever.',
  },
  {
    number: '05',
    title: 'You\'re using clinical language when patients search in plain English',
    body: 'Patients don\'t Google "HPA-axis dysregulation." They Google "always tired for no reason." How to rewrite your pages to match how patients actually think.',
  },
]

export default function GuideWhatsInside() {
  return (
    <section
      className="py-[120px] relative overflow-hidden"
      style={{ background: 'var(--warm-white)' }}
    >
      <div className="max-w-container mx-auto px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-[680px] mb-16"
        >
          <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-terra mb-4">
            What's inside
          </p>
          <h2
            className="font-display font-normal leading-[1.1] text-ink mb-5"
            style={{ fontSize: 'clamp(36px, 4vw, 52px)' }}
          >
            Five fixes. <em className="italic text-sage-dark">One weekend.</em>
          </h2>
          <p className="text-[16px] text-ink-mid font-light leading-[1.8]">
            Each mistake comes with what it looks like, why it costs you patients, and the exact steps to fix it. Real examples, no theory.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {mistakes.map((m, i) => (
            <motion.article
              key={m.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.06 }}
              className="rounded-[20px] p-8 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(74,110,87,0.18)]"
              style={{ border: '1px solid var(--border-sage)' }}
            >
              <div className="flex items-start gap-5">
                <span
                  className="font-display font-light flex-shrink-0 leading-none"
                  style={{
                    fontSize: '60px',
                    color: 'var(--sage-light)',
                    fontStyle: 'italic',
                  }}
                >
                  {m.number}
                </span>
                <div className="pt-2">
                  <h3 className="font-display text-[22px] leading-[1.25] text-ink mb-3">
                    {m.title}
                  </h3>
                  <p className="text-[14px] text-ink-mid font-light leading-[1.75]">
                    {m.body}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
          className="text-center mt-14"
        >
          <a
            href="#guide-form"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 text-sage-dark text-[14px] font-medium no-underline hover:text-ink transition-colors group"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:-translate-y-0.5 transition-transform">
              <path d="M7 12V2m0 0L3 6m4-4l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Get the full guide
          </a>
        </motion.div>
      </div>
    </section>
  )
}
