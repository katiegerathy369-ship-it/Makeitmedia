'use client'

import { motion } from 'framer-motion'

const deliverables = [
  {
    num: '01',
    title: 'Custom-coded 5-page site',
    desc: 'Home, About, Services, Blog, Contact. Custom-coded in Next.js 14, not a template, not Squarespace. Built for performance, SEO, and future-proof scalability.',
  },
  {
    num: '02',
    title: 'Full blog system',
    desc: 'Dynamic routing, long-form articles, and SEO-optimised slugs ready to scale content marketing. Built to grow with the practice.',
  },
  {
    num: '03',
    title: 'Editorial design system',
    desc: 'Bespoke brand palette (emerald, magenta, sage, taupe, cream). Cormorant Garamond + DM Sans typography pairing. Magazine-style layouts with dual-image composites and layered scroll animations.',
  },
  {
    num: '04',
    title: 'Conversion architecture',
    desc: 'Services page with category cards and clear pathways from symptom to consultation. Google Reviews carousel and testimonials pulling social proof into the conversion flow. Every page drives toward booking.',
  },
  {
    num: '05',
    title: 'Simple Clinic + Netlify Forms',
    desc: 'Seamless consult scheduling via Simple Clinic. Branded contact form with Netlify Forms integration. No third-party clutter, no spam.',
  },
  {
    num: '06',
    title: 'SEO + analytics from day one',
    desc: 'Sitemap, meta optimisation, semantic HTML, and image alt text for organic discoverability. GA4 + Microsoft Clarity wired in for analytics and heatmap tracking.',
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
