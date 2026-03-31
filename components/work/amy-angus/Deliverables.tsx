'use client'

import { motion } from 'framer-motion'

const deliverables = [
  {
    num: '01',
    title: 'Custom website build',
    desc: '5-page site built from scratch with custom animations. No templates, no shared aesthetic with any other site.',
  },
  {
    num: '02',
    title: 'Brand new visual identity',
    desc: 'Colour palette, typography, and visual language developed from scratch to reflect Amy\'s clinical expertise and warm, approachable practice style.',
  },
  {
    num: '03',
    title: 'Professional copywriting',
    desc: 'Every word on the site written by Make It Media — using naturopathic clinical background to write copy that speaks your patients\' language and converts.',
  },
  {
    num: '04',
    title: 'Simple Clinic integration',
    desc: 'Online booking linked directly to Amy\'s Simple Clinic account. Patients can book, complete intake forms, and manage appointments without Amy\'s manual involvement.',
  },
  {
    num: '05',
    title: 'SEO foundations',
    desc: 'On-page SEO across all pages — meta titles, descriptions, semantic HTML structure, image alt text, and Google Search Console setup and verification.',
  },
  {
    num: '06',
    title: 'GA4 + analytics setup',
    desc: 'Google Analytics 4 and Microsoft Clarity installed and verified. Amy can see exactly where patients come from, which pages they visit, and where they drop off.',
  },
]

export default function Deliverables() {
  return (
    <section style={{ padding: '100px 0', background: 'var(--cream)' }}>
      <div className="max-w-container mx-auto px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-terra mb-3">
            What was delivered
          </p>
          <h2
            className="font-display font-normal text-ink mb-14"
            style={{ fontSize: 'clamp(32px, 3.5vw, 48px)', lineHeight: 1.12 }}
          >
            Every piece of the <em className="italic text-sage-dark">puzzle</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {deliverables.map((d, i) => (
            <motion.div
              key={d.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.08 }}
              className="bg-white rounded-2xl transition-all duration-200 hover:-translate-y-[3px] hover:shadow-[0_12px_32px_rgba(42,37,32,0.07)]"
              style={{ border: '1px solid var(--border)', padding: 28 }}
            >
              <div className="font-display text-[36px] font-light leading-none mb-3" style={{ color: 'var(--sage-light)' }}>
                {d.num}
              </div>
              <div className="font-display text-[20px] font-medium text-ink mb-2">
                {d.title}
              </div>
              <div style={{ fontSize: 13, color: 'var(--ink-light)', fontWeight: 300, lineHeight: 1.65 }}>
                {d.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
