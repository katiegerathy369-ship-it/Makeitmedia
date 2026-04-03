'use client'

import { motion } from 'framer-motion'

const otherWork = [
  {
    name: "Walker's Landing Georgia",
    client: 'Austplan Management',
    type: 'Real Estate · Georgia, USA',
    desc: 'Sales landing page for a 159-townhome development. Custom 3D renders, walkthrough video, construction timelapse, interactive lot map, and email automations.',
    pills: ['Multilingual (4 languages)', '3D renders & video', 'Interactive lot map', 'ROI calculator', 'Email automations'],
    href: 'https://walkerslandinggeorgia.com/',
    status: 'live' as const,
  },
  {
    name: 'Position Ready Finance',
    client: 'Position Ready',
    type: 'Mortgage Broker · Australia',
    desc: 'Full website rebuild for a mortgage broker. Cal.com booking integration, clean conversion-focused layout, and SEO foundations.',
    pills: ['Full rebuild', 'Booking integration', 'SEO foundations', 'Conversion-focused'],
    href: 'https://positionreadyfinance.com.au/',
    status: 'live' as const,
  },
  {
    name: 'Prestige Mobile Car & Aircraft Detailing',
    client: 'Prestige Detailing',
    type: 'Car & Aircraft Detailing · Australia',
    desc: 'Complete website rebuild for a mobile detailing business covering cars and aircraft. Currently in progress.',
    pills: ['Full rebuild', 'Service pages', 'Mobile-first'],
    href: null,
    status: 'in-progress' as const,
  },
]

export default function OtherWorkStrip() {
  return (
    <section
      className="px-5 md:px-12 py-16 md:py-20"
      style={{
        background: 'var(--warm-white)',
      }}
    >
      <div className="max-w-container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="flex items-center gap-4 mb-10">
            <span className="text-[11px] font-medium tracking-[0.1em] uppercase text-ink-light whitespace-nowrap">
              Work beyond health
            </span>
            <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherWork.map((project, i) => {
            const card = (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.08 }}
                className="group"
              >
                <div
                  className="bg-white rounded-[16px] p-7 h-full flex flex-col transition-all duration-200 hover:-translate-y-[3px] hover:shadow-[0_12px_32px_rgba(42,37,32,0.07)]"
                  style={{ border: '1px solid var(--border)' }}
                >
                  {/* Status + type */}
                  <div className="flex items-center gap-2 mb-4 flex-wrap">
                    <span
                      className={`text-[11px] font-medium tracking-[0.07em] uppercase px-[11px] py-1 rounded-full ${
                        project.status === 'live'
                          ? 'bg-sage-pale text-sage-dark border border-sage-light'
                          : 'bg-terra-pale text-terra border border-terra-light'
                      }`}
                    >
                      {project.status === 'live' ? '✦ Live site' : 'In progress'}
                    </span>
                  </div>

                  {/* Name */}
                  <div className="font-display text-[20px] font-medium text-ink leading-[1.2] mb-1">
                    {project.name}
                  </div>

                  {/* Type */}
                  <div className="text-[13px] text-ink-light font-light leading-[1.5] mb-4">
                    {project.type}
                  </div>

                  {/* Description */}
                  <p className="text-[13px] text-ink-mid font-light leading-[1.7] mb-5">
                    {project.desc}
                  </p>

                  {/* Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-5 flex-1 content-start">
                    {project.pills.map((pill) => (
                      <span
                        key={pill}
                        className="text-[11px] text-ink-mid bg-warm-white border border-[rgba(122,158,135,0.2)] px-2.5 py-1 rounded-full"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  {project.href ? (
                    <span className="inline-flex items-center gap-[5px] text-[13px] font-medium text-sage-dark border-b border-sage-light pb-px group-hover:text-ink group-hover:border-ink transition-colors duration-200">
                      View live site
                      <svg width="13" height="13" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-[3px] transition-transform duration-200">
                        <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  ) : (
                    <span className="text-[13px] text-ink-light font-light italic">
                      Coming soon
                    </span>
                  )}
                </div>
              </motion.div>
            )

            return project.href ? (
              <a
                key={project.name}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline text-inherit block"
              >
                {card}
              </a>
            ) : (
              card
            )
          })}
        </div>
      </div>
    </section>
  )
}
