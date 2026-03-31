'use client'

import { motion } from 'framer-motion'

const timelineItems = [
  {
    num: '01',
    title: 'Discovery session',
    desc: 'A 60-minute brand messaging session to understand Amy\'s practice, her ideal patients, what she wanted to be known for, and what wasn\'t working about her old site.',
    tag: 'Week 1',
  },
  {
    num: '02',
    title: 'Copy & strategy',
    desc: 'All 5 pages of copy written using clinical background knowledge and patient search behaviour. Sent to Amy for review — minimal changes needed because the brief was done properly upfront.',
    tag: 'Week 1–2',
  },
  {
    num: '03',
    title: 'Design & build',
    desc: 'Visual identity developed, then full site built in Next.js. Simple Clinic booking connected, all pages built and reviewed with two rounds of revisions.',
    tag: 'Week 2–3',
  },
  {
    num: '04',
    title: 'Launch & handover',
    desc: 'Site deployed to Netlify, domain connected, GA4 and Search Console live. Full walkthrough with Amy so she knows how to manage her site going forward.',
    tag: 'Week 3',
  },
]

const techStack = [
  { label: 'Framework', value: 'Next.js 14' },
  { label: 'Styling', value: 'Tailwind CSS' },
  { label: 'Animations', value: 'Framer Motion' },
  { label: 'Bookings', value: 'Simple Clinic' },
  { label: 'Analytics', value: 'GA4 + Clarity' },
  { label: 'Hosting', value: 'Netlify' },
]

export default function CaseStudyProcess() {
  return (
    <section className="relative overflow-hidden" style={{ padding: '100px 0', background: 'var(--sage-dark)' }}>
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          top: -200, right: -200, width: 600, height: 600,
          background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-container mx-auto px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="text-[11px] font-medium tracking-[0.12em] uppercase mb-3" style={{ color: 'var(--sage-light)' }}>
            The process
          </p>
          <h2
            className="font-display font-normal mb-16"
            style={{ fontSize: 'clamp(32px, 3.5vw, 48px)', lineHeight: 1.12, color: '#fff' }}
          >
            How we built it <em className="italic" style={{ color: 'var(--sage-light)' }}>together</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative"
            style={{ paddingLeft: 0 }}
          >
            {/* Vertical line */}
            <div
              className="absolute"
              style={{
                left: 28, top: 0, bottom: 0, width: 1,
                background: 'rgba(184,212,192,0.2)',
              }}
            />

            <div className="flex flex-col">
              {timelineItems.map((item, i) => (
                <div
                  key={item.num}
                  className="grid"
                  style={{
                    gridTemplateColumns: '56px 1fr',
                    gap: 32,
                    paddingBottom: i < timelineItems.length - 1 ? 48 : 0,
                    position: 'relative',
                  }}
                >
                  <div
                    className="font-display flex items-center justify-center"
                    style={{
                      width: 56, height: 56, borderRadius: '50%',
                      background: 'rgba(255,255,255,0.08)',
                      border: '1px solid rgba(184,212,192,0.25)',
                      fontSize: 20, fontWeight: 500, color: 'var(--sage-light)',
                      flexShrink: 0, position: 'relative', zIndex: 1,
                    }}
                  >
                    {item.num}
                  </div>
                  <div style={{ paddingTop: 14 }}>
                    <div className="font-display text-[22px] font-medium text-white mb-2">
                      {item.title}
                    </div>
                    <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', fontWeight: 300, lineHeight: 1.75 }}>
                      {item.desc}
                    </div>
                    <span
                      style={{
                        display: 'inline-block', marginTop: 10,
                        fontSize: 11, fontWeight: 500, letterSpacing: '0.08em',
                        textTransform: 'uppercase', color: 'var(--sage-light)',
                        background: 'rgba(184,212,192,0.1)',
                        border: '1px solid rgba(184,212,192,0.2)',
                        padding: '4px 12px', borderRadius: 100,
                      }}
                    >
                      {item.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tech stack */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            style={{ paddingTop: 16 }}
          >
            <div
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(184,212,192,0.15)',
                borderRadius: 20, padding: 36,
              }}
            >
              <p
                className="font-display font-normal tracking-[0.08em] uppercase mb-5"
                style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.08em' }}
              >
                Tech stack
              </p>
              <div className="flex flex-col gap-3">
                {techStack.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between"
                    style={{
                      padding: '12px 16px',
                      background: 'rgba(255,255,255,0.04)',
                      borderRadius: 8,
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', fontWeight: 400 }}>{row.label}</span>
                    <span style={{ fontSize: 13, color: 'var(--sage-light)', fontWeight: 500 }}>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
